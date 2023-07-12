import React, { FC, PropsWithChildren, useContext, useMemo } from 'react';
import { Button, message, Popover, Tooltip, RadioChangeEvent } from 'antd';
import {
  EyeOutlined,
  // MobileOutlined,
  // DesktopOutlined,
  // ExpandOutlined,
  // SyncOutlined,
  QrcodeOutlined,
  FormatPainterOutlined,
} from '@ant-design/icons';
import _ from 'lodash';
import { QRCodeSVG } from 'qrcode.react';
import VisualDesignContext from '../context';
import { Wrapper, Container, ControlsBarStyled } from './index.styled';

type ViewportPanelTypes = {};

const environment =
  process.env.NODE_ENV === 'development' || location.host.includes('test') ? 'dev-' : '';

const ViewportPanel: FC<PropsWithChildren<ViewportPanelTypes>> = ({ children }) => {
  let { onChangeState, isPreviewing, record, appCode, selectedList } =
    useContext(VisualDesignContext);

  // const handleRefresh = _.debounce(() => onChangeState({ refresh: new Date().getTime() }), 200);

  const city = useMemo<string>(() => {
    const HeaderConfig = selectedList.find((item) => item.name === 'Header');
    return encodeURIComponent(HeaderConfig?.data?.dataSource.city?.[0]?.[1] || '');
  }, [JSON.stringify(selectedList)]);

  const link = useMemo<string>(() => {
    const { polymerizeCode, parentPolymerizeCode, polymerizeType } = record;
    const channelID = polymerizeType === 1 ? polymerizeCode : parentPolymerizeCode;
    return `https://${environment}${appCode}.otosaas.com/template/${channelID}`;
  }, [JSON.stringify(record)]);

  const handleClickPreview = () => {
    onChangeState({ isPreviewing: !isPreviewing });
    if (!isPreviewing) {
      message.info('建议使用手机扫码预览');
    }
  };

  return (
    <Wrapper>
      <ControlsBarStyled>
        <div>
          {/* <Button.Group size="small" style={{ marginRight: 10 }}>
            <Button onClick={handleRefresh} icon={<SyncOutlined />}></Button>
            <Button icon={<ExpandOutlined />}></Button>
          </Button.Group> */}
          <Button.Group size="small">
            <Popover
              content={<QRCodeSVG value={`${link}?city=${city}&preview=1`} />}
              placement="leftTop"
            >
              <Tooltip title="扫码预览">
                <Button size="small" icon={<QrcodeOutlined />}></Button>
              </Tooltip>
            </Popover>
            <Tooltip title="在线预览">
              <Button
                size="small"
                onClick={handleClickPreview}
                icon={isPreviewing ? <FormatPainterOutlined /> : <EyeOutlined />}
              ></Button>
            </Tooltip>
          </Button.Group>
        </div>
      </ControlsBarStyled>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default ViewportPanel;
