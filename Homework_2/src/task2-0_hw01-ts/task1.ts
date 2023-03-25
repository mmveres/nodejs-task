// Write function, which takes two strings, and returns true if they are anagrams of one another.

function anagrams_ts(str1: string, str2: string): boolean {
    if (str1.length == str2.length) {
        let letters1 = str1.split('').sort();
        let letters2 = str2.split('').sort();
        for (let i = 0; i < str1.length; i++) {
            if (letters1[i] != letters2[i]) {
                return false;
            }
        }
        return true;
    }
    return false;
}

console.log(anagrams_ts("abc", "cba"))
console.log(anagrams_ts("abab", "baba"))
console.log(anagrams_ts("аббв", "бабв"))
console.log(anagrams_ts("111", "111"))
console.log(anagrams_ts("1234", "7654321"))
console.log(anagrams_ts("123", "325"))