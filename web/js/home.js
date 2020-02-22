let carrouselItems = document.querySelector("#corrossel-bonecos .carousel-inner");
let producs = document.querySelector("#producs");

let first = true;

const addItemsCarousel = (img, link, altImg) => {
    let divEl = document.createElement("div");
    let linkEl = document.createElement("a");
    let imgEl = document.createElement("img");
    linkEl.setAttribute("href", link);
    if(first){
        divEl.setAttribute("class", "carousel-item active");
        first = false;
    }
    else
        divEl.setAttribute("class", "carousel-item activ");
    imgEl.setAttribute("src", img);
    imgEl.setAttribute("class", "d-block w-100");
    imgEl.setAttribute("alt", altImg);
    divEl.appendChild(linkEl);
    linkEl.appendChild(imgEl);
    carrouselItems.appendChild(divEl);
}

const addProducts = (img, altImg, title, desc, price) => {
    let divEl = document.createElement("div");
    let divCardEl = document.createElement("div");
    let imgItemEl = document.createElement("img");
    let divBodyEl = document.createElement("div");
    let h5TitleEl = document.createElement("h5");
    let pDescEl = document.createElement("p");
    let divCartEl = document.createElement("div");
    let divPriceEl = document.createElement("div");
    let h6PriceEl = document.createElement("h6");
    let divAddCartEl = document.createElement("div");
    let imgAddCartEl = document.createElement("img");
    divEl.setAttribute("class", "col-md-3 p-1");
    divCardEl.setAttribute("class", "card col-12");
    imgItemEl.setAttribute("src", img);
    imgItemEl.setAttribute("alt", altImg);
    imgItemEl.setAttribute("class", "card-img-top mt-2");
    divBodyEl.setAttribute("class", "card-body");
    h5TitleEl.setAttribute("class", "card-title");
    h5TitleEl.innerHTML = title;
    pDescEl.setAttribute("class", "card-text");
    pDescEl.innerHTML = desc;
    divCartEl.setAttribute("class", "add-cart row");
    divPriceEl.setAttribute("class", "col-9");
    h6PriceEl.innerHTML = "R$ " + price;
    divAddCartEl.setAttribute("class", "col-3");
    imgAddCartEl.setAttribute("src", "img/home/icons/126083.png");

    divEl.appendChild(divCardEl);
    divCardEl.appendChild(imgItemEl);
    divCardEl.appendChild(divBodyEl);
    divBodyEl.appendChild(h5TitleEl);
    divBodyEl.appendChild(pDescEl);
    divBodyEl.appendChild(divCartEl);
    divCartEl.appendChild(divPriceEl);
    divCartEl.appendChild(divAddCartEl);
    divPriceEl.appendChild(h6PriceEl);
    divAddCartEl.appendChild(imgAddCartEl);
    producs.appendChild(divEl);
}

addItemsCarousel("img/home/bonec-selecao-1.png", "#", "selecao");
addItemsCarousel("img/home/bonec-selecao-2.png", "#", "selecao");
addItemsCarousel("img/home/boneco-palhaco.png", "#", "selecao");

addProducts("img/home/produtos/item 1.webp", "Boneco", "Nome produto", "Descricao Produto", "999,99");
addProducts("img/home/produtos/item 1.webp", "Boneco", "Nome produto", "Descricao Produto", "999,99");
addProducts("img/home/produtos/item 1.webp", "Boneco", "Nome produto", "Descricao Produto", "999,99");
addProducts("img/home/produtos/item 1.webp", "Boneco", "Nome produto", "Descricao Produto", "999,99");