import { useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { RootState, store } from './store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import type { Navigation } from '@toolpad/core';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import {
  selectFavoriteListLength,
  seletListLength,
} from './features/moments/momentsListSlice';

// 假设 store 导出了 RootState 类型
function App() {
  const [count, setCount] = useState(0);

  // 正确使用 RootState 类型
  const imageCount = useSelector(seletListLength);
  const favoriteImageCount = useSelector(selectFavoriteListLength);
  const sideNav: Navigation = [
    {
      kind: 'header',
      title: 'Main items',
    },
    {
      segment: 'home', // This will be the segment in the URL, e.g. /hom
      title: `Home (${favoriteImageCount}/${imageCount})`,
      icon: <DashboardIcon />,
    },
    {
      segment: 'familySchedule',
      title: 'Family Trip Schedule',
      icon: <ShoppingCartIcon />,
    },
  ];
  const BRANDING = {
    title: 'My Toolpad Core App',
  };
  return (
    <ReactRouterAppProvider navigation={sideNav} branding={BRANDING}>
      <Outlet />
    </ReactRouterAppProvider>
  );
}

export default App;
