import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { post } from '../../utils/apiInterceptor';
import { IregisterInfo } from '../../interfaces/account';

export const postRegister = createAsyncThunk(
  'postRegister',
  async (registerInfo: IregisterInfo) => {
    return post('postRegister', registerInfo);
  }
);

const registerSlice = createSlice({
  name: 'registerSlice',
  initialState: { accountInfo: null, isLoggedIn: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postRegister.fulfilled, (state, action) => {
      state.accountInfo = action.payload;
      state.isLoggedIn = true;
    });
  },
});
