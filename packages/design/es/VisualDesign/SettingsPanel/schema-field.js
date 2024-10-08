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
var SchemaField = createSchemaField({
  components: {
    Radio: Radio,
    Checkbox: Checkbox,
    Input: Input,
    DateRangePicker: DatePicker,
    YearPicker: DatePicker,
    TimeRangePicker: TimePicker,
    FormItem: FormItem,
    Password: Password,
    ArrayCards: ArrayCards,
    ArrayItems: ArrayItems,
    Select: Select,
    HotArea: HotArea,
    Space: Space,
    Card: Card,
    NumberPicker: NumberPicker,
    Cascader: Cascader,
    FileManage: FileManage,
    LinksButton: LinksButton,
    Switch: Switch,
    LinkCoupon: LinkCoupon,
    LinkGoods: LinkGoods,
    LinkRecommendId: LinkRecommendId,
  },
  scope: {
    icon: function icon() {
      return /*#__PURE__*/ React.createElement(LoadingOutlined, null);
    },
  },
});
export default SchemaField;
