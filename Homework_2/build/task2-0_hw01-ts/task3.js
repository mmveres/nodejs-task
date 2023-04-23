"use strict";
// Write a function-wrapper, that will cache the result of any other function.
//    Look at the example of use case in pseudocode:
// ```js
//    const add = (a, b) => a + b;
//    const wrapper = (args) => {
//      // implementation
//    };
//    const cachedAdd = wrapper(add);
//    cachedAdd(2, 2); // 4 calculated
//    cachedAdd(5, 8); // 13 calculated
//    cachedAdd(2, 2); // 4 from cache
//    ```
const wrapper_ts = (f) => {
    const cacheDict = {};
    return (...args) => {
        const key = JSON.stringify(args);
        if (key in cacheDict) {
            console.log(`cached ${cacheDict[key]}`);
            return cacheDict[key];
        }
        else {
            const res = f(...args);
            cacheDict[key] = res;
            console.log(`calculated ${res}`);
            return res;
        }
    };
};
const add = (a, b) => a + b;
const cachedAdd = wrapper_ts(add);
cachedAdd(2, 2); // calculated: 4
cachedAdd(5, 8); // calculated: 13
cachedAdd(2, 2); // cached: 4
