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
  // ✅ 追加ここから：初期テーマの設定（デフォルトはダークモード）
  const savedTheme = localStorage.getItem("theme");
  const isDark = savedTheme === null || savedTheme === "dark";
  if (isDark) {
    document.body.classList.add("dark");
  }
  // ✅ 追加ここまで

  // ===== 変更行31: シャッフル関数を追加 =====
  /**
   * 配列をランダムに並び替える(シャッフル)ユーティリティ
   */
  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
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

  // ...（省略：ハンバーガーやテーマ切替等の既存コード）...

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
    if (!selected || !selected.data) {
      alert("指定された問題が見つかりません。");
      return;
    }
    // ===== 変更行109: ここをシャッフルに変更 =====
    currentQuestions = shuffleArray([...selected.data]);
    currentCategory = "strategy";
    currentQuestionIndex = 0;
    categorySection.classList.add("hidden");
    quizSection.classList.remove("hidden");
    updateQuizTitle("strategy");
    showBreadcrumb("ストラテジ", selected.title);
    showQuestion();
    setTimeout(showQuestion, 0);
    nextQuestionBtn.disabled = false;
    resultArea.innerHTML = "";
  }

  // ===== 変更行146: loadManagementQuestions も同様にシャッフル =====
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
    if (!selected || !selected.data) {
      alert("指定された問題が見つかりません。");
      return;
    }
    currentQuestions = shuffleArray([...selected.data]);
    currentCategory = "management";
    currentQuestionIndex = 0;
    categorySection.classList.add("hidden");
    quizSection.classList.remove("hidden");
    updateQuizTitle("management");
    showBreadcrumb("マネジメント", selected.title);
    showQuestion();
    setTimeout(showQuestion, 0);
    nextQuestionBtn.disabled = false;
    resultArea.innerHTML = "";
  }

  // ===== 変更行185: loadTechnologyQuestions も同様にシャッフル =====
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
    if (!selected || !selected.data) {
      alert("指定された問題が見つかりません。");
      return;
    }
    currentQuestions = shuffleArray([...selected.data]);
    currentCategory = "technology";
    currentQuestionIndex = 0;
    categorySection.classList.add("hidden");
    quizSection.classList.remove("hidden");
    updateQuizTitle("technology");
    showBreadcrumb("テクノロジ", selected.title);
    showQuestion();
    setTimeout(showQuestion, 0);
    nextQuestionBtn.disabled = false;
    resultArea.innerHTML = "";
  }

  // ...（以下既存コード続く）...
});
