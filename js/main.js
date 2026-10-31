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
    videoHeading: "Как система работает и к чему приводит в реальности",
    videos: [
      {
        mp4: "../images/hhbot/video/demo.mp4",
        webm: "../images/hhbot/video/demo.webm",
        poster: "../images/hhbot/video/demo-poster.webp",
        caption: "Демо browser-first процесса: система работает в браузере HeadHunter, готовит отклики и показывает controlled automation flow."
      },
      {
        mp4: "../images/hhbot/video/call.mp4",
        webm: "../images/hhbot/video/call.webm",
        poster: "../images/hhbot/video/call-poster.webp",
        link: { label: "Пост с видео в Telegram-канале", url: "https://t.me/annsflow/184" },
        caption: "Реальный результат автоотклика: система сама нашла вакансию, сопоставила её с профилем и откликнулась — на видео звонок работодателя после этого отклика. Самая неожиданная вакансия, которую нашёл бот: предлагать людям контракт на военную службу."
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
  },
  {
    id: "mac",
    category: "06 · macOS Automation + Lua",
    title: "Mac Automation Stack — клавиатурные слои и управление рабочим местом",
    summary: "Персональная система автоматизации macOS на связке Karabiner-Elements + Hammerspoon. Karabiner превращает физические клавиши в чистые сигналы: Hyper, tap/hold-слои, виртуальные F-клавиши, правила по раскладке. Hammerspoon на Lua превращает эти сигналы в действия: запуск приложений, оконный менеджер, медиа-сценарии, авто-раскладку мониторов, HTTP-пульт для Shortcuts и MIDI-контроллер для OBS.",
    preview: "Два уровня управления Mac: Karabiner отвечает за ввод, Hammerspoon за логику — слои, окна, медиа, мониторы, HTTP-пульт и MIDI → OBS.",
    problem: "Готовые утилиты дают ровно тот набор функций, который придумал автор: как только нужны слои, контекст, надёжные фолбэки и своя логика для окон и медиа, упираешься в ограничения интерфейса. Системные хоткеи зависят от фокуса и анимаций, многомониторный сетап разъезжается после переподключения дисплеев, а медиа в каждом приложении управляется по-своему.",
    solution: "Система разделена на два уровня. Karabiner-Elements отвечает за «железо ввода»: модульные JSON-правила задают Hyper на Caps Lock, слои Space (hold = F18) и backtick (hold = F17) и точечные правила для RU-раскладки. Hammerspoon отвечает за поведение: Lua-конфиг слушает эти сигналы и выполняет сценарии с проверками состояния, задержками и фолбэками — от запуска приложений и тайлинга окон до HTTP-сервера, displayplacer и управления OBS по WebSocket.",
    howItWorks: "Физическая клавиша → JSON-правило Karabiner (tap/hold, Hyper, F17/F18, input source) → чистый сигнал → hotkey или modal layer в Hammerspoon → Lua-сценарий (проверка состояния → фокус → задержка → команда → fallback) → приложение, окно, медиа, монитор или OBS. Параллельно: Shortcuts → HTTP endpoint на Mac, MIDI-нота → действие в command mode.",
    results: [
      "Запуск и фокус приложений одним сочетанием Hyper + клавиша — без Dock и поиска",
      "Три слоя ввода — Hyper, Space-hold и backtick-hold — не ломают обычную печать",
      "Окна раскладываются мгновенно и детерминированно, с возвратом «как было»",
      "Медиа-команды адресно уходят в Spotify, YouTube, Twitch, Music, Podcasts и Books",
      "Удалённый пульт: HTTP API для Shortcuts с токеном, rate limit и watchdog",
      "MIDI-клавиатура работает как аппаратная панель для сцен OBS"
    ],
    stack: ["Karabiner-Elements", "Hammerspoon", "Lua", "JSON", "AppleScript", "HTTP server", "OBS WebSocket", "MIDI", "displayplacer", "Apple Shortcuts", "iCloud"],
    github: null,
    role: "Архитектура слоёв ввода, JSON-правила Karabiner, Lua-конфиг Hammerspoon: оконный менеджер, медиа-сценарии, HTTP-сервер с авторизацией и watchdog, авто-раскладка мониторов, MIDI → OBS WebSocket, синхронизация конфига и серия разборов в Telegram-канале.",
    status: "Personal setup · ежедневное использование",
    channelPost: {
      label: "Подробный разбор в Telegram-канале",
      url: "https://t.me/annsflow/74",
      text: "Серия постов #macOSAutomation: от «железа» к логике — слои Karabiner, сценарии Hammerspoon, окна, медиа, HTTP-пульт и MIDI → OBS."
    },
    images: [
      {
        src: "../images/mac/karabiner-hammerspoon.webp",
        alt: "Иконки Karabiner-Elements и Hammerspoon — два уровня Mac Automation Stack",
        caption: "Связка Karabiner + Hammerspoon: Karabiner отвечает за ввод, Hammerspoon — за логику и сценарии."
      },
      {
        src: "../images/mac/karabiner.webp",
        alt: "Иконка Karabiner-Elements — уровень ввода в Mac Automation Stack",
        caption: "Karabiner-Elements: модульные JSON-правила превращают физические клавиши в чистые сигналы — Hyper, F17, F18."
      },
      {
        src: "../images/mac/hammerspoon.webp",
        alt: "Иконка Hammerspoon — уровень логики в Mac Automation Stack",
        caption: "Hammerspoon: Lua-конфиг слушает сигналы и выполняет сценарии — окна, медиа, мониторы, HTTP-пульт и MIDI."
      }
    ],
    files: [
      {
        label: "Caps Lock = Hyper",
        desc: "Caps Lock превращается в cmd+ctrl+option+shift — суперклавиша под мизинцем и чистый слой хоткеев.",
        href: "../downloads/mac-automation/caps_lock_to_hyper.json",
        name: "caps_lock_to_hyper.json"
      },
      {
        label: "Space: tap = пробел, hold = F18",
        desc: "Базовый слой команд: быстрый тап печатает пробел, удержание отдаёт F18 для Hammerspoon.",
        href: "../downloads/mac-automation/space_hold_f18.json",
        name: "space_hold_f18.json"
      },
      {
        label: "Backtick: tap = `, hold = F17",
        desc: "Вход в Leader Key-иерархию: подслои для папок Finder и проектов ChatGPT.",
        href: "../downloads/mac-automation/grave_hold_f17.json",
        name: "grave_hold_f17.json"
      },
      {
        label: "RU: Option + , / . → запятая и точка",
        desc: "Пунктуация на позициях EN-раскладки — правило работает только в русском input source.",
        href: "../downloads/mac-automation/ru_option_punct.json",
        name: "ru_option_punct.json"
      }
    ],
    modules: [
      {
        title: "Karabiner Input Layer",
        items: [
          "Karabiner-Elements как «компилятор ввода»: физические клавиши превращаются в предсказуемые сигналы.",
          "Модульные Complex Modifications: один JSON-файл = одна идея, правила включаются, тестируются и откатываются по отдельности.",
          "Caps Lock = Hyper (cmd+ctrl+option+shift): суперклавиша под мизинцем и чистый слой хоткеев без конфликтов.",
          "Space: tap = пробел, hold = виртуальная F18; порог удержания подобран так, чтобы слой не включался при печати.",
          "Backtick: tap = символ, hold = виртуальная F17 — вход в Leader Key-иерархию.",
          "RU-раскладка: Option + , и Option + . печатают запятую и точку только в русском input source."
        ]
      },
      {
        title: "Hammerspoon Core & Layers",
        items: [
          "Lua-конфиг init.lua как единый движок логики поверх сигналов Karabiner.",
          "Hyper + клавиша: запуск и фокус конкретных приложений через hs.application.open и launchOrFocus.",
          "Space-layer на F18: модальный режим с медиа-контролем и запуском дополнительных приложений.",
          "Backtick-layer на F17: Leader Key-подслои — F открывает рабочие папки в Finder, G — проекты в ChatGPT.",
          "Конфиг хранится как код и синхронизируется через iCloud Drive симлинком — одинаковое поведение на всех Mac."
        ]
      },
      {
        title: "Window Manager",
        items: [
          "Слой Ctrl + Option: A и D — левая и правая половина, S — центр и другие мышечно-запоминаемые команды.",
          "hs.window.animationDuration = 0: окна меняют геометрию мгновенно, без зависимости от анимаций.",
          "moveToUnit для тайлинга в долях экрана и setFrame для точных зон — например, правая колонка 25%.",
          "Toggle «разложить / вернуть»: исходный frame сохраняется в windowStates, раскладка обратима.",
          "Сетка окон текущего приложения с восстановлением позиций повторным запуском.",
          "Перенос между мониторами по топологии west/east/north/south и шаговая подстройка по 100 px."
        ]
      },
      {
        title: "Media Scenarios",
        items: [
          "Не универсальная пауза, а сценарий под каждое приложение: активация → пауза на фокус → команда → fallback.",
          "Spotify: AppleScript playpause напрямую, без эмуляции клавиш и зависимости от активного окна.",
          "YouTube, Twitch и Safari: фокус → выход из Space-layer → задержка 50 мс → клавиша k.",
          "Apple Music и Podcasts: фокус → задержка → space как play/pause.",
          "Apple Books: UI scripting через System Events с учётом RU/EN-названий меню и fallback на space.",
          "Если приложение не запущено — alert вместо команды «в никуда»."
        ]
      },
      {
        title: "HTTP Control Server",
        items: [
          "Hammerspoon поднимает локальный HTTP-сервер на фиксированном порту — Mac Studio работает как хаб.",
          "Авторизация через header X-Auth-Token вместо Basic Auth для стабильной интеграции с Shortcuts.",
          "Rate limit по минимальному интервалу между вызовами защищает от дублей и гонок.",
          "Health-check /ping и watchdog перезапускают сервер, если он перестал отвечать.",
          "Endpoints: медиа-команды по приложениям и системные действия, включая pmset displaysleepnow.",
          "Клиенты — Shortcuts на iPhone и других Mac: кнопка → HTTP-запрос → действие на Mac."
        ]
      },
      {
        title: "Displays & Hardware Control",
        items: [
          "displayplacer и отслеживание подключения дисплеев по persistent ID, включая iPad/Sidecar.",
          "Авто-применение лэйаутов «с iPad» и «без iPad» после короткой паузы на стабилизацию macOS.",
          "После отключения Sidecar окна с крайнего экрана возвращаются на primary display.",
          "MIDI-клавиатура как аппаратная панель: карта smkActions[note] с label и fn для каждой ноты.",
          "Command mode включается sustain-педалью (CC64); фильтры velocity, диапазон 25 клавиш и debounce.",
          "Управление OBS по WebSocket: кеш списка сцен с коротким TTL и SetCurrentProgramScene по индексу."
        ]
      }
    ],
    technicalScope: [
      "Karabiner-Elements Complex Modifications: модульные JSON-файлы в ~/.config/karabiner/assets/complex_modifications.",
      "Hyper-модификатор на Caps Lock (cmd+ctrl+option+shift) на уровне Karabiner, а не сторонней утилиты.",
      "Tap/hold-правила: Space → F18, backtick → F17, подбор to_if_held_down_threshold_milliseconds.",
      "Условия по input source: правила пунктуации работают только в русской раскладке и не трогают EN.",
      "Hammerspoon init.lua: hs.hotkey.bind, modal layers, Leader Key-подслои для Finder и ChatGPT.",
      "Синхронизация конфига через iCloud Drive симлинком на стандартный путь ~/.hammerspoon/.",
      "Window management через hs.window: moveToUnit, setFrame, moveToScreen, windowStates, нулевая анимация.",
      "Сетка окон приложения, обратимые раскладки, перенос по топологии экранов и шаговые сдвиги.",
      "Медиа-сценарии: AppleScript для Spotify, hs.eventtap.keyStroke с hs.timer.doAfter, UI scripting через System Events.",
      "hs.httpserver: фиксированный порт, X-Auth-Token, rate limit, /ping health-check и watchdog с автоперезапуском.",
      "Интеграция с Apple Shortcuts на iPhone и других Mac как клиентами HTTP API.",
      "displayplacer, persistent display ID, скрипты лэйаутов и возврат окон на primary display после отключения Sidecar.",
      "hs.midi: обработка noteOn, velocity, диапазона нот, CC64 command mode, слоёв действий и debounce.",
      "OBS WebSocket: кеш сцен с TTL, obsSetSceneByIndex и SetCurrentProgramScene."
    ]
  },
  {
    id: "voxbase",
    category: "07 · Speech-to-Text + Local AI",
    title: "VoxBase — голос, видео и подкасты в Markdown-память",
    summary: "Локальная система транскрибации, которая превращает записи с iPhone, TikTok, YouTube и Apple Podcasts в Markdown с metadata. Silero VAD находит речь, ffmpeg готовит сигнал, whisper-cli с моделью large-v3 распознаёт текст на Metal GPU, а launchd-worker обрабатывает очередь автономно — без облачного транскрибатора, оплаты за минуты и передачи разговоров сторонним сервисам.",
    preview: "Конвейер iPhone → iCloud → Mac worker → VAD → chunks → Whisper → Markdown + metadata, плюс ClipMind для TikTok, YouTube и подкастов.",
    problem: "После переговоров и встреч остаётся много нюансов, которые невозможно удержать в голове, а аудиофайл на телефоне сам по себе ничего не решает. Встроенные решения iPhone ограничены по качеству, контролю и формату результата, облачные сервисы требуют ручной загрузки и подписки, а важные видео и подкасты теряются в ленте.",
    solution: "Построен локальный конвейер: запись с iPhone через iCloud попадает на Mac, worker проверяет готовность файла, Silero VAD строит карту речи, речевые участки собираются в chunks примерно по 60 секунд, ffmpeg очищает сигнал, whisper-cli large-v3 распознаёт текст. Результат сохраняется как Markdown с metadata о происхождении. ClipMind добавляет второй вход: ссылки из TikTok, YouTube и Apple Podcasts идут по самому дешёвому пути к тексту и попадают в Todoist.",
    howItWorks: "Запись на iPhone → iCloud → launchd-worker раз в минуту проверяет готовность → рабочая копия → Silero VAD → chunks ~60 с речи → ffmpeg (mono, 16 kHz, denoise, loudnorm) → whisper-cli large-v3 на Metal GPU → Markdown + metadata в iCloud → архив оригинала. Ссылка через Share Sheet → ClipMind → captions / transcript / RSS / локальный Whisper → Markdown → Todoist.",
    results: [
      "Транскрипт готов через несколько минут после записи — без ручных шагов",
      "VAD пропускает тишину: 62 минуты аудио → 42:50 речи, 30,9% не пришлось транскрибировать",
      "26-минутная запись: 131 речевой сегмент собран в 4 chunks без потери контекста",
      "Полностью локально: Whisper large-v3 на Metal GPU, без оплаты за минуты и лимитов",
      "Оригиналы не изменяются, каждый транскрипт хранит metadata о происхождении",
      "ClipMind: TikTok, YouTube и Apple Podcasts превращаются в Markdown и задачу в Todoist"
    ],
    stack: ["Python", "Whisper large-v3", "whisper-cli", "Silero VAD", "ffmpeg", "Metal GPU", "launchd", "iCloud Drive", "pyannote", "SpeechBrain", "Todoist API", "Markdown"],
    github: null,
    role: "Архитектура конвейера, VAD- и chunking-логика, сигнальный тракт ffmpeg, локальный Whisper runtime, launchd-worker и защита от повторной обработки, разделение iCloud-артефактов и локального state, Voice Reference, ClipMind с маршрутизацией по источникам и интеграцией с Todoist.",
    status: "Private · ежедневное использование",
    channelPost: {
      label: "Подробный разбор в Telegram-канале",
      url: "https://t.me/annsflow/155",
      text: "Серия постов #VoxBase: почему голосовые заметки умирают, VAD и chunks, сигнальный тракт, локальный worker, Voice Reference и ClipMind."
    },
    images: [
      {
        src: "../images/voxbase/transcripts-finder.webp",
        alt: "Папка transcripts_md VoxBase с парами Markdown и JSON и превью Voice Note",
        caption: "transcripts_md: рядом с каждой записью появляются Markdown-транскрипт и JSON-metadata — дата, язык, модель, обработка и статус."
      },
      {
        src: "../images/voxbase/worker-log.webp",
        alt: "Лог рабочего цикла VoxBase: VAD, chunks, Whisper large-v3 на Metal GPU и Markdown",
        caption: "Один рабочий цикл: Silero VAD находит речь, chunks уходят в Whisper large-v3 на Apple M2 Max (Metal), Markdown создаётся автоматически."
      },
      {
        src: "../images/voxbase/metadata-json.webp",
        alt: "Metadata-файл VoxBase с длительностью, долей речи и числом сегментов",
        caption: "Metadata транскрипта: из 221 секунды записи речью оказались 95,8 секунды — speech_ratio, сегменты, модель и pipeline сохраняются вместе с текстом."
      },
      {
        src: "../images/voxbase/clipmind-todoist.webp",
        alt: "Задача в Todoist с транскриптом TikTok-видео, созданная ClipMind",
        caption: "ClipMind: ссылка из TikTok попадает в Todoist и превращается в текст, с которым уже можно работать."
      },
      {
        src: "../images/voxbase/voxbase-cover.webp",
        alt: "Обложка проекта VoxBase",
        caption: "VoxBase — голос, видео и подкасты как часть рабочей памяти."
      }
    ],
    modules: [
      {
        title: "Capture & Intake",
        items: [
          "Запись голоса на iPhone через Just Press Record, iCloud Drive работает как курьер между устройствами.",
          "Проверка готовности: файл уже не .icloud, размер перестал меняться, запись ещё не обработана.",
          "Lock от параллельного запуска и защита от повторной обработки одного и того же файла.",
          "Работа только с рабочей копией: исходный .m4a не режется, не чистится и не перезаписывается.",
          "Оригинал архивируется после обработки и помечается как processed."
        ]
      },
      {
        title: "VAD & Chunking",
        items: [
          "Silero VAD строит карту речи: где человек говорит, а где пауза, шум или тишина.",
          "Мелкие речевые сегменты склеиваются в chunks примерно по 60 секунд речи.",
          "Короткие фрагменты по 1–2 секунды не отправляются в Whisper — так модель не теряет контекст и не галлюцинирует.",
          "Тишина не транскрибируется: на часовой записи пропускается почти треть файла.",
          "Транскрипт сохраняет исходные таймкоды записи."
        ]
      },
      {
        title: "Signal Chain",
        items: [
          "ffmpeg-цепочка перед распознаванием: highpass 80 Hz и lowpass 6 kHz срезают гул и шипение.",
          "afftdn подавляет постоянный фоновый шум, acompressor 4:1 выравнивает тихие и громкие фразы.",
          "loudnorm нормализует итоговую громкость, сигнал приводится к mono 16 kHz WAV.",
          "Основной режим очищает запись, не съедая окончания слов и тихую речь.",
          "Отдельный Noisy preset для сложных условий записи."
        ]
      },
      {
        title: "Local Runtime & Storage",
        items: [
          "whisper-cli с моделью large-v3 на Metal GPU — внешний API для транскрибации не нужен.",
          "launchd запускает worker раз в минуту; очередь переживает отсутствие интернета и остановку worker.",
          "В iCloud — только артефакты: Markdown, metadata и постоянные копии оригиналов.",
          "Локально — chunks, временное аудио, логи, state, ошибки, locks и cache, чтобы не раздувать CloudKit.",
          "Ночной агент удаляет временные enhanced-аудио; оригиналы не удаляются никогда."
        ]
      },
      {
        title: "Voice Reference",
        items: [
          "Эталон голоса из нескольких образцов: iPhone, микрофон Mac, разные условия, по 1–3 минуты.",
          "pyannote разделяет запись по говорящим, SpeechBrain строит voice embeddings.",
          "Каждый голос сравнивается с эталоном: наибольшее совпадение получает метку Me, остальные — Other.",
          "Score совпадения сохраняется в metadata: уверенно, Me с предупреждением или low confidence.",
          "Принцип: не скрывать неопределённость, а хранить её вместе с результатом."
        ]
      },
      {
        title: "ClipMind Media Intake",
        items: [
          "Ссылка с iPhone через Share Sheet попадает в одну очередь, источник определяется автоматически.",
          "TikTok: captions с проверкой языка, объёма текста, lyrics и мусорных автосубтитров, иначе локальный Whisper.",
          "YouTube: готовый transcript без скачивания видео; при отсутствии субтитров — metadata и понятный статус ошибки.",
          "Apple Podcasts: iTunes Lookup → RSS → transcript; тяжёлый fallback на аудио запускается только явно.",
          "Задача в Todoist создаётся сразу и обновляется по мере обработки — ссылка не теряется даже при ошибке.",
          "Временные видео, аудио и chunks очищаются, в iCloud остаются только лёгкие финальные артефакты."
        ]
      }
    ],
    technicalScope: [
      "Конвейер iPhone → iCloud → Mac worker → VAD → chunks → Whisper → Markdown + metadata.",
      "Готовность файлов iCloud: проверка .icloud-плейсхолдеров, стабилизации размера и processed-реестра.",
      "Single-instance worker с lock, рабочие копии и архив оригиналов без модификации.",
      "Silero VAD, merge сегментов в chunks с target ~60 с речи и сохранением исходных таймкодов.",
      "ffmpeg: highpass, lowpass, afftdn, acompressor, loudnorm, mono 16 kHz; основной и Noisy preset.",
      "whisper-cli + ggml-large-v3 на Metal GPU (Apple Silicon), язык ru.",
      "Markdown-транскрипт с заголовком: дата, время, язык, источник, длительность, модель, обработка, статус.",
      "JSON-metadata: duration, speech/silence duration, speech_ratio, num_segments, word_count, pipeline, status.",
      "launchd StartInterval 60, восстановление очереди после офлайна iPhone и остановки worker.",
      "Разделение хранения: iCloud для артефактов, локальный диск для chunks, логов, state, locks и cache.",
      "Ночная очистка временных enhanced-аудио, оригиналы хранятся постоянно.",
      "Voice Reference: pyannote diarization, SpeechBrain embeddings, similarity score и метки Me / Other.",
      "ClipMind: роутинг TikTok / YouTube / Apple Podcasts, captions quality checks, iTunes Lookup и RSS.",
      "Todoist-интеграция: задача создаётся при постановке в очередь, обновляется без дублей, failure artifacts при ошибке."
    ]
  },
  {
    id: "radio",
    category: "08 · Streaming + Python",
    title: "Without Streaming — Telegram-канал как радиостанция",
    summary: "Интернет-радио, которое превращает музыкальный Telegram-канал в непрерывный эфир. Новый пост в канале автоматически становится частью программы, Python решает, что прозвучит дальше, Liquidsoap формирует сигнал, а HLS через Caddy доставляет один общий live-эфир всем слушателям — с визуалами, PWA и аналитикой прослушиваний.",
    preview: "Telegram как CMS → локальная медиатека → Python → Liquidsoap → AAC-LC → HLS → Caddy → один общий эфир в браузере.",
    problem: "Личная музыкальная медиатека жила в Telegram-канале как лента постов: чтобы включить музыку в компании или в машине, нужно было листать канал и запускать треки по одному. Нужен был эфир в один клик — без отдельной админки, ручной сборки плейлистов и с поведением, которое не ломается на iOS, в WebView и при сворачивании браузера.",
    solution: "Проект прошёл путь от персонального плеера к радиостанции. Первая версия на FastAPI + Telethon индексировала канал, собирала playlist.json с тегами стиля и энергии и стримила аудио из Telegram chunked без сохранения на диск. Вторая версия стала настоящим радио: медиатека зеркалируется локально, Python программирует эфир, Liquidsoap играет и делает переходы, сигнал кодируется в AAC-LC и раздаётся через HLS и Caddy — все слушатели подключаются к одному и тому же моменту эфира.",
    howItWorks: "Пост с треком в Telegram → индексатор читает аудио, визуалы и теги → локальная медиатека → Python выбирает следующий трек → Liquidsoap воспроизводит и сводит переходы → AAC-LC → HLS-сегменты → Caddy → браузер или PWA с одним постоянным <audio> подключается к текущему моменту эфира, визуалы MP4 вращаются независимо.",
    results: [
      "Эфир в один клик: открыл ссылку — и слушаешь тот же момент, что и все",
      "Telegram работает как CMS: новый пост сам попадает в эфир, без админки",
      "Эфир не зависит от доступности Telegram — медиатека зеркалируется локально",
      "Play после паузы возвращает в текущий эфир, а не к старой позиции трека",
      "Устойчивый клиент: фоновый режим, PWA и gesture gate для iOS и WebView",
      "Operational layer: посетители, реальные HLS-слушатели, сессии за день и peak"
    ],
    stack: ["Python", "Liquidsoap", "HLS", "AAC-LC", "Caddy", "FastAPI", "Telethon", "Telegram", "JavaScript", "PWA", "Web Audio"],
    github: null,
    role: "Идея и продукт, индексатор Telegram-канала, теговая модель и алгоритм ранжирования эфира, FastAPI-стриминг, браузерный плеер и PWA, переход на архитектуру Liquidsoap + HLS + Caddy, локальная медиатека и operational layer.",
    status: "Live · radio.arsenynn.quest",
    channelPost: {
      label: "Подробный разбор в Telegram-канале",
      url: "https://t.me/annsflow/93",
      text: "Серия постов #WithoutStreaming: радио из Telegram в один клик, ручки настроения, конвейер индексатор → плейлист → стрим, плеер и PWA, переход к общему эфиру."
    },
    videoHeading: "Как эфир выглядит на телефоне",
    videos: [
      {
        mp4: "../images/without-streaming/video/demo.mp4",
        webm: "../images/without-streaming/video/demo.webm",
        poster: "../images/without-streaming/video/demo-poster.webp",
        portrait: true,
        caption: "Запись экрана iPhone: Without Streaming в браузере — один общий эфир, полноэкранные визуалы и управление одной кнопкой."
      }
    ],
    liveLink: {
      label: "Живой проект",
      url: "https://radio.arsenynn.quest",
      text: "Without Streaming — включить эфир в браузере или на телефоне."
    },
    images: [
      {
        src: "../images/without-streaming/live-night-drive.webp",
        alt: "Интерфейс Without Streaming в браузере: ночной визуал, название источника и кнопка паузы",
        caption: "Live-эфир в браузере: полноэкранный визуал, источник клипа под логотипом, текущий трек внизу и одна кнопка Play/Pause."
      },
      {
        src: "../images/without-streaming/live-radio-show.webp",
        alt: "Without Streaming: визуал из проекта workflow@arsenynn поверх общего эфира",
        caption: "Визуалы — короткие вырезки из проектов @arsenynn и workflow@arsenynn — вращаются независимо от музыкальной программы."
      },
      {
        src: "../images/without-streaming/live-crowd.webp",
        alt: "Without Streaming: визуал с вечеринки, подпись источника и текущий трек эфира",
        caption: "Минимальный интерфейс: слушатель подключается к текущему моменту эфира, без плейлистов и лишних кнопок."
      },
      {
        src: "../images/without-streaming/live-visual.webp",
        alt: "Without Streaming: художественный визуал в полноэкранном режиме радио",
        caption: "Музыка и визуал вместе сохраняют настроение момента — канал превращается в медиа-объект, а не ленту постов."
      },
      {
        src: "../images/without-streaming/cover.webp",
        alt: "Логотип Without Streaming — радиостанции из Telegram-канала",
        caption: "Without Streaming: музыкальный Telegram-канал, который стал радиостанцией с одним общим эфиром."
      }
    ],
    modules: [
      {
        title: "Telegram as CMS",
        items: [
          "Telegram-канал — единственная точка публикации: новый пост с треком автоматически становится частью эфира.",
          "Индексатор пробегает канал, находит аудио и GIF/MP4-визуалы и читает теги.",
          "Теги стиля и энергии: #J / #H / #JxH и #drift / #drive / #dd, смешанные треки работают как мосты.",
          "Каталог собирается в playlist.json без отдельной админки и медиатеки.",
          "Telegram из runtime-зависимости превратился в CMS и источник происхождения материала."
        ]
      },
      {
        title: "Mood Engine (v1)",
        items: [
          "Две ручки как на пульте: Jazz ⇄ Hip-hop и Drifting ⇄ Driving.",
          "/playlist?mix=&energy= пересобирает порядок треков под положение ползунков.",
          "Положение ручек превращается в коэффициенты bias, веса трека берутся из тегов, итог — score.",
          "Сначала профильные треки и мосты, затем подмешиваются остальные, чтобы эфир не зацикливался.",
          "Auto Flow и Auto Energy двигают ручки плавно и не ломают текущий трек."
        ]
      },
      {
        title: "Telegram Streaming (v1)",
        items: [
          "FastAPI + Telethon: /audio/{id} читает трек из Telegram порциями и сразу отдаёт в браузер.",
          "StreamingResponse с audio/mpeg: воспроизведение начинается до полной загрузки файла.",
          "Аудио не сохраняется на диск — минимум инфраструктуры и минимум следов.",
          "/gif/{id} отдаёт визуалы с кэшем на диске, потому что они короткие и повторяются.",
          "Визуалы как телеканал: каждый повторяется три раза, стартовый набор перемешан."
        ]
      },
      {
        title: "Radio Station Core (v2)",
        items: [
          "Один общий эфир для всех: слушатель подключается к тому, что звучит прямо сейчас.",
          "Python решает, что должно прозвучать дальше; Liquidsoap — фактическая точка эфира.",
          "Liquidsoap непрерывно воспроизводит треки и делает переходы между ними.",
          "Сигнал кодируется в AAC-LC и нарезается в HLS-сегменты для live-доставки.",
          "Caddy раздаёт HLS, сайт и статические файлы; медиатека зеркалируется локально."
        ]
      },
      {
        title: "Player, PWA & Platforms",
        items: [
          "v1: плеер как state machine idle → buffering → playing, кроссфейд и префетч следующего трека.",
          "Режим «Слушать в фоне»: облегчённый профиль на простом <audio> для iOS и WebView.",
          "PWA для предсказуемого запуска и более долгой жизни сессии.",
          "Gesture gate для Telegram Mini App и Safari WebView: визуалы ждут первого жеста вместо «молча не играет».",
          "v2: один постоянный <audio> на HLS, Play после паузы возвращает в текущий эфир."
        ]
      },
      {
        title: "Operations & Roadmap",
        items: [
          "Operational layer: сколько людей на сайте и сколько реально слушает HLS.",
          "Дневное количество listening sessions и peak слушателей.",
          "Визуалы подготовлены локально и раздаются как статические MP4 независимо от музыкальной программы.",
          "Следующий этап: самовосстановление после падений процессов, потери сети и reboot.",
          "Замер пропускной способности домашнего сервера, затем серверный Programming Engine для общего эфира."
        ]
      }
    ],
    technicalScope: [
      "Telegram-канал как CMS, индексатор аудио и GIF/MP4-визуалов, теговая модель стиля и энергии.",
      "playlist.json и /playlist?mix=&energy= с ранжированием по bias × веса тегов = score.",
      "Смешивание профильных треков, мостов и остального каталога; Auto Flow / Auto Energy.",
      "FastAPI + Telethon: StreamingResponse, chunked-отдача аудио без записи на диск, Cache-Control no-store.",
      "Кэш визуалов на диске и ротация «телеканала» с перемешанным стартовым набором.",
      "Браузерный плеер v1: state machine, кроссфейд, префетч, фон-режим на <audio>.",
      "PWA и gesture gate для Telegram Mini App и Safari WebView с осмысленной деградацией autoplay.",
      "v2: Telegram → локальная медиатека → Python → Liquidsoap → AAC-LC → HLS → Caddy.",
      "Один общий live-эфир, подключение к текущему моменту и возврат в эфир после паузы.",
      "Независимая ротация статических MP4-визуалов у каждого слушателя.",
      "Метрики: посетители сайта, реальные HLS-слушатели, listening sessions за день и peak.",
      "Roadmap: auto-recovery после сбоев процессов, сети и reboot, нагрузочный замер домашнего сервера, Programming Engine."
    ]
  },
  {
    id: "annbot",
    category: "09 · LLM + Memory",
    title: "ann — LLM-бот с памятью и рециркуляцией контента",
    summary: "Telegram-бот ann для сообщества «Бессмысленность и скоротечность»: LLM-собеседник с собственной памятью в SQLite, накопительными профилями участников, смысловым поиском по медиатеке и философией, загружаемой в runtime как правила речи. Бот отвечает на ситуацию разговора, а не на последнюю реплику, и возвращает старые материалы в поток, когда для них появляется место.",
    preview: "Telegram + SQLite-память + профили участников + embeddings-поиск по медиатеке + философия как runtime-правила генерации.",
    problem: "В соцсетях материал тонет в потоке через день после публикации, а обычный чат-бот забывает собеседника после каждого окна диалога и отвечает безлико. Нужна была среда, где разговор не обнуляется, контент продолжает жить годами, а бот говорит в узнаваемом голосе проекта — без цитирования правил и без хаоса из дублей и повторов.",
    solution: "Построена многослойная система поверх Telegram: SQLite хранит сообщения со структурой ответов, медиа, профили и их evidence; перед ответом бот собирает контекст из базы и профиль человека; медиатека проиндексирована с embeddings и возвращается в разговор по смысловой близости; философия проекта хранится в JSON, загружается в runtime и превращается в правила генерации. Тяжёлые операции вынесены в фон, а база и код защищают систему от дублей и повторных действий.",
    howItWorks: "Сообщение в чате → запись в SQLite (текст, автор, reply, entities, медиа) → решение, нужно ли отвечать → контекст из истории чата с лимитами → блок профиля участника → system prompt с философией ann → LLM-ответ → поиск релевантного контента по embeddings → возврат материала в чат. В фоне: накопление реплик → пересборка профиля, ротация контента и Stories с cooldown.",
    results: [
      "Разговор не обнуляется: бот помнит историю, авторов и структуру ответов",
      "Ответы адресны: профиль участника накапливается и уточняется по мере общения",
      "Медиатека рециркулируется: материал возвращается в разговор по смысловой близости",
      "Узнаваемый голос: философия загружается в runtime и управляет стилем речи",
      "Нет дублей и лишних действий: UNIQUE, INSERT OR IGNORE и cooldown",
      "Тяжёлая логика в фоне — диалог остаётся быстрым, сбои не ломают поток"
    ],
    stack: ["Python", "Telegram Bot API", "OpenAI API", "SQLite (WAL)", "Embeddings", "Prompt engineering", "JSON config", "Telegram Stories"],
    github: null,
    role: "Идея и концепция среды, архитектура слоёв, схема памяти SQLite, сборка контекста и профилей, embeddings-поиск по медиатеке, загрузка философии в runtime и prompt-правила, медиа-слой и Stories, защита от дублей, фоновые очереди и серия разборов в Telegram-канале.",
    status: "Live · Telegram-сообщество",
    channelPost: {
      label: "Подробный разбор в Telegram-канале",
      url: "https://t.me/annsflow/107",
      text: "Серия постов #annBot: идея среды вместо книги, слои системы, память и профили, логика ответов, рециркуляция контента, философия в коде и защита от хаоса."
    },
    images: [
      {
        src: "../images/annbot/dialog-control.webp",
        alt: "Диалог с ботом ann в чате «Бессмысленность и скоротечность» об иллюзии контроля",
        caption: "Голос проекта в действии: ann отвечает не шаблоном ассистента, а в своей философии — даже на попытку «отключить» бота."
      },
      {
        src: "../images/annbot/dialog-who.webp",
        alt: "Бот ann отвечает участникам чата с опорой на контекст разговора",
        caption: "Ответ на ситуацию разговора: бот учитывает цепочку реплик и отвечает разным участникам в одном голосе."
      },
      {
        src: "../images/annbot/dialog-time.webp",
        alt: "Бот ann отвечает на вопрос участника, связанный с постом канала",
        caption: "Разговор вокруг материала: вопрос под репостом из канала, ответ бота в логике «смысла и бессмысленности»."
      },
      {
        src: "../images/annbot/dialog-welcome.webp",
        alt: "Бот ann приветствует нового участника чата",
        caption: "События чата тоже часть среды: новый участник получает приветствие в стиле проекта."
      }
    ],
    modules: [
      {
        title: "Memory Layer",
        items: [
          "SQLite как собственная память бота: сообщения, пользователи, профили, evidence, медиа и служебное состояние.",
          "ann_messages хранит чат, сообщение, автора, время, текст, reply и entities — структуру и форму разговора.",
          "Нормализация типов и безопасные дефолты при записи: событие сохраняется, даже если часть полей пуста.",
          "Разделение по chat_id, чтобы разные диалоги не смешивались.",
          "SQLite в режиме WAL: запись не блокирует систему целиком."
        ]
      },
      {
        title: "Context & Response",
        items: [
          "Сначала решение, нужно ли отвечать, и только потом генерация.",
          "Контекст собирается из базы с лимитами по числу сообщений и символам, чтобы prompt не раздувался.",
          "Отдельный блок профиля подбирает тон и факты под последнее сообщение участника.",
          "Финальный пакет: system prompt с характером ann, profile block и контекст разговора.",
          "Бот отвечает на ситуацию разговора, а не на одну последнюю реплику."
        ]
      },
      {
        title: "Profiles & Evidence",
        items: [
          "Профиль — обновляемая модель присутствия человека, а не анкета, заполненная один раз.",
          "Счётчик новых реплик и порог PROFILE_UPDATE_EVERY: профиль не пересобирается на каждое сообщение.",
          "Пересборка вынесена в фоновую очередь queue_profile_update.",
          "ann_profiles хранит текущее описание, ann_profile_evidence — основания, из которых оно выросло.",
          "Профили делают ответы адресными, но не цитируются дословно."
        ]
      },
      {
        title: "Content Recirculation",
        items: [
          "Отдельная база контента с описаниями материалов и embeddings для смыслового поиска.",
          "Ленивая однократная загрузка индекса content.json в память.",
          "pick_relevant_content ищет top-k материалов, близких к текущей теме разговора.",
          "Найденный материал отправляется обратно в чат — старые вещи получают новую точку входа.",
          "Медиатека работает как живая среда, а не мёртвый архив."
        ]
      },
      {
        title: "Philosophy as Runtime",
        items: [
          "Философия проекта хранится в ann_philosophy.json и загружается в runtime-состояние.",
          "Fallback на кэш: при ошибке чтения основной файл не теряется.",
          "Структуры identity, postulates, style, channels и primary_source управляют поведением.",
          "Prompt-правила: не цитировать внутреннее знание и профиль дословно, отвечать по смыслу последнего сообщения.",
          "Лексические опоры стиля превращают мировоззрение в механизм отбора фраз и интонации."
        ]
      },
      {
        title: "Media, Stories & Reliability",
        items: [
          "ann_message_media фиксирует voice, audio, photo, video_note и sticker с file_id, подписью и источником.",
          "UNIQUE(chat_id, msg_id, media_type) и INSERT OR IGNORE отсекают повторные события Telegram.",
          "ann_story_state управляет публикацией Stories: источник, использованный файл и cooldown_until.",
          "Тяжёлые операции — очереди и отложенные обновления вне диалога.",
          "Паузы, fallback-сценарии и восстановление состояния при сбоях внешних сервисов."
        ]
      }
    ],
    technicalScope: [
      "Telegram Bot: сообщения, команды, reply-цепочки, медиа и события участников чата.",
      "SQLite (WAL): ann_messages, ann_message_media, ann_profiles, ann_profile_evidence, ann_profile_counters, ann_story_state.",
      "Сохранение reply_to_msg_id и entities_json для памяти о структуре и форме разговора.",
      "Сборка контекста из базы с лимитами ANN_CONTEXT_MSG_LIMIT и ANN_CONTEXT_MAX_CHARS.",
      "Profile prompt block с бюджетом токенов для обычных ответов и упоминаний.",
      "Многослойный prompt: system prompt, profile block, контекст разговора.",
      "Накопительное профилирование с порогом обновления и фоновой очередью пересборки.",
      "Content index в JSON с embeddings, top-k смысловой поиск и отправка материала в чат.",
      "ann_philosophy.json с fallback-кэшем: identity, postulates, style, channels, primary_source.",
      "Prompt-правила против дословного цитирования внутреннего знания и профиля.",
      "Медиа-слой: voice, audio, photo, video_note, sticker с дедупликацией по file_unique_id и сообщению.",
      "Stories: состояние публикации, источник материала и cooldown_until.",
      "Защита от хаоса: UNIQUE, INSERT OR IGNORE, cooldown, фоновые очереди, fallback и восстановление состояния."
    ]
  },
  {
    id: "livecontext",
    category: "10 · Real-time AI + Knowledge",
    title: "LiveContext — живой разговор, связанный с памятью проекта",
    summary: "Система реального времени, которая слушает звонок двумя независимыми аудиопотоками, локально транскрибирует речь, отслеживает состояние разговора и прямо во время звонка передаёт в LLM нужный контекст проекта из Obsidian. Модель уже знает номер заказа, претензии, сроки и историю обращений — пока разговор ещё идёт.",
    preview: "Микрофон → YOU, звонок → REMOTE → локальная транскрибация → состояние разговора → контекст из Obsidian → подсказки LLM во время звонка.",
    problem: "Сохранить разговор после звонка — уже решённая задача (VoxBase), но контекст часто нужен прямо во время разговора: собеседник спрашивает о прошлой неделе, появляется новое возражение или нужен конкретный факт проекта. Информация уже лежит в Obsidian, документах и прошлых разговорах, но искать её вручную, пока человек ждёт ответа, почти бессмысленно.",
    solution: "LiveContext разделяет голоса ещё до транскрибации: микрофон идёт отдельным потоком YOU, звук приложения звонка — через виртуальное аудиоустройство потоком REMOTE. Каждый поток проходит свою обработку и очередь, затем локальную транскрибацию. Система ведёт состояние разговора, выбирает только нужный контекст конкретного проекта из Obsidian и передаёт его в модель вместе с текущей репликой — без поиска LLM по всей базе знаний и без автоматической перезаписи памяти.",
    howItWorks: "Микрофон → YOU, Телемост или браузер → Loopback «LiveContext Remote» → REMOTE → отдельная обработка, определение речи и очередь для каждого потока → локальная транскрибация → состояние разговора → выбор релевантного контекста проекта в Obsidian → LLM получает реплику и контекст → подсказка во время звонка.",
    results: [
      "Нужные факты проекта появляются во время разговора, а не после него",
      "Кто говорит — известно из источника звука, а не угадывается по тексту",
      "Модель знает номер заказа, претензии, сроки и историю обращений по ходу звонка",
      "Obsidian работает как оперативная память, а не только как архив",
      "LLM получает только контекст текущего проекта, а не всю базу знаний",
      "Локальная транскрибация двух потоков без внешнего API"
    ],
    stack: ["Python", "Whisper (local)", "VAD", "Loopback", "Obsidian", "LLM", "macOS audio", "Markdown"],
    github: null,
    role: "Архитектура real-time конвейера, разделение аудиопотоков YOU / REMOTE и виртуальное устройство, обработка и очереди для каждого потока, локальная транскрибация, модель состояния разговора, выбор контекста из Obsidian, правила работы LLM с памятью и серия разборов в Telegram-канале.",
    status: "Private · в разработке",
    channelPost: {
      label: "Подробный разбор в Telegram-канале",
      url: "https://t.me/annsflow/186",
      text: "Серия постов #LiveContext: зачем памяти работать во время разговора, два аудиопотока YOU / REMOTE и LiveContext в реальном звонке."
    },
    videoHeading: "LiveContext в реальном разговоре",
    videos: [
      {
        mp4: "../images/livecontext/video/demo.mp4",
        webm: "../images/livecontext/video/demo.webm",
        poster: "../images/livecontext/video/demo-poster.webp",
        link: { label: "Пост с видео в Telegram-канале", url: "https://t.me/annsflow/189" },
        caption: "Реальный звонок по претензии о недоставленном заказе: LiveContext анализирует разговор в реальном времени и передаёт его в модель вместе с контекстом проекта из Obsidian — модель подсказывает формулировки и следующие вопросы, пока разговор ещё идёт."
      }
    ],
    images: [
      {
        src: "../images/livecontext/live-hint-claim.webp",
        alt: "Подсказка LiveContext во время звонка с номером претензии и сроками из контекста проекта",
        caption: "Подсказка во время звонка: модель уже знает номер претензии, установленный срок передачи товара и формулирует точные вопросы оператору."
      },
      {
        src: "../images/livecontext/live-hint-next-step.webp",
        alt: "LiveContext предлагает следующий шаг разговора и формулировку для фиксации в обращении",
        caption: "Следующий шаг: готовая формулировка для фиксации в обращении и вопрос, который нужно задать, прежде чем завершать разговор."
      },
      {
        src: "../images/livecontext/cover.webp",
        alt: "Схема LiveContext: два голосовых потока, обработка и вывод контекста на экран",
        caption: "LiveContext: два голосовых потока сходятся в одну систему, которая выводит нужный контекст прямо во время разговора."
      }
    ],
    modules: [
      {
        title: "Dual Audio Capture",
        items: [
          "Голоса разделяются ещё до транскрибации — без программного угадывания спикеров.",
          "YOU: физический микрофон, AirPods или USB-микрофон.",
          "REMOTE: звук Телемоста или браузера через виртуальное устройство «LiveContext Remote» в Loopback.",
          "Компьютер получает две независимые аудиодорожки вместо одной смешанной.",
          "Источник звука сразу задаёт роль реплики: «клиент сказал» и «я сказал» не путаются."
        ]
      },
      {
        title: "Stream Processing & Transcription",
        items: [
          "Для каждого потока — своя обработка, свои параметры определения речи и своя очередь.",
          "Локальная транскрибация без внешнего API.",
          "Два непрерывных потока обрабатываются так, чтобы не положить весь компьютер.",
          "Whisper — только одна из частей: основная сложность в подготовке потоков и их синхронной обработке.",
          "Опыт локального конвейера VoxBase перенесён в режим реального времени."
        ]
      },
      {
        title: "Conversation State",
        items: [
          "Разговор рассматривается не как transcript, а как текущее состояние.",
          "Роли YOU / REMOTE — часть состояния: одинаковый текст означает разное в зависимости от того, кто говорит.",
          "Система отслеживает смену темы, новые возражения и вопросы о прошлых договорённостях.",
          "Цепочка: разговор → транскрибация → состояние → контекст проекта → нужная информация."
        ]
      },
      {
        title: "Context Selection",
        items: [
          "LiveContext определяет, какой контекст нужен именно сейчас, по текущей реплике и состоянию.",
          "LLM не ищет по всей базе знаний — она получает ограниченный контекст конкретного проекта.",
          "Одна реплика превращается в адресный запрос к нужным заметкам Obsidian.",
          "Меньше шума в prompt — точнее подсказка в момент, когда собеседник ждёт ответа."
        ]
      },
      {
        title: "Obsidian as Working Memory",
        items: [
          "Obsidian превращён из архива в оперативную память проекта.",
          "В контекст попадают факты проекта, документы, правила и прошлые разговоры.",
          "Транскрипты VoxBase и заметки проекта работают как единая память.",
          "Память не переписывает себя автоматически: изменения в базе знаний остаются под контролем человека."
        ]
      },
      {
        title: "Live Assist",
        items: [
          "Разговор и актуальный контекст проекта передаются в модель по ходу звонка.",
          "Модель знает номер заказа, претензии, сроки и историю обращений.",
          "Подсказки формулировок и следующих вопросов появляются, пока разговор ещё идёт.",
          "Проверено на реальном звонке по претензии о недоставленном заказе."
        ]
      }
    ],
    technicalScope: [
      "Real-time конвейер: два аудиопотока → транскрибация → состояние разговора → контекст проекта → LLM.",
      "Раздельный захват: физический микрофон (YOU) и звук приложения звонка (REMOTE).",
      "Виртуальное аудиоустройство «LiveContext Remote» в Loopback для Телемоста и браузера.",
      "Независимая обработка, параметры определения речи и очереди для каждого потока.",
      "Локальная транскрибация без внешнего API, контроль нагрузки на компьютер.",
      "Модель состояния разговора с ролями YOU / REMOTE.",
      "Выбор релевантного контекста из Obsidian по текущей реплике, без поиска LLM по всей базе.",
      "Obsidian как оперативная память: заметки проекта, документы, правила и транскрипты прошлых разговоров.",
      "Память без автоматической самоперезаписи: изменения базы знаний — под контролем человека.",
      "Связка с VoxBase (память после разговора) и Obsidian RAG Core (поиск по базе знаний)."
    ]
  },
  {
    id: "mcp",
    category: "11 · MCP + Knowledge Systems",
    title: "Obsidian MCP — доступ LLM к проектной памяти",
    summary: "MCP-сервер, через который языковые модели работают с реальным Obsidian-vault на Mac: ищут по проектам, открывают implementation_plan.md и decisions_log.md, собирают контекст и правят заметки по прямому запросу. Память остаётся в локальных файлах и продолжает быть source of truth, а внешняя LLM достаёт её через Cloudflare, VPS и reverse SSH — без копирования vault в облако.",
    preview: "LLM → MCP server → Obsidian Local REST API → vault: search-first доступ к проектной памяти, которая остаётся локальной.",
    problem: "Проектов, решений и заметок стало слишком много, чтобы держать контекст в голове: после нескольких недель на другой задаче его приходилось восстанавливать заново. Вся нужная информация уже лежала в Obsidian, но языковая модель её не видела — каждый раз нужно было вручную искать и копировать файлы в диалог, а симметричная синхронизация Obsidian и Todoist порождала вопрос, какая из систем главная.",
    solution: "Сначала разделены память и выполнение: Obsidian хранит архитектуру, планы и историю решений, Todoist — только то, что нужно сделать сейчас, по правилу «один факт = один владелец». Затем построен MCP-сервер как интерфейс между LLM и Obsidian: модель получает набор инструментов (структура проекта, поиск по vault, чтение и правка заметки) и сама добирается до нужных документов по протоколу «сначала поиск, потом чтение». Для доступа внешних моделей сервер на Mac опубликован через Cloudflare и VPS reverse SSH-туннелем, а vault никогда не покидает компьютер.",
    howItWorks: "Вопрос о проекте → MCP-сессия (initialize → tools/list) → LLM выбирает инструмент → поиск в области проекта одним широким запросом → MCP возвращает подходящие файлы и фрагменты → модель читает только нужные документы → ответ. Транспорт: LLM / MCP-клиент → Cloudflare → VPS → reverse SSH → MCP server на Mac → Obsidian Local REST API → vault.",
    results: [
      "LLM восстанавливает состояние проекта из реальных файлов — без ручного копирования в чат",
      "Vault остаётся локальным source of truth: в облаке нет второй копии памяти",
      "Search-first протокол: модель читает только нужные документы, а не весь vault",
      "Один факт = один владелец: Obsidian хранит память, Todoist управляет выполнением",
      "Удалённая модель работает с Obsidian на Mac через Cloudflare и reverse SSH",
      "Туннель и сервер самовосстанавливаются: LaunchAgent и autossh"
    ],
    stack: ["MCP", "Obsidian", "Obsidian Local REST API", "LLM", "Cloudflare", "VPS", "reverse SSH", "autossh", "LaunchAgent", "Todoist", "Markdown"],
    github: null,
    role: "Архитектура разделения памяти и выполнения, правило «один факт = один владелец», MCP-сервер и набор инструментов для Obsidian, search-first протокол доступа, транспорт Cloudflare → VPS → reverse SSH → Mac, автозапуск и восстановление, переход к Obsidian Knowledge Agent и серия разборов в Telegram-канале.",
    status: "Private · ежедневное использование",
    channelPost: {
      label: "Подробный разбор в Telegram-канале",
      url: "https://t.me/annsflow/171",
      text: "Серия постов #ObsidianMCP: разделение памяти и выполнения, доступ LLM к Obsidian, search-first поиск, путь запроса до локального Mac и следующий этап — Knowledge Agent."
    },
    images: [
      {
        src: "../images/mcp/cover.webp",
        alt: "Схема Obsidian MCP: LLM, Cloudflare, VPS, SSH-туннель, Mac и Obsidian vault",
        caption: "Путь запроса: внешняя LLM → Cloudflare → VPS → reverse SSH → MCP-сервер на Mac → Obsidian vault, который остаётся локальным."
      }
    ],
    modules: [
      {
        title: "Memory vs Execution",
        items: [
          "Obsidian — проектная память: архитектура, планы реализации, технические паспорта, история решений и Canvas.",
          "Todoist — execution-слой: только то, что нужно сделать сейчас, а не вторая копия памяти.",
          "Отказ от симметричной синхронизации, где непонятно, какая система главная.",
          "Правило «один факт = один владелец»: решения принадлежат памяти, действия — выполнению.",
          "Состояние проекта живёт в файлах: implementation_plan.md и decisions_log.md."
        ]
      },
      {
        title: "MCP Tools for Obsidian",
        items: [
          "MCP-сервер работает как формальный интерфейс между языковой моделью и Obsidian.",
          "Инструменты: структура проекта, поиск заметки, поиск по vault, чтение файла.",
          "Правка обычной заметки — только по прямому запросу.",
          "Весь Obsidian не загружается в модель — LLM получает инструменты, а не содержимое.",
          "Сервер обращается к vault через Obsidian Local REST API."
        ]
      },
      {
        title: "Search-first Protocol",
        items: [
          "Сначала задаётся область поиска — папка конкретного проекта.",
          "Один широкий запрос с OR-условиями вместо перебора предполагаемых имён файлов.",
          "Из результатов читаются только наиболее релевантные документы.",
          "Не читать весь проект заранее и не продолжать запросы после 429.",
          "Протокол появился после реального rate limit Obsidian MCP и экономит контекст модели."
        ]
      },
      {
        title: "MCP Session Flow",
        items: [
          "Клиент создаёт MCP-сессию через initialize и получает mcp-session-id.",
          "tools/list отдаёт модели список доступных инструментов.",
          "tools/call вызывает конкретный инструмент с параметрами.",
          "Модель сама решает, какую «дверь» в память открыть, и идёт дальше по необходимости.",
          "Цепочка: вопрос → поиск → найденные файлы → чтение → сбор контекста → ответ."
        ]
      },
      {
        title: "Remote Transport",
        items: [
          "Публичный MCP endpoint принимает Cloudflare и передаёт трафик на VPS через cloudflared.",
          "На VPS нет MCP-сервера: порт создаётся reverse SSH-туннелем, который поднимает сам Mac.",
          "Туннель доступен только внутри VPS и ведёт на локальный MCP-порт Mac.",
          "VPS — только транспорт: не хранит vault, не индексирует заметки, не копирует память.",
          "MCP server и туннель запускаются LaunchAgent, autossh восстанавливает соединение после обрывов."
        ]
      },
      {
        title: "Next: Knowledge Agent",
        items: [
          "MCP хорошо решает задачу доступа, но модель сама собирает контекст.",
          "Obsidian Knowledge Agent добавляет собственный поиск и индекс, понимание структуры проектов, связей и Canvas.",
          "Правила источников и границ проекта определяют, какой контекст передавать модели.",
          "Чтение, рассуждение и изменение разделены: правки — только через контролируемый механизм с правилами безопасности.",
          "MCP остаётся одним из способов подключения: LLM → Knowledge Agent → проектная память."
        ]
      }
    ],
    technicalScope: [
      "Архитектура «память отдельно от выполнения»: Obsidian (source of truth) и Todoist (execution).",
      "Правило «один факт = один владелец», состояние проекта в implementation_plan.md и decisions_log.md.",
      "MCP-сервер для Obsidian: инструменты структуры проекта, поиска по vault, чтения и правки заметок.",
      "Интеграция с Obsidian Local REST API, работа с реальным vault без копий.",
      "Search-first протокол: scoped searchInPath, широкий OR-запрос, чтение только релевантных файлов.",
      "Обработка rate limit: без перебора имён файлов и без повторных запросов после 429.",
      "MCP-сессия: initialize, mcp-session-id, tools/list, tools/call.",
      "Транспорт: MCP-клиент → Cloudflare → cloudflared на VPS → reverse SSH → MCP server на Mac.",
      "Туннель доступен только внутри VPS; VPS не хранит и не индексирует данные.",
      "LaunchAgent для MCP-сервера и туннеля, autossh для автоматического восстановления.",
      "Roadmap: Obsidian Knowledge Agent — собственный индекс, структура проектов и Canvas, правила источников, контролируемые изменения."
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
        <h3>${escapeHtml(project.videoHeading || "Как система работает в реальном браузерном контуре")}</h3>
      </div>
      <div class="video-grid">
        ${project.videos.map((video) => `
          <figure class="proof-video${video.portrait ? " proof-video-portrait" : ""}">
            <video controls preload="metadata" poster="${escapeHtml(video.poster)}">
              <source src="${escapeHtml(video.webm)}" type="video/webm">
              <source src="${escapeHtml(video.mp4)}" type="video/mp4">
            </video>
            <figcaption>${escapeHtml(video.caption)}${video.link ? ` <a href="${escapeHtml(video.link.url)}" target="_blank" rel="noopener">${escapeHtml(video.link.label)} ↗</a>` : ""}</figcaption>
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

function filesMarkup(project) {
  if (!project.files?.length) return "";
  return `
    <section class="case-files">
      <div class="case-section-head">
        <span class="case-category">Файлы проекта</span>
        <h3>Рабочие конфиги, которые можно открыть или скачать</h3>
      </div>
      <div class="case-files-grid">
        ${project.files.map((file) => `
          <article class="case-file-card">
            <h4>${escapeHtml(file.label)}</h4>
            <p>${escapeHtml(file.desc)}</p>
            <code>${escapeHtml(file.name)}</code>
            <div class="case-file-actions">
              <a href="${escapeHtml(file.href)}" target="_blank" rel="noopener">Открыть ↗</a>
              <a href="${escapeHtml(file.href)}" download="${escapeHtml(file.name)}">Скачать</a>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function pdfFilesMarkup(project) {
  if (!project.files?.length) return "";
  const base = "https://portfolio.arsenynn.com/";
  return `
    <section class="pdf-case-block">
      <h4>Файлы проекта</h4>
      <ul>${project.files.map((file) => `<li>${escapeHtml(file.label)} — ${escapeHtml(base + file.href.replace(/^\.\.\//, ""))}</li>`).join("")}</ul>
    </section>
  `;
}

function liveLinkMarkup(project) {
  if (!project.liveLink) return "";
  return `
    <a class="case-channel-link" href="${escapeHtml(project.liveLink.url)}" target="_blank" rel="noopener">
      <span>${escapeHtml(project.liveLink.label)}</span>
      <strong>${escapeHtml(project.liveLink.text)}</strong>
      <em>Открыть ↗</em>
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
          <figcaption>${escapeHtml(video.caption)}${video.link ? ` ${escapeHtml(video.link.url)}` : ""}</figcaption>
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

            ${project.liveLink ? `
              <section class="pdf-case-block">
                <h4>${escapeHtml(project.liveLink.label)}</h4>
                <p>${escapeHtml(project.liveLink.text)}</p>
                <p>${escapeHtml(project.liveLink.url)}</p>
              </section>
            ` : ""}

            ${pdfFilesMarkup(project)}

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

      ${liveLinkMarkup(project)}

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

      ${filesMarkup(project)}

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
