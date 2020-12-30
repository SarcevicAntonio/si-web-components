1. Import Script in HTML

```html
<script src="./my-component.js"></script>
```
2. Create Custom Element Class
```js
class MyButton extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<button>my-button</button>`;
  }
}
```
3. Register Custom Element
```js
window.customElements.define('my-button', MyButton);
```

4. Use Button in HTML
```html
<my-button>my new fancy button</my-button>
```

* **Note how its not encapsulated (no shadow dom)**

5. Create new Template
```js
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
  <span>my-button</span>
</button>`;
```

6. Expand Class to use Shadow DOM
```html
class MyButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
```

* **Note how button label is still missing(no slot)**
7. add slot
```
<slot/>
```