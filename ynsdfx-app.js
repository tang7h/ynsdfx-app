
$(document).ready(function initial() {
	$('.page').hide();
	$('#page-1').show();
	$('#page-edit').show();
})
function page(index) {
	$('.page').hide();
	$('#page-edit').show();
	$('#page-'+index).show();
}
$(document).ready(function(){
	$('.nav-toggle').click(function(){
		$('.nav-toggle').removeClass('curr');
		$(this).addClass('curr');
	});

	$('.btn-page-edit').click(function(){
		$('#page-edit').toggleClass('show');
	});
	$('.btn-page-edit-close').click(function(){
		$('#page-edit').removeClass('show');
	});
})