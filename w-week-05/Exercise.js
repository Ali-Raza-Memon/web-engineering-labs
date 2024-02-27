// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
// Task-01
function reverseArray(arr){
    let reversedArray = [];
    
    for(let i=arr.length-1; i>=0; i--){
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}


console.log(reverseArray([1,2,3]));


// Task-02


// car object
let car = {
    brand:"Toyota",
    model:"Camry",
    year:"2022"
}

//car info function
function carInfo(carObj){
    
    // taking car object value
    const {brand,model,year} = carObj;
    
    //now changing it to the literal string
    const carInfomation = `The ${brand} ${model} was manufactured in ${year}.`;
    
    return carInfomation;
    
}

console.log(carInfo(car))



// Task-03

function applyFunction(arr,func){
    return arr.map(func);
}


let multiplyByTwo= x => x*2;
let numbers = [1,2,3];

console.log(applyFunction(numbers,multiplyByTwo))