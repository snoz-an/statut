// (window, document, 'script', {
//     host: '//quiz.marquiz.ru', region: 'eu', id: '60e21debfd0e4b003e7786a2', autoOpen: false, autoOpenFreq: 'once', openOnExit: true, disableOnMobile: false 
//    } );
$( document ).ready(function() {


    // $('.quiz_btn').click(function(w, d, s, o) { 
    //     var j = d.createElement(s); 
    //     j.async = true; 
    //     j.src = '//script.marquiz.ru/v2.js';
    //     j.onload = function() { 
    //         if (document.readyState !== 'loading') Marquiz.init(o); else document.addEventListener("DOMContentLoaded", function() { Marquiz.init(o); }); 
    //     }; 
    //     d.head.insertBefore(j, d.head.firstElementChild); 
    // });

   


    // (function(w, d, s, o){ var j = d.createElement(s); j.async = true; j.src = '//script.marquiz.ru/v2.js';j.onload = function() { if (document.readyState !== 'loading') Marquiz.init(o); else document.addEventListener("DOMContentLoaded", function() { Marquiz.init(o); }); }; d.head.insertBefore(j, d.head.firstElementChild); })
    // (window, document, 'script', { host: '//quiz.marquiz.ru', region: 'eu', id: '60e21debfd0e4b003e7786a2', autoOpen: false, autoOpenFreq: 'once', openOnExit: true, disableOnMobile: false } ); 
   
    
    
        



    

   
 

    $('.header_phone').click(function(){
        ym(90274324,'reachGoal','header_phone')
	});


    $('.ym_lead_btn').click(function(){
            ym(90274324,'reachGoal','ym_lead_btn')
        });

        $('.ym_buy_btn').click(function(){
            ym(90274324,'reachGoal','ym_buy_btn')
        });
        $('.footer_phone').click(function(){
            ym(90274324,'reachGoal','footer_phone')
        });
        $('.oferta').click(function(){
            ym(90274324,'reachGoal','ym_oferta')
        });
        $('.modal_buy').click(function(){
            ym(90274324,'reachGoal','modal_buy')
        });

        



        $( "#mail" ).focus(function(){
            $( ".form-label-2" ).addClass('form-label-2_after');
        })
        $( ".form-label-2" ).click(function(){
            $( ".form-label-2" ).addClass('form-label-2_after');
        })
    
       
        $(document).mouseup( function(e){ // событие клика по веб-документу
            var div = $( "#mail" ); // тут указываем ID элемента
            if ( !div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0  ) { // и не по его дочерним элементам
                $( ".form-label-2" ).removeClass('form-label-2_after');
            } 
        });
    
        

    var price_number = $('#my_price').text().slice(0, -1);
    price_number = price_number.replaceAll(/\s/g,'');
    price_number = Number(price_number);
    // console.log(price_number);



    $('#form_feedback').submit(function(){
        $('#price').val(price_number);
        $('#buer_name').val($('#name').val());
        $('#buer_email').val($('#mail').val());
        $('#buer_phone').val($('#phone').val());

        $('#TinkoffPayForm').submit();

    })

    
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*$/;
        return re.test(String(email).toLowerCase());
    }
    
        //PROJECT_PRESA/////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    $('.form-input').on('input', function(){
    
    
    var input_container_phone = false;
    var input_container_name = false;
    var input_container_mail = false;

    var _value_name = $('.input-container-name').val();
    var _value_phone = $('.input-container-phone').val();  
    var _value_mail = $('.input-container-mail').val();  
    
    if (_value_mail == 0){
        input_container_mail = true;
    } else if (validateEmail(_value_mail)) {
        input_container_mail = true;
    }

    
    
    
    if(_value_name.length > 2) {
        input_container_name = true;
    } 
    
    if(_value_phone.length > 17) {
        input_container_phone = true;
    } 

    if($( "#mail" ).val() != 0) {
        $( ".form-label-2" ).removeClass('form-label-2');
     } 


     


    
    if(input_container_phone && input_container_name && input_container_mail) {
        console.log('прошло');
    
        $('.modal_btn').removeAttr('disabled');
        $('.modal_btn').removeClass('modal_btn_disabled'); 
    } else {
        $('.modal_btn').attr('disabled', 'disabled');
        $('.modal_btn').addClass('modal_btn_disabled'); 
    }
    
    })
    
    $('#form_feedback').submit(function(e){
    e.preventDefault();
    var _form = $(this);  
    
        $.ajax({
            url: '../actions/template-function.php',
            method: 'post',
           
            data: {
                'name': _form.find("input[name='name']").val(),
                'phone': _form.find("input[name='phone']").val(),
                'mail': _form.find("input[name='mail']").val(),
            },
            
            success: function(){
                console.log('Успех!');
                $('#exampleModal').modal('hide');
                $('#modal-help').modal('show');
            },
            
            error: function(data) {
                console.log(data);
                console.log('Ошибка!');
            }
        });
    
    
    })    
    //PROJECT_PRESA/////////////////////////////////////////////////////////////////////////////////////////////////////////

    
    $('#btn_in_modal').click(function(){
        $('#menuToggleBtn').trigger('click');
       })

           $('#menuToggle').find('ul').find('a').click(function(){
            $('#menuToggleBtn').trigger('click');
           })
    
    $('#menuToggleBtn').click(function(){
        $('.menu_fade').toggleClass('menu_fade_none');
        $('header').toggleClass('header_fade');
        // $('.container_header').toggleClass('container_header_fade');     
    })
    
    $('.accordion-main-faq').click(function(){
        $(this).find('svg').toggleClass('rotate');
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



