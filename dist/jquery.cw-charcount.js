/*!
* cw-charcount - for jQuery 1.7+
* http://clivewalkden.co.uk/code/cw_charcount/
*
* Copyright 2014, Clive Walkden (http://clivewalkden.co.uk)
*
* @package This script shows a visual counter next to the input field showing the number of characters remaining for the given field.
* @author Clive Walkden (http://clivewalkden.co.uk/)
* @version 0.2.0
* @copyright Copyright (c) 2014 Clive Walkden (http://clivewalkden.co.uk/)
* @date: 2014-02-28
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
				remaining = '',
				control = $(self).data('control');

			remaining = maxlength-charcount;

			if(control) {
				$('#'+control).attr('id',count_object).addClass(settings.default_class).html(remaining);
			}else{
				$(self).after('<span id="'+count_object+'" class="'+settings.default_class+'">'+remaining+'</span>');
			}

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
			);
		});
	};
})(jQuery);