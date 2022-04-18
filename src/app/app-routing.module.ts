import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroGameComponent } from './pages/cadastro-game/cadastro-game.component';
import { ListaGamesComponent } from './pages/lista-games/lista-games.component';

const routes: Routes = [
  { path: 'listagames', component: ListaGamesComponent },
  { path: 'cadastro/game', component: CadastroGameComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
