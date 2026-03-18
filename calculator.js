let opClicked = false;

function operate(x, y, op) {
    switch(op) {
        case '+':
            opClicked = false;
            return(x+y);
        case '-':
            opClicked = false;
            return(x - y);
        case '*':
            opClicked = false;
            return(x*y);
        case '/':
            opClicked = false;
            return(x/y);
    }
}

function calculate() {
    let decClicked = false;
    let equalClicked = false;
    let firstCalc = true;
    let operators = ['+', '-', '*', '/'];
    let val1 = "0";
    let val2 = "0";
    let op = "";
    let piClicked = false;

    let screen = document.querySelector("#screen");

    buttons = document.querySelectorAll(".key");

    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            switch (event.target.id) {
                case "ac":
                    screen.textContent = "";
                    firstCalc = true;
                    opClicked = false;
                    equalClicked = false;
                    break;
                case "c":
                    if (operators.includes(screen.textContent.at(-1))) {
                        opClicked = false;
                    }

                    screen.textContent = screen.textContent.slice(0, -1);
                    if (screen.textContent == "") {
                        screen.textContent = "";
                        firstCalc = true;
                    }
                    break;
                case "zero":
                    if (screen.textContent.length < 15 && equalClicked == false) {
                        if (firstCalc == true) {
                            screen.textContent = '';
                            firstCalc = false;
                        }
                        screen.textContent += "0";
                        piClicked = true;
                    }
                    if (equalClicked == true && opClicked == false) {
                        screen.textContent = "0";
                        piClicked = true;
                        equalClicked = false;
                    }
                    break;
                case "one":
                    if (screen.textContent.length < 15 && equalClicked == false) {
                        if (firstCalc == true) {
                            screen.textContent = '';
                            firstCalc = false;
                        }
                        screen.textContent += "1";
                        piClicked = true;
                    }
                    if (equalClicked == true && opClicked == false) {
                        screen.textContent = "1";
                        equalClicked = false;
                        piClicked = true;
                    }
                    break;
                case "two":
                    if (screen.textContent.length < 15 && equalClicked == false) {
                        if (firstCalc == true) {
                            screen.textContent = '';
                            firstCalc = false;
                        }
                        screen.textContent += "2";
                        piClicked = true;
                    }
                    if (equalClicked == true && opClicked == false) {
                        screen.textContent = "2";
                        equalClicked = false;
                        piClicked = true;
                    }
                    break;
                case "three":
                    if (screen.textContent.length < 15 && equalClicked == false) {
                        if (firstCalc == true) {
                            screen.textContent = '';
                            firstCalc = false;
                        }
                        screen.textContent += "3";
                        piClicked = true;
                    }
                    if (equalClicked == true && opClicked == false) {
                        screen.textContent = "3";
                        equalClicked = false;
                        piClicked = true;
                    }
                    break;
                case "four":
                    if (screen.textContent.length < 15 && equalClicked == false) {
                        if (firstCalc == true) {
                            screen.textContent = '';
                            firstCalc = false;
                        }
                        screen.textContent += "4";
                        piClicked = true;
                    }
                    if (equalClicked == true && opClicked == false) {
                        screen.textContent = "4";
                        equalClicked = false;
                        piClicked = true;
                    }
                    break;
                case "five":
                    if (screen.textContent.length < 15 && equalClicked == false) {
                        if (firstCalc == true) {
                            screen.textContent = '';
                            firstCalc = false;
                        }
                        screen.textContent += "5";
                        piClicked = true;
                    }
                    if (equalClicked == true && opClicked == false) {
                        screen.textContent = "5";
                        equalClicked = false;
                        piClicked = true;
                    }
                    break;
                case "six":
                    if (screen.textContent.length < 15 && equalClicked == false) {
                        if (firstCalc == true) {
                            screen.textContent = '';
                            firstCalc = false;
                        }
                        screen.textContent += "6";
                        piClicked = true;
                    }
                    if (equalClicked == true && opClicked == false) {
                        screen.textContent = "6";
                        equalClicked = false;
                        piClicked = true;
                    }
                    break;
                case "seven":
                    if (screen.textContent.length < 15 && equalClicked == false) {
                        if (firstCalc == true) {
                            screen.textContent = '';
                            firstCalc = false;
                        }
                        screen.textContent += "7";
                        piClicked = true;
                    }
                    if (equalClicked == true && opClicked == false) {
                        if (firstCalc == true) {
                            screen.textContent = '';
                            firstCalc = false;
                        }
                        screen.textContent = "7";
                        equalClicked = false;
                        piClicked = true;
                    }
                    break;
                case "eight":
                    if (screen.textContent.length < 15 && equalClicked == false) {
                        if (firstCalc == true) {
                            screen.textContent = '';
                            firstCalc = false;
                        }
                        screen.textContent += "8";
                        piClicked = true;
                    }
                    if (equalClicked == true && opClicked == false) {
                        screen.textContent = "8";
                        equalClicked = false;
                        piClicked = true;
                    }
                    break;
                case "nine":
                    if (screen.textContent.length < 15 && equalClicked == false) {
                        if (firstCalc == true) {
                            screen.textContent = '';
                            firstCalc = false;
                        }
                        screen.textContent += "9";
                        piClicked = true;
                    }
                    if (equalClicked == true && opClicked == false) {
                        screen.textContent = "9";
                        equalClicked = false;
                        piClicked = true;
                    }
                    break;
                case "sqrt":
                    if (opClicked == false && screen.textContent != "" && val1.toString().at(0) != "-") {
                        val1 = Math.sqrt(Number(screen.textContent));
                        screen.textContent = parseFloat(Number(val1).toFixed(10));
                    }
                    equalClicked = true;
                    piClicked = false;
                    break;
                case "pi":
                    if (firstCalc == true) {
                        screen.textContent = '';
                        firstCalc = false;
                    }
                    if (screen.textContent == '') {
                        screen.textContent = "3.14";
                        piClicked = true;
                        decClicked = true;
                    }
                    if (opClicked == true && piClicked == false) {
                        screen.textContent += "3.14";
                        piClicked = true;
                        decClicked = true;
                    }
                    if (equalClicked == true && opClicked == false && piClicked == false) {
                        screen.textContent = "3.14";
                        equalClicked = false;
                        piClicked = true;
                        decClicked = true;
                    }
                    break;
                case "add":
                    if (opClicked == true && Number.isFinite(Number(screen.textContent.at(-1))) == true) {
                        val2 = (screen.textContent.split(op))[1];
                        val1 = operate(Number(val1), Number(val2), op);
                        if (val1.toString().length > 11) {
                            screen.textContent = parseFloat(Number(val1).toFixed(10));
                        }
                        else {
                            screen.textContent = val1;
                        }
                    }

                    if (screen.textContent.length < 15 && opClicked == false) {
                        val1 = screen.textContent;
                        op = "+";
                        screen.textContent += "+";
                        opClicked = true;
                        decClicked = false;
                        equalClicked = false;
                        piClicked = false;
                    }       
                    break;
                case "subtract":
                    if (opClicked == true && Number.isFinite(Number(screen.textContent.at(-1))) == true) {
                        let opIndex = screen.textContent.indexOf(op, 1);
                        val2 = screen.textContent.slice(opIndex + 1);
                        val1 = operate(Number(val1), Number(val2), op);
                        if (val1.toString().length > 11) {
                            screen.textContent = parseFloat(Number(val1).toFixed(10));
                        }
                        else {
                            screen.textContent = val1;
                        }
                        opClicked = false;
                    }
                    if (screen.textContent.length < 15 && opClicked == false && firstCalc == false) {
                        val1 = screen.textContent;
                        op = "-";
                        screen.textContent += "-";
                        opClicked = true;
                        decClicked = false;
                        equalClicked = false;
                        piClicked = false;
                    }
                    if (firstCalc == true) {
                        screen.textContent = "-";
                        firstCalc = false;
                    }
                    break;
                case "multiply":
                    if (opClicked == true && Number.isFinite(Number(screen.textContent.at(-1))) == true) {
                        val2 = (screen.textContent.split(op))[1];
                        val1 = operate(Number(val1), Number(val2), op);
                        if (val1.toString().length > 11) {
                            screen.textContent = parseFloat(Number(val1).toFixed(10));
                        }
                        else {
                            screen.textContent = val1;
                        }
                    }
                    if (screen.textContent.length < 15 && opClicked == false) {
                        val1 = screen.textContent;
                        op = "*";
                        screen.textContent += "*";
                        opClicked = true;
                        decClicked = false;
                        equalClicked = false;
                        piClicked = false;
                    }     
                    break;       
                case "divide":
                    if (opClicked == true && Number.isFinite(Number(screen.textContent.at(-1))) == true) {
                        val2 = (screen.textContent.split(op))[1];
                        val1 = operate(Number(val1), Number(val2), op);
                        if (val1.toString().length > 11) {
                            screen.textContent = parseFloat(Number(val1).toFixed(10));
                        }
                        else {
                            screen.textContent = val1;
                        }
                    }
                    if (screen.textContent.length < 15 && opClicked == false) {
                        val1 = screen.textContent;
                        op = "/";
                        screen.textContent += "/";
                        opClicked = true;
                        decClicked = false;
                        equalClicked = false;
                        piClicked = false;
                    }
                    break;
                case "equals":
                    if (opClicked == true && Number.isFinite(Number(screen.textContent.at(-1))) == true) {
                        let opIndex = screen.textContent.indexOf(op, 1);
                        val2 = screen.textContent.slice(opIndex + 1);
                        val1 = operate(Number(val1), Number(val2), op);
                        if (val1.toString().length > 11) {
                            screen.textContent = parseFloat(Number(val1).toFixed(10));
                        }
                        else {
                            screen.textContent = val1;
                        }
                        equalClicked = true;
                        piClicked = false;
                    }
                    break;
                case "decimal":
                    if (firstCalc == true) {
                        screen.textContent = '.';
                        firstCalc = false;
                        decClicked = true;
                    }
                    if(decClicked == false && equalClicked == true) {
                        screen.textContent = '.';
                        decClicked = true;
                        equalClicked = false;
                    }
                    if (screen.textContent.length < 15 && decClicked == false && equalClicked == false) {
                        screen.textContent += ".";
                        decClicked = true;
                    }
                    break;
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

        if (button) {
            button.classList.add("is-pressed");
            button.click();

            setTimeout(() => {
            button.classList.remove("is-pressed");
            }, 100);
        }



    })
}

calculate();