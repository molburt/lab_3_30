function cutStringInHalf(text) {
    var characters = text.split("");
    var half = Math.trunc(characters.length / 2);
    characters.splice(half);
    return characters.join("");
}
console.log(cutStringInHalf('This string is 34 characters long.'));
console.log("\n");

function reverseString(text) {
    var characters = text.split("");
    characters.reverse();
    return characters.join("");
}
console.log(reverseString('This string is backwards.'));
console.log("\n");

function reverseArray(array) {
    // return array.reverse(); --> Okay, fine, I'll do it manually and practice my loops...
    var backwardsArray = ['', ''], count = 0;
    for(var i = array.length-1; i >= 0; i--) {
        backwardsArray[count] = array[i];
        count++;
    }
    return backwardsArray;
}
console.log(reverseArray(['a', 'b', 'c', 'd']));
console.log("\n");

function multiplicationTable() {
    var table = "";
    for(var i = 0; i <= 12; i++) {
        for(var x = 0; x <= 12; x++) {
            var table = table + " " + i*x;
        }
        table = table + "\n";
    }
    return table;
}
console.log(multiplicationTable());

function largestElement(array) {
    var largestNumber = array[0];
    for(var i = 1; i <= array.length; i++) {
        if (array[i] > largestNumber) {
            largestNumber = array[i];
        }
    }
    return largestNumber;
}
console.log(largestElement([1, 74, 2, 78, 3, 25, 9, 23]));
console.log("\n");

function isPalindrome(text) {
    var palindrome = true;
    var characters = text.toLowerCase().split("");
    var backwards = text.toLowerCase().split("").reverse();
    for(var i = 0; i <= characters.length; i++) {
        if (characters[i] !== backwards[i]) {
            palindrome = false;
            break;
        }
    }
    return text + " is a palindrome: " + palindrome;
}
console.log(isPalindrome('Racecar'));
console.log(isPalindrome('Programming'));
console.log("\n");

function concatenateLists(listOne, listTwo) {
    var combinedList = listOne.concat(listTwo);
    return combinedList;
}
console.log(concatenateLists(['a','a','a'], ['0','0','0']));
console.log("\n");

function alternatelyCombiningLists(listOne, listTwo) {
    var combinedList = [];
    var index = 0;
    for(var i = 0; i < listOne.length*2; i++) {
        if(i%2 === 0) {
            combinedList[i] = listOne[index];
        }
        else {
            combinedList[i] = listTwo[index];
            index++;
        }
    }
    return combinedList;
}
console.log(alternatelyCombiningLists(['a','b','c'], ['1','2','3']));
console.log("\n");

function fibonacciNumbers() {
    var fibonacci = [0, 1], numberOne = 0, numberTwo = 1;
    for(var i = 2; i <= 100; i++) {
        fibonacci[i] = numberOne + numberTwo;
        numberOne = numberTwo;
        numberTwo = fibonacci[i];
    }
    return fibonacci;
}
console.log(fibonacciNumbers());
console.log("\n");



function publicTransportation(ticketNumber) {
    var isLucky = false, firstHalf = 0, secondHalf = 0;
    var characters = ticketNumber.split("");
    var half = Math.trunc(characters.length / 2);
    if (characters.length%2 !== 0) {
        characters.splice(half, 1);
    }
    for(var i = 0; i < half; i++) {
        firstHalf = firstHalf + characters[i]*1;
    }
    for(var i = characters.length-1; i >= half; i--) {
        secondHalf = secondHalf + characters[i]*1;
    }
    if (firstHalf === secondHalf) {
        isLucky = true;
    }
    return "Lucky Ticket: " + isLucky;
}
console.log(publicTransportation('4493278'));
console.log(publicTransportation('117234'));
console.log(publicTransportation('1234567'));