import { useEffect, useState } from 'react';

import { copyText } from '@/helpers/string';

const CopyBtn = ({ text }: { text: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    }
  }, [isCopied]);

  return (
    <span
      className="cursor-pointer select-none p-2"
      onClick={() => {
        copyText(text);
        setIsCopied(true);
      }}
    >
      {isCopied ? `Copied!` : `Copy`}
    </span>
  );
};

export default CopyBtn;
