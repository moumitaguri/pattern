const assert = require('assert');
const lib = require('../src/library.js');
let {createLeftTriangle, createRightTriangle, createFilledRectangle, createHollowRectangle, createFilledDiamond, createHollowDiamond, createAngled } = lib;
assert.deepEqual(createLeftTriangle(1),'*');
assert.deepEqual(createLeftTriangle(2),'*\n**');
assert.deepEqual(createLeftTriangle(4),'*\n**\n***\n****');


assert.deepEqual(createRightTriangle(1),'*');
assert.deepEqual(createRightTriangle(2),' *\n**');
assert.deepEqual(createRightTriangle(3),'  *\n **\n***');
assert.deepEqual(createRightTriangle(4),'   *\n  **\n ***\n****');



assert.deepEqual(createFilledRectangle(1,1),'*');
assert.deepEqual(createFilledRectangle(2,2),'**\n**');
assert.deepEqual(createFilledRectangle(2,1),'**');
assert.deepEqual(createFilledRectangle(1,2),'*\n*');
assert.deepEqual(createFilledRectangle(3,4),'***\n***\n***\n***');
assert.deepEqual(createFilledRectangle(4,3),'****\n****\n****');


assert.deepEqual(createHollowRectangle(1,1),'*');
assert.deepEqual(createHollowRectangle(2,2),'**\n**');
assert.deepEqual(createHollowRectangle(3,3),'***\n* *\n***');
assert.deepEqual(createHollowRectangle(4,3),'****\n*  *\n****');



assert.deepEqual(createFilledDiamond(5),'  *  \n *** \n*****\n *** \n  *  ');
assert.deepEqual(createHollowDiamond(5),'  *  \n * * \n*   *\n * * \n  *  ');
assert.deepEqual(createAngled(5),'  *  \n / \\ \n*   *\n \\ / \n  *  ');
