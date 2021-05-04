import { useCallback, useEffect, useState } from 'react';
import throttle from '../utils/throttle';

interface ScrollPosition {
  x: number;
  y: number;
}

const getScrollPosition = () => {
  /* do not break on SSR */
  if (typeof window === `undefined`) return { x: 0, y: 0 };
  return { x: window.pageXOffset, y: window.pageYOffset };
};

const useScrollPosition = (throttleValue = 0): ScrollPosition => {
  const [scrollPosition, setScrollPosition] = useState(getScrollPosition());
  const handleScroll = useCallback(() => {
    if (throttleValue > 0)
      throttle(() => setScrollPosition(getScrollPosition()), throttleValue);
    else setScrollPosition(getScrollPosition());
  }, [throttleValue]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchMove', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('touchMove', handleScroll);
    };
  });

  return scrollPosition;
};

export default useScrollPosition;
