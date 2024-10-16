$(function () {

	    	function obtenerAlto( obj, alto ) {
	    		var width = $(window).width();
		    	if(500 >= width){
		    		$('.login-wrap').css("min-height",alto+"px");
		    	}
	    	};

	    	obtenerAlto( "ventana", $( window ).height() );

	    	$(window).resize(function(){
    	    	obtenerAlto( "ventana", $( window ).height() );
	    	});
    	});

	    $(".ui-button").click(function() {
	    	$(".ui-button").attr("disabled", true);
	    	$("input").attr("disabled", true);
	    	$(".login-html").addClass("effect");
	    });

	    function btn_desactivar(){
	    	$(".ui-button").attr("disabled", false);
	    	$("input").attr("disabled", false);
	    	$(".login-html").removeClass("effect");
	    }

    	$(".ui-password").on("keyup",function(){
    	    if($(this).val())
    	        $(".glyphicon-eye-open").show();
    	    else
    	        $(".glyphicon-eye-open").hide();
    	    });
    	$(".glyphicon-eye-open").mousedown(function(){
            $(".ui-password").attr('type','text');
        }).mouseup(function(){
        	$(".ui-password").attr('type','password');
        }).mouseout(function(){
        	$(".ui-password").attr('type','password');
        });