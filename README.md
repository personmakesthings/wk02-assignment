# wk02-assignment
## Reflection
Hoo boy, this one was a hard one. Over this past week, I feel like we've just crammed in reading 10 chapters of book learning a foreign language, and the first assignment we've been given is to complete a 10 paragraph essay, yet I still don't feel confident in my ability to write out basic greetings.


Seeing the process of creating a webpage from scratch with a big interactive element like a gallery has been very helpful to get an idea of JavaScript in practical usage. And after reading back through the demonstration code on Github, I did generally feel like I understood it fine, even if only when read through slowly and after heavily annotating it. 


Despite this, I honestly cannot yet fathom how to code something like this myself from scratch at this stage. I feel like I need way more mileage doing practical JavaScript to create interactive functions that are much simpler than this image gallery. In the end, I more or less just ended up redoing the demonstration code and tweaking things here and there: such as renaming everything as I typed the code so I could at least test that I knew what things I was referring to and why, and adding in some extra code to make additional functions occur, this includes the following:
- I added in another image: a blurred out background of the current selected image. This was an aesthetic choice.
- I got the page to display the first image in the gallery by default by calling the function in the script and setting the index to 0 - `createGalleryImg(galleryImages[0])` - as I wanted the page to be populated with content upon load instead of being blank.


To practice JavaScript more, I decided it would be best to think about adding additional functions to the page. So I spent some time researching and creating different buttons and interactive elements for the webpage:
- I added audio to the page, and a button which appears in the top-right corner that can play or pause the audio. When you press play, it clears the play button and replaces it with a pause button (it seems clearing the previous object/element/etc. and replacing it with another seems to be a common way of coding functionality in JS). I had it change the image between a play and pause graphic that I made as well.
- I looked into adding keyboard controls to the page by applying keypress events to the document object. Specifically, I used the arrow keys on the keyboard for this. Left and right allow you to go back or forward through the gallery, respectively, and it calls the same functions used to make the arrow buttons on the page work. The up and down keys play or pause the audio - it calls the same functions I defined for the play-pause button, similar to gallery buttons.
    - I think this simplifies using the site, in that you can now browse through everything without even needing to move the website. I can imagine this would be useful as an accessibility feature for some users if their ability to move and use a mouse is limited.
    - Issue: Using these keyboard controls conflicts with using tab to browse through the page, generally leaving you only able to use one or the other at any given time.
    - Issue: there isn't anything on the page that explains or announces that these keys can be used to control parts of the website. I imagine for an interactive webpage such as this, it wouldn't be abnormal to have an extra section on the site that can be opened and closed (possibly appearing on initial page load) that explains to the user how to use the website, what keys on the keyboard do what, etc. but this is beyond the scope of this project for now.


I also made an attempt to implement and test accessibility features:
- I added `tabindex` to elements on the webpage so that the previous image, next image, & play-pause buttons can be tabbed through. These elements are tabbed through before the thumbnail box.
- I added `aria-label` to elements in focus on the webpage, and tested it with Narrator on my Windows computer. It seems to be working as intended and the `aria-label` text is being announced. Narrator also seems to be correctly announcing `alt` text on the images when tabbing through the thumbnails.


### Aesthetic choices
- The size of the gallery changes automatically with the size of the viewport. I realise this choice in styling probably isn't appropriate for most subject matters. I think it works okay with tiled images or repeating patterns and objects without a particular focal point, however, which is why I kept to photographs of flowers for this gallery.


### Miscellaneous issues
Some issues I came across with the website, and thinking about ways to address them in the future:
- Images that load dynamically due to JavaScript nearly always "flicker" on screen before appearing. I presume this is because image hasn't loaded yet, and could be prevented if some kind of pre-load functionality were added to the webpage. This is something I would like to explore, however, I have concerns this may cause the page to take a while to initially load due to large image file sizes.
- I wanted the audio to autoplay, but it seems autoplay is disabled by default for webpages by most browsers, unless certain criteria is met (which is understandable, autoplaying audio can be an annoyance). I removed the autoplay attribute from the audio player in the final version due to this.


### Other notes
- Switching between HTML and JavaScript can be awkward for naming things in your project! I tried to stick to camel case for any JavaScript variables, and to lowercase with dashes between words for HTML IDs & classes. I came up with a bit of a guideline for naming things to make coding more straightfoward: whereby I kept the names essentially the same across HTML & CSS and JavaScript, so a HTML element with the ID "view-gallery-img" became "viewGalleryImg" when stored in a variable in my JS file.


# Attributions
### Audio
- "Rainy Day In Town With Birds Singing", by WhiteNoiseSleepers:
    - https://pixabay.com/sound-effects/rainy-day-in-town-with-birds-singing-194011/


### Images
- https://www.pexels.com/photo/cherry-blossom-flowers-1591171/
- https://www.pexels.com/photo/pink-flowers-on-a-branch-in-front-of-a-pink-background-20629937/
- https://www.pexels.com/photo/close-up-photo-of-pink-flowers-4068152/
- https://unsplash.com/photos/pink-cherry-blossom-flower-_SbeCWYjwCQ
- https://unsplash.com/photos/pink-cherry-blossom-in-close-up-photography-NfWOr7DZ6gA
- https://unsplash.com/photos/pink-and-white-flowers-in-tilt-shift-lens-96JptuEPBi0
- https://unsplash.com/photos/pink-and-white-roses-feFgaiYcp14
- https://unsplash.com/photos/pink-and-white-flowers-in-tilt-shift-lens-3ZJXdqfK_mg
- https://unsplash.com/photos/selective-focus-photography-of-pink-petaled-flower-eriuKJwcdjI
- https://unsplash.com/photos/white-flowers-in-shallow-focus-photography-YnNczu62rdk
- https://unsplash.com/photos/orange-petaled-flowers-koy6FlCCy5s
- https://unsplash.com/photos/white-petaled-flowers-during-day-96JD67agngE
- https://unsplash.com/photos/pink-flowers-in-tilt-shift-lens-0lL6Sox7n1Y
- https://unsplash.com/photos/pink-and-white-flowers-under-white-sky-during-daytime-kxvn1ogpTtE
- https://unsplash.com/photos/pink-and-white-flowers-in-tilt-shift-lens-TtDNu-Heh3Y
- https://unsplash.com/photos/yellow-and-white-flower-field-during-daytime-RnRX1vjub5g
- https://unsplash.com/photos/white-petaled-flowers-jFuYVeN5K3Y
- https://unsplash.com/photos/white-and-yellow-flower-under-blue-sky-during-daytime-DEXtvLp4OU8
- https://unsplash.com/photos/selective-photography-of-white-petaled-flowers-mlGfyUtwsik
- https://unsplash.com/photos/dandelion-flower-field-0YcR_WttkoA
- https://unsplash.com/photos/pink-flower-in-macro-lens-K3x_AkLVTAo


### Self-made
- ./buttons/arrow-left-small.png
- ./buttons/arrow-right-small.png
- ./buttons/button-pause.png
- ./buttons/button-play.png