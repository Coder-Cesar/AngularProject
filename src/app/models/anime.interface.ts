import { Character } from './character.interface';

export interface Anime {
  id: number;
  nombre: string;
  genero: string;
  foto: string;
  description: string;
  characters: Character[];
}
