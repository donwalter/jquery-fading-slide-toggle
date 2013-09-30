/* --------------------------------------

To call:

$('#clickedEl').fadingSlideToggle('#toggleEl');

-------------------------------------- */

(function($) {
	$.fn.fadingSlideToggle = function($el, options) {
		var defaults = {
			duration:	500,
			easing:		'swing',
			trigger:	'click'
		};

		var settings = $.extend({}, defaults, options)
			$selector = $(this).selector;

		return this.each(function() {
			var $this = $(this);

			$(document).on(settings.trigger, $selector, function(e) {
				e.preventDefault();
				if ($($el).css('display') == 'none') {
					$($el).animate({
						opacity: 1,
						height: 'toggle'
					}, settings.duration, settings.easing);
				} else {
					$($el).animate({
						opacity: 0,
						height: 'toggle'
					}, settings.duration, settings.easing);
				}
			});
		});
	};
})(jQuery);
