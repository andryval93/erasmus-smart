import { QeAPage } from './app.qea.po';
import { browser, by, element } from 'protractor';

describe('App', () => {
  let page: QeAPage;

  beforeEach(() => {
    page = new QeAPage();
  });

  describe('Gestore Q&A', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });


    it('new question empty', () => {
      page.navigateToQeA();
      page.navigateToNewQuestion();
      page.selectSede();
      page.insertTitolo("");
      page.insertDescrizione("");
      expect(page.inviaDomanda()).not.toEqual("Success");
    })    
  })
});
