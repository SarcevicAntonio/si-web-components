// 1462 chars
const counterTemplate = document.createElement("template");
counterTemplate.innerHTML = `
<style>
button {
  color: #5c8012;
  background-color: white;
  border: 1px solid grey;
  border-radius: 4px;
  padding: 8px;
  margin: 8px;
  transition: box-shadow .4s ease;
  user-select: none;
  cursor: pointer;
}
button:hover {
  box-shadow: 0 4px 32px 0 rgba(0,0,0,.161);
}
button:focus {
  outline: none;
  border-color: black;
}
</style>
<button id="inc">
  Clicked <span id="count">0</span> times
</button>`;

class MyCounter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(counterTemplate.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.getElementById("inc").addEventListener("click", () => {
      this.count++;
    });

    if (!this.hasAttribute("count")) {
      this.setAttribute("count", 0);
    }
  }

  disconnectedCallback() {
    this.shadowRoot.getElementById("inc").removeEventListener("click");
  }

  static get observedAttributes() {
    return ["count"];
  }

  attributeChangedCallback(name, oldCount, newCount) {
    this.shadowRoot.getElementById("count").innerHTML = newCount;
  }

  get count() {
    return this.getAttribute("count");
  }

  set count(newCount) {
    this.setAttribute("count", newCount);
  }
}

window.customElements.define("my-counter", MyCounter);
