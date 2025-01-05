/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if(s==p){
        return true
    }
    s=s.split('')
    p=p.split('')
    for(let i=0; i<s.length; i++){
        if(p[i]==s[i]){
            
        }else if(p[i]=="." && p[i+1]!="*"){
            p.splice(i,1,s[i])
        }else if(p[i]=="*" && p[i-1]==s[i]){
            p.splice(i,1,s[i])
        }else if(p[i]=="."){
            if(p.length>s.length+1){
                p.splice(i,2)
            }else{
                p.splice(i,0,s[i])
                if(p.length>s.length+1){
                    p.splice(i+1,2)
                }
            }
        }else if(p[i+1]=="*"){
            p.splice(i,2)
        }
        console.log(p)
    }
    console.log(p)
    if(p.join('')==s.join('')){
        return true
    }else{
        return false
    }
};