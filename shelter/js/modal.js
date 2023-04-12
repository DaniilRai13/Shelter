let $modal = modal(dataPets)

let pet = document.querySelectorAll(".pets_item")

// pet.addEventListener("click", ()=>{
//     let petName = pet
// })

pet.forEach(item => {
    item.addEventListener("click", () => {
        let name = item.querySelector(".pets_item_name").innerHTML
        let obj = dataPets.filter(el => {
            if (el.name == name) {
                return el
            }
        })
        modal(...obj).open()


        console.log(...obj)
    })
})


