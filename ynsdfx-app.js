
$(document).ready(function initial() {
	// $('.page').hide();
	$('#page-1').show();
})
function page(index) {
	$('.page').hide();
	$('#page-'+index).show();
}