import { Game } from './../../models/game';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-game',
  templateUrl: './cadastro-game.component.html',
  styleUrls: ['./cadastro-game.component.css']
})
export class CadastroGameComponent implements OnInit {

  game: Game = {
    nome: '',
    url_acesso: '',
    url_video: '',
    descricao: '',
    imagem_ilustrativa: '',
    id_categoria: undefined,
    tags: []
  }

  constructor() { }

  ngOnInit(): void {
  }

}
