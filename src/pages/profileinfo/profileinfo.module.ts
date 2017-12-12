import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileinfoPage } from './profileinfo';

@NgModule({
  declarations: [
    ProfileinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileinfoPage),
  ],
})
export class ProfileinfoPageModule {}
