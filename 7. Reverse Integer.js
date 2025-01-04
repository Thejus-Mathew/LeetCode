/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x==0){
        return 0
    }
    if(x<0){
        x *=-1
        while(x%10==0){
            x=x/10
        }
        return (x.toString().split('').reverse().join('')*-1)<(-1*(2**31))?0:(x.toString().split('').reverse().join('')*-1)
    }else{
        while(x%10==0){
            x=x/10
        }
        return (x.toString().split('').reverse().join('')*1)>((2**31)-1)?0:(x.toString().split('').reverse().join('')*1)
    }
};