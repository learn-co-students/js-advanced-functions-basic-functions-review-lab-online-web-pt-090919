// Your code here
saturdayFun("bath")
function saturdayFun (activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(){
  return function(characteristic = "special"){
    return `You are ${characteristic}`
    return function (name = "*") {
      
    }
  }
}

let encouragingPromptFunction = wrapAdjective("!!!")