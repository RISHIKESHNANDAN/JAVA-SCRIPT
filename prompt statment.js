/* Q1.Get user to input a number using prompt("enter a number:"). Check if the number is a multiple of 5 or not. 
let number = prompt("enter number:");
 if (number % 5 === 0) {
    console.log( number,"is a multiple of 5 ");
 }

 else {
    console.log(number," is not divisible by 5");
 }
  Write a code which can give grades to student according to their scores:
 * 80-100,A
 * 70-89, B
 * 60-69, C
 * 50-59, D
 * 0-49, F 

 let score = prompt("enter your score (0-100):");
 if (score >= 90 && score <= 100 ) {
    grade = "A"
 }
 else if (score >=70 && score <= 89 ) {
    grade = "B"
 }
 else if (score >= 60 && score <= 69 ) {
    grade = "c"
 }
console.log(score , "according to your score, your grade was : ", grade);*/