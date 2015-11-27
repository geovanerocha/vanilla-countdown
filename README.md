# vanilla-countdown
A countdown plugin made with vanillaJS

parameters: options {object}, element {object(DOM_NODE)}

use example:

```javascript
var counter = new vanillaCountdown({
		year: 2015,
		month: 11,
		day: 27,
		hour: 23,
		minute: 59,
		second: 59,
		text: true, // Value for the text labels, default: true
		end_text: 'Event is over' // Value for the text when the event is over
	}, element);
	
	counter.init();
```
