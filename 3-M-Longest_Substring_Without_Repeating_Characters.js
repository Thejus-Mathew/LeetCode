/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    // let maxLength = 0

    // for(let i=0;i<s.length;i++){
    //   for(let j=i;j<s.length;j++){
    //       let str = s.slice(i,j+1)
    //       if(maxLength>=str.length){
    //           continue
    //       }else{
    //           let set = new Set(str)
    //           if((str.length)!=([...set].length)){
    //               continue
    //           }else{
    //               maxLength =str.length
    //           }
    //       }
    //   }
    // }
    // return maxLength
    let maxLength = 0
    let left = 0
    let str = new Set()

    for (let right = 0; right< s.length; right++){
        while(str.has(s[right])){
            str.delete(s[left])
            left++
        }
        str.add(s[right])
        console.log(maxLength,[...str].join(''))
        maxLength = maxLength>(right-left+1)?maxLength:(right-left+1)
    }
    return maxLength

};

