export const spidermanFilms = [
  {
    "id": "spdrmnflm1",
    "title": "Spider-Man",
    "file": "SpiderMan1",
    "franchise": "raimi",
    "img": "https://upload.wikimedia.org/wikipedia/en/6/6c/Spider-Man_%282002_film%29_poster.jpg",
    "route": "/spiderman_films/spider_man"
  },
  {
    "id": "spdrmnflm2",
    "title": "Spider-Man 2",
    "file": "SpiderMan2",
    "franchise": "raimi",
    "img": "https://upload.wikimedia.org/wikipedia/en/4/4e/Spider-Man_2_poster.jpg",
    "route": "/spiderman_films/spider_man_2"
  },
  {
    "id": "spdrmnflm3",
    "title": "Spider-Man 3",
    "file": "SpiderMan3",
    "franchise": "raimi",
    "img": "https://upload.wikimedia.org/wikipedia/en/7/7a/Spider-Man_3%2C_International_Poster.jpg",
    "route": "/spiderman_films/spider_man_3"
  },
  {
    "id": "spdrmnflm4",
    "title": "The Amazing Spider-Man",
    "file": "TheAmazingSpiderMan1",
    "franchise": "webb",
    "img": "https://upload.wikimedia.org/wikipedia/en/e/e0/The_Amazing_Spider-Man_%28film%29_poster.jpg",
    "route": "/spiderman_films/the_amazing_spider_man"
  },
  {
    "id": "spdrmnflm5",
    "title": "The Amazing Spider-Man 2",
    "file": "TheAmazingSpiderMan2",
    "franchise": "webb",
    "img": "https://upload.wikimedia.org/wikipedia/en/2/24/The_Amazing_Spider-Man_2_poster.jpg",
    "route": "/spiderman_films/the_amazing_spider_man_2"
  },
  {
    "id": "spdrmnflm6",
    "title": "Spider-Man: Into the Spider-Verse",
    "file": "IntoTheSpiderverse",
    "franchise": "verse",
    "img": "https://upload.wikimedia.org/wikipedia/en/f/fa/Spider-Man_Into_the_Spider-Verse_poster.png",
    "route": "/spiderman_films/into_the_spiderverse"
  },
  {
    "id": "spdrmnflm7",
    "title": "Spider-Man: Across the Spider-Verse",
    "file": "AcrossTheSpiderverse",
    "franchise": "verse",
    "img": "https://upload.wikimedia.org/wikipedia/en/b/b4/Spider-Man-_Across_the_Spider-Verse_poster.jpg",
    "route": "/spiderman_films/across_the_spider_verse"
  },
  {
    "id": "spdrmnflm9",
    "title": "Venom",
    "file": "Venom1",
    "franchise": "ssu",
    "img": "https://upload.wikimedia.org/wikipedia/en/1/10/Venom_%282018_film%29_poster.png",
    "route": "/spiderman_films/venom"
  },
  {
    "id": "spdrmnflm10",
    "title": "Venom: Let There Be Carnage",
    "file": "Venom2",
    "franchise": "ssu",
    "img": "https://upload.wikimedia.org/wikipedia/en/a/a7/Venom_Let_There_Be_Carnage_poster.jpg",
    "route": "/spiderman_films/venom_let_there_be_carnage"
  },
  {
    "id": "spdrmnflm11",
    "title": "Venom: The Last Dance",
    "file": "Venom3",
    "franchise": "ssu",
    "img": "https://upload.wikimedia.org/wikipedia/en/a/a3/Venom_The_Last_Dance_Poster.jpg",
    "route": "/spiderman_films/venom_the_last_dance"
  },
  {
    "id": "spdrmnflm12",
    "title": "Morbius",
    "file": "MorbiusFilm",
    "franchise": "ssu",
    "img": "https://upload.wikimedia.org/wikipedia/en/2/2f/Morbius_%28film%29_poster.jpg",
    "route": "/spiderman_films/morbius"
  },
  {
    "id": "spdrmnflm13",
    "title": "Madame Web",
    "file": "MadameWebFilm",
    "franchise": "ssu",
    "img": "https://upload.wikimedia.org/wikipedia/en/f/f0/Madame_Web_%28film%29_poster.jpg",
    "route": "/spiderman_films/madame_web"
  },
  {
    "id": "spdrmnflm14",
    "title": "Kraven the Hunter",
    "file": "KravenFilm",
    "franchise": "ssu",
    "img": "https://upload.wikimedia.org/wikipedia/en/e/ec/Kraven_the_Hunter_%28film%29_poster.jpg",
    "route": "/spiderman_films/kraven_the_hunter"
  }
]

export const raimiFilms = spiderManFilms.filter((ra) => ra.franchise == "raimi");
export const webbFilms = spiderManFilms.filter((we) => we.franchise == "webb");
export const spiderverseFilms = spiderManFilms.filter((verse) => verse.franchise == "verse")
export const ssuFilms = spiderManFilms.filter((ssu) => ssu.franchise == "ssu")