function deepCompare (firsObject, secondObject){
    const firstObjectKeys = Object.getOwnPropertyNames(firsObject);
    const secondObjectKeys = Object.getOwnPropertyNames(secondObject);
    let resultArray = [];
    
    if(firstObjectKeys.length !== secondObjectKeys.length) {
        return false;
    }

    for(let i = 0; i < firstObjectKeys.length; i++) {
        propName = firstObjectKeys[i];
        if(firsObject[propName] === secondObject[propName]) {
            resultArray.push(true);
        } else {
            resultArray.push(false);
        }
    }

    return resultArray.every((el) => el === true);
}

const obj1 = {
    one: 1,
    two: '2'
};

const obj2 = {
    one: '1',
    two: 2
};

console.log(deepCompare(obj1, obj2));
