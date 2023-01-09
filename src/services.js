fetchWithTimeout();
let delay;
function fetchWithTimeout(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}