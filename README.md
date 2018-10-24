# My Streamlabs assigment

Online example available here: https://edeuxk.github.io/streamlabs/

At first, by reading the coding assignment I was pretty sure that it could have been done easily within 8 hours only using Javascript/Jquery and HTML with a Python server.
But I bet that you are looking for peoples that have a good ability to learn fast a new Framework/Language.. So, I decided to use a framework that I did not know and that you were using on your Stack: (VueJS)

Day #1 - 4 hours
=============
* Read ~30 minutes Youtube API documentation, livestream video, search and comments.
* I've watched ~3 hours of VueJS tutorials (From Grafikart)
* Read and tested ~30 minutes Firebase and Vue implementation.
Based on this tutorial : https://medium.com/dailyjs/authenticating-a-vue-js-application-with-firebase-ui-8870a3a5cff8

Day #2 - 4 hours
=============
* ~2h30 implementing Firebase Login, VueX logic and retrieve the Google Access Token.
I've been stuck at retrieving the Google credential access_token, I only was receiving the Google ApiKey from Firebase with the tutorial that I read before.
Then I made a full implementation included VueX Logic for a Popup Login using Firebase API to retrieve the Google credentials (accessToken and apiKey).
* ~1h30 by creating as many steps as possible included chat tests with friends online, also implementing bootstrap-vue and axios.

Steps:
=============
1. Alex should be asked to login using his Google Account when he visits the SV website.
* Done
2. Alex should be presented with multiple livestreams to choose from on the home page.
These are sourced from YT live api and selected/sorted based on logic you define
* Done
3. Alex should be able to click on a livestream to watch it
* Done
4. Alex should be able to see the associated chat session while watching Natalie's stream
* Done
5. Alex should be able to post messages to the chat session for the livestream he's viewing
* Done
6. All messages by Kevin to Natalie's livestream chat should be stored in a persistent storage
7. Alex should be able to visit the stats page
* Only on the video stream page, likes, dislikes, comments and views.
8. Alex should be able to search through all messages posted by Natalie's fans' usernames e.g. Kevin
9. Alex should be able to see a table with usernames, message count (plus any other stats you feel like). This table should be sortable.

Bonus
=============
10. The SV webapp is mobile responsive and setup as a PWA

Mobile responsive OK // PWA not sure.

7 - 8 - 9 - 11 - 12. No, I did not had time.

My result:
=============
The client application is a single index.html, mobile responsive and serverless. It only use API's such as Google Youtube and Firebase.
I think but I did not had time to build it, that my app is PWA compatible since I used vue-cli and I store the user credentials inside the local storage.
I've chose to serve my app through https://edeuxk.github.io/streamlabs/ so you are sure that the app is 100% serverless and only running with a single HTML page.
I also could have create a python server that only serve the index.html file for all HTTP Requests.

Note:
=============
I only used third party interfaces (libraries/apis) and the documentation wasn't very detailed for doing specific scenarios.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
"# streamlabs" 
