// Challenge 1 - convert light speed from meter/second to cm/nanosecond
c = 299792458; // Speed of light meter per second

// Since 1 meter = 100 centimeter
// and 1 second = 1000000000 nano seconds

// speed of light in terms of centimeter per nano second
c_new = (c * 100) / 1000000000;
console.log(c_new);
