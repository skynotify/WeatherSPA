# WeatherSPA
Get a forecast for any US City, using pure AngularJS.  Single Page App with no persistence.

To use this app, you'll need to register with openweathermap to get a key for the API.
http://openweathermap.org/appid
------------------------------------

Then edit "js/weatherkey.js" and find:
var weatherkey = "";

then *paste* your key *between the quotes*.
====================================

NOTE: .gitignore is set to ignore changes to weatherkey.js to protect your weatherkey from accidental use by others.
------------------------------------
(of course, javascript is plain text, so once it's on a site, the public could take it on purpose)
