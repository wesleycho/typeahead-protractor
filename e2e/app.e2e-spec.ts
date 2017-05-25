import { TypeaheadProtractorPage } from './app.po';

describe('typeahead-protractor App', () => {
  let page: TypeaheadProtractorPage;

  beforeEach(() => {
    page = new TypeaheadProtractorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();

    return page.typeInTypeahead()
      .then(() => {
        expect(page.getMatches()).toEqual(4);
      });
  });
});
