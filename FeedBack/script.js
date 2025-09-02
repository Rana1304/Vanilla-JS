const panel = document.getElementById("panel-id");
const ratpanel = document.getElementById("rating-panel");
const rating = document.querySelectorAll(".rating");
const sendBtn = document.querySelector("#send");

let selected = "Satisfied";

ratpanel.addEventListener("click", (e) => {
    const ratingElement = e.target.closest(".rating");
    if (!ratingElement) return;

    const prev = document.querySelector(".rating.active");
    if (prev && prev !== ratingElement) {
        prev.classList.remove("active");
        prev.style.backgroundColor = "cyan";
        prev.blur();
    }

    ratingElement.classList.add("active");
    ratingElement.focus();
    ratingElement.style.backgroundColor = "darkcyan";
});

sendBtn.addEventListener("click",()=>{
panel.innerHTML=`
    <div class="msg">
    <p class="heart">❤️</p>
    <Strong>Thank You</Strong>
    <br>
    <strong>FeedBack: ${selected}</strong>
    </div>
`
});

function removeActive(){
    for(let i = 0;i<rating.length;i++){
        rating[i].classList.remove("active");
    }
}