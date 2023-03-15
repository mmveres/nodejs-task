// Write function, which takes two strings, and returns true if they are anagrams of one another.

function anagrams(str1, str2) {
    if (str1.length == str2.length) {
        for (let i1 = 0, i2 = str2.length - 1; i1 < str1.length; i1++, i2--) {
            if (str1[i1] != str2[i2]) {
                return false;
            }
        }
        return true;
    }
    return false;
}

console.log(anagrams("abc", "cba"))
console.log(anagrams("1234567", "7654321"))
console.log(anagrams("111", "111"))
console.log(anagrams("1234", "7654321"))
console.log(anagrams("123", "325"))