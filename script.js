// Display value of slide on the right side
var slider = document.getElementById("rate");
var output = document.getElementById("total");
output.innerHTML = slider.value;
slider.oninput = function () {
    output.innerHTML = this.value;
}

// Set focus on first field
document.getElementById("principal").focus();

// Execute the interest math and return value
function compute() {
    // Get value from principall
    amount = parseInt(document.getElementById("principal").value);
    // Check if principal is negative or zero
    if (amount <= 0) {
        alert("Enter a positive number.");
        document.getElementById("principal").value = "";
        document.getElementById("principal").focus();
        return;
    }

    // Get the others values
    interestRate = parseFloat(document.getElementById("rate").value);
    numYears = parseInt(document.getElementById("years").value);
    dt = new Date();
    dtYear = dt.getFullYear();

    // Calculate interest
    let result = (amount * interestRate) * numYears / 100;

    // Return text with result
    document.getElementById("result").innerHTML = "If you deposit <span class='yellow'>" +
        amount + "</span>, <br />at an interest rate of <span class='yellow'>" +
        interestRate + "%</span>.<br /> You will receive an amount of <span class='yellow'>" +
        result + "</span>,<br /> in the year <span class='yellow'>" + (dtYear + numYears) + "</span>";
}
