const url = 'https://dog.ceo/api/breed/husky/images/random';

const fotoCachorro = document.getElementById ('fotoCachorro')
 
const btnNovaFoto = document.getElementById ('btnNovaFoto')

async function buscarFoto() {
    const resposta = await fetch (url);
    const dados = await resposta.json()
    console.log (dados)
    fotoCachorro.src = dados.message;
}

btnNovaFoto.addEventListener ('click', buscarFoto);

buscarFoto(); 