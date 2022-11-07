export function openModal(data){
    const body = document.querySelector("body")

    const backgroundContainer = document.createElement("section")
    const mainContainer = document.createElement("section")
    const closeModalButton = document.createElement("button")

    backgroundContainer.classList.add("modal-background")
    mainContainer.classList.add("modal-container")
    closeModalButton.classList.add("modal-close")

    closeModalButton.innerText = "X"

    backgroundContainer.addEventListener("click", (event) => {
        const {className} = event.target
        if(className === "modal-background" || className === "modal-close"){
            backgroundContainer.remove()
        }
    })

    mainContainer.append(closeModalButton)
    mainContainer.append(data)
    backgroundContainer.append(mainContainer)
    body.append(backgroundContainer)
}