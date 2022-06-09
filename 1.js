function reverseString(message) {
    // write code here
    return message.split("").reverse().join("");
    //split()   方法用于把一个字符串分割成字符串数组。
    //reverse() 方法用于颠倒数组中元素的顺序
    //join()    方法用于把数组中的所有元素放入一个字符串。 
}

console.log(reverseString("hello"));