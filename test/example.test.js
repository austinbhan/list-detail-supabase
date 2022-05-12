// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

test('Vegetable Function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div id="carrot"><a href="./vegetable-page/?id=1"><img src="./assets/carrot.jpg" class="size"><p>Say hi to carrot. They're Orange and cost $1.</p></a></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = expected;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
