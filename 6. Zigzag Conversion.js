/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows==1){
        return s
    }
    let str =""
    for(let j=0;j<numRows;j++){
        for(let i=0;i<s.length;i++){
            if(i%((numRows-1)*2)==j || i%((numRows-1)*2)==(2*numRows)-2-j){
                console.log(s[i])
                str+=s[i]
            }
        }
    }
    return str
};