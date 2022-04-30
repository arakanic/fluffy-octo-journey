/*
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example: 1.08 --> 30

Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
*/

function roachSpeed(s) {
    // kmph -> cmps
    const CM_IN_KM = 100 * 1000
    const S_IN_HOURS = 60 * 60
    return Math.floor(s * CM_IN_KM / S_IN_HOURS)
}