import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import { Provider } from 'react-redux';
import { store } from '../../store';
import '@testing-library/jest-dom';
// 删除创建空 reducer store 的代码
// // 创建一个简单的 store
// const store = configureStore({ reducer: {} });

describe('HomePage', () => {
  it('应该渲染标题 "Family moments"', () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    const titleElement = screen.getByText('Family moments');
    expect(titleElement).not.toBe(null);
  });
});
