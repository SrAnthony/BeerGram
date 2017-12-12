import { Component } from '@angular/core';
import { BeerComponent } from '../beer/beer';

@Component({
  selector: 'user',
  templateUrl: 'user.html'
})
export class UserComponent {

  	static userDB = [];

  	static currentLogin = {
  		currentUser: new UserComponent('', '', ''),
  		isLogged: false
  	}

  	name: string;
	email: string;
	avatar: string;
	nickname: string;
	bio: string;
	beers: BeerComponent[];
	uid: string;

	constructor(name: string, email: string, photo: string) {
	  	this.name = name;
	  	this.email = email;
	  	this.avatar = photo;
	}

	addBeer(beer: BeerComponent) {
		this.beers.push(beer);
	}
}
