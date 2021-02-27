const cloneArray = require('./cloneArray');

test("properly clones array",()=>{
    const array = [1,2,3];
    //expect(cloneArray(array)).toBe(array);//*actually this test should fail as it's not equal (pass by value and reference equality concept) */
    expect(cloneArray(array)).toEqual(array);/*this will get passed*/
    expect(cloneArray(array)).toStrictEqual(array);/*this will get passed*/
    expect(cloneArray(array)).not.toBe(array);/*this will get passed*/
})