var dark_mode_icon = document.getElementById("dark_mode_icon");
dark_mode_icon.onclick = function(){
     document.body.classList.toggle("dark-theme");
     if(document.body.classList.contains("dark-theme")){
         dark_mode_icon.src = "images/sun.png";
     }
     else{
         dark_mode_icon.src = "images/moon.png";
     }
}

const removeButtons = document.querySelectorAll('.rfw-button');

removeButtons.forEach(button => {
    button.addEventListener('click', function(){
        const product = button.closest('.product-wishlist');
        if(product){
            product.remove();
        }
        const wishlistContainer = document.querySelector('.wishlist .order');
        const remainingProducts = wishlistContainer.querySelectorAll('.product-wishlist');
        
        if (remainingProducts.length === 0) {
            const emptyMessage = document.createElement('p');
            emptyMessage.classList.add('empty-msg');
            emptyMessage.textContent = 'Your wishlist is empty.';
            wishlistContainer.appendChild(emptyMessage);
        }
    })
})



const updateButtons = document.querySelectorAll('.edit-info');

updateButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault(); 

        const form = button.closest('form');
        const buttonContainer = document.querySelector('.submit-button');

        button.remove();
        buttonContainer.remove();

        const successMessage = document.createElement('p');
        successMessage.textContent = 'Information saved successfully!';
        successMessage.style.color = 'green';
        form.appendChild(successMessage);
    });
});

