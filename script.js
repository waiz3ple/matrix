/*"https://www.matrix.com/blog/8-things-you-need-to-know-before-going-platinum" // new board to be used
const heroDescription*/

;(function(){  





   const alertEl = document.querySelector('.alert-owner') 
   const heroDesc = document.querySelector('.description');
   const close = document.querySelector('.alert-owner span') 
   const btnOwner = document.querySelector('.btn.btn-owner');
   const productContainer = document.querySelector('.product-wrapper');


   heroDesc.textContent = heroDesc.textContent.replace(/chair/gi, 'salon');

   alertEl.classList.add('hidden') // hide it at first
   btnOwner.addEventListener('click', function(event){
      alertEl.classList.remove('hidden')
   })

   close.addEventListener('click', function(event){
      alertEl.classList.add('hidden')
   })
 
 //using event delgation to capture targeted product 
productContainer.addEventListener('click', function(event){
  console.log(event.target.dataset-prodcut)
})








})()