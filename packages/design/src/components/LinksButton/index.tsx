import React, { FC, useState, useEffect, useContext, useCallback } from 'react';
import { Modal, message, Tooltip, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { request } from '@kp-react-visual-design/utils';
import moment from 'moment';
import { debounce } from 'lodash';
import TreeTabs from './tree-tabs';
import VisualDesignContext from '../../VisualDesign/context';
import { baseURL, FORMAT } from '../../consts';
import mapValues from './map-values';
import LinksButtonContext from './context';
import { PickBtn } from './index.styled';

type LinksModalTypes = {
  value?: string;
  onChange?: (value: string) => void;
};

export type TabItemType = {
  name: string;
  subLinkTab: TabItemType[] | null;
  url: string;
};

export type PayloadTypes = {
  page?: number;
  pageSize?: number;
  filter?: string;
  date?: any[];
  beginDate?: string;
  endDate?: string;
};

export interface DataType {
  name: string;
  list: DataType[];
  id: number;
  level: number;
  url: string;
}

const LinksButton: FC<LinksModalTypes> = ({ value, onChange }) => {
  if (typeof value !== 'string') return null;
  const [visible, setVisible] = useState<boolean>(false);
  const [current, setCurrent] = useState<string>('');
  const [linktabs, setLinktabs] = useState<TabItemType[]>([]);
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [loading, changeLoading] = useState<boolean>(false);
  const [payload, setPayload] = useState<PayloadTypes | undefined>();
  const [totalCount, setTotalCount] = useState<number>(0);
  const { headers, queryApi } = useContext(VisualDesignContext);

  const handleClick = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOk = async () => {
    try {
      setVisible(false);
    } catch (err) {
      if (Array.isArray(err)) {
        message.error(err[0].messages[0]);
      }
      Promise.reject(err);
    }
  };

  const handleTabClick = (key: string) => {
    // 切换tab时重置状态
    if (current === key) return;
    if (loading) return message.error('切换过快 ,,Ծ‸Ծ,,');
    setCurrent(key);
    setPayload((mapValues as any)[key]?.payload);
    setDataSource([]);
    setTotalCount(0);
  };

  const handleChange = (values: any) => {
    setPayload({ ...payload, ...values });
  };

  const onChangeValue = (value: string) => {
    onChange?.(value);
  };

  const handlePaginationChange = (page: number, pageSize: number) => {
    setPayload({ ...payload, page, pageSize });
  };

  const handleSerach = () => {
    setPayload({ ...payload, page: 1, pageSize: 20 });
  };

  const handleReset = async () => {
    setPayload((mapValues as any)[current]?.payload);
  };

  const sendRequest = async () => {
    const params = { ...payload };

    // 字段转换（仅针对时间组件）
    delete params.date;
    if (payload?.date && payload?.date?.length) {
      params.beginDate = moment(payload.date[0]).format(FORMAT);
      params.endDate = moment(payload.date[1]).format(FORMAT);
    }

    const {
      code,
      message: msg,
      data,
      // } = await request.post(`${baseURL}/pindao/polymerize/link/${current.replace(/([0-9])./, '')}`, {
    } = await request.post(`${baseURL}/pindao/polymerize/link/${current}`, {
      headers,
      data: params,
    });
    changeLoading(false);
    if (code !== 0) return message.error(msg);
    setDataSource(data.list || data);
    setTotalCount(data.totalCount || 0);
  };

  const debounceCallback = useCallback(
    debounce((callback) => {
      callback();
    }, 300),
    [],
  );

  useEffect(() => {
    if (!visible) return;
    if (!current) return;
    debounceCallback(() => {
      changeLoading(true);
      setDataSource([]);
      sendRequest();
    });
  }, [current, visible, payload?.page, payload?.date, payload?.pageSize, payload?.filter]);

  useEffect(() => {
    // 关闭之后设置tab选中为第一个
    if (!visible && current) {
      setCurrent(linktabs[0]?.url);
      return;
    }
    try {
      const send = async () => {
        const {
          code,
          data,
          message: msg,
        } = await request.post(queryApi.linktabs, {
          headers,
          data: {},
        });
        if (code !== 0) return message.error(msg);
        setLinktabs(data);
        setCurrent(data[0]?.url);
        setPayload((mapValues as any)[data[0]?.url]?.payload);
      };
      send();
    } catch (err) {
      console.log(err);
    }
  }, [visible]);

  return (
    <>
      <Tooltip placement="top" title={value}>
        <PickBtn>
          <a onClick={handleClick}>{value || '请选择链接'}</a>
          &nbsp;
          <RightOutlined />
        </PickBtn>
      </Tooltip>
      <Modal
        title="跳转页面"
        open={visible}
        destroyOnClose
        onCancel={handleCancel}
        width={1000}
        footer={[
          <Button type="primary" onClick={handleOk}>
            确认
          </Button>,
        ]}
      >
        <LinksButtonContext.Provider
          value={{
            activeKey: current,
            totalCount,
            dataSource,
            loading,
            payload,
            value,
            onTabClick: handleTabClick,
            onChangePayload: handleChange,
            onSearch: handleSerach,
            onReset: handleReset,
            onPaginationChange: handlePaginationChange,
            onChange: onChangeValue,
          }}
        >
          <TreeTabs items={linktabs} />
        </LinksButtonContext.Provider>
      </Modal>
    </>
  );
};

LinksButton.defaultProps = {
  value: '',
};

export default LinksButton;
