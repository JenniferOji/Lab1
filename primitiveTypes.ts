//boolean
let flag: boolean = true;
console.log("Value assigned to flag is: " + flag);

//string
let jname: string = "Jenny";
console.log("My name is: " + jname);

//number 
let age: number = 20;
console.log("My age is: " + age);

//arrays
let myArray: number[]= [1,2,3];
for(let i = 0; i <myArray.length; i++)
{
    console.log("The value at position " + (i + 1) + " is: " + myArray[i]);
}
let myArray2: Array<number> = [1,2,3];
myArray2.forEach((item)=>{
    console.log("The value of myArray2 is: " + item);
})

let myUnknown: any = "Unknown";
console.log

