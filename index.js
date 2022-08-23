
const executeOrder = () => {
	let orderId = document.getElementById('order-id-input').value
	if(orderId){
	createOrderCard(orderId)

	document.getElementById(orderId).innerText = 'Order Placed'

	chefReceived(orderId)
		.then(pizzaSauceAdded)
		.then(firstLayerOfCheeseAdded)
		.then(toppingsAdded)
		.then(secondLayerOfCheeseAdded)
		.then(pizzaBaked)
		.then(oreganoAddedAndPacked)
		.then(packageReceivedAtCounter)
		.then(() => document.getElementById(orderId).innerText = 'Package received at counter')
	}	
} 
