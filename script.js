function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
}

const collectiveWisdom = {
    signInfo: ['gold', 'silver', 'bronze', 'iron'],
    fortuneOutput: ['perfect luck', 'great luck', 'good luck', 'bad luck'],
    advice: ['get some chick', 'go out', 'have food', 'stay home loser']
}

let personalWisdom = []

for(let prop in collectiveWisdom) {
    let optionIdx = generateRandomNumber(collectiveWisdom[prop].length)

    switch(prop) {
        case 'signInfo' :
            personalWisdom.push(`Your luck label now is a "${collectiveWisdom[prop][optionIdx]}".`)
            break
        case 'fortuneOutput' :
            personalWisdom.push(`You are having: "${collectiveWisdom[prop][optionIdx]}".`)
            break
        case 'advice' : 
            personalWisdom.push(`You should "${collectiveWisdom[prop][optionIdx]}".`)
            break
        default :
            personalWisdom.push(`There s not enough info.`)

    }
}

function formatWisdom(wisdom) {
    const formatted = personalWisdom.join('\n')
    console.log(formatted)
}

formatWisdom(personalWisdom);