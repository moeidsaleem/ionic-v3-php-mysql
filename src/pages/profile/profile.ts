import { Component } from '@angular/core';
import {  NavController, NavParams, AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { ApiProvider } from '../../providers/api/api';
import { HomePage } from '../home/home';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  data: any;
  username: any;
  items: any;
  user:any
  constructor(private alertCtrl:AlertController,private api:ApiProvider,public navCtrl: NavController, public navParams: NavParams, private http: Http, public loading: LoadingController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    console.log('user', this.user)
    console.log('localstorage', localStorage.getItem('user'))
  }


  logout(){

    this.username = ''
    localStorage.clear();
    this.user = {}
  
   
      this.navCtrl.setRoot(HomePage).then(()=>{
      this.alertCtrl.create({
          title:"Logged Out!",
          buttons: ['OK']
          }).present()
      })
     

      console.log('logging user out')

  }

  go(page){
    this.navCtrl.push(page)
  }
  ngOnInit() {
    let user = JSON.parse(localStorage.getItem('user'))


    if(user){
      //means that user exist in storage.

   // this.username = this.navParams.get('username');
     console.log('localStorage-user', user)
    this.username = user.username;

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({
      headers: headers
    });

    let data = {
      username: this.username

    };

    let loader = this.loading.create({
      content: 'Processing please wait...',
    });

    loader.present().then(() => {
        this.api.fetchProfile(data)
        .subscribe(res => {
          console.log('res',res)
          this.user = data;
          loader.dismiss()
          this.items = res.server_response;
        });
    });
  }else{

  }
}
}
