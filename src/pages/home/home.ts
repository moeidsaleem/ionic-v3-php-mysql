import { Component, ViewChild, NgZone } from '@angular/core';
import { Content, NavController, NavParams } from 'ionic-angular';
import { Network } from "@ionic-native/network";
import { NewsPage } from "../news/news";
import { throttle } from 'lodash';
import { ApiProvider } from '../../providers/api/api';
import { SavePage } from '../save/save';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Content) content: Content;

  public isInternet: boolean;
  private category: any = { id: 0, title: '' };
  public errorMessage: string = null;
  private newsList: any = [];
  private showFloat: boolean = false;
  public loadMore: boolean = true;
  public loggedIn:boolean = false;
  // public loggedIn: boolean = false

  constructor(private navCtrl: NavController,
  public api:ApiProvider,
    public navParams: NavParams,
    private network: Network,
    private zone: NgZone,
    public app: ApiProvider) {
    this.scrollToTop = throttle(this.scrollToTop, 500, { leading: true, trailing: false });
    this.category.title = app.APP_TITLE;
  }

  ionViewDidLoad() {
    console.log(localStorage.getItem('status'))
  
    let item = this.navParams.get('category');
    if (typeof (item) === 'object' && item.id !== undefined) {
      this.changeCategory(item);
    } else {
      this.changeCategory(this.category);
    }
  }


  goLogin(){
    this.navCtrl.push('RegisterPage')
  }

  loadNewsList(infiniteScroll: any = null, refresh: boolean = false) {
    if (this.network.type !== "none") {
      this.isInternet = false;
      this.errorMessage = null;

      this.app
        .getData('News/' + this.category.id + '?page=' + (refresh ? 0 : this.newsList.length))
        .subscribe(data => {
          this.loadMore = data.news.length >= 8;
          if (refresh) this.newsList = [];
          if (data.news.length > 0) {
            this.newsList = this.newsList.concat(data.news);
          } else if (this.newsList.length === 0) {
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

  changeCategory(cat) {
    this.category = cat;
    this.loadNewsList(null, true);
  }

  goItemPage(data) {
    this.navCtrl.push(NewsPage, { news: data });
  }

  getScrollPosition() {
    if (this.content.scrollTop != null && this.content.scrollTop > 200) {
      if (this.showFloat === false) {
        this.showFloat = true;
        this.zone.run(() => { });
      }
    } else if (this.showFloat) {
      this.showFloat = false;
      this.zone.run(() => { });
    }
  }

  scrollToTop() {
    if (this.showFloat) {
      this.showFloat = false;
      const wait = this.content.isScrolling ? 150 : 0;
      setTimeout(() => this.content.scrollToTop(500), wait)
    }
  }

  goSavedNews() {
    this.navCtrl.push(SavePage);
  }

// login(){
//   this.api.login().subscribe(res=>{
//       console.log('response', res)
//       if(res === 'Your Login success'){
//         localStorage.setItem('status', 'active')
//         this.isLoggedIn()
//       }

//   })
// }

  isLoggedIn():boolean{
   if(localStorage.getItem('status') == 'active'){
     this.loggedIn = true
     return true;
   }else{
          this.loggedIn = true
     return false
   }
}




ionViewDidEnter(){
  console.log('enter')
  this.isLoggedIn()
}


logout(){
  localStorage.clear()
  this.loggedIn = false;
}

 
}
