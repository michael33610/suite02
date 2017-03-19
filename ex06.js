
/*

    Bubble sort

    Write a function "bubbleSort".

    The function takes and sorts an array.

    The array contains only positive numbers.

    Exemple:
    [8, 3, 0] -> [0, 3, 8]

    Forbidden functions:
    sort

    Tips:
    use google

    Write your own tests !
    
*/

// write your code below this comment

console.log(bubbleSort([7,9,11,0,4]));

function bubbleSort(param){
    var temp;
    var flgPermut=true

    for(;flgPermut==true;){
        flgPermut=false;
        for(let i=0;i < param.length - 1;i++){
            if (param[i]>param[i+1]) {
                temp=param[i+1];
                param[i+1]=param[i];
                param[i]=temp;
                flgPermut=true;
            }
        }    
    }


    return(param);

}

