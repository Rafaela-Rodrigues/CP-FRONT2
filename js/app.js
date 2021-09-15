//Função para a criação de cards
let elements = 0
let urlImg = ""
let title = ""
let description = ""



function createCard() { //Funçao para criar cada card
    title = document.getElementById("title").value //"Pega" o título add no form
    description = document.getElementById("description").value //"Pega" a descrição add no form
    urlImg = document.getElementById("url_img").value //"Pega" a imagem add no form
    let div = document.createElement("div")
    div.classList.add("card")
    let cardSection = document.querySelector(".grid-container"); //"Junta" o Html com Js para add ao container de cards
    div.innerHTML = `
    <div class="cardurl">
      <div class="img">
        <img src="${urlImg}" alt="">
      </div>
    </div>
    <div class="texto">
      <div class="nome">
        <h1>${title}</h1>
      </div>
      <div class="descricao">
        <p>${description}</p>
      </div>
    </div>
  `
    cardSection.append(div)
    fechar()
    document.getElementById("title").value = "" //"Pega" o título add no form
    document.getElementById("description").value = "" //"Pega" a descrição add no form
    document.getElementById("url_img").value = "" //"Pega" a imagem add no form
}

function pop() { //mostra o form
    document.getElementById('pop').style.display = 'block';
}

function fechar() { //fecha o form
    document.getElementById('pop').style.display = 'none';
}