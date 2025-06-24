import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import "./i18n"; // RẤT QUAN TRỌNG: đảm bảo i18n được khởi tạo trước

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
