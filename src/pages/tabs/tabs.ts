import { ProfilePage } from './../profile/profile';
import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { CategoryPage } from '../category/category';
import { SearchPage } from '../search/search';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CategoryPage;
  tab3Root = SearchPage;
  tab4Root = ProfilePage;

  constructor() {}
}
