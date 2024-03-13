import { LitElement, css, html } from "lit";
import { map } from "lit/directives/map.js";
import { QUESTION_TYPES } from "../utils/question-types";

/*
    Question Card Element: the element responsible for showing the question and answers and update the score
        - properties :
            - title: string
            - question : string
            - type : string ["3a","4a","text","orderList"**,"clickWord"**,"timeline"**,"code"**]
            - answers : array
            - score : number
*/
export class QuestionCard extends LitElement {
  static properties = {
    title: { type: String },
    question: { type: Array },
    type: { type: String },
    answers: { type: Array },
    score: { type: Number },
  };

  static styles = css`
    h1 {
      color: red;
    }
  `;

  constructor() {
    super();
    this.title = "";
    this.question = [];
  }

  updateScore(index) {}

  render() {
    return html` <h1>HELLOOOOO ${this.title}</h1>
      <p>question:</p>
      ${map(this.question, (el) => html`<p>${el}</p>`)}`;
  }
}

customElements.define("question-card", QuestionCard);
