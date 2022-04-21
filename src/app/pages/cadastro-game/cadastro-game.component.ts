import { Game } from './../../models/game';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Categorias } from 'src/app/models/categoria';
import { GameService } from 'src/app/services/game.service';
import { FileService } from 'src/app/services/file.service';
import { ActivatedRoute } from '@angular/router';
import { Tag } from 'src/app/models/tag';

@Component({
  selector: 'app-cadastro-game',
  templateUrl: './cadastro-game.component.html',
  styleUrls: ['./cadastro-game.component.css'],
})
export class CadastroGameComponent implements OnInit {
  game: Game = {
    nome: '',
    url_acesso: '',
    url_video: '',
    descricao: '',
    imagem_ilustrativa:
      'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg',
    id_categoria: 0,
    tags: [],
  };

  tags: any = [];

  categorias: Categorias = [];

  constructor(
    private categoriaService: CategoriaService,
    private gameService: GameService,
    private fileService: FileService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCategorias();
    this.getGame();
  }

  getCategorias() {
    this.categoriaService
      .getCategorias()
      .subscribe((categorias) => (this.categorias = categorias));
  }

  addOrUpdateGame() {
    console.log(this.game);
    if(this.game.id == null){
      this.addGame();
    }else{
      this.updateGame();
    }
  }

  addGame() {
    this.game.tags = this.tags//this.tags.map((tag: string) => {return {nome: tag}})
    this.gameService
      .addGame(this.game)
      .subscribe();
  }

  updateGame(){
    this.game.tags = this.tags.map((tag: string) => {return {nome: tag}})
    this.gameService
      .updateGame(this.game)
      .subscribe();
  }

  getGame() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id != 0) {
      this.gameService.getGame(id).subscribe((game) => {
        this.game = game;
        this.tags = game.tags?.map((tag) => {return tag.nome})
      });
    }
  }

  myUploader(event: any) {
    //event.files == files to upload
    const formData = new FormData();
    formData.append('filetoupload', event.files[0]);

    this.fileService.addFile(formData).subscribe((response: any) => {
      console.log(response);
      this.game.imagem_ilustrativa = response.url;
    });
  }
}
