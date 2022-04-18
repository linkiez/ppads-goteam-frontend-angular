import { Component, OnInit } from '@angular/core';
import { Game, Games } from 'src/app/models/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-lista-games',
  templateUrl: './lista-games.component.html',
  styleUrls: ['./lista-games.component.css'],
})
export class ListaGamesComponent implements OnInit {
  games: Games = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.getGames();
  }

  getGames() {
    this.gameService.getGames().subscribe(
      (games) => (this.games = games),
      (error) => console.log(error)
    );
  }

}
