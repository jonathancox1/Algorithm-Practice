const fetch = require('node-fetch')

// linear or O(n)
function beer() {
    for (let i = 99; i > 0; i--) {
        let beer = 'beer';
        if (i % 7 === 0 && i % 5 === 0) {
            beer = 'Miller Light';
        } else if (i % 7 === 0) {
            beer = 'Miller';
        } else if (i % 5 === 0) {
            beer = 'Light';
        }
        let text = `${i} bottles of beer on the wall, take one down pass it around ${i - 1} of ${beer} on the wall`
        console.log(text)
    }
}

beer();








// works well
async function getData() {
    return await (await fetch('https://swapi.dev/api/people/')).json();
}
getData()
    .then(data => {
        data.results.map(item => console.log(`I am ${item.name} and Im from ${item.homeworld}`))
    })








async function getData() {
    return await (await fetch('https://swapi.dev/api/people/')).json();
}
getData()
    .then(data => {
        data.results.map(item => {
            fetch(item.homeworld)
                .then(res => res.json())
                .then(data => {
                    console.log(`I am ${item.name} and I'm from ${data.name}`)
                })
        })
    })

