import { PostsPage } from './app.po';

describe('posts App', function() {
  let page: PostsPage;

  beforeEach(() => {
    page = new PostsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
