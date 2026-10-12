import html2canvas from "html2canvas";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "@/App";
import "@/index.css";
import { initLiveBackdrop } from "@/glass/liveBackdrop";

window.html2canvas = html2canvas;

initLiveBackdrop();

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
