// all btn select with use class name
const ringButtons = document.querySelectorAll('.ring-button');

for(let i=0; i< ringButtons.length; i++){
    const ringBtn = ringButtons[i];
    ringBtn.addEventListener('click', function(event){
        // btn er id gulake niye eshe tar theke -color lekha uthay dilam and porey img er sathe milay dilam jatey korey j color btn click korbo tai img pai................

        const color = event.target.id.replace("-color", "");

        //  purple add korar agey sobgula ke check korbo and purple thakle ta remove korbo and jeta click korbo seta purple korbo.

        for (let n=0; n < ringButtons.length; n++){
            ringButtons[n].classList.remove("border-purple-600");
        }

        event.target.classList.add("border-purple-600");
        const productImage = document.getElementById("product-image");
        productImage.src = "../images/" + color + ".png";
    })
}

// second part........

function selectSize(size) {
    const sizes = ["S", "M", "L", "XL"];
    for (let i=0; i < sizes.length; i++){
    const button = document.getElementById("size-" + sizes[i]);
    const element = sizes[i];
    if(size === element){
        button.classList.add("border-purple-600");
    }else{
        button.classList.remove("border-purple-600");
    }
    }
}

// third pard..........

const quantityElement = document.querySelectorAll(".quantity-button");
for(let btn of quantityElement){
    btn.addEventListener("click", function(event){
        const amount = event.target.innerText === "+" ? 1 : -1
      const quantity = document.getElementById("quantity");
      const convertedQuantity = parseInt(quantity.innerText);
      const newQuantity = Math.max(0, convertedQuantity + amount);
      quantity.innerText = newQuantity;
    })
}


// add to card 
   let cartCount = 0;
document.getElementById("add-to-cart").addEventListener('click', function(event){
    const quantity = parseInt(document.getElementById("quantity").innerText);
    if(quantity > 0){
        const checkoutContainer = document.getElementById("checkout-container").classList.remove("hidden");
    
    document.getElementById("cart-count").innerText = quantity;
    }else{
        alert("Please select a Qunatity");
    }
});
