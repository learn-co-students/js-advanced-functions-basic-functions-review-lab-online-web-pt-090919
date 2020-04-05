// Your code here
const saturdayFun = (activity = "roller-skate") => {
     return `This Saturday, I want to ${activity}!`;
}

const mondayWork = (activity = "go to the office") => {
     return `This Monday, I will ${activity}.`;
}

const wrapAdjective = (hl = "*") => {
     return function (adj = "special") {
          return `You are ${hl}${adj}${hl}!`
     }
}

let Calculator = {
     add: function (n1, n2) {
          return n1 + n2;
     },
     subtract: function (n1, n2) {
          return n1 - n2;
     },
     multiply: function (n1, n2) {
          return n1 * n2;
     },
     divide: function (n1, n2) {
          return n1 / n2;
     }
}

const actionApplyer = (strtInt, arrOfFuncs) => {
     if (arrOfFuncs.length === 0) {
          return strtInt;
     } else {
          arrOfFuncs.forEach(func => {
               strtInt = func(strtInt);
          });
          return strtInt
     }
}

arrayOfTransforms = [
     function (a) {
          return a * 2
     },
     function (a) {
          return a + 1000
     },
     function (a) {
          return a % 7
     }
]