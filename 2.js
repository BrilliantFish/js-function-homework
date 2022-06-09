 function palindrome(message){  
    var i = 0;
    var j = message.length-1;
    while(i < j){
        if(message[i] != message[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
}
console.log(palindrome('hello'));
console.log(palindrome('abcba'));