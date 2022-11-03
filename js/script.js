$( document ).ready(function() {

    $('.minus').click(function(){
       var count = $(this).parent().find('.counter_order_service_count').text();
       count = count - 1;
    })

    $('.plus').click(function(){
        var count_2 = $(this).parent().find('.counter_order_service_count').text();
        count_2 = Number(count_2)
        count_2 = count_2 + 1;
        $(this).parent().find('.counter_order_service_count').text(count_2)
        console.log(count_2);

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
            console.log('прошло');
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



