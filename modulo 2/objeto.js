let  testObj  =  {
	nr:  600,
	str:  "text"
};

console.log(testObj);
console.log(testObj.nr);
console.log(testObj.str);

// O objeto no JS é o dicionário do python

let  user1  =  {
         name:  "Calvin",
         surname:  "Hart",
         age:  66,
         email:  "CalvinMHart@teleworm.us"
};
   
let  user2  =  {
         name:  "Mateus",
         surname:  "Pinto",
         age:  21,
         email:  "MateusPinto@dayrep.com"
};

console.log(user1.name);  //  ->  Calvin
console.log(user2.name);  //  ->  Mateus
   
console.log(user1.age);  //  ->  66
user1.age  =  67;
console.log(user1.age);  //  ->  67
   
console.log(user2.phone);  //  ->  undefined
user2.phone  =  "904-399-7557";
console.log(user2.phone);  //  ->  904-399-7557

console.log(user2.phone);  //  ->  904-399-7557=
delete  user2.phone;
console.log(user2.phone);  //  ->  undefined

// Objetos podem ser deletados

let ms = "agua";

console.log(ms.length)

let summer = ["june",  "july", "august"];

summer[1] = 7;

console.log(summer)