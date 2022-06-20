function add (a, b){
    return Number(a) + Number(b);
}

function subtract (a, b){
    return a - b;
}

function multiplication (a, b){
    return a * b;
}

function division (a, b){
    return a/b
}


input = window.prompt ("Do you want to (A)dd, (S)ubtract, (M)ultiply, or (D)ivide?: ");

if (input.toUpperCase() == "A"){
    firstNumber = window.prompt("Please enter your first number: ");
    secondNumber = window.prompt("Please enter your second number: ");
    alert(add(firstNumber, secondNumber));
}

else if (input.toUpperCase() == "S"){
    firstNumber = window.prompt("Please enter your first number: ");
    secondNumber = window.prompt("Please enter your second number: ");
    alert(subtract(firstNumber, secondNumber));
}

else if (input.toUpperCase() == "M"){
    firstNumber = window.prompt("Please enter your first number: ");
    secondNumber = window.prompt("Please enter your second number: ");
    alert(multiplication(firstNumber, secondNumber));
}

else{
    firstNumber = window.prompt("Please enter your first number: ");
    secondNumber = window.prompt("Please enter your second number: ");
    alert(division(firstNumber, secondNumber))
}

close()