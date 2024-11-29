import { products } from "./productsData.js";

document.addEventListener("DOMContentLoaded", () => {
    const productsSection = document.querySelector(".products-section");

    products.forEach((product) => {
        const productContainer = document.createElement("div");
        productContainer.className = "product-container";

        const productImg = document.createElement("img");
        productImg.src = product.img;
        productContainer.appendChild(productImg);

        const productTitle = document.createElement("h2");
        productTitle.className = "product-title";
        productTitle.textContent = product.title;
        productContainer.appendChild(productTitle);

        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;
        productDescription.className = "product-description"
        productContainer.appendChild(productDescription);
        
        const purchaseSection = document.createElement("div");
        purchaseSection.className = "purchase-section";
        productContainer.appendChild(purchaseSection);
        
        const productPrice = document.createElement("h3");
        productPrice.className = "product-price";
        productPrice.textContent = product.price;
        purchaseSection.appendChild(productPrice);

        const purchaseButton = document.createElement("button");
        purchaseButton.textContent = "Purchase";
        purchaseSection.appendChild(purchaseButton);

        productsSection.appendChild(productContainer);
    });
});
