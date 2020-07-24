import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit {
  constructor() {}
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
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.cards, 3);
  }
}
