export interface IMovie{
    title: string;
    rating: number;
    genre: string;
    image: string;
    description: string;
}

export const movies: IMovie[] = [];

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