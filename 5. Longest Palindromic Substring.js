/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // for(let i=0; i<s.length; i++){
    //     for(let j=0; j<=i; j++){
    //         let str = s.slice(j,j+s.length-i)
    //         if(str == str.split('').reverse().join('')){
    //             return str
    //         }
    //     }
    // }
    if(s.length<2){
        return s
    }

    let length = 0
    let palindrome = s[0]
    const check = (left,right) => {
        while(left>=0 && right<s.length && s[left]==s[right]){
            if(right-left>length){
                length = right - left
                palindrome = s.slice(left,right+1)
            }
            left --
            right ++
        }
    }

    for(let i =0; i<s.length; i++){
        check(i,i)
        check(i,i+1)
    }
    console.log(length,palindrome)
    return palindrome
};