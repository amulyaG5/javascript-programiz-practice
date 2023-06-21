const string = "mom"


let totalString = string.split('').reverse().join('')

if (string == totalString) {
    console.log("print as Palindrome");
}
else {
    console.log("print as not Palindrome")
}