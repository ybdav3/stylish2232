const product = [
  {
    id: 1,
    name: "Nike",
    image: "https://themewagon.github.io/stylish/images/card-item1.jpg",
    price: 250.2,
    category: "nike",
    description: "Running Shoe For Men",
  },
  {
    id: 2,
    name: "Gucci",
    image: "https://themewagon.github.io/stylish/images/card-item2.jpg",
    price: 300.04,
    category: "gucci",
    description: "Running Shoe For Men",
  },
  {
    id: 3,
    name: "Balenciaga",
    image: "https://themewagon.github.io/stylish/images/card-item3.jpg",
    price: 87.9,
    category: "balenciaga",
    description: "Running Shoe For Men",
  },
  {
    id: 4,
    name: "Amiri",
    image: "https://themewagon.github.io/stylish/images/card-item4.jpg",
    price: 120.01,
    category: "amiri",
    description: "Running Shoe For Men",
  },
  {
    id: 5,
    name: "AirForce1",
    image: "https://themewagon.github.io/stylish/images/card-item5.jpg",
    price: 99.09,
    category: "air",
    description: "Running Shoe For Men",
  },
  {
    id: 6,
    name: "nike SB",
    image: "https://themewagon.github.io/stylish/images/card-item2.jpg",
    price: 460.04,
    category: "nike SB",
    description: "Running Shoe For Men",
  },
];

let disPlayProduct = ""
product.forEach((product)=>{
    disPlayProduct+= `
    <div class="card border border-0" >
  <img src="${product.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${product.name}</h5>
    <p class="card-text">${product.description}</p>
    <a href="#">$${product.price}</a><br/>
    <button class="btn btn-success btn-cart">add to cart</button>
  </div>
</div>`
})
const allProduct = document.getElementById("allProducts")
allProduct.innerHTML = disPlayProduct


const products = [
  {
    id: 1,
    name: "Adidas",
    image: "https://themewagon.github.io/stylish/images/card-item6.jpg",
    price: 410.1,
    category: "adidas",
    description: "Running Shoe For Men",
  },
  {
    id: 2,
    name: "Hermes",
    image: "https://themewagon.github.io/stylish/images/card-item7.jpg",
    price: 290.21,
    category: "hermes",
    description: "Running Shoe For Men",
  },
  {
    id: 3,
    name: "Dolce & Gabana",
    image: "https://themewagon.github.io/stylish/images/card-item8.jpg",
    price: 117.9,
    category: "dolce&gabana",
    description: "Running Shoe For Men",
  },
  {
    id: 4,
    name: "Burberry",
    image: "https://themewagon.github.io/stylish/images/card-item9.jpg",
    price: 515.01,
    category: "burberry",
    description: "Running Shoe For Men",
  },
  {
    id: 5,
    name: "Nike",
    image: "https://themewagon.github.io/stylish/images/card-item10.jpg",
    price: 244.05,
    category: "nike",
    description: "Running Shoe For Men",
  },
  {
    id: 6,
    name: "adidas",
    image: "https://themewagon.github.io/stylish/images/card-item9.jpg",
    price: 500.05,
    category: "adidas",
    description: "Running Shoe For Men",
  },
];

let disPlayProducts = ""
products.forEach((products)=>{
    disPlayProducts+= `
    <div class="card border border-0">
        <img src="${products.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${products.name}</h5>
            <p class="card-text">${products.description}</p>
            <a href="#">$${products.price}</a><br/>
            <button class="btn btn-success btn-cart">add to cart</button>
        </div>
</div>`
})
const allProducts = document.getElementById("allProducts2")
allProducts2.innerHTML = disPlayProducts
const label=document.getElementById("label")
let newCart
const cartButton= document.querySelectorAll(".btn-cart")
cartButton.forEach((button)=>{
    button.addEventListener("click",()=>{
        const price=button.previousElementSibling.previousElementSibling.textContent
        const name=button.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent
        const image=button.parentElement.previousElementSibling.src
        const oldCart =JSON.parse(localStorage.getItem("cart")) || []
        newCart=[...oldCart,{image,name,price}]
        localStorage.setItem("cart",JSON.stringify(newCart))
        const getAllCartItems = JSON.parse(localStorage.getItem("cart"))
        const length = getAllCartItems.length
        label.innerText = length
    })
})

const getAllCartItems = JSON.parse(localStorage.getItem("cart"))
const length = getAllCartItems.length
label.innerText = length

let displayProduct2 = ""
getAllCartItems.forEach((item)=>{
   displayProduct2 += `<div style="display: flex; flex-direction: row; padding: 6px;">
    <img src=${item.image} alt="" width="90px" height="90px">
                        <div>
                            <h6 style="margin-left: 10px; color: black;">${item.name}</h6><br>
                            <h6 style="display: block; margin-left: 10px; margin-top: -16px;">${item.price}</h6>
                            <p style="margin-left: 10px; margin-top: 15px; class="card-text">${item.description}</p>
                        </div>
   </div>`;
})
const body=document.getElementById("body")
body.innerHTML=displayProduct2