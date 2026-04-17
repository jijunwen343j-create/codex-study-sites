const STORAGE_KEY = "advanced-ukrainian-vocab-notebook-store-v1";
const app = document.getElementById("app");

const createWord = (id, word, definitionEn, definitionZh, noteZh = "") => ({
  id,
  word,
  definitionEn,
  definitionZh,
  noteZh,
});

const categories = [
  {
    id: "alltag-und-beziehungen",
    nameZh: "日常与人际",
    nameEn: "Повсякденне життя та стосунки",
    icon: "🧑",
    accent: "#2ABBA7",
    tint: "rgba(42, 187, 167, 0.1)",
    topics: [
      {
        id: "menschen-und-kontakte",
        number: 1,
        title: "Люди та контакти",
        promptZh:
          "乌克兰语的人际主题适合从“性格 + 关系 + 互动动词”一起记。这样你在介绍一个人、谈家人朋友、描述相处状态时，会更快连成句子。",
        promptEn:
          "Ukrainian relationship vocabulary works best when you learn personality words, family words and interaction verbs together. That makes it easier to describe people and relationships naturally.",
        sections: [
          {
            id: "personen-beschreiben",
            tabLabel: "Опис людей",
            tabLabelZh: "人物描述",
            sectionTitle: "A. Опис людей",
            sectionTitleZh: "人物描述",
            words: [
              createWord("druzhnii", "дружній", "kind and pleasant in the way someone treats other people", "友善的"),
              createWord("nadiinyi", "надійний", "someone you can trust and depend on", "可靠的"),
              createWord("soromiazlyvyi", "сором'язливий", "quiet and a little unsure around other people", "害羞的"),
              createWord("vidkrytyi", "відкритий", "ready to speak honestly and directly", "开放的 / 坦率的"),
              createWord("terpliachyi", "терплячий", "calm and able to wait without anger", "有耐心的"),
              createWord("chesnyi", "чесний", "truthful and not hiding things", "诚实的"),
            ],
          },
          {
            id: "familie-und-freunde",
            tabLabel: "Родина і друзі",
            tabLabelZh: "家人与朋友",
            sectionTitle: "B. Родина і друзі",
            sectionTitleZh: "家人与朋友",
            words: [
              createWord("rodychi", "родичі", "people from your family", "亲戚"),
              createWord("braty-i-sestry", "брати й сестри", "the brothers and sisters of a person", "兄弟姐妹"),
              createWord("ladnaty", "ладнати", "to get along well with someone", "相处融洽"),
              createWord("svarytysia", "сваритися", "to argue with someone loudly or emotionally", "争吵"),
              createWord("doviriaty", "довіряти", "to believe that someone is honest or reliable", "信任"),
              createWord("zvjazatysia", "зв'язатися", "to contact someone or send a message", "联系 / 回消息"),
            ],
          },
        ],
      },
      {
        id: "gefuehle-und-routinen",
        number: 2,
        title: "Почуття та рутини",
        promptZh:
          "情绪词和日常动作词是最适合乌克兰语起步阶段高频重复的一组。会说感受，也会描述每天在做什么，口语和听力都会起得更快。",
        promptEn:
          "Feelings and daily routines are among the most frequent beginner topics. They help you talk about how you feel and what you do every day.",
        sections: [
          {
            id: "gefuehle-und-reaktionen",
            tabLabel: "Почуття",
            tabLabelZh: "情绪反应",
            sectionTitle: "A. Почуття та реакції",
            sectionTitleZh: "情绪与反应",
            words: [
              createWord("shchaslyvyi", "щасливий", "feeling full of joy or satisfaction", "开心的"),
              createWord("nervovyi", "нервовий", "feeling tense and internally uneasy", "紧张的"),
              createWord("rozcharovanyi", "розчарований", "sad because reality was worse than expected", "失望的"),
              createWord("polehshenyi", "полегшений", "calm because a worry has passed", "如释重负的"),
              createWord("serdytyi", "сердитий", "very angry or annoyed", "愤怒的"),
              createWord("hordyi", "гордий", "satisfied with yourself or an achievement", "自豪的"),
            ],
          },
          {
            id: "alltag-und-gewohnheiten",
            tabLabel: "Щоденні дії",
            tabLabelZh: "日常习惯",
            sectionTitle: "B. Щоденні дії та звички",
            sectionTitleZh: "日常与习惯",
            words: [
              createWord("snidaty", "снідати", "to eat breakfast in the morning", "吃早餐"),
              createWord("dobyratysia", "добиратися", "to commute regularly to work or school", "通勤"),
              createWord("prybyraty", "прибирати", "to make a place tidy and clean", "整理 / 收拾"),
              createWord("kupuvaty", "купувати", "to buy goods in a shop", "买东西"),
              createWord("vidpochyvaty", "відпочивати", "to rest and recover", "休息"),
              createWord("punktualnyi", "пунктуальний", "arriving exactly at the right time", "准时的"),
            ],
          },
        ],
      },
    ],
  },
  {
    id: "studium-und-arbeit",
    nameZh: "学习与工作",
    nameEn: "Навчання та робота",
    icon: "💼",
    accent: "#d97706",
    tint: "rgba(217, 119, 6, 0.1)",
    topics: [
      {
        id: "lernen-und-pruefungen",
        number: 1,
        title: "Навчання та іспити",
        promptZh:
          "学习场景很适合把乌克兰语做成整块记忆：复习、考试、成绩、作业、课程，这些词可以直接迁移到你自己的学校和语言班表达里。",
        promptEn:
          "Study vocabulary creates a practical learning environment: revision, exams, classes, homework and grades all fit together naturally.",
        sections: [
          {
            id: "lernalltag",
            tabLabel: "Навчання",
            tabLabelZh: "学习日常",
            sectionTitle: "A. Навчання",
            sectionTitleZh: "学习日常",
            words: [
              createWord("vchytysia", "вчитися", "to acquire knowledge or skills", "学习"),
              createWord("povtoriuvaty", "повторювати", "to study or say something again", "复习 / 重复"),
              createWord("ispyt", "іспит", "a formal test of knowledge", "考试"),
              createWord("sklasty", "скласти", "to pass an exam successfully", "通过"),
              createWord("provalyty", "провалити", "to fail an exam", "不及格"),
              createWord("vyvchyty-napamiat", "вивчити напам'ять", "to learn something by heart", "背下来"),
            ],
          },
          {
            id: "uni-und-kurs",
            tabLabel: "Курс",
            tabLabelZh: "大学与课程",
            sectionTitle: "B. Курси та навчання",
            sectionTitleZh: "大学与课程",
            words: [
              createWord("lektsiia", "лекція", "a lecture class with many students", "讲座课"),
              createWord("seminar", "семінар", "a course with discussion and active participation", "研讨课"),
              createWord("domashnie-zavdannia", "домашнє завдання", "a task to complete at home", "家庭作业"),
              createWord("rozklad", "розклад", "the timetable of classes and times", "课程表"),
              createWord("otsinka", "оцінка", "the grade from an exam or assignment", "成绩"),
              createWord("podaty", "подати", "to submit work officially", "提交"),
            ],
          },
        ],
      },
      {
        id: "beruf-und-buero",
        number: 2,
        title: "Робота та офіс",
        promptZh:
          "从找工作到办公室协作，这一组词是乌克兰语里最实用的职场基础。你可以直接拿它们描述简历、面试、会议、任务和反馈。",
        promptEn:
          "Work vocabulary helps with applications and collaboration: CVs, interviews, meetings, tasks and feedback.",
        sections: [
          {
            id: "bewerbung-und-einstieg",
            tabLabel: "Робота",
            tabLabelZh: "求职申请",
            sectionTitle: "A. Пошук роботи та вступ",
            sectionTitleZh: "求职与入职",
            words: [
              createWord("zaiava", "заява", "an application document for a job", "求职申请"),
              createWord("reziume", "резюме", "a summary of education and work experience", "简历"),
              createWord("spivbesida", "співбесіда", "an interview for a job position", "面试"),
              createWord("posada", "посада", "a job position or post", "岗位"),
              createWord("dosvid", "досвід", "practical knowledge from previous work", "经验"),
              createWord("naimaty", "наймати", "to hire someone officially", "录用"),
            ],
          },
          {
            id: "buero-und-zusammenarbeit",
            tabLabel: "Офіс",
            tabLabelZh: "办公室协作",
            sectionTitle: "B. Офіс та співпраця",
            sectionTitleZh: "办公室与协作",
            words: [
              createWord("ofis", "офіс", "the place where people work", "办公室"),
              createWord("narada", "нарада", "a meeting to discuss work", "会议"),
              createWord("zavdannia", "завдання", "a task that must be completed", "任务"),
              createWord("kintsevyi-termin", "кінцевий термін", "the final deadline for something", "截止时间"),
              createWord("koleha", "колега", "a person you work together with", "同事"),
              createWord("zvorotnyi-zviazok", "зворотний зв'язок", "feedback or response to work", "反馈"),
            ],
          },
        ],
      },
    ],
  },
  {
    id: "reise-und-leben",
    nameZh: "旅行与生活",
    nameEn: "Подорожі та життя",
    icon: "🧳",
    accent: "#0284c7",
    tint: "rgba(2, 132, 199, 0.1)",
    topics: [
      {
        id: "reisen-und-unterwegs",
        number: 1,
        title: "Подорожі в дорозі",
        promptZh:
          "旅行场景最适合练乌克兰语实用句。订票、换乘、找路、问入口出口，这些词一旦连起来，你的表达会马上更像真实生活里的用法。",
        promptEn:
          "Travel vocabulary is highly practical: tickets, transfers, directions, stations, entrances and exits all appear in real life immediately.",
        sections: [
          {
            id: "reiseplanung",
            tabLabel: "Подорож",
            tabLabelZh: "行程安排",
            sectionTitle: "A. Планування подорожі",
            sectionTitleZh: "行程安排",
            words: [
              createWord("zabroniuvaty", "забронювати", "to book a trip or ticket officially", "预订"),
              createWord("vokzal", "вокзал", "the station where trains arrive and depart", "火车站"),
              createWord("peresidaty", "пересідати", "to change from one form of transport to another", "换乘"),
              createWord("iz-zapiznenniam", "із запізненням", "delayed and not on time", "晚点的"),
              createWord("kvytok", "квиток", "a ticket for train, bus or other transport", "车票"),
              createWord("rezervuvaty", "резервувати", "to reserve a seat in advance", "预留 / 预定"),
            ],
          },
          {
            id: "stadt-und-orientierung",
            tabLabel: "Напрямок",
            tabLabelZh: "城市与方向",
            sectionTitle: "B. Місто та напрямок",
            sectionTitleZh: "城市与方向",
            words: [
              createWord("priamo", "прямо", "straight ahead without turning", "直走"),
              createWord("povertaty", "повертати", "to turn at a corner or crossing", "拐弯"),
              createWord("perekhrestia", "перехрестя", "the place where roads cross", "十字路口"),
              createWord("poruch", "поруч", "nearby and not far away", "在附近"),
              createWord("vkhid", "вхід", "the place where you go in", "入口"),
              createWord("vykhid", "вихід", "the place where you go out", "出口"),
            ],
          },
        ],
      },
      {
        id: "wohnen-und-einkaufen",
        number: 2,
        title: "Житло та покупки",
        promptZh:
          "住处和购物是生活里最常见的一组乌克兰语表达。描述房间、房租、价格、付款和换货，都是非常高频的真实场景。",
        promptEn:
          "Housing and shopping belong to the most common daily situations: apartment, rent, kitchen, price, payment and exchange.",
        sections: [
          {
            id: "wohnen",
            tabLabel: "Житло",
            tabLabelZh: "居住空间",
            sectionTitle: "A. Житло",
            sectionTitleZh: "居住空间",
            words: [
              createWord("kvartyra", "квартира", "the place where someone lives", "公寓"),
              createWord("kukhnia", "кухня", "the room used for cooking", "厨房"),
              createWord("zatyshnyi", "затишний", "pleasant, warm and comfortable", "舒适的"),
              createWord("chystyi", "чистий", "clean and without dirt", "干净的"),
              createWord("balkon", "балкон", "an open outside area attached to a flat", "阳台"),
              createWord("orenda", "оренда", "the money paid for living in a place", "房租"),
            ],
          },
          {
            id: "einkaufen-und-service",
            tabLabel: "Покупки",
            tabLabelZh: "购物与服务",
            sectionTitle: "B. Покупки та сервіс",
            sectionTitleZh: "购物与服务",
            words: [
              createWord("tsina", "ціна", "the amount of money something costs", "价格"),
              createWord("platyty", "платити", "to give money for something", "付款"),
              createWord("deshevyi", "дешевий", "not expensive", "便宜的"),
              createWord("rakhunok", "рахунок", "the bill listing all costs", "账单"),
              createWord("obminiuvaty", "обмінювати", "to exchange one item for another", "换货"),
              createWord("rekomenduvaty", "рекомендувати", "to suggest something as good or suitable", "推荐"),
            ],
          },
        ],
      },
    ],
  },
];

const categoriesById = Object.fromEntries(categories.map((category) => [category.id, category]));
const masteryLabels = {
  proficient: "熟练",
  average: "一般",
  unfamiliar: "完全不熟悉",
};
const reviewIntervals = {
  proficient: 7,
  average: 3,
  unfamiliar: 1,
};
const DICTATION_DAILY_LIMIT = 30;
const DICTATION_WRONG_TARGET = 5;
const DICTATION_REVIEW_TARGET = 15;
const DICTATION_REPEAT_OPTIONS = [1, 2, 3];
const DICTATION_SPEED_OPTIONS = [0.8, 1, 1.2];
const DICTATION_REVIEW_INTERVALS = [1, 3, 7, 14];
const DICTATION_PLAN_VERSION = "curriculum-v1";
const DICTATION_CURRICULUM_STAGES = [
  {
    id: "foundation",
    titleZh: "生活基础",
    titleEn: "Foundations",
    topicIds: ["menschen-und-kontakte", "gefuehle-und-routinen", "wohnen-und-einkaufen", "reisen-und-unterwegs"],
  },
  {
    id: "study-work-core",
    titleZh: "学习与工作基础",
    titleEn: "Study and Work Core",
    topicIds: ["lernen-und-pruefungen", "beruf-und-buero", "arbeitsmodelle-und-stellenmarkt"],
  },
  {
    id: "application-office",
    titleZh: "求职与办公室沟通",
    titleEn: "Applications and Office Communication",
    topicIds: ["anerkennung-und-bewerbung", "bewerbung-und-lebenslauf-vertiefung", "bueroalltag-und-service"],
  },
  {
    id: "workplace-rules",
    titleZh: "入职与办公室规则",
    titleEn: "Workplace Rules",
    topicIds: ["arbeitsalltag-und-regelungen", "unternehmen-und-empfang", "duales-studium-und-berufsstart"],
  },
  {
    id: "specialized-work",
    titleZh: "专业与进阶工作场景",
    titleEn: "Specialized Work",
    topicIds: ["ausbildung-technik-und-arbeitsmarkt", "unternehmen-und-abteilungen", "arbeitsdruck-und-entwicklung"],
  },
];

function createDefaultDictationUiState() {
  return {
    phase: "idle",
    inputValue: "",
    countdown: 3,
    resultKind: "idle",
    feedback: "",
    autoAdvanceEndsAt: null,
  };
}

function getDefaultDictationPreferences() {
  return {
    repeatCount: 1,
    playbackRate: 1,
    accent: "uk-UA",
  };
}

function getDefaultDailyDictation() {
  return {
    date: "",
    sourceSignature: "",
    deckIds: [],
    reviewIds: [],
    newIds: [],
    completedIds: [],
    wrongIds: [],
    currentIndex: 0,
    startedAt: null,
  };
}

const dictationRuntime = {
  countdownIntervalId: null,
  autoAdvanceIntervalId: null,
  autoAdvanceTimeoutId: null,
  elapsedIntervalId: null,
};

const uiState = {
  settingsOpen: false,
  addWordOpen: false,
  drawerOpen: false,
  expandedWordIds: new Set(),
  revealEnglishTopics: new Set(),
  dictation: createDefaultDictationUiState(),
};
const audioState = {
  token: 0,
  loadingText: null,
  playingText: null,
  currentAudio: null,
  currentObjectUrl: null,
};

let store = loadStore();

function getDefaultStore() {
  return {
    filter: "all",
    voice: "uk-UA",
    wordStatus: {},
    dictationProgress: {},
    topicMastery: {},
    topicReviewPlan: {},
    customWords: [],
    quizRevealed: {},
    dictationPreferences: getDefaultDictationPreferences(),
    dailyDictation: getDefaultDailyDictation(),
    lastRoute: "",
  };
}

function loadStore() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return {
      ...getDefaultStore(),
      ...parsed,
      wordStatus: parsed.wordStatus || {},
      dictationProgress: parsed.dictationProgress || {},
      topicMastery: parsed.topicMastery || {},
      topicReviewPlan: parsed.topicReviewPlan || {},
      customWords: parsed.customWords || [],
      quizRevealed: parsed.quizRevealed || {},
      dictationPreferences: {
        ...getDefaultDictationPreferences(),
        ...(parsed.dictationPreferences || {}),
      },
      dailyDictation: {
        ...getDefaultDailyDictation(),
        ...(parsed.dailyDictation || {}),
        sourceSignature: parsed.dailyDictation?.sourceSignature || "",
        deckIds: parsed.dailyDictation?.deckIds || [],
        reviewIds: parsed.dailyDictation?.reviewIds || [],
        newIds: parsed.dailyDictation?.newIds || [],
        completedIds: parsed.dailyDictation?.completedIds || [],
        wrongIds: parsed.dailyDictation?.wrongIds || [],
      },
    };
  } catch (error) {
    return getDefaultStore();
  }
}

function persistStore(renderAfter = true) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  if (renderAfter) {
    render();
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getRoute() {
  const segments = window.location.hash.replace(/^#/, "").split("/").filter(Boolean);

  if (segments[0] === "dictation") {
    return { view: "dictation" };
  }

  if (segments[0] !== "category") {
    return { view: "home" };
  }

  const category = categoriesById[segments[1]];

  if (!category) {
    return { view: "home" };
  }

  const topic = category.topics.find((item) => item.id === segments[2]) || category.topics[0] || null;
  const section = topic?.sections.find((item) => item.id === segments[3]) || topic?.sections[0] || null;

  return {
    view: "category",
    categoryId: category.id,
    topicId: topic?.id || "",
    sectionId: section?.id || "",
  };
}

function getHashForCategory(categoryId, topicId, sectionId) {
  const category = categoriesById[categoryId];
  const topic = category?.topics.find((item) => item.id === topicId) || category?.topics[0];
  const section = topic?.sections.find((item) => item.id === sectionId) || topic?.sections[0];

  if (!category) {
    return "#/";
  }

  if (!topic) {
    return `#/category/${category.id}`;
  }

  if (!section) {
    return `#/category/${category.id}/${topic.id}`;
  }

  return `#/category/${category.id}/${topic.id}/${section.id}`;
}

function setHash(hash) {
  window.location.hash = hash;
}

function getWordsForTopic(topic) {
  return topic.sections.flatMap((section) => section.words);
}

function getWordsForCategory(category) {
  return category.topics.flatMap((topic) => getWordsForTopic(topic));
}

function findTopicById(topicId) {
  return categories.flatMap((category) => category.topics).find((topic) => topic.id === topicId) || null;
}

function findCategoryByTopicId(topicId) {
  return categories.find((category) => category.topics.some((topic) => topic.id === topicId)) || null;
}

function getCurriculumTopicEntries() {
  const entries = [];
  const seenTopicIds = new Set();

  DICTATION_CURRICULUM_STAGES.forEach((stage, stageIndex) => {
    stage.topicIds.forEach((topicId, topicIndex) => {
      const topic = findTopicById(topicId);
      const category = findCategoryByTopicId(topicId);

      if (!topic || !category || seenTopicIds.has(topicId)) {
        return;
      }

      entries.push({
        stageId: stage.id,
        stageTitleZh: stage.titleZh,
        stageTitleEn: stage.titleEn,
        stageOrder: stageIndex + 1,
        topicOrder: topicIndex,
        category,
        topic,
      });
      seenTopicIds.add(topicId);
    });
  });

  categories.forEach((category) => {
    category.topics.forEach((topic) => {
      if (seenTopicIds.has(topic.id)) {
        return;
      }

      entries.push({
        stageId: "supplement",
        stageTitleZh: "补充词库",
        stageTitleEn: "Supplement",
        stageOrder: DICTATION_CURRICULUM_STAGES.length + 1,
        topicOrder: entries.length,
        category,
        topic,
      });
      seenTopicIds.add(topic.id);
    });
  });

  return entries;
}

function slugifyValue(value) {
  return normalizeLatinText(value)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizeWordLookup(value) {
  return normalizeLatinText(value)
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeLatinText(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "");
}

function buildWordAliases(value) {
  const raw = String(value || "").trim();
  const candidates = new Set([raw, raw.replace(/\([^)]*\)/g, " ")]);
  const aliases = new Set();

  raw.split(/\/|,|;|\bor\b|\boder\b/i).forEach((piece) => {
    const cleaned = piece.replace(/\([^)]*\)/g, " ").trim();

    if (cleaned) {
      candidates.add(cleaned);
      candidates.add(cleaned.replace(/^(der|die|das|ein|eine|einen|einem|einer|eines)\s+/i, "").trim());
    }
  });

  candidates.forEach((candidate) => {
    const normalized = normalizeWordLookup(candidate);

    if (!normalized) {
      return;
    }

    aliases.add(normalized);

    if (normalized.includes(" ")) {
      aliases.add(normalized.split(" ")[0]);
    }
  });

  return aliases;
}

function createCuratedWordId(topicId, sectionId, word) {
  return `curated-${topicId}-${sectionId}-${slugifyValue(word) || "word"}`;
}

function hasKnownWordAlias(wordText) {
  const targetAliases = buildWordAliases(wordText);

  if (!targetAliases.size) {
    return false;
  }

  return categories.some((category) =>
    category.topics.some((topic) =>
      topic.sections.some((section) =>
        section.words.some((word) => {
          const existingAliases = buildWordAliases(word.word);
          return [...targetAliases].some((alias) => existingAliases.has(alias));
        })
      )
    )
  );
}

function hydrateImportedUkrainianTopics() {
  const importedTopics = Array.isArray(window.IMPORTED_GERMAN_TOPICS) ? window.IMPORTED_GERMAN_TOPICS : [];
  const studyWorkCategory = categories.find((category) => category.id === "studium-und-arbeit");

  if (!studyWorkCategory || !importedTopics.length) {
    return;
  }

  const existingTopicIds = new Set(studyWorkCategory.topics.map((topic) => topic.id));

  for (const rawTopic of importedTopics) {
    if (!rawTopic?.id || existingTopicIds.has(rawTopic.id)) {
      continue;
    }

    const seenWordSignatures = new Set();
    const sections = (rawTopic.sections || [])
      .map((rawSection) => {
        const words = (rawSection.words || [])
          .map((rawWord) => {
            const [word, definitionEn, definitionZh, noteZh = ""] = Array.isArray(rawWord)
              ? rawWord
              : [rawWord.word, rawWord.definitionEn, rawWord.definitionZh, rawWord.noteZh || ""];
            const signature = [...buildWordAliases(word)].sort().join("|");

            if (!word || !definitionEn || !definitionZh || !signature) {
              return null;
            }

            if (seenWordSignatures.has(signature) || hasKnownWordAlias(word)) {
              return null;
            }

            seenWordSignatures.add(signature);
            return createWord(createCuratedWordId(rawTopic.id, rawSection.id, word), word, definitionEn, definitionZh, noteZh);
          })
          .filter(Boolean);

        if (!words.length) {
          return null;
        }

        return {
          ...rawSection,
          words,
        };
      })
      .filter(Boolean);

    if (!sections.length) {
      continue;
    }

    studyWorkCategory.topics.push({
      ...rawTopic,
      sections,
    });
    existingTopicIds.add(rawTopic.id);
  }
}

hydrateImportedUkrainianTopics();

function createPlacementValue(categoryId, topicId, sectionId) {
  return [categoryId, topicId, sectionId].join("::");
}

function parsePlacementValue(value) {
  const [categoryId = "", topicId = "", sectionId = ""] = String(value || "").split("::");
  return { categoryId, topicId, sectionId };
}

function getAllSectionOptions() {
  return categories.flatMap((category) =>
    category.topics.flatMap((topic) =>
      topic.sections.map((section) => ({
        value: createPlacementValue(category.id, topic.id, section.id),
        categoryId: category.id,
        topicId: topic.id,
        sectionId: section.id,
        categoryNameZh: category.nameZh,
        categoryNameEn: category.nameEn,
        topicTitle: topic.title,
        topicNumber: topic.number,
        sectionTitle: section.sectionTitle,
        sectionTitleZh: section.sectionTitleZh,
      }))
    )
  );
}

function getPlacementLabel(value) {
  const option = getAllSectionOptions().find((item) => item.value === value);

  if (!option) {
    return "";
  }

  return `${option.categoryNameEn} / ${option.topicNumber}. ${option.topicTitle} / ${option.sectionTitle}`;
}

function findSectionByIds(categoryId, topicId, sectionId) {
  const category = categoriesById[categoryId];
  const topic = category?.topics.find((item) => item.id === topicId) || null;
  const section = topic?.sections.find((item) => item.id === sectionId) || null;

  return { category, topic, section };
}

function appendWordToSection(entry) {
  const { section } = findSectionByIds(entry.categoryId, entry.topicId, entry.sectionId);

  if (!section) {
    return false;
  }

  if (section.words.some((word) => word.id === entry.id)) {
    return true;
  }

  section.words.push(createWord(entry.id, entry.word, entry.definitionEn, entry.definitionZh, entry.noteZh || ""));
  return true;
}

function hydrateCustomWords() {
  for (const entry of store.customWords || []) {
    appendWordToSection(entry);
  }
}

function extractSearchUnits(text) {
  const raw = String(text || "");
  const latinTokens = normalizeLatinText(raw).match(/[a-z][a-z-]{1,}/g) || [];
  const chineseTokens = raw.match(/[\u4e00-\u9fff]{2,}/g) || [];
  return [...new Set([...latinTokens, ...chineseTokens])];
}

function getSectionSearchCorpus(category, topic, section) {
  const rawCorpus = [
    category.nameZh,
    category.nameEn,
    topic.title,
    topic.promptZh,
    topic.promptEn,
    section.tabLabel,
    section.tabLabelZh,
    section.sectionTitle,
    section.sectionTitleZh,
    ...section.words.flatMap((word) => [word.word, word.definitionEn, word.definitionZh, word.noteZh || ""]),
  ]
    .join(" ")
    .toLowerCase();

  return `${rawCorpus} ${normalizeWordLookup(rawCorpus)}`;
}

function getRecommendedPlacement(draft, route = getRoute()) {
  const options = getAllSectionOptions();
  const fallbackValue =
    route.view === "category" && route.categoryId && route.topicId && route.sectionId
      ? createPlacementValue(route.categoryId, route.topicId, route.sectionId)
      : options[0]?.value || "";
  const draftTokens = extractSearchUnits([draft.word, draft.definitionEn, draft.definitionZh, draft.noteZh].join(" "));

  let bestMatch = {
    value: fallbackValue,
    score: -1,
  };

  for (const option of options) {
    const { category, topic, section } = findSectionByIds(option.categoryId, option.topicId, option.sectionId);

    if (!category || !topic || !section) {
      continue;
    }

    const corpus = getSectionSearchCorpus(category, topic, section);
    let score = option.value === fallbackValue ? 10 : 0;

    if (route.view === "category") {
      if (option.categoryId === route.categoryId) {
        score += 6;
      }
      if (option.topicId === route.topicId) {
        score += 10;
      }
      if (option.sectionId === route.sectionId) {
        score += 16;
      }
    }

    for (const token of draftTokens) {
      if (!token) {
        continue;
      }

      if (corpus.includes(token.toLowerCase())) {
        score += /[\u4e00-\u9fff]/.test(token) ? 7 : Math.min(6, Math.max(2, token.length - 1));
      }
    }

    if (score > bestMatch.score) {
      bestMatch = {
        value: option.value,
        score,
      };
    }
  }

  return {
    value: bestMatch.value,
    label: getPlacementLabel(bestMatch.value),
  };
}

function getTodayKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function cleanDictationText(value) {
  return String(value || "")
    .replace(/\([^)]*\)/g, " ")
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeDictationText(value) {
  return normalizeLatinText(cleanDictationText(value)).replace(/\s+/g, " ").trim();
}

function getDictationPrimaryText(value) {
  const cleaned = cleanDictationText(value);
  const segments = cleaned
    .split(/\s*\/\s*|\s*;\s*|\s*,\s*|\s+or\s+|\s+oder\s+/i)
    .map((segment) => segment.trim())
    .filter(Boolean);

  return segments[0] || cleaned;
}

function getDictationAcceptedAnswers(value) {
  const cleaned = cleanDictationText(value);
  const candidates = new Set([cleaned, getDictationPrimaryText(value)]);

  cleaned.split(/\s*\/\s*|\s*;\s*|\s*,\s*|\s+or\s+|\s+oder\s+/i).forEach((segment) => {
    const normalizedSegment = segment.trim();

    if (normalizedSegment) {
      candidates.add(normalizedSegment);
    }
  });

  return [...candidates]
    .map((candidate) => normalizeDictationText(candidate))
    .filter(Boolean)
    .filter((candidate, index, array) => array.indexOf(candidate) === index);
}

function extractPhoneticFromNote(noteZh) {
  const matched = String(noteZh || "").match(/\/[^/]+\/|\[[^\]]+\]/);
  return matched ? matched[0] : "";
}

function isDateDue(isoString, now = new Date()) {
  if (!isoString) {
    return false;
  }

  return getStartOfDay(new Date(isoString)).getTime() <= getStartOfDay(now).getTime();
}

function isTopicDueForReview(topicId) {
  const plan = store.topicReviewPlan[topicId];

  if (!plan?.nextReviewAt) {
    return false;
  }

  return new Date(plan.nextReviewAt).getTime() <= Date.now();
}

function buildDictationSourceItems() {
  return categories.flatMap((category) =>
    category.topics.flatMap((topic) =>
      topic.sections.flatMap((section) =>
        section.words
          .map((word) => {
            const promptText = getDictationPrimaryText(word.word);

            if (!promptText) {
              return null;
            }

            const seenStatus = getWordStatus(word.id);

            return {
              id: word.id,
              promptText,
              displayWord: promptText,
              rawWord: word.word,
              acceptedAnswers: getDictationAcceptedAnswers(word.word),
              phonetic: extractPhoneticFromNote(word.noteZh),
              meaning: word.definitionZh || word.definitionEn || "",
              noteZh: word.noteZh || "",
              categoryId: category.id,
              topicId: topic.id,
              sectionId: section.id,
              isReview: Boolean(seenStatus) || isTopicDueForReview(topic.id),
              isNew: !seenStatus,
            };
          })
          .filter(Boolean)
      )
    )
  );
}

function getDictationProgressEntry(wordId) {
  return store.dictationProgress[wordId] || null;
}

function getIntroducedDictationWordIds(validIds = null) {
  return new Set(
    Object.entries(store.dictationProgress)
      .filter(([wordId, entry]) => Boolean(entry?.introducedAt) && (!validIds || validIds.has(wordId)))
      .map(([wordId]) => wordId)
  );
}

function buildDictationSourceSignature(sourceItems = buildDictationSourceItems()) {
  return `${DICTATION_PLAN_VERSION}::${sourceItems
    .map((item) => item.id)
    .sort()
    .join("|")}`;
}

function getCurriculumTopicItemsById(sourceItems) {
  const map = new Map();

  sourceItems.forEach((item, index) => {
    if (!map.has(item.topicId)) {
      map.set(item.topicId, []);
    }

    map.get(item.topicId).push({
      ...item,
      sourceIndex: index,
    });
  });

  return map;
}

function getDictationCurriculumProgress(sourceItems = buildDictationSourceItems()) {
  const validIds = new Set(sourceItems.map((item) => item.id));
  const introducedIds = getIntroducedDictationWordIds(validIds);
  const topicItemsById = getCurriculumTopicItemsById(sourceItems);
  const topicEntries = getCurriculumTopicEntries()
    .map((entry) => {
      const topicItems = topicItemsById.get(entry.topic.id) || [];
      const introducedCount = topicItems.filter((item) => introducedIds.has(item.id)).length;

      return {
        ...entry,
        totalWords: topicItems.length,
        introducedCount,
        remainingCount: Math.max(0, topicItems.length - introducedCount),
      };
    })
    .filter((entry) => entry.totalWords > 0);

  const currentEntry = topicEntries.find((entry) => entry.remainingCount > 0) || topicEntries[topicEntries.length - 1] || null;

  return {
    topicEntries,
    currentEntry,
    introducedCount: introducedIds.size,
    totalCount: sourceItems.length,
    completedTopicCount: topicEntries.filter((entry) => entry.remainingCount === 0).length,
    totalTopicCount: topicEntries.length,
    coveragePercent: sourceItems.length ? Math.round((introducedIds.size / sourceItems.length) * 100) : 0,
  };
}

function getOrderedNewDictationItems(sourceItems, limit) {
  if (limit <= 0) {
    return [];
  }

  const validIds = new Set(sourceItems.map((item) => item.id));
  const introducedIds = getIntroducedDictationWordIds(validIds);
  const topicItemsById = getCurriculumTopicItemsById(sourceItems);
  const orderedItems = [];

  for (const entry of getCurriculumTopicEntries()) {
    const pendingItems = (topicItemsById.get(entry.topic.id) || []).filter((item) => !introducedIds.has(item.id));

    if (!pendingItems.length) {
      continue;
    }

    orderedItems.push(...pendingItems);

    if (orderedItems.length >= limit) {
      break;
    }
  }

  return orderedItems.slice(0, limit);
}

function sortDictationReviewItems(items, topicOrderMap) {
  return [...items].sort((left, right) => {
    const leftProgress = getDictationProgressEntry(left.id) || {};
    const rightProgress = getDictationProgressEntry(right.id) || {};
    const leftDue = new Date(leftProgress.nextReviewAt || leftProgress.lastReviewedAt || leftProgress.introducedAt || 0).getTime();
    const rightDue = new Date(rightProgress.nextReviewAt || rightProgress.lastReviewedAt || rightProgress.introducedAt || 0).getTime();

    if (leftDue !== rightDue) {
      return leftDue - rightDue;
    }

    const leftStage = Number.isInteger(leftProgress.reviewStage) ? leftProgress.reviewStage : -1;
    const rightStage = Number.isInteger(rightProgress.reviewStage) ? rightProgress.reviewStage : -1;

    if (leftStage !== rightStage) {
      return leftStage - rightStage;
    }

    const topicDiff = (topicOrderMap.get(left.topicId) || 0) - (topicOrderMap.get(right.topicId) || 0);

    if (topicDiff !== 0) {
      return topicDiff;
    }

    return (left.sourceIndex || 0) - (right.sourceIndex || 0);
  });
}

function buildMixedDictationDeck(newItems, reviewItems, wrongItems) {
  const deck = [];
  const newQueue = [...newItems];
  const reviewQueue = [...reviewItems];
  const wrongQueue = [...wrongItems];

  while (newQueue.length || reviewQueue.length || wrongQueue.length) {
    if (newQueue.length) {
      deck.push(newQueue.shift());
    }

    if (reviewQueue.length) {
      deck.push(reviewQueue.shift());
    }

    if (wrongQueue.length) {
      deck.push(wrongQueue.shift());
    }
  }

  return deck;
}

function interleaveDictationDeck(newItems, reviewItems, reviewRatio) {
  const result = [];
  const newQueue = [...newItems];
  const reviewQueue = [...reviewItems];

  while (newQueue.length || reviewQueue.length) {
    const currentReviewShare = result.length ? result.filter((item) => item.isReview).length / result.length : 0;

    if (reviewQueue.length && (currentReviewShare < reviewRatio || !newQueue.length)) {
      result.push(reviewQueue.shift());
      continue;
    }

    if (newQueue.length) {
      result.push(newQueue.shift());
      continue;
    }

    if (reviewQueue.length) {
      result.push(reviewQueue.shift());
    }
  }

  return result;
}

function buildDailyDictationPlan() {
  const allItems = buildDictationSourceItems();
  const validIds = new Set(allItems.map((item) => item.id));
  const introducedIds = getIntroducedDictationWordIds(validIds);
  const topicOrderMap = new Map(getCurriculumTopicEntries().map((entry, index) => [entry.topic.id, index]));
  const introducedItems = allItems
    .map((item, index) => ({
      ...item,
      sourceIndex: index,
    }))
    .filter((item) => introducedIds.has(item.id));
  const wrongCandidates = sortDictationReviewItems(
    introducedItems.filter((item) => {
      const progress = getDictationProgressEntry(item.id);
      return progress?.lastOutcome === "wrong" && isDateDue(progress.nextReviewAt || progress.lastReviewedAt || progress.introducedAt);
    }),
    topicOrderMap
  );
  const reviewCandidates = sortDictationReviewItems(
    introducedItems.filter((item) => {
      const progress = getDictationProgressEntry(item.id);
      return progress?.lastOutcome !== "wrong" && isDateDue(progress?.nextReviewAt);
    }),
    topicOrderMap
  );
  const pickedWrongItems = wrongCandidates.slice(0, DICTATION_WRONG_TARGET);
  const pickedWrongIds = new Set(pickedWrongItems.map((item) => item.id));
  const pickedReviewItems = reviewCandidates.filter((item) => !pickedWrongIds.has(item.id)).slice(0, DICTATION_REVIEW_TARGET);
  const remainingSlots = Math.max(0, Math.min(DICTATION_DAILY_LIMIT, allItems.length) - pickedWrongItems.length - pickedReviewItems.length);
  const pickedNewItems = getOrderedNewDictationItems(allItems, remainingSlots);
  const deck = buildMixedDictationDeck(pickedNewItems, pickedReviewItems, pickedWrongItems).slice(0, DICTATION_DAILY_LIMIT);

  return {
    deckIds: deck.map((item) => item.id),
    reviewIds: pickedReviewItems.map((item) => item.id),
    newIds: pickedNewItems.map((item) => item.id),
  };
}

function ensureDailyDictationState() {
  const todayKey = getTodayKey();
  const sourceItems = buildDictationSourceItems();
  const sourceSignature = buildDictationSourceSignature(sourceItems);
  const validIds = new Set(sourceItems.map((item) => item.id));
  let didChange = false;

  Object.keys(store.dictationProgress).forEach((wordId) => {
    if (!validIds.has(wordId)) {
      delete store.dictationProgress[wordId];
      didChange = true;
    }
  });

  if (
    store.dailyDictation.date !== todayKey ||
    !store.dailyDictation.deckIds.length ||
    store.dailyDictation.sourceSignature !== sourceSignature
  ) {
    const nextPlan = buildDailyDictationPlan();
    const nextDeckSet = new Set(nextPlan.deckIds);
    const canPreserveTodayProgress = store.dailyDictation.date === todayKey;
    const preservedCompletedIds = canPreserveTodayProgress
      ? store.dailyDictation.completedIds.filter((id) => nextDeckSet.has(id))
      : [];
    const preservedWrongIds = canPreserveTodayProgress
      ? store.dailyDictation.wrongIds.filter((id) => nextDeckSet.has(id))
      : [];

    store.dailyDictation = {
      ...getDefaultDailyDictation(),
      date: todayKey,
      sourceSignature,
      ...nextPlan,
      completedIds: preservedCompletedIds,
      wrongIds: preservedWrongIds,
      currentIndex: canPreserveTodayProgress ? Math.min(store.dailyDictation.currentIndex || 0, nextPlan.deckIds.length) : 0,
      startedAt: canPreserveTodayProgress ? store.dailyDictation.startedAt : null,
    };
    didChange = true;
  }

  const filteredDeckIds = store.dailyDictation.deckIds.filter((id) => validIds.has(id));

  if (filteredDeckIds.length !== store.dailyDictation.deckIds.length) {
    store.dailyDictation = {
      ...store.dailyDictation,
      ...buildDailyDictationPlan(),
      date: todayKey,
      sourceSignature,
    };
    didChange = true;
  }

  store.dailyDictation.completedIds = store.dailyDictation.completedIds.filter((id) => validIds.has(id));
  store.dailyDictation.wrongIds = store.dailyDictation.wrongIds.filter((id) => validIds.has(id));

  if (store.dailyDictation.currentIndex > store.dailyDictation.deckIds.length) {
    store.dailyDictation.currentIndex = store.dailyDictation.deckIds.length;
    didChange = true;
  }

  if (didChange) {
    persistStore(false);
  }

  return store.dailyDictation;
}

function getDictationItemById(wordId) {
  return buildDictationSourceItems().find((item) => item.id === wordId) || null;
}

function getCurrentDictationItem() {
  const state = ensureDailyDictationState();
  return getDictationItemById(state.deckIds[state.currentIndex]);
}

function getDailyDictationStats() {
  const state = ensureDailyDictationState();
  const curriculum = getDictationCurriculumProgress();
  const completedSet = new Set(state.completedIds);
  const progressedCount = Math.max(state.currentIndex, state.completedIds.length);
  const reviewCompleted = state.reviewIds.filter((id) => completedSet.has(id)).length;
  const newCompleted = state.newIds.filter((id) => completedSet.has(id)).length;

  return {
    totalCount: state.deckIds.length,
    reviewCount: state.reviewIds.length,
    newCount: state.newIds.length,
    completedCount: state.completedIds.length,
    wrongCount: state.wrongIds.length,
    currentTopicTitle: curriculum.currentEntry?.topic.title || "综合复习",
    currentStageLabel: curriculum.currentEntry?.stageTitleZh || "课程复习",
    currentStageOrder: curriculum.currentEntry?.stageOrder || 0,
    remainingTopicWords: curriculum.currentEntry?.remainingCount || 0,
    introducedCount: curriculum.introducedCount,
    totalSourceCount: curriculum.totalCount,
    completedTopicCount: curriculum.completedTopicCount,
    totalTopicCount: curriculum.totalTopicCount,
    coveragePercent: curriculum.coveragePercent,
    progressedCount,
    reviewCompleted,
    newCompleted,
    progressPercent: state.deckIds.length ? Math.round((progressedCount / state.deckIds.length) * 100) : 0,
    reviewPercent: state.reviewIds.length ? Math.round((reviewCompleted / state.reviewIds.length) * 100) : 0,
    newPercent: state.newIds.length ? Math.round((newCompleted / state.newIds.length) * 100) : 0,
  };
}

function levenshteinDistance(left, right) {
  if (left === right) {
    return 0;
  }

  const rows = left.length + 1;
  const cols = right.length + 1;
  const matrix = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let row = 0; row < rows; row += 1) {
    matrix[row][0] = row;
  }

  for (let col = 0; col < cols; col += 1) {
    matrix[0][col] = col;
  }

  for (let row = 1; row < rows; row += 1) {
    for (let col = 1; col < cols; col += 1) {
      const cost = left[row - 1] === right[col - 1] ? 0 : 1;
      matrix[row][col] = Math.min(
        matrix[row - 1][col] + 1,
        matrix[row][col - 1] + 1,
        matrix[row - 1][col - 1] + cost
      );
    }
  }

  return matrix[rows - 1][cols - 1];
}

function getNearMissFeedback(input, answer) {
  if (!input || !answer || input[0] !== answer[0] || Math.abs(input.length - answer.length) > 2) {
    return null;
  }

  const distance = levenshteinDistance(input, answer);
  const maxDistance = answer.length <= 5 ? 1 : 2;

  if (distance > maxDistance) {
    return null;
  }

  const mismatchIndex = [...answer].findIndex((character, index) => character !== input[index]);
  const ratio = mismatchIndex <= 0 ? 0 : mismatchIndex / answer.length;

  if (answer.length - input.length === 1) {
    return "少了一个字母，再看一下中段。";
  }

  if (answer.length - input.length === -1) {
    return "多打了一个字母，删掉再试一次。";
  }

  if (ratio <= 0.33) {
    return "前半段有误，再听一下开头。";
  }

  if (ratio >= 0.66) {
    return "后半段有误，尾部拼写不对。";
  }

  return "中间部分有误，改一下中段。";
}

function evaluateDictationAttempt(inputValue, item) {
  const normalizedInput = normalizeDictationText(inputValue);
  const acceptedAnswers = item?.acceptedAnswers || [];

  if (!normalizedInput) {
    return {
      kind: "wrong",
      bestAnswer: item?.displayWord || "",
    };
  }

  if (acceptedAnswers.includes(normalizedInput)) {
    return {
      kind: "correct",
      bestAnswer: item.displayWord,
    };
  }

  let bestAnswer = acceptedAnswers[0] || normalizeDictationText(item.displayWord);
  let bestDistance = Number.POSITIVE_INFINITY;

  for (const answer of acceptedAnswers) {
    const distance = levenshteinDistance(normalizedInput, answer);

    if (distance < bestDistance) {
      bestDistance = distance;
      bestAnswer = answer;
    }
  }

  const nearMissFeedback = getNearMissFeedback(normalizedInput, bestAnswer);

  if (nearMissFeedback) {
    return {
      kind: "nearMiss",
      bestAnswer: item.displayWord,
      feedback: nearMissFeedback,
    };
  }

  return {
    kind: "wrong",
    bestAnswer: item.displayWord,
  };
}

function upsertDictationProgress(item, outcome) {
  if (!item) {
    return;
  }

  const now = new Date();
  const existing = store.dictationProgress[item.id] || {};
  const nextEntry = {
    introducedAt: existing.introducedAt || now.toISOString(),
    lastReviewedAt: now.toISOString(),
    nextReviewAt: existing.nextReviewAt || "",
    reviewStage: Number.isInteger(existing.reviewStage) ? existing.reviewStage : -1,
    attempts: (existing.attempts || 0) + 1,
    correctCount: existing.correctCount || 0,
    lastOutcome: outcome,
    topicId: item.topicId,
  };

  if (outcome === "correct") {
    const nextStage = Math.min(nextEntry.reviewStage + 1, DICTATION_REVIEW_INTERVALS.length - 1);
    nextEntry.reviewStage = nextStage;
    nextEntry.correctCount += 1;
    nextEntry.nextReviewAt = addDays(now, DICTATION_REVIEW_INTERVALS[nextStage]).toISOString();
  } else if (outcome === "wrong") {
    nextEntry.reviewStage = 0;
    nextEntry.nextReviewAt = addDays(now, 1).toISOString();
  }

  store.dictationProgress[item.id] = nextEntry;
}

function syncManualDictationStatus(item, status) {
  if (!item) {
    return;
  }

  if (status === "known") {
    upsertDictationProgress(item, "correct");
    store.dictationProgress[item.id].reviewStage = Math.max(store.dictationProgress[item.id].reviewStage, 2);
    store.dictationProgress[item.id].nextReviewAt = addDays(new Date(), DICTATION_REVIEW_INTERVALS[2]).toISOString();
    return;
  }

  upsertDictationProgress(item, "wrong");
}

function findTopicByWordId(wordId) {
  return categories
    .flatMap((category) => category.topics)
    .find((topic) => getWordsForTopic(topic).some((word) => word.id === wordId));
}

function getWordStatus(wordId) {
  return store.wordStatus[wordId] || null;
}

function getTopicStats(topic) {
  const words = getWordsForTopic(topic);
  const seen = words.filter((word) => Boolean(getWordStatus(word.id))).length;
  const known = words.filter((word) => getWordStatus(word.id) === "known").length;
  const unknown = words.filter((word) => getWordStatus(word.id) === "unknown").length;
  const mastery = store.topicMastery[topic.id] || null;

  return {
    totalWords: words.length,
    seenWords: seen,
    knownWords: known,
    unknownWords: unknown,
    percentage: words.length ? Math.round((seen / words.length) * 100) : 0,
    mastery,
  };
}

function getCategoryStats(category) {
  const words = getWordsForCategory(category);
  const seen = words.filter((word) => Boolean(getWordStatus(word.id))).length;
  const known = words.filter((word) => getWordStatus(word.id) === "known").length;
  const unknown = words.filter((word) => getWordStatus(word.id) === "unknown").length;
  const topicMasteries = category.topics.map((topic) => store.topicMastery[topic.id]).filter(Boolean);
  const reviewNeeded = unknown > 0 || topicMasteries.some((value) => value === "average" || value === "unfamiliar");
  const fullyMastered = words.length > 0 && known === words.length;
  const started = seen > 0 || topicMasteries.length > 0;

  return {
    totalWords: words.length,
    seenWords: seen,
    knownWords: known,
    unknownWords: unknown,
    percentage: words.length ? Math.round((seen / words.length) * 100) : 0,
    reviewNeeded,
    fullyMastered,
    started,
  };
}

function getOverallStats() {
  const categoryStats = categories.map((category) => getCategoryStats(category));
  const totalWords = categoryStats.reduce((sum, item) => sum + item.totalWords, 0);
  const seenWords = categoryStats.reduce((sum, item) => sum + item.seenWords, 0);
  const startedCategories = categoryStats.filter((item) => item.started).length;
  const reviewCategories = categoryStats.filter((item) => item.reviewNeeded).length;
  const masteredCategories = categoryStats.filter((item) => item.fullyMastered).length;

  return {
    totalWords,
    seenWords,
    startedCategories,
    reviewCategories,
    masteredCategories,
  };
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function getStartOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function formatReviewDate(isoString) {
  if (!isoString) {
    return "";
  }

  return new Intl.DateTimeFormat("zh-CN", {
    month: "numeric",
    day: "numeric",
  }).format(new Date(isoString));
}

function getRelativeReviewLabel(isoString) {
  if (!isoString) {
    return "";
  }

  const today = getStartOfDay(new Date());
  const target = getStartOfDay(new Date(isoString));
  const diffDays = Math.round((target - today) / 86400000);

  if (diffDays <= 0) {
    return "今天";
  }

  if (diffDays === 1) {
    return "明天";
  }

  return `${diffDays} 天后`;
}

function getStatusPriority(wordId) {
  const status = getWordStatus(wordId);

  if (status === "unknown") {
    return 0;
  }

  if (status === null) {
    return 1;
  }

  return 2;
}

function sortWordsForReview(words, revealedWordIds = []) {
  const revealed = new Set(revealedWordIds);

  return [...words].sort((left, right) => {
    const statusDiff = getStatusPriority(left.id) - getStatusPriority(right.id);

    if (statusDiff !== 0) {
      return statusDiff;
    }

    const revealDiff = Number(revealed.has(left.id)) - Number(revealed.has(right.id));

    if (revealDiff !== 0) {
      return revealDiff;
    }

    return 0;
  });
}

function saveTopicReviewPlan(topicId, mastery) {
  const intervalDays = reviewIntervals[mastery] || 3;
  const reviewedAt = new Date();
  const nextReviewAt = addDays(reviewedAt, intervalDays);

  store.topicReviewPlan[topicId] = {
    intervalDays,
    reviewedAt: reviewedAt.toISOString(),
    nextReviewAt: nextReviewAt.toISOString(),
  };
}

function getSectionLearningState(topic, section) {
  const words = section.words;
  const revealedWords = store.quizRevealed[section.id] || [];
  const totalWords = words.length;
  const knownWords = words.filter((word) => getWordStatus(word.id) === "known").length;
  const unknownWords = words.filter((word) => getWordStatus(word.id) === "unknown").length;
  const unseenWords = totalWords - knownWords - unknownWords;
  const mastery = store.topicMastery[topic.id] || null;
  const reviewPlan = store.topicReviewPlan[topic.id] || null;
  const allRevealed = totalWords > 0 && revealedWords.length === totalWords;

  let headline = "先把词义过一遍，再开始主动回忆";
  let detail = "科学顺序是先编码，再检索，再做间隔复习。";
  let phase = "encode";

  if (unseenWords > 0) {
    headline = `先处理这组里 ${unseenWords} 个还没判断熟练度的词`;
    detail = unknownWords > 0 ? `优先补完未判断词，再回头强化 ${unknownWords} 个待复习词。` : "先把乌克兰语词义看明白，再进入中文重述和释义自测。";
  } else if (unknownWords > 0) {
    headline = `今天先围绕 ${unknownWords} 个待复习词做主动回忆`;
    detail = "先看中文自己说一遍，再做乌克兰语释义自测，这样更符合检索练习。";
    phase = "recover";
  } else if (!allRevealed) {
    headline = "开始做乌克兰语释义自测，先回忆再看答案";
    detail = "自测区会优先把还没掌握的词放前面，减少无效重复。";
    phase = "quiz";
  } else if (!mastery) {
    headline = "这一轮检索完成了，现在做一次主观自评";
    detail = "自评后我会自动给出下一次复习时间，形成简单的间隔重复。";
    phase = "assess";
  } else if (reviewPlan) {
    headline = `这组词已完成本轮学习，建议 ${getRelativeReviewLabel(reviewPlan.nextReviewAt)} 再复习`;
    detail = `${formatReviewDate(reviewPlan.nextReviewAt)} 回来做一轮快速回忆，会更利于长期记住。`;
    phase = "space";
  }

  return {
    totalWords,
    knownWords,
    unknownWords,
    unseenWords,
    revealedWords,
    allRevealed,
    mastery,
    reviewPlan,
    headline,
    detail,
    phase,
  };
}

function getVisibleCategories() {
  const filter = store.filter;

  return categories.filter((category) => {
    const stats = getCategoryStats(category);

    if (filter === "started") {
      return stats.started;
    }

    if (filter === "mastered") {
      return stats.fullyMastered;
    }

    if (filter === "review") {
      return stats.reviewNeeded;
    }

    return true;
  });
}

function renderHome() {
  const visibleCategories = getVisibleCategories();
  const dictationStats = getDailyDictationStats();

  return `
    <div class="page home-page compact-home">
      ${renderTopBanner("home")}
      ${renderDailyDictationCard(dictationStats)}
      <section class="home-board">
        <div class="home-board-head">
          <div>
            <p class="eyebrow">Ukrainian Categories</p>
            <h2>乌克兰语分类</h2>
          </div>
          <span class="tag">${visibleCategories.length} 个分类</span>
        </div>
        ${
          visibleCategories.length
            ? `<div class="category-grid">${visibleCategories.map((category) => renderCategoryCard(category)).join("")}</div>`
            : `<div class="filter-empty"><p>这个筛选下还没有分类。先去任意分类做一次标记或自评，书架就会开始动起来。</p></div>`
        }
      </section>
      ${renderSettingsModal()}
    </div>
  `;
}

function renderDailyDictationCard(stats) {
  return `
    <section class="daily-dictation-card">
      <div class="daily-dictation-copy">
        <p class="eyebrow">Ukrainian Dictation</p>
        <h2>每日乌克兰语默写</h2>
        <p>每天按“从简单到难”的主题计划推进。系统会先带你走当前主题的新词，再混入到期复习词和错词回炉，直到整套词库都被逐步覆盖。</p>
        <div class="daily-dictation-meta">
          <span class="tag">第 ${stats.currentStageOrder || 1} 阶段 · ${escapeHtml(stats.currentStageLabel)}</span>
          <span class="tag highlight">${escapeHtml(stats.currentTopicTitle)}</span>
          <span class="tag">当前主题剩余 ${stats.remainingTopicWords} 词</span>
          <span class="tag">总覆盖 ${stats.introducedCount}/${stats.totalSourceCount}</span>
          <span class="tag">${stats.totalCount} 词计划</span>
          <span class="tag">${stats.reviewCount} 词复习</span>
          <span class="tag">${stats.newCount} 词新学</span>
          <span class="tag ${stats.wrongCount ? "review" : ""}">${stats.progressPercent}% 今日进度</span>
        </div>
      </div>
      <div class="daily-dictation-side">
        <div class="daily-dictation-stat">
          <strong>${stats.completedCount}</strong>
          <span>已完成</span>
        </div>
        <div class="daily-dictation-stat">
          <strong>${stats.wrongCount}</strong>
          <span>需再练</span>
        </div>
        <button class="solid-btn" data-action="open-dictation">进入每日默写</button>
      </div>
    </section>
  `;
}

function renderTopBanner(mode, category) {
  const activeFilter = store.filter;
  const actions =
    mode === "home"
      ? `
        <div class="header-actions">
          <div class="pill-group" role="tablist" aria-label="筛选分类">
            <button class="pill-btn ${activeFilter === "all" ? "active" : ""}" data-action="set-filter" data-filter="all">全部</button>
            <button class="pill-btn ${activeFilter === "started" ? "active" : ""}" data-action="set-filter" data-filter="started">已学习</button>
            <button class="pill-btn ${activeFilter === "mastered" ? "active" : ""}" data-action="set-filter" data-filter="mastered">已掌握</button>
            <button class="pill-btn ${activeFilter === "review" ? "active" : ""}" data-action="set-filter" data-filter="review">待复习</button>
          </div>
          <button class="solid-btn small" data-action="open-add-word">添加乌克兰语词汇</button>
          <button class="icon-btn" aria-label="设置" data-action="toggle-settings">⚙️</button>
        </div>
      `
      : `
        <div class="header-actions">
          <button class="toolbar-link small" data-action="go-home">返回首页</button>
          <button class="icon-btn" aria-label="设置" data-action="toggle-settings">⚙️</button>
        </div>
      `;

  return `
    <header class="top-banner ${mode === "home" ? "home-banner" : "detail-banner"}">
      <div class="brand">
        <div class="brand-mark">🌿</div>
        <div class="brand-copy">
          <p class="brand-title">乌克兰语进阶词汇卡片</p>
          <span>${mode === "home" ? "书架页 · 乌克兰语分类" : `${escapeHtml(category.nameEn)} · 乌克兰语学习页`}</span>
        </div>
      </div>
      ${actions}
    </header>
  `;
}

function renderCategoryCard(category) {
  const stats = getCategoryStats(category);
  const topicCountLabel = `${category.topics.length} 个专题`;
  const wordCountLabel = stats.totalWords ? `${stats.totalWords} 个词条` : "内容待更新";
  const progressCaption = stats.totalWords
    ? stats.started
      ? `${stats.percentage}% 学习进度`
      : "尚未开始"
    : "内容待更新";
  const statusTag = stats.totalWords
    ? stats.fullyMastered
      ? '<span class="tag mastered">已掌握</span>'
      : stats.reviewNeeded
        ? '<span class="tag review">待复习</span>'
        : stats.started
          ? '<span class="tag">已开始</span>'
          : '<span class="tag waiting">未开始</span>'
    : '<span class="tag waiting">内容待更新</span>';

  return `
    <button
      class="category-card"
      data-action="open-category"
      data-category-id="${category.id}"
      style="--accent:${category.accent};--tint:${category.tint};"
    >
      <span class="card-icon" style="background:${category.tint};color:${category.accent};">${category.icon}</span>
      <h3>${escapeHtml(category.nameZh)}</h3>
      <p>${escapeHtml(category.nameEn)}</p>
      <div class="category-meta">
        <span>${topicCountLabel}</span>
        <span>${wordCountLabel}</span>
      </div>
      <div class="category-card-footer">
        <div class="progress-caption">
          <span>${progressCaption}</span>
          ${statusTag}
        </div>
        <div class="progress-bar">
          <span style="width:${stats.percentage}%"></span>
        </div>
      </div>
    </button>
  `;
}

function getDictationAccentLabel() {
  return "标准乌克兰语";
}

function getDictationSpeedLabel() {
  const speed = store.dictationPreferences.playbackRate;
  return `倍速${Number.isInteger(speed) ? speed : speed.toFixed(1)}X`;
}

function getDictationAutoAdvanceSeconds() {
  if (!uiState.dictation.autoAdvanceEndsAt) {
    return 0;
  }

  return Math.max(0, Math.ceil((uiState.dictation.autoAdvanceEndsAt - Date.now()) / 1000));
}

function renderDictationStage(item) {
  const dictationState = ensureDailyDictationState();
  const stats = getDailyDictationStats();
  const resultKind = uiState.dictation.resultKind;
  const autoAdvanceSeconds = getDictationAutoAdvanceSeconds();
  const currentStatus = item ? getWordStatus(item.id) : null;

  if (!item) {
    return `
      <section class="dictation-stage-card dictation-stage-card--idle">
        <p class="dictation-stage-kicker">今日默写完成</p>
        <h2>今天的乌克兰语默写已经完成</h2>
        <p>当前主题为 ${escapeHtml(stats.currentTopicTitle)}。你可以返回首页继续复习其它模块，或者明天再回来继续下一轮主题计划。</p>
      </section>
    `;
  }

  if (uiState.dictation.phase === "idle") {
    return `
      <section class="dictation-stage-card dictation-stage-card--idle" data-action="dictation-start">
        <p class="dictation-stage-kicker">准备开始</p>
        <h2>点击播放后开始乌克兰语听写</h2>
        <p>今天主练 ${escapeHtml(stats.currentTopicTitle)}，当前主题还有 ${stats.remainingTopicWords} 个词待引入。下方保留了和视频一致的三个主按钮：上一个单词、再听一遍、核对答案。</p>
      </section>
    `;
  }

  if (uiState.dictation.phase === "revealed") {
    return `
      <section class="dictation-answer-card ${resultKind === "correct" ? "correct" : "wrong"}">
        <div class="dictation-answer-card__top">
          <div class="dictation-answer-card__meta">
              <strong>${escapeHtml(item.displayWord)}</strong>
            ${item.phonetic ? `<span>${escapeHtml(item.phonetic)}</span>` : ""}
            ${item.meaning ? `<span>${escapeHtml(item.meaning)}</span>` : ""}
          </div>
          <div class="dictation-answer-card__next" data-role="dictation-next-tip">
            ${autoAdvanceSeconds ? `${autoAdvanceSeconds}s 后切换下一个` : "按 Enter 跳过等待"}
          </div>
        </div>
        <div class="dictation-answer-card__body">
          <strong>${escapeHtml(item.displayWord)}</strong>
          ${
            resultKind === "wrong" && uiState.dictation.inputValue
              ? `<p>你的输入：${escapeHtml(uiState.dictation.inputValue)}</p>`
              : `<p>${resultKind === "correct" ? "这一题已核对完成。" : "这题先保留在今日再练里。"} </p>`
          }
        </div>
        <div class="dictation-answer-card__marks">
          <button class="dictation-mark-btn ${currentStatus === "known" ? "active known" : ""}" data-action="dictation-mark-known">标记熟悉</button>
          <button class="dictation-mark-btn ${currentStatus === "unknown" ? "active unknown" : ""}" data-action="dictation-mark-unknown">继续复习</button>
        </div>
      </section>
    `;
  }

  return `
    <section class="dictation-stage-card dictation-stage-card--typing">
      <div class="dictation-input-panel">
        <input
          class="dictation-input"
          data-role="dictation-input"
          value="${escapeHtml(uiState.dictation.inputValue)}"
              placeholder="听到后在这里输入"
          autocomplete="off"
          autocapitalize="off"
          spellcheck="false"
        />
      </div>
      <p class="dictation-inline-feedback ${uiState.dictation.feedback ? "visible" : ""}">
        ${escapeHtml(uiState.dictation.feedback || "输入后按 Enter 或点击“核对答案”。")}
      </p>
    </section>
  `;
}

function renderDictationPage() {
  const dictationState = ensureDailyDictationState();
  const stats = getDailyDictationStats();
  const item = getCurrentDictationItem();
  const elapsedText = dictationState.startedAt ? formatDuration(Date.now() - dictationState.startedAt) : "00:00";
  const canReplay = uiState.dictation.phase !== "revealed";
  const canCheck = uiState.dictation.phase === "typing" || uiState.dictation.phase === "revealed";

  return `
    <div class="page dictation-page">
      <section class="dictation-shell">
        <header class="dictation-topbar">
          <div class="dictation-topbar__left">
            <button class="dictation-back-btn" data-action="go-home" aria-label="返回首页">‹</button>
            <div class="dictation-title">
              <span class="dictation-title-kicker">第 ${stats.currentStageOrder || 1} 阶段 · ${escapeHtml(stats.currentStageLabel)}</span>
              <strong>每日默写 - ${escapeHtml(stats.currentTopicTitle)}</strong>
            </div>
          </div>

          <div class="dictation-topbar__center">
            <button class="dictation-control-btn" data-action="dictation-toggle-repeat">重复${store.dictationPreferences.repeatCount}次</button>
            <button class="dictation-control-btn" data-action="dictation-toggle-speed">${getDictationSpeedLabel()}</button>
            <button class="dictation-control-btn" data-action="dictation-toggle-accent">${getDictationAccentLabel()}</button>
            <button class="dictation-sound-btn" data-action="dictation-replay" aria-label="播放当前单词">🔊</button>
          </div>

          <div class="dictation-topbar__right">
            <span data-role="dictation-elapsed">${elapsedText}</span>
            <button class="dictation-end-btn" data-action="go-home">结束学习</button>
          </div>
        </header>

        <main class="dictation-main">
          ${renderDictationStage(item)}

          <div class="dictation-action-row">
            <button class="dictation-action-btn ${dictationState.currentIndex <= 0 ? "is-disabled" : ""}" data-action="dictation-prev">
              <span>↤</span>
              <em>上一个单词</em>
            </button>
            <button class="dictation-action-btn ${canReplay ? "active" : ""}" data-action="dictation-replay">
              <span>↻</span>
              <em>再听一遍</em>
            </button>
            <button class="dictation-action-btn ${canCheck ? "active" : "is-disabled"}" data-action="${uiState.dictation.phase === "revealed" ? "dictation-next" : "dictation-check"}">
              <span>✔</span>
              <em>${uiState.dictation.phase === "revealed" ? "下一个单词" : "核对答案"}</em>
            </button>
          </div>
        </main>

        <footer class="dictation-footer">
          <div class="dictation-footer__track">
            <span style="width:${stats.progressPercent}%"></span>
          </div>
          <div class="dictation-footer__meta">
            <div class="dictation-footer__tags">
              <span>总覆盖：${stats.introducedCount}/${stats.totalSourceCount} ${stats.coveragePercent}%</span>
              <span>当前主题剩余：${stats.remainingTopicWords} 词</span>
              <span>今日计划总词量：${stats.totalCount} 词</span>
              <span>今日应复习单词：${stats.reviewCount} 词</span>
              ${stats.wrongCount ? `<span class="highlight">再练推荐 ${stats.wrongCount}</span>` : ""}
              <span>需复习单词：${stats.reviewCompleted}/${stats.reviewCount} ${stats.reviewPercent}%</span>
              <span>新词学习：${stats.newCompleted}/${stats.newCount} ${stats.newPercent}%</span>
            </div>
            <button class="dictation-fullscreen-btn" data-action="dictation-fullscreen">全屏听写</button>
          </div>
        </footer>
      </section>
    </div>
  `;
}

function renderDetail(route) {
  const category = categoriesById[route.categoryId];
  const topic = category?.topics.find((item) => item.id === route.topicId) || category?.topics[0];
  const section = topic?.sections.find((item) => item.id === route.sectionId) || topic?.sections[0];

  return `
    <div class="page detail-page">
      <section class="detail-toolbar">
        <button class="back-lite-btn" data-action="go-home" aria-label="返回首页">‹</button>
      </section>
      ${
        !topic || !section
          ? renderDetailEmpty(category)
          : `
        <div class="mobile-topic-select">
          <label class="select-shell">
            <span class="topic-select-title">子话题</span>
            <select data-role="topic-select" data-category-id="${category.id}">
              ${category.topics
                .map(
                  (item) =>
                    `<option value="${item.id}" ${item.id === topic.id ? "selected" : ""}>${item.number}. ${escapeHtml(item.title)}</option>`
                )
                .join("")}
            </select>
          </label>
        </div>
        <div class="detail-shell">
          <aside class="detail-sidebar">
            <p class="eyebrow">Sub-topics</p>
            <h2>${escapeHtml(category.nameEn)}</h2>
            <p class="topic-subtitle">${escapeHtml(category.nameZh)}</p>
            <div class="topic-list">
              ${category.topics.map((item) => renderTopicItem(category.id, item, topic.id)).join("")}
            </div>
          </aside>

          <main class="detail-main">
            <div class="detail-main-header">
              <div>
                <p class="eyebrow">Vocabulary Table</p>
                <h2>${escapeHtml(section.sectionTitle)}</h2>
                <p class="detail-subtitle">${escapeHtml(section.sectionTitleZh)}</p>
              </div>
              <div class="detail-main-actions">
                <button type="button" class="header-add-btn" data-action="open-add-word">添加乌克兰语词汇</button>
                ${
                  topic
                    ? `<button type="button" class="header-reset-btn" data-action="reset-topic" data-topic-id="${topic.id}">重新背诵</button>`
                    : ""
                }
              </div>
            </div>
            <div class="section-tabs" style="--section-count:${topic.sections.length};">
              ${topic.sections.map((item, index) => renderSectionTab(category.id, topic.id, item, section.id, index)).join("")}
            </div>
            <div class="legend-row">
              <span>生词</span>
              <span>·</span>
              <span>☆ 展开笔记</span>
              <span>·</span>
              <span>✓ 已掌握</span>
              <span>·</span>
              <span>✗ 待复习</span>
              <span>·</span>
              <span>右侧看中文重述，下方按乌克兰语释义自测</span>
            </div>
            ${renderLearningGuide(topic, section)}
            <div class="study-workspace">
              <section class="workspace-top">
                <div class="vocab-panel">
                  <div class="vocab-grid">
                    ${section.words.map((word) => renderWordCard(word)).join("")}
                  </div>
                </div>
                ${renderRetellPanel(topic, section)}
              </section>
              ${renderQuizPanel(topic, section)}
            </div>
          </main>
        </div>
      `
      }
      ${renderSettingsModal()}
      ${renderAddWordModal(route)}
    </div>
  `;
}

function renderDetailEmpty(category) {
  const fallbackCategories = categories.slice(0, 2);
  return `
    <div class="detail-empty">
      <p class="eyebrow">Coming Soon</p>
      <h2>这个分类正在整理成笔记页</h2>
      <p class="empty-copy">
        ${escapeHtml(category.nameZh)} 已经进入书架，但当前还没有可展示的词条数据。你可以先从已经完成的乌克兰语分类开始继续复习。
      </p>
      <div class="hero-actions">
        ${fallbackCategories
          .map(
            (item, index) =>
              `<button class="${index === 0 ? "solid-btn" : "ghost-btn"} small" data-action="resume-route" data-target="#/category/${item.id}">打开 ${escapeHtml(
                item.nameEn
              )}</button>`
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderTopicItem(categoryId, topic, activeTopicId) {
  const stats = getTopicStats(topic);
  const mastery = stats.mastery || "pending";

  return `
    <button class="topic-item ${topic.id === activeTopicId ? "active" : ""}" data-action="open-topic" data-category-id="${categoryId}" data-topic-id="${topic.id}">
      <strong><span class="topic-index">${topic.number}</span>${escapeHtml(topic.title)}</strong>
      <div class="topic-progress-row">
        <span>${stats.seenWords}/${stats.totalWords} 已标记</span>
        <span class="mode-chip ${mastery}">${mastery === "pending" ? "未自评" : masteryLabels[mastery]}</span>
      </div>
    </button>
  `;
}

function renderSectionTab(categoryId, topicId, section, activeSectionId, index) {
  const sectionKey = String.fromCharCode(65 + index);

  return `
    <button class="tab-btn ${section.id === activeSectionId ? "active" : ""}" data-action="open-section" data-category-id="${categoryId}" data-topic-id="${topicId}" data-section-id="${section.id}">
      <span class="tab-key">${sectionKey}</span>
      <span class="tab-copy">
        <strong>${escapeHtml(section.tabLabel)}</strong>
        <em>${escapeHtml(section.tabLabelZh)}</em>
      </span>
    </button>
  `;
}

function getAudioButtonPresentation(word, label = word) {
  const isLoading = audioState.loadingText === word;
  const isPlaying = audioState.playingText === word;
  const icon = isLoading ? "…" : isPlaying ? "■" : "🔊";
  const stateClass = isLoading ? "loading" : isPlaying ? "playing" : "";
  const title = isLoading ? `正在生成 ${label} 的语音` : isPlaying ? `停止朗读 ${label}` : `朗读 ${label}`;

  return { isLoading, isPlaying, icon, stateClass, title };
}

function renderAudioButton(word, label) {
  const { icon, stateClass, title } = getAudioButtonPresentation(word, label);

  return `<button type="button" class="audio-btn ${stateClass}" data-action="speak-word" data-word="${escapeHtml(word)}" aria-label="${escapeHtml(title)}" title="${escapeHtml(title)}">${icon}</button>`;
}

function refreshAudioButtons() {
  document.querySelectorAll("[data-action='speak-word']").forEach((button) => {
    const word = button.dataset.word || "";
    const { isLoading, isPlaying, icon, title } = getAudioButtonPresentation(word, word);
    button.classList.toggle("loading", isLoading);
    button.classList.toggle("playing", isPlaying);
    button.textContent = icon;
    button.setAttribute("aria-label", title);
    button.setAttribute("title", title);
  });
}

function renderWordCard(word) {
  const isExpanded = uiState.expandedWordIds.has(word.id);
  const status = getWordStatus(word.id);

  return `
    <article class="word-card ${status || ""} ${isExpanded ? "expanded" : ""}">
      <div class="word-card-head">
        ${renderAudioButton(word.word, word.word)}
        <button class="word-trigger" data-action="toggle-word" data-word-id="${word.id}">
          <span class="word-card-word">${escapeHtml(word.word)}</span>
          <span class="word-card-zh">${escapeHtml(word.definitionZh)}</span>
          <span class="word-card-en">${escapeHtml(word.definitionEn)}</span>
        </button>
        <div class="word-actions">
          <button class="status-btn known ${status === "known" ? "active" : ""}" data-action="mark-word" data-word-id="${word.id}" data-status="known" aria-label="标记为已掌握">✓</button>
          <button class="status-btn unknown ${status === "unknown" ? "active" : ""}" data-action="mark-word" data-word-id="${word.id}" data-status="unknown" aria-label="标记为未掌握">✗</button>
        </div>
      </div>
      ${
        isExpanded
          ? `
        <div class="word-card-detail">
          ${word.noteZh ? `<p>${escapeHtml(word.noteZh)}</p>` : `<p>再次点击可收起这条词汇卡片。</p>`}
        </div>
      `
          : ""
      }
    </article>
  `;
}

function getStudyPanelState(topic, section) {
  const learningState = getSectionLearningState(topic, section);
  const { revealedWords, allRevealed } = learningState;
  const showEnglish = uiState.revealEnglishTopics.has(topic.id);
  const currentMastery = store.topicMastery[topic.id] || null;

  return { ...learningState, revealedWords, allRevealed, showEnglish, currentMastery };
}

function renderLearningGuide(topic, section) {
  const learningState = getSectionLearningState(topic, section);

  return `
    <section class="learning-guide phase-${learningState.phase}">
      <div class="learning-guide-copy">
        <p class="eyebrow">科学复习联动</p>
        <h3>${escapeHtml(learningState.headline)}</h3>
        <p>${escapeHtml(learningState.detail)}</p>
      </div>
      <div class="learning-guide-pills">
        <span class="learning-pill neutral">未判断 ${learningState.unseenWords}</span>
        <span class="learning-pill review">待复习 ${learningState.unknownWords}</span>
        <span class="learning-pill stable">已掌握 ${learningState.knownWords}</span>
        ${
          learningState.reviewPlan
            ? `<span class="learning-pill schedule">下次 ${escapeHtml(getRelativeReviewLabel(learningState.reviewPlan.nextReviewAt))}</span>`
            : ""
        }
      </div>
    </section>
  `;
}

function renderReviewPlanNotice(topicId) {
  const reviewPlan = store.topicReviewPlan[topicId];

  if (!reviewPlan) {
    return "";
  }

  return `
    <div class="review-plan-note">
      <strong>下次复习建议：${escapeHtml(getRelativeReviewLabel(reviewPlan.nextReviewAt))}</strong>
      <p>${escapeHtml(formatReviewDate(reviewPlan.nextReviewAt))} 再回来做一轮快速回忆，当前间隔为 ${reviewPlan.intervalDays} 天。</p>
    </div>
  `;
}

function renderRetellPanel(topic, section) {
  const { showEnglish, unknownWords, unseenWords } = getStudyPanelState(topic, section);

  return `
    <aside class="retell-panel">
      <div class="study-card study-card-retell">
        <div class="study-card-top">
          <p class="eyebrow">中文区，尝试用乌克兰语复述这段</p>
          <p class="retell-method-note">先自己说，再展开乌克兰语核对。${unknownWords > 0 ? `本轮优先把 ${unknownWords} 个待复习词带进复述。` : unseenWords > 0 ? `先补完还没判断熟练度的 ${unseenWords} 个词，再回来复述。` : "如果能完整说出来，记忆会更稳。"} </p>
          <div class="translation-card retell-copy-card">
            <p>${escapeHtml(topic.promptZh)}</p>
            ${
              showEnglish
                ? `
              <div class="english-sample">
                <p>${escapeHtml(topic.promptEn)}</p>
              </div>
            `
                : ""
            }
          </div>
        </div>
        <button type="button" class="study-inline-toggle ${showEnglish ? "active" : ""}" data-action="toggle-english" data-topic-id="${topic.id}">
          ${showEnglish ? "隐藏乌克兰语原文" : "展开乌克兰语原文"}
        </button>
      </div>
    </aside>
  `;
}

function renderQuizPanel(topic, section) {
  const { revealedWords, allRevealed, currentMastery } = getStudyPanelState(topic, section);
  const sortedWords = sortWordsForReview(section.words, revealedWords);

  return `
    <section class="quiz-panel">
      <div class="study-card study-card-quiz">
        <div class="study-card-top">
          <p class="eyebrow">Quiz</p>
          <div class="study-card-hero">
            <h3 class="panel-title">翻过中文，请根据乌克兰语释义回想单词</h3>
            <span class="study-side-pill count-pill" aria-label="已显示 ${revealedWords.length}/${section.words.length}">
              <strong>${revealedWords.length}/${section.words.length}</strong>
              <em>已显示</em>
            </span>
          </div>
          <p class="panel-copy">先独立回忆，再按“显示答案”。下一次复习时，右侧记录会继续保留。</p>
        </div>
        <div class="quiz-list">
          ${sortedWords.map((word, index) => renderQuizItem(section.id, word, index, revealedWords)).join("")}
        </div>
        ${
          allRevealed
            ? `
          <div class="assessment-block">
            <p>这组词你现在的感觉更接近哪一种？${currentMastery ? `当前记录：${masteryLabels[currentMastery]}` : ""}</p>
            <div class="assessment-row">
              <button class="assessment-btn proficient" data-action="assess-topic" data-topic-id="${topic.id}" data-mastery="proficient">熟练</button>
              <button class="assessment-btn average" data-action="assess-topic" data-topic-id="${topic.id}" data-mastery="average">一般</button>
              <button class="assessment-btn unfamiliar" data-action="assess-topic" data-topic-id="${topic.id}" data-mastery="unfamiliar">完全不熟悉</button>
            </div>
          </div>
        `
            : ""
        }
        ${renderReviewPlanNotice(topic.id)}
        <p class="study-footer">答案全部显示后，底部才会出现自评按钮组。</p>
      </div>
    </section>
  `;
}

function renderQuizItem(sectionId, word, index, revealedWords) {
  const revealed = revealedWords.includes(word.id);

  return `
    <article class="quiz-item ${revealed ? "revealed" : ""}">
      <strong>${String(index + 1).padStart(2, "0")} · ${escapeHtml(word.definitionEn)}</strong>
      ${
        revealed
          ? `
        <div class="quiz-answer">
          <div>
            <strong>${escapeHtml(word.word)}</strong>
            <p>${escapeHtml(word.definitionZh)}</p>
          </div>
          ${renderAudioButton(word.word, word.word)}
        </div>
      `
          : `<button type="button" class="quiz-reveal-btn" data-action="reveal-answer" data-section-id="${sectionId}" data-word-id="${word.id}">显示答案</button>`
      }
    </article>
  `;
}

function renderSettingsModal() {
  if (!uiState.settingsOpen) {
    return "";
  }

  return `
    <div class="settings-backdrop" data-action="close-settings"></div>
    <section class="settings-modal" role="dialog" aria-modal="true" aria-label="学习设置">
      <p class="eyebrow">Settings</p>
      <h2>学习设置</h2>
      <p class="settings-copy">这里控制乌克兰语发音偏好和本地记录。词汇发音会优先请求站点自己的 TTS 接口，拿到真实音频后播放；如果接口不可用，再回退到浏览器内置发音。</p>
      <div class="settings-grid">
        <div class="settings-row">
          <label>
            发音偏好
            <span class="helper-text">uk-UA 会同时影响 TTS 接口和浏览器回退发音。</span>
          </label>
          <select data-role="voice-select">
            <option value="uk-UA" ${store.voice === "uk-UA" ? "selected" : ""}>标准乌克兰语 · uk-UA</option>
          </select>
        </div>
        <div class="settings-row">
          <label>
            当前筛选
            <span class="helper-text">书架页会记住你最近一次选择的筛选标签。</span>
          </label>
          <span class="tag">${store.filter === "all" ? "全部" : store.filter === "started" ? "已学习" : store.filter === "mastered" ? "已掌握" : "待复习"}</span>
        </div>
      </div>

      <div class="danger-zone">
        <h3>清空本地学习记录</h3>
        <p>会移除所有 ✓ / ✗ 标记、自评结果和右侧测验显示状态，但不会删掉页面内容。</p>
        <button class="ghost-btn small danger-btn" data-action="clear-progress">清空全部记录</button>
      </div>

      <div class="hero-actions">
        <button class="solid-btn small" data-action="close-settings">完成</button>
      </div>
    </section>
  `;
}

function getInitialAddWordPlacement(route = getRoute()) {
  if (route.view === "category" && route.categoryId && route.topicId && route.sectionId) {
    return createPlacementValue(route.categoryId, route.topicId, route.sectionId);
  }

  return getAllSectionOptions()[0]?.value || "";
}

function renderPlacementOptions(selectedValue) {
  return getAllSectionOptions()
    .map(
      (option) =>
        `<option value="${option.value}" ${option.value === selectedValue ? "selected" : ""}>${escapeHtml(
          `${option.categoryNameEn} / ${option.topicNumber}. ${option.topicTitle} / ${option.sectionTitle}`
        )}</option>`
    )
    .join("");
}

function renderAddWordModal(route = getRoute()) {
  if (!uiState.addWordOpen) {
    return "";
  }

  const selectedPlacement = getInitialAddWordPlacement(route);

  return `
    <div class="settings-backdrop" data-action="close-add-word"></div>
    <section class="settings-modal word-entry-modal" role="dialog" aria-modal="true" aria-label="添加乌克兰语词汇">
      <p class="eyebrow">Add Word</p>
      <h2>添加乌克兰语词汇</h2>
      <p class="settings-copy">你只要输入一个乌克兰语单词，我会优先从当前词库和本地词书里补全释义，不够时再自动查词，然后按词义帮你推荐分类。</p>

      <div class="word-entry-inline">
        <label class="word-entry-field word-entry-field-full">
          <span>乌克兰语单词</span>
          <input data-role="word-draft-input" data-field="word" placeholder="例如: Vorstellungsgespräch" />
        </label>
        <button type="button" class="solid-btn small word-autofill-btn" data-action="autofill-word" data-role="autofill-word-btn">
          自动补全释义
        </button>
      </div>

      <p class="word-lookup-status" data-role="word-lookup-status" data-state="idle">
        只输入乌克兰语单词即可；你也可以直接点底部保存，我会先自动补全再保存。
      </p>

      <div class="word-entry-grid">
        <label class="word-entry-field">
          <span>乌克兰语释义</span>
          <input data-role="word-draft-input" data-field="definitionEn" placeholder="例如: ein Gespräch, um sich für eine Stelle vorzustellen" />
        </label>
        <label class="word-entry-field">
          <span>中文释义</span>
          <input data-role="word-draft-input" data-field="definitionZh" placeholder="例如: 面试 / 求职谈话" />
        </label>
        <label class="word-entry-field word-entry-field-full">
          <span>中文笔记</span>
          <textarea data-role="word-draft-input" data-field="noteZh" rows="4" placeholder="补充用法、搭配或你自己的记忆点"></textarea>
        </label>
      </div>

      <div class="classification-box">
        <div>
          <p class="classification-label">系统推荐分类</p>
          <strong data-role="classification-preview">${escapeHtml(getPlacementLabel(selectedPlacement))}</strong>
        </div>
        <button type="button" class="ghost-btn small" data-action="recommend-word-placement">重算分类</button>
      </div>

      <label class="word-entry-field word-entry-field-full">
        <span>保存位置</span>
        <select data-role="placement-select" data-selection-mode="auto">
          ${renderPlacementOptions(selectedPlacement)}
        </select>
      </label>

      <div class="hero-actions">
        <button class="ghost-btn small" data-action="close-add-word">取消</button>
        <button class="solid-btn small" data-action="save-word" data-role="save-word-btn">自动归类并保存</button>
      </div>
    </section>
  `;
}

function readAddWordDraftFromDom() {
  const fieldMap = {};

  document.querySelectorAll("[data-role='word-draft-input']").forEach((field) => {
    fieldMap[field.dataset.field] = field.value.trim();
  });

  return {
    word: fieldMap.word || "",
    definitionEn: fieldMap.definitionEn || "",
    definitionZh: fieldMap.definitionZh || "",
    noteZh: fieldMap.noteZh || "",
  };
}

function refreshAddWordRecommendation({ applySelection = false } = {}) {
  const modal = document.querySelector(".word-entry-modal");

  if (!modal) {
    return;
  }

  const draft = readAddWordDraftFromDom();
  const recommendation = getRecommendedPlacement(draft, getRoute());
  const preview = modal.querySelector("[data-role='classification-preview']");
  const select = modal.querySelector("[data-role='placement-select']");

  if (preview) {
    preview.textContent = recommendation.label || "还没有可用分类";
  }

  if (select && (applySelection || select.dataset.selectionMode !== "manual")) {
    select.value = recommendation.value;
    select.dataset.selectionMode = "auto";
  }
}

function setAddWordLookupStatus(state = "idle", message = "") {
  const statusNode = document.querySelector("[data-role='word-lookup-status']");
  const autoFillButton = document.querySelector("[data-role='autofill-word-btn']");
  const saveButton = document.querySelector("[data-role='save-word-btn']");

  if (statusNode) {
    statusNode.dataset.state = state;
    statusNode.textContent = message || "只输入乌克兰语单词即可；你也可以直接点底部保存，我会先自动补全再保存。";
  }

  if (autoFillButton) {
    autoFillButton.disabled = state === "loading";
    autoFillButton.textContent = state === "loading" ? "补全中..." : "自动补全释义";
  }

  if (saveButton) {
    saveButton.disabled = state === "loading";
  }
}

function formatLookupSource(source) {
  return String(source || "")
    .replaceAll("dictionaryapi.dev", "乌克兰语在线词典")
    .replaceAll("当前词库", "当前词库")
    .replaceAll("本地词书", "本地词书");
}

function setPlacementSelection(value, mode = "auto") {
  const preview = document.querySelector("[data-role='classification-preview']");
  const select = document.querySelector("[data-role='placement-select']");

  if (select && value) {
    select.value = value;
    select.dataset.selectionMode = mode;
  }

  if (preview) {
    preview.textContent = getPlacementLabel(value) || "还没有可用分类";
  }
}

function fillWordDraftFields(payload) {
  const fields = {
    word: payload.word,
    definitionEn: payload.definitionEn,
    definitionZh: payload.definitionZh,
    noteZh: payload.noteZh,
  };

  for (const [fieldName, fieldValue] of Object.entries(fields)) {
    const input = document.querySelector(`[data-role='word-draft-input'][data-field='${fieldName}']`);
    const nextValue = String(fieldValue || "").trim();

    if (!input || !nextValue) {
      continue;
    }

    if (fieldName === "noteZh" && input.value.trim()) {
      const merged = [input.value.trim(), nextValue].filter((value, index, array) => value && array.indexOf(value) === index).join("\n");
      input.value = merged;
      continue;
    }

    if (!input.value.trim() || fieldName === "word") {
      input.value = nextValue;
    }
  }
}

async function fetchWordEnrichment(word) {
  const response = await fetch("/api/word-enrich", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ word }),
  });
  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload.error || "自动补全失败");
  }

  return payload;
}

async function autofillWordDraftFromLookup({ silent = false, applySelection = true } = {}) {
  const draft = readAddWordDraftFromDom();
  const word = draft.word.trim();

  if (!word) {
    if (!silent) {
      window.alert("请先输入一个乌克兰语单词。");
    }
    return null;
  }

  const duplicate = findExistingWordByText(word);

  if (duplicate) {
    fillWordDraftFields(duplicate.word);
    setPlacementSelection(duplicate.placement, "auto");
    setAddWordLookupStatus("success", `已从当前词库找到这个词，位置：${getPlacementLabel(duplicate.placement)}。`);
    return {
      ...duplicate.word,
      source: "当前词库",
    };
  }

  setAddWordLookupStatus("loading", "正在自动补全释义…");

  try {
    const payload = await fetchWordEnrichment(word);
    fillWordDraftFields(payload);
    refreshAddWordRecommendation({ applySelection });
    setAddWordLookupStatus(
      "success",
      `已自动补全释义并推荐分类。来源：${formatLookupSource(payload.source) || "词典资源"}。`
    );
    return payload;
  } catch (error) {
    setAddWordLookupStatus("error", error.message || "自动补全失败，请稍后再试。");

    if (!silent) {
      window.alert(error.message || "自动补全失败，请稍后再试。");
    }

    return null;
  }
}

function findExistingWordByText(wordText) {
  const aliases = buildWordAliases(wordText);

  if (!aliases.size) {
    return null;
  }

  for (const category of categories) {
    for (const topic of category.topics) {
      for (const section of topic.sections) {
        const existing = section.words.find((word) => {
          const existingAliases = buildWordAliases(word.word);
          return [...aliases].some((alias) => existingAliases.has(alias));
        });

        if (existing) {
          return {
            word: existing,
            placement: createPlacementValue(category.id, topic.id, section.id),
          };
        }
      }
    }
  }

  return null;
}

async function saveWordFromModal() {
  let draft = readAddWordDraftFromDom();

  if (!draft.word) {
    window.alert("请先输入一个乌克兰语单词。");
    return;
  }

  const duplicate = findExistingWordByText(draft.word);

  if (duplicate) {
    const duplicatePlacement = parsePlacementValue(duplicate.placement);
    window.alert(`这个词已经存在于 ${getPlacementLabel(duplicate.placement)} 里了。`);
    setHash(getHashForCategory(duplicatePlacement.categoryId, duplicatePlacement.topicId, duplicatePlacement.sectionId));
    uiState.addWordOpen = false;
    render();
    return;
  }

  if (!draft.definitionEn || !draft.definitionZh) {
    await autofillWordDraftFromLookup({ silent: true, applySelection: true });
    draft = readAddWordDraftFromDom();
  }

  if (!draft.definitionEn || !draft.definitionZh) {
    setAddWordLookupStatus("error", "这个词还没有拿到完整释义。你可以再点一次自动补全，或手动补充后保存。");
    window.alert("这个词还没有拿到完整释义。你可以再点一次自动补全，或手动补充后保存。");
    return;
  }

  const recommendation = getRecommendedPlacement(draft, getRoute());
  const select = document.querySelector("[data-role='placement-select']");
  const placementValue =
    select?.dataset.selectionMode === "manual" && select.value ? select.value : recommendation.value || select?.value || "";
  const placement = parsePlacementValue(placementValue);
  const idBase = slugifyValue(draft.word) || "custom-word";
  const newEntry = {
    id: `custom-${idBase}-${Date.now()}`,
    ...draft,
    ...placement,
    createdAt: new Date().toISOString(),
  };

  if (!appendWordToSection(newEntry)) {
    window.alert("没有找到可保存的位置，请重新选择分类。");
    return;
  }

  store.customWords.push(newEntry);
  uiState.addWordOpen = false;
  uiState.settingsOpen = false;
  persistStore(false);

  const targetHash = getHashForCategory(placement.categoryId, placement.topicId, placement.sectionId);

  if (window.location.hash !== targetHash) {
    setHash(targetHash);
    return;
  }

  render();
}

function formatDuration(ms) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function waitFor(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function clearDictationCountdown() {
  if (dictationRuntime.countdownIntervalId) {
    window.clearInterval(dictationRuntime.countdownIntervalId);
    dictationRuntime.countdownIntervalId = null;
  }
}

function clearDictationAutoAdvance() {
  if (dictationRuntime.autoAdvanceIntervalId) {
    window.clearInterval(dictationRuntime.autoAdvanceIntervalId);
    dictationRuntime.autoAdvanceIntervalId = null;
  }

  if (dictationRuntime.autoAdvanceTimeoutId) {
    window.clearTimeout(dictationRuntime.autoAdvanceTimeoutId);
    dictationRuntime.autoAdvanceTimeoutId = null;
  }

  uiState.dictation.autoAdvanceEndsAt = null;
}

function syncDictationLiveRegions() {
  const elapsedNode = document.querySelector("[data-role='dictation-elapsed']");

  if (elapsedNode) {
    elapsedNode.textContent = store.dailyDictation.startedAt ? formatDuration(Date.now() - store.dailyDictation.startedAt) : "00:00";
  }

  const nextTipNode = document.querySelector("[data-role='dictation-next-tip']");

  if (nextTipNode && uiState.dictation.autoAdvanceEndsAt) {
    const seconds = getDictationAutoAdvanceSeconds();
    nextTipNode.textContent = seconds ? `${seconds}s 后切换下一个` : "按 Enter 跳过等待";
  }
}

function startDictationElapsedTicker() {
  if (dictationRuntime.elapsedIntervalId) {
    window.clearInterval(dictationRuntime.elapsedIntervalId);
    dictationRuntime.elapsedIntervalId = null;
  }

  if (getRoute().view !== "dictation") {
    return;
  }

  syncDictationLiveRegions();
  dictationRuntime.elapsedIntervalId = window.setInterval(syncDictationLiveRegions, 1000);
}

function focusDictationInput() {
  const input = document.querySelector("[data-role='dictation-input']");

  if (!input) {
    return;
  }

  input.focus();
  const length = input.value.length;

  if (typeof input.setSelectionRange === "function") {
    input.setSelectionRange(length, length);
  }
}

function resetDictationUiState(nextPhase = "idle") {
  uiState.dictation = {
    ...createDefaultDictationUiState(),
    phase: nextPhase,
  };
}

async function playCurrentDictationPrompt() {
  const currentItem = getCurrentDictationItem();

  if (!currentItem) {
    return;
  }

  clearDictationAutoAdvance();
  uiState.dictation.feedback = "";
  uiState.dictation.phase = "typing";
  render();

  const totalPlays = store.dictationPreferences.repeatCount + 1;

  for (let index = 0; index < totalPlays; index += 1) {
    await speakWord(currentItem.promptText, store.dictationPreferences.playbackRate);

    if (index < totalPlays - 1) {
      await waitFor(260);
    }
  }

  focusDictationInput();
}

function startDictationCountdown() {
  const currentItem = getCurrentDictationItem();

  if (!currentItem) {
    resetDictationUiState("finished");
    render();
    return;
  }

  ensureDailyDictationState();

  if (!store.dailyDictation.startedAt) {
    store.dailyDictation.startedAt = Date.now();
    persistStore(false);
  }

  clearDictationCountdown();
  clearDictationAutoAdvance();
  uiState.dictation.feedback = "";
  uiState.dictation.inputValue = "";
  playCurrentDictationPrompt();
}

function moveToNextDictationItem() {
  const dictationState = ensureDailyDictationState();

  clearDictationAutoAdvance();
  clearDictationCountdown();

  if (dictationState.currentIndex >= dictationState.deckIds.length - 1) {
    dictationState.currentIndex = dictationState.deckIds.length;
    persistStore(false);
    resetDictationUiState("finished");
    render();
    return;
  }

  dictationState.currentIndex += 1;
  persistStore(false);
  resetDictationUiState("idle");
  startDictationCountdown();
}

function moveToPreviousDictationItem() {
  const dictationState = ensureDailyDictationState();

  if (dictationState.currentIndex <= 0) {
    return;
  }

  clearDictationAutoAdvance();
  clearDictationCountdown();
  dictationState.currentIndex -= 1;
  persistStore(false);
  resetDictationUiState("typing");
  render();
  focusDictationInput();
}

function markCurrentDictationWord(status) {
  const currentItem = getCurrentDictationItem();

  if (!currentItem) {
    return;
  }

  syncManualDictationStatus(currentItem, status);
  updateWordStatus(currentItem.id, status);
}

function scheduleDictationAutoAdvance() {
  clearDictationAutoAdvance();
  uiState.dictation.autoAdvanceEndsAt = Date.now() + 4000;
  syncDictationLiveRegions();
  dictationRuntime.autoAdvanceIntervalId = window.setInterval(syncDictationLiveRegions, 250);
  dictationRuntime.autoAdvanceTimeoutId = window.setTimeout(moveToNextDictationItem, 4000);
}

function checkCurrentDictationAnswer() {
  const currentItem = getCurrentDictationItem();
  const dictationState = ensureDailyDictationState();

  if (!currentItem || uiState.dictation.phase !== "typing") {
    return;
  }

  const result = evaluateDictationAttempt(uiState.dictation.inputValue, currentItem);

  if (result.kind === "nearMiss") {
    uiState.dictation.feedback = result.feedback;
    render();
    focusDictationInput();
    return;
  }

  if (!dictationState.completedIds.includes(currentItem.id)) {
    dictationState.completedIds.push(currentItem.id);
  }

  if (result.kind === "correct") {
    upsertDictationProgress(currentItem, "correct");
  } else {
    upsertDictationProgress(currentItem, "wrong");

    if (!dictationState.wrongIds.includes(currentItem.id)) {
      dictationState.wrongIds.push(currentItem.id);
    }
  }

  persistStore(false);
  uiState.dictation.phase = "revealed";
  uiState.dictation.resultKind = result.kind;
  uiState.dictation.feedback = "";
  render();
  scheduleDictationAutoAdvance();
}

function toggleDictationRepeatCount() {
  const currentIndex = DICTATION_REPEAT_OPTIONS.indexOf(store.dictationPreferences.repeatCount);
  const nextIndex = (currentIndex + 1) % DICTATION_REPEAT_OPTIONS.length;
  store.dictationPreferences.repeatCount = DICTATION_REPEAT_OPTIONS[nextIndex];
  persistStore();
}

function toggleDictationSpeed() {
  const currentIndex = DICTATION_SPEED_OPTIONS.indexOf(store.dictationPreferences.playbackRate);
  const nextIndex = (currentIndex + 1) % DICTATION_SPEED_OPTIONS.length;
  store.dictationPreferences.playbackRate = DICTATION_SPEED_OPTIONS[nextIndex];
  persistStore();
}

function toggleDictationAccent() {
  store.dictationPreferences.accent = "uk-UA";
  store.voice = "uk-UA";
  persistStore();
}

function toggleDictationFullscreen() {
  const shell = document.querySelector(".dictation-shell");

  if (!shell) {
    return;
  }

  if (document.fullscreenElement) {
    document.exitFullscreen?.();
    return;
  }

  shell.requestFullscreen?.();
}

function render() {
  const route = getRoute();

  if (route.view === "category" && window.location.hash !== store.lastRoute) {
    store.lastRoute = window.location.hash;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  }

  document.body.classList.toggle("modal-open", uiState.settingsOpen || uiState.addWordOpen || uiState.drawerOpen);
  app.innerHTML = `${
    route.view === "home" ? renderHome() : route.view === "dictation" ? renderDictationPage() : renderDetail(route)
  }${route.view === "home" ? renderAddWordModal(route) : ""}`;
  refreshAudioButtons();
  startDictationElapsedTicker();

  if (route.view === "dictation" && uiState.dictation.phase === "typing") {
    focusDictationInput();
  }
}

function updateWordStatus(wordId, nextStatus) {
  const currentStatus = store.wordStatus[wordId] || null;

  if (currentStatus === nextStatus) {
    delete store.wordStatus[wordId];
  } else {
    store.wordStatus[wordId] = nextStatus;
  }

  const topic = findTopicByWordId(wordId);

  if (topic) {
    delete store.topicMastery[topic.id];
    delete store.topicReviewPlan[topic.id];
  }

  persistStore();
}

function revealAnswer(sectionId, wordId) {
  const current = store.quizRevealed[sectionId] || [];

  if (!current.includes(wordId)) {
    store.quizRevealed[sectionId] = [...current, wordId];
    persistStore();
  }
}

function resetTopic(topicId) {
  const topic = categories.flatMap((category) => category.topics).find((item) => item.id === topicId);

  if (!topic) {
    return;
  }

  const wordIds = getWordsForTopic(topic).map((word) => word.id);

  for (const wordId of wordIds) {
    delete store.wordStatus[wordId];
    uiState.expandedWordIds.delete(wordId);
  }

  for (const section of topic.sections) {
    delete store.quizRevealed[section.id];
  }

  delete store.topicMastery[topic.id];
  delete store.topicReviewPlan[topic.id];
  persistStore();
}

function clearProgress() {
  const preservedCustomWords = store.customWords || [];
  store = {
    ...getDefaultStore(),
    customWords: preservedCustomWords,
  };
  uiState.expandedWordIds.clear();
  uiState.revealEnglishTopics.clear();
  uiState.settingsOpen = false;
  uiState.addWordOpen = false;
  uiState.drawerOpen = false;
  persistStore();
}

function toggleWord(wordId) {
  if (uiState.expandedWordIds.has(wordId)) {
    uiState.expandedWordIds.delete(wordId);
  } else {
    uiState.expandedWordIds.add(wordId);
  }

  render();
}

function toggleEnglish(topicId) {
  if (uiState.revealEnglishTopics.has(topicId)) {
    uiState.revealEnglishTopics.delete(topicId);
  } else {
    uiState.revealEnglishTopics.add(topicId);
  }

  render();
}

function cleanupAudioElement() {
  if (audioState.currentAudio) {
    audioState.currentAudio.pause();
    audioState.currentAudio.src = "";
    audioState.currentAudio = null;
  }

  if (audioState.currentObjectUrl) {
    URL.revokeObjectURL(audioState.currentObjectUrl);
    audioState.currentObjectUrl = null;
  }
}

function stopCurrentSpeech(resetToken = true) {
  if (resetToken) {
    audioState.token += 1;
  }

  cleanupAudioElement();
  window.speechSynthesis?.cancel();
  audioState.loadingText = null;
  audioState.playingText = null;
}

async function fetchTtsAudio(text, speed = 1, voice = store.voice) {
  const response = await fetch("/api/tts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: text,
      voice,
      format: "mp3",
      speed,
    }),
  });

  if (!response.ok) {
    throw new Error(`TTS request failed with ${response.status}`);
  }

  const audioBlob = await response.blob();

  if (!audioBlob.size) {
    throw new Error("Received empty TTS audio");
  }

  return audioBlob;
}

function playFetchedAudio(audioBlob, text, token) {
  cleanupAudioElement();

  const objectUrl = URL.createObjectURL(audioBlob);
  const audio = new Audio(objectUrl);
  audio.preload = "auto";
  audioState.currentAudio = audio;
  audioState.currentObjectUrl = objectUrl;
  audioState.playingText = text;
  audioState.loadingText = null;
  refreshAudioButtons();

  return new Promise((resolve, reject) => {
    audio.onended = () => {
      if (audioState.token === token) {
        cleanupAudioElement();
        audioState.playingText = null;
        refreshAudioButtons();
      }
      resolve();
    };

    audio.onerror = () => {
      if (audioState.token === token) {
        cleanupAudioElement();
        audioState.playingText = null;
        refreshAudioButtons();
      }
      reject(new Error("Audio playback failed"));
    };

    audio.play().catch(reject);
  });
}

function playBrowserSpeech(text, token, voice = store.voice, speed = 1) {
  if (!("speechSynthesis" in window)) {
    return Promise.reject(new Error("speechSynthesis unavailable"));
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  const voices = window.speechSynthesis.getVoices();
  const preferredVoice = voices.find((item) => item.lang.toLowerCase().startsWith(voice.toLowerCase()));

  utterance.lang = voice;
  utterance.rate = Math.max(0.7, Math.min(1.25, speed));

  if (preferredVoice) {
    utterance.voice = preferredVoice;
  }

  audioState.loadingText = null;
  audioState.playingText = text;
  refreshAudioButtons();

  return new Promise((resolve, reject) => {
    utterance.onend = () => {
      if (audioState.token === token) {
        audioState.playingText = null;
        refreshAudioButtons();
      }
      resolve();
    };

    utterance.onerror = () => {
      if (audioState.token === token) {
        audioState.playingText = null;
        refreshAudioButtons();
      }
      reject(new Error("Browser speech failed"));
    };

    window.speechSynthesis.speak(utterance);
  });
}

async function speakWord(text, speed = 1, voice = store.voice) {
  if (audioState.playingText === text || audioState.loadingText === text) {
    stopCurrentSpeech();
    refreshAudioButtons();
    return;
  }

  stopCurrentSpeech(false);
  audioState.token += 1;
  const currentToken = audioState.token;
  audioState.loadingText = text;
  audioState.playingText = null;
  refreshAudioButtons();

  try {
    const audioBlob = await fetchTtsAudio(text, speed, voice);

    if (audioState.token !== currentToken) {
      return;
    }

    await playFetchedAudio(audioBlob, text, currentToken);
    return;
  } catch (ttsError) {
    try {
      if (audioState.token !== currentToken) {
        return;
      }

      await playBrowserSpeech(text, currentToken, voice, speed);
      return;
    } catch (speechError) {
      if (audioState.token === currentToken) {
        audioState.loadingText = null;
        audioState.playingText = null;
        refreshAudioButtons();
      }

      window.alert("乌克兰语语音播放失败。请用 python3 server.py 启动本站，这样按钮会优先使用真实 TTS 音频。");
    }
  }
}

function handleDocumentClick(event) {
  const target = event.target.closest("[data-action]");

  if (!target) {
    return;
  }

  const { action } = target.dataset;

  if (action === "set-filter") {
    store.filter = target.dataset.filter;
    persistStore();
    return;
  }

  if (action === "toggle-settings") {
    uiState.settingsOpen = true;
    uiState.addWordOpen = false;
    render();
    return;
  }

  if (action === "close-settings") {
    uiState.settingsOpen = false;
    render();
    return;
  }

  if (action === "open-add-word") {
    uiState.addWordOpen = true;
    uiState.settingsOpen = false;
    render();
    return;
  }

  if (action === "open-dictation") {
    setHash("#/dictation");
    return;
  }

  if (action === "close-add-word") {
    uiState.addWordOpen = false;
    render();
    return;
  }

  if (action === "recommend-word-placement") {
    refreshAddWordRecommendation({ applySelection: true });
    return;
  }

  if (action === "autofill-word") {
    autofillWordDraftFromLookup({ applySelection: true });
    return;
  }

  if (action === "save-word") {
    saveWordFromModal();
    return;
  }

  if (action === "dictation-start") {
    startDictationCountdown();
    return;
  }

  if (action === "dictation-replay") {
    if (uiState.dictation.phase === "idle" || uiState.dictation.phase === "finished") {
      startDictationCountdown();
      return;
    }

    playCurrentDictationPrompt();
    return;
  }

  if (action === "dictation-check") {
    checkCurrentDictationAnswer();
    return;
  }

  if (action === "dictation-next") {
    moveToNextDictationItem();
    return;
  }

  if (action === "dictation-prev") {
    moveToPreviousDictationItem();
    return;
  }

  if (action === "dictation-toggle-repeat") {
    toggleDictationRepeatCount();
    return;
  }

  if (action === "dictation-toggle-speed") {
    toggleDictationSpeed();
    return;
  }

  if (action === "dictation-toggle-accent") {
    toggleDictationAccent();
    return;
  }

  if (action === "dictation-fullscreen") {
    toggleDictationFullscreen();
    return;
  }

  if (action === "dictation-mark-known") {
    markCurrentDictationWord("known");
    return;
  }

  if (action === "dictation-mark-unknown") {
    markCurrentDictationWord("unknown");
    return;
  }

  if (action === "open-category") {
    setHash(getHashForCategory(target.dataset.categoryId));
    return;
  }

  if (action === "resume-route") {
    setHash(target.dataset.target);
    return;
  }

  if (action === "go-home") {
    setHash("#/");
    return;
  }

  if (action === "open-topic") {
    setHash(getHashForCategory(target.dataset.categoryId, target.dataset.topicId));
    return;
  }

  if (action === "open-section") {
    setHash(getHashForCategory(target.dataset.categoryId, target.dataset.topicId, target.dataset.sectionId));
    return;
  }

  if (action === "toggle-word") {
    toggleWord(target.dataset.wordId);
    return;
  }

  if (action === "mark-word") {
    event.stopPropagation();
    updateWordStatus(target.dataset.wordId, target.dataset.status);
    return;
  }

  if (action === "speak-word") {
    event.preventDefault();
    event.stopPropagation();
    speakWord(target.dataset.word);
    return;
  }

  if (action === "toggle-english") {
    toggleEnglish(target.dataset.topicId);
    return;
  }

  if (action === "reveal-answer") {
    revealAnswer(target.dataset.sectionId, target.dataset.wordId);
    return;
  }

  if (action === "assess-topic") {
    store.topicMastery[target.dataset.topicId] = target.dataset.mastery;
    saveTopicReviewPlan(target.dataset.topicId, target.dataset.mastery);
    persistStore();
    return;
  }

  if (action === "reset-topic") {
    const confirmed = window.confirm("确定要重置当前话题的所有答题记录吗？");

    if (confirmed) {
      resetTopic(target.dataset.topicId);
    }
    return;
  }

  if (action === "toggle-drawer") {
    document.querySelector(".quiz-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  if (action === "close-drawer") {
    uiState.drawerOpen = false;
    render();
    return;
  }

  if (action === "clear-progress") {
    const confirmed = window.confirm("确定要清空全部本地学习记录吗？");

    if (confirmed) {
      clearProgress();
    }
    return;
  }
}

function handleDocumentChange(event) {
  const target = event.target;

  if (target.matches("[data-role='topic-select']")) {
    setHash(getHashForCategory(target.dataset.categoryId, target.value));
    return;
  }

  if (target.matches("[data-role='voice-select']")) {
    store.voice = target.value;
    persistStore();
    return;
  }

  if (target.matches("[data-role='placement-select']")) {
    target.dataset.selectionMode = "manual";
  }
}

function handleDocumentInput(event) {
  const target = event.target;

  if (target.matches("[data-role='word-draft-input']")) {
    if (target.dataset.field === "word") {
      setAddWordLookupStatus();
    }
    refreshAddWordRecommendation();
  }

  if (target.matches("[data-role='dictation-input']")) {
    uiState.dictation.inputValue = target.value;
  }
}

function handleDocumentKeydown(event) {
  if (getRoute().view !== "dictation") {
    return;
  }

  if ((event.metaKey || event.ctrlKey) && event.key === "ArrowUp") {
    event.preventDefault();
    moveToPreviousDictationItem();
    return;
  }

  if (event.key === "Tab") {
    event.preventDefault();
    if (uiState.dictation.phase === "idle" || uiState.dictation.phase === "finished") {
      startDictationCountdown();
      return;
    }
    playCurrentDictationPrompt();
    return;
  }

  if (event.key === "Enter") {
    if (uiState.dictation.phase === "revealed") {
      event.preventDefault();
      moveToNextDictationItem();
      return;
    }

    if (uiState.dictation.phase === "typing") {
      event.preventDefault();
      checkCurrentDictationAnswer();
    }
  }
}

function handleHashChange() {
  stopCurrentSpeech();
  clearDictationCountdown();
  clearDictationAutoAdvance();
  uiState.drawerOpen = false;
  uiState.addWordOpen = false;
  render();
}

function handleResize() {
  if (window.innerWidth > 1260 && uiState.drawerOpen) {
    uiState.drawerOpen = false;
    render();
  }
}

function bootstrap() {
  hydrateCustomWords();
  document.addEventListener("click", handleDocumentClick);
  document.addEventListener("change", handleDocumentChange);
  document.addEventListener("input", handleDocumentInput);
  document.addEventListener("keydown", handleDocumentKeydown);
  window.addEventListener("hashchange", handleHashChange);
  window.addEventListener("resize", handleResize);

  if ("speechSynthesis" in window) {
    window.speechSynthesis.getVoices();
  }

  if (!window.location.hash) {
    window.location.hash = "#/";
  }

  render();
}

bootstrap();
