import { useState, useEffect } from 'react';

const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll, 300));
    return () => window.removeEventListener('scroll', debounce(handleScroll, 300));
  }, []);

  function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
      if (!isFetching) {
        setIsFetching(true);
      }
    }
  }

  const debounce = (func, delay) => {
    let inDebounce;
    return function () {
      clearTimeout(inDebounce);
      inDebounce = setTimeout(() => {
        func.apply(this, arguments);
      }, delay);
    };
  };

  useEffect(() => {
    if (!isFetching) return;
    callback();
  }, [isFetching]);

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
