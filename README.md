# TinyApp Project

Tweeter is a single page, data displaying application that utilizes HTML5, jQuery, and CSS methods. These features have been combined to display Tweets from data which is then displayed locally, mimicking the popular web-app known as "Twitter". 

## Final Product

!["Desktop Format"](https://github.com/JamesMurphyy/tweeter/blob/master/docs/Tweeter%20App%20ss1.PNG?raw=true)

!["Mobile Format"](https://github.com/JamesMurphyy/tweeter/blob/master/docs/Tweeter%20App%20ss3.PNG)

!["Mobile Format Displaying Tweets"](https://github.com/JamesMurphyy/tweeter/blob/master/docs/Tweeter%20App%20ss2.PNG)


## Dependencies Used

- Express
- Chance
- Body-parser
- MD5

## Getting Started

- Install all dependencies (using the `npm install` command).
- Run the development web server using the `npm run local` command.

## When Installed

- Go to `localhost:8080` on your browser.
- Once there, you will see two randomly generated tweets.
- You are able to submit tweets after inputting text that is over 0 and under 140 characters long.
- Once submitted, your message will be displayed under the text area where a randomly generated name and user handle will be given to you with the exact date your message was submitted.
- These tweets are stored and can be browsed through at any time.
- A button will be displayed on the bottom right of the screen when you scroll down past a certain length of the page.
- You are also able to view the tweets without having to see the input text area by clicking the top right arrow label (Undone by a reclick of the arrow).