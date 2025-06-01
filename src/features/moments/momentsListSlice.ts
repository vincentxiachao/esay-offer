import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Iimage } from '../../interfaces/image';
import { get, patch, post, put } from '../../utils/apiInterceptor';
export const getMomentsList = createAsyncThunk('getMomentsList', async () => {
  return get<Iimage[]>('getMomentsList');
});
export const toggleFavorite = createAsyncThunk(
  'toggleFavorite',
  async (params: { id: number; isFavorite: boolean }) => {
    const res = patch(`getMomentsList/${params.id}`, {
      isFavorite: params.isFavorite,
    });
    return res;
  }
);
const momentsListSlice = createSlice({
  name: 'momentsList',
  initialState: [] as Iimage[],
  reducers: {
    // toggleFavorite: (state, action: PayloadAction<number>) => {
    //   const index = state.findIndex((item) => item.id === action.payload);
    //   if (index !== -1) {
    //     state[index].isFavorite = !state[index].isFavorite;
    //   }
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getMomentsList.fulfilled,
      (state, action: PayloadAction<Iimage[]>) => {
        state = action.payload;
        return state;
      }
    );
    builder.addCase(
      toggleFavorite.fulfilled,
      (state, action: PayloadAction<{ id: number; isFavorite: boolean }>) => {
        const index = state.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state[index].isFavorite = !state[index].isFavorite;
        }
        return state;
      }
    );
  },
});
export const selectMomentsList = (state: { momentsList: Iimage[] }) =>
  state.momentsList;
export const seletListLength = (state: { momentsList: Iimage[] }) =>
  state.momentsList.length;
export const selectFavoriteListLength = (state: { momentsList: Iimage[] }) => {
  const favoriteList = state.momentsList.filter((item) => item.isFavorite);
  return favoriteList.length;
};
export default momentsListSlice.reducer;
