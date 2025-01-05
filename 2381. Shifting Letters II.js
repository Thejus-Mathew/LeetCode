/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
    // s=s.split('')
    // for(let i =0; i<shifts.length; i++){
    //     if(shifts[i][2]==0){
    //         for(let j=shifts[i][0]; j<= shifts[i][1]; j++){
    //             if(s[j]=="a"){
    //                 s[j]="z"
    //             }else{
    //                 s[j]=String.fromCharCode((s[j].charCodeAt(0))-1)
    //             }
    //         }
    //     }else{
    //         for(let j=shifts[i][0]; j<= shifts[i][1]; j++){
    //             if(s[j]=="z"){
    //                 s[j]="a"
    //             }else{
    //                 s[j]=String.fromCharCode(s[j].charCodeAt(0)+1)
    //             }
    //         }
    //     }
    // }
    // return s.join('')


    // let str = ""
    // for (let i=0; i<s.length; i++){
    //     let code = 0
    //     for(let j=0; j<shifts.length; j++){
    //         if(shifts[j][0]<=i && shifts[j][1]>=i){
    //             if(shifts[j][2]==0){
    //                 code --
    //             }else{
    //                 code ++
    //             }
    //         }
    //     }
    //     if((s.charCodeAt(i)+code)<97){
    //         while((s.charCodeAt(i)+code)<97){
    //             code += 26
    //         }
    //         str += String.fromCharCode(s.charCodeAt(i)+code)
    //     }else if((s.charCodeAt(i)+code)>122){
    //         while((s.charCodeAt(i)+code)>122){
    //             code -= 26
    //         }
    //         str += String.fromCharCode(s.charCodeAt(i)+code)
    //     }else{
    //         str += String.fromCharCode(s.charCodeAt(i)+code)
    //     }
    // }
    // return str
    s=s.split('')
    const n = s.length;
    let array = new Array(n+1).fill(0)
    for (let [start,end,direction] of shifts){
        let dir = direction==0?-1:1
        array[start] += dir
        array[end+1] -= dir
    }
    let cum=0
    for(let i=0; i<n; i++){
        cum+=array[i]
        s[i]=String.fromCharCode((s[i].charCodeAt(0)+(((cum%26)+26)%26))<=122?(s[i].charCodeAt(0)+(((cum%26)+26)%26)):(s[i].charCodeAt(0)+(((cum%26)+26)%26)-26))
    }
    return s.join('')
};