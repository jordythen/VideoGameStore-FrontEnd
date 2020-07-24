import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../classes/game';

@Component({
  selector: 'app-bootstrap-carousel',
  templateUrl: './bootstrap-carousel.component.html',
  styleUrls: ['./bootstrap-carousel.component.css']
})
export class BootstrapCarouselComponent implements OnInit {

  constructor() { }

  @Input() games: Game;

  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.games, 3);
  }

}
