"use client";

import { useCallback, useEffect, useState } from "react";
import type { Industry } from "@/app/page";

function plural(n: number): string {
  const m = n % 10;
  const h = n % 100;
  if (m === 1 && h !== 11) return "проект";
  if (m >= 2 && m <= 4 && (h < 12 || h > 14)) return "проекта";
  return "проектов";
}

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
      <div className="ind-grid" role="list" aria-label="Отрасли и заказчики">
        {industries.map((i, idx) => (
          <button
            key={i.name}
            type="button"
            role="listitem"
            className="ind-card"
            onClick={() => setOpen(i)}
            aria-label={`${i.name}: открыть список проектов (${i.projects.length})`}
          >
            <span className="ind-card-top">
              <span className="ind-idx mono num">0{idx + 1}</span>
              <span className="ind-pill mono num">
                {i.projects.length} {plural(i.projects.length)} →
              </span>
            </span>
            <span className="ind-title">{i.name}</span>
            <span className="ind-clients">{i.clients}</span>
          </button>
        ))}
      </div>

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
                <span className="drawer-kicker mono">открытый архив проектов</span>
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
              <p className="mono">
                показана открытая часть архива без NDA — всего в портфолио 1210+ внедрений
              </p>
              <a href="#contact" className="btn btn-primary btn-sm" onClick={close}>
                Запросить референсы по отрасли
                <span className="arrow" aria-hidden="true">→</span>
              </a>
            </footer>
          </aside>
        </div>
      )}
    </>
  );
}
