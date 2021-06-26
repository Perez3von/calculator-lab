// import functions

// reference needed DOM elements


// set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
import { add, countDeci, subtract, multiply, divide } from './calculations.js';


// variable(s) to point/reference DOM elements
const cal_button = document.getElementById('calculate-button');
const operations_select = document.getElementById('operations-selector');
const var_x = document.getElementById('var-one');
const var_y = document.getElementById('var-two');
const display_result = document.getElementById('display-result');

//Active function if user clicks this element
cal_button.addEventListener('click', runCal);

function runCal(){

    let operation = operations_select.value;
    let x = var_x.value;
    let y = var_y.value;
    let check_x = countDeci(x);
    let check_y = countDeci(y);

    //Checks if too many decimals are entered
    //Need to switch this case check with checking if NaN case......
    if (check_x <= 1 && check_y <= 1){

        x = parseFloat(x);
        y = parseFloat(y);
        let my_result = 0;

    //Checking to see if the input fields contain valid str or not NaN,,Probably could combine checks..
        if (isNaN(x) || isNaN(y)){

            alert("Input data type invalid or forgot to enter numbers");
            location.reload();
        }

    /*Checking on which operation the user selected and calling 
    the function corresponding to operation. 
    Also sends the calculated result back to the web page.
    */
        else {
    
            if (operation === '+'){
          //console.log(add(x, y));
                my_result = add(x, y);
                display_result.innerText = `Result--> ${my_result}`;
                return true;
            }

            if (operation === '-'){
          //console.log(subtract(x, y));
                my_result = subtract(x, y);
                display_result.innerText = `Result--> ${my_result}`;
                return true;
            }

            if (operation === '*'){
          //console.log(multiply(x, y));
                my_result = multiply(x, y);
                display_result.innerText = `Result--> ${my_result}`;
                return true;
            }

            if (operation === '/'){

            //case check to make sure can't divide by 0 or undefinded          
                if (x === 0 || y === 0){

                    display_result.innerText = "You can't divide like this";
                }
                else {
              //console.log(divide(x, y));
                    my_result = divide(x, y).toFixed(2);

                    display_result.innerText = `Result--> ${my_result}`;
                    return true;
                }
            }

        }
    }

    else {

        alert('ERROR, Too many decimals');
        //location.reload();
        console.log(check_x);
        console.log(check_y);

    }

}
