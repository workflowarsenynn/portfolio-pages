const RESULTS = [
  {
    label: "Коммерческие предложения",
    value: "2–4 часа → 5 минут",
    desc: "Автогенерация КП из брифа, CRM-данных и шаблонов.",
    source: "G20"
  },
  {
    label: "Документы",
    value: "1–2 дня → 5 минут",
    desc: "Договоры, счета и акты через Google Docs/PDF.",
    source: "G20"
  },
  {
    label: "Ответ на лид",
    value: "до 10 минут",
    desc: "SLA-уведомления и единая обработка заявок.",
    source: "G20"
  },
  {
    label: "Заявки через бот/сайт",
    value: "55%",
    desc: "Входящие заявки проходят через управляемый digital-flow.",
    source: "G20"
  },
  {
    label: "Контроль дублей",
    value: "100%",
    desc: "Каждая вакансия обрабатывается один раз по ID.",
    source: "Job Automation"
  }
];

const PROJECTS = [
  {
    id: "g20",
    category: "01 · CRM + Event Production",
    title: "G20 — автоматизация техпродакшна мероприятий",
    summary: "Спроектировал и реализовал операционную систему для event-production на базе Google Workspace, Apps Script, Python и Telegram: CRM, калькулятор КП, генерация документов и счетов, календарное планирование, архив, клиентская база, интеграции Avito/SiteChat/EventRadar, Telegram-уведомления, мониторинг и AI-подбор оборудования.",
    preview: "End-to-end автоматизация: заявка → CRM → КП → документы → календарь → уведомления → аналитика.",
    problem: "Коммерческие предложения готовились вручную 2–4 часа, документы занимали 1–2 дня, часть данных копировалась вручную, а заявки могли теряться между сайтом, чатами и таблицами.",
    solution: "CRM-ядро на Google Sheets, Apps Script-автоматизация, Python Telegram-бот, генерация КП/счетов/документов, календарное планирование, архив, клиентская база, интеграции Avito/SiteChat/EventRadar, мониторинг и AI-подбор оборудования.",
    howItWorks: "Заявка с сайта, Avito, бота или EventRadar попадает в Telegram/CRM → менеджер собирает смету в Quotation Builder → система считает стоимость, прибыль и расходы → генерирует КП/счёт/PDF → создаёт календарные события → отправляет уведомления → сохраняет архив и аналитику.",
    results: [
      "Коммерческие предложения: 2–4 часа → 5 минут",
      "Документы: 1–2 дня → 5 минут",
      "Ответ на лид: до 10 минут",
      "Заявки через бот/сайт: 55%",
      "20+ скриптов Apps Script для CRM, документов и уведомлений",
      "Меньше ошибок за счёт автозаполнения и валидаций"
    ],
    stack: ["Google Sheets", "Apps Script", "Python", "Telegram Bot API", "Google Docs API", "Drive API", "Calendar API", "OpenAI API", "Avito API", "SQLite", "Prometheus", "REST/Webhooks/JSON"],
    github: "https://github.com/workflowarsenynn/event-crm-gworkspace-automation-portfolio",
    role: "Архитектура системы, CRM, Telegram-бот, Apps Script-автоматизация, генерация документов, аналитика и интеграции.",
    status: "Portfolio repo",
    images: [
      {
        src: "../images/g20/quotation-builder.webp",
        alt: "Конструктор коммерческого предложения в Google Sheets для проекта G20",
        caption: "Конструктор КП: позиции, смены, коэффициенты, скидки и итоговая стоимость."
      },
      {
        src: "../images/g20/g20-assistant-telegram.webp",
        alt: "Telegram-бот G20 Assistant с операционными уведомлениями",
        caption: "Telegram-бот для уведомлений, выплат, статусов проектов и операционного контроля."
      },
      {
        src: "../images/g20/equipment-list.webp",
        alt: "Справочник оборудования в Google Sheets для CRM проекта G20",
        caption: "Справочник оборудования: категории, цены, рыночная стоимость, изображения и ссылки."
      },
      {
        src: "../images/g20/appssctipt.webp",
        alt: "Google Apps Script проект G20 с более чем 20 скриптами автоматизации",
        caption: "20+ Apps Script скриптов"
      },
      {
        src: "../images/g20/generated-quotation-page-1.webp",
        alt: "Автоматически сгенерированное коммерческое предложение G20",
        caption: "PDF/Docs-коммерческое предложение с таблицей оборудования и автозаполненными данными."
      },
      {
        src: "../images/g20/generated-quotation-page-2.webp",
        alt: "Страница коммерческого предложения G20 с итогами и условиями",
        caption: "Итоги, налоги, условия аренды и юридический блок в финальном документе."
      },
      {
        src: "../images/g20/Site1.webp?v=20260428-site-final",
        alt: "Сайт G20 как входная точка заявок в систему автоматизации",
        caption: "Сайт как входная точка: заявки переходят в CRM, Telegram и операционный workflow."
      },
      {
        src: "../images/g20/Site2.webp?v=20260428-site-final",
        alt: "Вторая страница сайта G20 с описанием event-production услуг",
        caption: "Публичная витрина связана с внутренней системой обработки лидов и заявок."
      }
    ],
    modules: [
      {
        title: "CRM & Project Core",
        items: [
          "CRM-ядро на Google Sheets: проекты, клиенты, оборудование, навигация, архив, команда и расходы.",
          "Создание нового проекта из шаблона КП с автоматической нумерацией, формулами, стилями и служебными полями.",
          "Navigation-панель по активным проектам: статус, клиент, дата, площадка, суммы, прибыль и ссылка на проект.",
          "Архивирование проектов: перенос в Archive Navigation, скрытие листа и сохранение архивной копии.",
          "Синхронизация клиентов: client ID, поиск дублей по телефону, история проектов клиента."
        ]
      },
      {
        title: "Quotation Builder",
        items: [
          "Конструктор коммерческих предложений в Google Sheets.",
          "Автозаполнение количества, смен, коэффициентов, скидок, стоимости и итогов.",
          "Расчёт по формуле: количество × цена × смены × коэффициент × скидка.",
          "Логика коэффициентов по количеству смен для оборудования и персонала.",
          "Equipment List: категории, цены, рыночная стоимость, описания, ссылки и изображения.",
          "Автодобавление новых позиций оборудования в справочник."
        ]
      },
      {
        title: "Finance, Documents & Payments",
        items: [
          "Расчёт итогов, налогов, расходов, чистой прибыли, 25% и 50% от прибыли.",
          "Генерация коммерческого предложения в Google Docs по шаблону.",
          "Замена плейсхолдеров клиента, телефона, типа события, даты, площадки и адреса.",
          "Вставка таблицы оборудования и изображений в Google Docs через API.",
          "Добавление юридического блока из отдельного Google Docs-документа.",
          "Генерация счёта, PDF-экспорт и QR-код для оплаты."
        ]
      },
      {
        title: "Calendar, Archive & Operations",
        items: [
          "Интеграция с Google Calendar: события создаются и обновляются из данных проекта.",
          "Два календаря: общий календарь событий и календарь подтверждённых/оплаченных проектов.",
          "Статус предоплаты управляет созданием события в Confirmed & Paid.",
          "Event ID сохраняется в таблицу, чтобы не создавать дубли.",
          "Telegram-отчёт по активным КП без предоплаты.",
          "Кастомное меню Google Sheets для быстрых действий и навигации."
        ]
      },
      {
        title: "Telegram Bot & Integrations",
        items: [
          "Telegram-бот G20 Assistant на Python с модульным рантаймом g20bot.",
          "Интеграции Avito Messenger, site chat и EventRadar через webhook.",
          "Site chat валидирует payload, CORS и токен авторизации, затем отправляет лиды в Telegram.",
          "EventRadar-лиды валидируются, форматируются и отправляются в отдельный чат.",
          "Дедупликация лидов по chat/message ID.",
          "SQLite outbox: если Telegram/API недоступны, сообщения сохраняются и отправляются позже."
        ]
      },
      {
        title: "Reliability, AI & Monitoring",
        items: [
          "Централизованная конфигурация через .env и JSON-логирование с маскированием секретов.",
          "Retry, timeout, rate limiting и circuit breaker для внешних API.",
          "Idempotency-хранилище, чтобы не обрабатывать Telegram update повторно.",
          "Prometheus /metrics, /healthz, heartbeat и Telegram-алерты администраторам.",
          "AI-помощник smed_assistant подбирает комплект оборудования по описанию мероприятия.",
          "Экспорт базы оборудования в JSON и отправка AI-подбора обратно в Google Sheets."
        ]
      }
    ],
    technicalScope: [
      "CRM-ядро на Google Sheets с листами для проектов, клиентов, оборудования, навигации, архива, команды и расходов.",
      "Конструктор КП с автозаполнением количества, смен, коэффициентов, скидок, стоимости и итогов.",
      "Финансовые расчёты: итог, налоги, расходы, чистая прибыль, 25% и 50% от чистой прибыли.",
      "Создание проекта из шаблона с копированием диапазонов, формул, стилей, ширин колонок и служебных полей.",
      "Архивный экспорт КП в отдельный Google Sheets-файл и сохранение архивной копии на Google Drive.",
      "Синхронизация клиентов, генерация client ID, поиск дублей по телефону и история проектов клиента.",
      "Генерация КП в Google Docs по шаблону с плейсхолдерами, таблицей оборудования, изображениями и юридическим блоком.",
      "Генерация счёта, QR-код оплаты и PDF-экспорт.",
      "Интеграция с Google Calendar: общий календарь событий и календарь Confirmed & Paid без дублей по Event ID.",
      "Кастомное меню Google Sheets, защита важных зон таблицы и очистка шаблонов без удаления формул.",
      "Google People API для подрядчиков, выпадающие списки и добавление новых подрядчиков в Google Contacts.",
      "Загрузка и обработка изображений оборудования: Pexels API, Drive, ресайз 300×300, Cloudinary и сохранение ссылок.",
      "Экспорт базы оборудования в JSON и AI-помощник smed_assistant на OpenAI API для подбора комплекта оборудования.",
      "Python-скрипты для создания листов проектов и отправки AI-подбора обратно в Quotation Builder.",
      "G20 Assistant на Python: модульный runtime, .env, JSON-логирование, retry, timeout, rate limiting и circuit breaker.",
      "SQLite outbox, idempotency-хранилище, нарезка длинных сообщений и fallback-доставка Telegram-уведомлений.",
      "Интеграции Avito Messenger, SiteChat и EventRadar через webhook с дедупликацией лидов.",
      "Prometheus /metrics, /healthz, heartbeat, latency, retries, circuit breaker state, outbox size и Telegram-алерты.",
      "Dockerfile и инструкции запуска через Docker, systemd и launchd.",
      "Легаси-бот: меню Telegram, Google Sheets, касса, выплаты, напоминания, Avito-опрос, дневные summary через Groq, OCR/ASR для аудио, PDF, DOCX и изображений."
    ]
  },
  {
    id: "job",
    category: "02 · Python + AI",
    title: "Автоматизация откликов на вакансии HeadHunter",
    summary: "Browser-first платформа на Python + Playwright для поиска вакансий, LLM-анализа JD, генерации персональных писем, заполнения анкет и controlled auto-submit с Telegram approval.",
    preview: "Browser-first runtime: поиск вакансий → LLM-анализ → письмо → safety check → auto-submit или Telegram approval.",
    problem: "Ручной поиск, копирование описаний, выбор резюме и отклики занимали время, создавали дубли и плохо масштабировались. После ограничений API нужно было перенести автоматизацию в браузерный контур.",
    solution: "Система управляет Chromium через Playwright: ищет вакансии, извлекает описание, анализирует его через GPT, выбирает резюме, генерирует письмо, готовит отклик и отправляет его только через безопасный workflow. Простые вакансии отправляются автоматически, анкеты и нестандартные кейсы уходят в Telegram approval/handoff.",
    howItWorks: "Search → fetch details → LLM classification → cover letter → prepare apply → safety check → auto-submit или Telegram approval → логирование → retry/status tracking.",
    results: [
      "100% контроль дублей по ID вакансии",
      "Controlled auto-submit для простых вакансий",
      "Telegram handoff для анкет и сложных кейсов",
      "Questionnaire engine для text, radio, checkbox, select",
      "Retry queue между сессиями и safety layer",
      "Trace artifacts, dashboard и regression smoke"
    ],
    stack: ["Python", "Playwright", "Chromium", "OpenAI API", "SQLite", "Telegram Bot API", "pytest", "LaunchAgents", "JSON state"],
    github: "https://github.com/workflowarsenynn/job-application-automation-portfolio",
    role: "Архитектура browser-first runtime, Playwright flow, LLM-промпты, safety layer, anti-duplicates, Telegram approval, retry queue, dashboard и regression smoke.",
    status: "Portfolio repo",
    channelPost: {
      label: "Подробный разбор в Telegram-канале",
      url: "https://t.me/annsflow/136",
      text: "Как и почему я строил browser-first автоотклики: архитектура, safety layer, handoff и ограничения."
    },
    images: [
      {
        src: "../images/hhbot/architecture-layers.webp",
        alt: "Пятислойная архитектура HHBot browser-first automation platform",
        caption: "Пятислойная архитектура: runtime, browser automation, decision layer, state/audit/safety и notification layer."
      },
      {
        src: "../images/hhbot/safety-layer.webp",
        alt: "Safety layer и CLI-восстановление HHBot",
        caption: "Safety Layer и CLI-восстановление: throttling, quarantine, submit_uncertain, reset операций и checkpoint recovery."
      },
      {
        src: "../images/hhbot/transport_models.webp",
        alt: "Типизированные transport contracts HHBot",
        caption: "Типизированные transport contracts: единые dataclass-модели для вакансий, деталей, черновиков отклика, результатов submit, статусов и inbox-сообщений."
      },
      {
        src: "../images/hhbot/350DFD75-6697-4829-858E-FCC9753E9AF5.webp",
        alt: "SQLite audit-log отправленных откликов HHBot",
        caption: "SQLite audit-log: vacancy_id, вакансия, ссылка, статус, время отправки и текст сопроводительного письма для антидублей и восстановления."
      },
      {
        src: "../images/hhbot/0475968B-3A09-4291-A3E5-55B249D4E2EC.webp",
        alt: "Терминальный запуск HHBot с поиском вакансий и генерацией письма",
        caption: "Runtime pipeline: поиск, анализ описания, извлечение требований через GPT и генерация персонализированного письма."
      }
    ],
    videos: [
      {
        mp4: "../images/hhbot/video/demo.mp4",
        webm: "../images/hhbot/video/demo.webm",
        poster: "../images/hhbot/video/demo-poster.webp",
        caption: "Демо browser-first процесса: система работает в браузере HeadHunter, готовит отклики и показывает controlled automation flow."
      }
    ],
    modules: [
      {
        title: "Browser Runtime",
        items: [
          "Перевёл проект с API-first на browser-first архитектуру через Playwright и Chromium.",
          "Реализовал управление реальной HH-сессией через persistent Chromium profile.",
          "Добавил health-check авторизации, bootstrap-login и single-writer lock для browser profile.",
          "Построил browser transport adapter вместо прямого HH API transport.",
          "Сохранил доменную логику поиска, анализа, выбора резюме, генерации письма и логирования."
        ]
      },
      {
        title: "Apply Flow & Questionnaires",
        items: [
          "Реализовал ApplyFlow как state machine: открыть страницу, выбрать резюме, вставить письмо, подготовить черновик, отправить отклик.",
          "Добавил классификацию страниц отклика: simple, questionnaire, already applied, fixed resume, unknown UI, auth-required.",
          "Сделал controlled auto-submit для простых вакансий без анкеты.",
          "Построил questionnaire engine для textarea, input, radio, checkbox, select и mixed-вопросов.",
          "Добавил LLM-ответы на анкеты с honest fallback logic и final approval."
        ]
      },
      {
        title: "Safety & Human-in-the-loop",
        items: [
          "Финальный submit невозможен без approval_token=APPROVED.",
          "Режим auto_with_handoff отправляет простые вакансии автоматически, а сложные передаёт в Telegram approval.",
          "Telegram-кнопки Approve / Reject / Skip дают ручной контроль чувствительных действий.",
          "Safety layer включает throttling, circuit breakers, quarantine mode и cooldown.",
          "Система различает SKIP / NEEDS_HUMAN и реальные инфраструктурные ошибки."
        ]
      },
      {
        title: "State, Retry & Observability",
        items: [
          "Антидубли между запусками через state-файлы и SQLite audit log.",
          "Retry queue сохраняет незавершённые вакансии между сессиями.",
          "Trace, screenshots и HTML artifacts сохраняются при ошибках browser runtime.",
          "Dashboard pending approvals показывает ручные кейсы в браузере.",
          "Ежедневная статистика и Telegram-отчёты строятся из SQLite application log."
        ]
      },
      {
        title: "LLM & Prompts",
        items: [
          "LLM-классификация вакансий: APPLY / SKIP / MANUAL_REVIEW / DELAY.",
          "Генерация персонализированного cover letter под конкретный JD.",
          "Structured output для классификации и questionnaire drafts.",
          "Prompt injection guard через явные content boundaries для текста вакансии.",
          "Salary parsing hardening и fallback-логика для вопросов о зарплате."
        ]
      },
      {
        title: "Scheduler & Regression",
        items: [
          "Auto runner работает как планировщик запусков через macOS LaunchAgents.",
          "Operational profiles: обычный 24x7 профиль и burst profile.",
          "Квоты по отправкам за запуск и за час защищают runtime от перегруза.",
          "Regression corpus покрывает apply-page variants и scheduler behavior.",
          "Preflight-проверки валидируют runtime, session health, safety state и active defaults."
        ]
      }
    ],
    technicalScope: [
      "Persistent Chromium profile, health-check авторизации, bootstrap-login и profile lock.",
      "Browser-based поиск вакансий, извлечение карточек и full vacancy details через DOM-локаторы.",
      "Domain/transport contracts: VacancyCard, VacancyDetails, ApplyDraft, ApplyResult, StatusUpdate, InboxUpdate.",
      "ApplyPage abstraction, PageVariant taxonomy и fallback-сценарии для нестабильного HH UI.",
      "Controlled auto-submit, Telegram approval workflow, pending approvals resume и dedup approval requests.",
      "Questionnaire engine: text, textarea, email, phone, number, radio, checkbox, select, mixed option + textarea.",
      "Retry queue, startup resume, attempt limits и escalation в needs_human.",
      "Safety layer: throttling, circuit breakers, quarantine mode, cooldown, bounded navigation и wall-clock guard.",
      "Artifacts: trace, screenshots, HTML, run summary, daily stats и Telegram reports.",
      "Browser pollers для статусов откликов, переписок и negotiation messages.",
      "Operational profiles, runtime_profile_ctl, scheduler guard, quotas и burst mode.",
      "OpenAI SDK v2, structured output, prompt injection guard, salary parsing hardening и fallback policies.",
      "Atomic JSON-state writes, corrupt JSON backup, stale temp cleanup и synthetic hygiene.",
      "Regression levels: preflight, draft smoke, approval/notify smoke, controlled submit regression.",
      "Production invariants: не обходить CAPTCHA, не делать submit без approval token, не мутировать applied IDs до подтверждённого submit."
    ]
  },
  {
    id: "legal",
    category: "03 · LLM + Intake",
    title: "Avito Legal Bot для юридической компании",
    summary: "Система первичной обработки юридических заявок из Avito Messenger: сценарный диалог, LLM-анализ, FSM-контроль, SQLite-состояние и запись структурированного лида в Google Sheets.",
    preview: "Превращает хаотичную Avito-переписку в управляемый юридический intake и готовую карточку лида.",
    problem: "Клиенты приходили из Avito сырыми сообщениями: данные были неполными, юристы тратили время на первичные вопросы, бот не должен был давать консультации или обещать результат.",
    solution: "Построен гибрид FSM + LLM: сценарий контролирует порядок и безопасность диалога, LLM анализирует сообщения, извлекает факты и формулирует живые ответы внутри guardrails. Результат сохраняется в SQLite и Google Sheets как структурированная карточка клиента.",
    howItWorks: "Avito message → batching/dedup → Turn Analysis через LLM → обновление фактов клиента → Stage Router/FSM → безопасный ответ → Lead Analysis → Google Sheets CRM → replay/tests для проверки поведения.",
    results: [
      "Структурированная карточка лида вместо сырой переписки",
      "FSM не даёт боту пропускать обязательные этапы",
      "LLM отвечает живо, но не нарушает юридические guardrails",
      "SQLite сохраняет состояние и историю диалога",
      "Google Sheets получает один диалог как одну CRM-строку",
      "Replay, BDD и live-smoke тесты проверяют поведение"
    ],
    stack: ["Python", "Avito API", "OpenAI API", "SQLite", "Google Sheets API", "Telegram fake gateway", "FSM", "BDD/YAML tests"],
    github: "https://github.com/workflowarsenynn/legal-assistant-automation-portfolio",
    role: "Архитектура диалога, FSM, LLM-orchestration, guardrails, storage, Avito/Sheets интеграции, тесты и документация.",
    status: "Portfolio repo",
    images: [
      {
        src: "../images/legalbot/Orcestrator3.webp",
        alt: "Runtime-flow process_message Legal Bot",
        caption: "Runtime-flow обработки сообщения: состояние диалога, LLM-анализ, дедупликация, обновление фактов и переход по FSM."
      },
      {
        src: "../images/legalbot/Tg.webp",
        alt: "Telegram fake gateway для тестирования Legal Bot",
        caption: "Telegram fake gateway позволяет тестировать Avito Legal Bot в реальном времени без боевого Avito-чата."
      },
      {
        src: "../images/legalbot/Orcestrator1.webp",
        alt: "orchestrator.py зависимости Legal Bot",
        caption: "orchestrator.py связывает LLM-анализ, FSM, storage и обработку фактов в единый pipeline."
      },
      {
        src: "../images/legalbot/Orcestrator2.webp",
        alt: "AnswerOrchestrator Legal Bot",
        caption: "AnswerOrchestrator управляет циклом обработки сообщения: LLM-анализ → обновление лида → FSM-решение → ответ клиенту."
      },
      {
        src: "../images/legalbot/table.webp",
        alt: "Google Sheets CRM-таблица Legal Bot",
        caption: "Google Sheets CRM: один диалог клиента превращается в структурированную строку с контактом, городом, документами, временем связи и статусом."
      },
      {
        src: "../images/legalbot/4A19468C-24CA-4BD0-849A-C5868588CE10.webp",
        alt: "Рабочий экран Legal Bot с данными проекта",
        caption: "Рабочий контур проекта: входящие данные, состояние диалога и техническая диагностика обработки лида."
      }
    ],
    modules: [
      {
        title: "Dialogue Flow",
        items: [
          "Полный сценарий первичного юридического диалога: ситуация, город, документы, канал отправки, контакт и время связи.",
          "FSM жёстко контролирует порядок этапов и не даёт боту перескакивать через важные шаги.",
          "Stage Router определяет актуальную стадию по уже собранным фактам.",
          "Бот не спрашивает повторно телефон, документы, город или канал, если клиент уже сообщил данные.",
          "Есть отдельная ветка для нецелевых обращений: контакт сохраняется для передачи партнёрам."
        ]
      },
      {
        title: "LLM Orchestration",
        items: [
          "FSM отвечает за правила и безопасность, LLM отвечает за живую формулировку сообщений.",
          "Turn Analysis извлекает город, документы, канал, контакт, время связи и намерение клиента.",
          "Lead Analysis формирует структурированную карточку лида для Google Sheets.",
          "Строгая JSON-схема делает LLM-ответы предсказуемыми.",
          "Fallback-политика регенерирует ответ или откатывается на безопасный шаблон."
        ]
      },
      {
        title: "Legal Guardrails",
        items: [
          "Боту запрещено давать полноценные юридические консультации и прогнозы исхода дела.",
          "Ответы остаются краткими первичными пояснениями и возвращают клиента к сбору данных.",
          "Документы уточняются только после понимания ситуации и города.",
          "Телефон в приоритете, при отказе запрашивается альтернативный контакт.",
          "Служебные контакты компании не записываются как контакт клиента."
        ]
      },
      {
        title: "Storage & CRM",
        items: [
          "SQLite хранит разговоры, сообщения, стадии, ответы, документы и технические флаги.",
          "Google Sheets работает как CRM-таблица юридических лидов.",
          "Append/update логика по internal ID не создаёт дубли строк.",
          "Отложенная запись в Sheets защищает диалог от сбоев таблицы.",
          "Сохраняются контакт, город, услуга, документы, канал отправки, время связи, комментарий и статус."
        ]
      },
      {
        title: "Integrations & Runtime",
        items: [
          "Avito API получает чаты, сообщения и отправляет ответы клиентам.",
          "Telegram gateway имитирует клиентов и показывает ответы в реальном времени.",
          "Единый messenger-интерфейс позволяет менять Avito/fake-режим без изменения бизнес-логики.",
          ".env управляет Avito, Sheets, OpenAI, SQLite, Telegram fake-mode и режимами диалога.",
          "Worker polling-loop обрабатывает новые сообщения, отвечает и синхронизирует таблицу."
        ]
      },
      {
        title: "Tests & Diagnostics",
        items: [
          "BDD-сценарии в YAML проверяют диалоги как пользовательские истории.",
          "Replay-механизм воспроизводит живые LLM-ответы без повторных вызовов OpenAI.",
          "Fake AI и heuristic AI дают детерминированные тесты.",
          "Acceptance-тесты проверяют соответствие исходным бизнес-требованиям.",
          "LLM-as-judge оценивает естественность и соответствие правилам."
        ]
      }
    ],
    technicalScope: [
      "Avito Messenger intake, FSM-сценарий, LLM-orchestrated и LLM-generated режимы.",
      "Production-профиль thin: LLM пишет естественно, FSM контролирует этапы, запреты и обязательные условия.",
      "Turn Analysis, Lead Analysis, Stage Router, strict JSON schema и post-processing LLM-текста.",
      "Обработка ранних данных, повторных вопросов, soft-must времени связи и post-close update.",
      "Дедупликация входящих сообщений, дедупликация исходящих ответов и batching быстрых сообщений клиента.",
      "SQLite storage для разговоров, сообщений, стадий, ответов, статусов документов и технических флагов.",
      "Google Sheets append/update по internal ID, маппинг в фиксированную схему колонок и delayed write при сбоях.",
      "Avito token refresh, fake Telegram mode, messenger factory, .env config и polling worker.",
      "FSM tests, JSON parsing tests, Orchestrator tests, dedup tests, restart resilience tests.",
      "Live-smoke, replay JSONL, test artifacts, stage trace summary, technical guide и implementation guide."
    ]
  },
  {
    id: "event",
    category: "04 · Parser + Lead Gen",
    title: "EventRadar — парсер Telegram-каналов",
    summary: "Отдельный сервис для автоматического поиска горячих заявок на техническое обеспечение мероприятий в Telegram-чатах. Система слушает профессиональные сообщества через Telethon, фильтрует шум, классифицирует лиды и отправляет чистые заявки в backend основного бота.",
    preview: "Превращает хаотичные Telegram-чаты в управляемый поток event-лидов с LLM-классификацией.",
    problem: "Менеджеры вручную мониторили десятки Telegram-чатов, пропускали горячие заявки, ловили дубли и тратили внимание на вакансии, рекламу и нерелевантный шум.",
    solution: "EventRadar собирает сообщения через Telethon, нормализует их в RawMessage, применяет pre-filter, основной фильтр и LLM-классификатор, формирует LeadCandidate и отправляет лиды в backend бота через защищённый webhook.",
    howItWorks: "Telegram-чаты → Telethon listener → RawMessage → soft pre-filter → lead classifier / LLM → LeadCandidate JSON → backend /eventradar/lead → Telegram-уведомление продажам.",
    results: [
      "Автоматизирован мониторинг профессиональных event-сообществ",
      "LLM + эвристики отделяют заявки от шума",
      "Лиды доставляются в тот же поток, что Avito и site chat",
      "Bearer-token защищает внутренний endpoint",
      "Score и reason объясняют, почему сообщение стало лидом",
      "Supervisor-cycle восстанавливает сервис после временных сбоев"
    ],
    stack: ["Python", "Telethon", "OpenAI-compatible LLM", "YAML config", "HTTP webhook", "Bearer token", "Telegram Bot backend"],
    github: null,
    role: "Архитектура сервиса, Telegram client, pre-filter, LLM-классификация, модели данных, backend contract, конфиги и диагностика.",
    status: "GitHub: в подготовке",
    images: [],
    modules: [
      {
        title: "Telegram Source Layer",
        items: [
          "Сбор сообщений из выбранных Telegram-чатов через Telethon под рабочим аккаунтом.",
          "Прослушивание нескольких event-чатов в реальном времени или с минимальной задержкой.",
          "YAML-конфиг для добавления новых источников без переписывания кода.",
          "Тестовый Telegram-чат для безопасной проверки логики.",
          "Скрипт для получения chat_id и списка Telegram-диалогов."
        ]
      },
      {
        title: "Filtering Pipeline",
        items: [
          "RawMessage сохраняет текст, источник, автора, чат, ссылку, reply, forward, media и сервисный статус.",
          "Soft pre-filter отсекает очевидный шум до дорогой обработки.",
          "Фильтруются сервисные сообщения, пустые медиа, бессодержательные reply/forward и короткие символные ответы.",
          "Pre-filter безопасен: он не режет потенциальные заявки агрессивно.",
          "Режимы off, soft и зарезервированный hard вынесены в конфиг."
        ]
      },
      {
        title: "Lead Classification",
        items: [
          "Основной фильтр определяет, похоже ли сообщение на запрос по техобеспечению мероприятия.",
          "Распознаются звук, свет, DJ с аппаратурой, экраны, проекторы, сцена, видео и другое оборудование.",
          "Категории оборудования: sound, dj_with_gear, lights, led_screen, plasma, projector, stage, video_production, other.",
          "LLM-классификатор принимает смысловое решение, эвристики страхуют при ошибках.",
          "Извлекаются город, дата, бюджет, тип события, reason, score и категории."
        ]
      },
      {
        title: "Backend Contract",
        items: [
          "Лиды отправляются в backend основного Telegram-бота через HTTP POST.",
          "Авторизация между EventRadar и backend идёт через Bearer token.",
          "JSON-формат LeadCandidate унифицирует передачу лида.",
          "Endpoint /eventradar/lead валидирует токен, принимает JSON и пересылает уведомление.",
          "EventRadar подключён как отдельный источник, не ломая Avito и web-chat архитектуру."
        ]
      },
      {
        title: "Runtime & Recovery",
        items: [
          ".env, .env.local и YAML управляют Telegram API, backend URL, token, фильтрами и LLM.",
          "Telethon session-файл позволяет работать без повторной авторизации.",
          "Supervisor-cycle перезапускает сборщик при сетевых сбоях, ошибках LLM или недоступности backend.",
          "Exponential backoff увеличивает задержку до 5 минут при повторяющихся ошибках.",
          "KeyboardInterrupt корректно останавливает сервис как daemon или Launch Agent."
        ]
      },
      {
        title: "Product Logic",
        items: [
          "Система помогает находить заявки раньше конкурентов сразу после появления в чате.",
          "Шум превращается в поток потенциальных лидов с объяснимой классификацией.",
          "Структура уведомлений готова к маршрутизации по оборудованию, городу, бюджету и типу мероприятия.",
          "Score и reason позволяют анализировать ложные срабатывания и улучшать prompt.",
          "Проект является частью единой системы входящих обращений из Avito, сайта и Telegram-сообществ."
        ]
      }
    ],
    technicalScope: [
      "Telethon client, saved session, YAML chat config, test chat и chat_id discovery script.",
      "RawMessage и LeadCandidate модели для унифицированного lifecycle сообщения.",
      "Pre-filter modes: off, soft, reserved hard, minimum text length и DEBUG reasons.",
      "Lead classifier с категориями оборудования и video_production routing.",
      "OpenAI-compatible LLM config: API base, model, key, timeout и safe disable при неполной конфигурации.",
      "Hybrid LLM + heuristics, permissive mode и legacy stricter heuristic mode.",
      "HTTP POST backend integration, Bearer token, /eventradar/lead contract и separate EventRadar group routing.",
      "Centralized .env/.env.local/YAML, validation, safe defaults и warnings по неизвестным режимам.",
      "Supervisor loop, exponential backoff, graceful shutdown, daemon/Launch Agent readiness.",
      "README, release checklist, compileall, unit-testable pre-filter/LLM/filter boundaries."
    ]
  },
  {
    id: "rag",
    category: "05 · RAG + Knowledge Systems",
    title: "Obsidian RAG Core",
    summary: "Backend-first read-only RAG-система поверх Obsidian Vault. Проект индексирует Markdown, Canvas-графы, вложения и OCR-текст, строит retrieval-индекс в SQLite + Qdrant и отвечает через API с sources, evidence snippets и retrieval metadata.",
    preview: "Read-only RAG backend: Obsidian Vault → Markdown/Canvas/OCR ingestion → SQLite/Qdrant → answer with evidence.",
    problem: "Обычный поиск по заметкам плохо работает с большой базой знаний: он находит похожие куски текста, но не понимает контекст проекта, связи между идеями, структуру Canvas и границы области поиска.",
    solution: "Система читает Obsidian Vault в read-only режиме, строит собственный индекс, превращает Canvas в semantic graph, поддерживает scope-aware retrieval и отдаёт ответы через FastAPI с источниками, evidence snippets и retrieval diagnostics.",
    howItWorks: "Vault discovery → Markdown/Canvas/OCR ingestion → SQLite metadata → Qdrant vector store → scope-aware retrieval → Canvas graph expansion → LLM answer → sources/evidence/retrieval metadata.",
    results: [
      "Read-only backend: vault остаётся source of truth",
      "Canvas-aware retrieval превращает .canvas в semantic graph",
      "Scope-aware search по всем проектам, одному проекту или выбранным scopes",
      "Evidence-first answers с sources и snippets",
      "OpenAI и локальные Ollama adapters",
      "Debug search, retrieval timing и semantic traces"
    ],
    stack: ["Python", "FastAPI", "SQLite", "Qdrant", "Obsidian Canvas", "Markdown", "Ollama", "OpenAI API", "Docker", "OCR"],
    github: null,
    role: "Архитектура RAG-системы, ingestion pipeline, Canvas IR parser, metadata model, retrieval policies, model adapters, API layer и roadmap retrieval quality / latency.",
    status: "Private / in progress",
    images: [],
    modules: [
      {
        title: "Vault Ingestion",
        items: [
          "Read-only backend читает Obsidian Vault без изменения исходных заметок.",
          "Project discovery определяет folder note, _MOC.md, Canvas, Markdown, attachments и legacy media.",
          "Markdown разбирается на retrieval-документы с metadata и chunking.",
          "Attachment ingestion поддерживает PDF text layer и optional OCR.",
          "Incremental indexing обновляет только изменившиеся источники."
        ]
      },
      {
        title: "Canvas Understanding",
        items: [
          ".canvas файлы превращаются в Canvas IR, а не отправляются в модель как сырой JSON.",
          "Извлекаются nodes, edges, groups, labels, colors, directions, file references и subpaths.",
          "Canvas semantic layer переводит визуальные связи в retrieval-сигналы.",
          "Graph expansion учитывает соседние элементы и ограничивает глубину traversal.",
          "Semantic trace объясняет, почему Canvas был прочитан именно так."
        ]
      },
      {
        title: "Retrieval Core",
        items: [
          "SQLite хранит metadata layer, источники, hash-значения и lookup-данные.",
          "Qdrant используется как vector store для dense retrieval.",
          "Scope-aware retrieval не подмешивает unrelated projects без явного разрешения.",
          "Retrieval profiles explore и fact_evidence используют разные policies.",
          "Evidence-first answer assembly возвращает sources и snippets."
        ]
      },
      {
        title: "Model Backends",
        items: [
          "OpenAI adapters для embeddings и generation.",
          "Ollama adapters для локальных embeddings и generation.",
          "Model abstraction layer позволяет менять backend без переписывания retrieval core.",
          "Fallback paths деградируют при недоступности внешних backend'ов.",
          "Локальный запуск подтверждён на Mac Studio с Ollama, Qdrant и FastAPI."
        ]
      },
      {
        title: "API & Debuggability",
        items: [
          "FastAPI endpoints для full reindex, project reindex, changed-only indexing, query и debug search.",
          "/query возвращает answer + sources.",
          "/search/debug показывает scope-aware hits без генерации.",
          "Retrieval metadata показывает backend, model, timings и параметры retrieval.",
          "Indexing summary logs помогают контролировать процесс индексации."
        ]
      },
      {
        title: "Roadmap & Evaluation",
        items: [
          "Зафиксирован roadmap перехода с 256-dim embeddings на 512/1024-dim embeddings.",
          "Запланирован настоящий BM25 вместо упрощённого sparse scoring.",
          "Scope и metadata filtering должны перейти в Qdrant payload filters.",
          "Планируется async /query и streaming generation.",
          "Regression retrieval set и benchmarks нужны для оценки retrieval quality."
        ]
      }
    ],
    technicalScope: [
      "Read-only RAG backend, Projects indexing, project boundary model и strict scope-aware retrieval.",
      "Markdown ingestion: folder notes, _MOC.md, frontmatter, wiki-links, headings и project-relative paths.",
      "Canvas IR parser: nodes, file nodes, link nodes, groups, edges, edge labels, directions, subpaths, colors.",
      "Canvas semantic layer: precedence rules, alias resolution, semantic trace, graph expansion и partial reindex.",
      "Attachment ingestion: PDF text layer, OCR via tesseract, OCR retrieval-documents.",
      "SQLite metadata layer, Qdrant vector store, stable document IDs, qdrant-client query_points compatibility.",
      "Dense retrieval, initial hybrid fusion, profile-aware ranking, per-source cap и source deduplication.",
      "Sensitivity-aware metadata, max_sensitivity, exclude_sensitive, access_context и clearance-ready filters.",
      "OpenAI/Ollama adapters, local model stack, fallback paths и vendor-agnostic model abstraction.",
      "Full indexing, incremental indexing, symlink-aware ingestion, canonical source identity и hash-based detection.",
      "Debug endpoints, retrieval timings, semantic traces, regression retrieval set и evaluation layer.",
      "Roadmap: stronger embeddings, BM25, Qdrant payload filters, async flow, streaming generation, query embedding cache."
    ]
  }
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderResults() {
  const root = document.getElementById("results-strip");
  if (!root) return;
  root.innerHTML = RESULTS.map((item) => `
    <article class="premium-result-card">
      <span>${escapeHtml(item.label)}</span>
      <strong>${escapeHtml(item.value)}</strong>
      <p>${escapeHtml(item.desc)}</p>
      <small>${escapeHtml(item.source)}</small>
    </article>
  `).join("");
}

function imageMarkup(image, className = "") {
  if (!image) {
    return `<div class="proof-placeholder ${className}"><span>Proof image</span><small>Скриншот будет добавлен</small></div>`;
  }
  return `
    <figure class="proof-image ${className}" data-lightbox-src="${escapeHtml(image.src)}" data-lightbox-alt="${escapeHtml(image.alt)}" data-lightbox-caption="${escapeHtml(image.caption)}" tabindex="0" role="button" aria-label="Открыть изображение крупно: ${escapeHtml(image.caption)}">
      <img src="${image.src}" alt="${escapeHtml(image.alt)}" loading="lazy">
      <figcaption>${escapeHtml(image.caption)}</figcaption>
    </figure>
  `;
}

function modulesMarkup(project) {
  if (!project.modules?.length) return "";
  return `
    <section class="system-modules">
      <div class="case-section-head">
        <span class="case-category">Что внутри системы</span>
        <h3>${project.id === "g20" ? "Шесть модулей, которые превращают G20 в операционную систему" : "Ключевые модули и инженерные слои проекта"}</h3>
      </div>
      <div class="module-grid">
        ${project.modules.map((module) => `
          <article class="module-card">
            <h4>${escapeHtml(module.title)}</h4>
            <ul>${module.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function videosMarkup(project) {
  if (!project.videos?.length) return "";
  return `
    <section class="case-video-section">
      <div class="case-section-head">
        <span class="case-category">Видео proof</span>
        <h3>Как система работает в реальном браузерном контуре</h3>
      </div>
      <div class="video-grid">
        ${project.videos.map((video) => `
          <figure class="proof-video">
            <video controls preload="metadata" poster="${escapeHtml(video.poster)}">
              <source src="${escapeHtml(video.webm)}" type="video/webm">
              <source src="${escapeHtml(video.mp4)}" type="video/mp4">
            </video>
            <figcaption>${escapeHtml(video.caption)}</figcaption>
          </figure>
        `).join("")}
      </div>
    </section>
  `;
}

function channelPostMarkup(project) {
  if (!project.channelPost) return "";
  return `
    <a class="case-channel-link" href="${escapeHtml(project.channelPost.url)}" target="_blank" rel="noopener">
      <span>${escapeHtml(project.channelPost.label)}</span>
      <strong>${escapeHtml(project.channelPost.text)}</strong>
      <em>Открыть пост ↗</em>
    </a>
  `;
}

function technicalScopeMarkup(project, isOpen = false) {
  if (!project.technicalScope?.length) return "";
  return `
    <details class="technical-scope"${isOpen ? " open" : ""}>
      <summary>Показать полный technical scope</summary>
      <ul>${project.technicalScope.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </details>
  `;
}

function pdfImageMarkup(image) {
  if (!image) return "";
  return `
    <figure class="pdf-proof-image">
      <img src="${image.src}" alt="${escapeHtml(image.alt)}">
      <figcaption>${escapeHtml(image.caption)}</figcaption>
    </figure>
  `;
}

function pdfVideosMarkup(project) {
  if (!project.videos?.length) return "";
  return `
    <section class="pdf-case-block">
      <h4>Видео proof</h4>
      ${project.videos.map((video) => `
        <figure class="pdf-proof-image">
          <img src="${escapeHtml(video.poster)}" alt="${escapeHtml(video.caption)}">
          <figcaption>${escapeHtml(video.caption)}</figcaption>
        </figure>
      `).join("")}
    </section>
  `;
}

function renderPdfExport() {
  const root = document.getElementById("pdf-export");
  if (!root) return;

  root.innerHTML = `
    <div class="pdf-page">
      <header class="pdf-cover">
        <p class="section-label">Arseny NN · Automation & AI Systems</p>
        <h1>Строю системы автоматизации для бизнеса</h1>
        <p>CRM-процессы, Telegram-боты, LLM-обработка текста, автогенерация документов, парсеры, API-интеграции и операционная аналитика.</p>
        <div class="pdf-contact-row">
          <span>Арсений Николаевич Р. / @arsenynn</span>
          <span>Telegram: @arsenynnn</span>
          <span>Email: arsenynickolaevich@yandex.ru</span>
          <span>portfolio.arsenynn.com/it-ai</span>
        </div>
      </header>

      <section class="pdf-section">
        <p class="section-label">Результаты автоматизации</p>
        <h2>Цифры, которые понятны бизнесу без чтения кода</h2>
        <div class="pdf-results-grid">
          ${RESULTS.map((item) => `
            <article>
              <span>${escapeHtml(item.label)}</span>
              <strong>${escapeHtml(item.value)}</strong>
              <p>${escapeHtml(item.desc)}</p>
              <small>${escapeHtml(item.source)}</small>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="pdf-section">
        <p class="section-label">Что делаю</p>
        <h2>Собираю рабочие системы, которые убирают ручную операционку</h2>
        <div class="pdf-two-column">
          <p>Автоматизация лидов, CRM, документов, отчётов, Telegram-ботов, LLM-обработки, парсеров, API/Webhook-интеграций и внутренних инструментов.</p>
          <p>Подход: сначала бизнес-задача и измеримый результат, затем стек, архитектура и технические детали.</p>
        </div>
      </section>

      <section class="pdf-section">
        <p class="section-label">Проекты</p>
        <h2>Кейсы автоматизации: от заявки и CRM до LLM-обработки и аналитики</h2>
        ${PROJECTS.map((project) => `
          <article class="pdf-project">
            <header class="pdf-project-head">
              <span class="case-category">${escapeHtml(project.category)}</span>
              <h3>${escapeHtml(project.title)}</h3>
              <p>${escapeHtml(project.summary)}</p>
            </header>

            <div class="pdf-case-grid">
              <section class="pdf-case-block"><h4>Задача</h4><p>${escapeHtml(project.problem)}</p></section>
              <section class="pdf-case-block"><h4>Решение</h4><p>${escapeHtml(project.solution)}</p></section>
              <section class="pdf-case-block"><h4>Как работает</h4><p>${escapeHtml(project.howItWorks)}</p></section>
              <section class="pdf-case-block"><h4>Роль</h4><p>${escapeHtml(project.role)}</p></section>
            </div>

            <section class="pdf-case-block">
              <h4>Результаты</h4>
              <ul>${project.results.map((result) => `<li>${escapeHtml(result)}</li>`).join("")}</ul>
            </section>

            ${project.channelPost ? `
              <section class="pdf-case-block">
                <h4>Подробный разбор</h4>
                <p>${escapeHtml(project.channelPost.text)}</p>
                <p>${escapeHtml(project.channelPost.url)}</p>
              </section>
            ` : ""}

            ${project.images?.length ? `
              <section class="pdf-proof-grid">
                ${project.images.slice(0, project.id === "g20" ? 6 : 3).map((image) => pdfImageMarkup(image)).join("")}
              </section>
            ` : ""}

            ${pdfVideosMarkup(project)}

            ${modulesMarkup(project)}

            ${technicalScopeMarkup(project, true)}

            <footer class="pdf-project-footer">
              <div class="case-stack">${project.stack.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
              <p>${project.github ? `${escapeHtml(project.status)}: ${escapeHtml(project.github)}` : escapeHtml(project.status)}</p>
            </footer>
          </article>
        `).join("")}
      </section>

      <section class="pdf-section pdf-final">
        <p class="section-label">Контакт</p>
        <h2>Открыт к AI / automation задачам и техническим ролям</h2>
        <p>Telegram: @arsenynnn · Email: arsenynickolaevich@yandex.ru · GitHub: workflowarsenynn · Telegram-канал: https://t.me/annsflow</p>
      </section>
    </div>
  `;
}

function renderProjectCards() {
  const root = document.getElementById("project-grid");
  if (!root) return;
  root.innerHTML = PROJECTS.map((project, index) => {
    const featured = project.id === "g20" ? " featured-case" : "";
    const image = project.id === "g20" ? project.images[0] : null;
    const thumb = image ? `<div class="case-thumb">${imageMarkup(image)}</div>` : "";
    return `
      <article class="case-card${featured}" data-id="${project.id}">
        <button type="button" class="case-card-button" aria-label="Открыть кейс ${escapeHtml(project.title)}">
          <div class="case-card-copy">
            <span class="case-category">${escapeHtml(project.category)}</span>
            <h3>${escapeHtml(project.title)}</h3>
            <p>${escapeHtml(project.preview)}</p>
            <ul class="case-results">
              ${project.results.slice(0, index === 0 ? 3 : 2).map((result) => `<li>${escapeHtml(result)}</li>`).join("")}
            </ul>
            <div class="case-stack">${project.stack.slice(0, 5).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
          </div>
          ${thumb}
        </button>
      </article>
    `;
  }).join("");

  root.querySelectorAll(".case-card").forEach((card) => {
    card.addEventListener("click", () => openDetail(card.dataset.id));
  });
}

function openDetail(id) {
  const project = PROJECTS.find((item) => item.id === id);
  const root = document.getElementById("case-detail-content");
  const section = document.getElementById("case-detail");
  if (!project || !root || !section) return;

  document.querySelectorAll(".case-card").forEach((card) => card.classList.toggle("active", card.dataset.id === id));
  const collage = project.images.length ? `
      <div class="proof-collage">
        ${project.images.slice(0, 2).map((image, index) => imageMarkup(image, index === 0 ? "primary" : "secondary")).join("")}
      </div>
  ` : "";
  const gallery = project.images.length > 2 ? `
      <section class="case-proof-gallery">
        ${project.images.slice(2).map((image) => imageMarkup(image)).join("")}
      </section>
  ` : "";
  root.innerHTML = `
    <article class="case-detail-card">
      <div class="case-detail-head">
        <div>
          <span class="case-category">${escapeHtml(project.category)}</span>
          <h2>${escapeHtml(project.title)}</h2>
          <p>${escapeHtml(project.summary)}</p>
        </div>
        <button type="button" class="button close-button" data-close-detail>Закрыть</button>
      </div>

      ${channelPostMarkup(project)}

      ${collage}

      <div class="case-detail-grid">
        <section><h3>Задача</h3><p>${escapeHtml(project.problem)}</p></section>
        <section><h3>Решение</h3><p>${escapeHtml(project.solution)}</p></section>
        <section><h3>Как работает</h3><p>${escapeHtml(project.howItWorks)}</p></section>
        <section><h3>Роль</h3><p>${escapeHtml(project.role)}</p></section>
      </div>

      <section class="case-outcomes">
        <h3>Результаты</h3>
        <ul>${project.results.map((result) => `<li>${escapeHtml(result)}</li>`).join("")}</ul>
      </section>

      ${videosMarkup(project)}

      ${gallery}

      ${modulesMarkup(project)}

      ${technicalScopeMarkup(project)}

      <footer class="case-detail-footer">
        <div class="case-stack">${project.stack.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
        <p>${project.github ? `<a href="${project.github}" target="_blank" rel="noopener">${escapeHtml(project.status)}</a>` : escapeHtml(project.status)}</p>
      </footer>
    </article>
  `;

  root.querySelector("[data-close-detail]").addEventListener("click", closeDetail);
  section.classList.add("open");
  setTimeout(() => section.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
}

function closeDetail() {
  document.getElementById("case-detail")?.classList.remove("open");
  document.querySelectorAll(".case-card").forEach((card) => card.classList.remove("active"));
}

function ensureLightbox() {
  let lightbox = document.getElementById("image-lightbox");
  if (lightbox) return lightbox;

  lightbox = document.createElement("div");
  lightbox.id = "image-lightbox";
  lightbox.className = "image-lightbox";
  lightbox.setAttribute("aria-hidden", "true");
  lightbox.innerHTML = `
    <button type="button" class="lightbox-backdrop" data-lightbox-close aria-label="Закрыть изображение"></button>
    <figure class="lightbox-frame" role="dialog" aria-modal="true" aria-label="Просмотр изображения">
      <button type="button" class="lightbox-close" data-lightbox-close aria-label="Закрыть">×</button>
      <img src="" alt="">
      <figcaption></figcaption>
    </figure>
  `;
  document.body.appendChild(lightbox);
  lightbox.querySelectorAll("[data-lightbox-close]").forEach((button) => button.addEventListener("click", closeLightbox));
  return lightbox;
}

function openLightbox(src, alt, caption) {
  const lightbox = ensureLightbox();
  const image = lightbox.querySelector("img");
  const text = lightbox.querySelector("figcaption");
  image.src = src;
  image.alt = alt;
  text.textContent = caption;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
  lightbox.querySelector("[data-lightbox-close]")?.focus();
}

function closeLightbox() {
  const lightbox = document.getElementById("image-lightbox");
  if (!lightbox) return;
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
}

function initLightbox() {
  document.addEventListener("click", (event) => {
    const figure = event.target.closest?.(".proof-image[data-lightbox-src]");
    if (!figure) return;
    openLightbox(figure.dataset.lightboxSrc, figure.dataset.lightboxAlt, figure.dataset.lightboxCaption);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
    if ((event.key === "Enter" || event.key === " ") && event.target.matches?.(".proof-image[data-lightbox-src]")) {
      event.preventDefault();
      const figure = event.target;
      openLightbox(figure.dataset.lightboxSrc, figure.dataset.lightboxAlt, figure.dataset.lightboxCaption);
    }
  });
}

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

function resetInitialScroll() {
  if (window.location.hash) return;
  requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: "auto" }));
}

document.addEventListener("DOMContentLoaded", () => {
  renderResults();
  renderProjectCards();
  renderPdfExport();
  initLightbox();
  if (new URLSearchParams(window.location.search).get("pdf") === "1") {
    document.body.classList.add("pdf-mode");
  }
  resetInitialScroll();
});
