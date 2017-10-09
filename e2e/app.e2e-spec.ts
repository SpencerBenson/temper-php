import { TemperPage } from './app.po';

describe('temper App', () => {
  let page: TemperPage;

  beforeEach(() => {
    page = new TemperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
