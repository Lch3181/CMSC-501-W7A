// This function is called when the submit button is clicked
function calculateOrder() {

    // Get the price of the selected number of scoops
    var scoopPrice = parseFloat(document.getElementById("scoops").value);

    // Get the selected toppings
    var toppings = document.getElementsByName("topping");

    // Initialize a variable to hold the total cost of the toppings
    var toppingCost = 0.0;

    // For each topping, if it is checked (selected), add its cost to the total topping cost
    for (var i = 0; i < toppings.length; i++) {
        if (toppings[i].checked)
            toppingCost += parseFloat(toppings[i].value);
    }

    // Calculate the total cost by adding the cost of the scoops and the toppings
    var total = scoopPrice + toppingCost;

    // Display the total cost in the result paragraph
    document.getElementById("result").innerHTML = "Your total is: $" + total.toFixed(2);
}
