import { useLayoutEffect, useState } from 'react';

const usePassCode = () => {
  const [shouldShow, setShouldShow] = useState(false);
  const [passCode, setPassCode] = useState('');

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      document.addEventListener('keydown', (e) => {
        setPassCode((prev) => {
          return prev + e.key;
        });
      });
    }
  }, []);

  useLayoutEffect(() => {
    const clearPassCode = !shouldShow
      ? setTimeout(() => {
          setPassCode('');
        }, 3000)
      : undefined;

    if (passCode === 'showmethecode') {
      setShouldShow(true);
      setPassCode('');
      return () => clearTimeout(clearPassCode);
    }

    return () => clearTimeout(clearPassCode);
  }, [passCode]);

  return { shouldShow };
};

export default usePassCode;
