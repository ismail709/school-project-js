import { LitElement } from "lit";

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    console.log("object");
  } else {
    console.log("hii");
  }
});
console.log(window.screen);
console.log(screen.availHeight, window.outerHeight, screen.height);
