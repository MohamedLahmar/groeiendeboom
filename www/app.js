let count = 0;
let margin = 0;

setTimeout(function() {
    setInterval(function(){ 
        var val = document.getElementById("value").innerHTML;
        //document.getElementById("val").innerHTML = margin;
        //document.getElementById("count").innerHTML = count;
        
        //Triggered state (When something gets thrown in the bin)
        if (val < 15) { //Distance that triggers the code (in cm)
            document.getElementById("ruler").style.bottom = "-"+margin+2+"px";
            document.getElementById("grass").style.bottom = "-"+margin+2+"px";
            document.getElementById("audio").play();
            margin ++;
        }
         //Idle state
        else {
        }
    }, 10); //Check sensor every 10ms
}, 15000);




