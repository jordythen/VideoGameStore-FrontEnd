import { Component, OnInit } from '@angular/core';
import { Game } from '../classes/game';
import { InventoryService } from '../services/inventory.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit {
  constructor(private inventoryService: InventoryService) { }

  game: Game;
  gameList: Game[];
  retrievedGames: Game[];
  doneLoading: Boolean;
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

    }
  ];
  public displayRegisterLoader: Observable<boolean> = this.inventoryService.isLoading();


  ngOnInit() {
    this.gameList = [];
    this.retrievedGames = [];
    this.doneLoading = false;
    this.inventoryService.retrieveAllGames().subscribe(
      (resp) => {
        this.inventoryService.loader.next(false);
        console.log(resp.body);
        this.doneLoading = true;

        for (const g of resp.body){
          let tempG = new Game();
          tempG.title = g.name;
          if (g.developers === null){
            tempG.credit = `Developed by unknown`;
          } else {
            tempG.credit = `Developed by ${g.developers[0].name}`;
          }
          tempG.releaseDate = `Released on ${this.cleanDate(g.dateReleased)}`;
          this.retrievedGames.push(tempG);
        }

        //this.pushIntoList(this.cards);
      }
    );
    //this.pushIntoList(this.cards);
  }

  cleanDate(date: string): string{
    const splitDate = date.split('-');
    const year = splitDate[0];
    const month = splitDate[1];
    const day = splitDate[2].slice(0, 2);
    console.log(year + " " + month + " " + day);
    return month + '-' + day + '-' + year;
  }

  pushIntoList(list) {
    for (const g of list) {
      let newGame: Game = new Game();
      newGame = g;
      this.gameList.push(newGame);
    }
  }
}
