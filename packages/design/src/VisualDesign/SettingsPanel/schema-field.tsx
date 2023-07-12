import React from 'react';
import { createSchemaField } from '@formily/react';
import { LoadingOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import {
  Radio,
  Checkbox,
  Input,
  DatePicker,
  TimePicker,
  FormItem,
  Password,
  ArrayCards,
  ArrayItems,
  Select,
  Space,
  NumberPicker,
  Cascader,
  Switch,
} from '@formily/antd';
import {
  HotArea,
  FileManage,
  LinksButton,
  LinkCoupon,
  LinkGoods,
  LinkRecommendId,
} from '../../components';

const SchemaField = createSchemaField({
  components: {
    Radio,
    Checkbox,
    Input,
    DateRangePicker: DatePicker,
    YearPicker: DatePicker,
    TimeRangePicker: TimePicker,
    FormItem,
    Password,
    ArrayCards,
    ArrayItems,
    Select,
    HotArea,
    Space,
    Card,
    NumberPicker,
    Cascader,
    FileManage,
    LinksButton,
    Switch,
    LinkCoupon,
    LinkGoods,
    LinkRecommendId,
  },
  scope: {
    icon: () => <LoadingOutlined />,
  },
});

export default SchemaField;
