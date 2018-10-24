Alex should be asked to login using his Google Account when he visits the SV website.
- Done by firebase Tutorial
Firebase tutorial : https://medium.com/dailyjs/authenticating-a-vue-js-application-with-firebase-ui-8870a3a5cff8

Alex should be presented with multiple livestreams to choose from on the home page. These are sourced from YT live api and selected/sorted based on logic you define
- Google API
https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=live&type=video&videoCategoryId=20&regionCode=US&maxResults=40&key
DONE

Alex should be able to click on a livestream to watch it
- Vue JS onClick
GET https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=o3s3XHXRsQc&key={YOUR_API_KEY}
DONE

Alex should be able to see the associated chat session while watching Natalie's stream
- Retrive chat with google API
DONE

Alex should be able to post messages to the chat session for the livestream he's viewing
- Send request with API Key
DONE

All messages by Kevin to Natalie's livestream chat should be stored in a persistent storage
- LocalStorage definition
DONE

Alex should be able to visit the stats page
- ?

Alex should be able to search through all messages posted by Natalie's fans' usernames e.g. Kevin
- Filter VUE.JS

Alex should be able to see a table with usernames, message count (plus any other stats you feel like). This table should be sortable.
- Custom Stats

