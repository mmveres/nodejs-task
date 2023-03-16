// Write the clone function so that it can clone deeply the object passed as a parameter.

// class Car {
//     constructor(brand, model) {
//         // initialization
//         this.brand = brand;
//         this.model = model;
//     }
//     equals(car) {
//         if (this == car) return true;
//         if (typeof this != typeof car) return false;
//         return this.brand === car.brand && this.model === car.model;
//         return false;
//     }
//     static compare(car1, car2) {
//         return car1.brand === car2.brand && car1.model === car2.model;
//     }
//     static clone(car) {
//         return new Car(car.brand, car.model);
//     }

// }


// let audiA4 = new Car('Audi', 'A4');
// let audiClone = Car.clone(audiA4);

// // reference different, content equals
// console.log(audiA4 == audiClone)
// console.log(Car.compare(audiA4, audiClone));
// console.log(audiA4.equals(audiClone));

// console.log(audiA4)
// console.log(audiClone)


function clone(obj) {
    if (obj === null || typeof obj != 'object') {
        return obj;
    }

    let clonedObj = {};

    for (let key in obj) {
        clonedObj[key] = clone(obj[key]);
    }
    return clonedObj;
}

function cloneV2(obj) {
    return JSON.parse(JSON.stringify(obj));
}

const a = {
    "outerProp": 's',
    "inner": {
        "innerProp": 'k'
    }
}
const b = clone(a)
const b2 = cloneV2(a)
a["outerProp"] = "2"
a["inner"]["innerProp"] = "3"
console.log(a)
console.log(b)
console.log(b2)