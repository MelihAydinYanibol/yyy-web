"use client";

import { useEffect } from "react";

// Static export can't redirect on the server, and the server never sees the "#..." part anyway,
// so the forward happens in the browser.
export function Forward({ target }: { target: string }) {
  const go = () => window.location.replace(target + window.location.hash);

  useEffect(() => {
    window.location.replace(target + window.location.hash);
  }, [target]);

  return (
    <main className="grid min-h-screen place-items-center p-6 text-center">
      <div>
        <p className="text-lg font-semibold">Katılım sayfana yönlendiriliyorsun…</p>
        <p className="mt-1 text-sm opacity-70">Taking you to your attendance page…</p>
        <p className="mt-6">
          <a
            href={target}
            onClick={e => { e.preventDefault(); go(); }}
            className="underline underline-offset-4"
          >
            Açılmazsa buraya tıkla · Click here if nothing happens
          </a>
        </p>
      </div>
    </main>
  );
}
