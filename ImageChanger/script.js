let img = document.querySelector("img");
let imgarr= ["https://imgs.search.brave.com/vSUQC7r-j0bAuqL4Aqn_cP0-V79ChdN__C9XvqR-It0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci8yODYv/ODY5L0hELXdhbGxw/YXBlci1iZW4tMTAt/YmVudGVuLWJlbjEw/LXRodW1ibmFpbC5q/cGc","https://imgs.search.brave.com/x-fVodzvfXUNECIPEXcn1IMtByXshhWy6gqRmiI78lU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/d2hhdC1kby15b3Ut/d2FudC10by1zZWUt/aW4tdGhlLWJlbi0x/MC1jb21pYy12MC0z/b3dqejR4OTA5ZmYx/LmpwZWc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9ZWJiZTdkMzQz/MmM4ZWI0YjA1MWM1/ZDk4NmZjMmNhM2M5/ZGU5ZTIxZA","https://imgs.search.brave.com/IVW_lHgY5_r0V2w8GifpADM7GgsNjUOW5kNCwAtVflQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/Z2l2ZS1tZS15b3Vy/LWhhcmRlc3QtYmVu/LTEwLWltYWdlcy12/MC15cnZuYzl0Nmo3/ZGMxLmpwZWc_d2lk/dGg9NjQwJmNyb3A9/c21hcnQmYXV0bz13/ZWJwJnM9MmZmMWI3/ZjFhZmQwYzI0Yzc0/NGMzNGY2MWEwZDky/ZDE0MTA2MTZiOA","https://imgs.search.brave.com/4zPZ6aabNN1m0o_iL0ZeBzj8KURt4tr0ytB1R0JF1QQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnJl/ZGQuaXQvcG00c3Fk/dzEwZHRjMS5naWY.jpeg","https://imgs.search.brave.com/91X9iAbMz8cR9HM5LFPIM1J94tm2CENwk9aLETDHG0o/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9iLnRo/dW1icy5yZWRkaXRt/ZWRpYS5jb20vSDdP/VmdBX29BbzVpalgw/anBxX0h0U0hVNTRu/WWR4YjJaUlJXNkVW/R1hkby5qcGc","https://imgs.search.brave.com/QLPgGUE1GDwOHYHmagyJ5geVL6bM3Om9nS-bG3V9QqM/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9iLnRo/dW1icy5yZWRkaXRt/ZWRpYS5jb20vZEds/cldCekctR2hfYzlz/b0tFLUhxZURaLUQt/MGtMc2JZUVd0VFNj/dXF4SS5qcGc","https://imgs.search.brave.com/KxV1rwAHz1nu8l7Pp3oxSu6M_ZJA9ZHDZAvNw3XddFQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2VmLzgy/LzA4L2VmODIwODFk/ZjdmZTRjOGJlMzkw/NTljOWU5MTJmMjU4/LmpwZw","https://imgs.search.brave.com/FjebRUaVu7KegqrhHsMqrvvzGzBkod0sh6msx9oUtAI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1UVTBNRGN3/T1RRMU9GNUJNbDVC/YW5CblhrRnRaVGd3/TkRBM01EZzNNakVA/LmpwZw","https://imgs.search.brave.com/GwAbeWqQOan-DQj2Nkllj3DgbwtPmgzRCsoEXbdgxwA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnJl/ZGQuaXQvam1zMjZs/cmppOWpmMS5qcGVn"];
let index = 0;
function myfun(e){
    let value = e.target.value;
    if(value === "next"){
        index = (index+1)%imgarr.length;
    }
    if(value === "prev"){
        index = (index -1 +imgarr.length)%imgarr.length;
    }

    img.src = imgarr[index];

}

document.querySelectorAll("button").forEach(button=>{
    button.addEventListener("click",myfun);
})