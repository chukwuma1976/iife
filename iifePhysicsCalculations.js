export const physicsCalculations = (
    function () {

        //the below constants are private variables
        const g = 9.80665; //gravity constant in meters/second squared
        const c = 299792458; //speed of light in m/s

        //functions to be returned as methods in this module
        const velocity = (distance, time) => distance / time;
        const acceleration = (speed, time) => speed / time;
        const potentialEnergy = (mass, height) => mass * g * height;
        const momentum = (mass, speed) => mass * speed;
        const energy = (mass) => mass * (c ** 2);
        const force = (mass, acc) => mass * acc;
        const kineticEnergy = (mass, speed) => 0.5 * mass * (speed ** 2);

        //object containing named methods including two getter methods
        return {
            velocity,
            acceleration,
            potentialEnergy,
            momentum,
            energy,
            force,
            kineticEnergy,
            getSpeedOfLight: () => c,
            getGravityConstant: () => g
        }
    }
)();