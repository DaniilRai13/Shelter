let burger = document.querySelector('.burger')
let navContent = document.querySelector('.nav')
let wind = document.querySelector("body")

let showBurger = (event) => {
        if(navContent.classList.contains("burger_active")){
            setTimeout(() => {
                navContent.classList.remove("burger_active")
            }, 100)
            navContent.classList.add("burger_no_active")
            burger.style.transform = "rotate(0deg)"
            document.body.classList.remove("no_scroll")
        }else{
            navContent.classList.remove("burger_no_active")
            navContent.classList.add("burger_active")
            burger.style.transform = "rotate(90deg)"
            document.body.classList.add("no_scroll")
        }
       
        
}
let closeNav = (event) => {
    if (event.target.dataset.content != "close") {
        setTimeout(() => {
            navContent.classList.remove("burger_active")
        }, 100)
        navContent.classList.add("burger_no_active")
        burger.style.transform = "rotate(0deg)"

        document.body.classList.remove("no_scroll")

    }
}

burger.addEventListener('click', showBurger)
wind.addEventListener("click", closeNav)