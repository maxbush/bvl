"use client";

import { useEffect, useRef } from "react";

type Item = { href: string; label: string };

export default function MobileNav({ items }: { items: Item[] }) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && ref.current?.open) {
        ref.current.open = false;
        ref.current.querySelector("summary")?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const close = () => {
    if (ref.current) ref.current.open = false;
  };

  return (
    <details className="mnav" ref={ref}>
      <summary aria-label="Открыть меню">
        <span className="burger" aria-hidden="true" />
        Меню
      </summary>
      <nav className="mnav-panel" aria-label="Мобильная навигация">
        {items.map((i) => (
          <a key={i.href} href={i.href} className="mnav-link" onClick={close}>
            {i.label}
            <span aria-hidden="true">→</span>
          </a>
        ))}
        <a href="#contact" className="btn btn-primary" onClick={close}>
          Оставить заявку
        </a>
        <a href="tel:+375173301616" className="mnav-phone num">
          +375 17 330-16-16
        </a>
      </nav>
    </details>
  );
}
