"use client";

import { useCallback, useEffect, useState } from "react";

export default function ScanView({
  src,
  org,
}: {
  src: string;
  org: string;
}) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        className="review-scan-link"
        onClick={() => setOpen(true)}
        aria-label={`Открыть скан письма: ${org}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="review-scan" src={src} alt={`Скан письма: ${org}`} loading="lazy" />
        <span className="review-scan-more mono">открыть письмо</span>
      </button>
      {open && (
        <div
          className="scan-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Письмо: ${org}`}
          onClick={close}
        >
          <figure onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={`Скан письма: ${org}`} />
            <figcaption>
              <span>{org}</span>
              <button type="button" onClick={close} aria-label="Закрыть">
                ✕ закрыть
              </button>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
