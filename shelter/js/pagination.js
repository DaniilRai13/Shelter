const petsItems = document.querySelector(".pets_items")

const page = document.querySelector(".page")
const leftArrow = document.querySelector(".left")
const doubleLeftArrow = document.querySelector(".double_left")
const rightArrow = document.querySelector(".right")
const doubleRightArrow = document.querySelector(".double_right")

const MAIN_WIDTH = 1280
const TABLE_WIDTH = 970

let petsArr = []
let tempDataPets = dataPets

let shake = () => {
    for (let i = tempDataPets.length - 1; i > 0; i--) {
        let randIndex = Math.floor(Math.random() * tempDataPets.length)
        let temp = tempDataPets[i]
        tempDataPets[i] = tempDataPets[randIndex]
        tempDataPets[randIndex] = temp
    }
}

if (window.innerWidth >= MAIN_WIDTH) {
    for (let i = 0; i < 6; i++) {
        shake()
        tempDataPets.forEach(item => {
            petsArr.push(item)
        })
    }
} else if (window.innerWidth < MAIN_WIDTH) {
    console.log(window.innerWidth)
    let tempArr = []
    let count = 0
    for (let i = 0; i < 8; i++) {
        count += 6
        shake()
        tempArr = []
        tempArr.forEach(item => {
            petsArr.push(item)
        })

        tempDataPets.forEach(item => {
            if (petsArr.length < count && !tempArr.includes(item)) {
                petsArr.push(item)
            } else {
                tempArr.push(item)
            }
        })

    }
}

let pagination = (obj) => {
    petsItems.insertAdjacentHTML("afterbegin", `
        <div class="pets_item">
            <img class="pets_item_img" src="${obj.img}" alt="">
            <h2 class="pets_item_name">${obj.name}</h2>
            <a class="pets_slider_btn">Learn more</a>
        </div>
        
    `)
}

petsArr.forEach(item=>{
    pagination(item)
})

rightArrow.addEventListener("click", ()=>{
    if(window.innerWidth >=970){
        
    }
})

console.log(petsArr)