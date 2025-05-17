import { configureStore } from '@reduxjs/toolkit';
import navReducer from '../features/nav/navSlice';
import allMomentReducer from '../features/moments/momentsListSlice';

export const store = configureStore({
  reducer: {
    nav: navReducer,
    momentsList: allMomentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
