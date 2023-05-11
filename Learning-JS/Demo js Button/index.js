let txt = document.querySelector("h1");
txt.addEventListener("click", AddNumber);

function AddNumber (){
    let num = parseInt(txt.textContent);
    txt.textContent = (num+1);
}