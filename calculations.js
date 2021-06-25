
//add
export function add(x, y){

    return x + y;
}

//subtract 
export function subtract(x, y){

    return x - y ;
}

//multiply
export function multiply(x, y){

    return x * y;

}

//divide
export function divide(x, y){

    
    return x / y;

}


// counts number of times decimals appear in string
//Restructring the HTML so the user is not allow to enter keyboard data would make this irrelevant
export function countDeci(str){

    let count = 0;

    for (var i = 0; i < str.length; i++){

        if (str[i] === '.'){


            count++;
        }

    }
    return count;
}

