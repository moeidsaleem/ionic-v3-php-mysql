import { Component, ViewChild, NgZone } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { ApiProvider } from '../../providers/api/api';
import { throttle } from 'lodash';
import { NewsPage } from '../news/news';
import { SavePage } from '../save/save';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  @ViewChild(Content) content: Content;

  public isInternet: boolean;
  public errorMessage: string = null;
  private newsList: any = [];
  private showFloat: boolean = false;
  private query: string = '';

  constructor(private navCtrl: NavController,
    public navParams: NavParams,
    private network: Network,
    private zone: NgZone,
    public app: ApiProvider) {
      this.scrollToTop = throttle(this.scrollToTop, 500, { leading: true, trailing: false });
  }

  loadNewsList(infiniteScroll: any = null, refresh: boolean = false) {
    if (this.network.type !== "none") {
      this.isInternet = false;
      this.errorMessage = null;

      this.app
        .getData('News/0?page=' + (refresh ? 0 : this.newsList.length) + this.query)
        .subscribe(data => {
          if (refresh) this.newsList = [];
          if (data.news.length > 0) {
            this.newsList = this.newsList.concat(data.news);
          } else if (this.newsList.length === 0 && this.query.length > 0) {
            this.errorMessage = 'Sorry, there are no results.';
          }
          if (infiniteScroll != null) infiniteScroll.complete();
        }, error => {
          this.isInternet = true;
          if (infiniteScroll != null) infiniteScroll.complete();
        });
    } else {
      this.isInternet = true;
      if (infiniteScroll != null) infiniteScroll.complete();
    }
  }

  onSearch(event) {
    this.newsList = [];
    this.query = '&search=' + event.target.value;
    this.loadNewsList();
  }

  goItemPage(data) {
    this.navCtrl.push(NewsPage, { news: data });
  }

  getScrollPosition() {
    if (this.content.scrollTop != null && this.content.scrollTop > 200) {
      if (this.showFloat === false) {
        this.showFloat = true;
        this.zone.run(() => {});
      }
    } else if (this.showFloat) {
      this.showFloat = false;
      this.zone.run(() => {});
    }
  }

  scrollToTop() {
    if (this.showFloat) {
      this.showFloat = false;
      const wait = this.content.isScrolling ? 150 : 0;
      setTimeout(() => this.content.scrollToTop(500), wait)
    }
  }

  goSavedNews(){
    this.navCtrl.push(SavePage);
  }
}
