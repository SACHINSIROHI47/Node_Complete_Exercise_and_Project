const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

//java script variable 
//variable is the memory container to hold values
var age=25;
console.log("Age is ",age);
var age=26;
console.log("Age is ",age);

//let  we can not declare variabl multiple time
let name;
name='James';
console.log("Name is ",name);

// const  we can not declare variabl multiple time, required value at declaration time
//combination of let and var
const address="Meerut";
console.log("Address is ",address);


var marks='60';

console.log("Type of integer- ",typeof(marks))
console.log("Check or Compare values ",marks==60)
console.log("Check or Compare values and data type ",marks===60)

//Data Type 
// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

console.log("F Name ",person.firstName)
// Array object:
const cars = ["Saab", "Volvo", "BMW"];

console.log("Car Name is- ",cars[0])
// Date object:
const date = new Date("2022-03-25");

//-----------JavaScript Functions
//A JavaScript function is a block of code designed to perform a particular task.

function myFunction(p1, p2) {
    console.log("Multiply is ", p1 * p2);
  }
myFunction(50,5)

//return value to calling function
function myFunction(p1, p2) {
    return p1 * p2;
  }
console.log("Function Calling Return ",myFunction(5,5))

//----------object
const person2 = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

console.log("Person Name ",person2.firstName)
console.log("Person Full Name ",person2.fullName())

//index and Search
let text2 = "Please locate where 'locate' is occurs!";
let index2 = text2.indexOf("locate");
console.log(index2);

let index3 = text2.lastIndexOf("locate");
console.log(index3);


let text = "Please locate where 'locate' occurs!";
console.log(text.search("locate"));

let text4 = "The rain in SPAIN stays mainly in the plain";
console.log(text4.match(/ain/g));


//Array
const car = [];
car[0]= "Saab";
car[1]= "Volvo";
car[2]= "BMW";
console.log(car[1])

const carss = new Array("Saab", "Volvo", "BMW");
console.log(carss[1]);
console.log(carss.length)
console.log(carss.sort())

//if else
var time=5;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting);

//vowels
const vow='i';
switch(vow)
{
  case 'a':
    console.log("Vowels is "+vow);
    break;
  case 'e':
      console.log("Vowels is "+vow);
      break;
  case 'i':
      console.log("Vowels is "+vow);
        break;
  case 'o':
      console.log("Vowels is "+vow);
        break;
  case 'u':
      console.log("Vowels is "+vow);
          break;
  default:
      console.log("Consonent");
  
}

//for loop
for(var i=1;i<=5;i++)
{
  console.log("For Loop");
}
const persons = ["John","Doe","James"];

for(var i=0;i<persons.length;i++)
{
  console.log(persons[i]);
}
//
console.log("--------In---------------");

//in show index value
for (let x in persons) {
  console.log(persons[x]);
}
console.log("--------of---------------");
//of show value loop
const cars3 = ["BMW", "Volvo", "Mini"];

for (let x of cars3) {
  console.log(x);
}

//while loop
var i=5
while (i < 10) {
 console.log("While loop "+i);
 i++;
}

//do while 
var i=50;
do{
  console.log("do While loop "+i);
  i++;
}
while (i < 10) ;

//break use for exit the loop
for(var i=1;i<=5;i++)
{
  if(i==3)
  {
     break;
  } 
  console.log("For Loop with break "+i);
}
//skip the loop
for(var i=1;i<=5;i++)
{
  if(i==3)
  {
     continue;
  } 
  console.log("For Loop with continue "+i);
}
//set show only unique 
const letters = new Set(["a","b","c","c"]);
console.log(letters);
letters.add(50);
console.log(letters);
letters.delete('a');
console.log(letters);

//The forEach() method invokes (calls) a function for each Set element:
letters.forEach (function(value) {
  console.log(value);
})

//A Map holds key-value pairs where the keys can be any datatype.
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
  ["oranges", 600]
]);
console.log(fruits);
console.log(fruits.keys());
console.log(fruits.values());
console.log(fruits.get('apples'));
console.log(fruits.delete('apples'));
console.log(fruits);

//----------object with class
const person3 = {
  firstName: "John",
  lastName : "Doe",
  firstName: "Anil",
};
console.log(person3);

//A regular expression is a sequence of characters that forms a search pattern.
let t = "Visit Schools!";
let n = t.search("Schools");
console.log(n);

//Throw, and Try...Catch...Finally
let num = 1;
try {
    num.toUpperCase();  
}catch(err){
  console.log("Exceptions "+err.message);
}
finally
{
  console.log("Finally Executed Successfully..");
}

//class is the blueprint for object 
//constructor use to initilize the member variable of class
//constructor automatically load when you creat the object of class

//What is this?
//In JavaScript, the this keyword refers to an object.

class Car {
   constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  display3()
  {
    console.log(this.name);
    console.log(this.year);
  }
 };
 //new allocate memory to object
 //object is an instance of class 
var obj1=new Car("Ford", 2014);
obj1.display3();

var obj2=new Car("Tata", 2015);
obj2.display3();

//calculator program using class
class calculator
{
   addition(a,b)
   {
    return a+b;
   }
   Multiply(a,b)
   {
    return a*b;
   }
};
var ob1=new calculator();
console.log("Addition is ",ob1.addition(50,60));
console.log("Mulitply is ",ob1.Multiply(5,6));


//Self-Invoking Functions
(function disp()
{
  console.log("Display ");
})();


//Function Rest Parameter
//The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
function total(...a)
{
  console.log("Total is ",a);
  let sum=0;
  for (let x in a)
  {
    // console.log(a[x]);
    sum=sum+a[x];
  }
  console.log("Total is ",sum);   

}
total(10,50,80,60);

//------
let data=new Array([100,500,800]); 
var tot=0;
data.forEach (function(value) {
  console.log(value);
});


//JavaScript Function call() and apply()
//simple functions
const person4 = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
// This will return "John Doe":
person4.fullName();  

//call function 
//pass function inside a function
const person5 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const pers2 = {
  firstName:"Anita",
  lastName: "Singh"
}


// This will return "John Doe":
console.log(person5.fullName.call(person1));
console.log(person5.fullName.call(pers2));


// The Constructor Method
// The constructor method is a special method:

// It has to have the exact name "constructor"
// It is executed automatically when a new object is created
// It is used to initialize object properties

// class ClassName {
//   constructor(a,b) 
//   {
//    this.num1=a;
//    this.num2=b;
//   }
//   method_1() 
//   {
//     console.log("Message One",this.num1+this.num2);
//    }
//    method_2() 
//    {
//      console.log("Message Two",this.num1-this.num2);
//     }
//     method_3() 
//   {
//     console.log("Message Three",this.num1*this.num2);
//    }
// };
// obj1=new ClassName(100,300);
// obj1.method_3();
// obj1.method_1();
// obj1.method_2();


// // Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.
// // To create a class inheritance, use the extends keyword.

// // A class created with a class inheritance inherits all the methods from another class:

// class A
// {
//   disp1()
//   {
//     console.log("Base/super/parent Class");
//   }
// };
// class b extends A
// {
//   disp2()
//   {
//     console.log("Class Child/Sub/Derived/inherited")
//   }
// };
// obj2=new b();
// obj2.disp1();
// obj2.disp2();

// //The super() method refers to the parent class.

// // By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's 
// // properties and methods.

// //class, constructor, object, method, constructor overriding, method overriding, inheritance
// class A1
// {
//   constructor(brand)
//   {
//     this.name=brand;
//   }
//   disp1()
//   {
//     console.log("Brand Name ",this.name);
//   }
// };
// class b1 extends A1
// {
//   constructor(brand,model)
//   {
//     super(brand);  //constructor overriding
//     this.mod=model;
//   }
//   disp2()
//   {
//     super.disp1();  //method overriding
//     console.log('Model Name ',this.mod);
//   }
// };
// obj3=new b1('Tata',2024);
// obj3.disp2();


// //get and set
// // Getters and Setters
// // Classes also allows you to use getters and setters.

// // It can be smart to use getters and setters for your properties, especially if you want to do something special with the value before returning them, or before you set them.

// // To add getters and setters in the class, use the get and set keywords.

// // JavaScript Setter
// // In JavaScript, setter methods are used to change the values of an object

// class Cars {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   get cnam() {
//     return this.carname;
//   }
//   set cnam(x) {
//     this.carname = x;
//   }
// }

// const myCar = new Cars("Ford");
// console.log(myCar.carname);
// myCar.carname='Maruti';
// console.log(myCar.carname);

// //Static class methods are defined on the class itself.
// //You cannot call a static method on an object, only on an object class.
// //static method only call by class
// class Car5 {
//   constructor(name) {
//     this.name = name;
//   }
//   static hello() {
//     return "Hello!!";
//   }
// }

// const myCar5 = new Car5("Ford");
// console.log(Car5.hello());

// //-----------Asyncronus Functions-----------------
// // A callback is a function passed as an argument to another function
// // This technique allows a function to call another function
// // A callback function can run after another function has finished

// function myDisplayer(some) {
//   console.log("MyDisplayer ",some);
// }

// function myFirst() {
//   myDisplayer("Hello");
// }

// function mySecond() {
//   myDisplayer("Goodbye");
// }
// myFirst();
// mySecond();

// // Sequence Control
// // Sometimes you would like to have better control over when to execute a function.
// function myDisplayer2(some) {
//   console.log(some);
// }

// function myCalculator2(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }

// let result = myCalculator2(5, 5);
// myDisplayer2(result);

// //javascript callback function, a function pass to another function as parameter
// console.log('.............');

// function myDisplayer(some) {
//   console.log("Call after 2",some);
// }

// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2; 
//   console.log("First Functions ");   
//   myCallback(sum);
// }

// myCalculator(50, 60, myDisplayer);

// //Functions running in parallel with other functions are called asynchronous


// //setTimeout(myFunction3, 3000);

// function myFunction3() {
//   console.log("Hello function");
// }

// //normal and arrow function
// function display1(a,b)
// {
//   console.log("Display One", a+b);
// }
// display1(11,22);

// //second method
// var display2=function(a,b)
// {
//   console.log("Display Two ",a+b);
// }
// display2(22,22);

// //third method arrow
// var display3=(a,b)=> console.log("Display Arrow three ",a+b);
// display2(34,22);

// //asynchronous Functions
// function adisp1(callback2)
// {
//   console.log("Function One ");
//    setTimeout(function(){callback2()},1000);
//   console.log("Function Three ");
// }
// function function2callback()
// {
//   console.log("Function 2 Callback");
// }

// adisp1(function2callback);

// //promise
// const promise=new Promise((resolve,reject)=>
// {  
//   let x=0;
// setTimeout(()=>
// {
//   if (x==0)
//   {
//     resolve("Promise was resolved");
//   }
//   else
//   {
//     reject("Promise was reject");
//   }
   
// },);

// },1000);

promise.then((resolve)=>{console.log(resolve);},
            (reject)=>{console.log(reject);})
.catch("Erorr",console.error())
.finally(console.log("Thankyou"));


//promise second example
function results() {
  return new Promise((resolve, reject) => {
    let marks=60;
    if ( marks> 50) {
      resolve('Student is Pass');
    } else {
      reject(new Error('Student is Failed'));
    }
  });
}

results()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log('Experiment completed');
  });

//---------async await work sequentially
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function myGeeks() {
    console.log("Waiting 2 seconds...");
    await delay(2000);
    console.log("Function executed after 2 seconds");
    await delay(3000);
    console.log("3 Second Delays")
}

myGeeks();

app.listen(3000)