import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import AnimalCards from "./components/AnimalCards";
import CategorySelection from "./components/CategorySelection";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import NoPage from "./NoPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<CategorySelection />} />
        <Route path="animal-cards" element={<AnimalCards />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: "#00ef81",
          100: "#00ef81",
          200: "#00ef81",
          300: "#00ef81",
          400: "#00ef81",
          500: "#00ef81",
          600: "#00ef81",
          700: "#00ef81",
          800: "#00ef81",
          900: "#00ef81",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          50: "#00ef81",
          100: "#00ef81",
          200: "#00ef81",
          300: "#00ef81",
          400: "#00ef81",
          500: "#00ef81",
          600: "#00ef81",
          700: "#00ef81",
          800: "#00ef81",
          900: "#00ef81",
        },
      },
    },
  },
  Typography: {
    fontFamily: "",
  },
});
root.render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <App />
    </CssVarsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
