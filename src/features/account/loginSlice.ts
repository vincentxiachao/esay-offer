import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'loginSlice',
  initialState: { accountInfo: null, isLoggedIn: false, error: null },
  reducers: {
    login: (state, action) => {
      state.accountInfo = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state, action) => {
      state.accountInfo = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = loginSlice.actions;
export const selectAccount = (state: {
  accountInfo: any;
  isLogedIn: boolean;
}) => state.accountInfo;
export const selectIsLoggedIn = (state: {
  accountInfo: any;
  isLoggedIn: boolean;
}) => state.isLoggedIn;
export default loginSlice.reducer;
