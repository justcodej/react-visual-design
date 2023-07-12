import React from 'react';
import { Row, Input, Select, Button, DatePicker } from 'antd';
import { StyledCol, ButtonContainer, Container } from './index.styled';

const components = {
  Input,
  Select,
  DatePicker,
  RangePicker: DatePicker.RangePicker,
};

export type optionsType = {
  componentName: string;
  label: string;
  name: string;
  defaultValue?: string | number;
  placeholder?: string | string[];
  options?: any[];
};

interface SearchInputsProps {
  options: optionsType[];
  loading?: boolean;
  onChange?: (values: any) => void;
  onSearch?: () => void;
  onReset?: () => void;
  values?: any;
}

const SearchInputs: React.FC<SearchInputsProps> = ({
  options,
  loading,
  onChange,
  onSearch,
  onReset,
  values,
}) => {
  const handleChange = (name: string, componentName: string, e: any) => {
    if (componentName === 'Input') {
      onChange?.({ [name]: e.target.value });
    } else {
      onChange?.({ [name]: e });
    }
  };

  return (
    <Container>
      <Row>
        {options.map((item, index) => {
          const Component = (components as any)[item.componentName];
          return (
            <StyledCol span={8} key={index}>
              <span className="label">{item.label}:</span>
              <Component
                defaultValue={item.defaultValue}
                placeholder={item.placeholder}
                onChange={(e: any) => handleChange(item.name, item.componentName, e)}
                style={{ flex: '1 0 0' }}
                options={item.options}
                value={values[item.name]}
              />
            </StyledCol>
          );
        })}
      </Row>
      {!!options.length && (
        <ButtonContainer>
          <Button onClick={onReset} style={{ marginRight: 10 }}>
            重置
          </Button>
          <Button type="primary" loading={loading} disabled={loading} onClick={onSearch}>
            查询
          </Button>
        </ButtonContainer>
      )}
    </Container>
  );
};

SearchInputs.defaultProps = {
  options: [],
  loading: false,
  onChange: () => {},
};

export default SearchInputs;
