const petsItem = document.querySelector(".pets_item")

const page = document.querySelector(".page")
const leftArrow = document.querySelector(".left")
const doubleLeftArrow = document.querySelector(".double_left")
const rightArrow = document.querySelector(".right")
const doubleRightArrow = document.querySelector(".double_right")

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


for (let i = 0; i < 6; i++) {
    shake()
    tempDataPets.forEach(item=>{
        petsArr.push(item)
    })
}


console.log(petsArr)