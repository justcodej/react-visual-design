import { extend } from 'umi-request';
import { codeMessage } from './index';

const errorHandler = (error: any) => {
  console.log(error);
  const { response = {} } = error;
  const errortext = (codeMessage as any)[response.status] || response.statusText;
  const { status, url } = response;

  Promise.reject(`请求错误: ${errortext} ${status}: ${url}`);

  if (status === 401) {
    return;
  }
  if (error) {
  }
  // environment should not be used
  if (status === 403) {
    // router.push('/403')
    return;
  }
  if (status <= 504 && status >= 500) {
    // router.push('/500')
    return;
  }
  if (status >= 404 && status < 422) {
    // router.push('/404')
  }
};

const request = extend({
  errorHandler,
  timeout: 10000,
});

request.interceptors.response.use(async (response) => {
  let clone = response.clone();
  const { code, message } = await clone.json();
  if (code && code === 103) {
    Promise.reject(`请求错误: ${code} ${message}`);
    location.replace('/login');
  } else if (code && code !== 0) {
    Promise.reject(`请求错误: ${code} ${message}`);
  }
  return response;
});

export default request;
