/* give the same file name to test a respective js file */

const subtract = require('./subtract');

/*general syntax to test a code*/
test("properly subtracts two numbers",()=>{
    /*expect method expects the functional inputs and there are so many methods in jest similar to that*/
    expect(
        subtract(1,2)
        )
        .toBe(-1);
})