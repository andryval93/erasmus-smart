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




    describe('logged soccessfully', () => {
      beforeEach(() => {
        page.navigateTo('/');
      });

      it('news is Displayed', () => {
        let e = element(by.id('email'));
        let p = element(by.id('pass'))
        browser.actions().click(e).sendKeys("a.massaro196@gmail.com").perform();
        browser.actions().click(p).sendKeys("123456").perform();
        element(by.id('loginButton')).click();
        browser.wait(function () {
          //element(by.id('email')).sendKeys('a.massaro5555');
        }, 2000);
      });
    })
  });
