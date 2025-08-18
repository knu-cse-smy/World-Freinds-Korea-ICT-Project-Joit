import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // 메인 컴포넌트
import "./index.js"; // 전역 스타일 (필요시)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
