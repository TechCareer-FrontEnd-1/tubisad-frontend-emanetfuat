// $('.owl-carousel').owlCarousel({
    // loop:true,
    // margin:10,
    // nav:true,
    // responsive:{
    //     0:{
    //         items:1
    //     },
    //     600:{
    //         items:3
    //     },
    //     1000:{
    //         items:5
    //     }
    // }
// })

// Navbar Background Değiştirme
$(window).on("scroll",function () {

    var bodyScroll = $(window).scrollTop(),
        navbar = $(".navbar");

    if(bodyScroll > 130){

        navbar.addClass("navbar-scroll");
        // $('.navbar-logo img').attr('src','images/logo-black.png');


    }else{

        navbar.removeClass("navbar-scroll");
        // $('.navbar-logo img').attr('src','images/logo-white.png');

    }

});



// external js: isotope.pkgd.js


// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
      name: '.name',
      symbol: '.symbol',
      number: '.number parseInt',
      category: '[data-category]',
      weight: function( itemElem ) {
        var weight = $( itemElem ).find('.weight').text();
        return parseFloat( weight.replace( /[\(\)]/g, '') );
      }
    }
  });
  
  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };
  
  // bind filter button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
  
  // bind sort button click
  $('#sorts').on( 'click', 'button', function() {
    var sortByValue = $(this).attr('data-sort-by');
    $grid.isotope({ sortBy: sortByValue });
  });
  
  // change is-checked class on buttons
  $('.btn-iso-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });

  // ISOTOPE END


// BACK TO TOP START
  // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  mybutton = document.getElementById("back_top");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// BACK TO TOP END


/* login value and validation*/
$(function () {
  $("#btnLogin").click(function () {
    let email, password;
    email = jQuery.trim($("#inputLoginEmail").val());
    password = jQuery.trim($("#inputLoginPassword").val());


    //validation  email
    if (email == "") {
      $("#validation_email").html("Email boş geçilemez...")
    } else if (regexEmail(email) == false) {
      $("#validation_email").html("Format hatası. Exam: deneme@gmail.com")
    }

    //regex email
    function regexEmail(email) {
      let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email);
    }

    //validation  password
    if (password == "") {
      $("#validation_password").html("password boş geçilemez...")
    } else if (regexPassword(password) == false) {
      $("#validation_password").html("En az bir rakam, özel karakter(!@#$%^&*), büyük-küçük harf ve toplamda en az 8 karakter olmalı")
    }

    //regex email
    function regexPassword(password) {
      let regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;;
      return regex.test(password);
    }
  })//onclick close
}); //document ready close


/* Register value and validation*/
$(function () {
  $("#btnRegister").click(function () {
    let email, password, username;
    email = jQuery.trim($("#inputRegisterEmail").val());
    password = jQuery.trim($("#inputRegisterPassword").val());
    username = jQuery.trim($("#inputUsername").val());


    //validation  username
    if (username == "") {
      $("#validation_username_register").html("Username boş geçilemez...")
    }

    //username check
    let usernameDizi = ["fuatemanet","emanetfuat"];

    for (let index = 0; index < usernameDizi.length; index++) {
        if (username == usernameDizi[index]) {
          $("#inputUsername").addClass("inputUsernameValidation");
          $("#validation_username_register").html("Kullanıcı adı zaten kayıtlı.")
        } else {
          $("#inputUsername").removeClass("inputUsernameValidation");
        }
    }
    
    //validation  email
    if (email == "") {
      $("#validation_email_register").html("Email boş geçilemez...")
    } else if (regexEmail(email) == false) {
      $("#validation_email_register").html("Format hatası. Exam: deneme@gmail.com")
    }

    //regex email
    function regexEmail(email) {
      let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email);
    }

    //validation  password
    if (password == "") {
      $("#validation_password_register").html("password boş geçilemez...")
    } else if (regexPassword(password) == false) {
      $("#validation_password_register").html("En az bir rakam, özel karakter(!@#$%^&*), büyük-küçük harf ve toplamda en az 8 karakter olmalı")
    }

    //regex email
    function regexPassword(password) {
      let regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;;
      return regex.test(password);
    }
  })//onclick close
}); //document ready close


// To Do List

$(document).ready(function(){
  $("#btnAdd").click(function(){
    let username;
    username = jQuery.trim($("#inputAdd").val());
    $("#divList").append(`
    <div class="list-item my-2">
      <span class="text-white float-start">
        `
        + username + 
        `
      </span>
      <span class="float-end" id="btnDelete">
        <a onclick="deleteFunction()" style="color:#ED6E00;cursor: pointer;"><i class="fa-solid fa-trash-can"></i></a>
      </span>
      <span class="clearfix"></span>
      </div>
    `
    );
  });


});

let deleteFunction = () => {
  document.getElementById("btnDelete").parentElement.remove();
};


/* Markalarımız Göster Gizle */
let markalarimizShow = () => {
  document.getElementById("markalarimiz").style.display = "block";
}

let markalarimizHide = () => {
  document.getElementById("markalarimiz").style.display = "none";
}