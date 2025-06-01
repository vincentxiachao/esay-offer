import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Iactivity } from '../../interfaces/activity';
import { get } from '../../utils/apiInterceptor';
export const getActivityList = createAsyncThunk('getActivityList', async () => {
  return get<Iactivity[]>('getActivityList');
});
const activityListSlice = createSlice({
  name: 'activityList',
  initialState: [] as Iactivity[],
  reducers: {
    manageActivity: (state, action) => {
      const type = action.type;
      const payload = action.payload;
      const activityType = payload.type;
      switch (activityType) {
        case 'delete': {
          const idsToDelete = action.payload.selectedIds;
          state = state.filter((activity) => {
            return !idsToDelete.includes(activity.id);
          });
          return state;
          break;
        }
        case 'add': {
          const newActivity = action.payload.newActivity;

          state.push(newActivity);
          break;
        }
        // case 'edit': {
        //   const targetActivity = action.payload;
        //   const index = state.findIndex((activity) => {
        //     return activity.id === targetActivity.id;
        //   });
        //   state[index] = targetActivity;
        //   break;
        // }
      }
    },
  },
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
export const { manageActivity } = activityListSlice.actions;
export const selectActivityList = (state: { activityList: Iactivity[] }) =>
  state.activityList;
export default activityListSlice.reducer;
