import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import IUser from '../types/user';

const BASEURL = 'https://dumbo.hellotoday.life';
const googleLoginAPI = `${BASEURL}/william/login/oauth2/code/google`;

interface rejectMessage {
  errorMessage: string,
}

const googleLoginHandler = async (response) => {
  axios.post(googleLoginAPI, { data: response }).then((res) => {
    if (res.status === 200) {
      console.log('success');
    } else if (res.status === 400) {
      console.log('Bad Request');
    } else if (res.status === 404) {
      console.log('Not Found');
    } else if (res.status === 500) {
      console.log('Internal Server Error');
    }
  });
};

const googleLoginAction = createAsyncThunk(
  'user/login',
  async (data, thnukAPI) => {
    console.log(data);
  },
);
