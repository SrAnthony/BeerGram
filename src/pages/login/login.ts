import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserComponent } from '../../components/user/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	user = {
		email: '',
		password: ''
	}

  constructor(private fireAuth: AngularFireAuth,
  	public navCtrl: NavController, 
  	public navParams: NavParams) {
  }

  async login() {
  	try{
  		const result = await this.fireAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
  		if(result){
  			this.navCtrl.setRoot(TabsPage);
  		}
  	}
  	catch(e){
  		console.error(e);
  	}
  }

  register() {
  	this.navCtrl.push('RegisterPage');
  }


}
