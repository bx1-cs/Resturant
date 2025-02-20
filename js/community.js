/*----menue_responsive_in header*/
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
/*---------------------------*/
/*add comment by local Storage -------- TEST ---*/
let parent=document.getElementById("parent-comments")
let count=document.getElementById("count")
let history=document.getElementById("history")
let content=document.getElementById("commentInput")
let confirm=document.getElementById("submitBtn")
/*--------------*/ 
/*history*/
let his=new Date()
/*--cheak localstorage items--*/
let commentuser;
if(localStorage.comment){
    commentuser=localStorage.comment
}else{
    commentuser=""
}
/*when onclick submit*/
confirm.onclick=function(){
    if(content.value!=""){
        commentuser=content.value
        localStorage.setItem('comment',content.value)
        if(parent.children.length>2){
            parent.children[2].outerHTML=''
            view()
        }else{
            view()
        }
        cou()
        content.value=""
    }
}
/*-----view comment for user*/
function view(){
    if(localStorage.comment){
        for(i=0;i<1;i++){
            let nav=document.createElement("nav")
            nav.classList.add("container-card")
            /*-----one*/
            let div=document.createElement("div");
            div.id="card-header"
            let photo=document.createElement("img")
            photo.style.width="50px"
            photo.src="../icons/user.svg";
            let div2=document.createElement("div");
            let h4=document.createElement("h4");
            h4.innerHTML="User"
            let p=document.createElement("p");
            p.innerHTML=`${his.getDate()}/${his.getMonth()}/${his.getFullYear()}`
            div2.appendChild(h4)
            div2.appendChild(p)
            div.appendChild(photo)
            div.appendChild(div2)
            nav.appendChild(div)
            /*end*/
            /*div2*/
            let div3=document.createElement("div");
            div3.classList.add("card-center")
            let p2=document.createElement("p");
            p2.innerHTML=commentuser;
            div3.appendChild(p2)
            nav.appendChild(div3)
            /*end*/
            const cardFooter = document.createElement('div');
            cardFooter.id = 'card-footer';
            
            const likeDiv = document.createElement('div');
            const likeIcon = document.createElement('i');
            likeIcon.classList.add('fa-regular', 'fa-thumbs-up');
            const likeText = document.createElement('small');
            likeText.textContent = 'like';
            likeDiv.appendChild(likeIcon);
            likeDiv.appendChild(likeText);
            
            const commentDiv = document.createElement('div');
            const commentIcon = document.createElement('i');
            commentIcon.classList.add('fa-regular', 'fa-comment');
            const commentText = document.createElement('small');
            commentText.textContent = 'comment';
            commentDiv.appendChild(commentIcon);
            commentDiv.appendChild(commentText);
            
            const shareDiv = document.createElement('div');
            const shareIcon = document.createElement('i');
            shareIcon.classList.add('fa-solid', 'fa-share');
            const shareText = document.createElement('small');
            shareText.textContent = 'Share';
            shareDiv.appendChild(shareIcon);
            shareDiv.appendChild(shareText);
            
            cardFooter.appendChild(likeDiv);
            cardFooter.appendChild(commentDiv);
            cardFooter.appendChild(shareDiv);
            nav.appendChild(cardFooter)
            /*div3*/
            parent.appendChild(nav) 
            
        }
    }
}
view()
/*------count number users*/
function cou(){
    if(localStorage.comment){
        
        count.innerHTML=3
    }else{
        count.innerHTML=2
    }
}
cou()
/*-------form validation*/
let form=document.querySelector(".form")
let first_name=document.getElementById("First-name")
let last_name=document.getElementById("Last-name")
let email=document.getElementById("Email")
let phone=document.getElementById("Phone")
form.addEventListener("submit",(x)=>{
     let pattrn_last$first=/\w{8,12}/i
     let pattern_email=/\w+@[a-zA-Z]+.[a-zA-Z]{2,7}$/;
     let pattern_phone=/01\d{9}/i
     if(pattrn_last$first.test(first_name.value)===true&&pattern_email.test(email.value)===true&&pattern_phone.test(phone.value)===true){
     }else{
        x.preventDefault()
     }
    })
/*button submid*/
document.querySelector("#btn-join").onclick=function(){
    document.querySelector(".form-user-parent").style.display="block"
}
/*copyRight*/
document.getElementById("copy").innerHTML=new Date().getFullYear()
/*end*/

let elements=document.querySelectorAll(".element")
let observ=new IntersectionObserver(function(x){
    x.forEach((y)=>{
        if(y.isIntersecting){
            y.target.classList.add("avil")
        }
    })
},{threshold:window.innerWidth<767?0.4:0.5})
elements.forEach((x)=>{
    observ.observe((x))
})