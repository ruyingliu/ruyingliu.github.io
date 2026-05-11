const translations = {
  en: {
    siteTitle: "Ruying Liu",
    name: "Ruying Liu",
    navHome: "Home",
    navProjects: "Projects",
    navPublications: "Publications",
    navAwards: "Awards",
    navExperience: "Experience",
    role: "Professor",
    affiliation: "Tianjin University",
    linkEmail: "Email",
    linkScholar: "Google Scholar",
    aboutTitle: "About",
    aboutBodyOne:
      "I am a researcher and developer interested in building reliable, human-centered systems. My work focuses on AI-assisted workflows, developer tools, data-rich applications, and practical interfaces that make complex systems easier to understand.",
    aboutBodyTwo:
      "This page is intentionally compact, CV-like, and easy to maintain as a personal website. Replace the placeholders with your biography, research interests, recent news, and selected work.",
    newsTitle: "News",
    newsOne: "Launched this personal academic profile.",
    newsTwo: "Started a new project on AI-assisted software workflows.",
    newsThree: "Shared notes on building maintainable internal tools.",
    projectsTitle: "Projects",
    projectOneTitle: "Project One",
    projectOneBody:
      "A concise description of a project, demo, or research prototype. Mention the problem, your contribution, and the stack or method.",
    projectTwoTitle: "Project Two",
    projectTwoBody:
      "A second selected work entry. Keep it short and concrete so the page reads like a curated profile rather than a long resume.",
    publicationsTitle: "Publications",
    awardsTitle: "Awards",
    awardResearchLeadership:
      "Viterbi Research Leadership and Mentor Award, University of Southern California.",
    awardWise:
      "Women in Science and Engineering Merit Award (WiSE Merit Award), University of Southern California.",
    awardResearchAssistant:
      "Outstanding Research Assistant Award, University of Southern California.",
    awardRisingStar:
      "Rising Star in Civil and Environmental Engineering, Carnegie Mellon University.",
    awardCharlesInnes: "Charles Innes Prize, University of Edinburgh.",
    experienceTitle: "Experience",
    experienceTjuTitle: "Full Professor, Tianjin University",
    experienceUscPostdocTitle:
      "Postdoctoral Researcher, University of Southern California",
    experienceRutherfordTitle: "Structural Engineer, Rutherford + Chekene",
    experienceIdaTitle: "Structural Engineer, IDA Structural Engineers",
    educationTitle: "Education",
    educationPhdTitle:
      "Ph.D. in Civil Engineering, University of Southern California",
    educationCsTitle:
      "M.S. in Computer Science, University of Southern California",
    educationBerkeleyTitle:
      "M.S. in Civil Engineering, University of California, Berkeley",
    educationBerkeleyBody:
      "Structural Engineering, Mechanics, and Materials (SEMM)",
    educationEdinburghTitle:
      "B.Eng. in Civil Engineering, First Class Honours, The University of Edinburgh",
    linkCode: "Code",
    linkDemo: "Demo",
    linkNotes: "Notes",
    linkPaper: "Paper",
    linkProject: "Project",
    moreScholar: "More on Google Scholar",
    builtWith: "Personal academic profile",
    toggleLabel: "中文",
    documentTitle: "Ruying Liu",
  },
  zh: {
    siteTitle: "刘汝盈",
    name: "刘汝盈",
    navHome: "首页",
    navProjects: "项目",
    navPublications: "论文",
    navAwards: "荣誉",
    navExperience: "经历",
    role: "教授",
    affiliation: "天津大学",
    linkEmail: "邮箱",
    linkScholar: "谷歌学术",
    aboutTitle: "关于我",
    aboutBodyOne:
      "我是一名关注可靠、人本系统的研究者与开发者。我的工作兴趣包括 AI 辅助工作流、开发者工具、数据密集型应用，以及帮助人们理解复杂系统的实用界面。",
    aboutBodyTwo:
      "这个页面保持紧凑、清晰，接近学术个人主页和简历的风格，也便于作为个人网站维护。你可以把这里的占位文字替换成个人简介、研究兴趣、近期动态和代表性工作。",
    newsTitle: "动态",
    newsOne: "上线了这个个人学术主页。",
    newsTwo: "开始了一个关于 AI 辅助软件工作流的新项目。",
    newsThree: "整理并分享了关于可维护内部工具的笔记。",
    projectsTitle: "项目",
    projectOneTitle: "项目一",
    projectOneBody:
      "用简洁的文字介绍一个项目、演示或研究原型。可以说明问题背景、你的贡献，以及使用的技术栈或方法。",
    projectTwoTitle: "项目二",
    projectTwoBody:
      "第二个代表性工作条目。保持简短具体，让页面更像精选主页，而不是冗长的履历。",
    publicationsTitle: "论文",
    awardsTitle: "荣誉",
    awardResearchLeadership:
      "科研领导力与导师奖 (Viterbi Research Leadership and Mentor Award)，南加州大学。",
    awardWise:
      "Women in Science and Engineering 杰出贡献奖 (WiSE Merit Award)，南加州大学。",
    awardResearchAssistant:
      "杰出研究助理奖 (Outstanding Research Assistant Award)，南加州大学。",
    awardRisingStar:
      "土木与环境工程领域新星奖 (Rising Star in Civil and Environmental Engineering)，卡耐基梅隆大学。",
    awardCharlesInnes: "最佳毕业生奖 (Charles Innes Prize)，爱丁堡大学。",
    experienceTitle: "经历",
    experienceTjuTitle: "正教授，天津大学",
    experienceUscPostdocTitle: "博士后，南加州大学",
    experienceRutherfordTitle: "结构工程师，Rutherford + Chekene",
    experienceIdaTitle: "结构工程师，IDA Structural Engineers",
    educationTitle: "教育背景",
    educationPhdTitle: "土木工程，博士，南加州大学",
    educationCsTitle: "计算机科学，硕士，南加州大学",
    educationBerkeleyTitle: "土木工程，硕士，加州大学伯克利分校",
    educationBerkeleyBody:
      "Structural Engineering, Mechanics, and Materials (SEMM)",
    educationEdinburghTitle: "土木工程，一等荣誉学士，爱丁堡大学",
    linkCode: "代码",
    linkDemo: "演示",
    linkNotes: "笔记",
    linkPaper: "论文",
    linkProject: "项目",
    moreScholar: "更多论文见谷歌学术",
    builtWith: "个人学术主页",
    toggleLabel: "English",
    documentTitle: "刘汝盈",
  },
};

const languageToggle = document.querySelector(".language-toggle");
const languageLabel = document.querySelector("[data-lang-label]");
const year = document.querySelector("#year");
const savedLanguage = localStorage.getItem("preferredLanguage");
const initialLanguage = savedLanguage || "en";

function setLanguage(language) {
  const dictionary = translations[language] || translations.en;

  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = dictionary.documentTitle;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = dictionary[key] || translations.en[key] || "";
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    element.innerHTML = dictionary[key] || translations.en[key] || "";
  });

  languageLabel.textContent = dictionary.toggleLabel;
  languageToggle.dataset.language = language;
  localStorage.setItem("preferredLanguage", language);
}

year.textContent = new Date().getFullYear();

languageToggle.addEventListener("click", () => {
  const nextLanguage = languageToggle.dataset.language === "zh" ? "en" : "zh";
  setLanguage(nextLanguage);
});

setLanguage(initialLanguage);
