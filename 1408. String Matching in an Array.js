/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let n = words.length
    let arr = []
    for(let i =0; i<n; i++){
        for(let j=0; j<n; j++){
            if(i != j){
                if(words[j].includes(words[i])){
                    arr.push(words[i])
                    break
                }
            }
        }
    }
    return arr
};