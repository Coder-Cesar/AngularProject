import { Injectable } from '@angular/core';
import { Anime } from '../models/anime.interface';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  private animes: Anime[] = [
    {
      id: 1,
      nombre: 'Naruto',
      genero: 'Shonen',
      foto: 'https://images-na.ssl-images-amazon.com/images/I/81vtHhR9QkL._RI_.jpg',
      description:
        'Naruto (ナルト?), romanizada como NARUTO, es una serie animada de origen japonés basada en el manga del mismo nombre, escrito e ilustrado por Masashi Kishimoto. La obra narra la historia de un ninja huérfano adolescente llamado Naruto Uzumaki, cuyos padres murieron en el ataque del Zorro Demonio de Nueve Colas, y quien aspira a convertirse en Hokage (líder de su aldea) con el propósito de ser reconocido como alguien importante dentro de la aldea y entre sus compañeros.',
      characters: [
        {
          id: 1,
          nombre: 'Itachi Uchiha',
          edad: 9,
          foto: 'https://i.pinimg.com/564x/09/79/62/09796291dbdd6be269d5c1c44eaeaaf5.jpg',
        },
        {
          id: 2,
          nombre: 'Hashirama Senju',
          edad: 13,
          foto: 'https://i.pinimg.com/564x/80/32/ec/8032ec4abc142c68338af07ea94313f2.jpg',
        },
        {
          id: 3,
          nombre: 'Madara Uchiha',
          edad: 13,
          foto: 'https://i.pinimg.com/564x/59/e9/39/59e9394fad35d215f3b2c9559361b036.jpg',
        },
        {
          id: 4,
          nombre: 'Naruto Uzumaki',
          edad: 5,
          foto: 'https://i.pinimg.com/564x/7e/5c/7a/7e5c7a6640d4ca2cd8b29aa6f8c0c2c9.jpg',
        },
        {
          id: 5,
          nombre: 'Sasuke Uchiha',
          edad: 7,
          foto: 'https://i.pinimg.com/564x/58/47/19/58471981c1b8caa7d02ee6dc767c0d06.jpg',
        },
        {
          id: 6,
          nombre: 'Minato Namikaze',
          edad: 8,
          foto: 'http://pm1.narvii.com/6585/8e26aa6d33c9cf3444c63688579dc37711270ec5_00.jpg',
        },
        {
          id: 7,
          nombre: 'Obito Uchiha',
          edad: 9,
          foto: 'https://i.pinimg.com/564x/7e/bf/8d/7ebf8d9bd6619329535a89ca8b0d2c1f.jpg',
        },
        {
          id: 8,
          nombre: 'Shikamaru Nara',
          edad: 7,
          foto: 'https://i.pinimg.com/564x/bf/64/c5/bf64c572f0f6c5f11db8c6611c4a2775.jpg',
        },
        {
          id: 9,
          nombre: 'Jiraya',
          edad: 14,
          foto: 'https://img.wattpad.com/18644b8e68b59567958ef89658749b9cd4e97988/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f69624f34594a52563744433442773d3d2d3331383039383733382e313437396534366664323337376262373634343235333232373239322e6a7067?s=fit&w=720&h=720',
        },
        {
          id: 10,
          nombre: 'Kakashi Hatake',
          edad: 8,
          foto: 'https://i.pinimg.com/564x/6c/d4/25/6cd4257a6f999c044d0e2923e61673bf.jpg',
        },
      ],
    },
    {
      id: 2,
      nombre: 'Hunter x Hunter',
      genero: 'Shonen',
      foto: 'https://media.vandalsports.com/master/5-2022/2022524153313_1.jpg',
      description:
        'Hunter x Hunter (ハンターハンター Hantā Hantā?) es una serie de manga escrita e ilustrada por Yoshihiro Togashi. La historia tiene como protagonista a Gon Freecss, un niño de doce años que desea encontrar a su padre a toda costa, por lo que decide convertirse en «cazador», justo como él, y de alguna forma hallar su paradero. A medida que avanza la historia, Gon se hace amigo de otros tres aspirantes a cazador: Leorio, Kurapika y Killua, quienes lo acompañarán en sus aventuras a lo largo del anime.',
      characters: [
        {
          id: 1,
          nombre: 'Gon Freecss',
          edad: 12,
          foto: 'http://pm1.narvii.com/6265/d911443cd182e8a06bc683f2de156a544ce5df6a_00.jpg',
        },
        {
          id: 2,
          nombre: 'Killua Zoldyck',
          edad: 12,
          foto: 'https://i.pinimg.com/originals/7f/fd/96/7ffd961b1cfdfb577430550318af186f.jpg',
        },
        {
          id: 3,
          nombre: 'Kuroro Lucifer',
          edad: 20,
          foto: 'https://i.pinimg.com/564x/85/02/bd/8502bdbf5505fdb231c0a48d71ac0864.jpg',
        },
        {
          id: 4,
          nombre: 'Illumi Zoldyck',
          edad: 20,
          foto: 'https://i.pinimg.com/564x/36/15/c8/3615c89de601a9580c7fe70d409144e5.jpg',
        },
        {
          id: 5,
          nombre: 'Hisoka Morow',
          edad: 20,
          foto: 'https://i.pinimg.com/564x/71/e1/d8/71e1d86b77eb6639568303167616749c.jpg',
        },
        {
          id: 6,
          nombre: 'Kurapika Kurta',
          edad: 18,
          foto: 'https://i.pinimg.com/564x/ab/b8/f2/abb8f2e6b65f00e569967d2c6fd9d8c6.jpg',
        },
        {
          id: 7,
          nombre: 'Isaac Netero',
          edad: 90,
          foto: 'https://i.pinimg.com/564x/af/97/b4/af97b459460956d04241769efdc5f1cd.jpg',
        },
        {
          id: 8,
          nombre: 'Meruem',
          edad: 1,
          foto: 'https://i.pinimg.com/564x/da/27/9c/da279ca2d3ff6f4028ac6dcb8405abf6.jpg',
        },
      ],
    },
    {
      id: 3,
      nombre: 'Tensei Shitara Suraimu Datta Ken',
      genero: 'Isekai',
      foto: 'https://filmfilicos.com/wp-content/uploads/2018/10/portada-1.png',
      description:
        'Tensei Shitara Slime Datta Ken (転生したらスライムだった件 Tensei Shitara Suraimu Datta Ken?), también conocida en inglés como That Time I Got Reincarnated as a Slime, abreviada como TenSura (転スラ?)3​ o Aquella vez que me convertí en Slime en español,4​ es una serie de novelas ligeras escritas por Fuse e ilustradas por Mitz Vah. La serie relata la historia de Satoru Mikami, un asalariado de 37 años que es asesinado tras ser apuñalado por un ladrón y se reencarna en un mundo de espadas y magia como un Slime con poderes únicos y reúne aliados para construir su propia nación de monstruos.',
      characters: [
        {
          id: 1,
          nombre: 'Rimuru Tempest',
          edad: 16,
          foto: 'https://somoskudasai.com/wp-content/uploads/2020/10/portada_tensei-shitara-slime-datta-ken-15.jpg',
        },
        {
          id: 2,
          nombre: 'Benimaru Tempest',
          edad: 20,
          foto: 'https://i.pinimg.com/originals/58/a4/92/58a4922b9e0e08f49e51d61e5425fb5e.jpg',
        },
        {
          id: 3,
          nombre: 'Veldora Tempest',
          edad: 300,
          foto: 'https://i.pinimg.com/564x/a0/33/ef/a033efcf143a535b3294ad9584a72a71.jpg',
        },
        {
          id: 4,
          nombre: 'Ranga',
          edad: 10,
          foto: 'https://i.pinimg.com/564x/00/b6/39/00b6392edec90517d5fa8decfff05453.jpg',
        },
        {
          id: 5,
          nombre: 'Gobuta',
          edad: 16,
          foto: 'https://i.pinimg.com/564x/7a/75/da/7a75dab09d3fff96e19ba1c95b96fad4.jpg',
        },
        {
          id: 6,
          nombre: 'Shizue Izawa',
          edad: 20,
          foto: 'https://i.pinimg.com/564x/98/1e/8e/981e8e665fef40b32f41113d68e93897.jpg',
        },
      ],
    },
    {
      id: 4,
      nombre: 'Jujutsu Kaisen',
      genero: 'Shonen',
      foto: 'https://as01.epimg.net/meristation/imagenes/2022/05/26/noticias/1653557269_040579_1653557380_noticia_normal.jpg',
      description:
        'Jujutsu Kaisen (呪術廻戦 lit. Guerra de magia?), también conocida como Jujutsu Kaisen: Guerra de hechiceros en España, es una serie de manga japonés escrita e ilustrada por Gege Akutami. Shūeisha publica sus capítulos en la revista Shūkan Shōnen Jump desde el 5 de marzo de 2018 y los ha recopilado y publicado en diecinueve volúmenes tankōbon a finales de 2022. La historia gira en torno al estudiante Yūji Itadori, quien se une a una organización secreta de hechiceros para matar a una poderosa maldición llamada Ryōmen Sukuna tras convertirse en su anfitrión.',
      characters: [
        {
          id: 1,
          nombre: 'Saturo Gojo',
          edad: 22,
          foto: 'https://i.pinimg.com/564x/c7/c8/2a/c7c82a97b6c8bdd3b8f568794c1dc4f5.jpg',
        },
        {
          id: 2,
          nombre: 'Yuuji Itadori',
          edad: 18,
          foto: 'https://i.pinimg.com/564x/48/10/9c/48109cf767722e423ce1fa8aa95a8300.jpg',
        },
        {
          id: 3,
          nombre: 'Megumi Fushiguro',
          edad: 19,
          foto: 'https://i.pinimg.com/564x/76/28/b2/7628b2cae155beb5445a00e13bbbcc6b.jpg',
        },
        {
          id: 4,
          nombre: 'Maki Zenin',
          edad: 18,
          foto: 'https://i.pinimg.com/564x/9e/e5/65/9ee5653b66127f7a3a8f1927d800f5bc.jpg',
        },
        {
          id: 5,
          nombre: 'Toge Inumaki',
          edad: 18,
          foto: 'https://i.pinimg.com/564x/e3/f1/95/e3f195094cf7f5b26d003fcff94b5eee.jpg',
        },
        {
          id: 6,
          nombre: 'Yuta Okkotsu',
          edad: 17,
          foto: 'https://i.pinimg.com/564x/84/fd/c9/84fdc97ce530a67a84d1724280478a2c.jpg',
        },
        {
          id: 6,
          nombre: 'Kento Nanami',
          edad: 22,
          foto: 'https://i.pinimg.com/564x/01/11/53/011153d1cc99a9f4c45feb71fa18a38b.jpg',
        },
      ],
    },
  ];
  constructor() {}
  ListaAnimes(): Anime[] {
    return this.animes;
  }
  InsertarUno(anime: Anime) {
    this.animes.push(anime);
  }
  ObetenerUno(id: number): Anime {
    return <Anime>this.animes.find((el) => el.id === id);
  }
}
