/*

    Find Sum By Multiples

    If we list all the natural numbers below 10 that are
    multiples of 3 or 5, we get 3, 5, 6 and 9.

    The sum of these multiples is 23.

    In a function "findSumByMultiples", find the sum of all the multiples of 3 or 5 below 1000.

    Write your own tests !
    
*/

// write your code below this comment

console.log(findSumByMultiples());

function findSumByMultiples(){
    var tot=0;
    for(let i=0;i<1000;i++){
        if (((i%3)==0) || ((i%5)==0)){
            tot+=i;
        } 
    }
    return(tot);
}
