import { newSpecPage } from '@stencil/core/testing';
import { StencilCounter } from '../stencil-counter';

describe('stencil-counter', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StencilCounter],
      html: `<stencil-counter></stencil-counter>`,
    });
    expect(page.root).toEqualHtml(`
      <stencil-counter>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stencil-counter>
    `);
  });
});
