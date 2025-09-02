function myfun(){
    const rc=`rgb(${getrandom()},${getrandom()},${getrandom()})`;
    document.body.style.backgroundColor = rc;
    document.getElementById("bt").style.backgroundColor =rc;
}

function getrandom(){
    return Math.floor(Math.random()*256);
}