import { Component, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/DashboardLayout.tsx';
import Home from './pages/home/HomePage.tsx';
import { SchedulesPage } from './pages/schedules/SchedulesPage.tsx';
import { ErrorPage } from './pages/error/ErrorPage.tsx';
import { Provider } from 'react-redux';
import { store as rootStore } from './store';
import react from '@vitejs/plugin-react';
import { I18nextProvider } from 'react-i18next';
// 为了解决找不到模块声明文件的问题，添加类型断言
import i18next from './i18n.ts';
import LoginPage from './pages/login/LoginPage.tsx';
import RegisterPage from './pages/register/RegisterPage.tsx';
// const handleError = () => {
//   return redirect('/register');
// };

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: '/',
        Component: Layout,
        children: [
          { index: true, path: 'home', Component: Home },
          {
            path: 'register',
            Component: RegisterPage,
          },

          {
            path: 'familySchedule',
            Component: SchedulesPage,
          },
          {
            path: 'login',
            Component: LoginPage,
          },
          {
            path: 'myFamily',
            Component: () => <div>My Family Page</div>,
          },
        ],
      },
    ],
    // 添加错误边界路由
    // errorElement: <RegisterPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <Provider store={rootStore}>
        <RouterProvider router={router} />
      </Provider>
    </I18nextProvider>
  </StrictMode>
);
