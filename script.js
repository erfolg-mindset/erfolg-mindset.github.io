const togglebutton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

togglebutton.addEventListener ('click', () => {
    navbarLinks.classList.toggle('active')
})

var swipe=0;

function slideshow() {
    var swipe=folie;
    var folie=swipe+1;
    var  bild=3%folie;
    if (bild==0)
        document.getElementsByClassName(image).element.setAttribute(src,images/business02.jpg);
    if (bild==0)
        document.getElementsByClassName(image).element.setAttribute(src,images/lifestyle02.jpg);
    if (bild==0)
        document.getElementsByClassName(image).element.setAttribute(src,images/script02.jpg);
}