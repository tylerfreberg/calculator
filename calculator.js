let opClicked = false;
let decClicked = false;
let equalPressed = false;
let operators = ['+', '-', '*', '/'];
let val1 = "";
let val2 = "";
let op = "";

function operate(x, y, op) {
    switch(op) {
        case '+':
            opClicked = false;
            return(add(x, y));
        case '-':
            opClicked = false;
            return(subtract(x, y));
        case '*':
            opClicked = false;
            return(multiply(x, y));
        case '/':
            opClicked = false;
            return(divide(x, y));
    }
}

function add(x, y) {
    return(x+y);
}

function subtract(x, y) {
    return(x - y);
}

function multiply(x, y) {
    return(x*y);
}

function divide(x, y) {
    return(x/y);
}

function clearScreen(element) {
    element.textContent = '';
}

let screen = document.querySelector("#screen");
let allClear = document.querySelector("#ac");

buttons = document.querySelectorAll(".key");

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        switch (event.target.id) {
            case "ac":
                screen.textContent = "";
                opClicked = false;
                break;
            case "c":
                if (operators.includes(screen.textContent.at(-1))) {
                    opClicked = false;
                }
                screen.textContent = screen.textContent.slice(0, -1);
                break;
            case "zero":
                if (screen.textContent.length < 15 && equalPressed == false) {
                    screen.textContent += "0";
                }
                break;
            case "one":
                if (screen.textContent.length < 15 && equalPressed == false) {
                    screen.textContent += "1";
                }
                break;
            case "two":
                if (screen.textContent.length < 15 && equalPressed == false) {
                    screen.textContent += "2";
                }
                break;
            case "three":
                if (screen.textContent.length < 15 && equalPressed == false) {
                    screen.textContent += "3";
                }
                break;
            case "four":
                if (screen.textContent.length < 15 && equalPressed == false) {
                    screen.textContent += "4";
                }
                break;
            case "five":
                if (screen.textContent.length < 15 && equalPressed == false) {
                    screen.textContent += "5";
                }
                break;
            case "six":
                if (screen.textContent.length < 15 && equalPressed == false) {
                    screen.textContent += "6";
                }
                break;
            case "seven":
                if (screen.textContent.length < 15 && equalPressed == false) {
                    screen.textContent += "7";
                }
                break;
            case "eight":
                if (screen.textContent.length < 15 && equalPressed == false) {
                    screen.textContent += "8";
                }
                break;
            case "nine":
                if (screen.textContent.length < 15 && equalPressed == false) {
                    screen.textContent += "9";
                }
                break;
            case "add":
                if (opClicked == true && Number.isFinite(Number(screen.textContent.at(-1))) == true) {
                    val2 = (screen.textContent.split(op))[1];
                    val1 = operate(Number(val1), Number(val2), op);
                    screen.textContent = Number(val1).toFixed(11);
                }

                if (screen.textContent.length < 15 && opClicked == false) {
                    val1 = screen.textContent;
                    op = "+";
                    screen.textContent += "+";
                    opClicked = true;
                    decClicked = false;
                    equalPressed = false;
                }       
                break;
            case "subtract":
                if (opClicked == true && Number.isFinite(Number(screen.textContent.at(-1))) == true) {
                    val2 = (screen.textContent.split(op))[1];
                    val1 = operate(Number(val1), Number(val2), op);
                    screen.textContent = Number(val1).toFixed(11);
                }
                if (screen.textContent.length < 15 && opClicked == false) {
                    val1 = screen.textContent;
                    op = "-";
                    screen.textContent += "-";
                    opClicked = true;
                    decClicked = false;
                    equalPressed = false;
                }
                break;
            case "multiply":
                if (opClicked == true && Number.isFinite(Number(screen.textContent.at(-1))) == true) {
                    val2 = (screen.textContent.split(op))[1];
                    val1 = operate(Number(val1), Number(val2), op);
                    screen.textContent = Number(val1).toFixed(11);
                }
                if (screen.textContent.length < 15 && opClicked == false) {
                    val1 = screen.textContent;
                    op = "*";
                    screen.textContent += "*";
                    opClicked = true;
                    decClicked = false;
                    equalPressed = false;
                }     
                break;       
            case "divide":
                if (opClicked == true && Number.isFinite(Number(screen.textContent.at(-1))) == true) {
                    val2 = (screen.textContent.split(op))[1];
                    val1 = operate(Number(val1), Number(val2), op);
                    screen.textContent = Number(val1).toFixed(11);
                }
                if (screen.textContent.length < 15 && opClicked == false) {
                    val1 = screen.textContent;
                    op = "/";
                    screen.textContent += "/";
                    opClicked = true;
                    decClicked = false;
                    equalPressed = false;
                }
                break;
            case "equals":
                if (opClicked == true && Number.isFinite(Number(screen.textContent.at(-1))) == true) {
                    val2 = (screen.textContent.split(op))[1];
                    val1 = operate(Number(val1), Number(val2), op);
                    screen.textContent = Number(val1).toFixed(11);
                    equalPressed = true;
                }
                break;
            case "decimal":
                if (screen.textContent.length < 15 && decClicked == false && equalPressed == false) {
                    screen.textContent += ".";
                    decClicked = true;
                }
        }
    })
})

document.addEventListener("keydown", (event) => {
    let button;

    switch(event.key) {
        case "Escape":
            event.preventDefault();
            button = document.querySelector("#ac");
            break;
        case "Backspace":
            event.preventDefault();
            button = document.querySelector("#c");
            break;
        case "0":
            event.preventDefault();
            button = document.querySelector("#zero");
            break;
        case "1":
            event.preventDefault();
            button = document.querySelector("#one");
            break;
        case "2":
            event.preventDefault();
            button = document.querySelector("#two");
            break;
        case "3":
            event.preventDefault();
            button = document.querySelector("#three");
            break;
        case "4":
            event.preventDefault();
            button = document.querySelector("#four");
            break;
        case "5":
            event.preventDefault();
            button = document.querySelector("#five");
            break;
        case "6":
            event.preventDefault();
            button = document.querySelector("#six");
            break;
        case "7":
            event.preventDefault();
            button = document.querySelector("#seven");
            break;
        case "8":
            event.preventDefault();
            button = document.querySelector("#eight");
            break;
        case "9":
            event.preventDefault();
            button = document.querySelector("#nine");
            break;
        case "+":
            event.preventDefault();
            button = document.querySelector("\#add");
            break;
        case "-":
            event.preventDefault();
            button = document.querySelector("#subtract");
            break;
        case "*":
            event.preventDefault();
            button = document.querySelector("#multiply");
            break;
        case "/":
            event.preventDefault();
            button = document.querySelector("#divide");
            break;
        case "Enter":
        case "=":
            event.preventDefault();
            button = document.querySelector("#equals");
            break;
        case ".":
            event.preventDefault();
            button = document.querySelector("#decimal");
            break;
    }

    button.classList.add("is-pressed");

    button.click();

    setTimeout(() => {
        button.classList.remove("is-pressed");
    }, 100);
})