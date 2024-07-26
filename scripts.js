let trashbuttons = document.querySelectorAll(".fa-trash-alt")
console.log(trashbuttons);
for (let trashbtn of trashbuttons) {
   trashbtn.addEventListener("click", function () {
      trashbtn.closest(".toBeRemoved").remove()
      TotalPrice()
   })

}

// +
 let PlusButtons=document.querySelectorAll(".fa-plus-circle")
  for ( let plusBtn of PlusButtons){
  
   plusBtn.addEventListener("click" , function(){
      plusBtn.nextElementSibling.innerHTML++
      TotalPrice()
   })
 }

//-
let MinusButtons=document.querySelectorAll(".fa-minus-circle")
for ( let MinusBtn of MinusButtons){

   MinusBtn.addEventListener("click" , function(){
      if (MinusBtn.previousElementSibling.innerHTML>0) {
         MinusBtn.previousElementSibling.innerHTML--
      }
      TotalPrice()
      
   })
 }

 
//total price
function TotalPrice(){
   let quantity=document.querySelectorAll(".quantity")
   let price=document.querySelectorAll(".unit-price")
   let sum=0

   for (let i=0 ;i<quantity.length ; i++){
     sum+= quantity[i].innerHTML * price[i].innerHTML
    }

document.getElementById("total").innerHTML=`${sum} $`
}
TotalPrice()

//like
let heartButtons = document.querySelectorAll(".fa-heart")
for( let heartBtn of  heartButtons) {
   heartBtn.addEventListener("click" , function(){
      heartBtn.classList.toggle("liked")
   })
}