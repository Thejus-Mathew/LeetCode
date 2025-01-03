/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    // let count = 0
    // for(let i =0 ; i<nums.length-1;i++){
    //     if(nums.slice(0,i+1).reduce((a,b)=>a+b,0)>=nums.slice(i+1).reduce((a,b)=>a+b,0)){
    //         count ++
    //     }
    // }
    // return count
    let count = 0
    let num1 = 0
    let num2 = nums.reduce((a,b)=>a+b,0)
    for(let i=0;i<nums.length-1;i++){
        num1+= nums[i]
        num2 -=nums[i]
        if(num1 >= num2){
            count++
            console.log(i)
        }
    }
    return count
};