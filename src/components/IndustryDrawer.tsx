"use client";

import { useCallback, useEffect, useState } from "react";
import type { Industry } from "@/app/page";

export default function IndustryDrawer({ industries }: { industries: Industry[] }) {
  const [open, setOpen] = useState<Industry | null>(null);

  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      <dl className="ledger industries">
        {industries.map((i) => (
          <div className="ledger-row" key={i.name}>
            <dt>{i.name}</dt>
            <dd>
              <span className="ind-clients">{i.clients}</span>
              <button
                type="button"
                className="ind-link mono"
                onClick={() => setOpen(i)}
              >
                проекты
              </button>
            </dd>
          </div>
        ))}
      </dl>

      {open && (
        <div
          className="drawer-backdrop"
          onClick={close}
          role="presentation"
        >
          <aside
            className="drawer"
            role="dialog"
            aria-modal="true"
            aria-label={`Проекты: ${open.name}`}
            onClick={(e) => e.stopPropagation()}
          >
            <header className="drawer-head">
              <div>
                <span className="drawer-kicker mono">архив проектов</span>
                <h3 className="drawer-title">{open.name}</h3>
              </div>
              <button
                type="button"
                className="drawer-close"
                onClick={close}
                aria-label="Закрыть"
              >
                ×
              </button>
            </header>
            <p className="drawer-clients">{open.clients}</p>
            <ul className="drawer-list">
              {open.projects.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <footer className="drawer-foot">
              <p className="mono">это часть архива — в портфолио 1210+ проектов</p>
              <a href="#contact" className="btn btn-primary btn-sm" onClick={close}>
                Запросить кейсы по отрасли
                <span className="arrow" aria-hidden="true">→</span>
              </a>
            </footer>
          </aside>
        </div>
      )}
    </>
  );
}
