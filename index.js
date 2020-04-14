// Your code here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
};

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
};

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`
    };
};

let Calculator = {
    add: function(x,y) { return x+y; },
    subtract: function(x,y) { return x-y; },
    multiply: function(x,y) { return x*y; },
    divide: function(x,y) { return x/y; }
}

// arrayOfTransforms = [
//     function(a){ return a * 2 },
//     function(a){ return a + 1000},
//     function(a){ return a % 7 }
//   ]

function actionApplyer(start, operations) {
    return operations.reduce(function(result, method){
        return (method)(result);
    }, start);
};