import React from 'react';
import { request } from '@kp-react-visual-design/utils';
import { createForm, Form, onFormInputChange, onFieldValueChange } from '@formily/core';
import { Button, message, ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { CSSTransition } from 'react-transition-group';
import { CloudUploadOutlined } from '@ant-design/icons';
import BasisLayout from './BasisLayout';
import CompositePanel from './CompositePanel';
import SettingsPanel from './SettingsPanel';
import ComponentTreeWidget from './ComponentTreeWidget';
import ViewportPanel from './ViewportPanel';
import VisualDesignContext, {
  VisualDesignStateTypes,
  initialState,
  MessageEventDataProps,
  VisualDesignProps,
  SelectedItemTypes,
  WidgetTypes,
} from './context';
import _ from 'lodash';
import { v4 } from 'uuid';
import { SettingsAnimationStyled } from '../global.styled';
import { ModalStyled } from './index.styled';

class VisualDesign extends React.Component<VisualDesignProps, VisualDesignStateTypes> {
  constructor(props: any) {
    super(props);
    this.state = {
      ...initialState,
      formData: createForm(),
    };
  }

  static defaultProps = {
    record: {},
    open: false,
    className: '',
    onOk: () => {},
    onCancel: () => {},
    afterClose: () => {},
    template: [],
    loading: true,
    headers: {},
    queryApi: {
      query: '',
      category: '',
      shop: '',
      commodity: '',
      pindao: '',
    },
    appCode: 'blm',
  };

  componentDidMount() {
    const domain = process.env.NODE_ENV === 'development' ? location.hostname : `otosaas.com`;
    document.domain = domain;
    this.fetchIntialWidgets();
  }

  /**
   * 设置初始模版、表单数据
   */
  fetchIntialWidgets = async () => {
    try {
      const { headers, queryApi, template = [] } = this.props;
      this.setState({ loading: true });
      const {
        data,
        code,
        message: msg,
      } = await request.post(queryApi.query, {
        data: {},
        headers,
      });
      if (code !== 0) return message.error(msg);
      const header = data.components.find((item: WidgetTypes) => item.en === 'Header');
      if (template.length === 0) {
        this.setState(
          {
            selectedList: [{ id: v4(), name: 'Header', data: header?.data }],
            schema: header?.schema,
            initialWidgets: data.components,
            loading: false,
          },
          this.createFormData,
        );
      } else {
        this.setState(
          {
            schema: header?.schema,
            selectedList: template,
            initialWidgets: data.components,
            loading: false,
          },
          this.createFormData,
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  /**
   * 通过postMessage修改state之后必须调用此函数，不然存在state滞后的问题
   * @param
   * @return viod
   */
  createFormData = () => {
    const { selectedList, activeIndex } = this.state;
    const self = this;
    const newFormData = createForm({
      initialValues: selectedList[activeIndex]?.data,
      effects() {
        onFormInputChange((form: Form) => {
          const list = _.cloneDeep(selectedList);
          if (!list[activeIndex]) return;
          list[activeIndex].data = _.cloneDeep(form.values);
          self.setState({ selectedList: list });
        });

        onFieldValueChange('basicAttribute.priceType', (field, form) => {
          const list = _.cloneDeep(selectedList);
          if (!list[activeIndex]) return;
          list[activeIndex].data = _.cloneDeep(form.values);
          self.setState({ selectedList: list });
        });
      },
    });
    this.setState({ formData: newFormData });
  };

  onChangeState = async (state: Partial<VisualDesignStateTypes>) => {
    this.setState({ ...this.state, ...state }, this.createFormData);
  };

  onClickEditItem = async (dataMessage: MessageEventDataProps) => {
    try {
      await this.state.formData?.submit();
      this.setState(dataMessage, this.createFormData);
    } catch (err) {
      if (Array.isArray(err)) {
        message.error(err[0].messages[0]);
      }
      Promise.reject(err);
    }
  };

  onClickDelete = (dataMessage: MessageEventDataProps) => {
    this.setState(dataMessage, this.createFormData);
  };

  onDropAddItem = async (dataMessage: MessageEventDataProps) => {
    try {
      await this.state.formData?.submit();
      let { activeIndex, widgetName, selectedList, schema, defaultData } = dataMessage;

      const newSelectedList = _.cloneDeep(selectedList);
      const id = v4();
      const initialData: SelectedItemTypes = {
        id,
        name: widgetName,
        data: defaultData,
      };

      if (newSelectedList.length && widgetName === 'FooterNav') {
        activeIndex = newSelectedList.length;
        message.info('「底部导航」已添加至底部');
      }

      newSelectedList.splice(activeIndex, 0, initialData);

      this.setState(
        {
          selectedList: newSelectedList,
          schema,
          activeIndex,
          isPreviewing: false,
        },
        this.createFormData,
      );
    } catch (err) {
      if (Array.isArray(err)) {
        message.error(err[0].messages[0]);
      }
      Promise.reject(err);
    }
  };

  handleSubmit = async () => {
    const { selectedList, formData } = this.state;
    const { onOk } = this.props;
    try {
      const hasHeader = selectedList.some((item: SelectedItemTypes) => item.name === 'Header');
      await formData?.submit();
      if (!hasHeader) return message.error('必须包含「页面全局配置」');
      onOk?.(selectedList);
    } catch (err) {
      if (Array.isArray(err)) {
        message.error(err[0].messages[0]);
      }
      Promise.reject(err);
    }
  };

  render() {
    const {
      onCancel,
      onOk,
      template = [],
      headers,
      queryApi,
      appCode,
      record,
      ...rest
    } = this.props;
    const {
      activeIndex,
      schema,
      refresh,
      isDragging,
      selectedList,
      isPreviewing,
      initialWidgets,
      isOnLoad,
      loading,
      widgetName,
      formData,
    } = this.state;

    return (
      <ConfigProvider locale={zhCN}>
        <SettingsAnimationStyled />
        <ModalStyled
          width="100vw"
          {...rest}
          destroyOnClose
          footer={null}
          closable={false}
          mask={false}
          onCancel={onCancel}
        >
          <VisualDesignContext.Provider
            value={{
              record,
              widgetName,
              loading,
              isOnLoad,
              appCode,
              headers,
              initialWidgets,
              formData,
              isPreviewing,
              refresh,
              schema,
              activeIndex,
              selectedList,
              queryApi,
              isDragging,
              onDropAddItem: this.onDropAddItem,
              onClickEditItem: this.onClickEditItem,
              onChangeState: this.onChangeState,
              onClickDelete: this.onClickDelete,
            }}
          >
            <BasisLayout
              title="VisualDesign"
              actions={
                <div>
                  <Button style={{ marginRight: 10 }} onClick={onCancel}>
                    关闭
                  </Button>
                  <Button
                    onClick={this.handleSubmit}
                    disabled={loading}
                    loading={loading}
                    icon={<CloudUploadOutlined />}
                    type="primary"
                  >
                    保存
                  </Button>
                </div>
              }
            >
              <CompositePanel></CompositePanel>
              <ViewportPanel>
                <ComponentTreeWidget></ComponentTreeWidget>
              </ViewportPanel>
              <CSSTransition
                in={!isPreviewing}
                timeout={200}
                unmountOnExit
                classNames="settings-transition"
              >
                <SettingsPanel></SettingsPanel>
              </CSSTransition>
            </BasisLayout>
          </VisualDesignContext.Provider>
        </ModalStyled>
      </ConfigProvider>
    );
  }
}

export default VisualDesign;
