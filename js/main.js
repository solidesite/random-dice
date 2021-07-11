const btn = document.querySelector(".btn");
const words = ["rain", "cloud", "sunny", "windy", "good", "bad"];
const box = document.querySelector(".box");
const dice = document.querySelector(".dice1");
const result = document.querySelector(".result");
const diceSelect1 = document.querySelector(".select1");
const diceSelect2 = document.querySelector(".select2");
const diceSelect3 = document.querySelector(".select3");
const diceSelect4 = document.querySelector(".select4");

const numBox1 = document.querySelector(".num-box1")
const numBox2 = document.querySelector(".num-box2")
const numBox3 = document.querySelector(".num-box3")
const numBox4 = document.querySelector(".num-box4")

function dis1 () {
    numBox1.classList.add("display")
    numBox2.classList.remove("display")
    numBox3.classList.remove("display")
    numBox4.classList.remove("display")
    result.innerText = Number(num1.innerText)
}
function dis2 () {
    numBox2.classList.add("display")
    numBox1.classList.add("display")
    numBox3.classList.remove("display")
    numBox4.classList.remove("display")
    result.innerText = Number(num1.innerText) + Number(num2.innerText)
}
function dis3 () {
    numBox2.classList.add("display")
    numBox1.classList.add("display")
    numBox3.classList.add("display")
    numBox4.classList.remove("display")
    result.innerText = Number(num1.innerText) + Number(num2.innerText) + Number(num3.innerText)
}
function dis4 () {
    numBox2.classList.add("display")
    numBox1.classList.add("display")
    numBox3.classList.add("display")
    numBox4.classList.add("display")
    result.innerText = Number(num1.innerText) + Number(num2.innerText) + Number(num3.innerText) + Number(num4.innerText)
}

const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const num3 = document.querySelector(".num3");
const num4 = document.querySelector(".num4");

const diceNum = document.querySelector(".diceNum1");

//주사위 숫자 선택
diceSelect1.addEventListener("click", () => {
    dis1();
    btn.addEventListener("click", () => {
        num1.innerText = Math.floor(Math.random()*6) + 1
        if (num1.innerText == "6") {
            num1.classList.add("num-bold")
        } else {
            num1.classList.remove("num-bold")
        }
        result.innerText = Number(num1.innerText)
    }
)
})
diceSelect2.addEventListener("click", () => {
    dis2();
    btn.addEventListener("click", () => {
        num1.innerText = Math.floor(Math.random()*6) + 1
        num2.innerText = Math.floor(Math.random()*6) + 1
        if (num1.innerText == "6" && num2.innerText == "6") {
            num1.classList.add("num-bold")
            num2.classList.add("num-bold")
        } else {
            num1.classList.remove("num-bold")
            num2.classList.remove("num-bold")
        }
        result.innerText = Number(num1.innerText) + Number(num2.innerText)
    }
)
})
diceSelect3.addEventListener("click", () => {
    dis3();
    btn.addEventListener("click", () => {
        num1.innerText = Math.floor(Math.random()*6) + 1
        num2.innerText = Math.floor(Math.random()*6) + 1
        num3.innerText = Math.floor(Math.random()*6) + 1
        if (num1.innerText == "6" && num2.innerText == "6" && num3.innerText == "6") {
            num1.classList.add("num-bold")
            num2.classList.add("num-bold")
            num3.classList.add("num-bold")
        } else {
            num1.classList.remove("num-bold")
            num2.classList.remove("num-bold")
            num3.classList.remove("num-bold")
        }
        result.innerText = Number(num1.innerText) + Number(num2.innerText) + Number(num3.innerText)
    }
)
})
diceSelect4.addEventListener("click", () => {
    dis4();
    btn.addEventListener("click", () => {
        num1.innerText = Math.floor(Math.random()*6) + 1
        num2.innerText = Math.floor(Math.random()*6) + 1
        num3.innerText = Math.floor(Math.random()*6) + 1
        num4.innerText = Math.floor(Math.random()*6) + 1
        if (num1.innerText == "6" && num2.innerText == "6" && num3.innerText == "6" && num4.innerText == "6") {
            num1.classList.add("num-bold")
            num2.classList.add("num-bold")
            num3.classList.add("num-bold")
            num4.classList.add("num-bold")
        } else {
            num1.classList.remove("num-bold")
            num2.classList.remove("num-bold")
            num3.classList.remove("num-bold")
            num4.classList.remove("num-bold")
        }
        result.innerText = Number(num1.innerText) + Number(num2.innerText) + Number(num3.innerText) + Number(num4.innerText)
    }
)
})

//숫자 다이스
// btn.addEventListener("click", () => {
//     num1.innerText = Math.floor(Math.random()*6) + 1
//     num2.innerText = Math.floor(Math.random()*6) + 1
//     if (num1.innerText == "6" && num2.innerText == "6") {
//         num1.classList.add("num-bold")
//         num2.classList.add("num-bold")
//     } else {
//         num1.classList.remove("num-bold")
//         num2.classList.remove("num-bold")
//     }
//     result.innerText = Number(num1.innerText) + Number(num2.innerText)
// })



//이미지 다이스
// btn.addEventListener("click", () => {
//     if (dice.classList.contains("diceNum1")) {
//         dice.classList.add("diceNum2")
//     }
//     diceNum.classList.replace("diceNum1",`diceNum${Math.floor(Math.random()*7)}`)
//     // box.innerText = words[Math.floor(Math.random()*words.length)];
//     // dice.innerText = imgs[Math.floor(Math.random()*imgs.length)];
// })
