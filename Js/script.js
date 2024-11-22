const arr = ['🤣', '😂', '😜', '😆', '😁']

const jokes = async () => {
    const res = await fetch("https://v2.jokeapi.dev/joke/Any");
    const data = await res.json();
    console.log(data)
    const type = data.type
    if (type === 'single') {
        displayJokeSingle(data);
    }
    else {
        displayJokesTwoParts(data);
    }
};

const displayJokeSingle = (joke) => {
    const container = document.getElementById("joke-container");
    container.textContent = ``
    const p = document.createElement("p");
    p.innerText = joke.joke + arr[parseInt(Math.random() * arr.length)];
    container.appendChild(p);
};

const displayJokesTwoParts = (joke) => {
    const container = document.getElementById("joke-container");
    container.textContent = ``
    const p = document.createElement("p");
    p.innerText = joke.setup + '...\n' + joke.delivery + arr[parseInt(Math.random() * arr.length)];
    container.appendChild(p);
};

jokes()