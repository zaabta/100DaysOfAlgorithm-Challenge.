/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var palindrome = 0;
    var temp = x;
    while (temp > 0) {
        palindrome *= 10;
        palindrome += parseInt(temp % 10);
        temp = parseInt(temp / 10)
    }
    return palindrome == x;
};
