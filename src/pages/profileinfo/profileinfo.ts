import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-profileinfo',
  templateUrl: 'profileinfo.html',
})
export class ProfileinfoPage {

	profile = {
		email: '',
		avatar: 'https://assets.uffs.cafe/avatar/Default.jpg',//Default avatar
		username: '',
		firstName: '',
		lastName: '',
		bio: ''
	}

  constructor(private fireDatabase: AngularFireDatabase,
  	private fireAuth: AngularFireAuth,
  	public navCtrl: NavController, 
  	public navParams: NavParams) {
  }

  createProfile() {

  	this.fireAuth.authState.take(1).subscribe(auth => {

  		//Add the extra info of the profile into the database
  		//On folder profile/user.uid

  		this.profile.email = auth.email;

  		this.fireDatabase.object('profile/'+auth.uid).set(this.profile);

  		this.navCtrl.setRoot(TabsPage);

  	})
  }

}
