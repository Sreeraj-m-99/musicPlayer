let container = document.querySelector('.container')
let card = document.querySelector('.card')
let carimage = document.querySelector('.card img')
let cardtitle = document.querySelector(".card-title")
let cardinfo = document.querySelector(".card-info p")
let cardbtn = document.querySelector(".cta-btn")

container.addEventListener('mousemove', (e) => {
    let Xaxis = (window.innerWidth / 2 - e.pageX) / 23
    let Yaxis = (window.innerHeight / 2 - e.pageY) / 23

    card.style.transform = `rotateX(${Yaxis}deg) rotateY(${Xaxis}deg)`

})

container.addEventListener('mouseenter', (e) => {
    carimage.style.transform = "translateZ(200px) rotateZ(-35deg)"
    cardtitle.style.transform = "translateZ(225px) "
    cardinfo.style.transform = "translateZ(100px)"
    cardbtn.style.transform = "translateZ(75px) scale(1.01)"



})
container.addEventListener('mouseleave', (e) => {
    card.style.transform = "rotateX(0deg) rotateY(0deg)"
    card.style.transition = "all ease 0.2s"
    carimage.style.transform = "translateZ(0px) rotateZ(0)"
    cardtitle.style.transform = "translateZ(0px) "
    cardinfo.style.transform = "translateZ(0px)"
    cardbtn.style.transform = "translateZ(0px)"


})