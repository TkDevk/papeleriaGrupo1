
/*
const contador = 0; //0 porque va ir cambiando

function contarClick(){
  //Inicializo variable
     contador++; //Incrementa al hacer click
     
     document.getElementById("contador").textContent = contador;
    //  se puede resumir todo asi > document.getElementById("count").textContent = counter++; 
}

*/



function updateCart()  {
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price}`;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Quitar';
        removeButton.classList.add('remover');
        removeButton.addEventListener('click', () => {
            cart.splice(index, 1);
            total -= item.price;
            updateCart();
        });
        
        li.appendChild(removeButton);
        cartItems.appendChild(li);
    });

    cartTotal.textContent = total.toFixed(2);
}


