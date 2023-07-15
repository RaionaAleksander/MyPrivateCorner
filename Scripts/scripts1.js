(function() {
    "use strict";
    //clock

    document.addEventListener("DOMContentLoaded", function() {
        
        let clock = document.getElementById("clock");
       
        setInterval(updateClock, 1000);
        
        function updateClock() {
            
            let date = new Date();
            let h = date.getHours();
            let m = date.getMinutes();
            let s = date.getSeconds();

            s += 1;

            if (s > 59) {
                s = 0;
                m += 1;
                if (m > 59) {
                    m = 0;
                    h += 1;
                    if (h > 23) {
                        h = 0;
                    }
                }
            }


            if (h < 10) {
                h = "0" + h;
            }

            if (m < 10) {
                m = "0" + m;
            }

            if (s < 10) {
                s = "0" + s;
            }

            if (h < 12) { 
                clock.innerHTML = h + ":" + m + ":" + s + " EL";
            }
            else {
                clock.innerHTML = (h - 12) + ":" + m + ":" + s + " PL";
            }
            
        };
        
    })
})();
