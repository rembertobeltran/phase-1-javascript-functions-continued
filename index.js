function saturdayFun(funActivity = 'roller-skate') {
    return 'This Saturday, I want to ' + funActivity + '!'
}

saturdayFun()
saturdayFun('bathe my dog')

function mondayWork(workActivity = 'go to the office') {
    return 'This Monday, I will ' + workActivity +'.'
}

mondayWork()
mondayWork('work from home')

function wrapAdjective(highLight){
    const intro = 'You are '
    const outro = '!'
    return function(empathic)  {
       return intro + highLight + empathic + highLight + outro
       }   
}

wrapAdjective('*')(' a hard worker')
wrapAdjective('||')('a dedicated programmer')

