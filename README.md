# vanilla-countdown
A countdown plugin made with vanillaJS

parameters: options {object}, element {object(DOM_NODE)}

use example:

```javascript
var element = document.querySelector('#my-element');

var counter = new vanillaCountdown({
		year: 2015,
		month: 11,
		day: 27,
		hour: 23,
		minute: 59,
		second: 59,
		text: false // Default: true
	}, element);
	
	counter.init();
```
