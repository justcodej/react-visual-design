import React, { useContext, useEffect, useState } from 'react';
import { connect, mapProps } from '@formily/react';
import { KpFileManage } from '@boluome/filemanage-react-component-library';
import { IDataSourceItem } from '@boluome/filemanage-react-component-library/es/FileManage/types/file-manage';
import { message } from 'antd';
import { PHOTO_TYPES, MAX_UPLOAD_SIZE } from '../../consts';
import VisualDesignContext from '../../VisualDesign/context';

const useKpFileManageProps = ({
  value,
  ...rest
}: {
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
}) => {
  const { headers } = useContext(VisualDesignContext);
  const [selectedList, setSelectedList] = useState<Partial<IDataSourceItem>[]>([]);

  const beforeUpload = (files: File[]) => {
    console.log(files, '上传图片前');
    const { name, size } = files[0];

    if (!PHOTO_TYPES.test(name)) {
      message.warning('上传的图片格式不正确');
      return false;
    }
    if (size > MAX_UPLOAD_SIZE * 2) {
      message.warning('上传的图片大于2M');
      return false;
    }
    return true;
  };

  const onChange = (list: IDataSourceItem[]) => {
    setSelectedList(list);
    rest.onChange(list[0]?.url || '');
    rest.onBlur();
  };

  useEffect(() => {
    setSelectedList(value ? [{ url: value }] : []);
  }, [value]);

  return {
    ...rest,
    headers,
    selectedList,
    beforeUpload,
    onChange,
  };
};

const FileManage = connect(
  (props) => <KpFileManage {...useKpFileManageProps(props)} />,
  mapProps((props: any) => props),
);

export default FileManage;
