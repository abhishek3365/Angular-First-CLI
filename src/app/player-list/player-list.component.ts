import { Component, OnInit } from '@angular/core';

import { Player } from '../player.model';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players : Object[];

  constructor(){
      this.players = [
        new Player("Lionel Messi","FC Barcelona"),
        new Player("Cristiano Ronaldo","Real Madrid"),
        new Player("Kevin De Bruyne","Manchester City")
      ];
  }

  addPlayer(player) {
    console.log("here 2");
    this.players.unshift(player);
  }

  ngOnInit() {
  }

}
