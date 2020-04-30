// Your code here
function saturdayFun(target = 'roller-skate') {
    return(`This Saturday, I want to ${target}!`)
}

function mondayWork(target='go to the office') {
    return(`This Monday, I will ${target}.`)
}

let wrapAdjective = function(style= '*') {
    let phrase = 'You are'
    return function lastOfUs(adjective = 'special') {
       return `${phrase} ${style}${adjective}${style}!`   
    }
}

let Calculator = { 
   
        add: (a,b) => {
            return a + b
        },
        subtract: (a,b) => {
            return a - b
        },
        multiply: (a,b) => {
           return a * b
        },
        divide: (a, b) => {
            return a / b
        },
}

function actionApplyer(start, finish) {
    for (let i = 0; i < finish.length; i++) {
        start = finish[i](start)
    }
    return start
}

 
