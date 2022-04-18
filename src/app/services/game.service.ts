import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Game, Games } from '../models/game';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private http: HttpClient) {}

  getGames(): Observable<Games> {
    return this.http.get<Games>(environment.BACKEND_HOST + 'games', {
      responseType: 'json',
    });
  }

  getGame(id: number): Observable<Game> {
    return this.http.get<Game>(environment.BACKEND_HOST + 'game/id/' + id, {
      responseType: 'json',
    });
  }

  addGame(game: Game): Observable<Object> {
    return this.http.post(environment.BACKEND_HOST + 'game', game, {
      responseType: 'json',
    });
  }

  updateGame(game: Game): Observable<Object> {
    return this.http.post(
      environment.BACKEND_HOST + 'game/id' + game.id,
      game,
      {
        responseType: 'json',
      }
    );
  }

  deleteGame(game: Game): Observable<Object> {
    return this.http.delete(environment.BACKEND_HOST + 'game/id/' + game.id, {
      responseType: 'json',
    });
  }
}
