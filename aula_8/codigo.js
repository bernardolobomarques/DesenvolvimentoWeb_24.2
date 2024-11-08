const url = "https://botafogo-atletas.mange.li/2024-1/"

const container = document.getElementById("container");

const manipulaCLick = (e) => {
    const id = e.currentTarget.dataset.id;

    const url = `atleta.html?id=${id}`;

    // cookie
    document.cookie = `id=${id}`;
    document.cookie = `nJogos=${e.currentTarget.dataset.nJogos}`;

    // Local Storage
    localStorage.setItem('id', id);
    localStorage.setItem('dados', JSON.stringify(e.currentTarget.dataset));

    //Session Storage
    sessionStorage.setItem('id', id);
    sessionStorage.setItem('dados', JSON.stringify(e.currentTarget.dataset));

    window.location.href = url; 

    console.log(e.currentTarget);
}


const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}

const montaCard = (atleta) => {
    const cartao = document.createElement("article");
    const nome = document.createElement("h1");
    const imagem = document.createElement("img");
    const descricao = document.createElement("p");
    // const link = document.createElement("a");
    
    nome.innerText = atleta.nome;
    nome.style.fontFamily= 'sains-serif';
    cartao.appendChild(nome);
    
    imagem.src = atleta.imagem;
    cartao.appendChild(imagem);
    
    descricao.innerHTML = atleta.detalhes;
    cartao.appendChild(descricao);

    // link.innerText = "Ver Mais";
    // link.href = `atleta.html?id=${atleta.id}`;
    // cartao.appendChild(link)

    cartao.dataset.id = atleta.id;
    cartao.dataset.nJogos = atleta.n_jogos;
    
    cartao.onclick = manipulaCLick;
    
    return cartao;
}

pega_json(`${url}feminino`).then(
    (r) => {
        r.forEach(
            (ele) => container.appendChild(montaCard(ele))
        )       
    } 
);

// pega_json(`${url}26`).then(
//     (r) => console.log(r)
// )

const manipulaBotao = () => {
    const texto = document.getElementById("senha").value;
    if (hex_md5(texto) === "5029cc9dd0295ded2f500084635c18c1") {
        sessionStorage.setItem('logado', true);
    } else {
        alert("Senha incorreta");
    }
}

document.getElementById("botao").onclick = manipulaBotao;

document.getElementById("logout").onclick = () => {
    sessionStorage.removeItem('logado');
}