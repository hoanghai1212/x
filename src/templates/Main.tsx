import type { ReactNode } from 'react';

import CodeView from '@/components/CodeView';
import usePassCode from '@/hooks/usePassCode';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  htmlString: string;
  cssString: string;
};

const Main = (props: IMainProps) => {
  const { shouldShow } = usePassCode();

  return (
    <div className="flex h-screen w-screen items-start justify-between overflow-hidden bg-[#262626] antialiased">
      {props.meta}
      <CodeView show={shouldShow} code={props.htmlString} language="html" />
      <div className="self-center">{props.children}</div>
      <CodeView show={shouldShow} code={props.cssString} language="css" />
    </div>
  );
};

export { Main };
