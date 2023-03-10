//Converts a specified number to an array of digits
console.log("Question 1");
let number:number = 54;

var digitArray:Array<number> = [];
while(number > 0){
    digitArray.push(Math.round(number % 10));
    number = Math.floor(number / 10);
}

console.log(digitArray);

//Removes non-printable ASCII characters from a given string
console.log("Question 2");

var myString:string = "Hello how are you?";
var newString:string = "";
var i : number;
for(i=0; i< myString.length; i++){
    if(myString.charCodeAt(i) >= 32){
        newString = newString + myString.charAt(i);
    }
}
console.log(newString);

//Write a function that returns true if the provided predicate function returns true for all elements in a collection, false otherwise
console.log("Question 3");

function predicateFunc(arr:Array<number>){
 let arrLength: number = arr.length;
 let flag:number = 0;
 arr.forEach(i => {
    if(i){
        flag++;
    }
 });
 if(flag === arrLength){
    return true;
 }else{
    return false;
 }
}

function mainFunction(arr:Array<number>){
    if(predicateFunc(arr)){
        return true;
    }else{
        return false;
    }
}

var arr:Array<number> = [1,2,3,4,5,6];
console.log(mainFunction(arr));

//To Capitalize the first letter of a string
console.log("Question 4");

var capitalString :string = "what are you doing?";
var firstChar:number = capitalString.charCodeAt(0) - 32;
console.log(capitalString.replace(capitalString.charAt(0), String.fromCharCode(firstChar)));


//To create an object with keys generated by running the provided function for each key and the same values as the provided object
console.log("Question 5");

 