// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// nav menu 
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document
        .querySelector(".custom_menu-btn")
        .classList.toggle("menu_btn-style");
}

// // for image modal
// $(document).ready(function() {

//     // Gets the video src from the data-src on each button
//     var $imageSrc;
//     $('.concept_section .search-box').click(function() {
//         $imageSrc = $(this).data('bigimage');
//     });
//     console.log($imageSrc);



//     // when the modal is opened autoplay it  
//     $('#myModal').on('shown.bs.modal', function(e) {

//         // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get

//         $("#image").attr('src', $imageSrc);
//     })


//     // reset the modal image
//     $('#myModal').on('hide.bs.modal', function(e) {
//         // a poor man's stop video
//         $("#image").attr('src', '');
//     })


//     // document ready  
// });

// owl carousel script
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2
        },
        450: {
            items: 3
        },

        600: {
            items: 4
        },
        1000: {
            items: 6
        }
    }
});

// googlemap script

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(-25.95782974172111, 32.58599053068146),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("map"), mapProp);
}





// popup
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// popup 2
// Get the modal
var modal_2 = document.getElementById("myModal_2");

// Get the button that opens the modal
var btn_2 = document.getElementById("myBtn_2");

// Get the <span> element that closes the modal
var span_2 = document.getElementsByClassName("close_2")[0];

// When the user clicks the button, open the modal 
btn_2.onclick = function() {
  modal_2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span_2.onclick = function() {
  modal_2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal_2) {
    modal_2.style.display = "none";
  }
}


// popup 3
// Get the modal
var modal_3 = document.getElementById("myModal_3");

// Get the button that opens the modal
var btn_3 = document.getElementById("myBtn_3");

// Get the <span> element that closes the modal
var span_3 = document.getElementsByClassName("close_3")[0];

// When the user clicks the button, open the modal 
btn_3.onclick = function() {
  modal_3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span_3.onclick = function() {
  modal_3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal_3) {
    modal_3.style.display = "none";
  }
}