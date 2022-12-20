var myExpression = "";
var error;

function handleClick(id) {
    var textboxValue = document.getElementById("calc-field");
    if(id === "C") {
        myExpression = myExpression.toString();
        var strlength = myExpression.length;
        myExpression = myExpression.slice(0,strlength-1);
        textboxValue.value = myExpression;
    }
    else if( (id === "1") || (id === "2") || (id === "3") || (id === "4") || (id === "5") || (id === "6") || (id === "7") || (id === "8") || (id === "9") || (id === "0") || (id === "+") || (id === "-") || (id === "*") || (id === "/") || (id === ".")) {
        myExpression = myExpression.concat(id);
        textboxValue.value = myExpression;
    }
    else{
        if((myExpression[0] === "*") || (myExpression[0] === "/")) {
            error = document.getElementById("perror");
            error.textContent = "Invalid Expression"
        }
        else {
            myExpression = eval(myExpression);
            textboxValue.value = myExpression;
        }
        

    }
}