var slider = document.getElementById("rate");
var output = document.getElementById("total");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}

function compute() {
    amount = parseInt(document.getElementById("principal").value);
    interestRate = parseFloat(document.getElementById("rate").value);
    numYears = parseInt(document.getElementById("years").value);
    dt = new Date();
    dtYear = dt.getFullYear();

    let result = (amount * interestRate) * numYears / 100;
    document.getElementById("result").innerHTML = "If you deposit " +
        amount + ", <br />at an interest rate of " +
        interestRate + "%.<br /> You will receive an amount of " +
        result + ",<br /> in the year " + (dtYear + numYears);
}
