const template = document.createElement('template');
template.innerHTML = `
<style>
button {
  display: inline-block;
  color: yellowgreen;
  font-size: 18px;
  font-weight: 500;
  font-family: "Futura";
  background-color: white;
  border: 1px solid grey;
  border-radius: 4px;
  padding: 8px;
  margin: 8px;
}
</style>
<button>
  <span><slot /></span>
</button>
`

class MyButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('my-button', MyButton);