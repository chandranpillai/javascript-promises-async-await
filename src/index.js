import {fetchWithTimeout} from "./services";
var movies = require("./data/movies.json")

fetchMovies();
export function fetchMovies() {
    const resolveFunction = () => movies();
    fetchWithTimeout(1000)
    .then(resolveFunction);
 }
 
 const moviePromise = new Promise(function(results) {
    fetchMovies();
 
 moviePromise()
    .then(Promise.resolve(results))
    return;
    console.log(results)
 })