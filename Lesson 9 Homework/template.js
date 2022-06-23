let date = () => {
  //alert("deneme")

  document.getElementById("date_id").innerHTML=new Date();
  //$('#date_id').html( `tarih: ${new Date()}`);

  //document.getElementById("date_id").innerText=new Date();
  //$('#date_id').text(new Date());

  //document.getElementById("date_id").style.backgroundColor="blue";
  //document.getElementById("date_id").style.color="white";
 // $("#date_id").css("background-color","blue").css("color","white")

 const cssObject={
     "color":"red",
     "background-color":"black",
     "box-shadow":"1px 1px 3px 1px rgba(255,255,255,.8)",
     "margin-bottom":"3rem"
 }
 $("#date_id").css(cssObject);
//autocomplete 
//backtotop
}

$( function() {
  var availableTags = [
    "HTML",
    "CSS3",
    "Jquery",
    "JavaScript",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];
  $( "#tags" ).autocomplete({
    source: availableTags
  });
} );

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  mybutton = document.getElementById("back_top");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
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