import {fetchWithTimeout} from "./services";
const movies = require("./data/movies.json")

export function fetchMovies() {

}
export function fetchMovies() {
    const resolveFunction = () => movies;        
    return fetchWithTimeout(1000)
        .then(resolveFunction);
 }
 
 const moviePromise = fetchMovies();
 moviePromise.the(results => {
    console.log(results);
 })
 