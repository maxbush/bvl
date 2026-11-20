import Cycle from "@/components/Cycle";
import LeadForm from "@/components/LeadForm";
import MobileNav from "@/components/MobileNav";
import ScanView from "@/components/ScanView";

const BASE = process.env.PAGES_BASE ?? "";

const NAV = [
  { href: "#projects", label: "Проекты" },
  { href: "#services", label: "Услуги" },
  { href: "#dc", label: "ЦОД «Поток»" },
  { href: "#process", label: "Как работаем" },
  { href: "#ai", label: "AI-ассистенты" },
];

const CLIENT_WALL: { n: string; logo: string; caseId?: string }[] = [
  { n: "Беларусбанк", logo: "/clients/belarusbank.png" },
  { n: "Белагропромбанк", logo: "/clients/belapb.svg", caseId: "case-belapb" },
  { n: "Белинвестбанк", logo: "/clients/belinvestbank.png" },
  { n: "БПС-Сбербанк", logo: "/clients/bps.ico" },
  { n: "Белтелеком", logo: "/clients/beltelecom.svg", caseId: "case-beltelecom" },
  { n: "МТС", logo: "/clients/mts-color.png" },
  { n: "A1", logo: "/clients/a1.svg" },
];

const INDUSTRIES: { name: string; clients: string; href?: string }[] = [
  {
    name: "Телеком",
    clients: "Белтелеком, МТС, A1",
    href: "https://www.bevalex.by/projects/telekommunikatsionnye-kompanii/",
  },
  {
    name: "Банки и финансы",
    clients: "Нацбанк РБ, Беларусбанк, Белинвестбанк, БПС-Сбербанк",
    href: "https://www.bevalex.by/projects/banki-i-finansovye-organizatsii/",
  },
  {
    name: "Госсектор",
    clients: "Аппарат Совмина, Минобороны, КГБ, ГИАЦ",
    href: "https://www.bevalex.by/projects/gosudarstvennye-organizatsii/",
  },
  {
    name: "Промышленность",
    clients: "Беларуськалий, Нафтан",
    href: "https://www.bevalex.by/projects/promyshlennye-predpriyatiya/",
  },
  {
    name: "Энергетика",
    clients: "Белоруснефть",
    href: "https://www.bevalex.by/projects/energeticheskie-kompanii/",
  },
  {
    name: "Медицина",
    clients: "РНПЦ",
    href: "https://www.bevalex.by/projects/meditsinskie-organizatsii/",
  },
  { name: "IT и ритейл", clients: "EPAM, Евроторг" },
];

const VENDORS = [
  { n: "Cisco", logo: "/vendors/cisco.png" },
  { n: "IBM", logo: "/vendors/ibm.png" },
  { n: "Microsoft", logo: "/vendors/microsoft.jpg" },
  { n: "Lenovo", logo: "/vendors/lenovo.jpg" },
  { n: "Kaspersky", logo: "/vendors/kaspersky.png" },
  { n: "UserGate", logo: "/vendors/usergate.png" },
  { n: "Positive Technologies", logo: "/vendors/positive.png" },
  { n: "Veeam", logo: "/vendors/veeam.jpg" },
  { n: "VMware", logo: "/vendors/vmware.png" },
  { n: "Eaton", logo: "/vendors/eaton.png" },
  { n: "Rittal", logo: "/vendors/rittal.png" },
  { n: "CommScope", logo: "/vendors/commscope.png" },
];

const REVIEWS: { quote: string; org: string; who: string; scan: string }[] = [
  {
    quote:
      "Оборудование продемонстрировало своё соответствие установленным в Республике Беларусь нормам и требованиям информационной безопасности. Особенно удобной в использовании показала себя модель одновременной работы с несколькими ПАК «Цитадель».",
    org: "Комитет гос. контроля РБ",
    who: "заместитель директора Департамента, Франскевич В.И.",
    scan: "/scans/kgk.jpg",
  },
  {
    quote:
      "Способствовали принятию оптимальных решений требованиям ТНПА в области строительства. Благодарим коллектив СП «Бевалекс» ООО за качественное исполнение проектных работ.",
    org: "Белагропромбанк",
    who: "заместитель председателя правления, Подковыров В.И.",
    scan: "/scans/belapb.jpg",
  },
  {
    quote:
      "Отмечаем СП «БЕВАЛЕКС» ООО как профессионального и надёжного партнёра по внедрению и сопровождению ПО СЭД «РЕКОРД».",
    org: "Национальная библиотека Беларуси",
    who: "заместитель директора, Касперович С.Б.",
    scan: "/scans/natlib.jpg",
  },
];

const CASES: { id: string; client: string; scope: string; fact: string; tag: string }[] = [
  {
    id: "case-belapb",
    client: "Белагропромбанк",
    scope:
      "Резервный ЦОД с комнатой физической безопасности — впервые в Беларуси. Питание 2N+1, класс защиты C60D по EN 1047-2, экранирование 13–65 дБ.",
    fact: "Первый ЦОД такого класса в стране",
    tag: "ЦОД",
  },
  {
    id: "case-beltelecom",
    client: "Белтелеком",
    scope:
      "Аппаратно-программный комплекс AntiDDoS «Периметр» для национального оператора связи: поставка, настройка, обучение, сопровождение.",
    fact: "Защита периметра нац. сети",
    tag: "ИБ",
  },
  {
    id: "case-giac",
    client: "ГИАЦ Минобразования",
    scope:
      "Межсетевое экранирование Check Point NGFW для информационных потоков системы образования Республики Беларусь.",
    fact: "Вся система образования РБ",
    tag: "ИБ",
  },
  {
    id: "case-tzi",
    client: "НИИ ТЗИ (ОАЦ)",
    scope:
      "Серверное оборудование собственного производства БЕВАЛЕКС для института технической защиты информации.",
    fact: "Собственное производство",
    tag: "Железо",
  },
];

const SERVICES: { t: string; d: string; link?: { href: string; l: string } }[] = [
  {
    t: "ЦОД и инженерная инфраструктура",
    d: "Проектирование и строительство дата-центров, включая контейнерные решения. Собственный ЦОД «Поток» — SLA 99.9%.",
    link: { href: "#dc", l: "О ЦОД «Поток»" },
  },
  {
    t: "Защита информации",
    d: "15 направлений: AV, SIEM, DLP, VPN, EDR, SOAR, NGFW, аттестация СЗИ. Лицензия ОАЦ при Президенте Республики Беларусь.",
  },
  {
    t: "Сети передачи данных",
    d: "Проектирование, монтаж и техническая поддержка сетевой инфраструктуры предприятия.",
  },
  {
    t: "Вычислительные системы и СХД",
    d: "Серверы, системы хранения, виртуализация. Собственное производство — вычислительные системы и СХД БЕВАЛЕКС.",
  },
  {
    t: "Программные продукты",
    d: "СЭД «РЕКОРД», ЭЦП, ITSM-платформы (ServiceDesk, OpenText, SimpleOne), PostgreSQL.",
  },
  {
    t: "Видеонаблюдение",
    d: "IP-камеры и AI-видеоаналитика, интеграция со СКУД. Проектирование и монтаж под ключ — более 500 объектов.",
  },
  {
    t: "Техподдержка и сервис-центр",
    d: "Около 70 специалистов уровня L1–L3 берут на себя эксплуатацию вашей инфраструктуры. Поддержка 8/5.",
  },
];

const STEPS = [
  { t: "Аудит", term: "1–2 дня", d: "Обследуем текущую инфраструктуру и процессы, фиксируем риски и узкие места." },
  { t: "Проектирование", term: "1–2 недели", d: "Готовим архитектуру и спецификацию решения под ваши требования и бюджет." },
  { t: "Внедрение", term: "2–8 недель", d: "Поставляем оборудование, разворачиваем и настраиваем системы, вводим в эксплуатацию." },
  { t: "Сопровождение", term: "постоянно", d: "Поддерживаем работу 8/5 силами собственных специалистов L1–L3." },
];

const ASSISTANTS = [
  { t: "Аналитик КП", d: "Снимает с продаж разбор и сравнение коммерческих предложений." },
  { t: "Юрист", d: "Проверяет договоры и подсвечивает рисковые формулировки." },
  { t: "Тендер", d: "Разбирает тендерную документацию и готовит заготовки ответов." },
  { t: "Копирайтер", d: "Готовит черновики деловых и маркетинговых текстов." },
  { t: "Обезличиватель", d: "Убирает персональные данные из документов перед обработкой." },
  { t: "Распознаватель", d: "Переводит сканы документов в редактируемый текст." },
];

const FAQ = [
  {
    q: "Сколько стоят услуги?",
    a: "Зависит от масштаба задачи. После обследования — обычно 1–2 дня — готовим спецификацию и смету: вы платите за этапы проекта, а не за абстрактные «часы интегратора».",
  },
  {
    q: "Работаете ли вы с госорганизациями?",
    a: "Да, это основная часть практики: есть лицензия ОАЦ и опыт проектов для Нацбанка РБ, Аппарата Совмина, Минобороны, Министерства связи. Работаем в процедурах госзакупок.",
  },
  {
    q: "Что происходит после внедрения?",
    a: "Систему сопровождают ~70 специалистов L1–L3 с выделенным инженером и собственным сервис-центром. Поддержка — 8/5, SLA на инфраструктуру — до 99.9%.",
  },
  {
    q: "Можно ли начать с пилота?",
    a: "Да. Для AI-ассистентов пилот — типовая точка входа: 4–8 недель до измеримого результата. Для инфраструктуры начинаем с аудита и дорожной карты.",
  },
];

function Logo() {
  return (
    <svg viewBox="0 0 737 737" aria-hidden="true" focusable="false">
      <path
        transform="matrix(1,0,0,-1,0,737)"
        d="M372.74 708.21C560.62 708.21 712.9 555.89 712.9 368.06 712.9 303.9 695.13 243.87 664.24 192.66L531.14 550.86H531.11L514.78 594.84H514.41 399.96L288.54 295.63 177.35 594.84H177.21L162.2 635.22C220.11 680.93 293.24 708.21 372.74 708.21ZM583.76 101.27V101.27L568.85 141.28 539.07 221.22 406.59 221.12 441.44 314.83 504.26 314.74 457.24 440.99 345.88 141.28H231.42 231.06L231.25 141.74 215.2 184.87H215.09L81.45 543.78C50.44 492.5 32.58 432.36 32.58 368.06 32.58 180.18 184.88 27.89 372.74 27.89 452.45 27.89 525.77 55.32 583.76 101.27"
        fill="#00b2d5"
        fillRule="evenodd"
      />
    </svg>
  );
}

const pad2 = (n: number) => String(n).padStart(2, "0");

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bevalex",
  legalName: "СП ООО «Бевалекс»",
  url: "https://www.bevalex.by",
  logo: "https://www.bevalex.by/logo.svg",
  description:
    "Системный интегратор с 1996 года: ЦОД и инженерная инфраструктура, защита информации, сети, вычислительные системы, программные продукты, видеонаблюдение, AI-решения.",
  foundingDate: "1996",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 70 },
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Солтыса, 191",
    addressLocality: "Минск",
    postalCode: "220137",
    addressCountry: "BY",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+375-17-330-16-16",
    email: "info@bevalex.by",
    contactType: "customer service",
    areaServed: "BY",
    availableLanguage: "Russian",
  },
  sameAs: ["https://t.me/bevalex", "https://www.linkedin.com/company/bevalex"],
};

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
      />
      <a href="#main" className="skip-link">
        Перейти к содержанию
      </a>

      <header className="site-header">
        <div className="wrap bar">
          <a href="#top" className="brand" aria-label="Bevalex — на главную">
            <Logo />
            Bevalex
          </a>
          <nav className="nav-main" aria-label="Основная навигация">
            {NAV.map((i) => (
              <a key={i.href} href={i.href}>
                {i.label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <a href="tel:+375173301616" className="header-phone num">
              +375 17 330-16-16
            </a>
            <a href="#contact" className="btn btn-primary btn-sm">
              Оставить заявку
            </a>
            <MobileNav items={NAV} />
          </div>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        {/* ---------------- HERO ---------------- */}
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="wrap">
            <div className="hero-grid">
              <div>
                <h1 id="hero-title" className="h1">
                  Системный интегратор для предприятий, которым нельзя останавливаться
                </h1>
                <p className="lead">
                  С 1996 года Bevalex проектирует, внедряет и сопровождает <span className="nowrap">IT-инфраструктуру</span>,
                  информационную безопасность и облачные сервисы для крупного бизнеса
                  и госструктур Беларуси.
                </p>
                <div className="hero-ctas">
                  <a href="#contact" className="btn btn-primary">
                    Оставить заявку
                    <span className="arrow" aria-hidden="true">→</span>
                  </a>
                  <a href="#projects" className="btn btn-line">
                    Наши проекты
                  </a>
                </div>
                <p className="hero-meta">
                  Среди заказчиков — <strong>Нацбанк РБ, Белтелеком, Аппарат Совмина, Беларуськалий, EPAM</strong>
                </p>
                <a href={`${BASE}/bevalex-presentation.pdf`} className="link hero-deck" download>
                  Скачать презентацию (PDF, 3,6 МБ) ↓
                </a>
              </div>
              <div className="hero-figure">
                <Cycle />
              </div>
            </div>

            <dl className="stats" aria-label="Bevalex в цифрах">
              <div className="stat">
                <dt>год начала работы</dt>
                <dd className="num">1996</dd>
              </div>
              <div className="stat">
                <dt>успешных проектов</dt>
                <dd className="num">
                  1210<sup>+</sup>
                </dd>
              </div>
              <div className="stat">
                <dt>сертификатов и лицензий, включая ОАЦ</dt>
                <dd className="num">
                  80<sup>+</sup>
                </dd>
              </div>
              <div className="stat">
                <dt>специалистов уровня L1–L3</dt>
                <dd className="num">~70</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* ---------------- CLIENTS / PROJECTS ---------------- */}
        <section className="section" id="projects" aria-labelledby="projects-title">
          <div className="wrap">
            <div className="section-head">
              <h2 id="projects-title" className="h2">
                Нам доверяют телеком, промышленность, банки и ритейл
              </h2>
              <p className="lead">
                За 30 лет — более 1210 успешных проектов. Среди заказчиков — операторы связи,
                промышленные холдинги, банки, IT-компании и розничные сети.
              </p>
            </div>

            <ul className="client-wall">
              {CLIENT_WALL.map((c) => (
                <li key={c.n}>
                  {c.caseId ? (
                    <a href={`#${c.caseId}`} className="client-cell client-cell-link">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img className="client-wall-logo" src={BASE + c.logo} alt={c.n} loading="lazy" />
                      <span className="client-wall-name">{c.n}</span>
                      <span className="cc-more mono">кейс →</span>
                    </a>
                  ) : (
                    <div className="client-cell">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img className="client-wall-logo" src={BASE + c.logo} alt={c.n} loading="lazy" />
                      <span className="client-wall-name">{c.n}</span>
                    </div>
                  )}
                </li>
              ))}
              <li className="client-cell client-cell-stat">
                <b className="num">1210+</b>
                <span>проектов за 30 лет</span>
              </li>
            </ul>

            <dl className="ledger industries">
              {INDUSTRIES.map((i) => (
                <div className="ledger-row" key={i.name}>
                  <dt>{i.name}</dt>
                  <dd>
                    <span className="ind-clients">{i.clients}</span>
                    {i.href && (
                      <a
                        className="ind-link mono"
                        href={i.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        проекты ↗
                      </a>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <article className="case-feature" id={CASES[0].id}>
              <div className="case-feature-main">
                <span className="case-tag mono">ЦОД · впервые в Беларуси</span>
                <h3 className="case-feature-title">
                  Резервный ЦОД для Белагропромбанка
                </h3>
                <p className="case-feature-lead">
                  Спроектировали и сдали в промышленную эксплуатацию резервный центр
                  обработки данных с комнатой физической безопасности — первый проект
                  такого класса в стране. Защита оборудования от огня, воды
                  и электромагнитного излучения.
                </p>
              </div>
              <dl className="case-feature-facts">
                <div>
                  <dt className="num">2N+1</dt>
                  <dd>резервирование питания</dd>
                </div>
                <div>
                  <dt className="num">C60D</dt>
                  <dd>класс защиты по EN 1047-2</dd>
                </div>
                <div>
                  <dt className="num">F120</dt>
                  <dd>огнестойкость по DIN 4102-2</dd>
                </div>
              </dl>
            </article>

            <dl className="ledger cases">
              {CASES.slice(1).map((c) => (
                <div className="ledger-row" key={c.client} id={c.id}>
                  <dt>
                    <span className="case-tag mono">{c.tag}</span>
                    <span className="case-client">{c.client}</span>
                  </dt>
                  <dd>
                    <p className="case-scope">{c.scope}</p>
                    <p className="case-fact num">{c.fact}</p>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="ledger-foot">
              <span>В портфолио — 37 задокументированных проектов. Названия компаний принадлежат их владельцам.</span>
              <a href="#contact" className="link" style={{ color: "var(--ink)", fontWeight: 500 }}>
                Запросить кейсы по вашей отрасли →
              </a>
            </div>
          </div>
        </section>

        {/* ---------------- REVIEWS ---------------- */}
        <section className="section-tight" aria-labelledby="reviews-title">
          <div className="wrap">
            <div className="section-head">
              <h2 id="reviews-title" className="h2">
                Что заказчики пишут в официальных отзывах
              </h2>
              <p className="lead">
                Фрагменты благодарственных писем из архива — с подписями первых лиц.
              </p>
            </div>
            <div className="reviews">
              {REVIEWS.map((r) => (
                <figure className="review" key={r.org}>
                  <ScanView src={BASE + r.scan} org={r.org} />
                  <blockquote>
                    <p>«{r.quote}»</p>
                  </blockquote>
                  <figcaption>
                    <b>{r.org}</b>
                    <span>{r.who}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- SERVICES ---------------- */}
        <section className="section services-wrap" id="services" aria-labelledby="services-title">
          <div className="wrap">
            <div className="section-head">
              <h2 id="services-title" className="h2">
                Семь направлений — один подрядчик
              </h2>
              <p className="lead">
                Закрываем инфраструктурные задачи предприятия целиком: от обследования
                до ежедневной эксплуатации.
              </p>
            </div>

            <ol className="svc-list">
              {SERVICES.map((s, i) => (
                <li className="svc" key={s.t}>
                  <span className="svc-idx mono num" aria-hidden="true">
                    {pad2(i + 1)}
                  </span>
                  <h3 className="svc-title">{s.t}</h3>
                  <div className="svc-body">
                    <p>{s.d}</p>
                    {s.link && (
                      <a href={s.link.href} className="link">
                        {s.link.l} →
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ol>

            <p className="services-license">
              Все направления — силами собственных специалистов: ~70 инженеров уровней L1–L3.
            </p>
          </div>
        </section>

        {/* ---------------- DATA CENTER ---------------- */}
        <section className="section on-dark dc" id="dc" aria-labelledby="dc-title">
          <div className="wrap dc-grid">
            <div className="dc-sticky">
              <p className="dc-sla num" aria-label="SLA 99.9 процента">
                99.9<span>%</span>
              </p>
              <p className="dc-sla-cap">
                Гарантированная доступность по SLA
              </p>
            </div>
            <div>
              <h2 id="dc-title" className="h2">
                Собственный ЦОД «Поток»
              </h2>
              <p className="lead">
                Основа наших облачных решений. Мы сами отвечаем за площадку, на которой
                работают сервисы клиентов, — без посредников между вами и инфраструктурой.
              </p>
              <dl className="spec">
                <div>
                  <dt>Доступность по SLA</dt>
                  <dd className="num">99.9%</dd>
                </div>
                <div>
                  <dt>Допустимый простой в год</dt>
                  <dd className="num">≤ 8 ч 46 мин</dd>
                </div>
                <div>
                  <dt>Допустимый простой в месяц</dt>
                  <dd className="num">≈ 44 мин</dd>
                </div>
                <div>
                  <dt>Техническая поддержка</dt>
                  <dd>8/5, уровни L1–L3</dd>
                </div>
                <div>
                  <dt>Полный цикл</dt>
                  <dd>проектируем — производим — эксплуатируем</dd>
                </div>
              </dl>
              <p className="dc-note">
                Серверы и СХД БЕВАЛЕКС собираем сами — собственное производство в Минске.
              </p>
              <figure className="dc-figure">
                <picture>
                  <source
                    media="(max-width: 640px)"
                    srcSet={`${BASE}/images/server-infrastructure-mobile.webp`}
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${BASE}/images/server-infrastructure.webp`}
                    alt="Схематичная иллюстрация серверных стоек в изометрии"
                    loading="lazy"
                  />
                </picture>
                <figcaption className="mono">Серверные стойки собственной сборки</figcaption>
              </figure>
              <div style={{ marginTop: 40 }}>
                <a href="#contact" className="btn btn-line">
                  Обсудить облачный проект
                  <span className="arrow" aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- VENDORS ---------------- */}
        <section className="section-tight vendor-block" aria-labelledby="vendors-title">
          <div className="wrap">
            <div className="vendors-head">
              <h2 id="vendors-title" className="h3">
                Технологии проверенных вендоров
              </h2>
              <p>
                Партнёрские статусы и компетенции подтверждены 80+ сертификатами —
                подбираем стек под задачу, а не под ассортимент.
              </p>
            </div>
            <ul className="vendor-grid">
              {VENDORS.map((v) => (
                <li key={v.n}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={BASE + v.logo} alt={v.n} loading="lazy" />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------------- PROCESS ---------------- */}
        <section className="section-tight" id="process" aria-labelledby="process-title">
          <div className="wrap">
            <div className="section-head">
              <h2 id="process-title" className="h2">
                Как мы работаем
              </h2>
              <p className="lead">
                Четыре этапа — от первого обследования до ежедневной эксплуатации.
              </p>
            </div>
            <ol className="steps">
              {STEPS.map((s, i) => (
                <li className="step" key={s.t}>
                  <span className="step-idx mono num">{pad2(i + 1)}</span>
                  <h3 className="h3">{s.t}</h3>
                  <span className="step-term mono num">{s.term}</span>
                  <p>{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------------- AI ---------------- */}
        <section className="section" id="ai" aria-labelledby="ai-title">
          <div className="wrap">
            <div className="ai-top">
              <div>
                <h2 id="ai-title" className="h2">
                  AI-ассистенты для ежедневной работы с документами
                </h2>
                <p className="lead" style={{ marginTop: 24 }}>
                  Шесть ассистентов снимают с сотрудников рутину с документами —
                  пилот занимает 4–8 недель до измеримого результата.
                </p>
              </div>
              <p className="ai-term">
                <strong className="num">4–8</strong>
                <span>недель на внедрение</span>
              </p>
            </div>

            <ul className="ai-grid">
              {ASSISTANTS.map((a, i) => (
                <li className="ai-card" key={a.t}>
                  <span className="idx mono num" aria-hidden="true">
                    AI/{pad2(i + 1)}
                  </span>
                  <h3 className="h3">{a.t}</h3>
                  <p>{a.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------------- FAQ ---------------- */}
        <section className="section-tight faq" id="faq" aria-labelledby="faq-title">
          <div className="wrap">
            <div className="section-head">
              <h2 id="faq-title" className="h2">
                Частые вопросы
              </h2>
              <p className="lead">
                То, что спрашивают заказчики до первого звонка.
              </p>
            </div>
            <div className="faq-list">
              {FAQ.map((f) => (
                <details className="faq-item" key={f.q}>
                  <summary>
                    <span className="faq-q">{f.q}</span>
                    <span className="faq-mark" aria-hidden="true" />
                  </summary>
                  <p className="faq-a">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- CONTACT ---------------- */}
        <section className="section contact" id="contact" aria-labelledby="contact-title">
          <div className="wrap contact-grid">
            <div>
              <h2 id="contact-title" className="h2">
                Обсудим вашу задачу
              </h2>
              <p className="lead" style={{ marginTop: 24 }}>
                Опишите задачу — мы свяжемся с вами и предложим формат работы: аудит,
                проект или поддержку.
              </p>
              <dl className="direct">
                <div>
                  <dt>Телефон</dt>
                  <dd>
                    <a href="tel:+375173301616" className="link num">
                      +375 17 330-16-16
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>E-mail</dt>
                  <dd>
                    <a href="mailto:info@bevalex.by" className="link">
                      info@bevalex.by
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>Telegram</dt>
                  <dd>
                    <a
                      href="https://t.me/bevalex"
                      className="link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @bevalex
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>Адрес</dt>
                  <dd>г. Минск, ул. Солтыса, 191</dd>
                </div>
                <div>
                  <dt>Поддержка</dt>
                  <dd>8/5 · Пн–Чт 9:00–18:00, Пт 9:00–17:00</dd>
                </div>
              </dl>
            </div>
            <div>
              <LeadForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer on-dark">
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <a href="#top" className="brand" aria-label="Bevalex — наверх">
                <Logo />
                Bevalex
              </a>
              <p className="muted" style={{ marginTop: 16, maxWidth: "26em" }}>
                Системный интегратор. IT-инфраструктура, информационная безопасность,
                облачные решения и поддержка с 1996 года.
              </p>
            </div>
            <div>
              <h2>Разделы</h2>
              <ul>
                {NAV.map((i) => (
                  <li key={i.href}>
                    <a href={i.href}>{i.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Контакты</h2>
              <ul>
                <li>
                  <a href="tel:+375173301616" className="num">
                    +375 17 330-16-16
                  </a>
                </li>
                <li>
                  <a href="mailto:info@bevalex.by">info@bevalex.by</a>
                </li>
                <li>
                  <a href="https://t.me/bevalex" target="_blank" rel="noopener noreferrer">
                    Telegram
                  </a>
                </li>
                <li>г. Минск, ул. Солтыса, 191</li>
                <li>
                  <a href="#contact">Оставить заявку</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="foot-bottom">
            <span className="num">© 1996–2026 СП ООО «Бевалекс»</span>
            <span>bevalex.by</span>
          </div>
        </div>
      </footer>
    </>
  );
}
