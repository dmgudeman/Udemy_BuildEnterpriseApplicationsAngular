import { PepperPage } from './app.po';

describe('pepper App', () => {
  let page: PepperPage;

  beforeEach(() => {
    page = new PepperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
