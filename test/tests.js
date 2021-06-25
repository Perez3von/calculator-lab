// IMPORT MODULES under test here:
// import { add } from '../calculator.js';

import { add, subtract, multiply, divide } from '../calculations.js';




const test = QUnit.test;


// name your test by what it is testing
test('test adding', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected_status = 8;
    
    //Act 
    // Call the function you're testing and set the result to a const
    
    const actual_data = add(5, 3); // use your function here
   
    
    const actual_status = actual_data;
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual_status, expected_status);
    
});

test('test subtracting', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected_status = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    
    const actual_data = subtract(5, 3); // use your function here
   
    
    const actual_status = actual_data;
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual_status, expected_status);
    
});

test('test multiply', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected_status = 15;
    
    //Act 
    // Call the function you're testing and set the result to a const
    
    const actual_data = multiply(5, 3); // use your function here
   
    
    const actual_status = actual_data;
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual_status, expected_status);
    
});


test('test dividing', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected_status = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    
    const actual_data = divide(6, 3); // use your function here
   
    
    const actual_status = actual_data;
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual_status, expected_status);
    
});
