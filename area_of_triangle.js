// area = (base * height) / 2


// let base = 4
// let height = 6
// let areaOfTraingle = (base * height) / 2
// console.log(areaOfTraingle);


// If you know all the sides of a triangle, you can find the area using Herons' formula. If a, b and c are the three sides of a triangle, then

// s = (a+b+c)/2
// area = √(s(s-a)*(s-b)*(s-c))

let a = 3
let b = 4
let c = 5

let s = (a + b + c) / 2

let area = Math.sqrt(
    s *
    (s - a) *
    (s - b) *
    (s - c)
);

console.log(area)