import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { Player } from '../player.model';


@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

  @Output() playerCreated = new EventEmitter<Player>();

  createPlayer( name : string , club : string ){
      console.log("here 1");
      this.playerCreated.emit( new Player(name,club) );
  }

  ngOnInit(){
    
  }

}
