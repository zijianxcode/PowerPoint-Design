import "./styles/theme.css";
import { renderSlideDeck } from "./deck/render.js";

const app = document.querySelector("#app");

if (!app) {
  throw new Error("App root #app was not found.");
}

app.innerHTML = renderSlideDeck();
