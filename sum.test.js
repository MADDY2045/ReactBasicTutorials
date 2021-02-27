/* give the same file name to test a respective js file */

const sum = require('./sum');

/*general syntax to test a code*/
test("properly adds two numbers",()=>{
    /*expect method expects the functional inputs and there are so many methods in jest similar to that*/
    expect(
        sum(1,2)
        )
        .toBe(3);
})