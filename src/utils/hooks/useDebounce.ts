import { useRef } from 'react';

export const useDebounce = (cb: (args?: any) => void, delay: number = 500) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const debounceCb = (...args: any) => {
    // 在设置新定时器之前清除旧定时器
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      cb(...args);
    }, delay);
  };

  return debounceCb;
};
