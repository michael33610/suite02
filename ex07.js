/*

    Current Time

    Write a function "displayCurrentTime" that displays, each seconds, the current time infinitly;

    If the actual time is 10:30:08

    The script displays:

    10:30:09
    10:30:10
    10:30:11
    10:30:12
    10:30:13
    10:30:14
    ...

    One line each seconds.

    Tips:
    setTimeout

    Write your own tests !

*/

// write your code below this comment
console.log(displayCurrentTime(10));

function displayCurrentTime(param){
    
    var heure="";
    var cptSeconde=param;



    for(;;){
            var d = new Date();
            var h = d.getHours();
            var m = d.getMinutes();
            var s = d.getSeconds();

            if (h < 10){ 
                h="0"+h
            }
            if (m< 10){ 
                m="0"+m
            }
            if (s< 10){ 
                s="0"+s
            }
            if( h+":"+m+":"+s != heure) {
                heure=h+":"+m+":"+s;
                console.log(heure);
                param--;
                if (param<0) return(" stop chrono");
            }
            // pour contourner certain compilateur inteligent
            for (let t=0;t<1000;t++){
                let tt;
                tt = t*2;
            }
        }
        return(0);

    }

