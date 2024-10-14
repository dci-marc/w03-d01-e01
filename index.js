const nickname = "Infamous John";
const city = "Berlin";
const favoriteNumber = 42;
console.log(`Name: ${nickname}`);
console.log(`City: ${city}`);
console.log(`Favorite Number: ${favoriteNumber}`);

const stringLength = "Java is different than JavaScript";
console.log(`String length is: ${stringLength.length}`);
console.log(`String to upper case is: ${stringLength.toUpperCase()}`);
console.log(`String slice is: ${stringLength.slice(23)}`);
console.log(`String includes is: ${stringLength.includes("JavaScript")}`);

const myNumber = 10;
if (myNumber >= 0) {
    console.log("My number (10) is greater/equal than 0.");
}

if (myNumber%2 === 0) {
    console.log("My number (10) is even.");
}

const num1 = 5;
const num2 = 10;
const num3 = 8;
if (num2 >= num1 && num2 >= num3) {
  console.log("My number (10, in addition to 5 & 8) is the largest number.");
}