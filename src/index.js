import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import NoPage from "./NoPage";
import AnimalCards from "./components/AnimalCards";
import CategorySelection from "./components/CategorySelection";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

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
          50: "#dcae96 ",
          100: "#dcae96 ",
          200: "#dcae96 ",
          300: "#dcae96 ",
          400: "#dcae96 ",
          500: "#dcae96 ",
          600: "#dcae96 ",
          700: "#dcae96 ",
          800: "#dcae96 ",
          900: "#dcae96 ",
        },
        secondary: {
          50: "#b999cc ",
          100: "#b999cc ",
          200: "#b999cc ",
          300: "#b999cc ",
          400: "#b999cc ",
          500: "#b999cc ",
          600: "#b999cc ",
          700: "#b999cc ",
          800: "#b999cc ",
          900: "#b999cc ",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          100: "#280040",
          50: "#280040",
          200: "#280040 ",
          300: "#280040",
          400: "#280040",
          500: "#280040",
          600: "#280040",
          700: "#280040",
          800: "#280040",
          900: "#280040",
        },
        secondary: {
          50: "#816b8e ",
          100: "#816b8e ",
          200: "#816b8e ",
          300: "#816b8e ",
          400: "#816b8e ",
          500: "#816b8e ",
          600: "#816b8e ",
          700: "#816b8e ",
          800: "#816b8e ",
          900: "#816b8e ",
        },
      },
    },
  },
  Typography: {
    fontFamily: "Montserrat",
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
