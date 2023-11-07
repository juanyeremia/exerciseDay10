//1. GoFood

class GoFood {
    constructor (name,price,qty) {
        this.name = name;
        this.pricee = price;
        this.qty = qty;
    }
}

class Transaction {
    total = 0;
    products = [];

    addFood(food,qty,price) {
       
    }
}

//2. Loop
let result = "",
    height =4;

for (let i=0;i<height;i++) {
  result += "*";
  console.log(result)
}

//----------------------
console.log("----------------------------")
let starter ="",
    result2 = "";
//substr(start index,amount of char to extract)
//1st loop
for (let i=0;i<height;i++) {
  starter += "*";
}
console.log(starter)

for (let j=0;j<height;j++) {
  result2 = starter.substr(j,height-(j+1));
  console.log(result2);
}

//----------------------
console.log("----------------------------")

let starter3="",
    space = " ",
    result3 = "";
    
const decreRightTri = (height) => {
  for (let i=0;i<height;i++) {
      starter3 += "*";
  }
  console.log(starter3);
  
for (let j=0;j<height;j++) {
  result2 = space + starter.substr(j,height-(j+1));
  space += " ";
  console.log(result2);
}
} 

decreRightTri(4)

//----------------------
console.log("----------------------------")
let starter4 = "",
    star = "*",
    result4 = "";
    
for (let i=0;i<height-1;i++) {
  starter4 += " ";
}
  console.log(starter4);
  
for (let j=0;j<height;j++) {
  result4 = starter4.substr(j,height-(j+1))+star;
  star += "*"
  console.log(result4)
}

