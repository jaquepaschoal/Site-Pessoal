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
    
    $areaIcon.addEventListener('click',showMenu);

    function showMenu(){
      $menuMobile.classList.toggle('display-none');
      $icon.classList.contains('fa-bars') ? $icon.className = 'far fa-times' : $icon.className = 'far fa-bars';
    }
})(document);
