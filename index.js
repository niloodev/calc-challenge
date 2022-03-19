
// *niloodev
// Script 18/03
// - INICIALIZAÇÃO DE VARIAVEIS
// - TROCA DE TEMA (FUNÇÃO)
// - CALCULADORA (FUNÇÕES DE USO)





//#region INICIALIZAÇÃO DE VAR
    var prevNumber = "";
    var posNumber = "";
    var operator = "";

    var savedTheme = "";
//#endregion





//#region TROCA DE TEMA
    // Verifica o tema guardado no navegador se existir.
    var userTheme = localStorage.getItem("user-theme");
    if(userTheme == null) savedTheme = "blue";
    else savedTheme = userTheme;

    document.querySelector("body").className = savedTheme;
    document.querySelectorAll("input")
    .forEach((r)=>{
        if(r.id == savedTheme) r.setAttribute("checked", "");
    });

    // Define um listener em todos os radios, que sempre que for selecionado vai executar a função changeTheme() com seu id.
    document.querySelectorAll("input")
    .forEach((r)=>{
        r.addEventListener("change", (t)=>{
            changeTheme(r.id);
        })
    });

    // Essa função simplesmente troca a classe do body - o resto é magia do CSS.
    function changeTheme(themeName){
        document.querySelector("body").className = themeName;
        localStorage.setItem("user-theme", themeName);
    }
//#endregion






//#region CALCULADORA
    // Reseta os valores padrões de calculo.
    function clearCalc(){
        prevNumber = "";
        posNumber = "";
        operator = "";
        update();
    }
    // Adiciona um número OU caractere (".") para a equação, verificando se está nas normas.
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
    // Deleta o último caractere caso exista. Se o operador existir mas o segundo valor não tiver sido definido, o operador é resetado.
    function deleteNumber(){
        if(operator == ""){
            prevNumber = prevNumber.slice(0, -1);
        } else {
            if(posNumber == "") operator = "";
            else posNumber = posNumber.slice(0, -1);
        }
        update();
    }
    // Define o operador da função.
    function addOperator(o){
        if(prevNumber == "") return;
        if(operator == "") operator = o;
        else solve(o);
        update();
    }
    // Atualiza todas as informações no DOM, trocando "." por "," para se adequar ao padrão brasileiro.
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
    // Resolve os dois números baseados no operador escolhido e reseta a calculadora, definindo o primeiro valor como resultado.
    // Caso a operação já possua um operador e outro operador for escolhido, a função de addOperator() executa este método com um paramêtro extra, que faz -
    // - com que ele resolta a equação existente, defina o resultado e preserve o segundo operador escolhido.
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

    // update() inicial.
    update();
//#endregion