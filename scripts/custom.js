
$(function () {

  // MENU
  $('.navbar-collapse a').on('click', function () {
    if (window.innerWidth < 992) {
      // Comportamiento para pantallas pequeñas
      if (!$(this).hasClass('dropdown-toggle')) {
        $(".navbar-collapse").collapse('hide');
      } else if ($(this).attr('aria-expanded') === 'true') {
        $(this).attr('aria-expanded', 'false');
        $('.dropdown-menu').removeClass('show');
      } else {
        $(this).attr('aria-expanded', 'true');
        $('.dropdown-menu').addClass('show');
      }
      // ...
    } else {
      // Comportamiento para pantallas grandes

    }
  });


  // AOS ANIMATION

  // AOS.init({
  //   disable: 'mobile',
  //   duration: 800,
  //   anchorPlacement: 'center-bottom'
  // });


  // SMOOTHSCROLL NAVBAR
  $(function () {
    $('.navbar a, .hero-text a, .feature a').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });

  
});















// Aparecer y desaparecer el submenu


if (window.matchMedia("(min-width: 992px)").matches) {
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  dropdownToggle.addEventListener('mouseenter', function () {
    dropdownMenu.classList.add('show');
  });

  dropdownMenu.addEventListener('mouseenter', function () {
    dropdownMenu.classList.add('show');
  });

  dropdownToggle.addEventListener('mouseleave', function () {
    dropdownMenu.classList.remove('show');
  });

  dropdownMenu.addEventListener('mouseleave', function () {
    dropdownMenu.classList.remove('show');
  });


  //desactiva href cuando se haga click en servicios
  var dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(function (dropdown) {
    var link = dropdown.querySelector('.dropdown-toggle');
    var menu = dropdown.querySelector('.dropdown-menu');

    link.addEventListener('click', function (event) {
      event.preventDefault();
      dropdown.classList.toggle('show');
    });

    dropdown.addEventListener('mouseover', function () {
      dropdown.classList.add('show');
    });

    dropdown.addEventListener('mouseout', function () {
      dropdown.classList.remove('show');
    });
  });



} else {



}





























//***************CAROUSEL CLIENTES********************************************** */
function carousel() {
  let carouselSlider = document.querySelector(".carousel__slider");
  let list = document.querySelector(".carousel__list");
  let item = document.querySelectorAll(".carousel__item");
  let list2;

  const speed = 0.7;

  const width = list.offsetWidth;
  let x = 0;
  let x2 = width;

  function clone() {
    list2 = list.cloneNode(true);
    carouselSlider.appendChild(list2);
    list2.style.left = `${width}px`;
  }

  function moveFirst() {
    x -= speed;

    if (width >= Math.abs(x)) {
      list.style.left = `${x}px`;
    } else {
      x = width;
    }
  }

  function moveSecond() {
    x2 -= speed;

    if (list2.offsetWidth >= Math.abs(x2)) {
      list2.style.left = `${x2}px`;
    } else {
      x2 = width;
    }
  }

  clone();

  let a = setInterval(moveFirst, 10);
  let b = setInterval(moveSecond, 10);
}

carousel();





//AOS ASTIVE 

var elementos = document.getElementsByClassName("aos-element");

var miVariable = false;

for (var i = 0; i < elementos.length; i++) {
  elementos[i].setAttribute("data-aos-once", miVariable);
}



/**clientes logo copy*/



