// 3. 
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
  transition: box-shadow .4s ease;
  user-select: none;
}
button:hover {
  box-shadow: 0 4px 32px 0 rgba(0,0,0,.161);
}
button:active {
  background-color: grey;
}
</style>
<button>
  <span><slot/></span>
</button>`;

// 4.
class MyButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}


// 2.
window.customElements.define('my-button', MyButton);