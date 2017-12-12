import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BeerComponent } from '../../components/beer/beer';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

export class ProfilePage {

	beers = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	this.beers.push("https://assets.uffs.cafe/beer/1.png");
  	this.beers.push("https://assets.uffs.cafe/beer/2.png");
  	this.beers.push("https://assets.uffs.cafe/beer/3.png");

  	this.beers.push("https://assets.uffs.cafe/beer/1.png");
  	this.beers.push("https://assets.uffs.cafe/beer/2.png");
  	this.beers.push("https://assets.uffs.cafe/beer/3.png");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
