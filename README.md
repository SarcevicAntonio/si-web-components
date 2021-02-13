component specs:

- button with number that increases on click
- number (count) can be set from outside through attribute like this:

```html
<my-counter count="30"></my-counter>
```

general:

- index.html is our entry website

- /native/ contains native HTMLElement-based Web Component implementation

- /svelte/ contains svelte project with svelte based implementation

  - note: build svelte web component using `npm i && npm run build` in `/svelte` therefore index.html can import the bundle.js

- /stencil/ contains stencil project with stencil based implementation
  - note: TODO or just commit build 🤔
