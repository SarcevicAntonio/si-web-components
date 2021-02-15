component specs:

- button with number that increases on click
- number (count) can be set from outside through attribute like this:

```html
<my-counter count="30"></my-counter>
```

general:

- index.html is our entry website

  - note: you can serve this file with `npx serve` or a different way to start a local server

- /native/ contains native HTMLElement-based Web Component implementation

- /svelte/ contains svelte project with svelte based implementation

- /stencil/ contains stencil project with stencil based implementation
