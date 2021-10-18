//создаем корзину товаров
let controlsAll = document.getElementsByClassName("product__quantity-controls");//управление количеством товара
let products = document.getElementsByClassName("product");//карточка товара
let basket = document.querySelector(".cart__products");//товар в корзине
//далее перебираем отдельно количество, картоки товаров, увеличение и уменьшение количества товаров
for (control of controlsAll) {//создаем переменную control и перебираем его в цикле control (во всех значениях)
    const less = control.querySelector(".product__quantity-control_dec");//создаем переменную которое уменьшает кол-во товара в корзине
    const more = control.querySelector(".product__quantity-control_inc");//создаем переменную которое увелич кол-во товара в корзине
    const quantityValue = control.querySelector(".product__quantity-value");//Количество товаров добавляется или увеличивается в соответствии с выбранным значением
    more.onclick = () => {
      quantityValue.textContent = String(Number(quantityValue.textContent) + 1);//создаем событие на увелич товара
    };
    less.onclick = () => {
        if (Number(quantityValue.textContent) > 1) {
         quantityValue.textContent = String(Number(quantityValue.textContent) - 1);//создаем событие на уменьш товара
        };
    };
}

for (product of products) {//создаем product перебираем карточки товаров
    let productAdd = product.querySelector(".product__add");//добавление товара
    let count = product.querySelector(".product__quantity-value");//управление количеством товара
    const img = product.querySelector(".product__image");//изображения товара
    let identification = product.getAttribute("data-id");//уникальный код товара
     productAdd.onclick = () => {//добавление карточек товара в корзину
    let cartProducts = basket.querySelectorAll(".cart__product");
    let i = Array.from(cartProducts).find((i) => {//проходим по циклу
            if (i.getAttribute("data-id") === identification) {//добавление по уникальному идентификатору
                return i;
            }
        });
     if (i) {
      let productCount = i.querySelector(".cart__product-count");
            productCount.textContent = String(Number(productCount.textContent) + Number(count.textContent));
            count.textContent = 1;
            return;
        }
   let div = document.createElement("div");
   let image = document.createElement("img");
   let divChild = document.createElement("div");
        div.appendChild(image);
        image.setAttribute("src", img.getAttribute("src"));
        image.classList.add("cart__product-image");
        div.classList.add("cart__product");
        div.setAttribute("data-id", identification);
        divChild.classList.add("cart__product-count");
        divChild.textContent = count.textContent;
        count.textContent = "1";
        div.appendChild(divChild);
        basket.appendChild(div);
    }
}