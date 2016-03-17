(function($){
	$.fn.CWCharCount = function(custom) {

		// Default plugin settings
		var defaults = {
      default_class  : 'cw_count',
			warning_level  : 15,
			warning_class  : 'cw_count_warning'
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
