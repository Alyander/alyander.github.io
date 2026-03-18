i1 = document.getElementsByClassName("i1")[0]
b1 = document.getElementsByClassName("b1")[0]
h11 = document.getElementsByClassName("h1n1")[0]
p1 = document.getElementsByClassName("p1")[0]
i2 = document.getElementsByClassName("i2")[0]
b2 = document.getElementsByClassName("b2")[0]
p2 = document.getElementsByClassName("p2")[0]
bs = document.getElementsByClassName("black_screen")[0]
img = document.getElementsByClassName("img_birth")[0]

b1.addEventListener("click", function() {
     if (i1.value == "") {
        h11.textContent = "Введите имя!"
     }
     if (i1.value.toLowerCase() == "алла") {
        p1.classList.add("dn")
        p2.classList.remove("dn")
     }
    //  else {
    //     window.location.replace("https://google.com")
    //  }
})

b2.addEventListener("click", function() {

     if (i2.value.toLowerCase() == "19.03.1978") {
        bs.classList.add("dn")
        img.classList.remove("dn")
     }
    //  else {
    //     window.location.replace("https://google.com")
    //  }
})