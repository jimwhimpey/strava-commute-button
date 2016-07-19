var strava = require('strava-v3');


strava.activities.create({
	access_token: process.env.STRAVA_WRITE_AUTH_TOKEN,
	'name': "Auto Commute",
	type: "Ride",
	start_date_local: new Date().toISOString(),
	elapsed_time: 900,
	distance: 3500,
	private: true
}, function (err, activity) {
	
	if (err) {
		console.log(err);
	} else {
		console.log("SUCCESS: " + activity.name + " is now created as " + ((activity.private) ? "private" : "public"));
		console.log("http://strava.com/activities/" + activity.id);
	}

});
