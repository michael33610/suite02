/*

    Eval Expr

    Write a function "evalExpr" that can solve simples arithmetic calculs;

    We will pass only positive integer numbers.

    Exemples:

    evalExpr(4, 5, "*"); // 20
    evalExpr(3, 3, "+"); // 6
    evalExpr(2, 2, "%"); // 0
    evalExpr(3, 3, "-"); // 0
    evalExpr(10, 2, "/"); // 5

    evalExpr(10, 0, "/"); // 0

    Validation:
    I want to see at least 6 functions.

    Write your own tests !
    
    Forbidden functions:
    eval

*/

// write your code below this comment


//evalExpr(4, 5, "*");

    evalExpr(4, 5, "*"); // 20
    evalExpr(3, 3, "+"); // 6
    evalExpr(2, 2, "%"); // 0
    evalExpr(3, 3, "-"); // 0
    evalExpr(10, 2, "/"); // 5

    evalExpr(10, 0, "/"); // 0

function evalExpr(param1,param2,ope){
    var result;

    
    if (ope=="+"){
            result=addition(param1,param2);
    } else if (ope=="-"){
            result=soustraction(param1,param2);
    } else if (ope=="*"){
            result=multiplication(param1,param2);      
    } else if (ope=="/"){
            result=division(param1,param2);
    } else if (ope=="%"){
            result=modulo(param1,param2);
    }


    affiche(result);
}

function addition(param1,param2){
    var ret=param1+param2;
    return(ret);
}

function affiche(ret){
    console.log(ret);
}

function soustraction(param1,param2){
    var ret=param1-param2;
    return(ret);
}


function multiplication(param1,param2){
    var ret=param1*param2;
    return(ret);
}


function division(param1,param2){
    var ret;
    if (param2==0){
        ret=0;
    } else {
    ret=param1/param2;        
    }
    return(ret);
}


function modulo(param1,param2){
    var ret=0;
    var entier=Math.trunc(division(param1,param2));
    ret=param1-(entier * param2);
    return(ret);
}

