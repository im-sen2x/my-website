// const mobileLists = document.querySelectorAll(".mobile-list")

//     // Change hover aesthetics of the mobile nav bar
//     mobileLists.forEach(element => {
        
//         // on hover change the text color to white with a light grey backdrop
//         element.onmouseover = function(event){
//             this.style.color = "white"
//             this.parentElement.style.backgroundColor = "#D3D3D3"
//         }

//         // on hover out revert back the original text color of "black-ish" with a white backdrop
//         element.onmouseout = function(event){
//             this.style.color = "#272727"
//             this.parentElement.style.backgroundColor = "white" 
//         }
    
//     })

//     // Send the inquiry to my Gmail
//     const inquiryForm = document.getElementById("inquiry-form")
//     const formValues = new FormData(inquiryForm)
//     inquiryForm.onsubmit = function(e){
//         e.preventDefault()
//         document.querySelector(".cirro-modal").className = "modal is-active"
//         fetch("/contact", {
//             method: "POST",
//             cache: "no-cache",
//             credentials: "same-origin",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 "sender": this[0].value,
//                 "email": this[1].value,
//                 "title": this[2].value,
//                 "message": this[3].value
//             })
//         }).then(message => console.log(message)).
//         catch(err => console.log(err))
//     }


// START: Burger highlights

const mobileLists = document.querySelectorAll(".mobile-list")
// Change hover aesthetics of the mobile nav bar
mobileLists.forEach(element => {
    // on hover change the text color to white with a light grey backdrop
    element.onmouseover = function(event){
        this.style.color = "white"
        this.parentElement.style.backgroundColor = "#D3D3D3"
    }

    // on hover out revert back the original text color of "black-ish" with a white backdrop
    element.onmouseout = function(event){
        this.style.color = "#272727"
        this.parentElement.style.backgroundColor = "white" 
    }

})

// END: Burger highlights








    const submitBtn = document.querySelector("button")
    submitBtn.onclick = function(e){
    e.preventDefault()
    // Max 50 characters
    const inputName = document.getElementById("input-name")
    // Max 50 characters
    const inputEmail = document.getElementById("input-email")
    // Max characters 50 characters
    const inputTitle = document.getElementById("input-title")
    // Max characters 3000
    const textArea = document.querySelector("textarea")
    // console.log(inputName.value, inputEmail.value, textArea.value)
    async function sendJANSENInquiry(){
        const emailPayLoad = {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: inputName.value.trim(),
                email: inputEmail.value.trim(),
                title: inputTitle.value.trim(),
                message: textArea.value.trim()
            })
        }
        
        return await fetch("/contact", emailPayLoad)
        
    }

    // Get infosite
    const cirroModal = document.getElementById("cirro-modal")
    // Get modal message
    const modalMessage = document.querySelector(".cirro-modal-message")
    // Get modal button
    const modalButton = document.querySelector(".cirro-modal-button")
    // Get modal X
    const modalClose = document.querySelector(".cirro-modal-close")
    // Get modal OK
    const modalOK = document.querySelector(".cirro-modal-button")

      
      // close modal on OK
    modalOK.onclick = function(){
        cirroModal.style.display = "none";
    }
    
    // close modal on X
    modalClose.onclick = function(){
        cirroModal.style.display = "none";
    }

    // close modal off window
    window.onclick = function(event) {
        if (event.target == cirroModal) {
            cirroModal.style.display = "none";
        }
    }
    
    sendJANSENInquiry().then(response => response.json())
    .then((response) => { 
        // Email properly sent. Redirect back to homepage
        // console.log(response)
        if(response.status === "OK!"){
            modalMessage.innerHTML = "Your inquiry was successfully sent."
            modalButton.className = "cirro-modal-button modal-button-green"
            cirroModal.style.display = "flex"
            // setTimeout(() => {window.location.href = "../index.html"}, 3000)        
        }

        // Email wasn't properly sent.
        else{
            modalMessage.innerHTML = "An error occurred whilst sending your message. Kindly try again."
            modalButton.className = "cirro-modal-button modal-button-red"
            cirroModal.style.display = "flex"
        }
            
    })
    .catch((err) => {
        // Email wasn't properly sent show error.
        console.error(err)
        modalMessage.innerHTML = "An error occurred whilst sending your message. Kindly try again."
        modalButton.className = "cirro-modal-button modal-button-red"
        cirroModal.style.display = "flex"
    }) 
}



