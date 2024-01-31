//boolean
var flag = true;
console.log("Value assigned to flag is: " + flag);
//string
var jname = "Jenny";
console.log("My name is: " + jname);
//number 
var age = 20;
console.log("My age is: " + age);
//arrays
var myArray = [1, 2, 3];
for (var i = 0; i < myArray.length; i++) {
    console.log("The value at position " + (i + 1) + " is: " + myArray[i]);
}
var myArray2 = [1, 2, 3];
myArray2.forEach(function (item) {
    console.log("The value of myArray2 is: " + item);
});
var myUnknown = "Unknown";
console.log;
