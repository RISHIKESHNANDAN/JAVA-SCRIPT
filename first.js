//Arithmetic Operators
let a = 46;
let b = 23;

console.log(" a = " , a);
console.log(" b = " , b);
console.log(" a + b = " , a + b);
console.log(" a - b = " , a - b);
console.log(" a * b = " , a * b);
console.log(" a / b = " , a / b);
console.log(" a % b = " , a % b);
console.log(" a ** b = " , a ** b);
//Unary operater
console.log(" a++ ", a++);
console.log( a );
console.log(" a-- " , a--);
console.log( a-- )

//Assingment operator
let c = 26;
let d = 23;

c += 4;
console.log(" c = ",c);
c -= 6;
console.log(" c = " ,c );

//Comparison Operator
console.log(" a == b " , a == b );
console.log(" a !== b " , a !== b );
console.log(" a <= b " , a <= b);

//Logical operators

//Conditional statements
//if statement

let age = 18 ;
  
 if (age >= 18) {
    console.log("you can vote");
  }

  if (age < 18) {
    console.log(" you cannot vote ");
  }


  let mode = " white " ;
   let colour ;

   if ( mode === "dark") {
     colour = "black" ;
   }

   if ( mode === " white ") {
    colour = "blue" ;
   }

   console.log(colour);
   //if-else statement
  let num = 10 ;
   
   if ( num%2 === 0 ) {
    console.log("even" , num);
   } else {
    console.llog("odd", num);
   }

