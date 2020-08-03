import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InventoryService } from '../services/inventory.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-view-game',
  templateUrl: './view-game.component.html',
  styleUrls: ['./view-game.component.css']
})
export class ViewGameComponent implements OnInit {
  public displayLoader: Observable<boolean> = this.inventoryService.isLoading();
  gameID: number;
  constructor(private route: ActivatedRoute, private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.gameID = this.route.snapshot.params.gameID;
    // console.log('gameID: ' + this.gameID);
    this.inventoryService.retrieveGame(this.gameID).subscribe(
      resp => {
        this.inventoryService.loader.next(false);
        console.log(resp.body);
      }
    );
  }

}
