import { createSlice } from '@reduxjs/toolkit';

export const navSlice = createSlice({
  name: 'nav',
  initialState: {
    currentPage: 'home',
    // 添加新状态
    imageCount: 0,
    favoriteCount: 0,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    // 添加新的 reducer 来更新图片数量
    setImageCount: (state, action) => {
      state.imageCount = action.payload;
    },
  },
});

export const { setCurrentPage, setImageCount } = navSlice.actions;
export default navSlice.reducer;
