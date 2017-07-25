import { TaratestappPage } from './app.po';

describe('taratestapp App', () => {
  let page: TaratestappPage;

  beforeEach(() => {
    page = new TaratestappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
