component specs:

- button with number that increases on click
- number (count) can be set from outside through attribute like this:

```html
<my-counter count="30"></my-counter>
```

general:

- index.html is our entry website

  - note: you can serve this file with `npx serve` or a different way to start a local server

- [/native/ contains native HTMLElement-based Web Component implementation](https://github.com/SarcevicAntonio/si-web-components/blob/master/native/my-counter.js)

- [/svelte/ contains svelte project with svelte based implementation](https://github.com/SarcevicAntonio/si-web-components/blob/master/svelte/src/MyCounter.svelte)

- [/stencil/ contains stencil project with stencil based implementation](https://github.com/SarcevicAntonio/si-web-components/blob/master/stencil/src/components/stencil-counter/stencil-counter.tsx)

![preview of the index.html](https://i.imgur.com/6kJHw97.png)

[Web Component Slides](https://docs.google.com/presentation/d/1EBzGPoSnaU-f1qZF1cMVDvOGJ1Hj6N7o_JymO2PnJgU/edit?usp=sharing)
