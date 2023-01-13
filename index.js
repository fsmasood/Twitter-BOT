var Twit = require('twit');
var request = require('request');

var T = new Twit({
  consumer_key:         'yeFidtIN25e9y53yZ3ER66qCC',
  consumer_secret:      'iZaFtWOM45qDHcMQXrzU9RzcvZXETy73mvXsJhFihAJx77t4gy',
  access_token:         '1136636175714639873-EfmVQdOzWpsDam7BeQNljlxFgOH1cB',
  access_token_secret:  'f4kkZHwtdJGkokBmni3hVL8VIqJSuQpTEAkamYWNThaxD'
})

const url = "https://api.forismatic.com/api/1.0/?method=getQuote&key=692375&format=text&lang=en"

function getQuote (callback) {
	request(url, function (error, response, body) {
	  console.log('error:', error); // Print the error if one occurred
	  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	  console.log('body:', body);
	  callback(body); 
	});
}

function postTweet(tweet) {
	console.log(tweet);
	T.post('statuses/update', { status: tweet }, function(err, data, response) {
	  console.log(data);
	})
}

getQuote(postTweet)