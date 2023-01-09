import { fetchMovies } from "./services";
import { fetchBooks } from "./services";

 export function getBooksAndMovies() {
    Promise.all[fetchBooks(), fetchMovies()]
    .then(([books, movies ]) => ({
        books,
        movies
      }))
      .catch(error => console.log("Error fetching books and movies", error));
 }

 export function getBooksOrMovies() {
    Promise.race[fetchBooks(), fetchMovies()]
    .then(results => results)
    .catch(error => console.log("Error waiting for the promise race", error));
 }