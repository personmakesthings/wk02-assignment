// GALLERY
const galleryImages = [
    {
        url: "./images/img01.jpg",
        alt: "A bunch of pink tree blossoms on a sunny day."
    },
    {
        url: "./images/img02.jpg",
        alt: "Flowering pink tree blossoms against a pastel-pink backdrop of flowers."
    },
    {
        url: "./images/img03.jpg",
        alt: "A bunch of pink flowers."
    },
    {
        url: "./images/img04.jpg",
        alt: "Pink flowers against a sky backdrop."
    },
    {
        url: "./images/img05.jpg",
        alt: "Small white tree blossoms against a sky backdrop."
    },
    {
        url: "./images/img06.jpg",
        alt: "Pink tree blossoms against a white backdrop."
    },
        {
        url: "./images/img07.jpg",
        alt: "Pink tree blossoms against a backdrop of pink flowers."
    },
    {
        url: "./images/img08.jpg",
        alt: "Pink flowers on a bushy plant."
    },
    {
        url: "./images/img09.jpg",
        alt: "Large pink flower on a bushy plant."
    },
    {
        url: "./images/img10.jpg",
        alt: "Pink flowers on a green meadow."
    },
    {
        url: "./images/img11.jpg",
        alt: "Pink flowers on a green meadow against a white backdrop."
    },
    {
        url: "./images/img12.jpg",
        alt: "Pink flowers on a green meadow."
    },
    {
        url: "./images/img13.jpg",
        alt: "Small flowers against a soft green backdrop."
    },
    {
        url: "./images/img14.jpg",
        alt: "White tree blossom on a tree bare of leaves."
    },
    {
        url: "./images/img15.jpg",
        alt: "Small white flowers against a sky backdrop."
    },
    {
        url: "./images/img16.jpg",
        alt: "Yellow flowers against a blue sky backdrop."
    },
        {
        url: "./images/img17.jpg",
        alt: "White flowers against a sunset."
    },
    {
        url: "./images/img18.jpg",
        alt: "A meadow of white and yellow flowers."
    },
    {
        url: "./images/img19.jpg",
        alt: "White tree blossoms against a sunset backdrop."
    },
    {
        url: "./images/img20.jpg",
        alt: "White tree blossoms against a blue sky backdrop."
    },
    {
        url: "./images/img21.jpg",
        alt: "A grassy field during a sunset."
    },
    {
        url: "./images/img22.jpg",
        alt: "A grassy field with white flowers during a sunset."
    },
]

// Thumbnails
const thumbnailContainer = document.getElementById("img-thumbs")

// Gallery Image View
const viewGalleryImg = document.getElementById("view-gallery-img")

// Background Image View
const viewBgImg = document.getElementById("view-bg-img")

// Previous image and next image buttons
const prevImg = document.getElementById("prev-img")
const nextImg = document.getElementById("next-img")



// IMAGE INDEX
// Variable for index of current gallery image selected
let currentGalleryImageIndex = 0

// Adds click function to prevImg with negative increment on image index
prevImg.addEventListener("click", function(){
    changeGalleryImageIndex(-1)
})

// Adds click function to nextImg with positive increment on image index
nextImg.addEventListener("click", function(){
    changeGalleryImageIndex(1)
})

// Makes the gallery image loop around to the end/beginning
function changeGalleryImageIndex(newGalleryImageIndex) {
    currentGalleryImageIndex = currentGalleryImageIndex + newGalleryImageIndex
    // Sets index to zero if you click nextImg on the last image
    if (currentGalleryImageIndex > galleryImages.length - 1) {
        currentGalleryImageIndex = 0
    }
    // Set index to the last image if you click prevImg on the first image
    if (currentGalleryImageIndex < 0) {
        currentGalleryImageIndex = galleryImages.length - 1
    }
    createGalleryImg(galleryImages[currentGalleryImageIndex]) 
    createBgImg(galleryImages[currentGalleryImageIndex]) 
}



// Function on the thumbnails
function thumbnailChange(galleryImages) {
    for (let i = 0; i < galleryImages.length; i++) {
        let galleryImgElem = document.createElement("img")
        galleryImgElem.src = galleryImages[i].url
        galleryImgElem.alt = galleryImages[i].alt
        galleryImgElem.setAttribute("tabindex", "0") // Lets the user tab through thumbnails
        galleryImgElem.classList.add("thumb-image")
        galleryImgElem.addEventListener("click", function() {
            console.log("Gallery image on display has been changed.")
            currentGalleryImageIndex = i // Sets index for prevImg & nextImg buttons to work properly if used in tandem with the thumbnail box
            createGalleryImg(galleryImages[i])
            createBgImg(galleryImages[i])
        })
        thumbnailContainer.appendChild(galleryImgElem)
    }
}


// Controls display of the gallery image
function createGalleryImg(galleryImages) {
    viewGalleryImg.innerHTML = ""
    let varGalleryImg = document.createElement("img")
    varGalleryImg.classList.add("gallery-img")
    varGalleryImg.src = galleryImages.url
    varGalleryImg.alt = galleryImages.alt
    viewGalleryImg.appendChild(varGalleryImg)
}


// Controls display of the background image
function createBgImg(galleryImages) {
    viewBgImg.innerHTML = ""
    let varBgImg = document.createElement("img")
    varBgImg.classList.add("background-img")
    varBgImg.src = galleryImages.url
    // no alt, don't want to risk redundant double play of narrator voice
    viewBgImg.appendChild(varBgImg)
}


// Displays the thumbnails on the page
thumbnailChange(galleryImages)


// Displays the first image in the gallery by default (when the page loads)
createGalleryImg(galleryImages[0])
createBgImg(galleryImages[0])




// AUDIO PLAYER
const bgSound = document.getElementById("bg-sound")
const playPauseBtn = document.getElementById("play-pause-btn")

// Plays audio, removes play button & replaces it with a pause button
function audioPlay() {
    bgSound.play()
    playPauseBtn.removeEventListener("click", audioPlay)
    playPauseBtn.addEventListener("click", audioPause)
    console.log("Background audio has begun playing.")
    playPauseBtn.style.backgroundImage = `url("./buttons/button-pause.png")`
}

// Pauses audio, removes pause button & replaces it with a play button
function audioPause() {
    bgSound.pause()
    playPauseBtn.removeEventListener("click", audioPause)
    playPauseBtn.addEventListener("click", audioPlay)
    console.log("Background audio is now paused.")
    playPauseBtn.style.backgroundImage = `url("./buttons/button-play.png")`
}

playPauseBtn.addEventListener("click", audioPlay)




// KEYBOARD CONTROLS
// Allows use of left & right arrow keys on keyboard to control gallery image view
function changeGalleryImgKeyPress(event) {
    if (event.key === "ArrowLeft") {
        changeGalleryImageIndex(-1)
    }
    if (event.key === "ArrowRight") {
        changeGalleryImageIndex(1)
    }
}

// Allows use of up & down arrow keys on keyboard to play or pause audio
function playPauseAudio(event) {
    if (event.key === "ArrowUp") {
        audioPlay()
    }
    if (event.key === "ArrowDown") {
        audioPause()
    }
}

// Select document object, applies keyboard controls to webpage
document.addEventListener("keydown", changeGalleryImgKeyPress)
document.addEventListener("keydown", playPauseAudio)
