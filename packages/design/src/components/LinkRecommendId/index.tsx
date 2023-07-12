import React, { FC, useState, useEffect, useContext, useCallback } from 'react';
import { Modal, Table, message, Tabs, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import type { TableRowSelection } from 'antd/es/table/interface';
import { request } from '@kp-react-visual-design/utils';
import moment from 'moment';
import { debounce } from 'lodash';
import { baseURL, TABLE_SCROLL, FORMAT } from '../../consts';
import VisualDesignContext from '../../VisualDesign/context';
import columns from './columns';
import TableSearch from '../TableSearch';
import searchOptioins from './search-options';
import { PickBtn } from './index.styled';
import mapValues from './map-values';

type LinkCouponTypes = {
  value?: DataType;
  onChange?: (value?: DataType) => void;
};

type PayloadTypes = {
  filter: string;
  page: number;
  pageSize: number;
  recommendType?: number | undefined;
  date?: string[];
  status?: number;
};

export interface DataType {
  recommendCode?: string;
  recommendName: string;
  recommendType: number;
  updatedAt: string;
  id?: string;
  name: string;
}

const LinkCoupon: FC<LinkCouponTypes> = ({ value, onChange }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [loading, changeLoading] = useState<boolean>(false);
  const { headers } = useContext(VisualDesignContext);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [current, setCurrent] = useState<string>('mall/recommend/findRecommendCateList');
  const [payload, setPayload] = useState<PayloadTypes>((mapValues as any)[current]?.payload);

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

  const rowSelection: TableRowSelection<DataType> = {
    onSelect: (record) => {
      onChange?.(record);
    },
    selectedRowKeys: value ? [value?.recommendCode || value?.id || ''] : [],
    type: 'radio',
    hideSelectAll: true,
  };

  const handlePaginationChange = (page: number, pageSize: number) => {
    setPayload({ ...payload, page, pageSize });
  };

  const handleSerach = () => {
    setPayload({ ...payload, page: 1, pageSize: 20 });
  };

  const handleChange = (values: any) => {
    setPayload({ ...payload, ...values });
  };

  const handleReset = async () => {
    await setPayload((mapValues as any)[current]?.payload);
  };

  const onTabClick = (key: string) => {
    changeLoading(true);
    setDataSource([]);
    setCurrent(key);
  };

  const sendRequest = async () => {
    const params = { ...payload } as { startTime?: string; endTime?: string } & PayloadTypes;
    // 字段转换（仅针对时间组件）
    delete params.date;
    if (payload?.date && payload?.date?.length) {
      params.startTime = moment(payload.date[0]).format(FORMAT);
      params.endTime = moment(payload.date[1]).format(FORMAT);
    }
    if (params.recommendType === -1) delete params.recommendType;
    if (current.includes('getCardRecommend')) params.status = 1;

    try {
      const {
        code,
        message: msg,
        data,
      } = await request.post(`${baseURL}/${current}`, {
        headers,
        data: params,
      });
      changeLoading(false);
      if (code !== 0) return message.error(msg);
      setDataSource(data.list || data);
      setTotalCount(data.totalCount || 0);
    } catch (err) {
      console.log(err);
    }
  };

  const debounceCallback = useCallback(
    debounce((callback) => {
      callback();
    }, 300),
    [],
  );

  const newItems = [
    {
      label: '商品推荐ID',
      key: 'mall/recommend/findRecommendCateList',
      children: (
        <Table
          columns={(columns as any)[current]}
          rowKey="recommendCode"
          rowSelection={rowSelection}
          bordered
          loading={loading}
          dataSource={dataSource}
          scroll={TABLE_SCROLL}
          pagination={{
            total: totalCount,
            onChange: handlePaginationChange,
            current: payload.page,
          }}
        />
      ),
    },
    {
      label: '卡券推荐ID',
      key: 'marketing/cardRecommend/getCardRecommend',
      children: (
        <Table
          columns={(columns as any)[current]}
          rowKey="id"
          rowSelection={rowSelection}
          bordered
          loading={loading}
          dataSource={dataSource}
          scroll={TABLE_SCROLL}
          pagination={{
            total: totalCount,
            onChange: handlePaginationChange,
            current: payload.page,
          }}
        />
      ),
    },
  ];

  useEffect(() => {
    if (!visible) return;
    debounceCallback(() => {
      changeLoading(true);
      setDataSource([]);
      sendRequest();
    });
  }, [
    visible,
    payload.page,
    payload.pageSize,
    payload.filter,
    payload.recommendType,
    payload.date,
    current,
  ]);

  return (
    <>
      <PickBtn>
        <a onClick={handleClick}>{value?.recommendName || value?.name || '请选择推荐ID'}</a>
        &nbsp;
        <RightOutlined />
      </PickBtn>
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
        <TableSearch
          options={(searchOptioins as any)[current]}
          values={payload}
          onReset={handleReset}
          onSearch={handleSerach}
          onChange={handleChange}
        />
        <Tabs
          items={newItems}
          defaultActiveKey={current}
          onTabClick={onTabClick}
          destroyInactiveTabPane
        />
      </Modal>
    </>
  );
};

export default LinkCoupon;
