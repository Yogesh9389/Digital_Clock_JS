
//  Update colck timer
function updateClock(){

    let now = new Date();
    let dname =  now.getDay();
    let m =  now.getMonth();
    let dnum =  now.getDate();
    let y =  now.getFullYear();
    let h =  now.getHours();
    let min =  now.getMinutes();
    let s =  now.getSeconds();
    let p =  "AM";

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        p = "PM";
    }

    Number.prototype.pad = function(digits){
        let n = this.toString();
         while (n.length < digits) {
            n = '0' + n;
        }
        return n;
        
    }



    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //   dow --- days of week
    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let ids = ["dayname", "month", "day", "year", "hours", "minutes", "seconds", "period"];

    let values = [week[dname], month[m], dnum.pad(2), y, h.pad(2), min.pad(2), s.pad(2), p];

  

    for(var i = 0; i < ids.length; i++){
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }
    

}


// initialize clock timer
function initClock() { 
    updateClock();
    window.setInterval("updateClock()", 1);
    console.log("hellow yogesh");
}