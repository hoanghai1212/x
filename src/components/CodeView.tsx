import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import CopyBtn from '@/components/CopyBtn';

const CodeView = ({
  show,
  code,
  language,
}: {
  show: boolean;
  code: string;
  language: 'html' | 'css';
}) => {
  return (
    <div className="max-h-screen w-[30%] overflow-auto px-4">
      {show && (
        <>
          <div className="flex items-center justify-between text-white">
            <h1 className="p-2 text-3xl font-bold">CSS</h1>
            <CopyBtn text={code} />
          </div>
          <SyntaxHighlighter
            language={language}
            style={atomOneDark}
            wrapLongLines
          >
            {code}
          </SyntaxHighlighter>
        </>
      )}
    </div>
  );
};

export default CodeView;
