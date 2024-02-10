const b = document.querySelector('button.button-no')
b.addEventListener("mouseover", moveHover)

function moveHover(){
    const i=Math.floor(Math.random()*700)+1 ;
    const j=Math.floor(Math.random()*700)+1 ;

    b.style.Left=i+"px"
    b.style.top=j+"px"
}