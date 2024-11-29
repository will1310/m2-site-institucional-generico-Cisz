function openModal(){
    const openButton = document.querySelector(".header__button")
    const openButton2 = document.querySelector(".faq__duvidas--button")
    const modalContainer = document.querySelector(".modal")

    openButton.addEventListener("click", () => {
        modalContainer.showModal();
    });

    openButton2.addEventListener("click", () => {
        modalContainer.showModal();
    });

closeModal()

}

function closeModal(){
    const fecharModal = document.querySelector(".fecharModal")
    const modalContainer = document.querySelector(".modal")

    fecharModal.addEventListener("click", () =>{
        modalContainer.close()
    });
}

openModal()