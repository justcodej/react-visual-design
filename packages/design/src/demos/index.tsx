import React, { useEffect, useState, useMemo } from 'react';
import VisualDesign from '@kp-react-visual-design/design';
import { Button, Table, message } from 'antd';
import { request } from '@kp-react-visual-design/utils';
import { token, baseURL } from '../consts';

const headers = { token };

interface IRecordProps {
  polymerizeName: string;
  polymerizeType: string;
  polymerizeCode: string;
  parentPolymerizeCode: string;
  parentPolymerizeName: string;
  status: number;
}

const TemplateManage = () => {
  const [tableList, setTableList] = useState([]);

  const columns = useMemo(
    () => [
      {
        title: '创建时间',
        dataIndex: 'createdAt',
        key: 'createdAt',
      },
      {
        title: '模版编号',
        dataIndex: 'polymerizeCode',
        key: 'polymerizeCode',
      },
      {
        title: '模版名称',
        dataIndex: 'polymerizeName',
        key: 'polymerizeName',
      },
      {
        title: '关联主频道名称',
        dataIndex: 'parentPolymerizeName',
        key: 'parentPolymerizeName',
        render(text: string) {
          return text ? text : '全部频道';
        },
      },
      {
        title: '类型',
        dataIndex: 'polymerizeType',
        key: 'polymerizeType',
        render(text: number) {
          return text === 1 ? '主频道' : '子频道';
        },
      },
      {
        title: '审核状态',
        dataIndex: 'status',
        key: 'status',
        render(text: number) {
          return text === 0 ? '待审核' : text === 1 ? '审核中' : text === 2 ? '已通过' : '已删除';
        },
      },
      {
        title: '操作',
        render(text: string, record: any) {
          return (
            <Button
              type="primary"
              style={{ marginRight: 10 }}
              size="small"
              onClick={() => handleClickEdit(record)}
            >
              编辑
            </Button>
          );
        },
      },
    ],
    [],
  );

  const handleClickAdd = async (record?: IRecordProps) => {
    const result = await VisualDesign.prompt({
      headers,
      queryApi: {
        query: `${baseURL}/pindao/polymerize/default/queryPolymerizeDefault`,
        linktabs: `${baseURL}/pindao/polymerize/link/queryTabLink`,
      },
      appCode: 'blm',
      record,
    });
    if (!result) return;
    const header = result.find((item: any) => item.name === 'Header');
    const response = await request.post(`${baseURL}/pindao/polymerize/page/savePolymerizePage`, {
      data: {
        parentPolymerizeCode: record?.polymerizeCode,
        parentPolymerizeName: record?.polymerizeName,
        polymerizeName: header?.data.dataSource.name,
        polymerizeType: record ? 2 : 1,
        template: result,
        city: header?.data.dataSource.city,
      },
      headers,
    });

    if (response.code === -1) {
      message.error(response.message);
    }
    fetchData();
  };

  const handleClickEdit = async (record: IRecordProps) => {
    const { data } = await request.post(`${baseURL}/pindao/polymerize/page/queryPolymerizePage`, {
      data: { polymerizeCode: record.polymerizeCode },
      headers,
    });
    const result = await VisualDesign.prompt({
      template: data.template,
      headers,
      queryApi: {
        query: `${baseURL}/pindao/polymerize/default/queryPolymerizeDefault`,
        linktabs: `${baseURL}/pindao/polymerize/link/queryTabLink`,
      },
      record,
      appCode: 'blm',
    });
    if (!result) return;
    const header = result.find((item: any) => item.name === 'Header');
    const response = await request.post(`${baseURL}/pindao/polymerize/page/updatePolymerizePage`, {
      data: {
        polymerizeName: header?.data.dataSource.name,
        polymerizeType: record.polymerizeType,
        polymerizeCode: record.polymerizeCode,
        template: result,
        city: header?.data.dataSource.city,
      },
      headers,
    });
    if (response.code === -1) {
      message.error(response.message);
    }
    fetchData();
  };

  const fetchData = async () => {
    const { data } = await request.post(
      `${baseURL}/pindao/polymerize/page/queryPolymerizePageList`,
      {
        data: {
          page: 1,
          pageSize: 30,
        },
        headers,
      },
    );
    setTableList(data?.list || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ padding: '30px 10px 0' }}>
      <Button type="primary" style={{ marginBottom: 10 }} onClick={() => handleClickAdd(void 0)}>
        新增
      </Button>
      <Table bordered rowKey="polymerizeCode" columns={columns} dataSource={tableList}></Table>
    </div>
  );
};

export default TemplateManage;
