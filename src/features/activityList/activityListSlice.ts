import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Iactivity } from '../../interfaces/activity';
import { get } from '../../utils/apiInterceptor';
import { selectFavoriteListLength } from '../moments/momentsListSlice';
export const getActivityList = createAsyncThunk('getActivityList', async () => {
  return get<Iactivity[]>('getActivityList');
});
const activityListSlice = createSlice({
  name: 'activityList',
  initialState: [] as Iactivity[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getActivityList.fulfilled,
      (state, action: PayloadAction<Iactivity[]>) => {
        state = action.payload;
        return state;
      }
    );
  },
});
export const selectActivityList = (state: { activityList: Iactivity[] }) =>
  state.activityList;
export default activityListSlice.reducer;
