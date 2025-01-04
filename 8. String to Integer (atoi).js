/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let str = ""
    let start = true
    let zeroLead = true
    let negative = false
    for(let i = 0; i<s.length; i++){
        if(s.charCodeAt(i)>=49 && s.charCodeAt(i)<=57){
            start = false
            zeroLead = false
            str+=s[i]
        }else if(s.charCodeAt(i)==48){
            start = false
            if(zeroLead){
                continue
            }else{
                str+=s[i]
            }
        }else if(start && s.charCodeAt(i)==32){
            continue
        }else if(start && s.charCodeAt(i)==45){
            start = false
            negative = true
        }else if(start && s.charCodeAt(i)==43){
            start = false
        }else{
            break
        }
    }
    if(str == ""){
        return 0
    }else{
        if(negative){
            return str*(-1)<(-1*(2**31))?(-1*(2**31)):str*(-1)
        }else{
            return Number(str)>((2**31)-1)?((2**31)-1):Number(str)
        }
    }
};