const messageParts = {
    'part1':[
        'I shall look at you out of the corner of my eye, and you will say nothing.' 
        , 'How far that little candle throws his beams!' 
        , 'I believe in the immeasurable power of love;'
        , 'Prayer is not an old woman\'s idle amusemen.'
        , 'Can a dream be wrong?'
        , 'Nothing happens while you live.'
    ],
    'part2': [
        'Words are the source of misunderstandings.'
        , 'So shines a good deed in a weary world.'
        , 'that true love can endure any circumstance and reach across any distance.'
        , 'Properly understood and applied, it is the most potent instrument of action.'
        , 'Aren\'t dreams God\'s way of telling you things?'
        , 'The scenery changes, people come in and go out, that\'s all.'
    ],
    'author': [
        'Antoine de Saint-Exupéry'
        , 'William Shakespeare'
        , 'Steve Maraboli'
        , 'Mahatma Gandhi'
        , 'Ellen Hopkins'
        , 'Jean-Paul Sartre'
    ]
}


const messageGenerator = (messageParts) => {
    
    const part1Index = Math.floor(Math.random()*messageParts.part1.length);
    const part2Index = Math.floor(Math.random()*messageParts.part2.length);
    const author = Math.floor(Math.random()*messageParts.author.length);


    const randomMessage = `${messageParts.part1[part1Index]} ${messageParts.part2[part2Index]} ${"\n"} -${messageParts.author[author]}`

    return randomMessage;
}



console.log(messageGenerator(messageParts));



