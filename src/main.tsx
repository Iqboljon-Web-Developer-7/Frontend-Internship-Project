import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./scss/main.scss";

import Pages from "./pages/Pages.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/index.ts";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  typography: {
    fontFamily: `"Manrope", sans-serif`,
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Pages />
        </ThemeProvider>
        l
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
