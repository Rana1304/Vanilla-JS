function updateclock(){
    let now=new Date();
    let h = now.getHours();
    let m = String(now.getMinutes()).padStart(2,'0');
    let s = String(now.getSeconds()).padStart(2,'0');
    ampm = "AM";
    if(Number(h)>=12){
        h=String(Number(h)%12);
        ampm = "PM"
    }
    h=String(h).padStart(2,'0');
    document.getElementById("cl").innerHTML=`${h}:${m}:${s} ${ampm}`;
    const rc=`rgb(${getrandom()},${getrandom()},${getrandom()})`;
    document.getElementById("cl").style.boxShadow=`0 0 20px ${rc}`;

}

function getrandom(){
    return Math.floor(Math.random()*256);
}

setInterval(updateclock,1000);
updateclock();