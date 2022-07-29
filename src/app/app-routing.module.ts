import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AnimeComponent } from './anime/anime.component';

const routes: Routes = [
  { path: '', component: AnimeListComponent },
  { path: 'anime/:id', component: AnimeComponent }, //anime/1
  { path: 'anime', component: AnimeComponent }, //anime?id=1
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
