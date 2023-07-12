import React, { FC, useState, useEffect, useContext, useCallback } from 'react';
import { Modal, Table, message, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import type { TableRowSelection } from 'antd/es/table/interface';
import { request } from '@kp-react-visual-design/utils';
import { debounce } from 'lodash';
import { baseURL, TABLE_SCROLL } from '../../consts';
import VisualDesignContext from '../../VisualDesign/context';
import columns from './columns';
import TableSearch from '../TableSearch';
import searchOptioins from './search-options';
import defaultValues from './default-values';
import { PickBtn } from './index.styled';

type LinkGoodsTypes = {
  value?: DataType;
  onChange?: (value: DataType) => void;
};

export interface DataType {
  commodityName: string;
  commodityCode: string;
  url: string;
}

const LinkGoods: FC<LinkGoodsTypes> = ({ value, onChange }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [loading, changeLoading] = useState<boolean>(false);
  const { headers } = useContext(VisualDesignContext);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [payload, setPayload] = useState(defaultValues);

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
    selectedRowKeys: value ? [value?.commodityCode] : [],
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
    setPayload(defaultValues);
  };

  const sendRequest = async () => {
    try {
      const {
        code,
        message: msg,
        data,
      } = await request.post(`${baseURL}/pindao/polymerize/link/queryMallCommodityLink`, {
        headers,
        data: payload,
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

  useEffect(() => {
    if (!visible) return;
    debounceCallback(() => {
      changeLoading(true);
      setDataSource([]);
      sendRequest();
    });
  }, [visible, payload.page, payload.pageSize, payload.filter]);

  return (
    <>
      <PickBtn>
        <a onClick={handleClick}>{value?.commodityName || '请选择商品'}</a>
        &nbsp;
        <RightOutlined />
      </PickBtn>
      <Modal
        title="跳转页面"
        open={visible}
        destroyOnClose
        width={1000}
        onCancel={handleCancel}
        footer={[
          <Button type="primary" onClick={handleOk}>
            确认
          </Button>,
        ]}
      >
        <TableSearch
          options={searchOptioins}
          values={payload}
          onReset={handleReset}
          onSearch={handleSerach}
          onChange={handleChange}
        />
        <Table
          columns={columns}
          rowKey="commodityCode"
          rowSelection={rowSelection}
          loading={loading}
          bordered
          dataSource={dataSource}
          scroll={TABLE_SCROLL}
          pagination={{
            total: totalCount,
            onChange: handlePaginationChange,
            current: payload.page,
          }}
        />
      </Modal>
    </>
  );
};

export default LinkGoods;
