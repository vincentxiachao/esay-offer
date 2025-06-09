import { configureStore } from '@reduxjs/toolkit';
import navReducer from '../features/nav/navSlice';
import allMomentReducer from '../features/moments/momentsListSlice';
import registerReducer from '../features/account/registerSlice';
import activityListReducer, {
  manageActivity,
} from '../features/activityList/activityListSlice';
import loginReducer from '../features/account/loginSlice';
export const store = configureStore({
  reducer: {
    nav: navReducer,
    momentsList: allMomentReducer,
    activityList: activityListReducer,
    registerAccount: registerReducer,
    login: loginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
