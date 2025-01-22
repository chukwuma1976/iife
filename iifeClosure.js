const areaOfCircle = (
    function () {
        const pi = Math.PI
        return (radius) => pi * (radius ** 2);
    }
)();

const areaWithRadius2 = areaOfCircle(2);
const areaWithRadius3 = areaOfCircle(3);

console.log('Area of a circle with a radius of 2 is ', areaWithRadius2);
console.log('Area of a circle with a radius of 3 is ', areaWithRadius3);