import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AnimeListComponent } from './anime-list/anime-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AnimeModule } from './anime/anime.module';

@NgModule({
  declarations: [AppComponent, AnimeListComponent, NavBarComponent],
  imports: [BrowserModule, AppRoutingModule, AnimeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
