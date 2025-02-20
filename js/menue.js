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
//data menue


/*move scroll*/
let scrollleft=document.getElementById("point-left")
let scrollright=document.getElementById("point-right")
let container_food=document.querySelector(".slider-food")
let container_products=document.querySelector(".container-products")
/*GET DATA API */
let DataViewbasket=[];
function getdata(){
    document.getElementById("loading").style.display="block"
    fetch("https://dummyjson.com/recipes").then((x)=>{
        return x.json()
        
    }).then((all)=>{
        document.getElementById("loading").style.display="none"
        scrollleft.style.display="block"
        scrollright.style.display="block"
        let alldata=all.recipes
        /* Data VIEW */
        for(i=0;i<alldata.length;i++){
            /*Create EL With DOM */
            const li = document.createElement('li');
            li.classList.add('card');
            const rateDiv = document.createElement('div');
            rateDiv.classList.add('rate');
            const starIcon = document.createElement('i');
            starIcon.classList.add('fa-solid', 'fa-star');
            const rating = document.createElement('p');
            rating.textContent = alldata[i].rating; 
            rateDiv.appendChild(starIcon);
            rateDiv.appendChild(rating);
            
            const containCardDiv = document.createElement('div');
            containCardDiv.id = 'contain-card';
            const img = document.createElement('img');
            img.classList.add('img-slider');
            img.src = alldata[i].image; 
            const foodName = document.createElement('h4');
            foodName.classList.add('food-name');
            foodName.textContent = alldata[i].name; 
            const price = document.createElement('p');
            price.classList.add('price');
            price.textContent = `${alldata[i].caloriesPerServing}$`;
            containCardDiv.appendChild(img);
            containCardDiv.appendChild(foodName);
            containCardDiv.appendChild(price);
            
            const swapDiv = document.createElement('div');
            swapDiv.classList.add('swap');
            const addToCardButton = document.createElement('button');
            addToCardButton.id = 'addtocard';
            addToCardButton.textContent = 'ADD TO Card';
            swapDiv.appendChild(addToCardButton);
            
            li.appendChild(rateDiv);
            li.appendChild(containCardDiv);
            li.appendChild(swapDiv);
            container_food.appendChild(li)
            mov(alldata.length)
            addToCardButton.onclick=function(){
                let da={
                    name:foodName.innerHTML,
                    price:price.innerHTML
                }
                container_products.innerHTML=""
                DataViewbasket.push(da)
                viewbasket();
            }
        }
        
        
    }).catch(()=>{
        document.getElementById("loading").innerHTML="No internet Connection"
        
    })
}
window.onload=getdata()
/*view card */
function viewbasket(){
    container_products.innerHTML=''
    DataViewbasket.forEach((item, index) => {
        const tr = document.createElement('tr');
        
        const nameCell = document.createElement('td');
        nameCell.textContent = item.name;
        tr.appendChild(nameCell);
        
        const priceCell = document.createElement('td');
        priceCell.textContent = item.price;
        tr.appendChild(priceCell);
        
        const deleteCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'delete';
        deleteCell.appendChild(deleteButton);
        tr.appendChild(deleteCell);
        container_products.appendChild(tr);
        deleteButton.onclick=function(x){
            DataViewbasket.splice(index,1)
            viewbasket()
        }
    });
    
}
let clearAll = document.querySelector(".clear-btn");
clearAll.onclick = function() {
    DataViewbasket = []; 
    container_products.innerHTML=""
    viewbasket(); 

};
/*---move food -slider---*/
function mov(x){
    let now=0;
    scrollright.onclick=function(){
        if(now<x*270){
            now+=270
        }
    container_food.scrollBy({
        left:270,
        behavior:"smooth"
    })
}
    scrollleft.onclick=function(){
        if(now>0){
            now-=270
        container_food.scrollBy({
            left:-270,
            behavior:"smooth"
        })
        }
    }
    
}
/*copyRight*/
document.getElementById("copy").innerHTML=new Date().getFullYear()
/*end*/
