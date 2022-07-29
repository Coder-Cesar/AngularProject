import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeComponent } from './anime.component';
import { CharacterComponent } from '../character/character.component';

@NgModule({
  declarations: [AnimeComponent, CharacterComponent],
  imports: [CommonModule],
})
export class AnimeModule {}
