import { Component } from '@angular/core';
import { ModalController, NavParams, NavController, AlertController, LoadingController } from 'ionic-angular';
import { PostComponent } from '../../components/post/post';
import { UserComponent } from '../../components/user/user';
import { LoginPage } from '../login/login';

import firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	posts = [];
  user: any;

  constructor(private fire: AngularFireAuth,
    public navCtrl: NavController, 
    public modalCtrl: ModalController, 
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController){


    this.fire.authState.subscribe(data => {
      this.user = data;
    })
    
  }

  newLike(post: PostComponent) {
    if(UserComponent.currentLogin.isLogged)
  	  post.likes++;
  }

  newComment(post: PostComponent) {
    if(UserComponent.currentLogin.isLogged)
  	  post.comments++;   
  }

  logout() {
    //====== TEST ONLY =======
    /*this.fire.auth.currentUser.delete();
    UserComponent.userDB.pop();
    UserComponent.currentLogin.currentUser = new UserComponent('', '', '', '');*/
    //========================

    this.fire.auth.signOut();

    this.navCtrl.setRoot(LoginPage);
  }

  showAlert(title: string, msg: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      //buttons: ['OK']
    });
    alert.present();
  }

}