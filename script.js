const alertEl = document.querySelector('.alert-owner') 
const heroDesc = document.querySelector('.description');
const close = document.querySelector('.alert-owner span') 
const btnOwner = document.querySelector('.btn.btn-owner');
const productContainer = document.querySelector('.product-wrapper');


   alertEl.classList.add('hidden') // hide alert 
   heroDesc.textContent = heroDesc.textContent.replace(/chair/gi, 'salon');

   btnOwner.addEventListener('click', function(event){
      alertEl.classList.remove('hidden')
   })

   close.addEventListener('click', function(event){
      alertEl.classList.add('hidden')
   })
 
 //initalizing counter 
 let  clickRecord = {
      unbreakMyBlondeShampoo: 0,
      moistureMeRichShampoo: 0
};

 //using event delgation to capture targeted product 
productContainer.addEventListener('click', function(event){
  //update counter upon click
  updateRecord(event);
  //incase there is nothing in the localStorage
  if(!localStorage.getItem('clicks')){
   //set localStorage
   localStorage.setItem('clicks', JSON.stringify(clickRecord)); 
  }else {
      //counter is now the value in the storage
     clickRecord = JSON.parse(localStorage.getItem('clicks'))
     updateRecord(event);
     //set localStorage
     localStorage.setItem('clicks', JSON.stringify(clickRecord));
  }

})


function updateRecord(event){
   if(event.target.dataset.product === "unbreak-my-blonde-shampoo"){
       clickRecord.unbreakMyBlondeShampoo += 1;
   }

    if(event.target.dataset.product === "moisture-me-rich-shampoo"){
       clickRecord.moistureMeRichShampoo += 1;
   }
}