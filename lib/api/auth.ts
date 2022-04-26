import { storage } from '../storage';
import { postData, GAxios } from './restApi';
export const END_POINT_API = 'https://localhost:8080'; // env 로 나누기

interface ResponseData {
  status: number;
  message?: string;
  data?: JSON;
}

export const signupUser = async (userInfo: any) => {
  const url = '/user/register';
  const status = await postData(url, userInfo);
  return status;
};

export const signinUser = async (userInfo: any) => {
  const url = '/user/login';
  const user = await GAxios({ method: 'post', url, data: userInfo, withCredentials: true })
    .then(res => {
      const token = res.headers['x-auth-token'];
      console.log('token', token);
      storage.setToken(token);
      return res.data;
    })
    .catch(err => {
      if (!err.status) console.log('Unknown Network Error in axios');
      else {
        console.error(err);
        throw err;
      }
    });
  return user;
};

export const verifyEmail = async (email: string) => {
  const url = '/user/email-verification/create';
  const status = await postData(url, { email });
  return status;
};

export const confirmEmail = async (validForm: { email: string; code: string }) => {
  const url = '/user/email-verification/create';
  const status = await postData(url, validForm);
  return status;
};
