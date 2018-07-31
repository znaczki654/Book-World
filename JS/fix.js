   jQuery(function($)
            {
        
            //zresetuj scrola
            $.scrollTo(0);
            
            //odniesienie się każdego linku do odpowiedniego miejsca oznaczonego #x z prędkością 500ms
            $('#link1').click(function() { $.scrollTo($('#cat1'), 500); });
            $('#link2').click(function() { $.scrollTo($('#cat2'), 500); });
            $('#link3').click(function() { $.scrollTo($('#cat3'), 500); });
            $('#link4').click(function() { $.scrollTo($('#cat4'), 500); });
            $('#link5').click(function() { $.scrollTo($('#cat5'), 500); });
            $('#link6').click(function() { $.scrollTo($('#cat6'), 500); });
            $('#link7').click(function() { $.scrollTo($('#cat7'), 500); });
            $('#map-button').click(function() { $.scrollTo($('#map'), 500); });
            
            //powoduje, że wracamy do body z prędkościa 1000ms
            $('.scrollup').click(function() { $.scrollTo($('body'), 1000); });
            
            
        }
        );
        
        //pokaż podczas przewijania
        $(window).scroll(function()
        {
            if($(this).scrollTop()>300) $('.scrollup').fadeIn();
            else $('.scrollup').fadeOut();
        }
        );
                   // the end of scrolling function
