let menu=document.getElementById('menu')
let opthions=document.querySelector('.opthions')
menu.onclick=function(x){
    if(x.target.checked===true){
        opthions.innerHTML=`<img src="../icons/close.svg">`
    }
    else{
        opthions.innerHTML=`<img src="../icons/menu.svg">`
    }
}
/*---------end*/
/*copyRight*/
document.getElementById("copy").innerHTML=new Date().getFullYear()
/*end*/
/*animation when on scroll*/
let elements=document.querySelectorAll(".element")
let observ=new IntersectionObserver(function(x){
    x.forEach((y)=>{
        if(y.isIntersecting){
            y.target.classList.add("avil")
        }
    })
},{threshold:window.innerWidth<767?0.4:0.5})
elements.forEach((x)=>observ.observe((x)))