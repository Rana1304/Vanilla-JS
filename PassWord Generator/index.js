const btn = document.getElementById("genPass");
const newPass = document.getElementById("newPass");
const range = document.getElementById("range");
const rangevalue = document.getElementById("rangeVal");
rangevalue.innerText = range.value;

const uprcase = document.getElementById("capLet");
const lowercase = document.getElementById("smLet");
const NUM = document.getElementById("num");
const SYM = document.getElementById("sym");
const copybtn = document.getElementById("copy");


range.addEventListener("input", () => {
    rangevalue.innerText = range.value.padStart(2,'0');
});

btn.addEventListener("click", () => {
    let capLet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let smLet = "abcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    let sym = "!@#$&";
    let finalStr = "";
    let pass = "";
    
  if (uprcase.checked) {
    finalStr += capLet;
  }
  if (lowercase.checked) {
    finalStr += smLet;
  }
  if (NUM.checked) {
    finalStr += num;
  }
  if (SYM.checked) {
    finalStr += sym;
  }
  if (finalStr === "") {
    alert("Select Something");
    return;
  }


  for (let i = 0; i < range.value; i++) {
    let rand = Math.floor(Math.random() * finalStr.length);
    pass += finalStr[rand];
  }
  copybtn.addEventListener('click',()=>{
      navigator.clipboard.writeText(pass);
  })
  newPass.innerText = pass;
});
