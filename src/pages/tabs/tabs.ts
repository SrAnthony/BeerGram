import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { UploadPage } from '../upload/upload';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = UploadPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
