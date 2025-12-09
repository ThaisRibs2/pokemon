const btn = document.querySelector('#btn')
const res = document.querySelector('.res')

function garcon() {
    let random = Math.floor(Math.random() * 1025)

    fetch(`https://pokeapi.co/api/v2/pokemon/${random}/`)
        .then(res => res.json())
        .then(data => gerarPokemon(data))
}

function gerarPokemon(data) {
    let nome = data.name
    let id = data.id
    let tipo = data.types[0].type.name
    let imagem = data.sprites.other['official-artwork'].front_default

    res.innerHTML = `
        <div class="card">
            <img src="${imagem}" alt="${nome}">
            <div class="container">
                <div class="title">
                    <h1>${nome}</h1>
                    <p>N° ${id}</p>
                </div>
                <p class="${tipo}"</p>
            </div>
        </div>
    `
}
btn.addEventListener("click", garcon)
