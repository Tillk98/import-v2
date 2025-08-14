import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChooseImportMethod } from "./screens/ChooseImportMethod/ChooseImportMethod";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ChooseImportMethod />
  </StrictMode>,
);
