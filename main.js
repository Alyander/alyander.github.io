i1 = document.getElementsByClassName("i1")[0]
b1 = document.getElementsByClassName("b1")[0]
h11 = document.getElementsByClassName("h1n1")[0]
p1 = document.getElementsByClassName("p1")[0]
i2 = document.getElementsByClassName("i2")[0]
b2 = document.getElementsByClassName("b2")[0]
p2 = document.getElementsByClassName("p2")[0]
bs = document.getElementsByClassName("black_screen")[0]
img = document.getElementsByClassName("img_birth")[0]
b3 = document.getElementsByClassName("b3")[0]
p3 = document.getElementsByClassName("p3")[0]
p4 = document.getElementsByClassName("p4")[0]
b4 = document.getElementsByClassName("b4")[0]
i4 = document.getElementsByClassName("i4")[0]
math = document.getElementsByClassName("math")[0]
result = document.getElementsByClassName("result")[0]
p = document.getElementsByClassName("p1p4")[0]
h1n3 = document.getElementsByClassName("h1n3")[0]
class_winer = document.getElementsByClassName("class_winer")[0]

const maths = [
  "5 + 3",
  "10 - 4",
  "6 * 7",
  "20 / 5",
  "9 + 8",
  "15 - 6",
  "4 * 3",
  "18 / 2",
  "7 + 2",
  "14 - 9",
  "8 * 5",
  "16 / 4",
  "11 + 1",
  "4^3"
];
const letters = ["в", "и", "к", "и", "н", "а ","к", "о", "м", "н", "а", "т", "а ", "под кроватью"]
index = 0;
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
b3.addEventListener("click", function() {
    p3.classList.add("dn")
    p4.classList.remove("dn")
})

b4.addEventListener("click", function () {
  const userAnswer = Number(i4.value);
  const correctAnswer = eval(math.textContent);

  if (userAnswer == correctAnswer) {
    if (index + 1 !== maths.length) {
      result.textContent += letters[index];
      index++;
      math.textContent = maths[index];
      i4.value = "";
    } else {
      i4.classList.add("dn")
      math.classList.add("dn")
      b4.classList.add("dn")
      p.classList.add("dn")
      class_winer.classList.remove("dn")
    }
  }
});