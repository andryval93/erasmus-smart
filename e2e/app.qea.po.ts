import { browser, by, element } from 'protractor';

export class QeAPage {

  navigateTo(destination) {
    return browser.get(destination);
  }

  navigateToQeA(){
    browser.sleep(1000);
    element(by.id('ButtonMenu')).click();
    element(by.buttonText('Q&A')).click();
  }

  navigateToNewQuestion(){
    browser.sleep(1000);
    element(by.className('nuovaDomandaButton')).click;
  }

  selectSede(){
    browser.sleep(1000);
    element(by.id('sedi')).click;
    element(by.partialLinkText('Generic')).click();
    element(by.buttonText('OK')).click();
  }

  insertTitolo(titolo){
    browser.sleep(1000);
    element(by.id('titolo')).sendKeys(titolo);
  }

  insertDescrizione(descrizione){
    element(by.id('descrizione')).sendKeys(descrizione);
  }

  inviaDomanda(){
    let b = element(by.className('inviaDomanda'));
    if(b.isEnabled){
      b.click();
      let titleAlert;
      browser.sleep(1000);
      titleAlert = element(by.className('alert-title')).getText();
      return titleAlert;
    }
    return;
  }
}
