/*

    search Area

    We give you a map, in array like:

    [
        "xxxxxxxxxxx",
        "xxxx...x..x",
        "xxxx...x..x",
        "xxxx...xxxx",
        "xxxxxxx..xx",
        "xx..xxxxxxx",
        "xx..xxxx.xx",
        "x...xxxx..x",
        "xxxxxxx..xx",
        "xx.x.xx..xx",
        "xxxxxxxxxxx"
    ]

    You need to find the biggest square we can draw in the map, by replace '.' in strings.
    The square size and square map can be various, and will be random at correction.

    '.' is for a free space.
    'x' is for walls.
    'o' is for the square resolution/composition.

    We expect that array in return:

    [
        "xxxxxxxxxxx",
        "xxxxooox..x", // here is 
        "xxxxooox..x", // a square
        "xxxxoooxxxx", // with 3x3 dimension
        "xxxxxxx..xx",
        "xx..xxxxxxx", // here is 
        "xx..xxxx.xx", // a square dimension 2x2 but not the biggest
        "x...xxxx..x",
        "xxxxxxx..xx",
        "xx.x.xx..xx",
        "xxxxxxxxxxx"
    ]

    There is only one possibility in this exemple. If there is more than one, take the last.

    Tips:
    Test your own maps !

*/

// write your own code below this comment


var fL=0;
var fC=0;
var fT=0;
console.log(parcourMatrice(
        [
        "xxxxxxxxxxx",
        "xxxx...x..x",
        "xxxx...x..x",
        "xxxx...xxxx",
        "xxxxxxx..xx",
        "xxxxxxxxxxx",
        "....xx...xx",
        "....xx...xx",
        "....xx...xx",
        "....xxxxxxx",
    ]
));

 

function parcourMatrice(param){
    var pL=0;
    var pC=0;

    //console.log(param);

    for(let i=0;i<param.length;i++){
        for( let j=0;j<param[i].length;j++){
            if (param[i][j]==".") {
                //j'ai trouve un depart
                pL=i;
                pC=j;
                chercheCarre(param,pL,pC);    
            }
        }
    }
    //console.log(param);

    for(let i=0; i < param.length ; i++){
        var ligne="";
        for(j=0;j < param[i].length;j++){
            if ((i>=fL) && (i<fL+fT)){
                if ((j>=fC) && (j<fC+fT)){
                    ligne=ligne+"O"  
                } else {
                    ligne=ligne+"x"
                }            
            } else {
                ligne=param[i];
            }
        }
        param[i]=ligne;
    }

 //   console.log(param);

    return(param);
}


function chercheCarre(param,pL,pC){
    var j=0;
    var j=0;
    for(i=pL;i<param.length;i++){
        var nbpoint=0;
        for(j=pC;j<param[i].length;j++){
            if (param[i][j]==".") {
                nbpoint++;
            } else {
                break;
            }
        }
        // optimiser en verifiant sit le nombre de point est au moins egale au max

        // nbpoint represente la largeur max du carre
        var flgTestCol=true;
        for(j=0 ; j < nbpoint ; j++){
            for(i=0 ; i<nbpoint ; i++){
                if ((i+pL)>=param.length) break;
                if( (param[i+pL][j+pC]!=".") ){ 
                    nbpoint=nbpoint--;
                    flgTestCol=false;
                }
            }
            if (flgTestCol==false) break;
        }
        // nombre de point en hauteur
        //if ((nbpoint>=fT)&&(pL>=fL)&&(pC>=fC)){
        if (nbpoint>=fT){    
            fT=nbpoint; fL=pL-nbpoint+1; fC=pC;
        }
        return;
    }
}

