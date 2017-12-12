import { Component } from '@angular/core';

@Component({
  selector: 'beer',
  templateUrl: 'beer.html'
})

export class BeerComponent {
	//@Input() obj;

	name: string;
	abv: number;
	rate: number;
	price: number;
	//=========
	static count: number = 0;
	id: number;
	//=========

	constructor(name: string, img: string, abv: number, rate: number, price: number){
		this.name = name;
		this.abv = abv;
		this.rate = rate;
		this.price = price;
		this.id = BeerComponent.count++;
	}
}
