jQuery(function($) {

// QWERTY Text Input
	// The bottom of this file is where the autocomplete extension is added
	// ********************
	
	// QWERTY username
	// ********************
	$('#username').keyboard({
		openOn   : null,
		autoAccept : true,
		layout   : 'international',
		display : {
			'accept' : '确认',
			'shift'  : '大小写切换',
			'cancel' : '取消',
			'alt'   : '符号切换'
		}
	});
	$('#uname').click(function(){
		$('#username').getkeyboard().reveal();
	});
	// since IE adds an overlay behind the input to prevent clicking in other inputs (the keyboard may not automatically open on focus... silly IE bug)
	// We can remove the overlay (transparent) if desired using this code:
	$('#username').bind('visible.keyboard', function(e, keyboard, el){
	 $('.ui-keyboard-overlay').remove(); // remove overlay because clicking on it will close the keyboard... we set "openOn" to null to prevent closing.
	});
	
	

	// QWERTY Password
	// ********************
	$('#password').keyboard({
		openOn   : null,
		autoAccept : true,
		layout   : 'international',
		display : {
			'accept' : '确认',
			'shift'  : '大小写切换',
			'cancel' : '取消',
			'alt'   : '符号切换'
		}
	});
	$('#passwd').click(function(){
		$('#password').getkeyboard().reveal();
	});
	// since IE adds an overlay behind the input to prevent clicking in other inputs (the keyboard may not automatically open on focus... silly IE bug)
	// We can remove the overlay (transparent) if desired using this code:
	$('#password').bind('visible.keyboard', function(e, keyboard, el){
	 $('.ui-keyboard-overlay').remove(); // remove overlay because clicking on it will close the keyboard... we set "openOn" to null to prevent closing.
	});
});
