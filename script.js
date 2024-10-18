
document.getElementById("calc").onclick = function() {
    let dogType = document.getElementById("dogType").value;
    let days = document.getElementById("days").value;
    let price = parseInt(dogType) * days;
    document.getElementById("price").textContent = `Price: $${price}`;
    let tax = price * .0467;
    document.getElementById("tax").textContent = `Tax: $${tax.toFixed(2)}`;
    let totalPrice = price + tax;
    document.getElementById("totalPrice").textContent = `Total Price: $${totalPrice.toFixed(2)}`
}