$(document).ready(function(){


    
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
              breakpoint: 573,
              settings: {
                slidesToShow: 3,
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
      responsive: [
        
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 3,
              
            }
          },
          
          {
            breakpoint: 573,
            settings: {
              slidesToShow: 2,
            }
          }
      ]
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