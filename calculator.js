let opClicked = false;
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
                if (screen.textContent.length < 15) {
                    screen.textContent += "0";
                }
                break;
            case "one":
                if (screen.textContent.length < 15) {
                    screen.textContent += "1";
                }
                break;
            case "two":
                if (screen.textContent.length < 15) {
                    screen.textContent += "2";
                }
                break;
            case "three":
                if (screen.textContent.length < 15) {
                    screen.textContent += "3";
                }
                break;
            case "four":
                if (screen.textContent.length < 15) {
                    screen.textContent += "4";
                }
                break;
            case "five":
                if (screen.textContent.length < 15) {
                    screen.textContent += "5";
                }
                break;
            case "six":
                if (screen.textContent.length < 15) {
                    screen.textContent += "6";
                }
                break;
            case "seven":
                if (screen.textContent.length < 15) {
                    screen.textContent += "7";
                }
                break;
            case "eight":
                if (screen.textContent.length < 15) {
                    screen.textContent += "8";
                }
                break;
            case "nine":
                if (screen.textContent.length < 15) {
                    screen.textContent += "9";
                }
                break;
            case "add":
                if (opClicked == true && Number.isFinite(Number(screen.textContent.at(-1))) == true) {
                    val2 = (screen.textContent.split(op))[1];
                    val1 = operate(Number(val1), Number(val2), op);
                    screen.textContent = val1;
                }

                if (screen.textContent.length < 15 && opClicked == false) {
                    val1 = screen.textContent;
                    op = "+";
                    screen.textContent += "+";
                    opClicked = true;
                }       
                break;
            case "subtract":
                if (opClicked == true && Number.isFinite(Number(screen.textContent.at(-1))) == true) {
                    val2 = (screen.textContent.split(op))[1];
                    val1 = operate(Number(val1), Number(val2), op);
                }
                if (screen.textContent.length < 15 && opClicked == false) {
                    val1 = screen.textContent;
                    op = "-";
                    screen.textContent += "-";
                    opClicked = true;
                }
                break;
            case "multiply":
                if (opClicked == true && Number.isFinite(Number(screen.textContent.at(-1))) == true) {
                    val2 = (screen.textContent.split(op))[1];
                    val1 = operate(Number(val1), Number(val2), op);
                    screen.textContent = val1;
                }
                if (screen.textContent.length < 15 && opClicked == false) {
                    val1 = screen.textContent;
                    op = "*";
                    screen.textContent += "*";
                    opClicked = true;
                }     
                break;       
            case "divide":
                if (opClicked == true && Number.isFinite(Number(screen.textContent.at(-1))) == true) {
                    val2 = (screen.textContent.split(op))[1];
                    val1 = operate(Number(val1), Number(val2), op);
                    screen.textContent = val1;
                }
                if (screen.textContent.length < 15 && opClicked == false) {
                    val1 = screen.textContent;
                    op = "/";
                    screen.textContent += "/";
                    opClicked = true;
                }

                break;
            case "equals":
                if (opClicked == true && Number.isFinite(Number(screen.textContent.at(-1))) == true) {
                    val2 = (screen.textContent.split(op))[1];
                    val1 = operate(Number(val1), Number(val2), op);
                    screen.textContent = val1;
                }
        }
    })
})

document.addEventListener("keydown", (event) => {
    switch(event.key) {
        case "Escape":
            event.preventDefault();
            document.querySelector("#ac").click();
            break;
        case "Backspace":
            event.preventDefault();
            document.querySelector("#c").click();
            break;
        case "0":
            event.preventDefault();
            document.querySelector("#zero").click();
            break;
        case "1":
            event.preventDefault();
            document.querySelector("#one").click();
            break;
        case "2":
            event.preventDefault();
            document.querySelector("#two").click();
            break;
        case "3":
            event.preventDefault();
            document.querySelector("#three").click();
            break;
        case "4":
            event.preventDefault();
            document.querySelector("#four").click();
            break;
        case "5":
            event.preventDefault();
            document.querySelector("#five").click();
            break;
        case "6":
            event.preventDefault();
            document.querySelector("#six").click();
            break;
        case "7":
            event.preventDefault();
            document.querySelector("#seven").click();
            break;
        case "8":
            event.preventDefault();
            document.querySelector("#eight").click();
            break;
        case "9":
            event.preventDefault();
            document.querySelector("#nine").click();
            break;
        case "+":
            event.preventDefault();
            document.querySelector("\#add").click();
            break;
        case "-":
            event.preventDefault();
            document.querySelector("#subtract").click();
            break;
        case "*":
            event.preventDefault();
            document.querySelector("#multiply").click();
            break;
        case "/":
            event.preventDefault();
            document.querySelector("#divide").click();
            break;
        case "=":
            event.preventDefault();
            document.querySelector("#equals").click();
            break;
    }

})