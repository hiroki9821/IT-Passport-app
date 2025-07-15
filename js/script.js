import { loginWithGitHub, observeAuthState, logout } from './firebase-config.js';
import { q1_enterprise } from './q1_enterprise.js';
import { q2_law } from './q2_law.js';
import { q3_business_strategy } from './q3_business_strategy.js';
import { q4_tech_strategy } from './q4_tech_strategy.js';
import { q5_industry } from './q5_industry.js';
import { q6_system_strategy } from './q6_system_strategy.js';
import { q7_system_planning } from './q7_system_planning.js';
import { q8_system_dev } from './q8_system_dev.js';
import { q9_software_dev } from './q9_software_dev.js';
import { q10_project_mgmt } from './q10_project_mgmt.js';
import { q11_service_mgmt } from './q11_service_mgmt.js';
import { q12_audit } from './q12_audit.js';
import { q13_basic_theory } from './q13_basic_theory.js';
import { q14_algorithm } from './q14_algorithm.js';
import { q15_computer_components } from './q15_computer_components.js';
import { q16_system_components } from './q16_system_components.js';
import { q17_software } from './q17_software.js';
import { q18_hardware } from './q18_hardware.js';
import { q19_info_design } from './q19_info_design.js';
import { q20_info_media } from './q20_info_media.js';
import { q21_database } from './q21_database.js';
import { q22_network } from './q22_network.js';
import { q23_security } from './q23_security.js';
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const isDark = savedTheme === null || savedTheme === "dark";
  if (isDark) {
    document.body.classList.add("dark");
  }
  function shuffleArray(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }
  document.getElementById("btn-strategy").addEventListener("click", () => {
    const el = document.getElementById("strategy-subcategories");
    const isOpen = !el.classList.contains("hidden");
    hideAllSubcategories();
    if (!isOpen) el.classList.remove("hidden");
  });
  document.getElementById("btn-management").addEventListener("click", () => {
    const el = document.getElementById("management-subcategories");
    const isOpen = !el.classList.contains("hidden");
    hideAllSubcategories();
    if (!isOpen) el.classList.remove("hidden");
  });
  document.getElementById("btn-technology").addEventListener("click", () => {
    const el = document.getElementById("technology-subcategories");
    const isOpen = !el.classList.contains("hidden");
    hideAllSubcategories();
    if (!isOpen) el.classList.remove("hidden");
  });
  function hideAllSubcategories() {
    document.getElementById("strategy-subcategories").classList.add("hidden");
    document.getElementById("management-subcategories").classList.add("hidden");
    document.getElementById("technology-subcategories").classList.add("hidden");
  }
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const hamburgerMenu = document.getElementById("hamburger-menu");
  hamburgerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    hamburgerMenu.classList.toggle("open");
    hamburgerMenu.classList.remove("hidden");
    document.body.classList.toggle("menu-open");
  });
  document.addEventListener("click", (e) => {
    if (
      document.body.classList.contains("menu-open") &&
      !hamburgerMenu.contains(e.target) &&
      !hamburgerBtn.contains(e.target)
    ) {
      hamburgerMenu.classList.remove("open");
      document.body.classList.remove("menu-open");
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.body.classList.contains("menu-open")) {
      hamburgerMenu.classList.remove("open");
      document.body.classList.remove("menu-open");
    }
  });
  const themeToggleBtn = document.getElementById("toggle-theme-btn");
  themeToggleBtn.addEventListener("click", () => {
    const nowDark = document.body.classList.toggle("dark");
    localStorage.setItem("theme", nowDark ? "dark" : "light");
    updateThemeButtonLabel();
  });
  const langButtons = {
    ja: document.getElementById("lang-ja"),
    en: document.getElementById("lang-en"),
    ru: document.getElementById("lang-ru")
  };
  const translations = {
    ja: {
      title: "ITパスポート試験 問題集",
      categoryPrompt: "カテゴリーを選択してください",
      strategy: "ストラテジ",
      management: "マネジメント",
      technology: "テクノロジ",
      next: "次の問題 >>",
      previous: "<< 前の問題",
      back: "カテゴリーに戻る",
      toggleToLight: "ホワイトモード切替",
      toggleToDark: "ダークモード切替",
      quizTitleSuffix: "問題",
      correct: "正解！",
      incorrect: "不正解。",
      finished: "全ての問題が終了しました。",
      questionPrefix: "問"
    },
    en: {
      title: "IT Passport Exam - Quiz",
      categoryPrompt: "Please select a category",
      strategy: "Strategy",
      management: "Management",
      technology: "Technology",
      next: "Next Question >>",
      previous: "<< Previous Question",
      back: "Back to Categories",
      toggleToLight: "Switch to Light Mode",
      toggleToDark: "Switch to Dark Mode",
      quizTitleSuffix: "Questions",
      correct: "Correct!",
      incorrect: "Incorrect.",
      finished: "All questions completed.",
      questionPrefix: "Q"
    },
    ru: {
      title: "Экзамен IT Passport - Викторина",
      categoryPrompt: "Выберите категорию",
      strategy: "Стратегия",
      management: "Управление",
      technology: "Технологии",
      next: "Следующий вопрос >>",
      previous: "<< Предыдущий вопрос",
      back: "Назад к категориям",
      toggleToLight: "Переключить на светлый режим",
      toggleToDark: "Переключить на тёмный режим",
      quizTitleSuffix: "Вопросы",
      correct: "Правильно!",
      incorrect: "Неправильно.",
      finished: "Все вопросы завершены.",
      questionPrefix: "Вопрос"
    }
  };
  let currentLang = "ja";
  let currentCategory = null;
  let currentQuestionIndex = 0;
  let currentQuestions = [];
  const categorySection = document.getElementById("category-section");
  const quizSection = document.getElementById("quiz-section");
  const questionArea = document.getElementById("question-area");
  const choicesArea = document.getElementById("choices-area");
  const resultArea = document.getElementById("result");
  const nextQuestionBtn = document.getElementById("next-question-btn");
  const backToCategoryBtn = document.getElementById("back-to-category-btn");
  const previousQuestionBtn = document.getElementById("previous-question-btn");
  const showCorrectToggle = document.getElementById("show-correct-toggle");
  showCorrectToggle.addEventListener("change", showQuestion);
  function loadQuestions(id) {
    hideAllSubcategories();
    const strategyMap = {
      1: { title: "企業活動", data: q1_enterprise },
      2: { title: "法務", data: q2_law },
      3: { title: "経営戦略マネジメント", data: q3_business_strategy },
      4: { title: "技術戦略マネジメント", data: q4_tech_strategy },
      5: { title: "ビジネスインダストリ", data: q5_industry },
      6: { title: "システム戦略", data: q6_system_strategy },
      7: { title: "システム企画", data: q7_system_planning }
    };
    const selected = strategyMap[id];
    if (!selected || !selected.data) return alert("指定された問題が見つかりません。");
    currentQuestions = shuffleArray(selected.data);
    currentCategory = "strategy";
    currentQuestionIndex = 0;
    categorySection.classList.add("hidden");
    quizSection.classList.remove("hidden");
    updateQuizTitle("strategy");
    showBreadcrumb("ストラテジ", selected.title);
    resultArea.innerHTML = "";
    showQuestion();
    nextQuestionBtn.disabled = false;
  }
  window.loadQuestions = loadQuestions;
  function loadManagementQuestions(id) {
    hideAllSubcategories();
    const managementMap = {
      8: { title: "システム開発技術", data: q8_system_dev },
      9: { title: "ソフトウェア開発管理技術", data: q9_software_dev },
      10: { title: "プロジェクトマネジメント", data: q10_project_mgmt },
      11: { title: "サービスマネジメント", data: q11_service_mgmt },
      12: { title: "システム監査", data: q12_audit }
    };
    const selected = managementMap[id];
    if (!selected || !selected.data) return alert("指定された問題が見つかりません。");
    currentQuestions = shuffleArray(selected.data);
    currentCategory = "management";
    currentQuestionIndex = 0;
    categorySection.classList.add("hidden");
    quizSection.classList.remove("hidden");
    updateQuizTitle("management");
    showBreadcrumb("マネジメント", selected.title);
    resultArea.innerHTML = "";
    showQuestion();
    nextQuestionBtn.disabled = false;
  }
  window.loadManagementQuestions = loadManagementQuestions;
  function loadTechnologyQuestions(id) {
    hideAllSubcategories();
    const technologyMap = {
      13: { title: "基礎理論", data: q13_basic_theory },
      14: { title: "アルゴリズムとプログラミング", data: q14_algorithm },
      15: { title: "コンピュータ構成要素", data: q15_computer_components },
      16: { title: "システム構成要素", data: q16_system_components },
      17: { title: "ソフトウェア", data: q17_software },
      18: { title: "ハードウェア", data: q18_hardware },
      19: { title: "情報デザイン", data: q19_info_design },
      20: { title: "情報メディア", data: q20_info_media },
      21: { title: "データベース", data: q21_database },
      22: { title: "ネットワーク", data: q22_network },
      23: { title: "セキュリティ", data: q23_security }
    };
    const selected = technologyMap[id];
    if (!selected || !selected.data) return alert("指定された問題が見つかりません。");
    currentQuestions = shuffleArray(selected.data);
    currentCategory = "technology";
    currentQuestionIndex = 0;
    categorySection.classList.add("hidden");
    quizSection.classList.remove("hidden");
    updateQuizTitle("technology");
    showBreadcrumb("テクノロジ", selected.title);
    resultArea.innerHTML = "";
    showQuestion();
    nextQuestionBtn.disabled = false;
  }
  window.loadTechnologyQuestions = loadTechnologyQuestions;
  function updateThemeButtonLabel() {
    const t = translations[currentLang];
    if (document.body.classList.contains("dark")) {
      themeToggleBtn.textContent = t.toggleToLight;
    } else {
      themeToggleBtn.textContent = t.toggleToDark;
    }
  }
  function updateLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    document.querySelector("h1").textContent = t.title;
    document.querySelector("#category-section h2").textContent = t.categoryPrompt;
    document.getElementById("btn-strategy").textContent = t.strategy;
    document.getElementById("btn-management").textContent = t.management;
    document.getElementById("btn-technology").textContent = t.technology;
    nextQuestionBtn.textContent = t.next;
    backToCategoryBtn.textContent = t.back;
    previousQuestionBtn.textContent = t.previous;
    updateThemeButtonLabel();
  }
  function updateQuizTitle(category) {
    const t = translations[currentLang];
    const title = t[category];
    const suffix = t.quizTitleSuffix;
    document.getElementById("quiz-category-title").textContent = `${title} ${suffix}`;
  }
  Object.keys(langButtons).forEach((lang) => {
    langButtons[lang].addEventListener("click", () => updateLanguage(lang));
  });
  updateThemeButtonLabel();
  nextQuestionBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
      showQuestion();
    } else {
      resultArea.textContent = translations[currentLang].finished;
      nextQuestionBtn.disabled = true;
    }
  });
  previousQuestionBtn.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      showQuestion();
      nextQuestionBtn.disabled = false;
    }
  });
  backToCategoryBtn.addEventListener("click", () => {
    quizSection.classList.add("hidden");
    categorySection.classList.remove("hidden");
    hideAllSubcategories();
    nextQuestionBtn.disabled = false;
    resultArea.innerHTML = "";
  });
  function showQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    const t = translations[currentLang];
    const prefix = `${t.questionPrefix}${currentQuestionIndex + 1}. `;

    questionArea.innerHTML = `<p class="underline-multiline">${prefix}${q.question}</p>`;
    choicesArea.innerHTML = "";
    resultArea.innerHTML = ""; 
    
    if (showCorrectToggle.checked && q.explanation) {
      resultArea.innerHTML = `<div style="margin-top:10px;color:green;">${q.explanation}</div>`;
    }
    const shuffledChoices = [...q.choices].sort(() => Math.random() - 0.5);
    shuffledChoices.forEach((choice) => {
      const btn = document.createElement("button");
      btn.textContent = choice;

      if (showCorrectToggle.checked && q.answer === choice) {
        btn.textContent += "　✔";
        btn.style.border = "2px solid green";
        btn.style.fontWeight = "bold";
      }
      btn.onclick = () => {
        resultArea.innerHTML = q.answer === choice
          ? t.correct + (q.explanation ? `<div style="margin-top:10px;color:green;">${q.explanation}</div>` : "")
          : t.incorrect;
        if (q.answer === choice) {
          Array.from(choicesArea.children).forEach(b => b.disabled = true);
        }
      };
      choicesArea.appendChild(btn);
    });
    previousQuestionBtn.style.display = currentQuestionIndex > 0 ? "inline-block" : "none";
  }
  showCorrectToggle.addEventListener("change", () => {
    showQuestion();
  });
  function showBreadcrumb(categoryLabel, subcategoryLabel) {
    const breadcrumbEl = document.getElementById("breadcrumb");
    breadcrumbEl.innerHTML = `
      <span>ホーム</span>
      <span class="divider">></span>
      <span>${categoryLabel}</span>
      <span class="divider">></span>
      <span>${subcategoryLabel}</span>
    `;
  }
  updateLanguage("ja");
});
