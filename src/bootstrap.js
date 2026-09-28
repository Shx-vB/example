import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StandaloneFrame } from "@platform/design-system";
import App from "./App";

// Only runs when this remote is opened directly (http://localhost:3001).
// Inside the shell, the shell imports ./App and provides the theme and router.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StandaloneFrame title="Example Module">
      <App />
    </StandaloneFrame>
  </StrictMode>
);
