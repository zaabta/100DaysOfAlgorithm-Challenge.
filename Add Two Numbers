/*
Add Two Numbers
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
*/



const addTwoNumbers = (l1, l2) => {
    var carry = 0
    let result = new ListNode(0)
    let curr = result
    while(l1 || l2 || carry) {
        var x = l1 ? l1.val : 0
        var y = l2 ? l2.val : 0
        var sum = carry + x + y
        carry = parseInt(sum / 10)
        curr.next = new ListNode(sum % 10)
        curr = curr.next
        if(l1) l1 = l1.next
        if(l2) l2 = l2.next
    }
    return result.next;
};
