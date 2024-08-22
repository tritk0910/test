import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/router/Router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="font-montserrat">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
