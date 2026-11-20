"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitLead, type LeadState } from "@/app/actions";

const initial: LeadState = { status: "idle" };

const topics = [
  { v: "", l: "Выберите направление" },
  { v: "dc", l: "ЦОД и инженерная инфраструктура" },
  { v: "security", l: "Защита информации" },
  { v: "networks", l: "Сети передачи данных" },
  { v: "compute", l: "Вычислительные системы и СХД" },
  { v: "software", l: "Программные продукты" },
  { v: "video", l: "Видеонаблюдение" },
  { v: "support", l: "Техподдержка и сервис-центр" },
  { v: "ai", l: "AI-ассистенты" },
  { v: "other", l: "Другое" },
];

export default function LeadForm() {
  const [state, action, pending] = useActionState(submitLead, initial);
  const statusRef = useRef<HTMLParagraphElement>(null);
  const v = state.values ?? {};
  const fe = state.fieldErrors ?? {};
  // remount inputs with fresh defaults after each server response
  const k = `${state.status}-${state.message ?? ""}-${JSON.stringify(v)}`;

  useEffect(() => {
    if (state.status !== "idle") statusRef.current?.focus();
  }, [state]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest?.("a[data-topic]");
      if (!a) return;
      const sel = document.getElementById("f-topic") as HTMLSelectElement | null;
      if (sel) sel.value = (a as HTMLAnchorElement).dataset.topic ?? "";
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <form action={action} className="form" noValidate key={k} aria-describedby="form-status">
      <div className="field">
        <label htmlFor="f-name">
          Имя <span className="req" aria-hidden="true">*</span>
        </label>
        <input
          id="f-name"
          name="name"
          className="input"
          autoComplete="name"
          required
          defaultValue={v.name}
          aria-invalid={fe.name ? true : undefined}
          aria-describedby={fe.name ? "e-name" : undefined}
        />
        {fe.name && (
          <span id="e-name" className="field-error">
            {fe.name}
          </span>
        )}
      </div>

      <div className="field">
        <label htmlFor="f-company">Компания</label>
        <input
          id="f-company"
          name="company"
          className="input"
          autoComplete="organization"
          defaultValue={v.company}
        />
      </div>

      <div className="field">
        <label htmlFor="f-contact">
          Телефон или e-mail <span className="req" aria-hidden="true">*</span>
        </label>
        <input
          id="f-contact"
          name="contact"
          className="input"
          autoComplete="email"
          placeholder="+375 … или name@company.by"
          required
          defaultValue={v.contact}
          aria-invalid={fe.contact ? true : undefined}
          aria-describedby={fe.contact ? "e-contact" : undefined}
        />
        {fe.contact && (
          <span id="e-contact" className="field-error">
            {fe.contact}
          </span>
        )}
      </div>

      <div className="field">
        <label htmlFor="f-topic">Направление</label>
        <select id="f-topic" name="topic" className="input" defaultValue={v.topic ?? ""}>
          {topics.map((t) => (
            <option key={t.v} value={t.v}>
              {t.l}
            </option>
          ))}
        </select>
      </div>

      <div className="field full">
        <label htmlFor="f-message">Задача</label>
        <textarea
          id="f-message"
          name="message"
          className="input"
          rows={3}
          placeholder="Коротко опишите задачу, сроки и масштаб"
          defaultValue={v.message}
        />
      </div>

      <div className="hp" aria-hidden="true">
        <label htmlFor="f-website">Сайт</label>
        <input id="f-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="field full">
        <label className="check">
          <input
            type="checkbox"
            name="consent"
            required
            aria-invalid={fe.consent ? true : undefined}
            aria-describedby={fe.consent ? "e-consent" : undefined}
          />
          <span>Согласен на обработку персональных данных для ответа на заявку</span>
        </label>
        {fe.consent && (
          <span id="e-consent" className="field-error">
            {fe.consent}
          </span>
        )}
      </div>

      <div className="form-foot">
        <button type="submit" className="btn btn-primary" disabled={pending}>
          {pending ? "Отправляем…" : "Оставить заявку"}
          <span className="arrow" aria-hidden="true">
            →
          </span>
        </button>
        <p
          id="form-status"
          ref={statusRef}
          tabIndex={-1}
          role="status"
          aria-live="polite"
          className={`form-status ${state.status === "ok" ? "ok" : state.status === "error" ? "error" : ""}`}
        >
          {state.message}
        </p>
      </div>
    </form>
  );
}
