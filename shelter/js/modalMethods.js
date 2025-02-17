function _createModal(options) {   //the character "_" means that function is not to be called
    let modal = document.createElement("div")
    modal.classList.add("vmodal")
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal_overlay" data-close="true">
            <div class="modal_window">
                <div class="modal_close" data-close="true">
                    <svg data-close="true" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z" fill="#292929"/>
                    </svg>
                </div>
                <img src="${options.img}" alt="" class="modal_image">
                <div class="pet_inner">
                    <div class="pet_name">${options.name}</div>
                    <div class="pet_type_breed">${options.type} - ${options.breed}</div>
                    <div class="pet_description">${options.description}</div>
                    <ul class="pet_list_info">
                        <li><span><b>Age: </b>${options.age}</span></li>
                        <li><span><b>Inoculations: </b>${options.inoculations}</span></li>
                        <li><span><b>Diseases: </b>${options.diseases}</span></li>
                        <li><span><b>Parasites: </b>${options.parasites}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    `)
    document.body.prepend(modal)
    modal.addEventListener("click", (event) => {
        if (event.target.dataset.close) {
            modal.classList.remove("open")
            modal.classList.add("hide")
            let modal_remove = document.querySelector(".vmodal.hide")
            setTimeout(() => {
                modal_remove.remove()
                document.body.style.overflow = "visible"
            }, 300)
        }

    })
    return modal
}

let modal = (options) => {
    let $modal = _createModal(options)
    return {
        open() {
            $modal.classList.add("open")
            document.body.style.overflow = "hidden"
            console.log(options)
        }

    }

}