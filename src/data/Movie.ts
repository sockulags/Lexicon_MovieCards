export interface IMovie{
    title: string;
    rating: number;
    genre: string;
    image: string;
    description: string;
}

export const movies: IMovie[] = [
    {
        "title": "Godzilla Minus One",
        "rating": 3,
        "genre": "Science Fiction",
        "image": "https://www.movieposters.com/cdn/shop/files/Godzilla_Minus_One_Final_480x.progressive.jpg",
        "description": "Post war Japan is at its lowest point when a new crisis emerges in the form of a giant monster, baptized in the horrific power of the atomic bomb."
      },
      {
        "title": "Harry Potter And The Prisoner Of Azkaban",
        "rating": 5,
        "genre": "Fantasy",
        "image": "https://www.movieposters.com/cdn/shop/files/harry-potter-and-the-prisoner-of-azkaban_11ace17d_480x.progressive.jpg?v=1703177650",
        "description": "Harry Potter, Ron and Hermione return to Hogwarts School of Witchcraft and Wizardry for their third year of study, where they delve into the mystery surrounding an escaped prisoner who poses a dangerous threat to the young wizard."
      },
      {
        "title": "Harry Potter And The Order Of The Phoenix",
        "rating": 5,
        "genre": "Fantasy",
        "image": "https://www.movieposters.com/cdn/shop/files/05ea4a8650ede74576c6906f4fa39a8f_c07e31bd-37f3-454e-83db-de6cf9f0d341_480x.progressive.jpg?v=1707245508",
        "description": "With their warning about Lord Voldemort's return scoffed at, Harry and Dumbledore are targeted by the Wizard authorities as an authoritarian bureaucrat slowly seizes power at Hogwarts."
      },
      {
        "title": "Harry Potter and the Half-Blood Prince",
        "rating": 4,
        "genre": "Fantasy",
        "image": "https://www.movieposters.com/cdn/shop/files/06a54ad09113a5d967fb2b05bf1831b6_33125e35-3fb5-40b2-a117-01741507e5f9_480x.progressive.jpg?v=1707245138",
        "description": "As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as \"the property of the Half-Blood Prince\" and begins to learn more about Lord Voldemort's dark past."
      },
      {
        "title": "Harry Potter and the Deathly Hallows: Part One",
        "rating": 5,
        "genre": "Fantasy",
        "image": "https://www.movieposters.com/cdn/shop/files/9c0a783505db76a3e8f709112839fb87_e9044fcb-0df0-4fbf-8f24-aa43972460e1_480x.progressive.jpg?",
        "description": "As Harry, Ron and Hermione race against time and evil to destroy the Horcruxes, they uncover the existence of the three most powerful objects in the wizarding world: the Deathly Hallows."
      },
      {
        "title": "Harry Potter And The Chamber Of Secrets",
        "rating": 5,
        "genre": "Fantasy",
        "image": "https://www.movieposters.com/cdn/shop/products/harry_potter_480x.progressive.jpg?v=1672331659",
        "description": "An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic and leaving its victims paralyzed."
      },
      {
        "title": "Harry Potter and the Deathly Hallows: Part Two",
        "rating": 5,
        "genre": "Fantasy",
        "image": "https://www.movieposters.com/cdn/shop/products/4b63e9c6931fbf08e8643169a98eac96_fe54a260-abcd-47dd-93b2-c83995703839_480x.progressive.jpg?v=1573654934",
        "description": "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts."
      },
      {
        "title": "Harry Potter And The Chamber Of Secrets",
        "rating": 5,
        "genre": "Fantasy",
        "image": "https://www.movieposters.com/cdn/shop/products/b8565135cff2d5c4ee2485089baa132b_1c67af90-86b3-4e02-8557-73a0c26dc041_480x.progressive.jpg?v=1573591458",
        "description": "An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic and leaving its victims paralyzed."
      },
      {
        "title": "Harry Potter And The Goblet Of Fire",
        "rating": 4,
        "genre": "Fantasy",
        "image": "https://www.movieposters.com/cdn/shop/products/718098_2675809_480x.progressive.jpg?v=1658756195",
        "description": "Harry Potter finds himself competing in a hazardous tournament between rival schools of magic, but he is distracted by recurring nightmares."
      },
      {
        "title": "The Godfather",
        "rating": 5,
        "genre": "Crime",
        "image": "https://www.movieposters.com/cdn/shop/products/b5282f72126e4919911509e034a61f66_6ce2486d-e0da-4b7a-9148-722cdde610b8_480x.progressive.jpg?v=1573616025",
        "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
      },
];

export const genres: string[] = [
    "Action",
    "Adventure",
    "Animated",
    "Biography",
    "Comedy",
    "Crime",
    "Dance",
    "Disaster",
    "Documentary",
    "Drama",
    "Erotic",
    "Family",
    "Fantasy",
    "Found Footage",
    "Historical",
    "Horror",
    "Independent",
    "Legal",
    "Live Action",
    "Martial Arts",
    "Musical",
    "Mystery",
    "Noir",
    "Performance",
    "Political",
    "Romance",
    "Satire",
    "Science Fiction",
    "Short",
    "Silent",
    "Slasher",
    "Sports",
    "Spy",
    "Superhero",
    "Supernatural",
    "Suspense",
    "Teen",
    "Thriller",
    "War",
    "Western"
]