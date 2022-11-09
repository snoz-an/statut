$(document).ready(function(){
  $('#slider-main-videocurces').slick({
    infinite: true,
    dots: false,
    slidesToShow: 3,

    slidesToScroll: 1,
    // dotsClass: 'slick-dots slick-dots-partners',
    arrow: false,
    // centerMode: true,
    prevArrow: $('.slider-partnerss-prev'),
    nextArrow: $('.slider-partnerss-next'),
    responsive: [
      
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            
          }
        },
        
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }
    ]
  });

  $('#slider-main-events').slick({
    infinite: true,
    dots: false,
    slidesToShow: 3,

    slidesToScroll: 1,
    // dotsClass: 'slick-dots slick-dots-partners',
    arrow: false,
    // centerMode: true,
    prevArrow: $('.slider-partnerss-prev'),
    nextArrow: $('.slider-partnerss-next'),
    responsive: [
      
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            
          }
        },
        
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }
    ]
  });

  var $st_2 = $('.pagination_2');
var $slickEl_2 = $('#slider-order');

$slickEl_2.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  var i = (currentSlide ? currentSlide : 0) + 1;
  $st_2.text(i + ' / ' + slick.slideCount);
});


$('#slider-order').slick({
  infinite: true,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrow: false,
  prevArrow: $('.slider-order-prev'),
  nextArrow: $('.slider-order-next'),
  responsive: [
      
      {
        breakpoint: 573,
        settings: {
          slidesToShow: 2,
        }
      }
  ]
});



  
  $('#videocources_list_slider').slick({
    infinite: true,
    dots: false,
    slidesToShow: 3,

    slidesToScroll: 1,
    // dotsClass: 'slick-dots slick-dots-partners',
    arrow: false,
    // centerMode: true,
    prevArrow: $('.videocources_list_slider-prev'),
    nextArrow: $('.videocources_list_slider-next'),
    responsive: [
        
        {
          breakpoint: 573,
          settings: {
            slidesToShow: 2,
          }
        }
    ]
  });


  
  $('#events_list_slider').slick({
    infinite: true,
    dots: false,
    slidesToShow: 3,

    slidesToScroll: 1,
    // dotsClass: 'slick-dots slick-dots-partners',
    arrow: false,
    // centerMode: true,
    prevArrow: $('.events_list_slider-prev'),
    nextArrow: $('.events_list_slider-next'),
    responsive: [
        
        {
          breakpoint: 573,
          settings: {
            slidesToShow: 2,
          }
        }
    ]
  });

    
    $('#slider-partners').slick({
        infinite: true,
        dots: false,
        slidesToShow: 6,
  
        slidesToScroll: 1,
        // dotsClass: 'slick-dots slick-dots-partners',
        arrow: false,
        // centerMode: true,
        prevArrow: $('.slider-partners-prev'),
        nextArrow: $('.slider-partners-next'),
        responsive: [
          
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 4,
                
              }
            },
            
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            }
        ]
      });



    //Используй для slick js лучше id

    var $st = $('.pagination');
var $slickEl = $('#slider-main');

$slickEl.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  var i = (currentSlide ? currentSlide : 0) + 1;
  $st.text(i + ' / ' + slick.slideCount);
});


    $('#slider-main').slick({
      infinite: true,
      dots: false,
      slidesToShow: 1,

      slidesToScroll: 1,
      // dotsClass: 'slick-dots slick-dots-partners',
      arrow: false,
      // centerMode: true,
      prevArrow: $('.slider-main-prev'),
      nextArrow: $('.slider-main-next'),
      
    });
    





    //ticking machine
    var percentTime;
    var tick;
    var time = 1;
    var progressBarIndex = 0;

    $('.progressBarContainer .progressBar').each(function(index) {
        var progress = "<div class='inProgress inProgress" + index + "'></div>";
        $(this).html(progress);
    });

    function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        tick = setInterval(interval, 10);
    }

    function interval() {
        if (($('.slider .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
            progressBarIndex = $('.slider .slick-track div[aria-hidden="false"]').data("slickIndex");
            startProgressbar();
        } else {
            percentTime += 1 / (time + 5);
            $('.inProgress' + progressBarIndex).css({
                width: percentTime + "%"
            });
            if (percentTime >= 100) {
                $('#slider-main').slick('slickNext');
                progressBarIndex++;
                if (progressBarIndex > 2) {
                    progressBarIndex = 0;
                }
                startProgressbar();
            }
        }
    }

    function resetProgressbar() {
        $('.inProgress').css({
            width: 0 + '%'
        });
        clearInterval(tick);
    }
    startProgressbar();
    // End ticking machine

    $('.progressBarContainer div').click(function () {
    	clearInterval(tick);
    	var goToThisIndex = $(this).find("span").data("slickIndex");
    	$('.single-item').slick('slickGoTo', goToThisIndex, false);
    	startProgressbar();
    });
    
   
});