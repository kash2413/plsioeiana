

(function ($) {
	
	$(document).ready(function () {
		if ( typeof($.fn.lazyload) == "function" ) {
			$(".image-scroll-fade").lazyload({
				effect       : "fadeIn"
			});	
		}

	});
	
})(jQuery);