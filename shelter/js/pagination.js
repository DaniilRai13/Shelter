const petsItems = document.querySelector(".pets_items")

const page = document.querySelector(".page")
const leftArrow = document.querySelector(".left")
const doubleLeftArrow = document.querySelector(".double_left")
const rightArrow = document.querySelector(".right")
const doubleRightArrow = document.querySelector(".double_right")
const MAIN_WIDTH = 1280
const TABLE_WIDTH = 970

const MAIN_PAGES = 6
const TABLE_PAGES = 8
const MOBILE_PAGES = 16

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

petsArr.forEach(item => {
    pagination(item)
})

let height = petsItems.style.top
let nowPage = 1

leftArrow.addEventListener("click", () => {
    if (window.innerWidth - 17 >= 970 && height > -930 * 6 && nowPage > 1) {
        height += 932
        petsItems.style.top = height + "px"
        // работа с нумерацией страницы
        nowPage--
        page.innerHTML = nowPage
        if (nowPage == 1) {
            leftArrow.classList.remove("active")
            doubleLeftArrow.classList.remove("active")
        } else {
            leftArrow.classList.add("active")
            doubleLeftArrow.classList.add("active")
        }

        console.log(height)
    } else if (window.innerWidth - 17 > 657 && height > -1392 * 8 && nowPage > 1) {
        height += 1395
        petsItems.style.top = height + "px"
        // работа с нумерацией страницы
        nowPage--
        page.innerHTML = nowPage
        if (nowPage == 1) {
            leftArrow.classList.remove("active")
            doubleLeftArrow.classList.remove("active")
        } else {
            leftArrow.classList.add("active")
            doubleLeftArrow.classList.add("active")
        }
    } else if (window.innerWidth - 17 < 657 && height > -1392 * 16 && nowPage > 1) {
        height += 1395
        petsItems.style.top = height + "px"
        // работа с нумерацией страницы
        nowPage--
        page.innerHTML = nowPage
        if (nowPage == 1) {
            leftArrow.classList.remove("active")
            doubleLeftArrow.classList.remove("active")
        } else {
            leftArrow.classList.add("active")
            doubleLeftArrow.classList.add("active")
        }
    } else {
        leftArrow.classList.remove("active")
        doubleLeftArrow.classList.remove("active")
    }
    console.log(height)

    if (window.innerWidth - 17 >= 970 && nowPage < 6 || window.innerWidth - 17 > 657 && nowPage < 8 || window.innerWidth - 17 <= 657 && nowPage < 16) {
        rightArrow.classList.remove("no_active")
        doubleRightArrow.classList.remove("no_active")
        rightArrow.classList.add("active")
        doubleRightArrow.classList.add("active")
    }
    // else if (window.innerWidth - 17 > 657 && nowPage < 8) {
    //     rightArrow.classList.remove("no_active")
    //     doubleRightArrow.classList.remove("no_active")
    //     rightArrow.classList.add("active")
    //     doubleRightArrow.classList.add("active")
    // } else if (window.innerWidth - 17 <= 657 && nowPage < 16) {
    //     rightArrow.classList.remove("no_active")
    //     doubleRightArrow.classList.remove("no_active")
    //     rightArrow.classList.add("active")
    //     doubleRightArrow.classList.add("active")
    // }
})

rightArrow.addEventListener("click", () => {
    leftArrow.classList.add("active")
    doubleLeftArrow.classList.add("active")
    console.log(nowPage, height)
    // условие
    debugger
    if (window.innerWidth - 17 >= 970 && height > -930 * 5) {
        console.log(222222222)

        height -= 932
        petsItems.style.top = height + "px"
        nowPage++
        page.innerHTML = nowPage

        leftArrow.classList.add("active")
        doubleLeftArrow.classList.add("active")
        console.log(height)
    } else if (window.innerWidth - 17 > 657 && window.innerWidth - 17 < 970 && height > -1392 * 7) {
        height -= 1395
        petsItems.style.top = height + "px"
        nowPage++
        page.innerHTML = nowPage

        leftArrow.classList.add("active")
        doubleLeftArrow.classList.add("active")
    } else if (window.innerWidth - 17 < 657 && height > -1392 * 15) {
        height -= 1395
        petsItems.style.top = height + "px"
        nowPage++
        page.innerHTML = nowPage

        leftArrow.classList.add("active")
        doubleLeftArrow.classList.add("active")
    }

    if (window.innerWidth - 17 >= 970 & nowPage == 6 || window.innerWidth - 17 > 657 & nowPage == 8 || window.innerWidth - 17 < 657 & nowPage == 16) {
        rightArrow.classList.remove("active")
        doubleRightArrow.classList.remove("active")
        rightArrow.classList.add("no_active")
        doubleRightArrow.classList.add("no_active")
    }
})
doubleLeftArrow.addEventListener("click", () => {
    leftArrow.classList.remove("active")
    doubleLeftArrow.classList.remove("active")

    rightArrow.classList.remove("no_active")
    doubleRightArrow.classList.remove("no_active")
    rightArrow.classList.add("active")
    doubleRightArrow.classList.add("active")

    petsItems.style.top = 0
    nowPage = 1
    height = 0
    page.innerHTML = nowPage

    console.log(nowPage)
})
doubleRightArrow.addEventListener("click", () => {
    rightArrow.classList.add("no_active")
    doubleRightArrow.classList.add("no_active")
    rightArrow.classList.remove("active")
    doubleRightArrow.classList.remove("active")

    leftArrow.classList.add("active")
    doubleLeftArrow.classList.add("active")
    if (window.innerWidth - 17 >= 970) {
        nowPage = 6
        page.innerHTML = nowPage

        petsItems.style.top = -932 * (nowPage-1) + "px"
        height = -932 * (nowPage-1)

    } else if (window.innerWidth - 17 > 657) {
        nowPage = 8
        page.innerHTML = nowPage

        petsItems.style.top = -1395 * (nowPage-1) + "px"
        height = -1395 * (nowPage-1)
    } else if (window.innerWidth - 17 < 657) {
        nowPage = 16
        page.innerHTML = nowPage
        petsItems.style.top = -1395 * (nowPage-1) + "px"
        height = -1395 * (nowPage-1)
    }
})
console.log(petsArr)