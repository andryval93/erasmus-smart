import { Page } from './app.po';
import { browser, by, element, until } from 'protractor';

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


  describe('login error no pass', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

    it('news is not Displayed', () => {
      let e = element(by.id('email'));
      let p = element(by.id('pass'));
      browser.actions().click(e).sendKeys("a.massaro196@gmail.com").perform();
      element(by.id('loginButton')).click();
      browser.wait(function () {
        return e.isDisplayed();
      }, 2000);
    });
  })


  describe('login error wrong mail and pass', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

    it('news is not Displayed', () => {
      let e = element(by.id('email'));
      let p = element(by.id('pass'));
      browser.actions().click(e).sendKeys("a.massaro19@gmail.com").perform();
      browser.actions().click(p).sendKeys("1234").perform();
      element(by.id('loginButton')).click();
      browser.wait(function () {
        return e.isDisplayed();
      }, 2000);
    });
  })


/*
  describe('registration error wrong mail and pass', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

    it('news is not Displayed', () => {
      element(by.id('regButton')).click();
      let email = element(by.id('emailr'));
      let password = element(by.id('passr'));
      let check_p = element(by.id('check_pass'));
      let name = element(by.id('name'));
      let surname = element(by.id('surname'));
      let date = element(by.id('date'));
      let place = element(by.id('place'));
      let cf = element(by.id('cf'));
      let privacy = element(by.id('privacy'));
      let done: boolean=false;
      let first: boolean=true;
      //browser.sleep(100);
      browser.waitForAngular();
      browser.wait(function(){
        //if(first&&done){
      browser.actions().click(name).sendKeys("Andrea").perform();
      browser.actions().click(surname).sendKeys("Massaro").perform();
      //first=false;}
      //if(!done){
      browser.actions().click(date).sendKeys("10121996").perform();
      //done=true;
      browser.actions().click(place).sendKeys("Potenza").perform();
      browser.actions().click(cf).sendKeys("MSSNDR96T10G942I").perform();
      browser.actions().click(email).sendKeys("a.massaro19@gmail.com").perform();
      browser.actions().click(password).sendKeys("123456").perform();
      browser.actions().click(check_p).sendKeys("123456").perform();
      privacy.click();}/*},10000)
      /*browser.wait(function () {
        //return e.isDisplayed();
      }, 20000);
    });
  })*/




  describe('logged soccessfully', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

    it('news is Displayed', () => {
      let e = element(by.id('email'));
      let p = element(by.id('pass'))
      browser.actions().click(e).sendKeys("a.massaro5@studenti.unisa.it").perform();
      browser.actions().click(p).sendKeys("123456").perform();
      element(by.id('loginButton')).click();
      browser.ignoreSynchronization = true;
      browser.wait(function () {
        return element(by.buttonText('Aggiungi News')).isPresent();
      }
        , 10000)
    });
  })





});
