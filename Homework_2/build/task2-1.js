"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const array = ["one", "two", "three"];
const results = await runSequentially(array, (item, index) => Promise.resolve({
    item,
    index,
}));
function runSequentially(array, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const results = [];
        for (let i = 0; i < array.length; i++) {
            const result = yield callback(array[i], i);
            results.push(result);
        }
        return results;
    });
}
console.log(results);
