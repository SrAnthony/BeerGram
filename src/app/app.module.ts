import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { ProfilePage } from '../pages/profile/profile';
import { ProfileinfoPage } from '../pages/profileinfo/profileinfo';
import { UploadPage } from '../pages/upload/upload';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//============= New Classes ===============
import { BeerComponent } from '../components/beer/beer';
import { PostComponent } from '../components/post/post';
import { UserComponent } from '../components/user/user';
//=========================================

import firebase from 'firebase';

export const config = {
    apiKey: "AIzaSyABva1ENZThkHHCoTtNvDzooTiAY_Zy7vI",
    authDomain: "beerhome-app.firebaseapp.com",
    databaseURL: "https://beerhome-app.firebaseio.com",
    projectId: "beerhome-app",
    storageBucket: "beerhome-app.appspot.com",
    messagingSenderId: "16379421570"
  };
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    UploadPage,
    HomePage,
    TabsPage,
    LoginPage,
    ProfileinfoPage,
    BeerComponent,
    PostComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    UploadPage,
    HomePage,
    LoginPage,
    ProfileinfoPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
