var vanillaCountdown = function(options, element) {
	
    if(!options || typeof(options) !== 'object') {
		console.error('Invalid parameter, must be an Object!');
		return false;
	}

    if(!element.ELEMENT_NODE){
		console.error('Invalid element parameter, must be a DOM node');
		return false;
	}

    var that = this,
          YY = options.year,
          MM = options.month,
          DD = options.day,
          HH = options.hour,
          MI = options.minute,
          SS = options.second;

    options.text		 = options.text || true;
    options.end_text = options.end_text || 'Thank you for support us, the event has finished';

    that.init = function() {
		setInterval(function() {
			countDown()
		}, 1000);
	};

    Number.prototype.converted = function(){
		return (this < 10) ? ("0" + this) : this;
	};

    function countDown() {
		var actual_date          = new Date(),
		    actual_day           = actual_date.getDate(),
	    	    future_date	         = new Date(YY,MM-1,DD,HH,MI,SS),
	    	    ss 			 = parseInt((future_date - actual_date) / 1000),
	    	    mm  		 = parseInt(ss / 60),
	    	    hh 			 = parseInt(mm / 60),
	    	    countdown_string	 = '',
	    	    dd     		 = parseInt(hh / 24);

	    ss = ss - (mm * 60);
	    mm = mm - (hh * 60);
	    hh = hh - (dd * 24);

	    countdown_string = '<span class="vanilla-countdown-numbers"> \
			            <span class="number-day">{{number_day}}</span> \
			            <span class="number-hour">{{number_hour}}</span> \
			            <span class="number-minute">{{number_minute}}</span> \
			            <span class="number-second">{{number_second}}</span> \
			        </span>';

		if(!!options.text){
			var text_template = '<span class="vanilla-countdown-texts">	\
						 <span class="text-day">dia</span> \
					    	 <span class="text-hour">{{text_hour}}</span> \
					    	 <span class="text-minute">{{text_minute}}</span> \
					    	 <span class="text-second">{{text_second}}</span> \
					   </span>';

			countdown_string = countdown_string + text_template;
		}

		countdown_string = countdown_string.replace('{{number_day}}', (dd && dd > 1) ? dd.converted()+':' : (dd==1 ? '01:' : '') );
		countdown_string = countdown_string.replace('{{number_hour}}', (toString(hh).length) ? hh.converted()+':' : '' );
		countdown_string = countdown_string.replace('{{number_minute}}', (toString(mm).length) ? mm.converted()+':' : '' );
		countdown_string = countdown_string.replace('{{number_second}}', ss.converted() );

		if(!!options.text){
			countdown_string = countdown_string.replace('{{text_hour}}', (hh > 1) ? 'horas' : 'hora' );
			countdown_string = countdown_string.replace('{{text_minute}}', (mm > 1) ? 'minutos' : 'minuto' );
			countdown_string = countdown_string.replace('{{text_second}}', (ss > 1) ? 'segundos' : 'segundo' );
		}

	    (options.day && options.day > actual_day) ? element.innerHTML = options.end_text : element.innerHTML = countdown_string;

	}
	
};
