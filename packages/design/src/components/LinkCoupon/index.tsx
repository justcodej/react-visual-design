import React, { FC, useState, useEffect, useContext, useCallback } from 'react';
import { Modal, Table, message, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import type { TableRowSelection } from 'antd/es/table/interface';
import { request } from '@kp-react-visual-design/utils';
import { debounce } from 'lodash';
import moment from 'moment';
import { baseURL, TABLE_SCROLL, FORMAT } from '../../consts';
import VisualDesignContext from '../../VisualDesign/context';
import columns from './columns';
import TableSearch from '../TableSearch';
import searchOptioins from './search-options';
import defaultValues from './default-values';
import { PickBtn } from './index.styled';

type LinkCouponTypes = {
  value?: DataType;
  onChange?: (value: DataType) => void;
};

export type PayloadTypes = {
  pageNum?: number;
  pageSize?: number;
  condition?: string;
  date?: any[];
  recommendType?: string;
  validTimeType: number | undefined;
};

export interface DataType {
  startTime: number;
  endTime: number;
  validDays: number | null;
  templateName: string;
  validTimeType: number;
  intervalDays: number | null;
  id: string;
  date: any[];
}

const LinkCoupon: FC<LinkCouponTypes> = ({ value, onChange }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [loading, changeLoading] = useState<boolean>(false);
  const { headers } = useContext(VisualDesignContext);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [payload, setPayload] = useState<PayloadTypes>(defaultValues);

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
    selectedRowKeys: value?.id ? [value.id] : [],
    type: 'radio',
    hideSelectAll: true,
  };

  const handlePaginationChange = (page: number, pageSize: number) => {
    setPayload({ ...payload, pageNum: page, pageSize });
  };

  const handleSerach = () => {
    setPayload({ ...payload, pageNum: 1, pageSize: 20 });
    changeLoading(true);
  };

  const handleChange = (values: any) => {
    setPayload({ ...payload, ...values });
  };

  const handleReset = async () => {
    await setPayload(defaultValues);
    changeLoading(true);
  };

  const debounceCallback = useCallback(
    debounce((callback) => {
      callback();
    }, 300),
    [],
  );

  const sendRequest = async () => {
    const params = { ...payload } as {
      validStartTime?: string;
      validEndTime?: string;
    } & PayloadTypes;

    // 字段转换（仅针对时间组件）
    delete params.date;
    if (payload?.date && payload?.date?.length) {
      params.validStartTime = moment(payload.date[0]).format(FORMAT);
      params.validEndTime = moment(payload.date[1]).format(FORMAT);
    }
    if (params.validTimeType === -1) delete params.validTimeType;

    try {
      const {
        code,
        message: msg,
        data,
      } = await request.get(`${baseURL}/marketing/template/list`, {
        headers,
        params: { params: JSON.stringify(params) },
      });
      changeLoading(false);
      if (code !== 0) return message.error(msg);
      setDataSource(data.list);
      setTotalCount(data.total || 0);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!visible) return;
    debounceCallback(() => {
      changeLoading(true);
      setDataSource([]);
      sendRequest();
    });
  }, [
    visible,
    payload.pageNum,
    payload.pageSize,
    payload.condition,
    payload.validTimeType,
    payload.date,
  ]);

  return (
    <>
      <PickBtn>
        <a onClick={handleClick}>{value?.templateName || '请选择优惠券'}</a>
        &nbsp;
        <RightOutlined />
      </PickBtn>
      <Modal
        title="跳转页面"
        open={visible}
        destroyOnClose
        maskClosable
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
          loading={loading}
          onReset={handleReset}
          onSearch={handleSerach}
          onChange={handleChange}
        />
        <Table
          columns={columns}
          rowKey="id"
          rowSelection={rowSelection}
          bordered
          loading={loading}
          dataSource={dataSource}
          scroll={TABLE_SCROLL}
          pagination={{
            total: totalCount,
            onChange: handlePaginationChange,
            current: payload.pageNum,
          }}
        />
      </Modal>
    </>
  );
};

export default LinkCoupon;
