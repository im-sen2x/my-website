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

    const greaterThan1 = document.querySelector(".gt1")
    const greaterThan2 = document.querySelector(".gt2")
    const moreInfo1 = document.querySelector(".more-info1")
    const moreInfo2 = document.querySelector(".more-info2")

    // const learnMore1 = document.querySelector(".experience-learn-more1")
    // const learnMore2 = document.querySelector(".experience-learn-more2")

    const learnMore1 = document.querySelector(".experience-container1")
    const learnMore2 = document.querySelector(".experience-container2")

    learnMore1.onclick = function(){
        if(!greaterThan1.className.includes("rotated")){
            greaterThan1.style.transform = "rotate(90deg)"
            greaterThan1.className = "gt1 rotated"
            moreInfo1.style.transition = "width 100ms, height 100ms, transform 10ms ease-in-out , opacity 300ms ease-in-out"
            moreInfo1.style.transform = "scale(1, 1)"
            moreInfo1.style.opacity = 1
            moreInfo1.style.width = "auto"
            moreInfo1.style.height = "auto"
        }
        else{
            greaterThan1.style.transform = "rotate(0deg)"
            greaterThan1.className = "gt1"
            moreInfo1.style.opacity = 0
            moreInfo1.style.width = 0
            moreInfo1.style.height = 0
            moreInfo1.style.transform = "scale(0, 0)"
        }
    }    

    learnMore2.onclick = function(){
        if(!greaterThan2.className.includes("rotated")){
            greaterThan2.style.transform = "rotate(90deg)"
            greaterThan2.className = "gt2 rotated"
            moreInfo2.style.transition = "width 100ms, height 100ms, transform 10ms ease-in-out , opacity 300ms ease-in-out"
            moreInfo2.style.transform = "scale(1, 1)"
            moreInfo2.style.opacity = 1
            moreInfo2.style.width = "auto"
            moreInfo2.style.height = "auto"
        }
        else{
            greaterThan2.style.transform = "rotate(0deg)"
            greaterThan2.className = "gt2"
            moreInfo2.style.opacity = 0
            moreInfo2.style.width = 0
            moreInfo2.style.height = 0
            moreInfo2.style.transform = "scale(0, 0)"
        }
    }