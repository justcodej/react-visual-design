import React, { FC, useContext } from 'react';
import { Field } from '@formily/core';
import VisualDesignContext from '../context';
import { CloseOutlined } from '@ant-design/icons';
import { Button, Empty } from 'antd';
import { Form } from '@formily/antd';
import { request } from '@kp-react-visual-design/utils';
import { BASE_PRICE_TYPE_ENUMS, REST_PRICE_TYPE_ENUMS } from '../../consts';
import SchemaField from './schema-field';
import { Wrapper, Header, SettingsGlobalStyled, FormLayoutStyled } from './index.styled';

const SettingsPanel: FC = () => {
  const { schema, formData, isPreviewing, onChangeState } = useContext(VisualDesignContext);

  const useAsyncCitys = (url: string) => async (field: Field) => {
    field.loading = true;
    const response = await request.get(url);
    field.dataSource = response.data;
    field.loading = false;
    field.required = /P+([0-9]{1,19})/.test(location.pathname); // 子频道列表新增和编辑必填
  };

  const usePriceTypeReaction = (field: Field) => {
    field.reset();
    if (field.form.values.basicAttribute.relationStyle === 3) {
      field.dataSource = BASE_PRICE_TYPE_ENUMS;
    } else {
      field.dataSource = [...BASE_PRICE_TYPE_ENUMS, ...REST_PRICE_TYPE_ENUMS];
    }
  };

  return (
    <Wrapper>
      <SettingsGlobalStyled />
      <Header>
        <div>配置属性</div>
        <Button
          icon={<CloseOutlined />}
          onClick={() => onChangeState({ isPreviewing: !isPreviewing })}
        ></Button>
      </Header>
      {!!schema ? (
        <Form form={formData}>
          <FormLayoutStyled labelCol={6} wrapperCol={18}>
            <SchemaField
              scope={{ useAsyncCitys, usePriceTypeReaction }}
              schema={schema}
            ></SchemaField>
          </FormLayoutStyled>
        </Form>
      ) : (
        <Empty style={{ marginTop: 140 }} description="暂无数据" />
      )}
    </Wrapper>
  );
};

export default SettingsPanel;
