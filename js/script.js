// (window, document, 'script', {
//     host: '//quiz.marquiz.ru', region: 'eu', id: '60e21debfd0e4b003e7786a2', autoOpen: false, autoOpenFreq: 'once', openOnExit: true, disableOnMobile: false 
//    } );
$( document ).ready(function() {

    


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



