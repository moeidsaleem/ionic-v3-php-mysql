import { ProfilePage } from './../profile/profile';
import { Component,ViewChild } from '@angular/core';
import { NavController,AlertController, IonicPage } from 'ionic-angular';
import { Http, Headers, RequestOptions } from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { ApiProvider } from '../../providers/api/api';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage  {

  @ViewChild("username") username
  @ViewChild("password") password;
  data: string;
  items: any;

  constructor(public navCtrl: NavController,private api:ApiProvider, public alertCtrl: AlertController,
    private http: Http, public loading: LoadingController) {
     

  }

 

  signUp() {
    this.navCtrl.push('RegisterPage');
  }

  signIn() {

    //// check to confirm the username and password fields are filled

    if (this.username.value == "") {

      let alert = this.alertCtrl.create({

        title: "ATTENTION",
        subTitle: "Username field is empty",
        buttons: ['OK']
      });

      alert.present();
    } else

    if (this.password.value == "") {

      let alert = this.alertCtrl.create({

        title: "ATTENTION",
        subTitle: "Password field is empty",
        buttons: ['OK']
      });

      alert.present();

    } else {

      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json');
      let options = new RequestOptions({
        headers: headers
      });

      let data = {
        username: this.username.value,
        password: this.password.value
      };
      console.log('d', data)
      let loader = this.loading.create({
        content: 'Processing please wait...',
      });

      loader.present().then(() => {

      this.api.login(data)
          .subscribe(res => {
            loader.dismiss()
            if (res == "Your Login success") {
              console.log('data', data)
              localStorage.setItem('user',JSON.stringify(data))
              let alert = this.alertCtrl.create({
                title: "CONGRATS",
                subTitle: (res),
                buttons: ['OK']
              });

              alert.present();
              this.navCtrl.push(ProfilePage, data);
            } else {
              let alert = this.alertCtrl.create({
                title: "ERROR",
                subTitle: "Your Login Username or Password is invalid",
                buttons: ['OK']
              });

              alert.present();
            }
          });
      });
    }

  }


  go(page){
    this.navCtrl.push(page)
  }
}
