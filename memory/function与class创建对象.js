// // 使用 function 构造函数定义对象构造函数
// function Person(name, age) {
//     // 在构造函数内部使用 this 关键字定义属性
//     this.name = name;
//     this.age = age;
  
//     // 在构造函数内部使用 this 关键字定义方法
//     this.greet = function() {
//       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     };
//   }
  
//   // 使用 new 运算符调用构造函数创建对象实例
//   const john = new Person('John', 30);
  
//   // 调用对象的方法
//   john.greet(); // 输出: "Hello, my name is John and I am 30 years old."


  // 使用 class 关键字定义类
class Person {
    constructor(name, age) {
      // 使用 constructor 定义构造函数，在其中使用 this 关键字定义属性
      this.name = name;
      this.age = age;
    }
  
    // 在类的内部定义方法
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // 使用 new 运算符调用类创建对象实例
  const john = new Person('John', 30);
  
  // 调用对象的方法
  john.greet(); // 输出: "Hello, my name is John and I am 30 years old."
  
  
以下这两个构造函数是一样的吗？


  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name);
  };
  
  const person = new Person("Alice", 25);
  



function Person(name, age) {
    this.name = name;
    this.age = age;

    this.greet = function(){
        console.log("Hello, my name is " + this.name);
    }
  }

  
  const person = new Person("Alice", 25);
  

  