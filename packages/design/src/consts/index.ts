import type { MenuProps } from 'antd';

export const ERROR_MESSAGES = {
  BEFORE_CLOSE_SETTINGS: '有正在编辑的组件未保存，需要发布吗？',
};

export const defaultImage =
  'https://bosscdn.otosaas.com/test/20220718/20220718162033%E4%B8%8B%E8%BD%BD.png?path=0,348';

export const MAX_UPLOAD_SIZE = 1024 * 1024;

export const PHOTO_TYPES = /(gif|jpe?g|png|GIF|JPG|PNG|bmp|svg)$/;

export const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsZXZlbCI6IjEiLCJyb2xlSWQiOiJcIjFcIiIsIm5pY2tOYW1lIjoiXCLotoXnuqfnrqHnkIblkZhcIiIsInNlY3JldCI6IlwiMTIzNDU2XCIiLCJhcHBDb2RlIjoiXCJibG1cIiIsImxvZ2luT3JnYW5pemF0aW9uSWQiOiJcIjFcIiIsIm1lbnUiOiJcIjExMTAsMTExMSwxMTEyLDExMTMsMTExNCwxMTE1LDExMjEsMTEyMiwxMTIzLDExMjQsMTEyNSwxMTI2LDExMzEsMTEzMiwxMTMzLDExMzQsMTEzNSwxMTM2LDExNDEsMTE0MiwxMTQzLDEyMTAsMTIxMSwxMjEyLDEyMTMsMTIxNCwxMjIxLDEyMjIsMTIyMywxMjI0LDEzMTAsMTMxMSwxMzE0LDEzMTYsMTMyNCwxMzI1LDE0MTAsMTQxMSwxNDEzLDE0MTQsMTQyOCwxNTEwLDE1MTEsMTUxMiwxNTEzLDE2MTAsMTYxMSwxNjIxLDE2MjIsMTYyMywxNjMxLDE2NDEsMTY0MiwxNjQzLDE3MTAsMTcxMSwxNzEyLDE3MjEsMTcyNCwxNzI1LDE3NDEsMTc0MiwxNzQ0LDE3NDYsMTgxMCwxODExLDE4MTIsMTkxMCwxOTExLDE5MTIsMTkxMywyMDMwLDIwMzEsMjAzMlwiIiwidXNlcklkIjoiXCIxXCIiLCJvcmdhbml6YXRpb25JZCI6IlwiOGRiOTA3MTkyNDJhNGY4ZjlmYTRjMmJhM2M0NTE2OGRcIiIsInVzZXJMZXZlbCI6IjAiLCJhcHBJZHMiOiJbXCJkZmYyNmI0ZTI4NzQ0YmM0OTBlOGZmMWI4YTEyYzUyNlwiXSIsInNvdXJjZVR5cGUiOiJcIm1lXCIiLCJvcmdhbml6YXRpb24iOiJ7XCJjcmVhdGVkQXRcIjoxNTgyMjU1ODIyNjEwLFwiZGVmYXVsdFN0YWdlXCI6bnVsbCxcImlkXCI6XCI4ZGI5MDcxOTI0MmE0ZjhmOWZhNGMyYmEzYzQ1MTY4ZFwiLFwia2V5XCI6XCJibG1cIixcImxldmVsXCI6MSxcImxldmVsMUlkXCI6bnVsbCxcIm9yZ2FuaXphdGlvbkFkZHJlc3NcIjpcIkJMTVwiLFwib3JnYW5pemF0aW9uQ2hpZWZJZFwiOlwiNGQ2OWIzMjM2ZTJiNDFiZmI1ZDExZjI2MjEzMjQwNTRcIixcIm9yZ2FuaXphdGlvbkNpdHlcIjpcIuW4gui-luWMulwiLFwib3JnYW5pemF0aW9uQ29kZVwiOlwiYmxtXCIsXCJvcmdhbml6YXRpb25Db3VudHlcIjpcIuays-S4nOWMulwiLFwib3JnYW5pemF0aW9uTmFtZVwiOlwi6YW35bGPXCIsXCJvcmdhbml6YXRpb25QaG9uZVwiOm51bGwsXCJvcmdhbml6YXRpb25Qcm92aW5jaWFsXCI6XCLlpKnmtKXluIJcIixcIm9yZ2FuaXphdGlvblR5cGVcIjpcIjAsMSwyXCIsXCJvd25BY2NvdW50XCI6bnVsbCxcInBhcmVudE9yZ2FuaXphdGlvbklkXCI6XCIxXCIsXCJwYXNzVXNlclBob25lXCI6MCxcInBsYXRmb3JtQ29kZVwiOlwib3Rvc2Fhc1wiLFwicmV2aWV3TmFtZVwiOlwi55m95Y-MXCIsXCJyZXZpZXdQaG9uZVwiOlwiMTUwMjY4MTY5MDlcIixcInNlY29uZGFyeUF1ZGl0XCI6bnVsbCxcInNlY3JldFwiOlwiMTIzNDU2XCIsXCJzdGF0dXNcIjo2LFwid2F0ZXJtYXJrVXJsXCI6XCJodHRwczovL2Jvc3NjZG4ub3Rvc2Fhcy5jb20vdGVzdC9ibG0vbWFsbHNhYXMvYmxtLnBuZ1wifSIsIlVTRVJOQU1FIjoiXCJhZG1pbkBvdG9zYWFzLmNvbVwiIiwib3JnYW5pemF0aW9uX3R5cGUiOiJcIjAsMSwyXCIiLCJleHAiOjE2ODg4OTYzMDIsImlhdCI6MTY4NjMwNDMwMiwia2V5IjoiXCJibG1cIiJ9.BPg4DrvIjU_SDD58GYHhbU7FW-N3_4nCCRyGjj-SKJE';

export const menuItems: MenuProps['items'] = [
  {
    label: 'Navigation One',
    key: 'mail',
  },
];

export const BASE_PRICE_TYPE_ENUMS = [
  {
    label: '样式一',
    value: 1,
  },
  {
    label: '样式二',
    value: 2,
  },
];

export const REST_PRICE_TYPE_ENUMS = [
  {
    label: '样式三',
    value: 3,
  },
];

export const baseURL = '/api/v1';

export const FORMAT = 'YYYY-MM-DD HH:mm:ss';

export const iframeURL =
  process.env.NODE_ENV === 'development'
    ? `http://${location.hostname}:8001/`
    : location.host.includes('test')
    ? 'https://dev-view.otosaas.com/'
    : 'https://view.otosaas.com/';

export const TABLE_SCROLL = { y: 450 };
