import { Component, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from 'react-router-dom';
import Layout from './layouts/DashboardLayout.tsx';
import { Home } from './pages/home/Home.tsx';
// 引入 ErrorPage 组件
import { ErrorPage } from './pages/error/ErrorPage.tsx';
import { Provider } from 'react-redux';
import { store as rootStore } from './store';

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: '/',
        Component: Layout,
        children: [
          {
            index: true,
            path: 'home',
            Component: Home,
          },
        ],
      },
    ],
    // 添加错误边界路由
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={rootStore}>
      {/* 假设 RouterProvider 是应用的路由组件 */}
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
