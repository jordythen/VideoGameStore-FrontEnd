import { Component, OnInit } from '@angular/core';
import { Game } from '../classes/game';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit {
  constructor() {}

  game: Game;
  gameList: Game[];
  cards = [
    {
      title: 'Card Title 1',
      description:
        'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
    },
    {
      title: 'Card Title 2',
      description:
        'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img:
        'https://mdbootstrap.com/img/Photos/Others/img (36).jpg',
    },
    {
      title: 'Card Title 3',
      description:
        'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img:
        'https://mdbootstrap.com/img/Photos/Others/img (34).jpg',
    },
    {
      title: 'Card Title 4',
      description:
        'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img:
        'https://mdbootstrap.com/img/Photos/Others/img (38).jpg',
    },
    {
      title: 'Card Title 5',
      description:
        'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img:
        'https://mdbootstrap.com/img/Photos/Others/img (29).jpg',
    },
    {
      title: 'Card Title 6',
      description:
        'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img:
        'https://mdbootstrap.com/img/Photos/Others/img (30).jpg',
    },
    {
      title: 'Card Title 7',
      description:
        'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img:
        'https://mdbootstrap.com/img/Photos/Others/img (27).jpg',
    },
    {
      title: 'Card Title 8',
      description:
        'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img:
        'https://mdbootstrap.com/img/Photos/Others/img (33).jpg',
    },
    {
      title: 'Card Title 9',
      description:
        'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
    },
    {
      title: 'Card Title 10',
      description:
        'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
    },
    {
      title: 'Card Title 11',
      description:
        'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
    },
    {
      title: 'Card Title 12',
      description:
        'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
    },
  ];
  
  ngOnInit() {
    this.gameList = [];
    this.pushIntoList();
  }

  pushIntoList() {
    for (const g of this.cards) {
      let newGame: Game = new Game();
      newGame = g;
      this.gameList.push(newGame);
    }
  }
}
