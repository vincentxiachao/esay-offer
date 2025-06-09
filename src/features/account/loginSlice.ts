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
export const selectAccount = (state: loginState) => state.login.accountInfo;
export const selectIsLoggedIn = (state: loginState) => state.login.isLoggedIn;
export default loginSlice.reducer;

type loginState = {
  login: {
    accountInfo: {
      username: string;
      name: string;
      role: string;
    };
    isLoggedIn: boolean;
  };
};
