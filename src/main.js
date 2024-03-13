import { LitElement } from "lit";
import * as components from "./components/components";

console.log(components);

const el = document.createElement("question-card");
el.title = "hhhhh";
// el.question = 12;
el.question = ["test", "hello"];

document.body.appendChild(el);
