import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: ApiProvider) {
    this.loadCategoryList();
  }

  changeCategory(item: any) {
    if (typeof (item) === 'object') {
      this.navCtrl.push(HomePage, { category: item });
    }
  }

  loadCategoryList() {
    this.app.getData('Category').subscribe(data => {
      this.app.category = data.items;
    });
  }
}
