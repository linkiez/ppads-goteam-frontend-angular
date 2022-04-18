import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListaGamesComponent } from './pages/lista-games/lista-games.component';
import { ListaGamesItemComponent } from './pages/lista-games/lista-games-items/lista-games-item.component';
import { CadastroGameComponent } from './pages/cadastro-game/cadastro-game.component';
import { HttpClientModule } from '@angular/common/http';
import { ChipsModule } from 'primeng/chips';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaGamesComponent,
    ListaGamesItemComponent,
    CadastroGameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChipsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
