import React from 'react';
declare const SchemaField: {
  <
    Decorator extends import('@formily/react').JSXComponent,
    Component extends import('@formily/react').JSXComponent,
  >(
    props: import('@formily/react').ISchemaFieldProps<
      Decorator,
      Component,
      import('@formily/core').ObjectField<Decorator, Component>
    >,
  ): JSX.Element;
  displayName: string;
  Markup: {
    <
      Decorator_1 extends
        | 'HotArea'
        | 'Input'
        | 'Select'
        | 'DateRangePicker'
        | 'YearPicker'
        | 'TimeRangePicker'
        | 'Radio'
        | 'Checkbox'
        | 'FormItem'
        | 'Password'
        | 'ArrayCards'
        | 'ArrayItems'
        | 'Space'
        | 'Card'
        | 'NumberPicker'
        | 'Cascader'
        | 'FileManage'
        | 'LinksButton'
        | 'Switch'
        | 'LinkCoupon'
        | 'LinkGoods'
        | 'LinkRecommendId'
        | 'Input.TextArea'
        | 'DateRangePicker.RangePicker'
        | 'YearPicker.RangePicker'
        | 'TimeRangePicker.RangePicker'
        | 'Radio.Group'
        | 'Radio.__ANT_RADIO'
        | 'Checkbox.Group'
        | 'Checkbox.__ANT_CHECKBOX'
        | 'FormItem.BaseItem'
        | 'Password.$$typeof'
        | 'ArrayCards.Addition'
        | 'ArrayCards.Copy'
        | 'ArrayCards.Remove'
        | 'ArrayCards.MoveUp'
        | 'ArrayCards.MoveDown'
        | 'ArrayCards.SortHandle'
        | 'ArrayCards.Index'
        | 'ArrayCards.useArray'
        | 'ArrayCards.useIndex'
        | 'ArrayCards.useRecord'
        | 'ArrayItems.Item'
        | 'ArrayItems.Addition'
        | 'ArrayItems.Copy'
        | 'ArrayItems.Remove'
        | 'ArrayItems.MoveUp'
        | 'ArrayItems.MoveDown'
        | 'ArrayItems.SortHandle'
        | 'ArrayItems.Index'
        | 'ArrayItems.useArray'
        | 'ArrayItems.useIndex'
        | 'ArrayItems.useRecord'
        | 'Card.$$typeof'
        | 'Card.Meta'
        | 'Card.Grid'
        | 'NumberPicker.$$typeof'
        | 'Cascader.$$typeof'
        | 'FileManage.$$typeof'
        | 'Switch.$$typeof',
      Component_1 extends
        | 'HotArea'
        | 'Input'
        | 'Select'
        | 'DateRangePicker'
        | 'YearPicker'
        | 'TimeRangePicker'
        | 'Radio'
        | 'Checkbox'
        | 'FormItem'
        | 'Password'
        | 'ArrayCards'
        | 'ArrayItems'
        | 'Space'
        | 'Card'
        | 'NumberPicker'
        | 'Cascader'
        | 'FileManage'
        | 'LinksButton'
        | 'Switch'
        | 'LinkCoupon'
        | 'LinkGoods'
        | 'LinkRecommendId'
        | 'Input.TextArea'
        | 'DateRangePicker.RangePicker'
        | 'YearPicker.RangePicker'
        | 'TimeRangePicker.RangePicker'
        | 'Radio.Group'
        | 'Radio.__ANT_RADIO'
        | 'Checkbox.Group'
        | 'Checkbox.__ANT_CHECKBOX'
        | 'FormItem.BaseItem'
        | 'Password.$$typeof'
        | 'ArrayCards.Addition'
        | 'ArrayCards.Copy'
        | 'ArrayCards.Remove'
        | 'ArrayCards.MoveUp'
        | 'ArrayCards.MoveDown'
        | 'ArrayCards.SortHandle'
        | 'ArrayCards.Index'
        | 'ArrayCards.useArray'
        | 'ArrayCards.useIndex'
        | 'ArrayCards.useRecord'
        | 'ArrayItems.Item'
        | 'ArrayItems.Addition'
        | 'ArrayItems.Copy'
        | 'ArrayItems.Remove'
        | 'ArrayItems.MoveUp'
        | 'ArrayItems.MoveDown'
        | 'ArrayItems.SortHandle'
        | 'ArrayItems.Index'
        | 'ArrayItems.useArray'
        | 'ArrayItems.useIndex'
        | 'ArrayItems.useRecord'
        | 'Card.$$typeof'
        | 'Card.Meta'
        | 'Card.Grid'
        | 'NumberPicker.$$typeof'
        | 'Cascader.$$typeof'
        | 'FileManage.$$typeof'
        | 'Switch.$$typeof',
    >(
      props: import('@formily/react').ISchemaMarkupFieldProps<
        {
          Radio: React.FC<React.PropsWithChildren<import('antd').RadioProps>> & {
            Group?: React.FC<React.PropsWithChildren<import('antd').RadioGroupProps>> | undefined;
            __ANT_RADIO?: boolean | undefined;
          };
          Checkbox: React.FC<React.PropsWithChildren<import('antd').CheckboxProps>> & {
            Group?:
              | React.FC<React.PropsWithChildren<import('antd/lib/checkbox').CheckboxGroupProps>>
              | undefined;
            __ANT_CHECKBOX?: boolean | undefined;
          };
          Input: React.FC<React.PropsWithChildren<import('antd').InputProps>> & {
            TextArea?:
              | React.FC<React.PropsWithChildren<import('antd/lib/input').TextAreaProps>>
              | undefined;
          };
          DateRangePicker: React.FC<React.PropsWithChildren<import('antd').DatePickerProps>> & {
            RangePicker?:
              | React.FC<React.PropsWithChildren<import('antd/lib/date-picker').RangePickerProps>>
              | undefined;
          };
          YearPicker: React.FC<React.PropsWithChildren<import('antd').DatePickerProps>> & {
            RangePicker?:
              | React.FC<React.PropsWithChildren<import('antd/lib/date-picker').RangePickerProps>>
              | undefined;
          };
          TimeRangePicker: React.FC<React.PropsWithChildren<import('antd').TimePickerProps>> & {
            RangePicker?:
              | React.FC<React.PropsWithChildren<import('antd').TimeRangePickerProps>>
              | undefined;
          };
          FormItem: React.FC<React.PropsWithChildren<import('@formily/antd').IFormItemProps>> & {
            BaseItem?:
              | React.FC<React.PropsWithChildren<import('@formily/antd').IFormItemProps>>
              | undefined;
          };
          Password: React.ForwardRefExoticComponent<
            Partial<import('@formily/antd').IPasswordProps> & React.RefAttributes<unknown>
          >;
          ArrayCards: React.FC<
            React.PropsWithChildren<
              import('antd').CardProps & import('@formily/antd').IArrayBaseProps
            >
          > &
            import('@formily/antd').ArrayBaseMixins;
          ArrayItems: React.FC<
            React.PropsWithChildren<
              React.HTMLAttributes<HTMLDivElement> & import('@formily/antd').IArrayBaseProps
            >
          > &
            import('@formily/antd').ArrayBaseMixins & {
              Item?:
                | React.FC<
                    React.HTMLAttributes<HTMLDivElement> & {
                      type?: 'card' | 'divide' | undefined;
                    }
                  >
                | undefined;
            };
          Select: import('@formily/react').ReactFC<import('antd').SelectProps<any, any>>;
          HotArea: React.FC<
            React.PropsWithChildren<{
              value: {
                link: string;
                left: number;
                top: number;
                width: number;
                height: number;
              }[];
            }>
          >;
          Space: React.FC<React.PropsWithChildren<import('antd').SpaceProps>>;
          Card: import('antd/lib/card').CardInterface;
          NumberPicker: React.ForwardRefExoticComponent<
            Pick<
              Partial<
                import('antd').InputNumberProps<string | number> & {
                  children?: React.ReactNode;
                } & {
                  ref?: React.Ref<HTMLInputElement> | undefined;
                }
              >,
              keyof import('antd').InputNumberProps<string | number>
            > &
              React.RefAttributes<unknown>
          >;
          Cascader: React.ForwardRefExoticComponent<
            (
              | Pick<
                  Partial<
                    Omit<
                      import('rc-cascader').SingleCascaderProps<
                        import('rc-cascader').DefaultOptionType
                      >,
                      'options' | 'checkable'
                    > & {
                      multiple?: false | undefined;
                    } & {
                      multiple?: boolean | undefined;
                      size?: import('antd/lib/button').ButtonSize;
                      bordered?: boolean | undefined;
                      placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight' | undefined;
                      suffixIcon?: React.ReactNode;
                      options?:
                        | (
                            | import('rc-cascader').DefaultOptionType
                            | import('rc-cascader').BaseOptionType
                          )[]
                        | undefined;
                      status?: '' | 'error' | 'warning' | undefined;
                    } & {
                      children?: React.ReactNode;
                    } & {
                      ref?: React.Ref<import('antd/lib/cascader').CascaderRef> | undefined;
                    }
                  >,
                  | 'style'
                  | 'children'
                  | 'defaultValue'
                  | 'autoFocus'
                  | 'className'
                  | 'id'
                  | 'placeholder'
                  | 'tabIndex'
                  | 'aria-activedescendant'
                  | 'aria-atomic'
                  | 'aria-autocomplete'
                  | 'aria-busy'
                  | 'aria-checked'
                  | 'aria-colcount'
                  | 'aria-colindex'
                  | 'aria-colspan'
                  | 'aria-controls'
                  | 'aria-current'
                  | 'aria-describedby'
                  | 'aria-details'
                  | 'aria-disabled'
                  | 'aria-dropeffect'
                  | 'aria-errormessage'
                  | 'aria-expanded'
                  | 'aria-flowto'
                  | 'aria-grabbed'
                  | 'aria-haspopup'
                  | 'aria-hidden'
                  | 'aria-invalid'
                  | 'aria-keyshortcuts'
                  | 'aria-label'
                  | 'aria-labelledby'
                  | 'aria-level'
                  | 'aria-live'
                  | 'aria-modal'
                  | 'aria-multiline'
                  | 'aria-multiselectable'
                  | 'aria-orientation'
                  | 'aria-owns'
                  | 'aria-placeholder'
                  | 'aria-posinset'
                  | 'aria-pressed'
                  | 'aria-readonly'
                  | 'aria-relevant'
                  | 'aria-required'
                  | 'aria-roledescription'
                  | 'aria-rowcount'
                  | 'aria-rowindex'
                  | 'aria-rowspan'
                  | 'aria-selected'
                  | 'aria-setsize'
                  | 'aria-sort'
                  | 'aria-valuemax'
                  | 'aria-valuemin'
                  | 'aria-valuenow'
                  | 'aria-valuetext'
                  | 'onFocus'
                  | 'onBlur'
                  | 'onChange'
                  | 'onKeyDown'
                  | 'onKeyUp'
                  | 'onClick'
                  | 'onMouseDown'
                  | 'onMouseEnter'
                  | 'onMouseLeave'
                  | 'status'
                  | 'loading'
                  | 'open'
                  | 'bordered'
                  | 'prefixCls'
                  | 'expandIcon'
                  | 'disabled'
                  | 'value'
                  | 'size'
                  | 'multiple'
                  | 'direction'
                  | 'getPopupContainer'
                  | 'popupClassName'
                  | 'searchValue'
                  | 'dropdownClassName'
                  | 'dropdownAlign'
                  | 'transitionName'
                  | 'allowClear'
                  | 'defaultOpen'
                  | 'suffixIcon'
                  | 'clearIcon'
                  | 'options'
                  | 'onSearch'
                  | 'placement'
                  | 'animation'
                  | 'showArrow'
                  | 'popupVisible'
                  | 'inputIcon'
                  | 'getInputElement'
                  | 'getRawInputElement'
                  | 'showSearch'
                  | 'tagRender'
                  | 'notFoundContent'
                  | 'onClear'
                  | 'choiceTransitionName'
                  | 'onDropdownVisibleChange'
                  | 'maxTagTextLength'
                  | 'maxTagCount'
                  | 'maxTagPlaceholder'
                  | 'removeIcon'
                  | 'dropdownStyle'
                  | 'dropdownMatchSelectWidth'
                  | 'dropdownRender'
                  | 'showAction'
                  | 'onPopupScroll'
                  | 'onInputKeyDown'
                  | 'fieldNames'
                  | 'changeOnSelect'
                  | 'displayRender'
                  | 'showCheckedStrategy'
                  | 'expandTrigger'
                  | 'dropdownPrefixCls'
                  | 'loadData'
                  | 'dropdownMenuColumnStyle'
                  | 'popupPlacement'
                  | 'onPopupVisibleChange'
                  | 'loadingIcon'
                >
              | Pick<
                  Partial<
                    Omit<
                      import('rc-cascader').MultipleCascaderProps<
                        import('rc-cascader').DefaultOptionType
                      >,
                      'options' | 'checkable'
                    > & {
                      multiple: true;
                    } & {
                      multiple?: boolean | undefined;
                      size?: import('antd/lib/button').ButtonSize;
                      bordered?: boolean | undefined;
                      placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight' | undefined;
                      suffixIcon?: React.ReactNode;
                      options?:
                        | (
                            | import('rc-cascader').DefaultOptionType
                            | import('rc-cascader').BaseOptionType
                          )[]
                        | undefined;
                      status?: '' | 'error' | 'warning' | undefined;
                    } & {
                      children?: React.ReactNode;
                    } & {
                      ref?: React.Ref<import('antd/lib/cascader').CascaderRef> | undefined;
                    }
                  >,
                  | 'style'
                  | 'children'
                  | 'defaultValue'
                  | 'autoFocus'
                  | 'className'
                  | 'id'
                  | 'placeholder'
                  | 'tabIndex'
                  | 'aria-activedescendant'
                  | 'aria-atomic'
                  | 'aria-autocomplete'
                  | 'aria-busy'
                  | 'aria-checked'
                  | 'aria-colcount'
                  | 'aria-colindex'
                  | 'aria-colspan'
                  | 'aria-controls'
                  | 'aria-current'
                  | 'aria-describedby'
                  | 'aria-details'
                  | 'aria-disabled'
                  | 'aria-dropeffect'
                  | 'aria-errormessage'
                  | 'aria-expanded'
                  | 'aria-flowto'
                  | 'aria-grabbed'
                  | 'aria-haspopup'
                  | 'aria-hidden'
                  | 'aria-invalid'
                  | 'aria-keyshortcuts'
                  | 'aria-label'
                  | 'aria-labelledby'
                  | 'aria-level'
                  | 'aria-live'
                  | 'aria-modal'
                  | 'aria-multiline'
                  | 'aria-multiselectable'
                  | 'aria-orientation'
                  | 'aria-owns'
                  | 'aria-placeholder'
                  | 'aria-posinset'
                  | 'aria-pressed'
                  | 'aria-readonly'
                  | 'aria-relevant'
                  | 'aria-required'
                  | 'aria-roledescription'
                  | 'aria-rowcount'
                  | 'aria-rowindex'
                  | 'aria-rowspan'
                  | 'aria-selected'
                  | 'aria-setsize'
                  | 'aria-sort'
                  | 'aria-valuemax'
                  | 'aria-valuemin'
                  | 'aria-valuenow'
                  | 'aria-valuetext'
                  | 'onFocus'
                  | 'onBlur'
                  | 'onChange'
                  | 'onKeyDown'
                  | 'onKeyUp'
                  | 'onClick'
                  | 'onMouseDown'
                  | 'onMouseEnter'
                  | 'onMouseLeave'
                  | 'status'
                  | 'loading'
                  | 'open'
                  | 'bordered'
                  | 'prefixCls'
                  | 'expandIcon'
                  | 'disabled'
                  | 'value'
                  | 'size'
                  | 'multiple'
                  | 'direction'
                  | 'getPopupContainer'
                  | 'popupClassName'
                  | 'searchValue'
                  | 'dropdownClassName'
                  | 'dropdownAlign'
                  | 'transitionName'
                  | 'allowClear'
                  | 'defaultOpen'
                  | 'suffixIcon'
                  | 'clearIcon'
                  | 'options'
                  | 'onSearch'
                  | 'placement'
                  | 'animation'
                  | 'showArrow'
                  | 'popupVisible'
                  | 'inputIcon'
                  | 'getInputElement'
                  | 'getRawInputElement'
                  | 'showSearch'
                  | 'tagRender'
                  | 'notFoundContent'
                  | 'onClear'
                  | 'choiceTransitionName'
                  | 'onDropdownVisibleChange'
                  | 'maxTagTextLength'
                  | 'maxTagCount'
                  | 'maxTagPlaceholder'
                  | 'removeIcon'
                  | 'dropdownStyle'
                  | 'dropdownMatchSelectWidth'
                  | 'dropdownRender'
                  | 'showAction'
                  | 'onPopupScroll'
                  | 'onInputKeyDown'
                  | 'fieldNames'
                  | 'changeOnSelect'
                  | 'displayRender'
                  | 'showCheckedStrategy'
                  | 'expandTrigger'
                  | 'dropdownPrefixCls'
                  | 'loadData'
                  | 'dropdownMenuColumnStyle'
                  | 'popupPlacement'
                  | 'onPopupVisibleChange'
                  | 'loadingIcon'
                >
            ) &
              React.RefAttributes<unknown>
          >;
          FileManage: React.ForwardRefExoticComponent<
            Omit<Partial<any>, 'ref'> & React.RefAttributes<unknown>
          >;
          LinksButton: React.FC<{
            value?: string | undefined;
            onChange?: ((value: string) => void) | undefined;
          }>;
          Switch: React.ForwardRefExoticComponent<
            Pick<
              Partial<import('antd').SwitchProps & React.RefAttributes<HTMLElement>>,
              'key' | keyof import('antd').SwitchProps
            > &
              React.RefAttributes<unknown>
          >;
          LinkCoupon: React.FC<{
            value?: import('../../components/LinkCoupon').DataType | undefined;
            onChange?:
              | ((value: import('../../components/LinkCoupon').DataType) => void)
              | undefined;
          }>;
          LinkGoods: React.FC<{
            value?: import('../../components/LinkGoods').DataType | undefined;
            onChange?: ((value: import('../../components/LinkGoods').DataType) => void) | undefined;
          }>;
          LinkRecommendId: React.FC<{
            value?: import('../../components/LinkRecommendId').DataType | undefined;
            onChange?:
              | ((value?: import('../../components/LinkRecommendId').DataType | undefined) => void)
              | undefined;
          }>;
        },
        Component_1,
        Decorator_1
      >,
    ): JSX.Element;
    displayName: string;
  };
  String: {
    <
      Decorator_2 extends
        | 'HotArea'
        | 'Input'
        | 'Select'
        | 'DateRangePicker'
        | 'YearPicker'
        | 'TimeRangePicker'
        | 'Radio'
        | 'Checkbox'
        | 'FormItem'
        | 'Password'
        | 'ArrayCards'
        | 'ArrayItems'
        | 'Space'
        | 'Card'
        | 'NumberPicker'
        | 'Cascader'
        | 'FileManage'
        | 'LinksButton'
        | 'Switch'
        | 'LinkCoupon'
        | 'LinkGoods'
        | 'LinkRecommendId'
        | 'Input.TextArea'
        | 'DateRangePicker.RangePicker'
        | 'YearPicker.RangePicker'
        | 'TimeRangePicker.RangePicker'
        | 'Radio.Group'
        | 'Radio.__ANT_RADIO'
        | 'Checkbox.Group'
        | 'Checkbox.__ANT_CHECKBOX'
        | 'FormItem.BaseItem'
        | 'Password.$$typeof'
        | 'ArrayCards.Addition'
        | 'ArrayCards.Copy'
        | 'ArrayCards.Remove'
        | 'ArrayCards.MoveUp'
        | 'ArrayCards.MoveDown'
        | 'ArrayCards.SortHandle'
        | 'ArrayCards.Index'
        | 'ArrayCards.useArray'
        | 'ArrayCards.useIndex'
        | 'ArrayCards.useRecord'
        | 'ArrayItems.Item'
        | 'ArrayItems.Addition'
        | 'ArrayItems.Copy'
        | 'ArrayItems.Remove'
        | 'ArrayItems.MoveUp'
        | 'ArrayItems.MoveDown'
        | 'ArrayItems.SortHandle'
        | 'ArrayItems.Index'
        | 'ArrayItems.useArray'
        | 'ArrayItems.useIndex'
        | 'ArrayItems.useRecord'
        | 'Card.$$typeof'
        | 'Card.Meta'
        | 'Card.Grid'
        | 'NumberPicker.$$typeof'
        | 'Cascader.$$typeof'
        | 'FileManage.$$typeof'
        | 'Switch.$$typeof',
      Component_2 extends
        | 'HotArea'
        | 'Input'
        | 'Select'
        | 'DateRangePicker'
        | 'YearPicker'
        | 'TimeRangePicker'
        | 'Radio'
        | 'Checkbox'
        | 'FormItem'
        | 'Password'
        | 'ArrayCards'
        | 'ArrayItems'
        | 'Space'
        | 'Card'
        | 'NumberPicker'
        | 'Cascader'
        | 'FileManage'
        | 'LinksButton'
        | 'Switch'
        | 'LinkCoupon'
        | 'LinkGoods'
        | 'LinkRecommendId'
        | 'Input.TextArea'
        | 'DateRangePicker.RangePicker'
        | 'YearPicker.RangePicker'
        | 'TimeRangePicker.RangePicker'
        | 'Radio.Group'
        | 'Radio.__ANT_RADIO'
        | 'Checkbox.Group'
        | 'Checkbox.__ANT_CHECKBOX'
        | 'FormItem.BaseItem'
        | 'Password.$$typeof'
        | 'ArrayCards.Addition'
        | 'ArrayCards.Copy'
        | 'ArrayCards.Remove'
        | 'ArrayCards.MoveUp'
        | 'ArrayCards.MoveDown'
        | 'ArrayCards.SortHandle'
        | 'ArrayCards.Index'
        | 'ArrayCards.useArray'
        | 'ArrayCards.useIndex'
        | 'ArrayCards.useRecord'
        | 'ArrayItems.Item'
        | 'ArrayItems.Addition'
        | 'ArrayItems.Copy'
        | 'ArrayItems.Remove'
        | 'ArrayItems.MoveUp'
        | 'ArrayItems.MoveDown'
        | 'ArrayItems.SortHandle'
        | 'ArrayItems.Index'
        | 'ArrayItems.useArray'
        | 'ArrayItems.useIndex'
        | 'ArrayItems.useRecord'
        | 'Card.$$typeof'
        | 'Card.Meta'
        | 'Card.Grid'
        | 'NumberPicker.$$typeof'
        | 'Cascader.$$typeof'
        | 'FileManage.$$typeof'
        | 'Switch.$$typeof',
    >(
      props: import('@formily/react').ISchemaTypeFieldProps<
        {
          Radio: React.FC<React.PropsWithChildren<import('antd').RadioProps>> & {
            Group?: React.FC<React.PropsWithChildren<import('antd').RadioGroupProps>> | undefined;
            __ANT_RADIO?: boolean | undefined;
          };
          Checkbox: React.FC<React.PropsWithChildren<import('antd').CheckboxProps>> & {
            Group?:
              | React.FC<React.PropsWithChildren<import('antd/lib/checkbox').CheckboxGroupProps>>
              | undefined;
            __ANT_CHECKBOX?: boolean | undefined;
          };
          Input: React.FC<React.PropsWithChildren<import('antd').InputProps>> & {
            TextArea?:
              | React.FC<React.PropsWithChildren<import('antd/lib/input').TextAreaProps>>
              | undefined;
          };
          DateRangePicker: React.FC<React.PropsWithChildren<import('antd').DatePickerProps>> & {
            RangePicker?:
              | React.FC<React.PropsWithChildren<import('antd/lib/date-picker').RangePickerProps>>
              | undefined;
          };
          YearPicker: React.FC<React.PropsWithChildren<import('antd').DatePickerProps>> & {
            RangePicker?:
              | React.FC<React.PropsWithChildren<import('antd/lib/date-picker').RangePickerProps>>
              | undefined;
          };
          TimeRangePicker: React.FC<React.PropsWithChildren<import('antd').TimePickerProps>> & {
            RangePicker?:
              | React.FC<React.PropsWithChildren<import('antd').TimeRangePickerProps>>
              | undefined;
          };
          FormItem: React.FC<React.PropsWithChildren<import('@formily/antd').IFormItemProps>> & {
            BaseItem?:
              | React.FC<React.PropsWithChildren<import('@formily/antd').IFormItemProps>>
              | undefined;
          };
          Password: React.ForwardRefExoticComponent<
            Partial<import('@formily/antd').IPasswordProps> & React.RefAttributes<unknown>
          >;
          ArrayCards: React.FC<
            React.PropsWithChildren<
              import('antd').CardProps & import('@formily/antd').IArrayBaseProps
            >
          > &
            import('@formily/antd').ArrayBaseMixins;
          ArrayItems: React.FC<
            React.PropsWithChildren<
              React.HTMLAttributes<HTMLDivElement> & import('@formily/antd').IArrayBaseProps
            >
          > &
            import('@formily/antd').ArrayBaseMixins & {
              Item?:
                | React.FC<
                    React.HTMLAttributes<HTMLDivElement> & {
                      type?: 'card' | 'divide' | undefined;
                    }
                  >
                | undefined;
            };
          Select: import('@formily/react').ReactFC<import('antd').SelectProps<any, any>>;
          HotArea: React.FC<
            React.PropsWithChildren<{
              value: {
                link: string;
                left: number;
                top: number;
                width: number;
                height: number;
              }[];
            }>
          >;
          Space: React.FC<React.PropsWithChildren<import('antd').SpaceProps>>;
          Card: import('antd/lib/card').CardInterface;
          NumberPicker: React.ForwardRefExoticComponent<
            Pick<
              Partial<
                import('antd').InputNumberProps<string | number> & {
                  children?: React.ReactNode;
                } & {
                  ref?: React.Ref<HTMLInputElement> | undefined;
                }
              >,
              keyof import('antd').InputNumberProps<string | number>
            > &
              React.RefAttributes<unknown>
          >;
          Cascader: React.ForwardRefExoticComponent<
            (
              | Pick<
                  Partial<
                    Omit<
                      import('rc-cascader').SingleCascaderProps<
                        import('rc-cascader').DefaultOptionType
                      >,
                      'options' | 'checkable'
                    > & {
                      multiple?: false | undefined;
                    } & {
                      multiple?: boolean | undefined;
                      size?: import('antd/lib/button').ButtonSize;
                      bordered?: boolean | undefined;
                      placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight' | undefined;
                      suffixIcon?: React.ReactNode;
                      options?:
                        | (
                            | import('rc-cascader').DefaultOptionType
                            | import('rc-cascader').BaseOptionType
                          )[]
                        | undefined;
                      status?: '' | 'error' | 'warning' | undefined;
                    } & {
                      children?: React.ReactNode;
                    } & {
                      ref?: React.Ref<import('antd/lib/cascader').CascaderRef> | undefined;
                    }
                  >,
                  | 'style'
                  | 'children'
                  | 'defaultValue'
                  | 'autoFocus'
                  | 'className'
                  | 'id'
                  | 'placeholder'
                  | 'tabIndex'
                  | 'aria-activedescendant'
                  | 'aria-atomic'
                  | 'aria-autocomplete'
                  | 'aria-busy'
                  | 'aria-checked'
                  | 'aria-colcount'
                  | 'aria-colindex'
                  | 'aria-colspan'
                  | 'aria-controls'
                  | 'aria-current'
                  | 'aria-describedby'
                  | 'aria-details'
                  | 'aria-disabled'
                  | 'aria-dropeffect'
                  | 'aria-errormessage'
                  | 'aria-expanded'
                  | 'aria-flowto'
                  | 'aria-grabbed'
                  | 'aria-haspopup'
                  | 'aria-hidden'
                  | 'aria-invalid'
                  | 'aria-keyshortcuts'
                  | 'aria-label'
                  | 'aria-labelledby'
                  | 'aria-level'
                  | 'aria-live'
                  | 'aria-modal'
                  | 'aria-multiline'
                  | 'aria-multiselectable'
                  | 'aria-orientation'
                  | 'aria-owns'
                  | 'aria-placeholder'
                  | 'aria-posinset'
                  | 'aria-pressed'
                  | 'aria-readonly'
                  | 'aria-relevant'
                  | 'aria-required'
                  | 'aria-roledescription'
                  | 'aria-rowcount'
                  | 'aria-rowindex'
                  | 'aria-rowspan'
                  | 'aria-selected'
                  | 'aria-setsize'
                  | 'aria-sort'
                  | 'aria-valuemax'
                  | 'aria-valuemin'
                  | 'aria-valuenow'
                  | 'aria-valuetext'
                  | 'onFocus'
                  | 'onBlur'
                  | 'onChange'
                  | 'onKeyDown'
                  | 'onKeyUp'
                  | 'onClick'
                  | 'onMouseDown'
                  | 'onMouseEnter'
                  | 'onMouseLeave'
                  | 'status'
                  | 'loading'
                  | 'open'
                  | 'bordered'
                  | 'prefixCls'
                  | 'expandIcon'
                  | 'disabled'
                  | 'value'
                  | 'size'
                  | 'multiple'
                  | 'direction'
                  | 'getPopupContainer'
                  | 'popupClassName'
                  | 'searchValue'
                  | 'dropdownClassName'
                  | 'dropdownAlign'
                  | 'transitionName'
                  | 'allowClear'
                  | 'defaultOpen'
                  | 'suffixIcon'
                  | 'clearIcon'
                  | 'options'
                  | 'onSearch'
                  | 'placement'
                  | 'animation'
                  | 'showArrow'
                  | 'popupVisible'
                  | 'inputIcon'
                  | 'getInputElement'
                  | 'getRawInputElement'
                  | 'showSearch'
                  | 'tagRender'
                  | 'notFoundContent'
                  | 'onClear'
                  | 'choiceTransitionName'
                  | 'onDropdownVisibleChange'
                  | 'maxTagTextLength'
                  | 'maxTagCount'
                  | 'maxTagPlaceholder'
                  | 'removeIcon'
                  | 'dropdownStyle'
                  | 'dropdownMatchSelectWidth'
                  | 'dropdownRender'
                  | 'showAction'
                  | 'onPopupScroll'
                  | 'onInputKeyDown'
                  | 'fieldNames'
                  | 'changeOnSelect'
                  | 'displayRender'
                  | 'showCheckedStrategy'
                  | 'expandTrigger'
                  | 'dropdownPrefixCls'
                  | 'loadData'
                  | 'dropdownMenuColumnStyle'
                  | 'popupPlacement'
                  | 'onPopupVisibleChange'
                  | 'loadingIcon'
                >
              | Pick<
                  Partial<
                    Omit<
                      import('rc-cascader').MultipleCascaderProps<
                        import('rc-cascader').DefaultOptionType
                      >,
                      'options' | 'checkable'
                    > & {
                      multiple: true;
                    } & {
                      multiple?: boolean | undefined;
                      size?: import('antd/lib/button').ButtonSize;
                      bordered?: boolean | undefined;
                      placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight' | undefined;
                      suffixIcon?: React.ReactNode;
                      options?:
                        | (
                            | import('rc-cascader').DefaultOptionType
                            | import('rc-cascader').BaseOptionType
                          )[]
                        | undefined;
                      status?: '' | 'error' | 'warning' | undefined;
                    } & {
                      children?: React.ReactNode;
                    } & {
                      ref?: React.Ref<import('antd/lib/cascader').CascaderRef> | undefined;
                    }
                  >,
                  | 'style'
                  | 'children'
                  | 'defaultValue'
                  | 'autoFocus'
                  | 'className'
                  | 'id'
                  | 'placeholder'
                  | 'tabIndex'
                  | 'aria-activedescendant'
                  | 'aria-atomic'
                  | 'aria-autocomplete'
                  | 'aria-busy'
                  | 'aria-checked'
                  | 'aria-colcount'
                  | 'aria-colindex'
                  | 'aria-colspan'
                  | 'aria-controls'
                  | 'aria-current'
                  | 'aria-describedby'
                  | 'aria-details'
                  | 'aria-disabled'
                  | 'aria-dropeffect'
                  | 'aria-errormessage'
                  | 'aria-expanded'
                  | 'aria-flowto'
                  | 'aria-grabbed'
                  | 'aria-haspopup'
                  | 'aria-hidden'
                  | 'aria-invalid'
                  | 'aria-keyshortcuts'
                  | 'aria-label'
                  | 'aria-labelledby'
                  | 'aria-level'
                  | 'aria-live'
                  | 'aria-modal'
                  | 'aria-multiline'
                  | 'aria-multiselectable'
                  | 'aria-orientation'
                  | 'aria-owns'
                  | 'aria-placeholder'
                  | 'aria-posinset'
                  | 'aria-pressed'
                  | 'aria-readonly'
                  | 'aria-relevant'
                  | 'aria-required'
                  | 'aria-roledescription'
                  | 'aria-rowcount'
                  | 'aria-rowindex'
                  | 'aria-rowspan'
                  | 'aria-selected'
                  | 'aria-setsize'
                  | 'aria-sort'
                  | 'aria-valuemax'
                  | 'aria-valuemin'
                  | 'aria-valuenow'
                  | 'aria-valuetext'
                  | 'onFocus'
                  | 'onBlur'
                  | 'onChange'
                  | 'onKeyDown'
                  | 'onKeyUp'
                  | 'onClick'
                  | 'onMouseDown'
                  | 'onMouseEnter'
                  | 'onMouseLeave'
                  | 'status'
                  | 'loading'
                  | 'open'
                  | 'bordered'
                  | 'prefixCls'
                  | 'expandIcon'
                  | 'disabled'
                  | 'value'
                  | 'size'
                  | 'multiple'
                  | 'direction'
                  | 'getPopupContainer'
                  | 'popupClassName'
                  | 'searchValue'
                  | 'dropdownClassName'
                  | 'dropdownAlign'
                  | 'transitionName'
                  | 'allowClear'
                  | 'defaultOpen'
                  | 'suffixIcon'
                  | 'clearIcon'
                  | 'options'
                  | 'onSearch'
                  | 'placement'
                  | 'animation'
                  | 'showArrow'
                  | 'popupVisible'
                  | 'inputIcon'
                  | 'getInputElement'
                  | 'getRawInputElement'
                  | 'showSearch'
                  | 'tagRender'
                  | 'notFoundContent'
                  | 'onClear'
                  | 'choiceTransitionName'
                  | 'onDropdownVisibleChange'
                  | 'maxTagTextLength'
                  | 'maxTagCount'
                  | 'maxTagPlaceholder'
                  | 'removeIcon'
                  | 'dropdownStyle'
                  | 'dropdownMatchSelectWidth'
                  | 'dropdownRender'
                  | 'showAction'
                  | 'onPopupScroll'
                  | 'onInputKeyDown'
                  | 'fieldNames'
                  | 'changeOnSelect'
                  | 'displayRender'
                  | 'showCheckedStrategy'
                  | 'expandTrigger'
                  | 'dropdownPrefixCls'
                  | 'loadData'
                  | 'dropdownMenuColumnStyle'
                  | 'popupPlacement'
                  | 'onPopupVisibleChange'
                  | 'loadingIcon'
                >
            ) &
              React.RefAttributes<unknown>
          >;
          FileManage: React.ForwardRefExoticComponent<
            Omit<Partial<any>, 'ref'> & React.RefAttributes<unknown>
          >;
          LinksButton: React.FC<{
            value?: string | undefined;
            onChange?: ((value: string) => void) | undefined;
          }>;
          Switch: React.ForwardRefExoticComponent<
            Pick<
              Partial<import('antd').SwitchProps & React.RefAttributes<HTMLElement>>,
              'key' | keyof import('antd').SwitchProps
            > &
              React.RefAttributes<unknown>
          >;
          LinkCoupon: React.FC<{
            value?: import('../../components/LinkCoupon').DataType | undefined;
            onChange?:
              | ((value: import('../../components/LinkCoupon').DataType) => void)
              | undefined;
          }>;
          LinkGoods: React.FC<{
            value?: import('../../components/LinkGoods').DataType | undefined;
            onChange?: ((value: import('../../components/LinkGoods').DataType) => void) | undefined;
          }>;
          LinkRecommendId: React.FC<{
            value?: import('../../components/LinkRecommendId').DataType | undefined;
            onChange?:
              | ((value?: import('../../components/LinkRecommendId').DataType | undefined) => void)
              | undefined;
          }>;
        },
        Component_2,
        Decorator_2
      >,
    ): JSX.Element;
    displayName: string;
  };
  Object: {
    <
      Decorator_3 extends
        | 'HotArea'
        | 'Input'
        | 'Select'
        | 'DateRangePicker'
        | 'YearPicker'
        | 'TimeRangePicker'
        | 'Radio'
        | 'Checkbox'
        | 'FormItem'
        | 'Password'
        | 'ArrayCards'
        | 'ArrayItems'
        | 'Space'
        | 'Card'
        | 'NumberPicker'
        | 'Cascader'
        | 'FileManage'
        | 'LinksButton'
        | 'Switch'
        | 'LinkCoupon'
        | 'LinkGoods'
        | 'LinkRecommendId'
        | 'Input.TextArea'
        | 'DateRangePicker.RangePicker'
        | 'YearPicker.RangePicker'
        | 'TimeRangePicker.RangePicker'
        | 'Radio.Group'
        | 'Radio.__ANT_RADIO'
        | 'Checkbox.Group'
        | 'Checkbox.__ANT_CHECKBOX'
        | 'FormItem.BaseItem'
        | 'Password.$$typeof'
        | 'ArrayCards.Addition'
        | 'ArrayCards.Copy'
        | 'ArrayCards.Remove'
        | 'ArrayCards.MoveUp'
        | 'ArrayCards.MoveDown'
        | 'ArrayCards.SortHandle'
        | 'ArrayCards.Index'
        | 'ArrayCards.useArray'
        | 'ArrayCards.useIndex'
        | 'ArrayCards.useRecord'
        | 'ArrayItems.Item'
        | 'ArrayItems.Addition'
        | 'ArrayItems.Copy'
        | 'ArrayItems.Remove'
        | 'ArrayItems.MoveUp'
        | 'ArrayItems.MoveDown'
        | 'ArrayItems.SortHandle'
        | 'ArrayItems.Index'
        | 'ArrayItems.useArray'
        | 'ArrayItems.useIndex'
        | 'ArrayItems.useRecord'
        | 'Card.$$typeof'
        | 'Card.Meta'
        | 'Card.Grid'
        | 'NumberPicker.$$typeof'
        | 'Cascader.$$typeof'
        | 'FileManage.$$typeof'
        | 'Switch.$$typeof',
      Component_3 extends
        | 'HotArea'
        | 'Input'
        | 'Select'
        | 'DateRangePicker'
        | 'YearPicker'
        | 'TimeRangePicker'
        | 'Radio'
        | 'Checkbox'
        | 'FormItem'
        | 'Password'
        | 'ArrayCards'
        | 'ArrayItems'
        | 'Space'
        | 'Card'
        | 'NumberPicker'
        | 'Cascader'
        | 'FileManage'
        | 'LinksButton'
        | 'Switch'
        | 'LinkCoupon'
        | 'LinkGoods'
        | 'LinkRecommendId'
        | 'Input.TextArea'
        | 'DateRangePicker.RangePicker'
        | 'YearPicker.RangePicker'
        | 'TimeRangePicker.RangePicker'
        | 'Radio.Group'
        | 'Radio.__ANT_RADIO'
        | 'Checkbox.Group'
        | 'Checkbox.__ANT_CHECKBOX'
        | 'FormItem.BaseItem'
        | 'Password.$$typeof'
        | 'ArrayCards.Addition'
        | 'ArrayCards.Copy'
        | 'ArrayCards.Remove'
        | 'ArrayCards.MoveUp'
        | 'ArrayCards.MoveDown'
        | 'ArrayCards.SortHandle'
        | 'ArrayCards.Index'
        | 'ArrayCards.useArray'
        | 'ArrayCards.useIndex'
        | 'ArrayCards.useRecord'
        | 'ArrayItems.Item'
        | 'ArrayItems.Addition'
        | 'ArrayItems.Copy'
        | 'ArrayItems.Remove'
        | 'ArrayItems.MoveUp'
        | 'ArrayItems.MoveDown'
        | 'ArrayItems.SortHandle'
        | 'ArrayItems.Index'
        | 'ArrayItems.useArray'
        | 'ArrayItems.useIndex'
        | 'ArrayItems.useRecord'
        | 'Card.$$typeof'
        | 'Card.Meta'
        | 'Card.Grid'
        | 'NumberPicker.$$typeof'
        | 'Cascader.$$typeof'
        | 'FileManage.$$typeof'
        | 'Switch.$$typeof',
    >(
      props: import('@formily/react').ISchemaTypeFieldProps<
        {
          Radio: React.FC<React.PropsWithChildren<import('antd').RadioProps>> & {
            Group?: React.FC<React.PropsWithChildren<import('antd').RadioGroupProps>> | undefined;
            __ANT_RADIO?: boolean | undefined;
          };
          Checkbox: React.FC<React.PropsWithChildren<import('antd').CheckboxProps>> & {
            Group?:
              | React.FC<React.PropsWithChildren<import('antd/lib/checkbox').CheckboxGroupProps>>
              | undefined;
            __ANT_CHECKBOX?: boolean | undefined;
          };
          Input: React.FC<React.PropsWithChildren<import('antd').InputProps>> & {
            TextArea?:
              | React.FC<React.PropsWithChildren<import('antd/lib/input').TextAreaProps>>
              | undefined;
          };
          DateRangePicker: React.FC<React.PropsWithChildren<import('antd').DatePickerProps>> & {
            RangePicker?:
              | React.FC<React.PropsWithChildren<import('antd/lib/date-picker').RangePickerProps>>
              | undefined;
          };
          YearPicker: React.FC<React.PropsWithChildren<import('antd').DatePickerProps>> & {
            RangePicker?:
              | React.FC<React.PropsWithChildren<import('antd/lib/date-picker').RangePickerProps>>
              | undefined;
          };
          TimeRangePicker: React.FC<React.PropsWithChildren<import('antd').TimePickerProps>> & {
            RangePicker?:
              | React.FC<React.PropsWithChildren<import('antd').TimeRangePickerProps>>
              | undefined;
          };
          FormItem: React.FC<React.PropsWithChildren<import('@formily/antd').IFormItemProps>> & {
            BaseItem?:
              | React.FC<React.PropsWithChildren<import('@formily/antd').IFormItemProps>>
              | undefined;
          };
          Password: React.ForwardRefExoticComponent<
            Partial<import('@formily/antd').IPasswordProps> & React.RefAttributes<unknown>
          >;
          ArrayCards: React.FC<
            React.PropsWithChildren<
              import('antd').CardProps & import('@formily/antd').IArrayBaseProps
            >
          > &
            import('@formily/antd').ArrayBaseMixins;
          ArrayItems: React.FC<
            React.PropsWithChildren<
              React.HTMLAttributes<HTMLDivElement> & import('@formily/antd').IArrayBaseProps
            >
          > &
            import('@formily/antd').ArrayBaseMixins & {
              Item?:
                | React.FC<
                    React.HTMLAttributes<HTMLDivElement> & {
                      type?: 'card' | 'divide' | undefined;
                    }
                  >
                | undefined;
            };
          Select: import('@formily/react').ReactFC<import('antd').SelectProps<any, any>>;
          HotArea: React.FC<
            React.PropsWithChildren<{
              value: {
                link: string;
                left: number;
                top: number;
                width: number;
                height: number;
              }[];
            }>
          >;
          Space: React.FC<React.PropsWithChildren<import('antd').SpaceProps>>;
          Card: import('antd/lib/card').CardInterface;
          NumberPicker: React.ForwardRefExoticComponent<
            Pick<
              Partial<
                import('antd').InputNumberProps<string | number> & {
                  children?: React.ReactNode;
                } & {
                  ref?: React.Ref<HTMLInputElement> | undefined;
                }
              >,
              keyof import('antd').InputNumberProps<string | number>
            > &
              React.RefAttributes<unknown>
          >;
          Cascader: React.ForwardRefExoticComponent<
            (
              | Pick<
                  Partial<
                    Omit<
                      import('rc-cascader').SingleCascaderProps<
                        import('rc-cascader').DefaultOptionType
                      >,
                      'options' | 'checkable'
                    > & {
                      multiple?: false | undefined;
                    } & {
                      multiple?: boolean | undefined;
                      size?: import('antd/lib/button').ButtonSize;
                      bordered?: boolean | undefined;
                      placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight' | undefined;
                      suffixIcon?: React.ReactNode;
                      options?:
                        | (
                            | import('rc-cascader').DefaultOptionType
                            | import('rc-cascader').BaseOptionType
                          )[]
                        | undefined;
                      status?: '' | 'error' | 'warning' | undefined;
                    } & {
                      children?: React.ReactNode;
                    } & {
                      ref?: React.Ref<import('antd/lib/cascader').CascaderRef> | undefined;
                    }
                  >,
                  | 'style'
                  | 'children'
                  | 'defaultValue'
                  | 'autoFocus'
                  | 'className'
                  | 'id'
                  | 'placeholder'
                  | 'tabIndex'
                  | 'aria-activedescendant'
                  | 'aria-atomic'
                  | 'aria-autocomplete'
                  | 'aria-busy'
                  | 'aria-checked'
                  | 'aria-colcount'
                  | 'aria-colindex'
                  | 'aria-colspan'
                  | 'aria-controls'
                  | 'aria-current'
                  | 'aria-describedby'
                  | 'aria-details'
                  | 'aria-disabled'
                  | 'aria-dropeffect'
                  | 'aria-errormessage'
                  | 'aria-expanded'
                  | 'aria-flowto'
                  | 'aria-grabbed'
                  | 'aria-haspopup'
                  | 'aria-hidden'
                  | 'aria-invalid'
                  | 'aria-keyshortcuts'
                  | 'aria-label'
                  | 'aria-labelledby'
                  | 'aria-level'
                  | 'aria-live'
                  | 'aria-modal'
                  | 'aria-multiline'
                  | 'aria-multiselectable'
                  | 'aria-orientation'
                  | 'aria-owns'
                  | 'aria-placeholder'
                  | 'aria-posinset'
                  | 'aria-pressed'
                  | 'aria-readonly'
                  | 'aria-relevant'
                  | 'aria-required'
                  | 'aria-roledescription'
                  | 'aria-rowcount'
                  | 'aria-rowindex'
                  | 'aria-rowspan'
                  | 'aria-selected'
                  | 'aria-setsize'
                  | 'aria-sort'
                  | 'aria-valuemax'
                  | 'aria-valuemin'
                  | 'aria-valuenow'
                  | 'aria-valuetext'
                  | 'onFocus'
                  | 'onBlur'
                  | 'onChange'
                  | 'onKeyDown'
                  | 'onKeyUp'
                  | 'onClick'
                  | 'onMouseDown'
                  | 'onMouseEnter'
                  | 'onMouseLeave'
                  | 'status'
                  | 'loading'
                  | 'open'
                  | 'bordered'
                  | 'prefixCls'
                  | 'expandIcon'
                  | 'disabled'
                  | 'value'
                  | 'size'
                  | 'multiple'
                  | 'direction'
                  | 'getPopupContainer'
                  | 'popupClassName'
                  | 'searchValue'
                  | 'dropdownClassName'
                  | 'dropdownAlign'
                  | 'transitionName'
                  | 'allowClear'
                  | 'defaultOpen'
                  | 'suffixIcon'
                  | 'clearIcon'
                  | 'options'
                  | 'onSearch'
                  | 'placement'
                  | 'animation'
                  | 'showArrow'
                  | 'popupVisible'
                  | 'inputIcon'
                  | 'getInputElement'
                  | 'getRawInputElement'
                  | 'showSearch'
                  | 'tagRender'
                  | 'notFoundContent'
                  | 'onClear'
                  | 'choiceTransitionName'
                  | 'onDropdownVisibleChange'
                  | 'maxTagTextLength'
                  | 'maxTagCount'
                  | 'maxTagPlaceholder'
                  | 'removeIcon'
                  | 'dropdownStyle'
                  | 'dropdownMatchSelectWidth'
                  | 'dropdownRender'
                  | 'showAction'
                  | 'onPopupScroll'
                  | 'onInputKeyDown'
                  | 'fieldNames'
                  | 'changeOnSelect'
                  | 'displayRender'
                  | 'showCheckedStrategy'
                  | 'expandTrigger'
                  | 'dropdownPrefixCls'
                  | 'loadData'
                  | 'dropdownMenuColumnStyle'
                  | 'popupPlacement'
                  | 'onPopupVisibleChange'
                  | 'loadingIcon'
                >
              | Pick<
                  Partial<
                    Omit<
                      import('rc-cascader').MultipleCascaderProps<
                        import('rc-cascader').DefaultOptionType
                      >,
                      'options' | 'checkable'
                    > & {
                      multiple: true;
                    } & {
                      multiple?: boolean | undefined;
                      size?: import('antd/lib/button').ButtonSize;
                      bordered?: boolean | undefined;
                      placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight' | undefined;
                      suffixIcon?: React.ReactNode;
                      options?:
                        | (
                            | import('rc-cascader').DefaultOptionType
                            | import('rc-cascader').BaseOptionType
                          )[]
                        | undefined;
                      status?: '' | 'error' | 'warning' | undefined;
                    } & {
                      children?: React.ReactNode;
                    } & {
                      ref?: React.Ref<import('antd/lib/cascader').CascaderRef> | undefined;
                    }
                  >,
                  | 'style'
                  | 'children'
                  | 'defaultValue'
                  | 'autoFocus'
                  | 'className'
                  | 'id'
                  | 'placeholder'
                  | 'tabIndex'
                  | 'aria-activedescendant'
                  | 'aria-atomic'
                  | 'aria-autocomplete'
                  | 'aria-busy'
                  | 'aria-checked'
                  | 'aria-colcount'
                  | 'aria-colindex'
                  | 'aria-colspan'
                  | 'aria-controls'
                  | 'aria-current'
                  | 'aria-describedby'
                  | 'aria-details'
                  | 'aria-disabled'
                  | 'aria-dropeffect'
                  | 'aria-errormessage'
                  | 'aria-expanded'
                  | 'aria-flowto'
                  | 'aria-grabbed'
                  | 'aria-haspopup'
                  | 'aria-hidden'
                  | 'aria-invalid'
                  | 'aria-keyshortcuts'
                  | 'aria-label'
                  | 'aria-labelledby'
                  | 'aria-level'
                  | 'aria-live'
                  | 'aria-modal'
                  | 'aria-multiline'
                  | 'aria-multiselectable'
                  | 'aria-orientation'
                  | 'aria-owns'
                  | 'aria-placeholder'
                  | 'aria-posinset'
                  | 'aria-pressed'
                  | 'aria-readonly'
                  | 'aria-relevant'
                  | 'aria-required'
                  | 'aria-roledescription'
                  | 'aria-rowcount'
                  | 'aria-rowindex'
                  | 'aria-rowspan'
                  | 'aria-selected'
                  | 'aria-setsize'
                  | 'aria-sort'
                  | 'aria-valuemax'
                  | 'aria-valuemin'
                  | 'aria-valuenow'
                  | 'aria-valuetext'
                  | 'onFocus'
                  | 'onBlur'
                  | 'onChange'
                  | 'onKeyDown'
                  | 'onKeyUp'
                  | 'onClick'
                  | 'onMouseDown'
                  | 'onMouseEnter'
                  | 'onMouseLeave'
                  | 'status'
                  | 'loading'
                  | 'open'
                  | 'bordered'
                  | 'prefixCls'
                  | 'expandIcon'
                  | 'disabled'
                  | 'value'
                  | 'size'
                  | 'multiple'
                  | 'direction'
                  | 'getPopupContainer'
                  | 'popupClassName'
                  | 'searchValue'
                  | 'dropdownClassName'
                  | 'dropdownAlign'
                  | 'transitionName'
                  | 'allowClear'
                  | 'defaultOpen'
                  | 'suffixIcon'
                  | 'clearIcon'
                  | 'options'
                  | 'onSearch'
                  | 'placement'
                  | 'animation'
                  | 'showArrow'
                  | 'popupVisible'
                  | 'inputIcon'
                  | 'getInputElement'
                  | 'getRawInputElement'
                  | 'showSearch'
                  | 'tagRender'
                  | 'notFoundContent'
                  | 'onClear'
                  | 'choiceTransitionName'
                  | 'onDropdownVisibleChange'
                  | 'maxTagTextLength'
                  | 'maxTagCount'
                  | 'maxTagPlaceholder'
                  | 'removeIcon'
                  | 'dropdownStyle'
                  | 'dropdownMatchSelectWidth'
                  | 'dropdownRender'
                  | 'showAction'
                  | 'onPopupScroll'
                  | 'onInputKeyDown'
                  | 'fieldNames'
                  | 'changeOnSelect'
                  | 'displayRender'
                  | 'showCheckedStrategy'
                  | 'expandTrigger'
                  | 'dropdownPrefixCls'
                  | 'loadData'
                  | 'dropdownMenuColumnStyle'
                  | 'popupPlacement'
                  | 'onPopupVisibleChange'
                  | 'loadingIcon'
                >
            ) &
              React.RefAttributes<unknown>
          >;
          FileManage: React.ForwardRefExoticComponent<
            Omit<Partial<any>, 'ref'> & React.RefAttributes<unknown>
          >;
          LinksButton: React.FC<{
            value?: string | undefined;
            onChange?: ((value: string) => void) | undefined;
          }>;
          Switch: React.ForwardRefExoticComponent<
            Pick<
              Partial<import('antd').SwitchProps & React.RefAttributes<HTMLElement>>,
              'key' | keyof import('antd').SwitchProps
            > &
              React.RefAttributes<unknown>
          >;
          LinkCoupon: React.FC<{
            value?: import('../../components/LinkCoupon').DataType | undefined;
            onChange?:
              | ((value: import('../../components/LinkCoupon').DataType) => void)
              | undefined;
          }>;
          LinkGoods: React.FC<{
            value?: import('../../components/LinkGoods').DataType | undefined;
            onChange?: ((value: import('../../components/LinkGoods').DataType) => void) | undefined;
          }>;
          LinkRecommendId: React.FC<{
            value?: import('../../components/LinkRecommendId').DataType | undefined;
            onChange?:
              | ((value?: import('../../components/LinkRecommendId').DataType | undefined) => void)
              | undefined;
          }>;
        },
        Component_3,
        Decorator_3
      >,
    ): JSX.Element;
    displayName: string;
  };
  Array: {
    <
      Decorator_4 extends
        | 'HotArea'
        | 'Input'
        | 'Select'
        | 'DateRangePicker'
        | 'YearPicker'
        | 'TimeRangePicker'
        | 'Radio'
        | 'Checkbox'
        | 'FormItem'
        | 'Password'
        | 'ArrayCards'
        | 'ArrayItems'
        | 'Space'
        | 'Card'
        | 'NumberPicker'
        | 'Cascader'
        | 'FileManage'
        | 'LinksButton'
        | 'Switch'
        | 'LinkCoupon'
        | 'LinkGoods'
        | 'LinkRecommendId'
        | 'Input.TextArea'
        | 'DateRangePicker.RangePicker'
        | 'YearPicker.RangePicker'
        | 'TimeRangePicker.RangePicker'
        | 'Radio.Group'
        | 'Radio.__ANT_RADIO'
        | 'Checkbox.Group'
        | 'Checkbox.__ANT_CHECKBOX'
        | 'FormItem.BaseItem'
        | 'Password.$$typeof'
        | 'ArrayCards.Addition'
        | 'ArrayCards.Copy'
        | 'ArrayCards.Remove'
        | 'ArrayCards.MoveUp'
        | 'ArrayCards.MoveDown'
        | 'ArrayCards.SortHandle'
        | 'ArrayCards.Index'
        | 'ArrayCards.useArray'
        | 'ArrayCards.useIndex'
        | 'ArrayCards.useRecord'
        | 'ArrayItems.Item'
        | 'ArrayItems.Addition'
        | 'ArrayItems.Copy'
        | 'ArrayItems.Remove'
        | 'ArrayItems.MoveUp'
        | 'ArrayItems.MoveDown'
        | 'ArrayItems.SortHandle'
        | 'ArrayItems.Index'
        | 'ArrayItems.useArray'
        | 'ArrayItems.useIndex'
        | 'ArrayItems.useRecord'
        | 'Card.$$typeof'
        | 'Card.Meta'
        | 'Card.Grid'
        | 'NumberPicker.$$typeof'
        | 'Cascader.$$typeof'
        | 'FileManage.$$typeof'
        | 'Switch.$$typeof',
      Component_4 extends
        | 'HotArea'
        | 'Input'
        | 'Select'
        | 'DateRangePicker'
        | 'YearPicker'
        | 'TimeRangePicker'
        | 'Radio'
        | 'Checkbox'
        | 'FormItem'
        | 'Password'
        | 'ArrayCards'
        | 'ArrayItems'
        | 'Space'
        | 'Card'
        | 'NumberPicker'
        | 'Cascader'
        | 'FileManage'
        | 'LinksButton'
        | 'Switch'
        | 'LinkCoupon'
        | 'LinkGoods'
        | 'LinkRecommendId'
        | 'Input.TextArea'
        | 'DateRangePicker.RangePicker'
        | 'YearPicker.RangePicker'
        | 'TimeRangePicker.RangePicker'
        | 'Radio.Group'
        | 'Radio.__ANT_RADIO'
        | 'Checkbox.Group'
        | 'Checkbox.__ANT_CHECKBOX'
        | 'FormItem.BaseItem'
        | 'Password.$$typeof'
        | 'ArrayCards.Addition'
        | 'ArrayCards.Copy'
        | 'ArrayCards.Remove'
        | 'ArrayCards.MoveUp'
        | 'ArrayCards.MoveDown'
        | 'ArrayCards.SortHandle'
        | 'ArrayCards.Index'
        | 'ArrayCards.useArray'
        | 'ArrayCards.useIndex'
        | 'ArrayCards.useRecord'
        | 'ArrayItems.Item'
        | 'ArrayItems.Addition'
        | 'ArrayItems.Copy'
        | 'ArrayItems.Remove'
        | 'ArrayItems.MoveUp'
        | 'ArrayItems.MoveDown'
        | 'ArrayItems.SortHandle'
        | 'ArrayItems.Index'
        | 'ArrayItems.useArray'
        | 'ArrayItems.useIndex'
        | 'ArrayItems.useRecord'
        | 'Card.$$typeof'
        | 'Card.Meta'
        | 'Card.Grid'
        | 'NumberPicker.$$typeof'
        | 'Cascader.$$typeof'
        | 'FileManage.$$typeof'
        | 'Switch.$$typeof',
    >(
      props: import('@formily/react').ISchemaTypeFieldProps<
        {
          Radio: React.FC<React.PropsWithChildren<import('antd').RadioProps>> & {
            Group?: React.FC<React.PropsWithChildren<import('antd').RadioGroupProps>> | undefined;
            __ANT_RADIO?: boolean | undefined;
          };
          Checkbox: React.FC<React.PropsWithChildren<import('antd').CheckboxProps>> & {
            Group?:
              | React.FC<React.PropsWithChildren<import('antd/lib/checkbox').CheckboxGroupProps>>
              | undefined;
            __ANT_CHECKBOX?: boolean | undefined;
          };
          Input: React.FC<React.PropsWithChildren<import('antd').InputProps>> & {
            TextArea?:
              | React.FC<React.PropsWithChildren<import('antd/lib/input').TextAreaProps>>
              | undefined;
          };
          DateRangePicker: React.FC<React.PropsWithChildren<import('antd').DatePickerProps>> & {
            RangePicker?:
              | React.FC<React.PropsWithChildren<import('antd/lib/date-picker').RangePickerProps>>
              | undefined;
          };
          YearPicker: React.FC<React.PropsWithChildren<import('antd').DatePickerProps>> & {
            RangePicker?:
              | React.FC<React.PropsWithChildren<import('antd/lib/date-picker').RangePickerProps>>
              | undefined;
          };
          TimeRangePicker: React.FC<React.PropsWithChildren<import('antd').TimePickerProps>> & {
            RangePicker?:
              | React.FC<React.PropsWithChildren<import('antd').TimeRangePickerProps>>
              | undefined;
          };
          FormItem: React.FC<React.PropsWithChildren<import('@formily/antd').IFormItemProps>> & {
            BaseItem?:
              | React.FC<React.PropsWithChildren<import('@formily/antd').IFormItemProps>>
              | undefined;
          };
          Password: React.ForwardRefExoticComponent<
            Partial<import('@formily/antd').IPasswordProps> & React.RefAttributes<unknown>
          >;
          ArrayCards: React.FC<
            React.PropsWithChildren<
              import('antd').CardProps & import('@formily/antd').IArrayBaseProps
            >
          > &
            import('@formily/antd').ArrayBaseMixins;
          ArrayItems: React.FC<
            React.PropsWithChildren<
              React.HTMLAttributes<HTMLDivElement> & import('@formily/antd').IArrayBaseProps
            >
          > &
            import('@formily/antd').ArrayBaseMixins & {
              Item?:
                | React.FC<
                    React.HTMLAttributes<HTMLDivElement> & {
                      type?: 'card' | 'divide' | undefined;
                    }
                  >
                | undefined;
            };
          Select: import('@formily/react').ReactFC<import('antd').SelectProps<any, any>>;
          HotArea: React.FC<
            React.PropsWithChildren<{
              value: {
                link: string;
                left: number;
                top: number;
                width: number;
                height: number;
              }[];
            }>
          >;
          Space: React.FC<React.PropsWithChildren<import('antd').SpaceProps>>;
          Card: import('antd/lib/card').CardInterface;
          NumberPicker: React.ForwardRefExoticComponent<
            Pick<
              Partial<
                import('antd').InputNumberProps<string | number> & {
                  children?: React.ReactNode;
                } & {
                  ref?: React.Ref<HTMLInputElement> | undefined;
                }
              >,
              keyof import('antd').InputNumberProps<string | number>
            > &
              React.RefAttributes<unknown>
          >;
          Cascader: React.ForwardRefExoticComponent<
            (
              | Pick<
                  Partial<
                    Omit<
                      import('rc-cascader').SingleCascaderProps<
                        import('rc-cascader').DefaultOptionType
                      >,
                      'options' | 'checkable'
                    > & {
                      multiple?: false | undefined;
                    } & {
                      multiple?: boolean | undefined;
                      size?: import('antd/lib/button').ButtonSize;
                      bordered?: boolean | undefined;
                      placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight' | undefined;
                      suffixIcon?: React.ReactNode;
                      options?:
                        | (
                            | import('rc-cascader').DefaultOptionType
                            | import('rc-cascader').BaseOptionType
                          )[]
                        | undefined;
                      status?: '' | 'error' | 'warning' | undefined;
                    } & {
                      children?: React.ReactNode;
                    } & {
                      ref?: React.Ref<import('antd/lib/cascader').CascaderRef> | undefined;
                    }
                  >,
                  | 'style'
                  | 'children'
                  | 'defaultValue'
                  | 'autoFocus'
                  | 'className'
                  | 'id'
                  | 'placeholder'
                  | 'tabIndex'
                  | 'aria-activedescendant'
                  | 'aria-atomic'
                  | 'aria-autocomplete'
                  | 'aria-busy'
                  | 'aria-checked'
                  | 'aria-colcount'
                  | 'aria-colindex'
                  | 'aria-colspan'
                  | 'aria-controls'
                  | 'aria-current'
                  | 'aria-describedby'
                  | 'aria-details'
                  | 'aria-disabled'
                  | 'aria-dropeffect'
                  | 'aria-errormessage'
                  | 'aria-expanded'
                  | 'aria-flowto'
                  | 'aria-grabbed'
                  | 'aria-haspopup'
                  | 'aria-hidden'
                  | 'aria-invalid'
                  | 'aria-keyshortcuts'
                  | 'aria-label'
                  | 'aria-labelledby'
                  | 'aria-level'
                  | 'aria-live'
                  | 'aria-modal'
                  | 'aria-multiline'
                  | 'aria-multiselectable'
                  | 'aria-orientation'
                  | 'aria-owns'
                  | 'aria-placeholder'
                  | 'aria-posinset'
                  | 'aria-pressed'
                  | 'aria-readonly'
                  | 'aria-relevant'
                  | 'aria-required'
                  | 'aria-roledescription'
                  | 'aria-rowcount'
                  | 'aria-rowindex'
                  | 'aria-rowspan'
                  | 'aria-selected'
                  | 'aria-setsize'
                  | 'aria-sort'
                  | 'aria-valuemax'
                  | 'aria-valuemin'
                  | 'aria-valuenow'
                  | 'aria-valuetext'
                  | 'onFocus'
                  | 'onBlur'
                  | 'onChange'
                  | 'onKeyDown'
                  | 'onKeyUp'
                  | 'onClick'
                  | 'onMouseDown'
                  | 'onMouseEnter'
                  | 'onMouseLeave'
                  | 'status'
                  | 'loading'
                  | 'open'
                  | 'bordered'
                  | 'prefixCls'
                  | 'expandIcon'
                  | 'disabled'
                  | 'value'
                  | 'size'
                  | 'multiple'
                  | 'direction'
                  | 'getPopupContainer'
                  | 'popupClassName'
                  | 'searchValue'
                  | 'dropdownClassName'
                  | 'dropdownAlign'
                  | 'transitionName'
                  | 'allowClear'
                  | 'defaultOpen'
                  | 'suffixIcon'
                  | 'clearIcon'
                  | 'options'
                  | 'onSearch'
                  | 'placement'
                  | 'animation'
                  | 'showArrow'
                  | 'popupVisible'
                  | 'inputIcon'
                  | 'getInputElement'
                  | 'getRawInputElement'
                  | 'showSearch'
                  | 'tagRender'
                  | 'notFoundContent'
                  | 'onClear'
                  | 'choiceTransitionName'
                  | 'onDropdownVisibleChange'
                  | 'maxTagTextLength'
                  | 'maxTagCount'
                  | 'maxTagPlaceholder'
                  | 'removeIcon'
                  | 'dropdownStyle'
                  | 'dropdownMatchSelectWidth'
                  | 'dropdownRender'
                  | 'showAction'
                  | 'onPopupScroll'
                  | 'onInputKeyDown'
                  | 'fieldNames'
                  | 'changeOnSelect'
                  | 'displayRender'
                  | 'showCheckedStrategy'
                  | 'expandTrigger'
                  | 'dropdownPrefixCls'
                  | 'loadData'
                  | 'dropdownMenuColumnStyle'
                  | 'popupPlacement'
                  | 'onPopupVisibleChange'
                  | 'loadingIcon'
                >
              | Pick<
                  Partial<
                    Omit<
                      import('rc-cascader').MultipleCascaderProps<
                        import('rc-cascader').DefaultOptionType
                      >,
                      'options' | 'checkable'
                    > & {
                      multiple: true;
                    } & {
                      multiple?: boolean | undefined;
                      size?: import('antd/lib/button').ButtonSize;
                      bordered?: boolean | undefined;
                      placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight' | undefined;
                      suffixIcon?: React.ReactNode;
                      options?:
                        | (
                            | import('rc-cascader').DefaultOptionType
                            | import('rc-cascader').BaseOptionType
                          )[]
                        | undefined;
                      status?: '' | 'error' | 'warning' | undefined;
                    } & {
                      children?: React.ReactNode;
                    } & {
                      ref?: React.Ref<import('antd/lib/cascader').CascaderRef> | undefined;
                    }
                  >,
                  | 'style'
                  | 'children'
                  | 'defaultValue'
                  | 'autoFocus'
                  | 'className'
                  | 'id'
                  | 'placeholder'
                  | 'tabIndex'
                  | 'aria-activedescendant'
                  | 'aria-atomic'
                  | 'aria-autocomplete'
                  | 'aria-busy'
                  | 'aria-checked'
                  | 'aria-colcount'
                  | 'aria-colindex'
                  | 'aria-colspan'
                  | 'aria-controls'
                  | 'aria-current'
                  | 'aria-describedby'
                  | 'aria-details'
                  | 'aria-disabled'
                  | 'aria-dropeffect'
                  | 'aria-errormessage'
                  | 'aria-expanded'
                  | 'aria-flowto'
                  | 'aria-grabbed'
                  | 'aria-haspopup'
                  | 'aria-hidden'
                  | 'aria-invalid'
                  | 'aria-keyshortcuts'
                  | 'aria-label'
                  | 'aria-labelledby'
                  | 'aria-level'
                  | 'aria-live'
                  | 'aria-modal'
                  | 'aria-multiline'
                  | 'aria-multiselectable'
                  | 'aria-orientation'
                  | 'aria-owns'
                  | 'aria-placeholder'
                  | 'aria-posinset'
                  | 'aria-pressed'
                  | 'aria-readonly'
                  | 'aria-relevant'
                  | 'aria-required'
                  | 'aria-roledescription'
                  | 'aria-rowcount'
                  | 'aria-rowindex'
                  | 'aria-rowspan'
                  | 'aria-selected'
                  | 'aria-setsize'
                  | 'aria-sort'
                  | 'aria-valuemax'
                  | 'aria-valuemin'
                  | 'aria-valuenow'
                  | 'aria-valuetext'
                  | 'onFocus'
                  | 'onBlur'
                  | 'onChange'
                  | 'onKeyDown'
                  | 'onKeyUp'
                  | 'onClick'
                  | 'onMouseDown'
                  | 'onMouseEnter'
                  | 'onMouseLeave'
                  | 'status'
                  | 'loading'
                  | 'open'
                  | 'bordered'
                  | 'prefixCls'
                  | 'expandIcon'
                  | 'disabled'
                  | 'value'
                  | 'size'
                  | 'multiple'
                  | 'direction'
                  | 'getPopupContainer'
                  | 'popupClassName'
                  | 'searchValue'
                  | 'dropdownClassName'
                  | 'dropdownAlign'
                  | 'transitionName'
                  | 'allowClear'
                  | 'defaultOpen'
                  | 'suffixIcon'
                  | 'clearIcon'
                  | 'options'
                  | 'onSearch'
                  | 'placement'
                  | 'animation'
                  | 'showArrow'
                  | 'popupVisible'
                  | 'inputIcon'
                  | 'getInputElement'
                  | 'getRawInputElement'
                  | 'showSearch'
                  | 'tagRender'
                  | 'notFoundContent'
                  | 'onClear'
                  | 'choiceTransitionName'
                  | 'onDropdownVisibleChange'
                  | 'maxTagTextLength'
                  | 'maxTagCount'
                  | 'maxTagPlaceholder'
                  | 'removeIcon'
                  | 'dropdownStyle'
                  | 'dropdownMatchSelectWidth'
                  | 'dropdownRender'
                  | 'showAction'
                  | 'onPopupScroll'
                  | 'onInputKeyDown'
                  | 'fieldNames'
                  | 'changeOnSelect'
                  | 'displayRender'
                  | 'showCheckedStrategy'
                  | 'expandTrigger'
                  | 'dropdownPrefixCls'
                  | 'loadData'
                  | 'dropdownMenuColumnStyle'
                  | 'popupPlacement'
                  | 'onPopupVisibleChange'
                  | 'loadingIcon'
                >
            ) &
              React.RefAttributes<unknown>
          >;
          FileManage: React.ForwardRefExoticComponent<
            Omit<Partial<any>, 'ref'> & React.RefAttributes<unknown>
          >;
          LinksButton: React.FC<{
            value?: string | undefined;
            onChange?: ((value: string) => void) | undefined;
          }>;
          Switch: React.ForwardRefExoticComponent<
            Pick<
              Partial<import('antd').SwitchProps & React.RefAttributes<HTMLElement>>,
              'key' | keyof import('antd').SwitchProps
            > &
              React.RefAttributes<unknown>
          >;
          LinkCoupon: React.FC<{
            value?: import('../../components/LinkCoupon').DataType | undefined;
            onChange?:
              | ((value: import('../../components/LinkCoupon').DataType) => void)
              | undefined;
          }>;
          LinkGoods: React.FC<{
            value?: import('../../components/LinkGoods').DataType | undefined;
            onChange?: ((value: import('../../components/LinkGoods').DataType) => void) | undefined;
          }>;
          LinkRecommendId: React.FC<{
            value?: import('../../components/LinkRecommendId').DataType | undefined;
            onChange?:
              | ((value?: import('../../components/LinkRecommendId').DataType | undefined) => void)
              | undefined;
          }>;
        },
        Component_4,
        Decorator_4
      >,
    ): JSX.Element;
    displayName: string;
  };
  Boolean: {
    <
      Decorator_5 extends
        | 'HotArea'
        | 'Input'
        | 'Select'
        | 'DateRangePicker'
        | 'YearPicker'
        | 'TimeRangePicker'
        | 'Radio'
        | 'Checkbox'
        | 'FormItem'
        | 'Password'
        | 'ArrayCards'
        | 'ArrayItems'
        | 'Space'
        | 'Card'
        | 'NumberPicker'
        | 'Cascader'
        | 'FileManage'
        | 'LinksButton'
        | 'Switch'
        | 'LinkCoupon'
        | 'LinkGoods'
        | 'LinkRecommendId'
        | 'Input.TextArea'
        | 'DateRangePicker.RangePicker'
        | 'YearPicker.RangePicker'
        | 'TimeRangePicker.RangePicker'
        | 'Radio.Group'
        | 'Radio.__ANT_RADIO'
        | 'Checkbox.Group'
        | 'Checkbox.__ANT_CHECKBOX'
        | 'FormItem.BaseItem'
        | 'Password.$$typeof'
        | 'ArrayCards.Addition'
        | 'ArrayCards.Copy'
        | 'ArrayCards.Remove'
        | 'ArrayCards.MoveUp'
        | 'ArrayCards.MoveDown'
        | 'ArrayCards.SortHandle'
        | 'ArrayCards.Index'
        | 'ArrayCards.useArray'
        | 'ArrayCards.useIndex'
        | 'ArrayCards.useRecord'
        | 'ArrayItems.Item'
        | 'ArrayItems.Addition'
        | 'ArrayItems.Copy'
        | 'ArrayItems.Remove'
        | 'ArrayItems.MoveUp'
        | 'ArrayItems.MoveDown'
        | 'ArrayItems.SortHandle'
        | 'ArrayItems.Index'
        | 'ArrayItems.useArray'
        | 'ArrayItems.useIndex'
        | 'ArrayItems.useRecord'
        | 'Card.$$typeof'
        | 'Card.Meta'
        | 'Card.Grid'
        | 'NumberPicker.$$typeof'
        | 'Cascader.$$typeof'
        | 'FileManage.$$typeof'
        | 'Switch.$$typeof',
      Component_5 extends
        | 'HotArea'
        | 'Input'
        | 'Select'
        | 'DateRangePicker'
        | 'YearPicker'
        | 'TimeRangePicker'
        | 'Radio'
        | 'Checkbox'
        | 'FormItem'
        | 'Password'
        | 'ArrayCards'
        | 'ArrayItems'
        | 'Space'
        | 'Card'
        | 'NumberPicker'
        | 'Cascader'
        | 'FileManage'
        | 'LinksButton'
        | 'Switch'
        | 'LinkCoupon'
        | 'LinkGoods'
        | 'LinkRecommendId'
        | 'Input.TextArea'
        | 'DateRangePicker.RangePicker'
        | 'YearPicker.RangePicker'
        | 'TimeRangePicker.RangePicker'
        | 'Radio.Group'
        | 'Radio.__ANT_RADIO'
        | 'Checkbox.Group'
        | 'Checkbox.__ANT_CHECKBOX'
        | 'FormItem.BaseItem'
        | 'Password.$$typeof'
        | 'ArrayCards.Addition'
        | 'ArrayCards.Copy'
        | 'ArrayCards.Remove'
        | 'ArrayCards.MoveUp'
        | 'ArrayCards.MoveDown'
        | 'ArrayCards.SortHandle'
        | 'ArrayCards.Index'
        | 'ArrayCards.useArray'
        | 'ArrayCards.useIndex'
        | 'ArrayCards.useRecord'
        | 'ArrayItems.Item'
        | 'ArrayItems.Addition'
        | 'ArrayItems.Copy'
        | 'ArrayItems.Remove'
        | 'ArrayItems.MoveUp'
        | 'ArrayItems.MoveDown'
        | 'ArrayItems.SortHandle'
        | 'ArrayItems.Index'
        | 'ArrayItems.useArray'
        | 'ArrayItems.useIndex'
        | 'ArrayItems.useRecord'
        | 'Card.$$typeof'
        | 'Card.Meta'
        | 'Card.Grid'
        | 'NumberPicker.$$typeof'
        | 'Cascader.$$typeof'
        | 'FileManage.$$typeof'
        | 'Switch.$$typeof',
    >(
      props: import('@formily/react').ISchemaTypeFieldProps<
        {
          Radio: React.FC<React.PropsWithChildren<import('antd').RadioProps>> & {
            Group?: React.FC<React.PropsWithChildren<import('antd').RadioGroupProps>> | undefined;
            __ANT_RADIO?: boolean | undefined;
          };
          Checkbox: React.FC<React.PropsWithChildren<import('antd').CheckboxProps>> & {
            Group?:
              | React.FC<React.PropsWithChildren<import('antd/lib/checkbox').CheckboxGroupProps>>
              | undefined;
            __ANT_CHECKBOX?: boolean | undefined;
          };
          Input: React.FC<React.PropsWithChildren<import('antd').InputProps>> & {
            TextArea?:
              | React.FC<React.PropsWithChildren<import('antd/lib/input').TextAreaProps>>
              | undefined;
          };
          DateRangePicker: React.FC<React.PropsWithChildren<import('antd').DatePickerProps>> & {
            RangePicker?:
              | React.FC<React.PropsWithChildren<import('antd/lib/date-picker').RangePickerProps>>
              | undefined;
          };
          YearPicker: React.FC<React.PropsWithChildren<import('antd').DatePickerProps>> & {
            RangePicker?:
              | React.FC<React.PropsWithChildren<import('antd/lib/date-picker').RangePickerProps>>
              | undefined;
          };
          TimeRangePicker: React.FC<React.PropsWithChildren<import('antd').TimePickerProps>> & {
            RangePicker?:
              | React.FC<React.PropsWithChildren<import('antd').TimeRangePickerProps>>
              | undefined;
          };
          FormItem: React.FC<React.PropsWithChildren<import('@formily/antd').IFormItemProps>> & {
            BaseItem?:
              | React.FC<React.PropsWithChildren<import('@formily/antd').IFormItemProps>>
              | undefined;
          };
          Password: React.ForwardRefExoticComponent<
            Partial<import('@formily/antd').IPasswordProps> & React.RefAttributes<unknown>
          >;
          ArrayCards: React.FC<
            React.PropsWithChildren<
              import('antd').CardProps & import('@formily/antd').IArrayBaseProps
            >
          > &
            import('@formily/antd').ArrayBaseMixins;
          ArrayItems: React.FC<
            React.PropsWithChildren<
              React.HTMLAttributes<HTMLDivElement> & import('@formily/antd').IArrayBaseProps
            >
          > &
            import('@formily/antd').ArrayBaseMixins & {
              Item?:
                | React.FC<
                    React.HTMLAttributes<HTMLDivElement> & {
                      type?: 'card' | 'divide' | undefined;
                    }
                  >
                | undefined;
            };
          Select: import('@formily/react').ReactFC<import('antd').SelectProps<any, any>>;
          HotArea: React.FC<
            React.PropsWithChildren<{
              value: {
                link: string;
                left: number;
                top: number;
                width: number;
                height: number;
              }[];
            }>
          >;
          Space: React.FC<React.PropsWithChildren<import('antd').SpaceProps>>;
          Card: import('antd/lib/card').CardInterface;
          NumberPicker: React.ForwardRefExoticComponent<
            Pick<
              Partial<
                import('antd').InputNumberProps<string | number> & {
                  children?: React.ReactNode;
                } & {
                  ref?: React.Ref<HTMLInputElement> | undefined;
                }
              >,
              keyof import('antd').InputNumberProps<string | number>
            > &
              React.RefAttributes<unknown>
          >;
          Cascader: React.ForwardRefExoticComponent<
            (
              | Pick<
                  Partial<
                    Omit<
                      import('rc-cascader').SingleCascaderProps<
                        import('rc-cascader').DefaultOptionType
                      >,
                      'options' | 'checkable'
                    > & {
                      multiple?: false | undefined;
                    } & {
                      multiple?: boolean | undefined;
                      size?: import('antd/lib/button').ButtonSize;
                      bordered?: boolean | undefined;
                      placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight' | undefined;
                      suffixIcon?: React.ReactNode;
                      options?:
                        | (
                            | import('rc-cascader').DefaultOptionType
                            | import('rc-cascader').BaseOptionType
                          )[]
                        | undefined;
                      status?: '' | 'error' | 'warning' | undefined;
                    } & {
                      children?: React.ReactNode;
                    } & {
                      ref?: React.Ref<import('antd/lib/cascader').CascaderRef> | undefined;
                    }
                  >,
                  | 'style'
                  | 'children'
                  | 'defaultValue'
                  | 'autoFocus'
                  | 'className'
                  | 'id'
                  | 'placeholder'
                  | 'tabIndex'
                  | 'aria-activedescendant'
                  | 'aria-atomic'
                  | 'aria-autocomplete'
                  | 'aria-busy'
                  | 'aria-checked'
                  | 'aria-colcount'
                  | 'aria-colindex'
                  | 'aria-colspan'
                  | 'aria-controls'
                  | 'aria-current'
                  | 'aria-describedby'
                  | 'aria-details'
                  | 'aria-disabled'
                  | 'aria-dropeffect'
                  | 'aria-errormessage'
                  | 'aria-expanded'
                  | 'aria-flowto'
                  | 'aria-grabbed'
                  | 'aria-haspopup'
                  | 'aria-hidden'
                  | 'aria-invalid'
                  | 'aria-keyshortcuts'
                  | 'aria-label'
                  | 'aria-labelledby'
                  | 'aria-level'
                  | 'aria-live'
                  | 'aria-modal'
                  | 'aria-multiline'
                  | 'aria-multiselectable'
                  | 'aria-orientation'
                  | 'aria-owns'
                  | 'aria-placeholder'
                  | 'aria-posinset'
                  | 'aria-pressed'
                  | 'aria-readonly'
                  | 'aria-relevant'
                  | 'aria-required'
                  | 'aria-roledescription'
                  | 'aria-rowcount'
                  | 'aria-rowindex'
                  | 'aria-rowspan'
                  | 'aria-selected'
                  | 'aria-setsize'
                  | 'aria-sort'
                  | 'aria-valuemax'
                  | 'aria-valuemin'
                  | 'aria-valuenow'
                  | 'aria-valuetext'
                  | 'onFocus'
                  | 'onBlur'
                  | 'onChange'
                  | 'onKeyDown'
                  | 'onKeyUp'
                  | 'onClick'
                  | 'onMouseDown'
                  | 'onMouseEnter'
                  | 'onMouseLeave'
                  | 'status'
                  | 'loading'
                  | 'open'
                  | 'bordered'
                  | 'prefixCls'
                  | 'expandIcon'
                  | 'disabled'
                  | 'value'
                  | 'size'
                  | 'multiple'
                  | 'direction'
                  | 'getPopupContainer'
                  | 'popupClassName'
                  | 'searchValue'
                  | 'dropdownClassName'
                  | 'dropdownAlign'
                  | 'transitionName'
                  | 'allowClear'
                  | 'defaultOpen'
                  | 'suffixIcon'
                  | 'clearIcon'
                  | 'options'
                  | 'onSearch'
                  | 'placement'
                  | 'animation'
                  | 'showArrow'
                  | 'popupVisible'
                  | 'inputIcon'
                  | 'getInputElement'
                  | 'getRawInputElement'
                  | 'showSearch'
                  | 'tagRender'
                  | 'notFoundContent'
                  | 'onClear'
                  | 'choiceTransitionName'
                  | 'onDropdownVisibleChange'
                  | 'maxTagTextLength'
                  | 'maxTagCount'
                  | 'maxTagPlaceholder'
                  | 'removeIcon'
                  | 'dropdownStyle'
                  | 'dropdownMatchSelectWidth'
                  | 'dropdownRender'
                  | 'showAction'
                  | 'onPopupScroll'
                  | 'onInputKeyDown'
                  | 'fieldNames'
                  | 'changeOnSelect'
                  | 'displayRender'
                  | 'showCheckedStrategy'
                  | 'expandTrigger'
                  | 'dropdownPrefixCls'
                  | 'loadData'
                  | 'dropdownMenuColumnStyle'
                  | 'popupPlacement'
                  | 'onPopupVisibleChange'
                  | 'loadingIcon'
                >
              | Pick<
                  Partial<
                    Omit<
                      import('rc-cascader').MultipleCascaderProps<
                        import('rc-cascader').DefaultOptionType
                      >,
                      'options' | 'checkable'
                    > & {
                      multiple: true;
                    } & {
                      multiple?: boolean | undefined;
                      size?: import('antd/lib/button').ButtonSize;
                      bordered?: boolean | undefined;
                      placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight' | undefined;
                      suffixIcon?: React.ReactNode;
                      options?:
                        | (
                            | import('rc-cascader').DefaultOptionType
                            | import('rc-cascader').BaseOptionType
                          )[]
                        | undefined;
                      status?: '' | 'error' | 'warning' | undefined;
                    } & {
                      children?: React.ReactNode;
                    } & {
                      ref?: React.Ref<import('antd/lib/cascader').CascaderRef> | undefined;
                    }
                  >,
                  | 'style'
                  | 'children'
                  | 'defaultValue'
                  | 'autoFocus'
                  | 'className'
                  | 'id'
                  | 'placeholder'
                  | 'tabIndex'
                  | 'aria-activedescendant'
                  | 'aria-atomic'
                  | 'aria-autocomplete'
                  | 'aria-busy'
                  | 'aria-checked'
                  | 'aria-colcount'
                  | 'aria-colindex'
                  | 'aria-colspan'
                  | 'aria-controls'
                  | 'aria-current'
                  | 'aria-describedby'
                  | 'aria-details'
                  | 'aria-disabled'
                  | 'aria-dropeffect'
                  | 'aria-errormessage'
                  | 'aria-expanded'
                  | 'aria-flowto'
                  | 'aria-grabbed'
                  | 'aria-haspopup'
                  | 'aria-hidden'
                  | 'aria-invalid'
                  | 'aria-keyshortcuts'
                  | 'aria-label'
                  | 'aria-labelledby'
                  | 'aria-level'
                  | 'aria-live'
                  | 'aria-modal'
                  | 'aria-multiline'
                  | 'aria-multiselectable'
                  | 'aria-orientation'
                  | 'aria-owns'
                  | 'aria-placeholder'
                  | 'aria-posinset'
                  | 'aria-pressed'
                  | 'aria-readonly'
                  | 'aria-relevant'
                  | 'aria-required'
                  | 'aria-roledescription'
                  | 'aria-rowcount'
                  | 'aria-rowindex'
                  | 'aria-rowspan'
                  | 'aria-selected'
                  | 'aria-setsize'
                  | 'aria-sort'
                  | 'aria-valuemax'
                  | 'aria-valuemin'
                  | 'aria-valuenow'
                  | 'aria-valuetext'
                  | 'onFocus'
                  | 'onBlur'
                  | 'onChange'
                  | 'onKeyDown'
                  | 'onKeyUp'
                  | 'onClick'
                  | 'onMouseDown'
                  | 'onMouseEnter'
                  | 'onMouseLeave'
                  | 'status'
                  | 'loading'
                  | 'open'
                  | 'bordered'
                  | 'prefixCls'
                  | 'expandIcon'
                  | 'disabled'
                  | 'value'
                  | 'size'
                  | 'multiple'
                  | 'direction'
                  | 'getPopupContainer'
                  | 'popupClassName'
                  | 'searchValue'
                  | 'dropdownClassName'
                  | 'dropdownAlign'
                  | 'transitionName'
                  | 'allowClear'
                  | 'defaultOpen'
                  | 'suffixIcon'
                  | 'clearIcon'
                  | 'options'
                  | 'onSearch'
                  | 'placement'
                  | 'animation'
                  | 'showArrow'
                  | 'popupVisible'
                  | 'inputIcon'
                  | 'getInputElement'
                  | 'getRawInputElement'
                  | 'showSearch'
                  | 'tagRender'
                  | 'notFoundContent'
                  | 'onClear'
                  | 'choiceTransitionName'
                  | 'onDropdownVisibleChange'
                  | 'maxTagTextLength'
                  | 'maxTagCount'
                  | 'maxTagPlaceholder'
                  | 'removeIcon'
                  | 'dropdownStyle'
                  | 'dropdownMatchSelectWidth'
                  | 'dropdownRender'
                  | 'showAction'
                  | 'onPopupScroll'
                  | 'onInputKeyDown'
                  | 'fieldNames'
                  | 'changeOnSelect'
                  | 'displayRender'
                  | 'showCheckedStrategy'
                  | 'expandTrigger'
                  | 'dropdownPrefixCls'
                  | 'loadData'
                  | 'dropdownMenuColumnStyle'
                  | 'popupPlacement'
                  | 'onPopupVisibleChange'
                  | 'loadingIcon'
                >
            ) &
              React.RefAttributes<unknown>
          >;
          FileManage: React.ForwardRefExoticComponent<
            Omit<Partial<any>, 'ref'> & React.RefAttributes<unknown>
          >;
          LinksButton: React.FC<{
            value?: string | undefined;
            onChange?: ((value: string) => void) | undefined;
          }>;
          Switch: React.ForwardRefExoticComponent<
            Pick<
              Partial<import('antd').SwitchProps & React.RefAttributes<HTMLElement>>,
              'key' | keyof import('antd').SwitchProps
            > &
              React.RefAttributes<unknown>
          >;
          LinkCoupon: React.FC<{
            value?: import('../../components/LinkCoupon').DataType | undefined;
            onChange?:
              | ((value: import('../../components/LinkCoupon').DataType) => void)
              | undefined;
          }>;
          LinkGoods: React.FC<{
            value?: import('../../components/LinkGoods').DataType | undefined;
            onChange?: ((value: import('../../components/LinkGoods').DataType) => void) | undefined;
          }>;
          LinkRecommendId: React.FC<{
            value?: import('../../components/LinkRecommendId').DataType | undefined;
            onChange?:
              | ((value?: import('../../components/LinkRecommendId').DataType | undefined) => void)
              | undefined;
          }>;
        },
        Component_5,
        Decorator_5
      >,
    ): JSX.Element;
    displayName: string;
  };
  Date: {
    <
      Decorator_6 extends
        | 'HotArea'
        | 'Input'
        | 'Select'
        | 'DateRangePicker'
        | 'YearPicker'
        | 'TimeRangePicker'
        | 'Radio'
        | 'Checkbox'
        | 'FormItem'
        | 'Password'
        | 'ArrayCards'
        | 'ArrayItems'
        | 'Space'
        | 'Card'
        | 'NumberPicker'
        | 'Cascader'
        | 'FileManage'
        | 'LinksButton'
        | 'Switch'
        | 'LinkCoupon'
        | 'LinkGoods'
        | 'LinkRecommendId'
        | 'Input.TextArea'
        | 'DateRangePicker.RangePicker'
        | 'YearPicker.RangePicker'
        | 'TimeRangePicker.RangePicker'
        | 'Radio.Group'
        | 'Radio.__ANT_RADIO'
        | 'Checkbox.Group'
        | 'Checkbox.__ANT_CHECKBOX'
        | 'FormItem.BaseItem'
        | 'Password.$$typeof'
        | 'ArrayCards.Addition'
        | 'ArrayCards.Copy'
        | 'ArrayCards.Remove'
        | 'ArrayCards.MoveUp'
        | 'ArrayCards.MoveDown'
        | 'ArrayCards.SortHandle'
        | 'ArrayCards.Index'
        | 'ArrayCards.useArray'
        | 'ArrayCards.useIndex'
        | 'ArrayCards.useRecord'
        | 'ArrayItems.Item'
        | 'ArrayItems.Addition'
        | 'ArrayItems.Copy'
        | 'ArrayItems.Remove'
        | 'ArrayItems.MoveUp'
        | 'ArrayItems.MoveDown'
        | 'ArrayItems.SortHandle'
        | 'ArrayItems.Index'
        | 'ArrayItems.useArray'
        | 'ArrayItems.useIndex'
        | 'ArrayItems.useRecord'
        | 'Card.$$typeof'
        | 'Card.Meta'
        | 'Card.Grid'
        | 'NumberPicker.$$typeof'
        | 'Cascader.$$typeof'
        | 'FileManage.$$typeof'
        | 'Switch.$$typeof',
      Component_6 extends
        | 'HotArea'
        | 'Input'
        | 'Select'
        | 'DateRangePicker'
        | 'YearPicker'
        | 'TimeRangePicker'
        | 'Radio'
        | 'Checkbox'
        | 'FormItem'
        | 'Password'
        | 'ArrayCards'
        | 'ArrayItems'
        | 'Space'
        | 'Card'
        | 'NumberPicker'
        | 'Cascader'
        | 'FileManage'
        | 'LinksButton'
        | 'Switch'
        | 'LinkCoupon'
        | 'LinkGoods'
        | 'LinkRecommendId'
        | 'Input.TextArea'
        | 'DateRangePicker.RangePicker'
        | 'YearPicker.RangePicker'
        | 'TimeRangePicker.RangePicker'
        | 'Radio.Group'
        | 'Radio.__ANT_RADIO'
        | 'Checkbox.Group'
        | 'Checkbox.__ANT_CHECKBOX'
        | 'FormItem.BaseItem'
        | 'Password.$$typeof'
        | 'ArrayCards.Addition'
        | 'ArrayCards.Copy'
        | 'ArrayCards.Remove'
        | 'ArrayCards.MoveUp'
        | 'ArrayCards.MoveDown'
        | 'ArrayCards.SortHandle'
        | 'ArrayCards.Index'
        | 'ArrayCards.useArray'
        | 'ArrayCards.useIndex'
        | 'ArrayCards.useRecord'
        | 'ArrayItems.Item'
        | 'ArrayItems.Addition'
        | 'ArrayItems.Copy'
        | 'ArrayItems.Remove'
        | 'ArrayItems.MoveUp'
        | 'ArrayItems.MoveDown'
        | 'ArrayItems.SortHandle'
        | 'ArrayItems.Index'
        | 'ArrayItems.useArray'
        | 'ArrayItems.useIndex'
        | 'ArrayItems.useRecord'
        | 'Card.$$typeof'
        | 'Card.Meta'
        | 'Card.Grid'
        | 'NumberPicker.$$typeof'
        | 'Cascader.$$typeof'
        | 'FileManage.$$typeof'
        | 'Switch.$$typeof',
    >(
      props: import('@formily/react').ISchemaTypeFieldProps<
        {
          Radio: React.FC<React.PropsWithChildren<import('antd').RadioProps>> & {
            Group?: React.FC<React.PropsWithChildren<import('antd').RadioGroupProps>> | undefined;
            __ANT_RADIO?: boolean | undefined;
          };
          Checkbox: React.FC<React.PropsWithChildren<import('antd').CheckboxProps>> & {
            Group?:
              | React.FC<React.PropsWithChildren<import('antd/lib/checkbox').CheckboxGroupProps>>
              | undefined;
            __ANT_CHECKBOX?: boolean | undefined;
          };
          Input: React.FC<React.PropsWithChildren<import('antd').InputProps>> & {
            TextArea?:
              | React.FC<React.PropsWithChildren<import('antd/lib/input').TextAreaProps>>
              | undefined;
          };
          DateRangePicker: React.FC<React.PropsWithChildren<import('antd').DatePickerProps>> & {
            RangePicker?:
              | React.FC<React.PropsWithChildren<import('antd/lib/date-picker').RangePickerProps>>
              | undefined;
          };
          YearPicker: React.FC<React.PropsWithChildren<import('antd').DatePickerProps>> & {
            RangePicker?:
              | React.FC<React.PropsWithChildren<import('antd/lib/date-picker').RangePickerProps>>
              | undefined;
          };
          TimeRangePicker: React.FC<React.PropsWithChildren<import('antd').TimePickerProps>> & {
            RangePicker?:
              | React.FC<React.PropsWithChildren<import('antd').TimeRangePickerProps>>
              | undefined;
          };
          FormItem: React.FC<React.PropsWithChildren<import('@formily/antd').IFormItemProps>> & {
            BaseItem?:
              | React.FC<React.PropsWithChildren<import('@formily/antd').IFormItemProps>>
              | undefined;
          };
          Password: React.ForwardRefExoticComponent<
            Partial<import('@formily/antd').IPasswordProps> & React.RefAttributes<unknown>
          >;
          ArrayCards: React.FC<
            React.PropsWithChildren<
              import('antd').CardProps & import('@formily/antd').IArrayBaseProps
            >
          > &
            import('@formily/antd').ArrayBaseMixins;
          ArrayItems: React.FC<
            React.PropsWithChildren<
              React.HTMLAttributes<HTMLDivElement> & import('@formily/antd').IArrayBaseProps
            >
          > &
            import('@formily/antd').ArrayBaseMixins & {
              Item?:
                | React.FC<
                    React.HTMLAttributes<HTMLDivElement> & {
                      type?: 'card' | 'divide' | undefined;
                    }
                  >
                | undefined;
            };
          Select: import('@formily/react').ReactFC<import('antd').SelectProps<any, any>>;
          HotArea: React.FC<
            React.PropsWithChildren<{
              value: {
                link: string;
                left: number;
                top: number;
                width: number;
                height: number;
              }[];
            }>
          >;
          Space: React.FC<React.PropsWithChildren<import('antd').SpaceProps>>;
          Card: import('antd/lib/card').CardInterface;
          NumberPicker: React.ForwardRefExoticComponent<
            Pick<
              Partial<
                import('antd').InputNumberProps<string | number> & {
                  children?: React.ReactNode;
                } & {
                  ref?: React.Ref<HTMLInputElement> | undefined;
                }
              >,
              keyof import('antd').InputNumberProps<string | number>
            > &
              React.RefAttributes<unknown>
          >;
          Cascader: React.ForwardRefExoticComponent<
            (
              | Pick<
                  Partial<
                    Omit<
                      import('rc-cascader').SingleCascaderProps<
                        import('rc-cascader').DefaultOptionType
                      >,
                      'options' | 'checkable'
                    > & {
                      multiple?: false | undefined;
                    } & {
                      multiple?: boolean | undefined;
                      size?: import('antd/lib/button').ButtonSize;
                      bordered?: boolean | undefined;
                      placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight' | undefined;
                      suffixIcon?: React.ReactNode;
                      options?:
                        | (
                            | import('rc-cascader').DefaultOptionType
                            | import('rc-cascader').BaseOptionType
                          )[]
                        | undefined;
                      status?: '' | 'error' | 'warning' | undefined;
                    } & {
                      children?: React.ReactNode;
                    } & {
                      ref?: React.Ref<import('antd/lib/cascader').CascaderRef> | undefined;
                    }
                  >,
                  | 'style'
                  | 'children'
                  | 'defaultValue'
                  | 'autoFocus'
                  | 'className'
                  | 'id'
                  | 'placeholder'
                  | 'tabIndex'
                  | 'aria-activedescendant'
                  | 'aria-atomic'
                  | 'aria-autocomplete'
                  | 'aria-busy'
                  | 'aria-checked'
                  | 'aria-colcount'
                  | 'aria-colindex'
                  | 'aria-colspan'
                  | 'aria-controls'
                  | 'aria-current'
                  | 'aria-describedby'
                  | 'aria-details'
                  | 'aria-disabled'
                  | 'aria-dropeffect'
                  | 'aria-errormessage'
                  | 'aria-expanded'
                  | 'aria-flowto'
                  | 'aria-grabbed'
                  | 'aria-haspopup'
                  | 'aria-hidden'
                  | 'aria-invalid'
                  | 'aria-keyshortcuts'
                  | 'aria-label'
                  | 'aria-labelledby'
                  | 'aria-level'
                  | 'aria-live'
                  | 'aria-modal'
                  | 'aria-multiline'
                  | 'aria-multiselectable'
                  | 'aria-orientation'
                  | 'aria-owns'
                  | 'aria-placeholder'
                  | 'aria-posinset'
                  | 'aria-pressed'
                  | 'aria-readonly'
                  | 'aria-relevant'
                  | 'aria-required'
                  | 'aria-roledescription'
                  | 'aria-rowcount'
                  | 'aria-rowindex'
                  | 'aria-rowspan'
                  | 'aria-selected'
                  | 'aria-setsize'
                  | 'aria-sort'
                  | 'aria-valuemax'
                  | 'aria-valuemin'
                  | 'aria-valuenow'
                  | 'aria-valuetext'
                  | 'onFocus'
                  | 'onBlur'
                  | 'onChange'
                  | 'onKeyDown'
                  | 'onKeyUp'
                  | 'onClick'
                  | 'onMouseDown'
                  | 'onMouseEnter'
                  | 'onMouseLeave'
                  | 'status'
                  | 'loading'
                  | 'open'
                  | 'bordered'
                  | 'prefixCls'
                  | 'expandIcon'
                  | 'disabled'
                  | 'value'
                  | 'size'
                  | 'multiple'
                  | 'direction'
                  | 'getPopupContainer'
                  | 'popupClassName'
                  | 'searchValue'
                  | 'dropdownClassName'
                  | 'dropdownAlign'
                  | 'transitionName'
                  | 'allowClear'
                  | 'defaultOpen'
                  | 'suffixIcon'
                  | 'clearIcon'
                  | 'options'
                  | 'onSearch'
                  | 'placement'
                  | 'animation'
                  | 'showArrow'
                  | 'popupVisible'
                  | 'inputIcon'
                  | 'getInputElement'
                  | 'getRawInputElement'
                  | 'showSearch'
                  | 'tagRender'
                  | 'notFoundContent'
                  | 'onClear'
                  | 'choiceTransitionName'
                  | 'onDropdownVisibleChange'
                  | 'maxTagTextLength'
                  | 'maxTagCount'
                  | 'maxTagPlaceholder'
                  | 'removeIcon'
                  | 'dropdownStyle'
                  | 'dropdownMatchSelectWidth'
                  | 'dropdownRender'
                  | 'showAction'
                  | 'onPopupScroll'
                  | 'onInputKeyDown'
                  | 'fieldNames'
                  | 'changeOnSelect'
                  | 'displayRender'
                  | 'showCheckedStrategy'
                  | 'expandTrigger'
                  | 'dropdownPrefixCls'
                  | 'loadData'
                  | 'dropdownMenuColumnStyle'
                  | 'popupPlacement'
                  | 'onPopupVisibleChange'
                  | 'loadingIcon'
                >
              | Pick<
                  Partial<
                    Omit<
                      import('rc-cascader').MultipleCascaderProps<
                        import('rc-cascader').DefaultOptionType
                      >,
                      'options' | 'checkable'
                    > & {
                      multiple: true;
                    } & {
                      multiple?: boolean | undefined;
                      size?: import('antd/lib/button').ButtonSize;
                      bordered?: boolean | undefined;
                      placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight' | undefined;
                      suffixIcon?: React.ReactNode;
                      options?:
                        | (
                            | import('rc-cascader').DefaultOptionType
                            | import('rc-cascader').BaseOptionType
                          )[]
                        | undefined;
                      status?: '' | 'error' | 'warning' | undefined;
                    } & {
                      children?: React.ReactNode;
                    } & {
                      ref?: React.Ref<import('antd/lib/cascader').CascaderRef> | undefined;
                    }
                  >,
                  | 'style'
                  | 'children'
                  | 'defaultValue'
                  | 'autoFocus'
                  | 'className'
                  | 'id'
                  | 'placeholder'
                  | 'tabIndex'
                  | 'aria-activedescendant'
                  | 'aria-atomic'
                  | 'aria-autocomplete'
                  | 'aria-busy'
                  | 'aria-checked'
                  | 'aria-colcount'
                  | 'aria-colindex'
                  | 'aria-colspan'
                  | 'aria-controls'
                  | 'aria-current'
                  | 'aria-describedby'
                  | 'aria-details'
                  | 'aria-disabled'
                  | 'aria-dropeffect'
                  | 'aria-errormessage'
                  | 'aria-expanded'
                  | 'aria-flowto'
                  | 'aria-grabbed'
                  | 'aria-haspopup'
                  | 'aria-hidden'
                  | 'aria-invalid'
                  | 'aria-keyshortcuts'
                  | 'aria-label'
                  | 'aria-labelledby'
                  | 'aria-level'
                  | 'aria-live'
                  | 'aria-modal'
                  | 'aria-multiline'
                  | 'aria-multiselectable'
                  | 'aria-orientation'
                  | 'aria-owns'
                  | 'aria-placeholder'
                  | 'aria-posinset'
                  | 'aria-pressed'
                  | 'aria-readonly'
                  | 'aria-relevant'
                  | 'aria-required'
                  | 'aria-roledescription'
                  | 'aria-rowcount'
                  | 'aria-rowindex'
                  | 'aria-rowspan'
                  | 'aria-selected'
                  | 'aria-setsize'
                  | 'aria-sort'
                  | 'aria-valuemax'
                  | 'aria-valuemin'
                  | 'aria-valuenow'
                  | 'aria-valuetext'
                  | 'onFocus'
                  | 'onBlur'
                  | 'onChange'
                  | 'onKeyDown'
                  | 'onKeyUp'
                  | 'onClick'
                  | 'onMouseDown'
                  | 'onMouseEnter'
                  | 'onMouseLeave'
                  | 'status'
                  | 'loading'
                  | 'open'
                  | 'bordered'
                  | 'prefixCls'
                  | 'expandIcon'
                  | 'disabled'
                  | 'value'
                  | 'size'
                  | 'multiple'
                  | 'direction'
                  | 'getPopupContainer'
                  | 'popupClassName'
                  | 'searchValue'
                  | 'dropdownClassName'
                  | 'dropdownAlign'
                  | 'transitionName'
                  | 'allowClear'
                  | 'defaultOpen'
                  | 'suffixIcon'
                  | 'clearIcon'
                  | 'options'
                  | 'onSearch'
                  | 'placement'
                  | 'animation'
                  | 'showArrow'
                  | 'popupVisible'
                  | 'inputIcon'
                  | 'getInputElement'
                  | 'getRawInputElement'
                  | 'showSearch'
                  | 'tagRender'
                  | 'notFoundContent'
                  | 'onClear'
                  | 'choiceTransitionName'
                  | 'onDropdownVisibleChange'
                  | 'maxTagTextLength'
                  | 'maxTagCount'
                  | 'maxTagPlaceholder'
                  | 'removeIcon'
                  | 'dropdownStyle'
                  | 'dropdownMatchSelectWidth'
                  | 'dropdownRender'
                  | 'showAction'
                  | 'onPopupScroll'
                  | 'onInputKeyDown'
                  | 'fieldNames'
                  | 'changeOnSelect'
                  | 'displayRender'
                  | 'showCheckedStrategy'
                  | 'expandTrigger'
                  | 'dropdownPrefixCls'
                  | 'loadData'
                  | 'dropdownMenuColumnStyle'
                  | 'popupPlacement'
                  | 'onPopupVisibleChange'
                  | 'loadingIcon'
                >
            ) &
              React.RefAttributes<unknown>
          >;
          FileManage: React.ForwardRefExoticComponent<
            Omit<Partial<any>, 'ref'> & React.RefAttributes<unknown>
          >;
          LinksButton: React.FC<{
            value?: string | undefined;
            onChange?: ((value: string) => void) | undefined;
          }>;
          Switch: React.ForwardRefExoticComponent<
            Pick<
              Partial<import('antd').SwitchProps & React.RefAttributes<HTMLElement>>,
              'key' | keyof import('antd').SwitchProps
            > &
              React.RefAttributes<unknown>
          >;
          LinkCoupon: React.FC<{
            value?: import('../../components/LinkCoupon').DataType | undefined;
            onChange?:
              | ((value: import('../../components/LinkCoupon').DataType) => void)
              | undefined;
          }>;
          LinkGoods: React.FC<{
            value?: import('../../components/LinkGoods').DataType | undefined;
            onChange?: ((value: import('../../components/LinkGoods').DataType) => void) | undefined;
          }>;
          LinkRecommendId: React.FC<{
            value?: import('../../components/LinkRecommendId').DataType | undefined;
            onChange?:
              | ((value?: import('../../components/LinkRecommendId').DataType | undefined) => void)
              | undefined;
          }>;
        },
        Component_6,
        Decorator_6
      >,
    ): JSX.Element;
    displayName: string;
  };
  DateTime: {
    <
      Decorator_7 extends
        | 'HotArea'
        | 'Input'
        | 'Select'
        | 'DateRangePicker'
        | 'YearPicker'
        | 'TimeRangePicker'
        | 'Radio'
        | 'Checkbox'
        | 'FormItem'
        | 'Password'
        | 'ArrayCards'
        | 'ArrayItems'
        | 'Space'
        | 'Card'
        | 'NumberPicker'
        | 'Cascader'
        | 'FileManage'
        | 'LinksButton'
        | 'Switch'
        | 'LinkCoupon'
        | 'LinkGoods'
        | 'LinkRecommendId'
        | 'Input.TextArea'
        | 'DateRangePicker.RangePicker'
        | 'YearPicker.RangePicker'
        | 'TimeRangePicker.RangePicker'
        | 'Radio.Group'
        | 'Radio.__ANT_RADIO'
        | 'Checkbox.Group'
        | 'Checkbox.__ANT_CHECKBOX'
        | 'FormItem.BaseItem'
        | 'Password.$$typeof'
        | 'ArrayCards.Addition'
        | 'ArrayCards.Copy'
        | 'ArrayCards.Remove'
        | 'ArrayCards.MoveUp'
        | 'ArrayCards.MoveDown'
        | 'ArrayCards.SortHandle'
        | 'ArrayCards.Index'
        | 'ArrayCards.useArray'
        | 'ArrayCards.useIndex'
        | 'ArrayCards.useRecord'
        | 'ArrayItems.Item'
        | 'ArrayItems.Addition'
        | 'ArrayItems.Copy'
        | 'ArrayItems.Remove'
        | 'ArrayItems.MoveUp'
        | 'ArrayItems.MoveDown'
        | 'ArrayItems.SortHandle'
        | 'ArrayItems.Index'
        | 'ArrayItems.useArray'
        | 'ArrayItems.useIndex'
        | 'ArrayItems.useRecord'
        | 'Card.$$typeof'
        | 'Card.Meta'
        | 'Card.Grid'
        | 'NumberPicker.$$typeof'
        | 'Cascader.$$typeof'
        | 'FileManage.$$typeof'
        | 'Switch.$$typeof',
      Component_7 extends
        | 'HotArea'
        | 'Input'
        | 'Select'
        | 'DateRangePicker'
        | 'YearPicker'
        | 'TimeRangePicker'
        | 'Radio'
        | 'Checkbox'
        | 'FormItem'
        | 'Password'
        | 'ArrayCards'
        | 'ArrayItems'
        | 'Space'
        | 'Card'
        | 'NumberPicker'
        | 'Cascader'
        | 'FileManage'
        | 'LinksButton'
        | 'Switch'
        | 'LinkCoupon'
        | 'LinkGoods'
        | 'LinkRecommendId'
        | 'Input.TextArea'
        | 'DateRangePicker.RangePicker'
        | 'YearPicker.RangePicker'
        | 'TimeRangePicker.RangePicker'
        | 'Radio.Group'
        | 'Radio.__ANT_RADIO'
        | 'Checkbox.Group'
        | 'Checkbox.__ANT_CHECKBOX'
        | 'FormItem.BaseItem'
        | 'Password.$$typeof'
        | 'ArrayCards.Addition'
        | 'ArrayCards.Copy'
        | 'ArrayCards.Remove'
        | 'ArrayCards.MoveUp'
        | 'ArrayCards.MoveDown'
        | 'ArrayCards.SortHandle'
        | 'ArrayCards.Index'
        | 'ArrayCards.useArray'
        | 'ArrayCards.useIndex'
        | 'ArrayCards.useRecord'
        | 'ArrayItems.Item'
        | 'ArrayItems.Addition'
        | 'ArrayItems.Copy'
        | 'ArrayItems.Remove'
        | 'ArrayItems.MoveUp'
        | 'ArrayItems.MoveDown'
        | 'ArrayItems.SortHandle'
        | 'ArrayItems.Index'
        | 'ArrayItems.useArray'
        | 'ArrayItems.useIndex'
        | 'ArrayItems.useRecord'
        | 'Card.$$typeof'
        | 'Card.Meta'
        | 'Card.Grid'
        | 'NumberPicker.$$typeof'
        | 'Cascader.$$typeof'
        | 'FileManage.$$typeof'
        | 'Switch.$$typeof',
    >(
      props: import('@formily/react').ISchemaTypeFieldProps<
        {
          Radio: React.FC<React.PropsWithChildren<import('antd').RadioProps>> & {
            Group?: React.FC<React.PropsWithChildren<import('antd').RadioGroupProps>> | undefined;
            __ANT_RADIO?: boolean | undefined;
          };
          Checkbox: React.FC<React.PropsWithChildren<import('antd').CheckboxProps>> & {
            Group?:
              | React.FC<React.PropsWithChildren<import('antd/lib/checkbox').CheckboxGroupProps>>
              | undefined;
            __ANT_CHECKBOX?: boolean | undefined;
          };
          Input: React.FC<React.PropsWithChildren<import('antd').InputProps>> & {
            TextArea?:
              | React.FC<React.PropsWithChildren<import('antd/lib/input').TextAreaProps>>
              | undefined;
          };
          DateRangePicker: React.FC<React.PropsWithChildren<import('antd').DatePickerProps>> & {
            RangePicker?:
              | React.FC<React.PropsWithChildren<import('antd/lib/date-picker').RangePickerProps>>
              | undefined;
          };
          YearPicker: React.FC<React.PropsWithChildren<import('antd').DatePickerProps>> & {
            RangePicker?:
              | React.FC<React.PropsWithChildren<import('antd/lib/date-picker').RangePickerProps>>
              | undefined;
          };
          TimeRangePicker: React.FC<React.PropsWithChildren<import('antd').TimePickerProps>> & {
            RangePicker?:
              | React.FC<React.PropsWithChildren<import('antd').TimeRangePickerProps>>
              | undefined;
          };
          FormItem: React.FC<React.PropsWithChildren<import('@formily/antd').IFormItemProps>> & {
            BaseItem?:
              | React.FC<React.PropsWithChildren<import('@formily/antd').IFormItemProps>>
              | undefined;
          };
          Password: React.ForwardRefExoticComponent<
            Partial<import('@formily/antd').IPasswordProps> & React.RefAttributes<unknown>
          >;
          ArrayCards: React.FC<
            React.PropsWithChildren<
              import('antd').CardProps & import('@formily/antd').IArrayBaseProps
            >
          > &
            import('@formily/antd').ArrayBaseMixins;
          ArrayItems: React.FC<
            React.PropsWithChildren<
              React.HTMLAttributes<HTMLDivElement> & import('@formily/antd').IArrayBaseProps
            >
          > &
            import('@formily/antd').ArrayBaseMixins & {
              Item?:
                | React.FC<
                    React.HTMLAttributes<HTMLDivElement> & {
                      type?: 'card' | 'divide' | undefined;
                    }
                  >
                | undefined;
            };
          Select: import('@formily/react').ReactFC<import('antd').SelectProps<any, any>>;
          HotArea: React.FC<
            React.PropsWithChildren<{
              value: {
                link: string;
                left: number;
                top: number;
                width: number;
                height: number;
              }[];
            }>
          >;
          Space: React.FC<React.PropsWithChildren<import('antd').SpaceProps>>;
          Card: import('antd/lib/card').CardInterface;
          NumberPicker: React.ForwardRefExoticComponent<
            Pick<
              Partial<
                import('antd').InputNumberProps<string | number> & {
                  children?: React.ReactNode;
                } & {
                  ref?: React.Ref<HTMLInputElement> | undefined;
                }
              >,
              keyof import('antd').InputNumberProps<string | number>
            > &
              React.RefAttributes<unknown>
          >;
          Cascader: React.ForwardRefExoticComponent<
            (
              | Pick<
                  Partial<
                    Omit<
                      import('rc-cascader').SingleCascaderProps<
                        import('rc-cascader').DefaultOptionType
                      >,
                      'options' | 'checkable'
                    > & {
                      multiple?: false | undefined;
                    } & {
                      multiple?: boolean | undefined;
                      size?: import('antd/lib/button').ButtonSize;
                      bordered?: boolean | undefined;
                      placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight' | undefined;
                      suffixIcon?: React.ReactNode;
                      options?:
                        | (
                            | import('rc-cascader').DefaultOptionType
                            | import('rc-cascader').BaseOptionType
                          )[]
                        | undefined;
                      status?: '' | 'error' | 'warning' | undefined;
                    } & {
                      children?: React.ReactNode;
                    } & {
                      ref?: React.Ref<import('antd/lib/cascader').CascaderRef> | undefined;
                    }
                  >,
                  | 'style'
                  | 'children'
                  | 'defaultValue'
                  | 'autoFocus'
                  | 'className'
                  | 'id'
                  | 'placeholder'
                  | 'tabIndex'
                  | 'aria-activedescendant'
                  | 'aria-atomic'
                  | 'aria-autocomplete'
                  | 'aria-busy'
                  | 'aria-checked'
                  | 'aria-colcount'
                  | 'aria-colindex'
                  | 'aria-colspan'
                  | 'aria-controls'
                  | 'aria-current'
                  | 'aria-describedby'
                  | 'aria-details'
                  | 'aria-disabled'
                  | 'aria-dropeffect'
                  | 'aria-errormessage'
                  | 'aria-expanded'
                  | 'aria-flowto'
                  | 'aria-grabbed'
                  | 'aria-haspopup'
                  | 'aria-hidden'
                  | 'aria-invalid'
                  | 'aria-keyshortcuts'
                  | 'aria-label'
                  | 'aria-labelledby'
                  | 'aria-level'
                  | 'aria-live'
                  | 'aria-modal'
                  | 'aria-multiline'
                  | 'aria-multiselectable'
                  | 'aria-orientation'
                  | 'aria-owns'
                  | 'aria-placeholder'
                  | 'aria-posinset'
                  | 'aria-pressed'
                  | 'aria-readonly'
                  | 'aria-relevant'
                  | 'aria-required'
                  | 'aria-roledescription'
                  | 'aria-rowcount'
                  | 'aria-rowindex'
                  | 'aria-rowspan'
                  | 'aria-selected'
                  | 'aria-setsize'
                  | 'aria-sort'
                  | 'aria-valuemax'
                  | 'aria-valuemin'
                  | 'aria-valuenow'
                  | 'aria-valuetext'
                  | 'onFocus'
                  | 'onBlur'
                  | 'onChange'
                  | 'onKeyDown'
                  | 'onKeyUp'
                  | 'onClick'
                  | 'onMouseDown'
                  | 'onMouseEnter'
                  | 'onMouseLeave'
                  | 'status'
                  | 'loading'
                  | 'open'
                  | 'bordered'
                  | 'prefixCls'
                  | 'expandIcon'
                  | 'disabled'
                  | 'value'
                  | 'size'
                  | 'multiple'
                  | 'direction'
                  | 'getPopupContainer'
                  | 'popupClassName'
                  | 'searchValue'
                  | 'dropdownClassName'
                  | 'dropdownAlign'
                  | 'transitionName'
                  | 'allowClear'
                  | 'defaultOpen'
                  | 'suffixIcon'
                  | 'clearIcon'
                  | 'options'
                  | 'onSearch'
                  | 'placement'
                  | 'animation'
                  | 'showArrow'
                  | 'popupVisible'
                  | 'inputIcon'
                  | 'getInputElement'
                  | 'getRawInputElement'
                  | 'showSearch'
                  | 'tagRender'
                  | 'notFoundContent'
                  | 'onClear'
                  | 'choiceTransitionName'
                  | 'onDropdownVisibleChange'
                  | 'maxTagTextLength'
                  | 'maxTagCount'
                  | 'maxTagPlaceholder'
                  | 'removeIcon'
                  | 'dropdownStyle'
                  | 'dropdownMatchSelectWidth'
                  | 'dropdownRender'
                  | 'showAction'
                  | 'onPopupScroll'
                  | 'onInputKeyDown'
                  | 'fieldNames'
                  | 'changeOnSelect'
                  | 'displayRender'
                  | 'showCheckedStrategy'
                  | 'expandTrigger'
                  | 'dropdownPrefixCls'
                  | 'loadData'
                  | 'dropdownMenuColumnStyle'
                  | 'popupPlacement'
                  | 'onPopupVisibleChange'
                  | 'loadingIcon'
                >
              | Pick<
                  Partial<
                    Omit<
                      import('rc-cascader').MultipleCascaderProps<
                        import('rc-cascader').DefaultOptionType
                      >,
                      'options' | 'checkable'
                    > & {
                      multiple: true;
                    } & {
                      multiple?: boolean | undefined;
                      size?: import('antd/lib/button').ButtonSize;
                      bordered?: boolean | undefined;
                      placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight' | undefined;
                      suffixIcon?: React.ReactNode;
                      options?:
                        | (
                            | import('rc-cascader').DefaultOptionType
                            | import('rc-cascader').BaseOptionType
                          )[]
                        | undefined;
                      status?: '' | 'error' | 'warning' | undefined;
                    } & {
                      children?: React.ReactNode;
                    } & {
                      ref?: React.Ref<import('antd/lib/cascader').CascaderRef> | undefined;
                    }
                  >,
                  | 'style'
                  | 'children'
                  | 'defaultValue'
                  | 'autoFocus'
                  | 'className'
                  | 'id'
                  | 'placeholder'
                  | 'tabIndex'
                  | 'aria-activedescendant'
                  | 'aria-atomic'
                  | 'aria-autocomplete'
                  | 'aria-busy'
                  | 'aria-checked'
                  | 'aria-colcount'
                  | 'aria-colindex'
                  | 'aria-colspan'
                  | 'aria-controls'
                  | 'aria-current'
                  | 'aria-describedby'
                  | 'aria-details'
                  | 'aria-disabled'
                  | 'aria-dropeffect'
                  | 'aria-errormessage'
                  | 'aria-expanded'
                  | 'aria-flowto'
                  | 'aria-grabbed'
                  | 'aria-haspopup'
                  | 'aria-hidden'
                  | 'aria-invalid'
                  | 'aria-keyshortcuts'
                  | 'aria-label'
                  | 'aria-labelledby'
                  | 'aria-level'
                  | 'aria-live'
                  | 'aria-modal'
                  | 'aria-multiline'
                  | 'aria-multiselectable'
                  | 'aria-orientation'
                  | 'aria-owns'
                  | 'aria-placeholder'
                  | 'aria-posinset'
                  | 'aria-pressed'
                  | 'aria-readonly'
                  | 'aria-relevant'
                  | 'aria-required'
                  | 'aria-roledescription'
                  | 'aria-rowcount'
                  | 'aria-rowindex'
                  | 'aria-rowspan'
                  | 'aria-selected'
                  | 'aria-setsize'
                  | 'aria-sort'
                  | 'aria-valuemax'
                  | 'aria-valuemin'
                  | 'aria-valuenow'
                  | 'aria-valuetext'
                  | 'onFocus'
                  | 'onBlur'
                  | 'onChange'
                  | 'onKeyDown'
                  | 'onKeyUp'
                  | 'onClick'
                  | 'onMouseDown'
                  | 'onMouseEnter'
                  | 'onMouseLeave'
                  | 'status'
                  | 'loading'
                  | 'open'
                  | 'bordered'
                  | 'prefixCls'
                  | 'expandIcon'
                  | 'disabled'
                  | 'value'
                  | 'size'
                  | 'multiple'
                  | 'direction'
                  | 'getPopupContainer'
                  | 'popupClassName'
                  | 'searchValue'
                  | 'dropdownClassName'
                  | 'dropdownAlign'
                  | 'transitionName'
                  | 'allowClear'
                  | 'defaultOpen'
                  | 'suffixIcon'
                  | 'clearIcon'
                  | 'options'
                  | 'onSearch'
                  | 'placement'
                  | 'animation'
                  | 'showArrow'
                  | 'popupVisible'
                  | 'inputIcon'
                  | 'getInputElement'
                  | 'getRawInputElement'
                  | 'showSearch'
                  | 'tagRender'
                  | 'notFoundContent'
                  | 'onClear'
                  | 'choiceTransitionName'
                  | 'onDropdownVisibleChange'
                  | 'maxTagTextLength'
                  | 'maxTagCount'
                  | 'maxTagPlaceholder'
                  | 'removeIcon'
                  | 'dropdownStyle'
                  | 'dropdownMatchSelectWidth'
                  | 'dropdownRender'
                  | 'showAction'
                  | 'onPopupScroll'
                  | 'onInputKeyDown'
                  | 'fieldNames'
                  | 'changeOnSelect'
                  | 'displayRender'
                  | 'showCheckedStrategy'
                  | 'expandTrigger'
                  | 'dropdownPrefixCls'
                  | 'loadData'
                  | 'dropdownMenuColumnStyle'
                  | 'popupPlacement'
                  | 'onPopupVisibleChange'
                  | 'loadingIcon'
                >
            ) &
              React.RefAttributes<unknown>
          >;
          FileManage: React.ForwardRefExoticComponent<
            Omit<Partial<any>, 'ref'> & React.RefAttributes<unknown>
          >;
          LinksButton: React.FC<{
            value?: string | undefined;
            onChange?: ((value: string) => void) | undefined;
          }>;
          Switch: React.ForwardRefExoticComponent<
            Pick<
              Partial<import('antd').SwitchProps & React.RefAttributes<HTMLElement>>,
              'key' | keyof import('antd').SwitchProps
            > &
              React.RefAttributes<unknown>
          >;
          LinkCoupon: React.FC<{
            value?: import('../../components/LinkCoupon').DataType | undefined;
            onChange?:
              | ((value: import('../../components/LinkCoupon').DataType) => void)
              | undefined;
          }>;
          LinkGoods: React.FC<{
            value?: import('../../components/LinkGoods').DataType | undefined;
            onChange?: ((value: import('../../components/LinkGoods').DataType) => void) | undefined;
          }>;
          LinkRecommendId: React.FC<{
            value?: import('../../components/LinkRecommendId').DataType | undefined;
            onChange?:
              | ((value?: import('../../components/LinkRecommendId').DataType | undefined) => void)
              | undefined;
          }>;
        },
        Component_7,
        Decorator_7
      >,
    ): JSX.Element;
    displayName: string;
  };
  Void: {
    <
      Decorator_8 extends
        | 'HotArea'
        | 'Input'
        | 'Select'
        | 'DateRangePicker'
        | 'YearPicker'
        | 'TimeRangePicker'
        | 'Radio'
        | 'Checkbox'
        | 'FormItem'
        | 'Password'
        | 'ArrayCards'
        | 'ArrayItems'
        | 'Space'
        | 'Card'
        | 'NumberPicker'
        | 'Cascader'
        | 'FileManage'
        | 'LinksButton'
        | 'Switch'
        | 'LinkCoupon'
        | 'LinkGoods'
        | 'LinkRecommendId'
        | 'Input.TextArea'
        | 'DateRangePicker.RangePicker'
        | 'YearPicker.RangePicker'
        | 'TimeRangePicker.RangePicker'
        | 'Radio.Group'
        | 'Radio.__ANT_RADIO'
        | 'Checkbox.Group'
        | 'Checkbox.__ANT_CHECKBOX'
        | 'FormItem.BaseItem'
        | 'Password.$$typeof'
        | 'ArrayCards.Addition'
        | 'ArrayCards.Copy'
        | 'ArrayCards.Remove'
        | 'ArrayCards.MoveUp'
        | 'ArrayCards.MoveDown'
        | 'ArrayCards.SortHandle'
        | 'ArrayCards.Index'
        | 'ArrayCards.useArray'
        | 'ArrayCards.useIndex'
        | 'ArrayCards.useRecord'
        | 'ArrayItems.Item'
        | 'ArrayItems.Addition'
        | 'ArrayItems.Copy'
        | 'ArrayItems.Remove'
        | 'ArrayItems.MoveUp'
        | 'ArrayItems.MoveDown'
        | 'ArrayItems.SortHandle'
        | 'ArrayItems.Index'
        | 'ArrayItems.useArray'
        | 'ArrayItems.useIndex'
        | 'ArrayItems.useRecord'
        | 'Card.$$typeof'
        | 'Card.Meta'
        | 'Card.Grid'
        | 'NumberPicker.$$typeof'
        | 'Cascader.$$typeof'
        | 'FileManage.$$typeof'
        | 'Switch.$$typeof',
      Component_8 extends
        | 'HotArea'
        | 'Input'
        | 'Select'
        | 'DateRangePicker'
        | 'YearPicker'
        | 'TimeRangePicker'
        | 'Radio'
        | 'Checkbox'
        | 'FormItem'
        | 'Password'
        | 'ArrayCards'
        | 'ArrayItems'
        | 'Space'
        | 'Card'
        | 'NumberPicker'
        | 'Cascader'
        | 'FileManage'
        | 'LinksButton'
        | 'Switch'
        | 'LinkCoupon'
        | 'LinkGoods'
        | 'LinkRecommendId'
        | 'Input.TextArea'
        | 'DateRangePicker.RangePicker'
        | 'YearPicker.RangePicker'
        | 'TimeRangePicker.RangePicker'
        | 'Radio.Group'
        | 'Radio.__ANT_RADIO'
        | 'Checkbox.Group'
        | 'Checkbox.__ANT_CHECKBOX'
        | 'FormItem.BaseItem'
        | 'Password.$$typeof'
        | 'ArrayCards.Addition'
        | 'ArrayCards.Copy'
        | 'ArrayCards.Remove'
        | 'ArrayCards.MoveUp'
        | 'ArrayCards.MoveDown'
        | 'ArrayCards.SortHandle'
        | 'ArrayCards.Index'
        | 'ArrayCards.useArray'
        | 'ArrayCards.useIndex'
        | 'ArrayCards.useRecord'
        | 'ArrayItems.Item'
        | 'ArrayItems.Addition'
        | 'ArrayItems.Copy'
        | 'ArrayItems.Remove'
        | 'ArrayItems.MoveUp'
        | 'ArrayItems.MoveDown'
        | 'ArrayItems.SortHandle'
        | 'ArrayItems.Index'
        | 'ArrayItems.useArray'
        | 'ArrayItems.useIndex'
        | 'ArrayItems.useRecord'
        | 'Card.$$typeof'
        | 'Card.Meta'
        | 'Card.Grid'
        | 'NumberPicker.$$typeof'
        | 'Cascader.$$typeof'
        | 'FileManage.$$typeof'
        | 'Switch.$$typeof',
    >(
      props: import('@formily/react').ISchemaTypeFieldProps<
        {
          Radio: React.FC<React.PropsWithChildren<import('antd').RadioProps>> & {
            Group?: React.FC<React.PropsWithChildren<import('antd').RadioGroupProps>> | undefined;
            __ANT_RADIO?: boolean | undefined;
          };
          Checkbox: React.FC<React.PropsWithChildren<import('antd').CheckboxProps>> & {
            Group?:
              | React.FC<React.PropsWithChildren<import('antd/lib/checkbox').CheckboxGroupProps>>
              | undefined;
            __ANT_CHECKBOX?: boolean | undefined;
          };
          Input: React.FC<React.PropsWithChildren<import('antd').InputProps>> & {
            TextArea?:
              | React.FC<React.PropsWithChildren<import('antd/lib/input').TextAreaProps>>
              | undefined;
          };
          DateRangePicker: React.FC<React.PropsWithChildren<import('antd').DatePickerProps>> & {
            RangePicker?:
              | React.FC<React.PropsWithChildren<import('antd/lib/date-picker').RangePickerProps>>
              | undefined;
          };
          YearPicker: React.FC<React.PropsWithChildren<import('antd').DatePickerProps>> & {
            RangePicker?:
              | React.FC<React.PropsWithChildren<import('antd/lib/date-picker').RangePickerProps>>
              | undefined;
          };
          TimeRangePicker: React.FC<React.PropsWithChildren<import('antd').TimePickerProps>> & {
            RangePicker?:
              | React.FC<React.PropsWithChildren<import('antd').TimeRangePickerProps>>
              | undefined;
          };
          FormItem: React.FC<React.PropsWithChildren<import('@formily/antd').IFormItemProps>> & {
            BaseItem?:
              | React.FC<React.PropsWithChildren<import('@formily/antd').IFormItemProps>>
              | undefined;
          };
          Password: React.ForwardRefExoticComponent<
            Partial<import('@formily/antd').IPasswordProps> & React.RefAttributes<unknown>
          >;
          ArrayCards: React.FC<
            React.PropsWithChildren<
              import('antd').CardProps & import('@formily/antd').IArrayBaseProps
            >
          > &
            import('@formily/antd').ArrayBaseMixins;
          ArrayItems: React.FC<
            React.PropsWithChildren<
              React.HTMLAttributes<HTMLDivElement> & import('@formily/antd').IArrayBaseProps
            >
          > &
            import('@formily/antd').ArrayBaseMixins & {
              Item?:
                | React.FC<
                    React.HTMLAttributes<HTMLDivElement> & {
                      type?: 'card' | 'divide' | undefined;
                    }
                  >
                | undefined;
            };
          Select: import('@formily/react').ReactFC<import('antd').SelectProps<any, any>>;
          HotArea: React.FC<
            React.PropsWithChildren<{
              value: {
                link: string;
                left: number;
                top: number;
                width: number;
                height: number;
              }[];
            }>
          >;
          Space: React.FC<React.PropsWithChildren<import('antd').SpaceProps>>;
          Card: import('antd/lib/card').CardInterface;
          NumberPicker: React.ForwardRefExoticComponent<
            Pick<
              Partial<
                import('antd').InputNumberProps<string | number> & {
                  children?: React.ReactNode;
                } & {
                  ref?: React.Ref<HTMLInputElement> | undefined;
                }
              >,
              keyof import('antd').InputNumberProps<string | number>
            > &
              React.RefAttributes<unknown>
          >;
          Cascader: React.ForwardRefExoticComponent<
            (
              | Pick<
                  Partial<
                    Omit<
                      import('rc-cascader').SingleCascaderProps<
                        import('rc-cascader').DefaultOptionType
                      >,
                      'options' | 'checkable'
                    > & {
                      multiple?: false | undefined;
                    } & {
                      multiple?: boolean | undefined;
                      size?: import('antd/lib/button').ButtonSize;
                      bordered?: boolean | undefined;
                      placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight' | undefined;
                      suffixIcon?: React.ReactNode;
                      options?:
                        | (
                            | import('rc-cascader').DefaultOptionType
                            | import('rc-cascader').BaseOptionType
                          )[]
                        | undefined;
                      status?: '' | 'error' | 'warning' | undefined;
                    } & {
                      children?: React.ReactNode;
                    } & {
                      ref?: React.Ref<import('antd/lib/cascader').CascaderRef> | undefined;
                    }
                  >,
                  | 'style'
                  | 'children'
                  | 'defaultValue'
                  | 'autoFocus'
                  | 'className'
                  | 'id'
                  | 'placeholder'
                  | 'tabIndex'
                  | 'aria-activedescendant'
                  | 'aria-atomic'
                  | 'aria-autocomplete'
                  | 'aria-busy'
                  | 'aria-checked'
                  | 'aria-colcount'
                  | 'aria-colindex'
                  | 'aria-colspan'
                  | 'aria-controls'
                  | 'aria-current'
                  | 'aria-describedby'
                  | 'aria-details'
                  | 'aria-disabled'
                  | 'aria-dropeffect'
                  | 'aria-errormessage'
                  | 'aria-expanded'
                  | 'aria-flowto'
                  | 'aria-grabbed'
                  | 'aria-haspopup'
                  | 'aria-hidden'
                  | 'aria-invalid'
                  | 'aria-keyshortcuts'
                  | 'aria-label'
                  | 'aria-labelledby'
                  | 'aria-level'
                  | 'aria-live'
                  | 'aria-modal'
                  | 'aria-multiline'
                  | 'aria-multiselectable'
                  | 'aria-orientation'
                  | 'aria-owns'
                  | 'aria-placeholder'
                  | 'aria-posinset'
                  | 'aria-pressed'
                  | 'aria-readonly'
                  | 'aria-relevant'
                  | 'aria-required'
                  | 'aria-roledescription'
                  | 'aria-rowcount'
                  | 'aria-rowindex'
                  | 'aria-rowspan'
                  | 'aria-selected'
                  | 'aria-setsize'
                  | 'aria-sort'
                  | 'aria-valuemax'
                  | 'aria-valuemin'
                  | 'aria-valuenow'
                  | 'aria-valuetext'
                  | 'onFocus'
                  | 'onBlur'
                  | 'onChange'
                  | 'onKeyDown'
                  | 'onKeyUp'
                  | 'onClick'
                  | 'onMouseDown'
                  | 'onMouseEnter'
                  | 'onMouseLeave'
                  | 'status'
                  | 'loading'
                  | 'open'
                  | 'bordered'
                  | 'prefixCls'
                  | 'expandIcon'
                  | 'disabled'
                  | 'value'
                  | 'size'
                  | 'multiple'
                  | 'direction'
                  | 'getPopupContainer'
                  | 'popupClassName'
                  | 'searchValue'
                  | 'dropdownClassName'
                  | 'dropdownAlign'
                  | 'transitionName'
                  | 'allowClear'
                  | 'defaultOpen'
                  | 'suffixIcon'
                  | 'clearIcon'
                  | 'options'
                  | 'onSearch'
                  | 'placement'
                  | 'animation'
                  | 'showArrow'
                  | 'popupVisible'
                  | 'inputIcon'
                  | 'getInputElement'
                  | 'getRawInputElement'
                  | 'showSearch'
                  | 'tagRender'
                  | 'notFoundContent'
                  | 'onClear'
                  | 'choiceTransitionName'
                  | 'onDropdownVisibleChange'
                  | 'maxTagTextLength'
                  | 'maxTagCount'
                  | 'maxTagPlaceholder'
                  | 'removeIcon'
                  | 'dropdownStyle'
                  | 'dropdownMatchSelectWidth'
                  | 'dropdownRender'
                  | 'showAction'
                  | 'onPopupScroll'
                  | 'onInputKeyDown'
                  | 'fieldNames'
                  | 'changeOnSelect'
                  | 'displayRender'
                  | 'showCheckedStrategy'
                  | 'expandTrigger'
                  | 'dropdownPrefixCls'
                  | 'loadData'
                  | 'dropdownMenuColumnStyle'
                  | 'popupPlacement'
                  | 'onPopupVisibleChange'
                  | 'loadingIcon'
                >
              | Pick<
                  Partial<
                    Omit<
                      import('rc-cascader').MultipleCascaderProps<
                        import('rc-cascader').DefaultOptionType
                      >,
                      'options' | 'checkable'
                    > & {
                      multiple: true;
                    } & {
                      multiple?: boolean | undefined;
                      size?: import('antd/lib/button').ButtonSize;
                      bordered?: boolean | undefined;
                      placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight' | undefined;
                      suffixIcon?: React.ReactNode;
                      options?:
                        | (
                            | import('rc-cascader').DefaultOptionType
                            | import('rc-cascader').BaseOptionType
                          )[]
                        | undefined;
                      status?: '' | 'error' | 'warning' | undefined;
                    } & {
                      children?: React.ReactNode;
                    } & {
                      ref?: React.Ref<import('antd/lib/cascader').CascaderRef> | undefined;
                    }
                  >,
                  | 'style'
                  | 'children'
                  | 'defaultValue'
                  | 'autoFocus'
                  | 'className'
                  | 'id'
                  | 'placeholder'
                  | 'tabIndex'
                  | 'aria-activedescendant'
                  | 'aria-atomic'
                  | 'aria-autocomplete'
                  | 'aria-busy'
                  | 'aria-checked'
                  | 'aria-colcount'
                  | 'aria-colindex'
                  | 'aria-colspan'
                  | 'aria-controls'
                  | 'aria-current'
                  | 'aria-describedby'
                  | 'aria-details'
                  | 'aria-disabled'
                  | 'aria-dropeffect'
                  | 'aria-errormessage'
                  | 'aria-expanded'
                  | 'aria-flowto'
                  | 'aria-grabbed'
                  | 'aria-haspopup'
                  | 'aria-hidden'
                  | 'aria-invalid'
                  | 'aria-keyshortcuts'
                  | 'aria-label'
                  | 'aria-labelledby'
                  | 'aria-level'
                  | 'aria-live'
                  | 'aria-modal'
                  | 'aria-multiline'
                  | 'aria-multiselectable'
                  | 'aria-orientation'
                  | 'aria-owns'
                  | 'aria-placeholder'
                  | 'aria-posinset'
                  | 'aria-pressed'
                  | 'aria-readonly'
                  | 'aria-relevant'
                  | 'aria-required'
                  | 'aria-roledescription'
                  | 'aria-rowcount'
                  | 'aria-rowindex'
                  | 'aria-rowspan'
                  | 'aria-selected'
                  | 'aria-setsize'
                  | 'aria-sort'
                  | 'aria-valuemax'
                  | 'aria-valuemin'
                  | 'aria-valuenow'
                  | 'aria-valuetext'
                  | 'onFocus'
                  | 'onBlur'
                  | 'onChange'
                  | 'onKeyDown'
                  | 'onKeyUp'
                  | 'onClick'
                  | 'onMouseDown'
                  | 'onMouseEnter'
                  | 'onMouseLeave'
                  | 'status'
                  | 'loading'
                  | 'open'
                  | 'bordered'
                  | 'prefixCls'
                  | 'expandIcon'
                  | 'disabled'
                  | 'value'
                  | 'size'
                  | 'multiple'
                  | 'direction'
                  | 'getPopupContainer'
                  | 'popupClassName'
                  | 'searchValue'
                  | 'dropdownClassName'
                  | 'dropdownAlign'
                  | 'transitionName'
                  | 'allowClear'
                  | 'defaultOpen'
                  | 'suffixIcon'
                  | 'clearIcon'
                  | 'options'
                  | 'onSearch'
                  | 'placement'
                  | 'animation'
                  | 'showArrow'
                  | 'popupVisible'
                  | 'inputIcon'
                  | 'getInputElement'
                  | 'getRawInputElement'
                  | 'showSearch'
                  | 'tagRender'
                  | 'notFoundContent'
                  | 'onClear'
                  | 'choiceTransitionName'
                  | 'onDropdownVisibleChange'
                  | 'maxTagTextLength'
                  | 'maxTagCount'
                  | 'maxTagPlaceholder'
                  | 'removeIcon'
                  | 'dropdownStyle'
                  | 'dropdownMatchSelectWidth'
                  | 'dropdownRender'
                  | 'showAction'
                  | 'onPopupScroll'
                  | 'onInputKeyDown'
                  | 'fieldNames'
                  | 'changeOnSelect'
                  | 'displayRender'
                  | 'showCheckedStrategy'
                  | 'expandTrigger'
                  | 'dropdownPrefixCls'
                  | 'loadData'
                  | 'dropdownMenuColumnStyle'
                  | 'popupPlacement'
                  | 'onPopupVisibleChange'
                  | 'loadingIcon'
                >
            ) &
              React.RefAttributes<unknown>
          >;
          FileManage: React.ForwardRefExoticComponent<
            Omit<Partial<any>, 'ref'> & React.RefAttributes<unknown>
          >;
          LinksButton: React.FC<{
            value?: string | undefined;
            onChange?: ((value: string) => void) | undefined;
          }>;
          Switch: React.ForwardRefExoticComponent<
            Pick<
              Partial<import('antd').SwitchProps & React.RefAttributes<HTMLElement>>,
              'key' | keyof import('antd').SwitchProps
            > &
              React.RefAttributes<unknown>
          >;
          LinkCoupon: React.FC<{
            value?: import('../../components/LinkCoupon').DataType | undefined;
            onChange?:
              | ((value: import('../../components/LinkCoupon').DataType) => void)
              | undefined;
          }>;
          LinkGoods: React.FC<{
            value?: import('../../components/LinkGoods').DataType | undefined;
            onChange?: ((value: import('../../components/LinkGoods').DataType) => void) | undefined;
          }>;
          LinkRecommendId: React.FC<{
            value?: import('../../components/LinkRecommendId').DataType | undefined;
            onChange?:
              | ((value?: import('../../components/LinkRecommendId').DataType | undefined) => void)
              | undefined;
          }>;
        },
        Component_8,
        Decorator_8
      >,
    ): JSX.Element;
    displayName: string;
  };
  Number: {
    <
      Decorator_9 extends
        | 'HotArea'
        | 'Input'
        | 'Select'
        | 'DateRangePicker'
        | 'YearPicker'
        | 'TimeRangePicker'
        | 'Radio'
        | 'Checkbox'
        | 'FormItem'
        | 'Password'
        | 'ArrayCards'
        | 'ArrayItems'
        | 'Space'
        | 'Card'
        | 'NumberPicker'
        | 'Cascader'
        | 'FileManage'
        | 'LinksButton'
        | 'Switch'
        | 'LinkCoupon'
        | 'LinkGoods'
        | 'LinkRecommendId'
        | 'Input.TextArea'
        | 'DateRangePicker.RangePicker'
        | 'YearPicker.RangePicker'
        | 'TimeRangePicker.RangePicker'
        | 'Radio.Group'
        | 'Radio.__ANT_RADIO'
        | 'Checkbox.Group'
        | 'Checkbox.__ANT_CHECKBOX'
        | 'FormItem.BaseItem'
        | 'Password.$$typeof'
        | 'ArrayCards.Addition'
        | 'ArrayCards.Copy'
        | 'ArrayCards.Remove'
        | 'ArrayCards.MoveUp'
        | 'ArrayCards.MoveDown'
        | 'ArrayCards.SortHandle'
        | 'ArrayCards.Index'
        | 'ArrayCards.useArray'
        | 'ArrayCards.useIndex'
        | 'ArrayCards.useRecord'
        | 'ArrayItems.Item'
        | 'ArrayItems.Addition'
        | 'ArrayItems.Copy'
        | 'ArrayItems.Remove'
        | 'ArrayItems.MoveUp'
        | 'ArrayItems.MoveDown'
        | 'ArrayItems.SortHandle'
        | 'ArrayItems.Index'
        | 'ArrayItems.useArray'
        | 'ArrayItems.useIndex'
        | 'ArrayItems.useRecord'
        | 'Card.$$typeof'
        | 'Card.Meta'
        | 'Card.Grid'
        | 'NumberPicker.$$typeof'
        | 'Cascader.$$typeof'
        | 'FileManage.$$typeof'
        | 'Switch.$$typeof',
      Component_9 extends
        | 'HotArea'
        | 'Input'
        | 'Select'
        | 'DateRangePicker'
        | 'YearPicker'
        | 'TimeRangePicker'
        | 'Radio'
        | 'Checkbox'
        | 'FormItem'
        | 'Password'
        | 'ArrayCards'
        | 'ArrayItems'
        | 'Space'
        | 'Card'
        | 'NumberPicker'
        | 'Cascader'
        | 'FileManage'
        | 'LinksButton'
        | 'Switch'
        | 'LinkCoupon'
        | 'LinkGoods'
        | 'LinkRecommendId'
        | 'Input.TextArea'
        | 'DateRangePicker.RangePicker'
        | 'YearPicker.RangePicker'
        | 'TimeRangePicker.RangePicker'
        | 'Radio.Group'
        | 'Radio.__ANT_RADIO'
        | 'Checkbox.Group'
        | 'Checkbox.__ANT_CHECKBOX'
        | 'FormItem.BaseItem'
        | 'Password.$$typeof'
        | 'ArrayCards.Addition'
        | 'ArrayCards.Copy'
        | 'ArrayCards.Remove'
        | 'ArrayCards.MoveUp'
        | 'ArrayCards.MoveDown'
        | 'ArrayCards.SortHandle'
        | 'ArrayCards.Index'
        | 'ArrayCards.useArray'
        | 'ArrayCards.useIndex'
        | 'ArrayCards.useRecord'
        | 'ArrayItems.Item'
        | 'ArrayItems.Addition'
        | 'ArrayItems.Copy'
        | 'ArrayItems.Remove'
        | 'ArrayItems.MoveUp'
        | 'ArrayItems.MoveDown'
        | 'ArrayItems.SortHandle'
        | 'ArrayItems.Index'
        | 'ArrayItems.useArray'
        | 'ArrayItems.useIndex'
        | 'ArrayItems.useRecord'
        | 'Card.$$typeof'
        | 'Card.Meta'
        | 'Card.Grid'
        | 'NumberPicker.$$typeof'
        | 'Cascader.$$typeof'
        | 'FileManage.$$typeof'
        | 'Switch.$$typeof',
    >(
      props: import('@formily/react').ISchemaTypeFieldProps<
        {
          Radio: React.FC<React.PropsWithChildren<import('antd').RadioProps>> & {
            Group?: React.FC<React.PropsWithChildren<import('antd').RadioGroupProps>> | undefined;
            __ANT_RADIO?: boolean | undefined;
          };
          Checkbox: React.FC<React.PropsWithChildren<import('antd').CheckboxProps>> & {
            Group?:
              | React.FC<React.PropsWithChildren<import('antd/lib/checkbox').CheckboxGroupProps>>
              | undefined;
            __ANT_CHECKBOX?: boolean | undefined;
          };
          Input: React.FC<React.PropsWithChildren<import('antd').InputProps>> & {
            TextArea?:
              | React.FC<React.PropsWithChildren<import('antd/lib/input').TextAreaProps>>
              | undefined;
          };
          DateRangePicker: React.FC<React.PropsWithChildren<import('antd').DatePickerProps>> & {
            RangePicker?:
              | React.FC<React.PropsWithChildren<import('antd/lib/date-picker').RangePickerProps>>
              | undefined;
          };
          YearPicker: React.FC<React.PropsWithChildren<import('antd').DatePickerProps>> & {
            RangePicker?:
              | React.FC<React.PropsWithChildren<import('antd/lib/date-picker').RangePickerProps>>
              | undefined;
          };
          TimeRangePicker: React.FC<React.PropsWithChildren<import('antd').TimePickerProps>> & {
            RangePicker?:
              | React.FC<React.PropsWithChildren<import('antd').TimeRangePickerProps>>
              | undefined;
          };
          FormItem: React.FC<React.PropsWithChildren<import('@formily/antd').IFormItemProps>> & {
            BaseItem?:
              | React.FC<React.PropsWithChildren<import('@formily/antd').IFormItemProps>>
              | undefined;
          };
          Password: React.ForwardRefExoticComponent<
            Partial<import('@formily/antd').IPasswordProps> & React.RefAttributes<unknown>
          >;
          ArrayCards: React.FC<
            React.PropsWithChildren<
              import('antd').CardProps & import('@formily/antd').IArrayBaseProps
            >
          > &
            import('@formily/antd').ArrayBaseMixins;
          ArrayItems: React.FC<
            React.PropsWithChildren<
              React.HTMLAttributes<HTMLDivElement> & import('@formily/antd').IArrayBaseProps
            >
          > &
            import('@formily/antd').ArrayBaseMixins & {
              Item?:
                | React.FC<
                    React.HTMLAttributes<HTMLDivElement> & {
                      type?: 'card' | 'divide' | undefined;
                    }
                  >
                | undefined;
            };
          Select: import('@formily/react').ReactFC<import('antd').SelectProps<any, any>>;
          HotArea: React.FC<
            React.PropsWithChildren<{
              value: {
                link: string;
                left: number;
                top: number;
                width: number;
                height: number;
              }[];
            }>
          >;
          Space: React.FC<React.PropsWithChildren<import('antd').SpaceProps>>;
          Card: import('antd/lib/card').CardInterface;
          NumberPicker: React.ForwardRefExoticComponent<
            Pick<
              Partial<
                import('antd').InputNumberProps<string | number> & {
                  children?: React.ReactNode;
                } & {
                  ref?: React.Ref<HTMLInputElement> | undefined;
                }
              >,
              keyof import('antd').InputNumberProps<string | number>
            > &
              React.RefAttributes<unknown>
          >;
          Cascader: React.ForwardRefExoticComponent<
            (
              | Pick<
                  Partial<
                    Omit<
                      import('rc-cascader').SingleCascaderProps<
                        import('rc-cascader').DefaultOptionType
                      >,
                      'options' | 'checkable'
                    > & {
                      multiple?: false | undefined;
                    } & {
                      multiple?: boolean | undefined;
                      size?: import('antd/lib/button').ButtonSize;
                      bordered?: boolean | undefined;
                      placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight' | undefined;
                      suffixIcon?: React.ReactNode;
                      options?:
                        | (
                            | import('rc-cascader').DefaultOptionType
                            | import('rc-cascader').BaseOptionType
                          )[]
                        | undefined;
                      status?: '' | 'error' | 'warning' | undefined;
                    } & {
                      children?: React.ReactNode;
                    } & {
                      ref?: React.Ref<import('antd/lib/cascader').CascaderRef> | undefined;
                    }
                  >,
                  | 'style'
                  | 'children'
                  | 'defaultValue'
                  | 'autoFocus'
                  | 'className'
                  | 'id'
                  | 'placeholder'
                  | 'tabIndex'
                  | 'aria-activedescendant'
                  | 'aria-atomic'
                  | 'aria-autocomplete'
                  | 'aria-busy'
                  | 'aria-checked'
                  | 'aria-colcount'
                  | 'aria-colindex'
                  | 'aria-colspan'
                  | 'aria-controls'
                  | 'aria-current'
                  | 'aria-describedby'
                  | 'aria-details'
                  | 'aria-disabled'
                  | 'aria-dropeffect'
                  | 'aria-errormessage'
                  | 'aria-expanded'
                  | 'aria-flowto'
                  | 'aria-grabbed'
                  | 'aria-haspopup'
                  | 'aria-hidden'
                  | 'aria-invalid'
                  | 'aria-keyshortcuts'
                  | 'aria-label'
                  | 'aria-labelledby'
                  | 'aria-level'
                  | 'aria-live'
                  | 'aria-modal'
                  | 'aria-multiline'
                  | 'aria-multiselectable'
                  | 'aria-orientation'
                  | 'aria-owns'
                  | 'aria-placeholder'
                  | 'aria-posinset'
                  | 'aria-pressed'
                  | 'aria-readonly'
                  | 'aria-relevant'
                  | 'aria-required'
                  | 'aria-roledescription'
                  | 'aria-rowcount'
                  | 'aria-rowindex'
                  | 'aria-rowspan'
                  | 'aria-selected'
                  | 'aria-setsize'
                  | 'aria-sort'
                  | 'aria-valuemax'
                  | 'aria-valuemin'
                  | 'aria-valuenow'
                  | 'aria-valuetext'
                  | 'onFocus'
                  | 'onBlur'
                  | 'onChange'
                  | 'onKeyDown'
                  | 'onKeyUp'
                  | 'onClick'
                  | 'onMouseDown'
                  | 'onMouseEnter'
                  | 'onMouseLeave'
                  | 'status'
                  | 'loading'
                  | 'open'
                  | 'bordered'
                  | 'prefixCls'
                  | 'expandIcon'
                  | 'disabled'
                  | 'value'
                  | 'size'
                  | 'multiple'
                  | 'direction'
                  | 'getPopupContainer'
                  | 'popupClassName'
                  | 'searchValue'
                  | 'dropdownClassName'
                  | 'dropdownAlign'
                  | 'transitionName'
                  | 'allowClear'
                  | 'defaultOpen'
                  | 'suffixIcon'
                  | 'clearIcon'
                  | 'options'
                  | 'onSearch'
                  | 'placement'
                  | 'animation'
                  | 'showArrow'
                  | 'popupVisible'
                  | 'inputIcon'
                  | 'getInputElement'
                  | 'getRawInputElement'
                  | 'showSearch'
                  | 'tagRender'
                  | 'notFoundContent'
                  | 'onClear'
                  | 'choiceTransitionName'
                  | 'onDropdownVisibleChange'
                  | 'maxTagTextLength'
                  | 'maxTagCount'
                  | 'maxTagPlaceholder'
                  | 'removeIcon'
                  | 'dropdownStyle'
                  | 'dropdownMatchSelectWidth'
                  | 'dropdownRender'
                  | 'showAction'
                  | 'onPopupScroll'
                  | 'onInputKeyDown'
                  | 'fieldNames'
                  | 'changeOnSelect'
                  | 'displayRender'
                  | 'showCheckedStrategy'
                  | 'expandTrigger'
                  | 'dropdownPrefixCls'
                  | 'loadData'
                  | 'dropdownMenuColumnStyle'
                  | 'popupPlacement'
                  | 'onPopupVisibleChange'
                  | 'loadingIcon'
                >
              | Pick<
                  Partial<
                    Omit<
                      import('rc-cascader').MultipleCascaderProps<
                        import('rc-cascader').DefaultOptionType
                      >,
                      'options' | 'checkable'
                    > & {
                      multiple: true;
                    } & {
                      multiple?: boolean | undefined;
                      size?: import('antd/lib/button').ButtonSize;
                      bordered?: boolean | undefined;
                      placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight' | undefined;
                      suffixIcon?: React.ReactNode;
                      options?:
                        | (
                            | import('rc-cascader').DefaultOptionType
                            | import('rc-cascader').BaseOptionType
                          )[]
                        | undefined;
                      status?: '' | 'error' | 'warning' | undefined;
                    } & {
                      children?: React.ReactNode;
                    } & {
                      ref?: React.Ref<import('antd/lib/cascader').CascaderRef> | undefined;
                    }
                  >,
                  | 'style'
                  | 'children'
                  | 'defaultValue'
                  | 'autoFocus'
                  | 'className'
                  | 'id'
                  | 'placeholder'
                  | 'tabIndex'
                  | 'aria-activedescendant'
                  | 'aria-atomic'
                  | 'aria-autocomplete'
                  | 'aria-busy'
                  | 'aria-checked'
                  | 'aria-colcount'
                  | 'aria-colindex'
                  | 'aria-colspan'
                  | 'aria-controls'
                  | 'aria-current'
                  | 'aria-describedby'
                  | 'aria-details'
                  | 'aria-disabled'
                  | 'aria-dropeffect'
                  | 'aria-errormessage'
                  | 'aria-expanded'
                  | 'aria-flowto'
                  | 'aria-grabbed'
                  | 'aria-haspopup'
                  | 'aria-hidden'
                  | 'aria-invalid'
                  | 'aria-keyshortcuts'
                  | 'aria-label'
                  | 'aria-labelledby'
                  | 'aria-level'
                  | 'aria-live'
                  | 'aria-modal'
                  | 'aria-multiline'
                  | 'aria-multiselectable'
                  | 'aria-orientation'
                  | 'aria-owns'
                  | 'aria-placeholder'
                  | 'aria-posinset'
                  | 'aria-pressed'
                  | 'aria-readonly'
                  | 'aria-relevant'
                  | 'aria-required'
                  | 'aria-roledescription'
                  | 'aria-rowcount'
                  | 'aria-rowindex'
                  | 'aria-rowspan'
                  | 'aria-selected'
                  | 'aria-setsize'
                  | 'aria-sort'
                  | 'aria-valuemax'
                  | 'aria-valuemin'
                  | 'aria-valuenow'
                  | 'aria-valuetext'
                  | 'onFocus'
                  | 'onBlur'
                  | 'onChange'
                  | 'onKeyDown'
                  | 'onKeyUp'
                  | 'onClick'
                  | 'onMouseDown'
                  | 'onMouseEnter'
                  | 'onMouseLeave'
                  | 'status'
                  | 'loading'
                  | 'open'
                  | 'bordered'
                  | 'prefixCls'
                  | 'expandIcon'
                  | 'disabled'
                  | 'value'
                  | 'size'
                  | 'multiple'
                  | 'direction'
                  | 'getPopupContainer'
                  | 'popupClassName'
                  | 'searchValue'
                  | 'dropdownClassName'
                  | 'dropdownAlign'
                  | 'transitionName'
                  | 'allowClear'
                  | 'defaultOpen'
                  | 'suffixIcon'
                  | 'clearIcon'
                  | 'options'
                  | 'onSearch'
                  | 'placement'
                  | 'animation'
                  | 'showArrow'
                  | 'popupVisible'
                  | 'inputIcon'
                  | 'getInputElement'
                  | 'getRawInputElement'
                  | 'showSearch'
                  | 'tagRender'
                  | 'notFoundContent'
                  | 'onClear'
                  | 'choiceTransitionName'
                  | 'onDropdownVisibleChange'
                  | 'maxTagTextLength'
                  | 'maxTagCount'
                  | 'maxTagPlaceholder'
                  | 'removeIcon'
                  | 'dropdownStyle'
                  | 'dropdownMatchSelectWidth'
                  | 'dropdownRender'
                  | 'showAction'
                  | 'onPopupScroll'
                  | 'onInputKeyDown'
                  | 'fieldNames'
                  | 'changeOnSelect'
                  | 'displayRender'
                  | 'showCheckedStrategy'
                  | 'expandTrigger'
                  | 'dropdownPrefixCls'
                  | 'loadData'
                  | 'dropdownMenuColumnStyle'
                  | 'popupPlacement'
                  | 'onPopupVisibleChange'
                  | 'loadingIcon'
                >
            ) &
              React.RefAttributes<unknown>
          >;
          FileManage: React.ForwardRefExoticComponent<
            Omit<Partial<any>, 'ref'> & React.RefAttributes<unknown>
          >;
          LinksButton: React.FC<{
            value?: string | undefined;
            onChange?: ((value: string) => void) | undefined;
          }>;
          Switch: React.ForwardRefExoticComponent<
            Pick<
              Partial<import('antd').SwitchProps & React.RefAttributes<HTMLElement>>,
              'key' | keyof import('antd').SwitchProps
            > &
              React.RefAttributes<unknown>
          >;
          LinkCoupon: React.FC<{
            value?: import('../../components/LinkCoupon').DataType | undefined;
            onChange?:
              | ((value: import('../../components/LinkCoupon').DataType) => void)
              | undefined;
          }>;
          LinkGoods: React.FC<{
            value?: import('../../components/LinkGoods').DataType | undefined;
            onChange?: ((value: import('../../components/LinkGoods').DataType) => void) | undefined;
          }>;
          LinkRecommendId: React.FC<{
            value?: import('../../components/LinkRecommendId').DataType | undefined;
            onChange?:
              | ((value?: import('../../components/LinkRecommendId').DataType | undefined) => void)
              | undefined;
          }>;
        },
        Component_9,
        Decorator_9
      >,
    ): JSX.Element;
    displayName: string;
  };
};
export default SchemaField;
