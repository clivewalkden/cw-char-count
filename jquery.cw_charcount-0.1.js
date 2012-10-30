/*!
 * Char Count Script - for jQuery 1.7+
 * http://www.cwenterprises.co.uk
 *
 * Copyright 2012, Clive Walkden (http://www.cwenterprises.co.uk)
 *
 * @package Char Count Script
 * @author Clive Walkden (http://www.cwenterprises.co.uk)
 * @version 1.0.0
 * @copyright Copyright (c) 2012 SOZO Design Ltd (http://www.cwenterprises.co.uk)
 * @date: 29-10-2012
 */

(function($){
	$.fn.CWCharCount = function(custom) {

		// Default plugin settings
		var defaults = {
            default_class   : 'cw_count',
			warning_level	: 15,
			warning_class	: 'cw_count_warning'
		};

		// Merge default and user settings
		var settings = $.extend({}, defaults, custom);

		this.each(function(){

			var self = this;

			var	count_object = 'cw_count_'+$(self).attr('id'),
				maxlength = $(self).attr('maxlength'),
				charcount = $(self).val().length,
				remaining = '';


			remaining = maxlength-charcount;

			$(self).after('<span id="'+count_object+'" class="'+settings.default_class+'">'+remaining+'</span>');

			$(self).on(
				'keyup', function(){
					charcount = $(self).val().length;

					if (charcount >= maxlength) {
						$(self).val($(self).val().substring(0, maxlength));
					}

					if ((maxlength - charcount) <= settings.warning_level) {
						$('#'+count_object).addClass(settings.warning_class);
					}else{
						$('#'+count_object).removeClass(settings.warning_class);
					}


					$('#'+count_object).text(maxlength - charcount);
				}
			)
		});

	}

})(jQuery);