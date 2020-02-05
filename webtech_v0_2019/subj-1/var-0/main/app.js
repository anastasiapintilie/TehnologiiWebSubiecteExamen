/*
 - funcția distance primește ca parametrii două array-uri
 - fiecare element poate apărea cel mult o dată într-un array; orice apariții suplimentare sunt ignorate 
 - distanța dintre cele 2 array-uri este numărul de elemente diferite dintre ele
 - dacă parametrii nu sunt array-uri se va arunca o excepție ("InvalidType")
*/
/*
 - the distance function receives as parameters two arrays
 - each element can appear in each array at most once; any duplicates are ignored
 - the distance between the 2 arrays is the number of different elements between them
 - if the parameters are not arrays an exception is thrown ("InvalidType")
*/

function distance(first, second){
	var rezultatfirst=0;
	if(first.length==0 || second.length==0) return 0;
	
	if(!Array.isArray(first) || !Array.isArray(second)) throw new TypeError("InvalidType");
	
  const uniqueSet=new Set(first);
   first =Array.from(uniqueSet);

  var uniqueSet2=new Set(second);
   second =Array.from(uniqueSet2);

		//parcurg array-urile si numar cate elemente au diferite
		for(var i=0;i<first.length;i++)
			for(var j=0;j<second.length;j++)
			{
				if(first[i]!=second[j]) rezultatfirst++;
			 else if(first[i]!==second[j] && first[i]==second[j]) rezultatfirst+=2; //daca au aceeasi valoare dar nu si acelasi tip adaug 2 
			
			}

			return rezultatfirst
}



module.exports.distance = distance