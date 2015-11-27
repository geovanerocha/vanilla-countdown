# Vanilla Countdown

A countdown plugin made with vanillaJS.

Parameters: options {object}, element {object(DOM_NODE)}

## Usage

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
