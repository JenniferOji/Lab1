//Create a function which accepts a string parameter, and returns a count of the
//number of characters in that string. For example, if the string provided as an input
//is “test 1” then the count returned is 6.
function count_with_spaces(value) {
    //or 
    //let count = value.lenght
    //return count
    return value.length;
}
var count = count_with_spaces("test 1");
console.log("Count with spaces included is: " + count);
//Create a function which accepts a string parameter, and returns a count of the
//number of characters in that string, excluding spaces at the beginning and the end.
//For example, if the string provided as an input is “ test 1 ” then the count returned
//is 6.
function count_without_spaces(value) {
    return value.replace(" ", "").length;
}
//let count2 = count_without_spaces("  test 1  ");
console.log("Count without spaces is " + count_without_spaces(" test 1"));
function count_with_both(value, spaces) {
    var count = 0;
    if (spaces) {
        count = value.length;
    }
    else {
        count = value.replace(" ", "").length;
    }
    return count;
}
console.log(count_with_both("test 1", true));
console.log(count_with_both("test 1", false));
