// Your code here 
function saturdayFun(activity="roller-skate") {
    console.log(`This Saturday, I want to ${activity}!`);
    return `This Saturday, I want to ${activity}!`;
};

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
};

function wrapAdjective(flair="*") {
    return function (wrap="special") {
        return `You are ${flair}${wrap}${flair}!`
    };
};

var Calculator = {
    add(a,b) { return a + b},
    subtract(a,b) { return a - b},
    multiply(a,b) { return a * b},
    divide(a,b) { return a / b}
};

function actionApplyer(integer, array) {
    var value = integer;
    for (let i = 0; i < array.length; i++) {
        var value = array[i](value);
      };
    return value;
};