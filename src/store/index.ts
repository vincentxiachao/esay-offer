import { configureStore } from '@reduxjs/toolkit';
import navReducer from '../features/nav/navSlice';
import allMomentReducer from '../features/moments/momentsListSlice';
import activityList, {
  manageActivity,
} from '../features/activityList/activityListSlice';
export const store = configureStore({
  reducer: {
    nav: navReducer,
    momentsList: allMomentReducer,
    activityList: activityList,
    manageActivity: manageActivity,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
