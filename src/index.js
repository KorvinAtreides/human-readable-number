module.exports = function toReadable(number) {
    let arr = String(number).split("");
    let len = arr.length;
    if (len == 1) {
        return uniqueNumbers(number); //0-9
    }
    if (len == 2) {
        if (arr[0] == "1") {
            return uniqueNumbers(number); //10-19
        } else {
            if (arr[1] == "0") {
                return `${uniqueDozens(arr[0])}`;
            } //20,30,40 etc.
            return `${uniqueDozens(arr[0])} ${uniqueNumbers(arr[1])}`; //21,22 etc.
        }
    }
    if (len == 3) {
        if (arr[1] == "0" && arr[2] == "0") {
            return `${uniqueNumbers(arr[0])} hundred`;
        } //100,200,300 etc.
        if (arr[1] == "1" || arr[1] == "0") {
            return `${uniqueNumbers(arr[0])} hundred ${uniqueNumbers(
                Number(String(arr[1]) + String(arr[2]))
                //110,111,213,417 etc.
                //103,306 etc.
            )}`;
        } else {
            if (arr[2] == "0") {
                return `${uniqueNumbers(arr[0])} hundred ${uniqueDozens(
                    arr[1]
                )}`; // 220, 330, 650 etc.
            }
            return `${uniqueNumbers(arr[0])} hundred ${uniqueDozens(
                arr[1]
            )} ${uniqueNumbers(arr[2])}`; //666, 743 etc.
        }
    }
};
function uniqueDozens(x) {
    let arrayOfUniqueDozens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    return arrayOfUniqueDozens[Number(x)];
}
function uniqueNumbers(x) {
    let arrayOfUniqueNumbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    return arrayOfUniqueNumbers[Number(x)];
}
