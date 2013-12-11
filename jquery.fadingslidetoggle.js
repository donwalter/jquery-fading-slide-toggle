/*
* jQuery Fading Slide Toggle 1.0.1, jQuery plugin
* https://github.com/donwalter/jquery-fading-slide-toggle
*
* Copyright(c) 2013, Don Walter
* http://www.don-walter.com/
*
* Adds fading capabilities to slideUp and slideDown
* Licensed under the MIT License
*/

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
						opacity: 'toggle',
						height: 'toggle'
					}, settings.duration, settings.easing);
				} else {
					$($el).animate({
						opacity: 'toggle',
						height: 'toggle'
					}, settings.duration, settings.easing);
				}
			});
		});
	};
})(jQuery);
