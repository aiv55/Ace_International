$( document ).ready(function(){
	
	//show dropzone field
	$('#dropzonePreview').show();
	
	//navigation becomes fixed when you scroll down
	var navElement = $('nav ul');
	var contentTop = $('#body-content');
    var navOffset = navElement.offset().top;
    var scrollOffset; 
    function setNavPosition() {
    	scrollOffset = $(this).scrollTop();   	
      	var fix = (scrollOffset > navOffset) ? true : false;
      	navElement.toggleClass("fixed", fix);
		$('body').toggleClass("fixed-nav", fix);
	};
    function resetNavOffset() {
    	if (navElement.hasClass('fixed')) {
    		navOffset = contentTop.offset().top;
    		navOffset += - 34;
    	} else {
    		navOffset = navElement.offset().top;
    	};
	};
    $(window).scroll( setNavPosition );
    $(window).resize(function() {
    	var id;
    	clearTimeout(id);
    	id = setTimeout(resetNavOffset, 500);    
	});//end resize

	//smoothScroll
	$('nav a').smoothScroll();

	//phone input fields automatically shift focus to next input
	$('.phoneInput input').keyup(function(){
		
		var input = $(this).val().length.toString();
		var fieldSize = $(this).attr("size");
		
		if($(this).is("#phone1") && (input === fieldSize)){
			$('#phone2').focus();
		} else if($(this).is("#phone2") && (input === fieldSize)) {
			$('#phone3').focus();
		} else if(input === fieldSize) {
			$('#email').focus();
		};
	}); //end keyup event
	
}); //end ready