import { createSlice } from '@reduxjs/toolkit';

import IUser from '../types/user';

const initialState: IUser = {
  isLoggedIn: false,
  profileImg: null,
  nickName: null,
  social: null,
};

export const users = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  extraReducers: (builder) => builder.addDefaultCase(() => {}),
});
export default users.reducer;
