function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`;
}
function wrapAdjective(symbol) {
    const innerFunction = function(adj = "a dedicated programmer"){
        return `You are ${symbol}${adj}${symbol}!`;
    }
    return innerFunction;
}