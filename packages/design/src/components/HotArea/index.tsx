import React, { FC, PropsWithChildren, useState, MouseEvent, useRef, useEffect } from 'react';
import { ArrayField } from '@formily/core';
import { useField, useFieldSchema, RecursionField, observer, useForm } from '@formily/react';
import { Image, message, Button, Row, Col } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { DragContainer, DragArea, FormArea } from './index.styled';
import { cloneDeep } from 'lodash';

type HotAreaProps = {
  value: valueProps[];
};

type valueProps = {
  link: string;
  left: number;
  top: number;
  width: number;
  height: number;
};

const LIMIT_SIZE = 30;

const HotArea: FC<PropsWithChildren<HotAreaProps>> = observer(({ value }) => {
  const field = useField<ArrayField>();
  const schema = useFieldSchema();
  const dataSource = Array.isArray(field.value) ? field.value : [];
  const parentForm = useForm();

  if (!schema) throw new Error('can not found schema object');

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [leftButtonDown, setLeftButtonDown] = useState<boolean>(false); // 鼠标左键按下
  const [startX, setStartX] = useState<number>(0);
  const [startY, setStartY] = useState<number>(0);
  const [hotAreaItem, setHotAreaItem] = useState<valueProps>();

  const handleMouseDown = (e: MouseEvent) => {
    if (e.buttons !== 1) return;
    if (dataSource.length > 7) {
      message.error('长度或条目数不能大于8');
      return;
    }
    e.preventDefault();
    e.stopPropagation();

    setLeftButtonDown(true);
    setStartX(e.clientX);
    setStartY(e.clientY);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!leftButtonDown) return;
    e.preventDefault();
    e.stopPropagation();

    let { top, left }: any = containerRef.current?.getBoundingClientRect();
    const [nowX, nowY] = [e.clientX - left, e.clientY - top];
    top = Math.floor(top);
    left = Math.floor(left);
    setHotAreaItem({
      left: Math.min(startX - left, nowX),
      top: Math.min(startY - top, nowY),
      width: Math.abs(e.clientX - startX),
      height: Math.abs(e.clientY - startY),
      link: '',
    });
  };

  const handleMouseUp = (e: MouseEvent) => {
    if (!leftButtonDown) return;
    e.preventDefault();
    e.stopPropagation();

    setHotAreaItem(void 0);
    setLeftButtonDown(false);

    if ((hotAreaItem?.width || 0) < LIMIT_SIZE && (hotAreaItem?.height || 0) < LIMIT_SIZE) {
      message.error(`热区不能小于 ${LIMIT_SIZE} 像素`);
      return;
    }

    hotAreaItem && field?.push?.(cloneDeep(hotAreaItem));
  };

  useEffect(() => {
    setHotAreaItem(void 0);
    field?.reset();
  }, [parentForm.values?.basicAttribute?.image]);

  if (!parentForm.values?.basicAttribute?.image) return null;

  return (
    <>
      <DragContainer>
        <Image
          src={parentForm.values?.basicAttribute?.image}
          preview={false}
          style={{ width: '100%' }}
          alt=""
        />
        <DragArea
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
        >
          {dataSource.map(({ link, ...style }: valueProps, index: number) => (
            <div className="area-container-item" style={style} key={index}>
              {index + 1}
            </div>
          ))}
          {hotAreaItem && <div className="area-container-item dashed" style={hotAreaItem}></div>}
        </DragArea>
      </DragContainer>
      <FormArea>
        {dataSource.map((item, index) => {
          const items = Array.isArray(schema.items)
            ? schema.items[index] || schema.items[0]
            : schema.items!;

          return (
            <Row key={index}>
              <Col span={5}>
                <div className="label">{index + 1}. 跳转链接:</div>
              </Col>
              <Col span={17}>
                <RecursionField schema={items} name={index} />
              </Col>
              <Col span={2}>
                <Button
                  icon={<DeleteOutlined />}
                  onClick={() => field.remove(index)}
                  style={{ marginLeft: 4 }}
                ></Button>
              </Col>
            </Row>
          );
        })}
      </FormArea>
    </>
  );
});

HotArea.displayName = 'HotArea';

export default HotArea;
