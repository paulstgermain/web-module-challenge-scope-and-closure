const createBase = (num) => {
    return function(num2) {
        return num + num2;
    }
}



const addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

const addTen = createBase(10);
console.log(addTen(10)); // returns 20
console.log(addTen(45)); //returns 55