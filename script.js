function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')
//pegar a tag img
const img = document.querySelector("#profile img")




//substituir a imagen
if(html.classList.contains('light')){
 //se tiver light mode,adicionar a imagen
 img.setAttribute("src", "./assets/Avatar.png")

} else {
    img.setAttribute ("src", "./assets/Avatar.light.png")
}
}