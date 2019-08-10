import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ApiProvider } from '../providers/api/api';
import { Push } from '@ionic-native/push';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CategoryPage } from '../pages/category/category';
import { SearchPage } from '../pages/search/search';
import { SettingsPage } from '../pages/settings/settings';
import { Network } from '@ionic-native/network';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { NewsPage } from '../pages/news/news';
import { SavePage } from '../pages/save/save';
import { ProfilePage } from '../pages/profile/profile';


@NgModule({
  declarations: [
    MyApp,
    CategoryPage,
    SearchPage,
    SettingsPage,
    SavePage,
    HomePage,
    NewsPage,
    TabsPage,ProfilePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp, {
      platforms: {
        ios: {
          backButtonText: ''
        }
      }
    }
    )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    CategoryPage,
    SavePage,
    SettingsPage,
    HomePage,
    NewsPage,
    TabsPage,
    ProfilePage
  ],
  providers: [
    Push,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Network,
    ApiProvider
  ]
})
export class AppModule {}
