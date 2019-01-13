import { Page } from './app.po';
import { browser, by, element } from 'protractor';

describe('App', () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

    it('loggedInfo is present', () => {
      element(by.id('loggedInfo')).isPresent()
    });
  })

  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

    it('loggedInfo is Displayed', () => {
      element(by.id('ButtonMenu')).click();
      browser.wait(function () {
        return element(by.id('MenuList')).isDisplayed();
      }, 2000);
    });
  })
});
