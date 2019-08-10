import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { SavePage } from '../save/save';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  nightmode: boolean = true;
  user;

  constructor(public navCtrl: NavController,
    private app: ApiProvider,
    public navParams: NavParams) {
    this.nightmode = app.selectedTheme === 'dark-theme';
  }

  toggleAppTheme() {
    if (this.nightmode) {
      this.app.setActiveTheme('dark-theme');
    } else {
      this.app.setActiveTheme('light-theme');
    }
  }

  changeFont(pluse: boolean = true) {
    this.app.fontSize = pluse ? this.app.fontSize + 4 : this.app.fontSize - 4;
    this.app.updateSetting();
  }

  goSavedNews() {
    this.navCtrl.push(SavePage);
  }

  getUser(){
    if(localStorage.getItem('user') == null){
      return false
    }else{
      return true;
    }
  }
}
