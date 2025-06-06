import { useEffect, useState } from 'react';
import './App.css';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FamilyRestroomOutlinedIcon from '@mui/icons-material/FamilyRestroomOutlined';
import AppRegistrationOutlined from '@mui/icons-material/AppRegistrationOutlined';
import type { Navigation } from '@toolpad/core';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';

import i18n from './i18n';
import { useTranslation } from 'react-i18next';

// 假设 store 导出了 RootState 类型
function App() {
  const { t } = useTranslation();
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);

  // 获取单个参数的值
  const lang = urlParams.get('lang') || 'en';
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);
  // const imageCount = useSelector(seletListLength);
  // const favoriteImageCount = useSelector(selectFavoriteListLength);
  const sideNav: Navigation = [
    {
      kind: 'header',
      title: 'Main items',
    },
    {
      segment: 'home', // This will be the segment in the URL, e.g. /hom
      title: `${t('home')}`,
      icon: <DashboardIcon />,
    },
    {
      segment: 'familySchedule',
      title: 'Family Trip Schedule',
      icon: <ShoppingCartIcon />,
    },
    {
      segment: 'myFamily',
      title: 'My Family',
      icon: <FamilyRestroomOutlinedIcon />,
    },
    {
      segment: 'register',
      title: 'Register',
      icon: <AppRegistrationOutlined />,
    },
  ];
  const BRANDING = {
    title: 'ONE Family',
  };

  return (
    <ReactRouterAppProvider navigation={sideNav} branding={BRANDING}>
      <Outlet />
    </ReactRouterAppProvider>
  );
}

export default App;
