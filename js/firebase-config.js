// js/firebase-config.js

// 1. Firebase SDK のモジュールを読み込む
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// 2. Firebase コンソールからコピーした設定をここに貼り付け
const firebaseConfig = {
  apiKey:      "YOUR_API_KEY",
  authDomain:  "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:   "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:       "YOUR_APP_ID"
};

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQhJ2zMDzyJUbfyLfoZYeIYfGPbuHcayk",
  authDomain: "research-and-development-tests.firebaseapp.com",
  projectId: "research-and-development-tests",
  storageBucket: "research-and-development-tests.firebasestorage.app",
  messagingSenderId: "129922780742",
  appId: "1:129922780742:web:6d5539b103fbc3fbe34447",
  measurementId: "G-5TDL3RVSN1"
};


// 3. Firebase を初期化
const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GithubAuthProvider();

/**
 * GitHub でポップアップログインを行い、
 * 成功すると UserCredential を返します
 */
export function loginWithGitHub() {
  return signInWithPopup(auth, provider);
}

/**
 * 認証状態の監視を開始します。
 * user が null → 未ログイン、User オブジェクト → ログイン中
 */
export function observeAuthState(callback) {
  onAuthStateChanged(auth, callback);
}

/**
 * ログアウトを行います（必要なら呼び出してください）
 */
export function logout() {
  return signOut(auth);
}
