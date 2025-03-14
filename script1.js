// Method 1: Using alert() function
alert("Hello, World!");
// Method 2: Using document.write() function
document.write("Hello, World! <br>");
// Method 3: Using console.log() function
console.log("Hello, World!");
// Method 4: Using innerHTML property
let output = document.getElementById("output");
output.innerHTML = "Hello, World!";
// Method 5: Using prompt() function
let name = prompt("What is your name?");
document.write("Hello, " + name + "!");
// Method 6: Using confirm() function
let response = confirm("Are you sure?");
if (response) {
 document.write("You clicked OK!");
} else {
 document.write("You clicked Cancel!");
}