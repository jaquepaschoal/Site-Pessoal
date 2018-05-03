/*!
 * 
 * 
 * 
 * @author 
 * @version 
 * Copyright 2018.  licensed.
 */
(function (document) {

  'use strict';

    var $areaIcon   = document.querySelector('[data-js="area-icon"]');
    var $icon       = document.querySelector('[data-js="icon"]');
    var $menuMobile = document.querySelector('[data-js="menu-mobile"]');

    if($areaIcon) {
      $areaIcon.addEventListener('click',showMenu);

      function showMenu(){
        $menuMobile.classList.toggle('display-none');
        $icon.classList.contains('fa-bars') ? $icon.className = 'far fa-times' : $icon.className = 'far fa-bars';
      }
    }

    var $text = document.querySelector('[data-js="text"]');
    if($text) {
      function typeWriter(element) {
        var textArray = element.innerHTML.split('');
        element.innerHTML='';
        
        textArray.forEach(function(letter,i){

          setTimeout(function(){
            element.innerHTML += letter;
          },75 * i)
        })
        
      }

      typeWriter($text);
    }
  
   
})(document);

(function(){
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
        
    $('html, body').animate({ 
      scrollTop: targetOffset - 100
    }, 500);
  });
})()




