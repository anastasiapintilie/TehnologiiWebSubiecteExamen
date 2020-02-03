

function calculateFrequencies(input, dictionary){
// - `input` should be of type `string` or `String`. If another type is given an `Error` is thrown with the message `Input should be a string or a String`; (0.5 pts)
if(typeof input !=="string" &&typeof input !=="String")
{
    throw new Error("Input should be a string or a String")
}
//- `dictionary` is an array of `string` or `String`. If at least an element is not a `string` an `Error` is thrown with the message `Invalid dictionary format`; (0.5 pts)
for(var i=0;i<dictionary.length;i++)
{
   if(typeof dictionary[i] !=="string" &&typeof dictionary[i] !=="String")
    {
        throw new Error("Invalid dictionary format")
    }
}


//- functia calculeaza frecventele relative ale cuvintelor in input si returneaza un dictionar care are cuvintele drept chei si frecventele drept valori (ex. pentru string-ul 'orange cat' rezultatul va fi {orange : 0.5, cat : 0.5}); (0.5 pts)
    var cuvinte=input.split(' ');
var frecvente={};
var cuv_interzise=0;
for(var i=0;i<cuvinte.length;i++)
{
    cuvinte[i]=cuvinte[i].toLowerCase();
    frecvente[cuvinte[i]]=0;
}
for(var i=0;i<cuvinte.length;i++) if(esteInterzis(dictionary,cuvinte[i])==false)frecvente[cuvinte[i].toLowerCase()]++;
else {cuv_interzise++; }

for(var i=0;i<cuvinte.length;i++) frecvente[cuvinte[i]]/=((cuvinte.length)-cuv_interzise);

if(Object.keys(frecvente).length) {
    Object.keys(frecvente).forEach(key => {
        if (frecvente[key]==0)delete frecvente[key];
    });
}

return frecvente;
}
function esteInterzis(vector,cuv)
{
    for(var i=0;i<vector.length;i++)
    {
        if(cuv.toLowerCase()==vector[i].toLowerCase())return true;
    }
    return false;
}
function removeitem(vector, position)
{
    if(position==0) {vector.shift()}
    else if(position==vector.length){vector.pop()}
    else
    {
    for(var i=position;i<vector.length-1;i++)
    vector[i]=vector[i+1];
    vector.length-=1;
    }
    return vector;

}

const app = {
    calculateFrequencies
};

module.exports = app;