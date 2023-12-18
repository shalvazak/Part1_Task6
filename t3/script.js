const btn = document.getElementById("btn")
const inp = document.getElementById("inp")

btn.addEventListener("click", ()=> {
    const arr = inp.value.split(":")
    let x = 0;

    arr.forEach(e => {
        x+=e*1
    });

    alert(x/arr.length)
})