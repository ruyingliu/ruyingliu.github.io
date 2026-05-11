const translations = {
  en: {
    siteTitle: "Ruying Liu",
    name: "Ruying Liu",
    navHome: "Home",
    navProjects: "Selected Project",
    navPublications: "Publications",
    navAwards: "Awards",
    navExperience: "Experience",
    role: "Professor",
    affiliation: "Tianjin University",
    linkEmail: "Email",
    linkScholar: "Google Scholar",
    aboutTitle: "About",
    aboutBodyOne:
      "I am a Professor in Civil Engineering at Tianjin University. My research focuses on human-building interaction, infrastructure resilience, and AI-driven modeling of the built environment. I develop computational, immersive, and data-driven methods, including digital twins, virtual reality, large language model agents, and multimodal sensing, to support disaster response, safety, and intelligent decision-making.",
    newsTitle: "News",
    newsOne:
      "I am excited to share that I am joining Tianjin University as a full professor! I am actively recruiting students to join my research group.",
    projectsTitle: "Selected Project",
    projectOneTitle: "VR Training for Active Shooter Preparedness",
    projectOneBody:
      "An immersive VR training platform that places healthcare workers inside realistic active-shooter scenarios in a virtual hospital environment. The project uses interactive simulation to study behavior, strengthen preparedness, and provide feedback for safer emergency decision-making.",
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
    moreScholar: "More on Google Scholar",
    builtWith: "Personal academic profile",
    toggleLabel: "中文",
    documentTitle: "Ruying Liu",
  },
  zh: {
    siteTitle: "刘汝盈",
    name: "刘汝盈",
    navHome: "首页",
    navProjects: "代表性项目",
    navPublications: "论文",
    navAwards: "荣誉",
    navExperience: "经历",
    role: "教授",
    affiliation: "天津大学",
    linkEmail: "邮箱",
    linkScholar: "谷歌学术",
    aboutTitle: "关于我",
    aboutBodyOne:
      "我是天津大学建筑工程学院教授、博士生导师，国家地震工程科学中心成员。我的研究聚焦韧性基础设施与智能建成环境中的人—建筑环境交互建模、仿真与决策优化，主要结合数字孪生、虚拟现实、大语言模型智能体和多模态感知等方法，支持灾害响应、安全保障与智能决策。",
    newsTitle: "动态",
    newsOne:
      "很高兴分享我加入了天津大学！我正在积极招收学生加入我的研究团队。",
    projectsTitle: "代表性项目",
    projectOneTitle: "主动枪击事件应急准备虚拟现实训练平台",
    projectOneBody:
      "一个面向医疗机构工作人员的沉浸式虚拟现实训练平台，将受训者置于真实感较强的虚拟医院主动枪击事件场景中。该项目通过交互式仿真研究人员行为、提升应急准备能力，并为更安全的应急决策提供反馈。",
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
    experienceTjuTitle: "菁英教授，天津大学",
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
