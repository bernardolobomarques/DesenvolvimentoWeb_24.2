
/* 
Elenco x

imagem x
n jogos x
nome x
posicao
naturalidade
nascimento
altura
no time desde x
detalhes
*/

const params = new URLSearchParams(window.location.search)

const id = params.get("id");

const container = document.getElementById("container");

const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}


const montaPagina = (dados) => {
    const body = document.body;
    body.innerHTML = '';
    
    const nome = document.createElement('h1');
    nome.innerHTML = dados.nome;
    body.appendChild(nome);

    const imagem = document.createElement('img');
    imagem.alt = 'imagem do atleta';
    imagem.src = dados.imagem;
    body.appendChild(imagem);

    const nJogos = document.createElement('p');
    nJogos.innerText = dados.n_jogos;
    body.appendChild(nJogos);

    const elenco = document.createElement('p');
    elenco.innerText = dados.elenco;
    body.appendChild(elenco);

    const noTimeDesde = document.createElement('p');
    noTimeDesde.innerText = dados.no_botafogo_desde;
    body.appendChild(noTimeDesde);

    const posicao = document.createElement('p');
    posicao.innerText = dados.posicao;
    body.appendChild(posicao);
}

pega_json(`https://botafogo-atletas.mange.li/2024-1/${id}`).then(
    (r) => montaPagina(r)
);

