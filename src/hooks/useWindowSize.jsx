import { useEffect, useState } from 'react';

function useWindowSize() {
  const [currentSize, setCurrentSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const resize = () => {
      setCurrentSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  });

  return currentSize;
}

export default useWindowSize;
