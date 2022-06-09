debug:
function compare(a,b){
    return a.localeCompare(b);
}   
function alphabetSort(message){
    return message.split('').sort(compare).join('');
    
}
console.log(alphabetSort('hello')); // should return 'ehllo'