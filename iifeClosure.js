const areaOfCircle = (
    function () {
        const pi = Math.PI //private variable
        return function (radius) { //closure with access to outer scope private variable
            return pi * (radius ** 2)
        }
    }
)();

const areaWithRadius2 = areaOfCircle(10);
console.log('Area of a circle with a radius of 10 is ', areaWithRadius2);
// console.log('PI = ', pi); //ReferenceError: pi is not defined