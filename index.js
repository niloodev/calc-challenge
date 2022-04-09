
// *niloodev
// 🐸: Summary
// - Var definitions.
// - Theme change functions.
// - Calc functions.





//#region Var definitions.
    var prevNumber = "";
    var posNumber = "";
    var operator = "";

    var savedTheme = "";
//#endregion





//#region Theme change functions.
    // Verify if exists theme in localStorage.
    var userTheme = localStorage.getItem("prefers-color-scheme");
    if(userTheme == null) savedTheme = "blue";
    else savedTheme = userTheme;

    document.querySelector("body").className = savedTheme;
    document.querySelectorAll("input")
    .forEach((r)=>{
        if(r.id == savedTheme) r.setAttribute("checked", "");
    });

    // Sets all radio inputs functionality.
    document.querySelectorAll("input")
    .forEach((r)=>{
        r.addEventListener("change", (t)=>{
            changeTheme(r.id);
        })
    });

    // Changes body's class, and the CSS makes the rest. (✨ magic ✨)
    function changeTheme(themeName){
        document.querySelector("body").className = themeName;
        localStorage.setItem("prefers-color-scheme", themeName);
    }
//#endregion






//#region Calc functions.
    // keyboard disponibilization.
    window.addEventListener("keydown", (e)=>{
        switch(e.key){
            case "1": addNumber("1"); break;
            case "2": addNumber("2"); break;
            case "3": addNumber("3"); break;
            case "4": addNumber("4"); break;
            case "5": addNumber("5"); break;
            case "6": addNumber("6"); break;
            case "7": addNumber("7"); break;
            case "8": addNumber("8"); break;
            case "9": addNumber("9"); break;
            case "0": addNumber("0"); break;
            case "x": addOperator("x"); break;
            case "*": addOperator("x"); break;
            case "/": addOperator("/"); break;
            case "+": addOperator("+"); break;
            case "-": addOperator("-"); break;
            case "Backspace": deleteNumber(); break;
            case "Enter": solve(); break;
            case ".": addNumber("."); break;
            case ",": addNumber("."); break;
            case "Escape": clearCalc(); break;
        }
    })

    // Reset values.
    function clearCalc(){
        prevNumber = "";
        posNumber = "";
        operator = "";
        update();
    }
    // Adds a number or character (.) to the equation.
    function addNumber(n){    
        if(operator == ""){
            if(prevNumber.includes(".") && n == ".") return;
            if(n == "." && prevNumber == "") return;
            prevNumber += n;
        } else {
            if(posNumber.includes(".") && n == ".") return;
            if(n == "." && posNumber == "") return;
            posNumber += n;
        }
        update();
    }
    // Deletes the last characters, number or operator.
    function deleteNumber(){
        if(operator == ""){
            prevNumber = prevNumber.slice(0, -1);
        } else {
            if(posNumber == "") operator = "";
            else posNumber = posNumber.slice(0, -1);
        }
        update();
    }
    // Sets operator.
    function addOperator(o){
        if(prevNumber == "") return;
        if(operator == "") operator = o;
        else solve(o);
        update();
    }
    // Render.
    function update(){
        function adjustValue(v){
            if(v == "") return v;
            v = v.replace(".", ",");
            return v;
        }

        var value = document.querySelector("#value");
        var oldValue = document.querySelector("#oldValue");

        if(operator == ""){
            value.innerHTML = adjustValue(prevNumber);
            oldValue.innerHTML = "";
        } else {
            value.innerHTML = adjustValue(posNumber);
            oldValue.innerHTML = adjustValue(prevNumber + " " + operator);
        }
    }
    // Solve function.
    function solve(e){
        if(operator == "") return;
        if(posNumber == "" || prevNumber == "") return;

        var result = 0;
        switch(operator){
            case "+":
                result = parseFloat(prevNumber) + parseFloat(posNumber);
                break;
            case "-":
                result = parseFloat(prevNumber) - parseFloat(posNumber);
                break;
            case "x":
                result = parseFloat(prevNumber) * parseFloat(posNumber);
                break;
            case "/":
                result = parseFloat(prevNumber) / parseFloat(posNumber);
                break;
        }
        clearCalc();
        prevNumber = (result == 0)?"0":(Number.isInteger(result))?result.toString():result.toFixed(2);
        if(e) operator = e;
        update();
    }

    // Initial update()
    update();
//#endregion