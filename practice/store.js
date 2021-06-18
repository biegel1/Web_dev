if(document.readyState == 'loading'){
	document.addEventListener('DOMContentLoaded', pageLoaded)
}
else{
	pageLoaded()
}

function pageLoaded(){
	reactToRemoveCartItemButtonClickEvent()
	reactToQuantityInputClickEvent()
	reactToAddToCartButtonClickEvent()
	reactToPurchaseButtonClickEvent()
}

function reactToPurchaseButtonClickEvent(){
	purchaseButton = getPurchaseButton()
	purchaseButton.addEventListener('click', purchaseItems)
}

function getPurchaseButton(){
	purchaseButton = document.getElementsByClassName('btn-purchase')[0]
	return purchaseButton
}

function purchaseItems(){
	alert('Thank you for your purchase')
	emptyTheCart()
	updateCartTotal()
}

function emptyTheCart(){
	var cartItems = document.getElementsByClassName('cart-items')[0]
	while(cartItems.hasChildNodes()){
		cartItems.removeChild(cartItems.firstChild)
	}

}

function reactToAddToCartButtonClickEvent(){
	var cartButtons = getCartButtons()
	for(var i = 0;  i < cartButtons.length; i++){
		var button = cartButtons[i]
		button.addEventListener('click', addToCart)
	}
}

function getCartButtons(){
	var cartButtons = document.getElementsByClassName('shop-item-button')
	return cartButtons
}

function addToCart(event){
	var button = event.target
	var shopItem = button.parentElement.parentElement
	var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
	var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
	var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
	addItemToCart(title, price, imageSrc)
	updateCartTotal()
}

function addItemToCart(title, price, imageSrc){
	var cartRow = document.createElement('div')
	cartRow.classList.add('cart-row')
	var cartItems = document.getElementsByClassName('cart-items')[0]
	var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
	for(var i = 0; i <cartItemNames.length; i++){
		if(cartItemNames[i].innerText == title){
			alert('This item is already added to the cart')
			return 
		}
	}
	var cartRowContents = `
	<div class = 'cart-item cart-column'>
		<img class = 'cart-item-image' src = '${imageSrc}' widht= '100' height='100'>
		<span class ='cart-item-title'>${title}</span>
	</div>

	<span class = 'cart-price cart-column'>${price}</span>
	<div class = 'cart-quantity cart-column'>
		<input class = 'cart-quantity-input' type= 'number' value = '1'> 
		<button class = 'btn btn-danger' role = 'button'> REMOVE </button>
	</div>`
	cartRow.innerHTML = cartRowContents
	cartItems.append(cartRow)
	cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
	cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}



function reactToQuantityInputClickEvent(){
	var quantityInputs = getQuantityInputs()
	for(var i = 0; i < quantityInputs.length; i++){
		var input = quantityInputs[i]
		input.addEventListener('change', quantityChanged)
	}
}

function getQuantityInputs(){
	var quantityInputs = document.getElementsByClassName('cart-quantity-input')
	return quantityInputs
}

function quantityChanged(event){
	var input = event.target
	if(isNaN(input.value)||input.value <0){
		input.value = 1
	}
	updateCartTotal()
	
}


function getRemoveCartItemButtons(){
	var removeCartItemButtons = document.getElementsByClassName('btn-danger')
	return removeCartItemButtons
}

function reactToRemoveCartItemButtonClickEvent(){
	var removeCartItemButtons = getRemoveCartItemButtons()
	for(var i = 0; i< removeCartItemButtons.length; i++){
		var button = removeCartItemButtons[i]
		button.addEventListener('click',removeCartItem)
	}
}

function removeCartItem(event){
	var buttonClicked = event.target 
	buttonClicked.parentElement.parentElement.remove()
	updateCartTotal()
}

function updateCartTotal(){
	var cartItemContainer = document.getElementsByClassName('cart-items')[0]
	var cartRows = cartItemContainer.getElementsByClassName('cart-row')
	var total = 0
	for(var i = 0; i<cartRows.length; i++){
		var cartRow = cartRows[i]
		var priceElement = cartRow.getElementsByClassName('cart-price')[0]
		var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
		var price = parseFloat(priceElement.innerText)
		var quantity = quantityElement.value
		total = total +(price*quantity)
	}
	total = Math.round(total*100)/100

	document.getElementsByClassName('cart-total-price')[0].innerText =  total + '€'
}







