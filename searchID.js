


var searchOrder = () => {
  let orderID = document.getElementById('order-id-input').value;

  let searchID = document.getElementById('search-order').value;

  if (orderID === searchID) {
    //document.getElementsByClassName('order-status-card').style.width = "50vw";
     alert("Your Order Is Being Placed...\n Wait for few minutes..!!")
  }
  else{
    alert("Enter the Valid Order ID")
  }
};
