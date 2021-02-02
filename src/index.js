module.exports = function toReadable(number) {
    if (number == 0) {
        return "zero"; //0
    }
    let arr = String(number).split("");
    let len = arr.length;
    if (len == 1) {
        return uniqueNumber(number); //1-9
    }
    if (len == 2) {
        if (arr[0] == "1") {
            return uniqueNumber(number); //10-19
        } else {
            if (arr[1] == "0") {
                return `${uniqueDozens(arr[0])}`;
            } //20,30,40 etc.
            return `${uniqueDozens(arr[0])} ${uniqueNumber(arr[1])}`; //21,22 etc.
        }
    }
    if (len == 3) {
        if (arr[1] == "1") {
            //111,213,417 etc.
            return `${uniqueNumber(arr[0])} hundred ${uniqueNumber(
                Number(String(arr[1]) + String(arr[2]))
            )}`;
        } else if (arr[1] == "0") {
            if (arr[2] == "0") {
                //100,200,300 etc.
                return `${uniqueNumber(arr[0])} hundred`;
            }
            return `${uniqueNumber(arr[0])} hundred ${uniqueNumber(arr[2])}`; //103,306 etc.
        } else {
            if (arr[2] == "0") {
                return `${uniqueNumber(arr[0])} hundred ${uniqueDozens(
                    arr[1]
                )}`; // 220, 330, 650 etc.
            }
            return `${uniqueNumber(arr[0])} hundred ${uniqueDozens(
                arr[1]
            )} ${uniqueNumber(arr[2])}`; //666, 743 etc.
        }
    }
};
function uniqueDozens(x) {
    switch (Number(x)) {
        case 2:
            return "twenty";
        case 3:
            return "thirty";
        case 4:
            return "forty";
        case 5:
            return "fifty";
        case 6:
            return "sixty";
        case 7:
            return "seventy";
        case 8:
            return "eighty";
        case 9:
            return "ninety";
        default:
            break;
    }
}
function uniqueNumber(x) {
    switch (Number(x)) {
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";
        case 7:
            return "seven";
        case 8:
            return "eight";
        case 9:
            return "nine";
        case 10:
            return "ten";
        case 11:
            return "eleven";
        case 12:
            return "twelve";
        case 13:
            return "thirteen";
        case 14:
            return "fourteen";
        case 15:
            return "fifteen";
        case 16:
            return "sixteen";
        case 17:
            return "seventeen";
        case 18:
            return "eighteen";
        case 19:
            return "nineteen";
        default:
            break;
    }
}
