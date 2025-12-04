let obj1={
    name : "akhilesh",
    age : 18,
    department : "artificial intelligence and machine learning",
    marks : {
        maths: 90,
        physics: 85,
        chemistry: 88
    }
}

let obj2={...obj1};
obj2.name="rahul";
obj2.age=19;
obj2.marks.maths=95;
console.log(obj1);
console.log(obj2);