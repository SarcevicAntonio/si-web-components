import { newE2EPage } from '@stencil/core/testing';

describe('stencil-counter', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stencil-counter></stencil-counter>');

    const element = await page.find('stencil-counter');
    expect(element).toHaveClass('hydrated');
  });
});
