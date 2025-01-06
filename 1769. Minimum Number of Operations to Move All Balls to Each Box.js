/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    const n = boxes.length
    const arr = new Array(n).fill(0)
    const arr2 = new Array(n).fill(0)
    let balls = 0
    for(let i=0; i<n; i++){
        if(boxes[i-1]==1){
            balls += 1
        }
        if(i==0){
            arr[i]=balls
        }else{
            arr[i]=balls+arr[i-1]
        }
    }
    balls = 0
    for(let i=n-1; i>=0; i--){
        if(boxes[i+1]==1){
            balls += 1
        }
        if(i==(n-1)){
            arr2[i]=balls
        }else{
            arr2[i]=balls+arr2[i+1]
        }
        arr[i]+=arr2[i]
    }
    return arr
};