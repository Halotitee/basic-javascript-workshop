function firstLetter(inputString) {
    if (inputString) {
        return inputString[0];
    } else {
        return undefined;
    }
}

function lastLetter(inputString) {
    if (inputString) {
        var slice = inputString.slice(-1);
        return slice;
    } else {
        return undefined;
    }
}

function letterAtPosition(inputString, position) {
    if (inputString) {
        return inputString[position];
        } else {
        return undefined;
    }
}

function addTwoNumbers(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number"){
        return num1 + num2;
    } else {
        return undefined;
    }
}

function multiplyTwoNumbers(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number"){
        return num1 * num2;
    } else {
        return undefined;
    }
}

function calculator(operation, num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number"){
        if (operation === "add") {
            return num1 + num2;
        } else if (operation === "sub") {
            return num1 - num2;
        } else if (operation === "mult") {
            return num1 * num2;
        } else if (operation === "div") {
            return num1 / num2;
        } else {
            return undefined;
        }
        
    } else {
        return undefined;
    }
}

function repeatString(inputString, numRepetitions) {
    if(numRepetitions > 0) {
        return inputString.repeat(numRepetitions);
    } else if (numRepetitions <= 0) {
        return inputString.repeat("");
    } else {
        return undefined;
    }
}

function reverseString(inputString) {
    return inputString.split("").reverse().join("");
}

function longestWord(inputString) {
    var findlongestWord = inputString.split(" ").sort(function(a, b) { return b.length - a.length; });
    return findlongestWord[0];
}

function capitalize(inputString) {
    var splitStr = inputString.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);     
   }
   return splitStr.join(' '); 
}

function sumOfNumbers(arrayOfNumbers) {

}

function uniqueElements(array1, array2) {

}

function isPalindrome(inputString) {

}

function wrapCharacter(inputString) {

}

function wrapWord(inputString) {

}

function bubbleSort(arrayOfNumbers) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    firstLetter: firstLetter,
    lastLetter: lastLetter,
    letterAtPosition: letterAtPosition,
    addTwoNumbers: addTwoNumbers,
    multiplyTwoNumbers: multiplyTwoNumbers,
    calculator: calculator,
    repeatString: repeatString,
    reverseString: reverseString,
    longestWord: longestWord,
    capitalize: capitalize,
    sumOfNumbers: sumOfNumbers,
    uniqueElements: uniqueElements,
    isPalindrome: isPalindrome,
    wrapCharacter: wrapCharacter,
    wrapWord: wrapWord,
    bubbleSort: bubbleSort
};