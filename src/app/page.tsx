import Cycle from "@/components/Cycle";
import IndustryDrawer from "@/components/IndustryDrawer";
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

const CLIENT_STRIP: { n: string; logo: string; h: number; caseId?: string }[] = [
  { n: "Беларусбанк", logo: "/clients/belarusbank.svg", h: 19 },
  { n: "Белагропромбанк", logo: "/clients/belapb.svg", h: 29, caseId: "case-belapb" },
  { n: "Белтелеком", logo: "/clients/beltelecom.svg", h: 22, caseId: "case-beltelecom" },
  { n: "МТС", logo: "/clients/mts.svg", h: 18 },
  { n: "A1", logo: "/clients/a1.svg", h: 26 },
  { n: "Белоруснефть", logo: "/clients/belorusneft.svg", h: 28 },
];

export type Industry = { name: string; clients: string; projects: string[] };

const INDUSTRIES: Industry[] = [
  {
    name: "Госуправление и регуляторы",
    clients: "Аппарат Совмина, Минобороны, Минсвязи, Минюст, КГБ, Генштаб ВС, Нацстатком, БУТБ",
    projects: [
      "Аппарат Совета Министров РБ — подсистемы делопроизводства и контроля исполнения поручений",
      "ИТ-инфраструктура единой системы государственной статистики Республики Беларусь",
      "Электронные госзакупки — ИТ-инфраструктура центра обработки данных",
      "Белорусская универсальная товарная биржа — система защиты удостоверяющего центра",
      "ГИАЦ Минобразования — межсетевое экранирование Check Point NGFW",
      "Нацстатком РБ — мультимедийный комплекс конференц-зала",
      "Военное информационное агентство ВС РБ «Ваяр» — автоматизированная аналитическая система",
    ],
  },
  {
    name: "Банки и финансовый сектор",
    clients: "Нацбанк РБ, Беларусбанк, Белагропромбанк, Белинвестбанк, Банк БелВЭБ, Альфа-Банк, МТБанк, Сбер Банк",
    projects: [
      "Расчётный центр Национального банка РБ — комплексная инженерная система резервного ЦОД",
      "Белагропромбанк — резервный ЦОД с комнатой безопасности C60D, СЭД, климат-контроль",
      "Белинвестбанк — система управления событиями ИБ (SIEM), распределённая СЭД, Service Desk",
      "БПС-Сбербанк — автоматизированная система управления ИТ-услугами Service Desk",
    ],
  },
  {
    name: "Телеком и операторы связи",
    clients: "Белтелеком, МТС, A1, Белпочта",
    projects: [
      "РУП «Белтелеком» — внедрение и сопровождение АПК защиты от DDoS-атак «Периметр»",
      "РУП «Белтелеком» — ИТ-инфраструктура центра предоставления электронных услуг",
    ],
  },
  {
    name: "Промышленность и ТЭК",
    clients: "Беларуськалий, БЕЛАЗ, Белоруснефть, Нафтан, Белэнерго, Белтопгаз, ОДУ, Белшина, Милавица",
    projects: [
      "РУП «ОДУ» — инженерная инфраструктура серверной и модернизация корпоративной ЛВС",
      "СП ЗАО «Милавица» — комплексная система обеспечения информационной безопасности",
      "Группа компаний «Санта Бремор» — единая отказоустойчивая доменная инфраструктура",
    ],
  },
  {
    name: "Здравоохранение и образование",
    clients: "Минздрав РБ, РНПЦ «Мать и дитя», РНПЦ трансплантации, РНПЦ неврологии и нейрохирургии, БГУИР, Военная академия",
    projects: [
      "РНПЦ «Мать и дитя» — медицинская автоматизированная информационная система",
      "РНПЦ «Трансплантации органов и тканей» — медицинская АИС клиники",
      "РНПЦ «Неврологии и нейрохирургии» — медицинская автоматизированная система",
    ],
  },
  {
    name: "IT, транспорт и крупный бизнес",
    clients: "EPAM, Белорусская железная дорога, Белавиа, Евроторг, «Патио», FENOX",
    projects: [
      "ИООО «Эпам Системз» — проектирование и создание инженерной инфраструктуры ЦОД",
    ],
  },
];

const VENDORS = [
  { n: "Cisco", logo: "/vendors/cisco.svg" },
  { n: "IBM", logo: "/vendors/ibm.png" },
  { n: "Microsoft", logo: "/vendors/microsoft.jpg" },
  { n: "Lenovo", logo: "/vendors/lenovo.svg" },
  { n: "Kaspersky", logo: "/vendors/kaspersky.svg" },
  { n: "UserGate", logo: "/vendors/usergate.png" },
  { n: "Positive Technologies", logo: "/vendors/positive.png" },
  { n: "Veeam", logo: "/vendors/veeam.svg" },
  { n: "VMware", logo: "/vendors/vmware.svg" },
  { n: "Eaton", logo: "/vendors/eaton.png" },
  { n: "CommScope", logo: "/vendors/commscope.png" },
  { n: "Garda", logo: "/vendors/garda.png" },
];

const REVIEWS: { quote: string; org: string; who: string; scan: string }[] = [
  {
    quote:
      "Применение ПАК „Цитадель“ позволило аттестовать информационную систему органов финансовых расследований Комитета государственного контроля Республики Беларусь, так как комплексы продемонстрировали свое соответствие установленным в Республике Беларусь нормам и требованиям информационной безопасности",
    org: "ДФР Комитета госконтроля РБ",
    who: "заместитель директора Департамента финансовых расследований, Франскевич В.И.",
    scan: "/scans/kgk.jpg",
  },
  {
    quote:
      "СП „Бевалекс“ ООО зарекомендовало себя как исполнительная и ответственная организация с высококвалифицированным персоналом, способная оперативно и качественно выполнять поставленные задачи. Благодарим коллектив за качественное исполнение проектных работ",
    org: "Белагропромбанк",
    who: "заместитель председателя правления, Подковыров В.И.",
    scan: "/scans/belapb.jpg",
  },
  {
    quote:
      "Отмечаем СП „Бевалекс“ ООО как профессионального и надёжного партнёра по внедрению и сопровождению ПО СЭД „РЕКОРД“",
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
      "Резервный ЦОД с комнатой физической безопасности — впервые в Беларуси. Питание 2(N+1), охлаждение 2N, класс защиты C60D по EN 1047-2.",
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

const SERVICES: { t: string; d: string; link?: { href: string; l: string }; topic?: string }[] = [
  {
    t: "ЦОД и инженерная инфраструктура",
    d: "Проектирование и строительство дата-центров, включая контейнерные решения. Собственный ЦОД «Поток» — SLA 99.9%.",
    link: { href: "#dc", l: "О ЦОД «Поток»" },
    topic: "dc",
  },
  {
    t: "Защита информации",
    d: "15 направлений: NGFW, SIEM, DLP, EDR, SOAR. Проектирование и аттестация систем защиты по требованиям ОАЦ, защита КИИ, собственный ПАК «Цитадель».",
    topic: "security",
  },
  {
    t: "Сети передачи данных",
    d: "Корпоративные ЛВС и СКС, распределённые сети филиалов, промышленный Wi-Fi, оптические линии, балансировка трафика ЦОД.",
    topic: "networks",
  },
  {
    t: "Вычислительные системы и СХД",
    d: "Серверы, системы хранения, виртуализация. Собственное производство — вычислительные системы и СХД БЕВАЛЕКС.",
    topic: "compute",
  },
  {
    t: "Программные продукты",
    d: "СЭД «РЕКОРД», ЭЦП, ITSM-платформы (ServiceDesk, OpenText, SimpleOne), PostgreSQL.",
    topic: "software",
  },
  {
    t: "Видеонаблюдение",
    d: "IP-камеры и AI-видеоаналитика, интеграция со СКУД. Проектирование и монтаж под ключ — более 500 объектов.",
    topic: "video",
  },
  {
    t: "Техподдержка и сервис-центр",
    d: "Собственный сервис-центр в Минске: выделенный инженер, подменный фонд оборудования, SLA на реакцию и восстановление.",
    topic: "support",
  },
];

const STEPS = [
  { t: "Аудит", term: "1–2 дня", d: "Обследуем текущую инфраструктуру и процессы, фиксируем риски и узкие места." },
  { t: "Проектирование", term: "1–2 недели", d: "Готовим архитектуру и спецификацию решения под ваши требования и бюджет." },
  { t: "Внедрение", term: "2–8 недель", d: "Поставляем оборудование, разворачиваем и настраиваем системы, вводим в эксплуатацию." },
  { t: "Сопровождение", term: "постоянно", d: "Собственный сервис-центр в Минске: выделенный инженер, подменный фонд, SLA на реакцию." },
];

const ASSISTANTS = [
  { t: "Аналитик КП", d: "Сводит КП поставщиков в сравнительную таблицу: цены, сроки, отклонения от ТЗ." },
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
    a: "Систему сопровождает собственный сервис-центр в Минске: выделенный инженер, подменный фонд оборудования, SLA на инфраструктуру — до 99.9%.",
  },
  {
    q: "Проводите ли вы аттестацию систем защиты информации?",
    a: "Да. Проектируем и аттестуем СЗИ по требованиям ОАЦ при Президенте РБ, работаем с критической информационной инфраструктурой. Собственный ПАК «Цитадель» применялся для аттестации систем органов финансовых расследований КГК.",
  },
  {
    q: "Где разворачиваются AI-ассистенты — документы не уходят во внешние облака?",
    a: "Разворачиваем в закрытом контуре предприятия (on-premise) или в нашем ЦОД «Поток» на территории Беларуси. Документы не покидают периметр заказчика — для банков и госструктур это обязательное условие.",
  },
  {
    q: "Чем заменяете оборудование и ПО ушедших западных вендоров?",
    a: "Собственные серверы и СХД БЕВАЛЕКС производства Минска, реестровые СЗИ (ПАК «Цитадель», UserGate, Kaspersky), PostgreSQL, SimpleOne. Подбираем замещение под конкретный стек, а не «в среднем».",
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
  legalName: "СП «Бевалекс» ООО",
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
              <div className="hero-copy">
                <p className="hero-eyebrow mono">
                  <span className="eyebrow-dot" aria-hidden="true" />
                  Системный интегратор полного цикла · Минск, Беларусь
                </p>
                <h1 id="hero-title" className="h1">
                  ИТ-инфраструктура, ЦОД и защита информации для ключевых отраслей Беларуси
                </h1>
                <p className="lead">
                  СП «Бевалекс» ООО проектирует, строит и сопровождает отказоустойчивые
                  вычислительные комплексы, сети и контуры кибербезопасности под ключ.
                  В собственном контуре — ЦОД «Поток» (SLA 99.9%), серверное производство
                  и лицензии ОАЦ и МВД.
                </p>
                <div className="hero-ctas">
                  <a href="#contact" className="btn btn-primary">
                    Обсудить задачу
                    <span className="arrow" aria-hidden="true">→</span>
                  </a>
                  <a href="#projects" className="btn btn-line">
                    Проекты и кейсы
                  </a>
                </div>
              </div>

              <div className="hero-figure">
                <Cycle />
              </div>
            </div>

            <dl className="stats" aria-label="Bevalex в цифрах">
              <div className="stat">
                <dt>год основания компании</dt>
                <dd className="num">1996</dd>
              </div>
              <div className="stat">
                <dt>реализованных проектов</dt>
                <dd className="num">
                  1210<sup>+</sup>
                </dd>
              </div>
              <div className="stat">
                <dt>лицензий и сертификатов, включая ОАЦ и МВД</dt>
                <dd className="num">
                  80<sup>+</sup>
                </dd>
              </div>
              <div className="stat">
                <dt>штатных инженеров уровней L1–L3</dt>
                <dd className="num">
                  70<sup>+</sup>
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* ---------------- CLIENTS / PROJECTS ---------------- */}
        <section className="section" id="projects" aria-labelledby="projects-title">
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="section-kicker mono">
                  Портфолио · 37 задокументированных кейсов в открытом архиве
                </p>
                <h2 id="projects-title" className="h2">
                  Работаем там, где цена сбоя — масштаб отрасли или страны
                </h2>
              </div>
              <p className="lead">
                За три десятилетия построили и защитили критические контуры для государственных
                ведомств, системообразующих банков, национальных операторов связи и промышленных
                флагманов Беларуси.
              </p>
            </div>

            <div className="client-bar" aria-label="Знаковые заказчики">
              <span className="client-bar-label mono">Знаковые заказчики</span>
              <ul className="client-strip">
                {CLIENT_STRIP.map((c) => (
                  <li key={c.n}>
                    {c.caseId ? (
                      <a href={`#${c.caseId}`} className="client-strip-link" title={`${c.n} — перейти к кейсу`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={BASE + c.logo} alt={c.n} loading="lazy" style={{ height: c.h }} />
                      </a>
                    ) : (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img src={BASE + c.logo} alt={c.n} loading="lazy" style={{ height: c.h }} />
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="ind-block">
              <div className="ind-block-head">
                <p className="industries-kicker mono">Отраслевая практика</p>
                <p className="ind-block-hint">
                  Нажмите на отрасль, чтобы открыть перечень реализованных проектов
                </p>
              </div>
              <IndustryDrawer industries={INDUSTRIES} />
            </div>

            <div className="cases-showcase">
              <article className="case-feature" id={CASES[0].id}>
                <div className="case-feature-main">
                  <span className="case-tag mono">Кейс · ЦОД · впервые в Беларуси · сдан в 2013</span>
                  <h3 className="case-feature-title">
                    Резервный ЦОД с комнатой безопасности для Белагропромбанка
                  </h3>
                  <p className="case-feature-lead">
                    Выполнили полный цикл проектирования и сдали в промышленную эксплуатацию
                    резервный дата-центр банка с модульной комнатой физической безопасности —
                    первый проект такого класса в стране. Контур защищает хранилища данных от
                    пожара, затопления, взлома и электромагнитного излучения (13–65 дБ).
                  </p>
                </div>
                <dl className="case-feature-facts">
                  <div>
                    <dt className="num">2(N+1)</dt>
                    <dd>резервирование питания ИБП (2N по холоду)</dd>
                  </div>
                  <div>
                    <dt className="num">C60D</dt>
                    <dd>класс защиты хранилища по EN 1047-2</dd>
                  </div>
                  <div>
                    <dt className="num">F120</dt>
                    <dd>предел огнестойкости по DIN 4102-2</dd>
                  </div>
                  <div>
                    <dt className="num">до €10 млн</dt>
                    <dd>страховое покрытие рисков в HDI-Gerling</dd>
                  </div>
                </dl>
              </article>

              <div className="case-cards">
                {CASES.slice(1).map((c, idx) => (
                  <article className="case-card" key={c.client} id={c.id}>
                    <div className="case-card-top">
                      <span className="case-tag mono">{c.tag}</span>
                      <span className="case-card-idx mono num">0{idx + 2}</span>
                    </div>
                    <h3 className="case-client">{c.client}</h3>
                    <p className="case-scope">{c.scope}</p>
                    <p className="case-fact num">{c.fact}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="ledger-foot">
              <span>
                В открытом архиве — 37 задокументированных кейсов из 1210+ проектов. Товарные знаки принадлежат их правообладателям.
              </span>
              <a href="#contact" className="link" style={{ color: "var(--ink)", fontWeight: 500 }}>
                Запросить референсы по вашей отрасли →
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
                    <p>«{r.quote}».</p>
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
                    <div className="svc-actions">
                      {s.link && (
                        <a href={s.link.href} className="link">
                          {s.link.l} →
                        </a>
                      )}
                      {s.topic && (
                        <a href="#contact" className="link svc-cta" data-topic={s.topic}>
                          Заявка →
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <p className="services-license">
              Лицензия ОАЦ при Президенте РБ · лицензия МВД · сертификаты СТБ ISO · собственное производство в Минске.
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
              <figure className="dc-figure">
                <picture>
                  <source
                    media="(max-width: 640px)"
                    srcSet={`${BASE}/images/server-infrastructure-mobile.webp`}
                  />
                  <img
                    src={`${BASE}/images/server-infrastructure.webp`}
                    alt="Схематичная иллюстрация серверных стоек в изометрии"
                    loading="lazy"
                  />
                </picture>
              </figure>
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
                  <dd>уровни L1–L3 по регламентному SLA</dd>
                </div>
                <div>
                  <dt>Полный цикл</dt>
                  <dd>проектируем — производим — эксплуатируем</dd>
                </div>
              </dl>
              <p className="dc-note">
                Серверы и СХД БЕВАЛЕКС собираем сами — собственное производство в Минске.
              </p>
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
            <div className="ai-cta">
              <p>
                Разворачиваем в закрытом контуре предприятия — on-premise, документы
                не покидают ваш периметр.
              </p>
              <a href="#contact" className="link" data-topic="ai">
                Запросить пилот на ваших документах →
              </a>
            </div>
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
            <span className="num">© 1996–2026 СП «Бевалекс» ООО</span>
            <span>bevalex.by</span>
          </div>
        </div>
      </footer>
    </>
  );
}
