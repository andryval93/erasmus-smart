import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewNewsProvider } from '../../providers/service/newNewsService';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NewsPage } from '../news/news';

/**
 * Generated class for the NewNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-news',
  templateUrl: 'new-news.html',
})
export class NewNewsPage {

  data: any;
  form: FormGroup;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private serviceProv: NewNewsProvider,
    private _FB: FormBuilder, ) {
      this.form = _FB.group({
        'title': ['', Validators.required],
        'content': ['', Validators.required]
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewNewsPage');
  }

  saveNews(){
    this.data = this.form.value;
    let News = {
      title: this.data.title,
      content: this.data.content,
      date: new Date(),
    };
    this.serviceProv.addDocument("News", this.data.title, News).then(
      ()=>this.navCtrl.setRoot(NewsPage)
    );

  }

}
