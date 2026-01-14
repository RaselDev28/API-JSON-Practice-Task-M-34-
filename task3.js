function tellJoke() {
    console.log("Mahbub Matherboard");
}

const jokeInterval = setInterval(tellJoke, 2000);

// After 10 seconds stop telling joke
setTimeout(() => {
    clearInterval(jokeInterval);
}, 10000);

