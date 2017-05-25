import { browser, by, element } from 'protractor';

export class TypeaheadProtractorPage {
  navigateTo() {
    return browser.get('/');
  }

  getMatches() {
    return element.all(by.css('ngb-typeahead-window .dropdown-item')).count();
  }

  typeInTypeahead() {
    element(by.css('#typeahead-basic')).sendKeys('new');

    return browser.waitForAngular();
  }
}
