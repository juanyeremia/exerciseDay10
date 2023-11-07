console.log("1. Convert excel columns")
const input = "",
        nExtra = 5;
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const extra = [];

for (let j=0;j<=nExtra;j++) {
    for (let k=j;k<=nExtra;k++) {
extra.push(alphabet[j]+alphabet[k])
    }
}

console.log(extra)
/*for (let i=0;i<alphabet.length-1;i++) {
    alphabet[i] === input &&  ?  :  ;
}*/


console.log("--------------------------------------------------------------------------------")


console.log("2. Find single occurance")
let array2 = [2,2,1,4,4,3,5,3,1],
    single = [];

    array2.sort((a,b) => a-b)
    for (let i=0;i<array2.length;i++) {
        if (array2[i-1] !== array2[i] && array2[i] !== array2[i+1]) {
            single.push(array2[i])
        } 
        
    }
    console.log(single)
    console.log("--------------------------------------------------------------------------------")
    console.log("3. Anagram")
    
    let word31 = "",
        array31 = word31.split(""),
        word32 = "",
        array32 = word32.split("");
    
    const isAnagram = (word1, word2) => {
        let array1 = word1.toLowerCase().split("").sort().join("");
        let array2 = word2.toLowerCase().split("").sort().join("");

        if (array1 == array2) {
            console.log(`TRUE! ${word1} & ${word2} are anagrams of each other.`)
        } else {
            console.log(`FALSE! ${word1} & ${word2} are not anagrams of each other.`)
        }
    }
    isAnagram("JACOB","jacob");
 

console.log("--------------------------------------------------------------------------------")

console.log("4. Steps combo")

let steps = 4,
    array5 = [];

    for (let i=0;i<steps;i++) {
        array5.push(1);
    }
    console.log(array5)
    console.log(`- ${steps} steps`)
//[ 1, 1, 1, 1 ]
//Combinations
let result51 = 0,
    textResult = "",
    result52 = 0;

    for (let i=1;i<array5.length;i++) {
        for (let j=array5.length-1;j>array5[i];j--) {
            result51 += array5[i];
            result52 += array5[j];
            textResult = `${result51} step(s) + ${result52} step(s)`
            console.log(textResult)
        }
    }


