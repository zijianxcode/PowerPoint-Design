import "./styles.css";
import { renderSlideDeck } from "./slide.js";

const app = document.querySelector("#app");

if (!app) {
  throw new Error("App root #app was not found.");
}

app.innerHTML = renderSlideDeck();
