console.log('The follow bot is starting');

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config)

//Setting up a user stream
var stream = T.stream('user')

//Anytime someone follows me
stream.on('follow', followed)

function followed(eventMsg) {
    console.log('Follow event')
    var name = eventMsg.source.name
    var screen_name = eventMsg.source.screen_name
    tweetIt('.@' + screen_name + ' takip için teşekkürler')
}



function tweetIt(txt) {
    
    var tweet = {
        status: txt
    }

    T.post('statuses/update', tweet, tweeted)

    function tweeted(err, data, response) {
        if (err) {
            console.log('Something went wrong')
        } else {
            console.log('It worked')
        }
    }
}