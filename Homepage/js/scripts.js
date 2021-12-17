/*!
* Start Bootstrap - Shop Homepage v5.0.4 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
$(document).ready(function(){
    $("#panel1").hide();
  $("#flip1").click(function() 
  {
    $("#panel1").slideToggle();
    $("#rotate").toggleClass('fa fa-angle-double-down fa fa-angle-double-up');
    });
    
      $("#panel2").hide();
$("#flip2").click(function(){
    $("#panel2").slideToggle();
    $("#rotate2").toggleClass('fa fa-angle-double-down fa fa-angle-double-up');
    });

    $("#panel3").hide();
$("#flip3").click(function(){
    $("#panel3").slideToggle();
    $("#rotate3").toggleClass('fa fa-angle-double-down fa fa-angle-double-up');
    });
});