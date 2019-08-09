import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { NewsPage } from '../news/news';

@Component({
  selector: 'page-save',
  templateUrl: 'save.html',
})
export class SavePage {

  public items:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public app: ApiProvider) {
    this.app.getSavedNews();
    this.app.savedNews.forEach(element => {
      if(element!=null && element!=undefined){
        this.items.push(element);
      }
    });
  }

  goItemPage(data) {
      this.navCtrl.push(NewsPage, {news: data});
  }
}
