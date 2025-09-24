import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import router from "./Routes/router.jsx";
import { RouterProvider } from "react-router";
import { Toaster } from "react-hot-toast";
import ReactLenis from "lenis/react";
import "lenis/dist/lenis.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReactLenis root>
      <RouterProvider router={router} />
      <Toaster position="bottom-center" reverseOrder={false} />
    </ReactLenis>
  </StrictMode>
);
