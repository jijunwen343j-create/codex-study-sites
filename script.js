const STORAGE_KEY = "advanced-vocab-notebook-store-v1";
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
    id: "work-and-study",
    nameZh: "工作与学习",
    nameEn: "Work and study",
    icon: "💼",
    accent: "#2ABBA7",
    tint: "rgba(42, 187, 167, 0.1)",
    topics: [
      {
        id: "cramming-for-success",
        number: 1,
        title: "Cramming for success: study and academic work",
        promptZh:
          "想象你在考试周临时抱佛脚，把自己埋进书堆里，一边做历年真题，一边靠助记法和背诵把知识点啃下来。等真正进入学术写作和高等教育环境时，你又得学会把观点组织得连贯、准确、像一篇真正的论文。",
        promptEn:
          "During exam week I had to cram, bury myself in my books and work through past papers. Later, academic study demanded much more: coherent writing, careful paraphrasing and the discipline needed for seminars, tutorials and research.",
        sections: [
          {
            id: "study-and-exams",
            tabLabel: "Study and exams",
            tabLabelZh: "学习与考试",
            sectionTitle: "A. Study and exams",
            sectionTitleZh: "学习与考试",
            words: [
              createWord(
                "cram",
                "cram (for an exam)",
                "study in a very concentrated way for a short time",
                "临时抱佛脚 / 死记硬背",
                "常用来形容考试前短时间密集复习。"
              ),
              createWord("genius", "genius", "an exceptionally clever person", "天才 / 极有天赋的人"),
              createWord(
                "revision",
                "revision / revise",
                "review material before an exam",
                "复习",
                "英式英语里常说 do some revision。"
              ),
              createWord("past-papers", "past papers", "exam papers from previous years", "历年真题 / 历届考卷"),
              createWord("learn-by-heart", "learn by heart", "learn something so that you can repeat it exactly", "背诵 / 熟记"),
              createWord("rote-learning", "rote learning", "learning by repetition", "死记硬背"),
              createWord("mnemonics", "mnemonics", "tricks that help you remember something", "记忆术 / 助记法"),
              createWord("inside-out", "know something inside out", "know something extremely well", "对某事了如指掌"),
            ],
          },
          {
            id: "academic-writing",
            tabLabel: "Academic writing",
            tabLabelZh: "学术写作",
            sectionTitle: "B. Academic writing",
            sectionTitleZh: "学术写作",
            words: [
              createWord("thesis", "thesis", "a long piece of academic writing based on research", "论文 / 学位论文"),
              createWord("draft", "draft", "a first version of a piece of writing", "草稿"),
              createWord("citation", "citation", "a reference to a source used in writing", "引文 / 文献标注"),
              createWord("coherent", "coherent", "clear and logically connected", "连贯的 / 条理清晰的"),
              createWord("paraphrase", "paraphrase", "express an idea using different words", "改写 / 释义表达"),
              createWord("dissertation", "dissertation", "a substantial academic paper written for a degree", "毕业论文 / 专题论文"),
            ],
          },
          {
            id: "higher-study",
            tabLabel: "Higher study",
            tabLabelZh: "高等学术学习",
            sectionTitle: "C. Aspects of higher academic study",
            sectionTitleZh: "高等学术学习的方面",
            words: [
              createWord("undergraduate", "undergraduate", "a student studying for a first degree", "本科生"),
              createWord("postgraduate", "postgraduate", "a student studying after a first degree", "研究生"),
              createWord("seminar", "seminar", "a small class focused on discussion", "研讨课"),
              createWord("tutorial", "tutorial", "a small teaching session with a tutor", "辅导课 / 导修"),
              createWord("supervisor", "supervisor", "the academic who guides your research work", "导师"),
              createWord("faculty", "faculty", "the teaching staff or department group in a university", "院系 / 教职员工"),
            ],
          },
        ],
      },
      {
        id: "education-debates",
        number: 2,
        title: "Education: debates and issues",
        promptZh:
          "讨论教育制度时，我们往往不只是谈学校，而是在谈机会平等、资源分配和社会阶层是否会被制度不断复制。排行榜、公费综合中学、选拔制学校和助学金，都会影响谁能真正出类拔萃。",
        promptEn:
          "Debates about education are really debates about opportunity. Selective systems, league tables and the distribution of bursaries all shape who can excel and whether inequality is perpetuated or reduced.",
        sections: [
          {
            id: "opportunity-equality",
            tabLabel: "Opportunity and equality",
            tabLabelZh: "机会与平等",
            sectionTitle: "A. Opportunity and equality",
            sectionTitleZh: "机会与平等",
            words: [
              createWord("equality-opportunity", "equality of opportunity", "equal chances for everyone", "机会平等"),
              createWord("selective-schooling", "selective schooling", "a system that chooses only certain students", "选拔性的学校制度"),
              createWord(
                "comprehensive-schooling",
                "comprehensive schooling",
                "a system where everyone enters without selection exams",
                "综合中学制 / 免试入学的学校制度"
              ),
              createWord("elitism", "elitism", "favoring a privileged or more powerful group", "精英主义"),
              createWord("league-tables", "league tables", "ranking lists, especially of schools", "排行榜 / 排名表"),
              createWord("perpetuate", "perpetuate", "make something continue for a long time", "使持续 / 使延续"),
              createWord("two-tier", "two-tier system", "a system divided into two levels", "双轨制"),
              createWord("better-off", "better-off", "richer or in a more comfortable financial situation", "较富裕的"),
            ],
          },
          {
            id: "funding-outcomes",
            tabLabel: "Funding and outcomes",
            tabLabelZh: "资助与结果",
            sectionTitle: "B. Funding and outcomes",
            sectionTitleZh: "资助与结果",
            words: [
              createWord("bursaries", "bursaries", "financial awards for students", "助学金"),
              createWord("excel", "excel", "do extremely well", "出类拔萃"),
              createWord("well-endowed", "well-endowed", "having a lot of money or resources", "资源丰富的"),
              createWord("less-well-off", "less well-off", "not having much money", "较贫困的"),
              createWord("perceive", "perceive", "understand or interpret something in a certain way", "感知 / 看待"),
              createWord("inherent", "inherent in", "existing as a basic part of something", "固有于……之中的"),
            ],
          },
        ],
      },
      {
        id: "applying-for-a-job",
        number: 3,
        title: "Applying for a job",
        promptZh:
          "找工作时，你得读懂职位空缺，准备一封清楚的求职信，把资格、作品集和可迁移能力讲得像一份可信的个人简介。真正决定你能不能进入 shortlist 的，常常就是这些细节。",
        promptEn:
          "Applying for a job means reading the vacancy carefully and presenting yourself with focus. A strong cover letter, clear references and evidence of transferable skills can move an applicant onto the shortlist.",
        sections: [
          {
            id: "application-essentials",
            tabLabel: "Applications",
            tabLabelZh: "求职申请",
            sectionTitle: "A. Application essentials",
            sectionTitleZh: "求职申请基础",
            words: [
              createWord("vacancy", "vacancy", "an available job position", "职位空缺"),
              createWord("applicant", "applicant", "someone who formally asks for a job", "申请人"),
              createWord("shortlisted", "shortlisted", "selected from a larger group for final consideration", "进入候选名单的"),
              createWord("cover-letter", "cover letter", "a letter sent with a CV to explain suitability", "求职信"),
              createWord("references", "references", "statements from people who can recommend you", "推荐证明 / 推荐人信息"),
              createWord("qualifications", "qualifications", "official records of skills, training or education", "资格 / 学历资质"),
              createWord("transferable-skills", "transferable skills", "skills useful in different jobs or contexts", "可迁移技能"),
              createWord("portfolio", "portfolio", "a collection showing your work and abilities", "作品集"),
            ],
          },
        ],
      },
      {
        id: "job-interviews",
        number: 4,
        title: "Job interviews",
        promptZh:
          "面试不只是回答问题，更是在有限时间里让人觉得你表达清楚、思路稳定、适合团队。你要能应对尖锐提问、说明优势和短板，还得在 follow-up 里继续保持分寸感。",
        promptEn:
          "A good interview is about how you come across under pressure. You need to answer probing questions clearly, discuss strengths and weaknesses honestly and follow up in a professional way.",
        sections: [
          {
            id: "interview-dynamics",
            tabLabel: "Interview dynamics",
            tabLabelZh: "面试现场",
            sectionTitle: "A. Interview dynamics",
            sectionTitleZh: "面试现场",
            words: [
              createWord("articulate", "articulate", "able to express ideas clearly and effectively", "表达清晰的"),
              createWord("come-across", "come across as", "seem or appear to other people", "给人某种印象"),
              createWord("probing", "probing questions", "questions intended to discover detailed information", "追问 / 深入挖掘的问题"),
              createWord("panel-interview", "panel interview", "an interview with several interviewers at once", "群面 / 小组面试"),
              createWord("strengths-weaknesses", "strengths and weaknesses", "positive and negative aspects of your abilities", "优点与不足"),
              createWord("follow-up", "follow-up", "communication after the main event", "后续跟进"),
              createWord("negotiate", "negotiate", "discuss something formally in order to reach agreement", "协商 / 谈判"),
              createWord("cultural-fit", "cultural fit", "how well someone's style matches a workplace", "文化契合度"),
            ],
          },
        ],
      },
      {
        id: "at-work-colleagues-and-routines",
        number: 5,
        title: "At work: colleagues and routines",
        promptZh:
          "日常工作很少是单打独斗，更多时候是跟同事协作、分配任务、赶截止日期、轮班、补进度。真正成熟的职场表达，通常都藏在这些 routine 里面。",
        promptEn:
          "Workplace language grows out of routine. We talk about workload, deadlines, delegation and catching up because most jobs depend on teamwork and rhythm rather than isolated effort.",
        sections: [
          {
            id: "work-rhythms",
            tabLabel: "Work rhythms",
            tabLabelZh: "工作节奏",
            sectionTitle: "A. Work rhythms",
            sectionTitleZh: "工作节奏",
            words: [
              createWord("workload", "workload", "the amount of work you have to do", "工作量"),
              createWord("deadline", "deadline", "the latest time something must be finished", "截止日期"),
              createWord("collaborate", "collaborate", "work together with others", "合作 / 协作"),
              createWord("delegate", "delegate", "give part of your work to someone else", "委派 / 分派任务"),
              createWord("multitask", "multitask", "do several things at the same time", "一心多用"),
              createWord("rota", "rota", "a schedule showing who does what and when", "轮班表 / 排班表"),
              createWord("commute", "commute", "travel regularly between home and work", "通勤"),
              createWord("catch-up", "catch up", "reach the same point as others after falling behind", "补上进度 / 跟上"),
            ],
          },
        ],
      },
      {
        id: "at-work-job-satisfaction",
        number: 6,
        title: "At work: job satisfaction",
        promptZh:
          "人们真正喜欢一份工作，往往不是因为一句“稳定”，而是因为它让人觉得有自主权、被认可、有成长空间。相反，单调、倦怠和低士气，会慢慢把热情耗掉。",
        promptEn:
          "Job satisfaction often comes from autonomy, recognition and a sense of meaning. When work becomes monotonous and morale drops, even good perks may not be enough to prevent burnout.",
        sections: [
          {
            id: "fulfilment-frustration",
            tabLabel: "Fulfilment",
            tabLabelZh: "满足与倦怠",
            sectionTitle: "A. Fulfilment and frustration",
            sectionTitleZh: "满足与倦怠",
            words: [
              createWord("fulfilling", "fulfilling", "making you feel satisfied and useful", "有成就感的 / 让人满足的"),
              createWord("monotonous", "monotonous", "boring because it is always the same", "单调乏味的"),
              createWord("perks", "perks", "extra advantages of a job besides salary", "额外福利"),
              createWord("recognition", "recognition", "appreciation and praise for what someone has done", "认可 / 赏识"),
              createWord("autonomy", "autonomy", "the freedom to make your own decisions", "自主权"),
              createWord("morale", "morale", "the level of confidence and enthusiasm in a group", "士气"),
              createWord("burnout", "burnout", "extreme tiredness caused by working too much", "职业倦怠"),
              createWord("meaningful", "meaningful", "having value or purpose", "有意义的"),
            ],
          },
        ],
      },
      {
        id: "at-work-careers",
        number: 7,
        title: "At work: careers",
        promptZh:
          "职业发展不只等于升职，有时是横向转岗、外派、重新学习，或在导师帮助下突破平台期。谈 career 的时候，我们其实在谈长期路径和下一步能走多远。",
        promptEn:
          "Careers rarely move in a straight line. Promotion matters, but so do sideways moves, retraining, mentorship and the ability to see beyond a career plateau toward longer-term prospects.",
        sections: [
          {
            id: "career-paths",
            tabLabel: "Career paths",
            tabLabelZh: "职业路径",
            sectionTitle: "A. Career paths",
            sectionTitleZh: "职业路径",
            words: [
              createWord("promotion", "promotion", "moving to a more important or better-paid job", "晋升"),
              createWord("sideways-move", "sideways move", "a change to a similar level role for new experience", "平级转岗"),
              createWord("retrain", "retrain", "learn new skills for a different job", "再培训 / 转型学习"),
              createWord("mentor", "mentor", "an experienced person who guides someone", "导师 / 职场引路人"),
              createWord("plateau", "career plateau", "a stage where progress seems to stop", "职业平台期"),
              createWord("portfolio-career", "portfolio career", "a career made up of several types of work", "组合型职业生涯"),
              createWord("secondment", "secondment", "a temporary transfer to another role or team", "借调 / 临时派驻"),
              createWord("prospects", "long-term prospects", "future chances of success", "长期发展前景"),
            ],
          },
        ],
      },
    ],
  },
  {
    id: "people-and-relationships",
    nameZh: "人际关系",
    nameEn: "People and relationships",
    icon: "👥",
    accent: "#3182ce",
    tint: "rgba(49, 130, 206, 0.1)",
    topics: [
      {
        id: "positive-negative-qualities",
        number: 1,
        title: "Describing people: positive and negative qualities",
        promptZh:
          "描述一个人时，真正高级的表达不只是说 nice 或 kind，而是能更细腻地区分他是否有同理心、是否圆滑得体、是否过于机会主义，或者是不是一激动就容易失控。",
        promptEn:
          "Precise description means moving beyond simple adjectives. A person may be compassionate and tactful, but also opportunistic, blunt or the kind of person who gets carried away too easily.",
        sections: [
          {
            id: "character-snapshots",
            tabLabel: "Character snapshots",
            tabLabelZh: "人物侧写",
            sectionTitle: "A. Character snapshots",
            sectionTitleZh: "人物侧写",
            words: [
              createWord("people-articulate", "articulate", "able to express ideas clearly", "表达清楚的"),
              createWord("compassionate", "compassionate", "showing sympathy and a desire to help", "有同情心的"),
              createWord("tactful", "tactful", "careful not to upset or embarrass people", "圆滑得体的 / 说话有分寸的"),
              createWord("blunt", "blunt", "direct in a way that may seem rude", "直率到近乎生硬的"),
              createWord("opportunistic", "opportunistic", "using situations mainly for your own benefit", "机会主义的 / 善于钻空子的"),
              createWord("methodical", "methodical", "systematic and careful", "有条不紊的"),
              createWord("chauvinistic", "chauvinistic", "showing aggressive or exaggerated patriotism or male superiority", "沙文主义的 / 狭隘排外的"),
              createWord("carried-away", "get carried away", "become too excited and lose control", "忘乎所以 / 一激动就失控"),
            ],
          },
        ],
      },
      {
        id: "appearance-and-mannerisms",
        number: 2,
        title: "Describing people: appearance and mannerisms",
        promptZh:
          "外表和举止经常一起塑造第一印象。一个人可能穿得一丝不苟，却因为总是皱眉、耸肩、驼背或迈着很大的步子，让人立刻形成某种印象。",
        promptEn:
          "Appearance and mannerisms work together. Someone may be impeccably dressed, yet their stride, gestures or the way they slouch can shape how people read them almost instantly.",
        sections: [
          {
            id: "how-people-come-across",
            tabLabel: "Appearance and manner",
            tabLabelZh: "外表与举止",
            sectionTitle: "A. Appearance and mannerisms",
            sectionTitleZh: "外表与举止",
            words: [
              createWord("impeccably-dressed", "impeccably dressed", "dressed extremely neatly and stylishly", "穿着一丝不苟的"),
              createWord("scruffy", "scruffy", "untidy and not well cared for", "邋遢的 / 不修边幅的"),
              createWord("lanky", "lanky", "tall and thin in an awkward way", "瘦高的"),
              createWord("petite", "petite", "small and attractively delicate", "娇小的"),
              createWord("frown", "frown", "bring your eyebrows together to show worry or annoyance", "皱眉"),
              createWord("gesture", "gesture", "move your hands or body to express something", "做手势"),
              createWord("slouch", "slouch", "sit or stand with a lazy, drooping posture", "无精打采地站 / 坐"),
              createWord("stride", "stride", "walk with long decisive steps", "大步走"),
            ],
          },
        ],
      },
      {
        id: "personality-traits",
        number: 3,
        title: "Describing people: personality and character traits",
        promptZh:
          "人格特质的词汇能帮助你把一个人写得更立体：他也许安静克制，但很有韧性；也可能外向直率，却容易冲动。",
        promptEn:
          "Character vocabulary makes people vivid. Someone might be reserved and resilient, or outspoken and empathetic, yet still impulsive under pressure.",
        sections: [
          {
            id: "personality-traits-section",
            tabLabel: "Traits",
            tabLabelZh: "性格特质",
            sectionTitle: "A. Personality and traits",
            sectionTitleZh: "性格特质",
            words: [
              createWord("reserved", "reserved", "not very open in showing feelings", "内敛的 / 含蓄的"),
              createWord("outspoken", "outspoken", "expressing opinions very directly", "直言不讳的"),
              createWord("resilient", "resilient", "able to recover quickly from difficulties", "有韧性的"),
              createWord("meticulous", "meticulous", "very careful and paying attention to details", "一丝不苟的"),
              createWord("impulsive", "impulsive", "acting suddenly without enough thought", "冲动的"),
              createWord("empathetic", "empathetic", "able to understand other people's feelings deeply", "有共情力的"),
            ],
          },
        ],
      },
      {
        id: "friends-forever",
        number: 4,
        title: "Relationships: friends forever",
        promptZh:
          "长期友谊通常建立在信任、默契和能持续保持联系上。你可能一见如故，也可能多年后仍愿意向对方倾诉。",
        promptEn:
          "Lasting friendship grows from trust and familiarity. People may hit it off quickly, stay in touch across distance and remain the person you can still confide in years later.",
        sections: [
          {
            id: "friendships-section",
            tabLabel: "Friendships",
            tabLabelZh: "友谊关系",
            sectionTitle: "A. Friends forever",
            sectionTitleZh: "朋友关系",
            words: [
              createWord("loyal", "loyal", "remaining supportive and faithful to someone", "忠诚的"),
              createWord("drift-apart", "drift apart", "gradually become less friendly or close", "渐行渐远"),
              createWord("confide-in", "confide in", "tell someone private thoughts or feelings", "向……倾诉"),
              createWord("hit-it-off", "hit it off", "become friendly very quickly", "一拍即合"),
              createWord("keep-in-touch", "keep in touch", "continue communicating", "保持联系"),
              createWord("lifelong-friend", "lifelong friend", "a friend for most of your life", "一生的朋友"),
            ],
          },
        ],
      },
      {
        id: "ups-and-downs",
        number: 5,
        title: "Relationships: ups and downs",
        promptZh:
          "再好的关系也会有起伏。有时会闹翻、气氛紧张，但也可能后来和好，重新把事情理顺。",
        promptEn:
          "Relationships have rough patches. People fall out, things become strained, then later patch things up or reconcile when both sides are ready.",
        sections: [
          {
            id: "ups-downs-section",
            tabLabel: "Ups and downs",
            tabLabelZh: "起伏变化",
            sectionTitle: "A. Ups and downs",
            sectionTitleZh: "关系中的起伏",
            words: [
              createWord("patch-things-up", "patch things up", "restore a relationship after an argument", "和好 / 修复关系"),
              createWord("fall-out", "fall out", "argue and stop being friendly", "闹翻"),
              createWord("strained", "strained", "tense and uncomfortable", "紧张的 / 别扭的"),
              createWord("reconcile", "reconcile", "become friendly again after a disagreement", "和解"),
              createWord("rocky", "rocky", "full of difficulties and problems", "不稳定的 / 波折很多的"),
              createWord("supportive", "supportive", "helpful and encouraging", "支持性的"),
            ],
          },
        ],
      },
      {
        id: "emotions-and-reactions",
        number: 6,
        title: "Emotions and reactions",
        promptZh:
          "情绪词汇常常决定一句话的温度。你可能兴奋、释然、紧张、懊恼，甚至在某个场合突然变得特别不自在。",
        promptEn:
          "Emotion vocabulary gives nuance to reaction. A person can feel thrilled, relieved or apprehensive, then suddenly become self-conscious or frustrated in a difficult moment.",
        sections: [
          {
            id: "emotions-reactions-section",
            tabLabel: "Emotions",
            tabLabelZh: "情绪反应",
            sectionTitle: "A. Emotions and reactions",
            sectionTitleZh: "情绪与反应",
            words: [
              createWord("thrilled", "thrilled", "extremely pleased and excited", "非常兴奋的"),
              createWord("apprehensive", "apprehensive", "worried that something bad may happen", "忧心忡忡的"),
              createWord("relieved", "relieved", "feeling happy because worry has ended", "如释重负的"),
              createWord("stunned", "stunned", "so shocked that you cannot react immediately", "震惊的"),
              createWord("frustrated", "frustrated", "annoyed because you cannot achieve something", "沮丧恼火的"),
              createWord("self-conscious", "self-conscious", "uncomfortably aware of yourself", "不自在的 / 羞怯的"),
            ],
          },
        ],
      },
      {
        id: "negative-feelings",
        number: 7,
        title: "Negative feelings",
        promptZh:
          "负面情绪并不都一样。嫉妒、苦涩、委屈、被压垮，它们各自指向不同的心理状态，也会带来完全不同的表达语气。",
        promptEn:
          "Negative feelings have different shades. Envy, bitterness, resentment and being overwhelmed may all feel bad, but they point to very different emotional experiences.",
        sections: [
          {
            id: "negative-feelings-section",
            tabLabel: "Negative feelings",
            tabLabelZh: "负面情绪",
            sectionTitle: "A. Negative feelings",
            sectionTitleZh: "负面情绪",
            words: [
              createWord("resentful", "resentful", "feeling angry because something seems unfair", "愤愤不平的"),
              createWord("bitter", "bitter", "angry and unhappy because of bad experiences", "苦涩怨怼的"),
              createWord("envious", "envious", "wanting what someone else has", "嫉妒的"),
              createWord("overwhelmed", "overwhelmed", "feeling unable to cope because there is too much", "被压垮的"),
              createWord("drained", "drained", "extremely tired emotionally or physically", "被掏空的"),
              createWord("insecure", "insecure", "not confident and uncertain about yourself", "缺乏安全感的"),
            ],
          },
        ],
      },
      {
        id: "from-cradle-to-grave",
        number: 8,
        title: "Birth and death: from cradle to grave",
        promptZh:
          "人生不同阶段的词汇常常一起出现：从 newborn、toddler、adolescence 到 middle-aged、retired、bereaved，它们让关于生命历程的话题更准确也更有层次。",
        promptEn:
          "Life-stage vocabulary lets us speak more precisely about age and experience, from newborns and toddlers to adolescence, middle age, retirement and bereavement.",
        sections: [
          {
            id: "life-stages-section",
            tabLabel: "Life stages",
            tabLabelZh: "人生阶段",
            sectionTitle: "A. From cradle to grave",
            sectionTitleZh: "从摇篮到暮年",
            words: [
              createWord("newborn", "newborn", "a baby that has just been born", "新生儿"),
              createWord("toddler", "toddler", "a young child who has just learned to walk", "学步期幼儿"),
              createWord("adolescence", "adolescence", "the period between childhood and adulthood", "青春期"),
              createWord("middle-aged", "middle-aged", "in the period between youth and old age", "中年的"),
              createWord("retired", "retired", "having stopped working because of age", "退休的"),
              createWord("bereaved", "bereaved", "suffering because someone close has died", "失去亲人的"),
            ],
          },
        ],
      },
    ],
  },
  {
    id: "leisure-and-lifestyle",
    nameZh: "休闲与生活方式",
    nameEn: "Leisure and lifestyle",
    icon: "🏖️",
    accent: "#d97706",
    tint: "rgba(217, 119, 6, 0.1)",
    topics: [
      {
        id: "switching-off",
        number: 1,
        title: "Switching off and slowing down",
        promptZh:
          "真正的休闲不只是空下来，而是找到能让你放松、充电、恢复节奏的方式。一个人怎么安排 downtime，往往也映射出他的生活方式。",
        promptEn:
          "Leisure is not just spare time. It is the deliberate choice to unwind, recharge and build downtime into life rather than treating rest as an afterthought.",
        sections: [
          {
            id: "leisure-routines",
            tabLabel: "Leisure routines",
            tabLabelZh: "休闲节奏",
            sectionTitle: "A. Leisure routines",
            sectionTitleZh: "休闲节奏",
            words: [
              createWord("unwind", "unwind", "relax after work or tension", "放松身心"),
              createWord("pastime", "pastime", "an activity done for enjoyment", "消遣 / 娱乐活动"),
              createWord("recharge", "recharge", "recover energy", "恢复精力 / 充电"),
              createWord("laid-back", "laid-back", "relaxed and not easily worried", "松弛随性的"),
              createWord("indulge", "indulge", "allow yourself to enjoy something special", "尽情享受 / 放纵一下"),
              createWord("downtime", "downtime", "time when you are not working", "休息时间"),
            ],
          },
        ],
      },
    ],
  },
  {
    id: "travel",
    nameZh: "旅行",
    nameEn: "Travel",
    icon: "✈️",
    accent: "#0284c7",
    tint: "rgba(2, 132, 199, 0.1)",
    topics: [
      {
        id: "journey-smoother",
        number: 1,
        title: "Making the journey smoother",
        promptZh:
          "旅行中的高级词汇很适合拿来组织经验：行程安排、中转、时差、绕路、是否轻松省心，这些都能把平淡的叙述变得更准确。",
        promptEn:
          "Travel writing becomes richer when you can talk about itineraries, layovers, jet lag and detours. The right words make a journey feel specific rather than generic.",
        sections: [
          {
            id: "travel-planning",
            tabLabel: "Travel planning",
            tabLabelZh: "旅行计划",
            sectionTitle: "A. Travel planning",
            sectionTitleZh: "旅行计划",
            words: [
              createWord("itinerary", "itinerary", "a detailed travel plan", "行程安排"),
              createWord("layover", "layover", "a short stop between parts of a journey", "中转停留"),
              createWord("jet-lag", "jet lag", "tiredness caused by crossing time zones", "时差反应"),
              createWord("detour", "detour", "a longer route taken to avoid something", "绕路"),
              createWord("beaten-track", "off the beaten track", "away from the usual tourist places", "偏离常规路线 / 小众的"),
              createWord("hassle-free", "hassle-free", "easy and without problems", "省心顺利的"),
            ],
          },
        ],
      },
    ],
  },
  {
    id: "the-environment",
    nameZh: "环境",
    nameEn: "The environment",
    icon: "🌍",
    accent: "#15803d",
    tint: "rgba(21, 128, 61, 0.1)",
    topics: [
      {
        id: "climate-pressure",
        number: 1,
        title: "Climate pressure points",
        promptZh:
          "谈环境时，关键词往往集中在排放、生物多样性、资源耗竭和可持续发展。会这些词，读新闻和写观点都会顺很多。",
        promptEn:
          "Environmental language often revolves around emissions, biodiversity, depletion and sustainability. Once these concepts feel familiar, climate reporting becomes much easier to follow.",
        sections: [
          {
            id: "environment-core",
            tabLabel: "Environment core",
            tabLabelZh: "环境核心词",
            sectionTitle: "A. Climate pressure points",
            sectionTitleZh: "环境压力点",
            words: [
              createWord("biodiversity", "biodiversity", "the variety of plant and animal life", "生物多样性"),
              createWord("emissions", "emissions", "gases released into the air", "排放物"),
              createWord("depletion", "depletion", "the reduction of a resource", "耗竭 / 枯竭"),
              createWord("sustainable", "sustainable", "able to continue without causing damage", "可持续的"),
              createWord("conservation", "conservation", "the protection of natural resources", "保护 / 保育"),
              createWord("carbon-footprint", "carbon footprint", "the amount of carbon dioxide caused by an activity", "碳足迹"),
            ],
          },
        ],
      },
    ],
  },
  {
    id: "society-and-institutions",
    nameZh: "社会与制度",
    nameEn: "Society and institutions",
    icon: "🏛️",
    accent: "#7c3aed",
    tint: "rgba(124, 58, 237, 0.1)",
    topics: [
      {
        id: "public-life",
        number: 1,
        title: "Public life and policy",
        promptZh:
          "制度类词汇通常连接个人与公共事务：立法、监管、问责、福利和公民义务，都是理解社会议题时反复出现的关键表达。",
        promptEn:
          "Institutional vocabulary connects private lives to public structures. Legislation, accountability, welfare and regulation are central to how policy debates are framed.",
        sections: [
          {
            id: "society-policy",
            tabLabel: "Policy language",
            tabLabelZh: "政策语言",
            sectionTitle: "A. Public life and policy",
            sectionTitleZh: "公共生活与政策",
            words: [
              createWord("legislation", "legislation", "laws considered as a group", "法律 / 立法"),
              createWord("civic-duty", "civic duty", "the responsibility of citizens toward society", "公民责任"),
              createWord("welfare", "welfare", "help provided to people in need", "社会福利"),
              createWord("accountability", "accountability", "being responsible for actions and decisions", "问责 / 责任追究"),
              createWord("regulation", "regulation", "an official rule controlling how something is done", "监管 / 规章"),
              createWord("public-sector", "public sector", "government-run services and jobs", "公共部门"),
            ],
          },
        ],
      },
    ],
  },
  {
    id: "the-media",
    nameZh: "媒体",
    nameEn: "The media",
    icon: "📺",
    accent: "#ef4444",
    tint: "rgba(239, 68, 68, 0.1)",
    topics: [
      {
        id: "media-literacy",
        number: 1,
        title: "Reading the media critically",
        promptZh:
          "媒体类词汇的重点不只是报道本身，还包括偏见、标题党、算法推送和信息验证。会这些词，才能真正谈“媒介素养”。",
        promptEn:
          "Media literacy depends on more than consuming content. It involves recognising bias, questioning headlines, verifying sources and understanding algorithm-driven exposure.",
        sections: [
          {
            id: "media-core",
            tabLabel: "Media literacy",
            tabLabelZh: "媒介素养",
            sectionTitle: "A. Reading the media critically",
            sectionTitleZh: "批判性阅读媒体",
            words: [
              createWord("coverage", "coverage", "the reporting of an event by the media", "报道 / 覆盖报道"),
              createWord("bias", "bias", "a tendency to favour one side unfairly", "偏见 / 倾向"),
              createWord("sensationalism", "sensationalism", "presenting information in a shocking way to attract attention", "耸动化"),
              createWord("headline", "headline", "the title of a news story", "新闻标题"),
              createWord("verify", "verify", "check that something is true", "核实 / 验证"),
              createWord("algorithm-driven", "algorithm-driven", "shaped or controlled by recommendation systems", "受算法驱动的"),
            ],
          },
        ],
      },
    ],
  },
  {
    id: "health",
    nameZh: "健康",
    nameEn: "Health",
    icon: "💚",
    accent: "#16a34a",
    tint: "rgba(22, 163, 74, 0.1)",
    topics: [
      {
        id: "healthy-routines",
        number: 1,
        title: "Building healthy routines",
        promptZh:
          "健康类词汇常常连接生活方式和身体状态：久坐、营养、免疫力、慢性问题、恢复性睡眠。这些词很适合写自我管理与习惯养成。",
        promptEn:
          "Health vocabulary often links daily habits to long-term outcomes. Sedentary routines, nutrition, immunity and restorative sleep all shape wellbeing over time.",
        sections: [
          {
            id: "health-core",
            tabLabel: "Healthy routines",
            tabLabelZh: "健康习惯",
            sectionTitle: "A. Building healthy routines",
            sectionTitleZh: "构建健康习惯",
            words: [
              createWord("sedentary", "sedentary", "involving too much sitting and too little exercise", "久坐的"),
              createWord("nutritious", "nutritious", "providing the substances needed for health", "有营养的"),
              createWord("immunity", "immunity", "the body's ability to resist disease", "免疫力"),
              createWord("wellbeing", "wellbeing", "general health and happiness", "身心健康"),
              createWord("chronic", "chronic", "continuing for a long time", "慢性的"),
              createWord("restorative", "restorative", "helping you recover energy or health", "有恢复作用的"),
            ],
          },
        ],
      },
    ],
  },
  {
    id: "technology",
    nameZh: "科技",
    nameEn: "Technology",
    icon: "💡",
    accent: "#0f766e",
    tint: "rgba(15, 118, 110, 0.1)",
    topics: [
      {
        id: "digital-habits",
        number: 1,
        title: "Digital habits and systems",
        promptZh:
          "科技词汇在现代语境里非常高频，从自动化、带宽、隐私，到界面、排障和无缝体验，几乎每天都会碰到。",
        promptEn:
          "Technology language now belongs to everyday life. We automate tasks, worry about privacy, troubleshoot interfaces and expect seamless digital experiences.",
        sections: [
          {
            id: "technology-core",
            tabLabel: "Digital systems",
            tabLabelZh: "数字系统",
            sectionTitle: "A. Digital habits and systems",
            sectionTitleZh: "数字习惯与系统",
            words: [
              createWord("automate", "automate", "make a process happen by itself using technology", "自动化"),
              createWord("bandwidth", "bandwidth", "the amount of data that can be sent in a fixed time", "带宽"),
              createWord("privacy", "privacy", "the right to keep personal information safe", "隐私"),
              createWord("interface", "interface", "the part of a system users interact with", "界面 / 交互层"),
              createWord("troubleshoot", "troubleshoot", "identify and solve problems", "排查故障"),
              createWord("seamless", "seamless", "smooth and without interruptions", "无缝的 / 流畅衔接的"),
            ],
          },
        ],
      },
    ],
  },
  {
    id: "basic-concepts",
    nameZh: "基础概念",
    nameEn: "Basic concepts",
    icon: "📘",
    accent: "#475569",
    tint: "rgba(71, 85, 105, 0.1)",
    topics: [
      {
        id: "thinking-precisely",
        number: 1,
        title: "Thinking with precision",
        promptZh:
          "很多高级阅读和写作，其实卡在抽象概念词上。假设、视角、后果、框架、对比、细微差别，这些词能让表达一下子变清楚。",
        promptEn:
          "Abstract language supports precise thinking. Once you can name assumptions, perspectives, consequences and nuance, argument becomes much clearer.",
        sections: [
          {
            id: "concepts-core",
            tabLabel: "Concept language",
            tabLabelZh: "概念表达",
            sectionTitle: "A. Thinking with precision",
            sectionTitleZh: "精准思考",
            words: [
              createWord("assumption", "assumption", "something accepted as true without proof", "假设"),
              createWord("perspective", "perspective", "a particular way of thinking about something", "视角"),
              createWord("consequence", "consequence", "a result or effect", "后果 / 结果"),
              createWord("framework", "framework", "a structure for understanding something", "框架"),
              createWord("contrast", "contrast", "a clear difference between things", "对比"),
              createWord("nuance", "nuance", "a subtle difference in meaning or feeling", "细微差别 / 微妙之处"),
            ],
          },
        ],
      },
    ],
  },
  {
    id: "functional-vocabulary",
    nameZh: "功能词汇",
    nameEn: "Functional vocabulary",
    icon: "🧩",
    accent: "#db2777",
    tint: "rgba(219, 39, 119, 0.1)",
    topics: [
      {
        id: "structuring-argument",
        number: 1,
        title: "Structuring an argument",
        promptZh:
          "功能词汇看起来不起眼，但往往决定文章的逻辑感。承认、递进、转折、承接、概括、权衡，都是写作里最实用的组织工具。",
        promptEn:
          "Functional vocabulary gives structure to ideas. Admitting a point, drawing contrast, extending an argument and reaching balance all depend on these linking expressions.",
        sections: [
          {
            id: "functional-core",
            tabLabel: "Argument flow",
            tabLabelZh: "论证衔接",
            sectionTitle: "A. Structuring an argument",
            sectionTitleZh: "组织论证",
            words: [
              createWord("admittedly", "admittedly", "used to agree that something is true before making another point", "诚然 / 不可否认地"),
              createWord("likewise", "likewise", "in the same way", "同样地"),
              createWord("whereas", "whereas", "used to compare two different facts", "然而 / 相比之下"),
              createWord("in-turn", "in turn", "as a result of something else, in sequence", "反过来 / 依次"),
              createWord("broadly-speaking", "broadly speaking", "in a general way", "大体上说"),
              createWord("on-balance", "on balance", "after considering everything", "总的来说 / 权衡之后"),
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
const DICTATION_DAILY_LIMIT = 50;
const DICTATION_REVIEW_RATIO = 0.9;
const DICTATION_REPEAT_OPTIONS = [1, 2, 3];
const DICTATION_SPEED_OPTIONS = [0.8, 1, 1.2];

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
    accent: "en-GB",
  };
}

function getDefaultDailyDictation() {
  return {
    date: "",
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
    voice: "en-US",
    wordStatus: {},
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

function slugifyValue(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizeWordLookup(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildWordAliases(value) {
  const raw = String(value || "").trim();
  const candidates = new Set([raw, raw.replace(/\([^)]*\)/g, " ")]);
  const aliases = new Set();

  raw.split(/\/|,|;|\bor\b/i).forEach((piece) => {
    const cleaned = piece.replace(/\([^)]*\)/g, " ").trim();

    if (cleaned) {
      candidates.add(cleaned);
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
  const englishTokens = raw.toLowerCase().match(/[a-z][a-z-]{1,}/g) || [];
  const chineseTokens = raw.match(/[\u4e00-\u9fff]{2,}/g) || [];
  return [...new Set([...englishTokens, ...chineseTokens])];
}

function getSectionSearchCorpus(category, topic, section) {
  return [
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
  return cleanDictationText(value).toLowerCase().replace(/\s+/g, " ").trim();
}

function getDictationPrimaryText(value) {
  const cleaned = cleanDictationText(value);
  const segments = cleaned
    .split(/\s*\/\s*|\s*;\s*|\s*,\s*|\s+or\s+/i)
    .map((segment) => segment.trim())
    .filter(Boolean);

  return segments[0] || cleaned;
}

function getDictationAcceptedAnswers(value) {
  const cleaned = cleanDictationText(value);
  const candidates = new Set([cleaned, getDictationPrimaryText(value)]);

  cleaned.split(/\s*\/\s*|\s*;\s*|\s*,\s*|\s+or\s+/i).forEach((segment) => {
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
  const dailyCount = Math.min(DICTATION_DAILY_LIMIT, allItems.length);
  const reviewItems = allItems.filter((item) => item.isReview);
  const newItems = allItems.filter((item) => !item.isReview);
  const desiredReviewCount = Math.min(reviewItems.length, Math.round(dailyCount * DICTATION_REVIEW_RATIO));
  const desiredNewCount = Math.min(newItems.length, Math.max(0, dailyCount - desiredReviewCount));
  const pickedReviewItems = reviewItems.slice(0, desiredReviewCount);
  const pickedNewItems = newItems.slice(0, desiredNewCount);
  const pickedIds = new Set([...pickedReviewItems, ...pickedNewItems].map((item) => item.id));
  const missingCount = dailyCount - pickedReviewItems.length - pickedNewItems.length;
  const topUpItems = allItems.filter((item) => !pickedIds.has(item.id)).slice(0, Math.max(0, missingCount));
  const deck = interleaveDictationDeck(
    [...pickedNewItems, ...topUpItems.filter((item) => !item.isReview)],
    [...pickedReviewItems, ...topUpItems.filter((item) => item.isReview)],
    DICTATION_REVIEW_RATIO
  ).slice(0, dailyCount);

  return {
    deckIds: deck.map((item) => item.id),
    reviewIds: deck.filter((item) => item.isReview).map((item) => item.id),
    newIds: deck.filter((item) => !item.isReview).map((item) => item.id),
  };
}

function ensureDailyDictationState() {
  const todayKey = getTodayKey();
  const sourceItems = buildDictationSourceItems();
  const validIds = new Set(sourceItems.map((item) => item.id));
  let didChange = false;

  if (store.dailyDictation.date !== todayKey || !store.dailyDictation.deckIds.length) {
    store.dailyDictation = {
      ...getDefaultDailyDictation(),
      date: todayKey,
      ...buildDailyDictationPlan(),
    };
    didChange = true;
  }

  const filteredDeckIds = store.dailyDictation.deckIds.filter((id) => validIds.has(id));

  if (filteredDeckIds.length !== store.dailyDictation.deckIds.length) {
    store.dailyDictation = {
      ...store.dailyDictation,
      ...buildDailyDictationPlan(),
      date: todayKey,
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
    detail = unknownWords > 0 ? `优先补完未判断词，再回头强化 ${unknownWords} 个待复习词。` : "先把词义看明白，再进入中文重述和定义自测。";
  } else if (unknownWords > 0) {
    headline = `今天先围绕 ${unknownWords} 个待复习词做主动回忆`;
    detail = "先看中文自己说一遍，再做英文定义自测，这样更符合检索练习。";
    phase = "recover";
  } else if (!allRevealed) {
    headline = "开始做英文定义自测，先回忆再看答案";
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
            <p class="eyebrow">Categories</p>
            <h2>分类</h2>
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
        <p class="eyebrow">Daily Dictation</p>
        <h2>每日默写</h2>
        <p>每天固定一组词，进去后直接开始播放、输入、核对答案，并按当天的复习进度继续往下走。</p>
        <div class="daily-dictation-meta">
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
          <button class="solid-btn small" data-action="open-add-word">添加词汇</button>
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
          <p class="brand-title">进阶词汇卡片</p>
          <span>${mode === "home" ? "书架页 · 分类选择" : `${escapeHtml(category.nameEn)} · 学习页`}</span>
        </div>
      </div>
      ${actions}
    </header>
  `;
}

function renderCategoryCard(category) {
  const stats = getCategoryStats(category);
  const progressCaption = stats.totalWords
    ? stats.started
      ? `${stats.percentage}% 学习进度`
      : `共 ${stats.totalWords} 个词条，尚未开始`
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
  return store.dictationPreferences.accent === "en-US" ? "美音发音" : "英音发音";
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
  const resultKind = uiState.dictation.resultKind;
  const autoAdvanceSeconds = getDictationAutoAdvanceSeconds();
  const currentStatus = item ? getWordStatus(item.id) : null;

  if (!item) {
    return `
      <section class="dictation-stage-card dictation-stage-card--idle">
        <p class="dictation-stage-kicker">今日默写完成</p>
        <h2>今天的默写已经完成</h2>
        <p>你可以返回首页继续复习其它模块，或者明天再回来继续新的每日默写计划。</p>
      </section>
    `;
  }

  if (uiState.dictation.phase === "idle") {
    return `
      <section class="dictation-stage-card dictation-stage-card--idle" data-action="dictation-start">
        <p class="dictation-stage-kicker">准备开始</p>
        <h2>点击播放后开始听写</h2>
        <p>下方保留了和视频一致的三个主按钮：上一个单词、再听一遍、核对答案。</p>
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
              <strong>每日默写 - 进阶词汇</strong>
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
                <button type="button" class="header-add-btn" data-action="open-add-word">添加词汇</button>
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
              <span>右侧看中文重述，下方按定义自测</span>
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
  return `
    <div class="detail-empty">
      <p class="eyebrow">Coming Soon</p>
      <h2>这个分类正在整理成笔记页</h2>
      <p class="empty-copy">
        ${escapeHtml(category.nameZh)} 已经进入书架，但当前还没有可展示的词条数据。你可以先从 Work and study 或 People and relationships 开始。
      </p>
      <div class="hero-actions">
        <button class="solid-btn small" data-action="resume-route" data-target="#/category/work-and-study">打开 Work and study</button>
        <button class="ghost-btn small" data-action="resume-route" data-target="#/category/people-and-relationships">打开 People and relationships</button>
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
          <p class="eyebrow">中文区，尝试用英文复述这段</p>
          <p class="retell-method-note">先自己说，再展开英文核对。${unknownWords > 0 ? `本轮优先把 ${unknownWords} 个待复习词带进复述。` : unseenWords > 0 ? `先补完还没判断熟练度的 ${unseenWords} 个词，再回来复述。` : "如果能完整说出来，记忆会更稳。"} </p>
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
          ${showEnglish ? "隐藏英文原文" : "展开英文原文"}
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
            <h3 class="panel-title">翻过中文，请根据英文定义回想单词</h3>
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
      <p class="settings-copy">这里控制发音偏好和本地记录。词汇发音会优先请求站点自己的 TTS 接口，拿到真实音频后播放；如果接口不可用，再回退到浏览器内置发音。</p>
      <div class="settings-grid">
        <div class="settings-row">
          <label>
            发音偏好
            <span class="helper-text">en-US / en-GB 会同时影响 TTS 接口和浏览器回退发音。</span>
          </label>
          <select data-role="voice-select">
            <option value="en-US" ${store.voice === "en-US" ? "selected" : ""}>美音 · en-US</option>
            <option value="en-GB" ${store.voice === "en-GB" ? "selected" : ""}>英音 · en-GB</option>
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
    <section class="settings-modal word-entry-modal" role="dialog" aria-modal="true" aria-label="添加词汇">
      <p class="eyebrow">Add Word</p>
      <h2>添加词汇</h2>
      <p class="settings-copy">你只要输入一个单词，我会优先从当前词库和本地词书里补全释义，不够时再自动查词，然后按词义帮你推荐分类。</p>

      <div class="word-entry-inline">
        <label class="word-entry-field word-entry-field-full">
          <span>单词</span>
          <input data-role="word-draft-input" data-field="word" placeholder="例如: syllabus" />
        </label>
        <button type="button" class="solid-btn small word-autofill-btn" data-action="autofill-word" data-role="autofill-word-btn">
          自动补全释义
        </button>
      </div>

      <p class="word-lookup-status" data-role="word-lookup-status" data-state="idle">
        只输入单词即可；你也可以直接点底部保存，我会先自动补全再保存。
      </p>

      <div class="word-entry-grid">
        <label class="word-entry-field">
          <span>英文释义</span>
          <input data-role="word-draft-input" data-field="definitionEn" placeholder="例如: a plan of what will be studied" />
        </label>
        <label class="word-entry-field">
          <span>中文释义</span>
          <input data-role="word-draft-input" data-field="definitionZh" placeholder="例如: 课程大纲 / 教学提纲" />
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
    statusNode.textContent =
      message || "只输入单词即可；你也可以直接点底部保存，我会先自动补全再保存。";
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
    .replaceAll("dictionaryapi.dev", "在线词典")
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
      window.alert("请先输入一个单词。");
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
    window.alert("请先输入一个单词。");
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

  if (result.kind !== "correct" && !dictationState.wrongIds.includes(currentItem.id)) {
    dictationState.wrongIds.push(currentItem.id);
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
  const nextAccent = store.dictationPreferences.accent === "en-US" ? "en-GB" : "en-US";
  store.dictationPreferences.accent = nextAccent;
  store.voice = nextAccent;
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

      window.alert("语音播放失败。请用 python3 server.py 启动本站，这样按钮会优先使用真实 TTS 音频。");
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
