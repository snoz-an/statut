$( document ).ready(function() {
    $('body').on('click', '.password-control', function(){
        if ($('.my_input_password').attr('type') == 'password'){
          
            $('.my_input_password').attr('type', 'text');
        } else {
           
            $('.my_input_password').attr('type', 'password');
        }
        return false;
    }); 
    
    $('.header_cab_btn').click(function(){
        $('.cab_header_menu').removeClass('cab_header_menu_none')
    });

    $('.filter_1_btn').click(function(){
        $('.filter_1').removeClass('filter_1_none');
        $(this).addClass('filter_btn_active');
        $(this).find('svg').addClass('svg_rotate')
    });
    $('.filter_2_btn').click(function(){
        $('.filter_2').removeClass('filter_2_none');
        $(this).addClass('filter_btn_active');
        $(this).find('svg').addClass('svg_rotate')
    });

    
    $(document).mouseup(function (e) {
        var container = $("cab_header_menu");
        if (container.has(e.target).length === 0){
            $('.cab_header_menu').addClass('cab_header_menu_none')
        }

        var container_2 = $(".filter_1");
        if (container_2.has(e.target).length === 0){
            $('.filter_1').addClass('filter_1_none');
            $('.filter_1_btn').removeClass('filter_btn_active');
            $('.filter_1_btn').find('svg').removeClass('svg_rotate');
        }

        var container_3 = $(".filter_2");
        if (container_3.has(e.target).length === 0){
            $('.filter_2').addClass('filter_2_none');
            $('.filter_2_btn').removeClass('filter_btn_active');
            $('.filter_2_btn').find('svg').removeClass('svg_rotate')
        }



    });
    $('.cab_item_link_mob').click(function(){
        setTimeout(function(){
            $('#modal_cab').modal('hide');
        }, 500)
        
    })
    $('#cab_icon_in_burger').click(function(){
        $('#modal_burger').modal('hide');
    })
    $('#fiz_f').click(function(){
        $('.modal_reg_form_1').addClass('d-none');
        $('.modal_reg_form_2').removeClass('d-none');
    })
    $('#uri_f').click(function(){
        $('.modal_reg_form_1').removeClass('d-none');
        $('.modal_reg_form_2').addClass('d-none');
    })

    $('.ur_cont_item').click(function(){
        $('.ur_cont_item').removeClass('ur_cont_active');
        $(this).addClass('ur_cont_active');
    });

    $('.forget_pas').click(function(){
        $('.modal_enter_foem_1').addClass('d-none');
        $('.modal_enter_foem_2').removeClass('d-none');
        $('.modal_enter_foem_2_p').removeClass('d-none');
        $('.modal_enter_foem_1_prev').removeClass('d-none');
        $('.modal_enter_foem_1_prev').addClass('d-flex');
        $('.modal_enter_h').text('???????????????????????? ????????????');
    })

    $('.modal_enter_foem_1_prev').click(function(){
        $('.modal_enter_foem_1').removeClass('d-none');
        $('.modal_enter_foem_2').addClass('d-none');
        $('.modal_enter_foem_2_p').addClass('d-none');
        $('.modal_enter_foem_1_prev').addClass('d-none');
        $('.modal_enter_foem_1_prev').removeClass('d-flex');
        $('.modal_enter_h').text('???????? ???? ????????');
    })
    

    $('.accordion-main-faq').click(function(){
        $(this).find('svg').toggleClass('rotate');
    })

    $('.minus').click(function(){
        var count = $(this).parent().find('.counter_order_service_count').text();
        count = Number(count)
        count = count - 1;
        $(this).parent().find('.counter_order_service_count').text(count)
    })

    $('.plus').click(function(){
        var count = $(this).parent().find('.counter_order_service_count').text();
        count = Number(count)
        count = count + 1;
        $(this).parent().find('.counter_order_service_count').text(count)
     })

    ///PERSONAL_TOGGLE////////////
    $('.cab_item_link').click(function(){
        $('.cab_item_link').find('div').removeClass('left_menu_text_active');
        $('.cab_item_link').find('path').removeClass('cab_res_link_svg_active');
        $('.cab_item_link').find('path').removeClass('cab_res_link_svg_stroke_active');
        $('.cab_item_link').find('circle').removeClass('cab_res_link_svg_stroke_active');
        active_tab = $(this).attr('data-id');
        // console.log(active_tab);
        $('.cab_item_link').removeClass('cab_item_link_active');
        $(this).addClass('cab_item_link_active');

        console.log($('.data-content').attr('data-content'));


        $('.my_ul').addClass('d-none');
        $('.my_ul-'+active_tab).removeClass('d-none');
        
        
});



$('.cab_event_btn').click(function(){
   
    active_tab_event = $(this).attr('data-id-event');
    // console.log(active_tab);
    $('.cab_event_btn').removeClass('active');
    $(this).addClass('active');

    $('.cab_event_my_ul').addClass('d-none');
    $('.cab_event_my_ul-'+active_tab_event).removeClass('d-none');
    
    
});
    ///PERSONAL_TOGGLE////////////

    


    $('.format_btn').click(function(){
        $('.format_btn').removeClass('format_btn_active')
        $(this).toggleClass('format_btn_active');     
    })

    

    
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*$/;
        return re.test(String(email).toLowerCase());
    }
    
    var input_container_name = false;
    var input_container_mail = false;

        //PROJECT_PRESA/////////////////////////////////////////////////////////////////////////////////////////////////////////
    
       
    $('.form-input').on('input', function(){
    
    var _value_name = $('.input-container-name').val();
    var _value_mail = $('.input-container-mail').val();  

    
    if (validateEmail(_value_mail)) {
        $('.input-container-mail').removeClass('my_input_err');
        input_container_mail = true;
    } else{
        input_container_mail = false;
        $('.input-container-mail').addClass('my_input_err');

    }

    
    
    
    if(_value_name.length > 2) {
        input_container_name = true;
        $('.input-container-name').removeClass('my_input_err');

    } else {
       input_container_name = false;
       $('.input-container-name').addClass('my_input_err');
    }

    

    
    })
    
    
    
    $('.main_feedback_submit').click(function(){
        if(input_container_name && input_container_mail ) {
            console.log('????????????');
        }
    })

})


window.addEventListener("DOMContentLoaded", function() {

    function mask(event) {
        var matrix = "+7 (___) ___-__-__",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
        if (def.length >= val.length) val = def;
        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
        if (event.type == "blur") {
            if (this.value.length == 2) this.value = ""
        } else setCursorPosition(this.value.length, this)
    };
    
    var order_mask = document.querySelector(".input-container-phone");
    if ( order_mask ){
      order_mask.addEventListener("input", mask, false);
      order_mask.addEventListener("focus", mask, false);
      order_mask.addEventListener("blur", mask, false);
    } 
    
    });



