// all btn select with use class name
const ringButtons = document.querySelectorAll('.ring-button');

  

for(let i=0; i< ringButtons.length; i++){
    const ringBtn = ringButtons[i];
    ringBtn.addEventListener('click', function(event){
        //  purple add korar agey sobgula ke check korbo and purple thakle ta remove korbo and jeta click korbo seta purple korbo.
        for (let n=0; n < ringButtons.length; n++){
            ringButtons[n].classList.remove("border-purple-600");
        }

        event.target.classList.add("border-purple-600");
        const productImage = document.getElementById("product-image");
        productImage.src = "../images/teal.png";
    })
}