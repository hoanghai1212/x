import type { ReactNode } from 'react';
import { useLayoutEffect, useState } from 'react';

import CodeView from '@/components/CodeView';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  htmlString: string;
  cssString: string;
};

const Main = (props: IMainProps) => {
  const [showCode, setShowCode] = useState(false);
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
    const clearPassCode = !showCode
      ? setTimeout(() => {
          setPassCode('');
        }, 3000)
      : undefined;

    if (passCode === 'showmethecode') {
      setShowCode(true);
      setPassCode('');
      return () => clearTimeout(clearPassCode);
    }

    return () => clearTimeout(clearPassCode);
  }, [passCode]);

  return (
    <div className="flex h-screen w-screen items-start justify-between overflow-hidden bg-[#262626] antialiased">
      {props.meta}
      <CodeView show={showCode} code={props.htmlString} language="html" />

      <div className="self-center">
        {props.children}
        <span className="text-white">{passCode}</span>
      </div>
      <CodeView show={showCode} code={props.cssString} language="css" />
    </div>
  );
};

export { Main };
