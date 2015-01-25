$(window).load(function() {
    $('.main-backgr').flexslider({
        animation: "slide"
    });

    $('.brands-logo').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 130,
        itemMargin: 7,
        controlNav: false
    });

    $('.popular').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 144,
        itemMargin: 13,
        controlNav: false
    });
});

$(document).ready(function() {
    $(".js-example-basic-single").select2({
        placeholder: "Select one...",
        allowClear: true
    });
});
$(function() {
	$( "#slider-range" ).slider({
			range: true,
			min: 0,
			max: 2000,
			values: [ 0, 2000 ],
			slide: function( event, ui ) {
			$( ".js-price-from" ).val("$" + ui.values[ 0 ]);
			$( ".js-price-to" ).val("$" + ui.values[ 1 ]  );
		}
	});
$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
	" - $" + $( "#slider-range" ).slider( "values", 1 ) );
	$( ".js-price-from" ).val("$" + $( "#slider-range" ).slider( "values", 0 ));
	$( ".js-price-to" ).val("$" + $( "#slider-range" ).slider( "values", 1 ) );
});