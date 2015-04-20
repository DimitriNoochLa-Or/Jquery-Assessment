// Equivalent event setup using the `.on()` method
$( ".dan" ).click(function() {
	alert( "Hey you clicked on me" );
	$( ".dan" ).fadeOut( "slow", function() {
	// Animation complete.
	});
});
$( "#iwao" ).click(function() {
alert( "Hey you clicked on me again i told u not to" );
	$( "#iwao" ).fadeOut( "slow", function() {
	// Animation complete.
	});
});
