const btn = document.getElementById("btn")
const inp = document.getElementById("inp")
const colors = ["red", "blue", "green", "black", "white"]


btn.addEventListener("click", () => {
    if (colors.includes(inp.value)) {
        if(inp.value != 'white'){
            document.body.style.backgroundColor = inp.value
            btn.style.backgroundColor = inp.value
            inp.style.color = inp.value

            btn.style.color = "white"
            inp.style.backgroundColor = "white"
            document.getElementById("div2").style.backgroundColor = "white"
        }else {
            document.body.style.backgroundColor = inp.value
            btn.style.backgroundColor = inp.value
            inp.style.color = inp.value
            btn.style.color = "#ff7b73"
            inp.style.backgroundColor = "#ff7b73"
            document.getElementById("div2").style.backgroundColor = "#ff7b73"

        }

    } else {
        alert ("ეს ის ფერი არაა რომელიც მინდა :)")
    }
})