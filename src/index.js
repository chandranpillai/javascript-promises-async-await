import { result } from "lodash";
import { fetchWithTimeout } from "./services";

fetchMovies();
export function fetchMovies() {
    let movies = require ("./data/movies.json")
    const resolveFunction = movies();
    fetchWithTimeout(1000)
    .then(resolveFunction);
 }
 
 const moviePromise = new Promise(function(results) {
    fetchMovies();
 
 moviePromise()
    .then(Promise.resolve(results))
    console.log(results)
 })