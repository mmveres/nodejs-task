// Write the clone function so that it can clone deeply the object passed as a parameter.

function clone_ts(obj: any) {
    if (obj === null || typeof obj != 'object') {
        return obj;
    }

    let clonedObj: any = {};

    for (let key in obj) {
        clonedObj[key] = clone_ts(obj[key]);
    }
    return clonedObj;
}

function cloneV2_ts(obj: any) {
    return JSON.parse(JSON.stringify(obj));
}

const a = {
    "outerProp": 's',
    "inner": {
        "innerProp": 'k'
    }
}
const b = clone_ts(a)
const b2 = cloneV2_ts(a)
a["outerProp"] = "2"
a["inner"]["innerProp"] = "3"
console.log(a)
console.log(b)
console.log(b2)