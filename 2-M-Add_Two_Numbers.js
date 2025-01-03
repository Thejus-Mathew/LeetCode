/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**

 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    let dummy =new ListNode()
    let list =dummy
    let remainder = 0
    while(l1 != null || l2 != null || remainder != 0){
        let sum = remainder
        if(l1?.val){
            sum+=l1.val
        }
        if(l2?.val){
            sum+=l2.val
        }
        console.log(l1?.val,l2?.val,remainder,sum)
        remainder = Math.floor(sum/10)
        let value = sum - (remainder * 10)
        console.log(value)
        l1=l1?.next?l1.next:null
        l2=l2?.next?l2.next:null
        list.next = new ListNode(value)
        list = list.next
    }
    console.log(dummy.next)
    return dummy.next
};