import React, { FC, useContext } from 'react';
import { Tabs, Table, Input } from 'antd';
import { TabsProps } from 'antd/es/tabs';
import type { TableRowSelection } from 'antd/es/table/interface';
import type { TabItemType } from './index';
import columns from './columns';
import { TABLE_SCROLL } from '../../consts';
import TableSearch from '../TableSearch';
import searchOptions from './search-options';
import mapValues from './map-values';
import LinkButtonContext from './context';

const expandable = {
  childrenColumnName: 'list',
  rowExpandable: () => false,
};

// export const getActiveKey = (linktabs: TabItemType[], key: string): string => {
//   const index = Number(key);
//   const activeKey =
//     key !== '' && !isNaN(index)
//       ? `${key}.${linktabs[index]?.subLinkTab?.[0]?.url || linktabs[index].url}`
//       : key;
//   return activeKey;
// };

type TreeTabsProps = Omit<TabsProps, 'items'> & {
  items?: TabItemType[] | null;
  pid?: string;
};

const TreeTabs: FC<TreeTabsProps> = ({ items, pid }) => {
  const {
    activeKey,
    onTabClick,
    dataSource,
    loading,
    totalCount,
    payload,
    value,
    onChange,
    onChangePayload,
    onSearch,
    onReset,
    onPaginationChange,
  } = useContext(LinkButtonContext);

  const rowSelection: TableRowSelection<any> = {
    onSelect: (record) => {
      // 根据接口返回的key去找取，避免字段发生变化
      const url = record[(mapValues as any)[activeKey]['key']];
      onChange?.(url);
    },
    type: 'radio',
    selectedRowKeys: value ? [value] : [],
    hideSelectAll: true,
  };

  const newItems = items?.map((item, index) => ({
    label: item.name,
    key: item.subLinkTab ? item.subLinkTab[0].url : item.url,
    // key: getActiveKey(
    //   items,
    //   pid ? `${pid}.${item.url}` : `${item.url !== '' || item.subLinkTab ? index : item.url}`,
    // ),
    children: item.subLinkTab ? (
      <TreeTabs items={item.subLinkTab} pid={item.subLinkTab ? `${index}` : item.url} />
    ) : item.url ? (
      <>
        <TableSearch
          options={(searchOptions as any)[activeKey]}
          onChange={onChangePayload}
          onSearch={onSearch}
          onReset={onReset}
          values={payload}
          loading={loading}
        />
        <Table
          dataSource={dataSource}
          scroll={TABLE_SCROLL}
          columns={(columns as any)[activeKey]}
          expandable={expandable}
          bordered
          rowKey={(mapValues as any)[activeKey]?.['key']}
          rowSelection={rowSelection}
          loading={loading}
          pagination={{
            defaultPageSize: 20,
            total: totalCount,
            onChange: onPaginationChange,
            current: payload?.page,
          }}
        />
      </>
    ) : (
      <Input.TextArea
        rows={4}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder="请输入跳转链接"
      />
    ),
  }));

  return (
    <Tabs
      onTabClick={onTabClick}
      defaultActiveKey={activeKey}
      destroyInactiveTabPane
      items={newItems}
    />
  );
};

TreeTabs.defaultProps = {
  items: [],
};

export default TreeTabs;
