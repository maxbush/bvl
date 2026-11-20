export type LeadState = {
  status: "idle" | "ok" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "contact" | "consent", string>>;
  values?: Partial<Record<"name" | "company" | "contact" | "topic" | "message", string>>;
};

const TOPICS = new Set([
  "dc",
  "security",
  "networks",
  "compute",
  "software",
  "video",
  "support",
  "ai",
  "other",
]);

function str(v: FormDataEntryValue | null, max: number): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export async function submitLead(
  _prev: LeadState,
  formData: FormData,
): Promise<LeadState> {
  // honeypot
  if (str(formData.get("website"), 200)) {
    return { status: "ok", message: "Спасибо! Заявка принята." };
  }

  const name = str(formData.get("name"), 160);
  const company = str(formData.get("company"), 200);
  const contact = str(formData.get("contact"), 200);
  const topicRaw = str(formData.get("topic"), 80);
  const message = str(formData.get("message"), 4000);
  const consent = formData.get("consent") === "on";

  const fieldErrors: LeadState["fieldErrors"] = {};
  if (name.length < 2) fieldErrors.name = "Укажите имя";
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
  const isPhone = contact.replace(/[^\d]/g, "").length >= 7;
  if (!isEmail && !isPhone) fieldErrors.contact = "Укажите телефон или e-mail";
  if (!consent) fieldErrors.consent = "Нужно согласие на обработку данных";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Проверьте поля формы",
      fieldErrors,
      values: { name, company, contact, topic: topicRaw, message },
    };
  }

  // Демо-режим: заявка логируется на сервере без записи в БД.
  // Для прода: подключить почтовый транспорт или CRM-интеграцию.
  console.info("lead", {
    name,
    company: company || null,
    contact,
    topic: TOPICS.has(topicRaw) ? topicRaw : null,
    message: message || null,
  });

  return {
    status: "ok",
    message: "Спасибо! Заявка принята — мы свяжемся с вами в рабочее время.",
  };
}
