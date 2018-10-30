const assert = require('assert');
const { repeatCharacters,createLine,joinLines,rightJustify,centerJustify} = require('../src/util.js');

assert.deepEqual(repeatCharacters(1,'*'),'*');
assert.deepEqual(repeatCharacters(2,'*'),'**');
assert.deepEqual(repeatCharacters(3,'*'),'***');


assert.deepEqual(createLine(3,'*','*','*'),'***');
assert.deepEqual(createLine(3,'*',' ','*'),'* *');
assert.deepEqual(createLine(3,' ',' ',' '),'   ');
assert.deepEqual(createLine(4,'*',' ','*'),'*  *');
assert.deepEqual(createLine(5,'*','-','*'),'*---*');


assert.deepEqual(rightJustify('a',4),'   a');
assert.deepEqual(rightJustify('a',3),'  a');

assert.deepEqual(centerJustify('a',4),' a ');

assert.deepEqual(joinLines('one','two','\n'),'one\ntwo');
