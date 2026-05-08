export interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string;
  rating: number;
  director: string;
  cast: string[];
  synopsis: string;
  poster: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    rating: 8.7,
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    synopsis: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival as Earth becomes uninhabitable.",
    poster: "https://images.unsplash.com/photo-1534996858221-380b92700493?w=400&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi / Thriller",
    rating: 8.8,
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    synopsis: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action / Drama",
    rating: 9.0,
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    synopsis: "When the menace known as the Joker wreaks havoc on Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Avengers: Endgame",
    year: 2019,
    genre: "Action / Sci-Fi",
    rating: 8.4,
    director: "Anthony & Joe Russo",
    cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
    synopsis: "After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.",
    poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Parasite",
    year: 2019,
    genre: "Thriller / Drama",
    rating: 8.5,
    director: "Bong Joon-ho",
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
    synopsis: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Spider-Man: No Way Home",
    year: 2021,
    genre: "Action / Adventure",
    rating: 8.2,
    director: "Jon Watts",
    cast: ["Tom Holland", "Zendaya", "Benedict Cumberbatch"],
    synopsis: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds begin to appear.",
    poster: "https://images.unsplash.com/photo-1521714161819-15534968fc5f?w=400&h=600&fit=crop",
  },
];
