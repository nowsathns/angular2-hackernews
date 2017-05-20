import { HackernewsAngularPage } from './app.po';

describe('hackernews-angular App', () => {
  let page: HackernewsAngularPage;

  beforeEach(() => {
    page = new HackernewsAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('hn works!');
  });
});
