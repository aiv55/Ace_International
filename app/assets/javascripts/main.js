

// phone input field auto-focus
$('.phoneInput input').keyup(function(){
	if(this.value.length==this.attr("size")){
		if(this.attr("size") == 4){
			this.parent().nextAll()[1].children().focus();
		} else {
			this.parent().nextAll()[1].focus();
		}
	}
}); //end keyup event.
