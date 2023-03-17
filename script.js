/*"https://www.matrix.com/blog/8-things-you-need-to-know-before-going-platinum" // new board to be used
const heroDescription*/

;(function(){  //protecting myself from surounding codes





   const alertEl = document.querySelector('.alert-owner') 
   const close = document.querySelector('.alert-owner span') 
   const btnOwner = document.querySelector('.btn.btn-owner');
   const heroDesc = document.querySelector('.description');
   
   heroDesc.textContent = heroDesc.textContent.replace(/chair/gi, 'salon');
   

   alertEl.classList.add('hidden') // hidden it 

   btnOwner.addEventListener('click', function(event){
      alertEl.classList.remove('hidden')
   })

   close.addEventListener('click', function(event){
      alertEl.classList.add('hidden')
   })
 









})()