/*

    Smallest Multiple

    2520 is the smallest number that can be divided by each of the numbers
    from 1 to 10 without any remainder.

    What is the smallest positive number that is
    evenly divisible by all of the numbers from 1 to 20?

    Write a function "smallestMultipleFor" that solves this problem.

    Write your own tests !
    
*/

// write your code below this comment
console.log(smallestMultipleFor());

function smallestMultipleFor(){
    var flgOk=true
    var j=0;
    //Pour gagne un certain ce nombre en iteration 
    //on aurais pus commencer a 1!
    var plusPetitMultiple;
    for(plusPetitMultiple=1;;plusPetitMultiple+=1){
        flgOk=true;
        //console.log(plusPetitMultiple);
        for (j=1;j<=20;j++){
            if ((plusPetitMultiple % j) != 0) {
                flgOk=false;
                break;
            }
        }
        //toutes les divisions ont un reste=0
        if (flgOk==true){        
            return (plusPetitMultiple);
        }
    }
}

