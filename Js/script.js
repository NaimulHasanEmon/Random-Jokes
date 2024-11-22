const jokes = async () => {
    const res = await fetch(
        "https://v2.jokeapi.dev/joke/Programming?type=single"
    );
    const data = await res.json();
    displayJokes(data);
};

const displayJokes = (joke) => {
    const container = document.getElementById("joke-container");
    container.textContent = ``
    const p = document.createElement("p");
    p.innerText = joke.joke;
    container.appendChild(p);
};

jokes()