//Global scope
const value = "This variable is in global scope and is called 'value'.";
const stateLocation = () => console.log("Now in global scope");

stateLocation();
console.log(value);
console.log("*********************************************************");

(
    function () {
        //Function scope
        const value = "This variable is in function scope and avoids global pollution even though the variable name 'value' is reused";
        const stateLocation = () => console.log("Now in function scope of IIFE");

        stateLocation();
        console.log(value);
    }
)();