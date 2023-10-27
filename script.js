$('.form_label.focus-in').removeClass('focus-in')
//when form input is in focus state
$('.form_input').on('focusin',function(){
	$(this).siblings('.form_label').addClass('focus-in')
})
$('.form_input').on('focusout',function(){
//	when form input is out of focus state without value
  if($(this).val() == ''){
 	$(this).siblings('.form_label').removeClass('focus-in')
  }
  //when form input is out of focus state with value
  if($(this).val() !== ''){
  	$(this).siblings('.form_label').addClass('focus-in')
  }
})