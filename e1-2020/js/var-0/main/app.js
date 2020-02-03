function bowdlerize(input, dictionary){
    // check if input is a string
    if (typeof input !== 'string') {
        //console.log('Input should be a string');
        throw new Error('Input should be a string');
    }

    // check if dictionary contains only strings
    for(var i=0;i<dictionary.length;i++)
    {
        if(typeof dictionary[i]!="string") throw new Error("Invalid dictionary format");
    }
    
    let newInput = '';
    let output = '';
    let words = input.split(' ');

    for (let i = 0; i < words.length; ++i) 
    {
        for (let j = 0; j < dictionary.length; ++j) 
        {
            if (words[i].toUpperCase() === dictionary[j].toUpperCase()) 
            {
                //console.log(words[i].toUpperCase() + " " + dictionary[j].toUpperCase());

                newInput += words[i][0]; //prima litera

                let wordLength = words[i].length;
                for (let k = 0; k < wordLength - 2; ++k) 
                {
                    newInput += '*'; //completez celelalte litere
                }

                newInput += words[i][wordLength - 1]; //o pun si pe ultima
                words[i] = newInput; //actualizez cuvantul
            }
            newInput = '';
        }
        output += words[i] + ' ';
    }
    newInput = output.trim();
    return newInput;
}

const app = {
    bowdlerize
};

module.exports = app;