import { Component } from '@angular/core';
import { BeerComponent } from '../beer/beer';
import { UserComponent } from '../user/user';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'post',
  templateUrl: 'post.html'
})
export class PostComponent {
	//@Input() obj;

	user: string;
	beerImg: string;

	desc: string;
	likes: number = 0;
	comments: number = 0;

	constructor(user: string, beerImg: string, desc: string) {
	    console.log('Creating new post...');
	    this.user = user;
	    this.beerImg = beerImg
	    this.desc = desc;
	}
}
