import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ProfileinfoPage } from '../profileinfo/profileinfo';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

	user = {
		email: '',
		password: ''
	}

  constructor(private fireAuth: AngularFireAuth,
  	public navCtrl: NavController, 
  	public navParams: NavParams) {
  }

  async register() {
  	try{
  		const result = await this.fireAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password);
  		this.navCtrl.push(ProfileinfoPage);
  	}
  	catch(e){
  		console.error(e);
  	}
  }

}
