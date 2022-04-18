import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game, Games } from 'src/app/models/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-lista-games-item',
  templateUrl: './lista-games-item.component.html',
  styleUrls: ['./lista-games-item.component.css']
})
export class ListaGamesItemComponent implements OnInit {

  @Input() game: Game = {};
  @Input() games: Games = [];
  tags: any = []

  constructor(private gameService: GameService, private router: Router) { }

  ngOnInit(): void {
    this.tags = this.game.tags!.map(tag => {
      return tag.nome;
    })
  }

  apagarGame(){
    console.log("apagarGame");
    this.gameService.deleteGame(this.game).subscribe();
    window.location.reload();
  }

}
