"use client";

import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

export function CopyToClipboard({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timer) {
        setShow(false);
      }
    }, 2000);

    () => clearTimeout(timer);
  }, [show]);

  async function handleCopy() {
    await navigator.clipboard.writeText(text);
    setShow(true);
  }
  return (
    <>
      {show && (
        <div className="fixed inset-x-0 top-0 p-3 animate-fade">
          <div className="flex items-center p-2 mx-auto text-sm bg-orange-300 w-fit gap-3 rounded-md">
            Copied to clipboard <CheckCircle />
          </div>
        </div>
      )}
      <button
        onClick={handleCopy}
        className="p-2 rounded-md hover:bg-orange-300 w-fit transition-all duration-300 group"
      >
        {children}
      </button>
    </>
  );
}
