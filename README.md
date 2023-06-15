# CatWiki

This is a basic template to get you started with the CatWiki challenge.
It contains a frontend and a backend, with some very basic interaction
between them. Feel free to modify whatever you wish, or to start 
completely from scratch! :smiley_cat:

## Starting the backend

To start up the backend Node.js server, run the following command in your
terminal (note: you'll need to have Node v16.x or above installed):

```
npm start
```

The server will run on port 3001 by default. You can test it by running
something like this:

```
curl localhost:3001/api
{"message":"Hello from CatWiki!"}
```

## Starting the frontend

Open a new tab, and run the following commands in your terminal:

```
cd client
npm start
```

This should open up a new page in your default web browser at `localhost:3000`.
At this point, you should see the placeholder CatWiki app homepage.

## Running frontend tests

From the `client` directory, run the following:

```
npm test
```

This will run the test suite for you.

## Deploying to Heroku

First, make sure you have a Heroku account, and have successfully logged
in to Heroku on the command line via `heroku login`.

You'll need to create a new Heroku app (if you haven't already). You can
do this with the following (replace `${insert-your-app-name-here}` with the
word `catwiki` followed by your actual name, e.g. `catwiki-johnsmith`):

```
heroku app:create ${insert-your-app-name-here}
```

Next we need to add a Git remote for Heroku and commit any changes:

```
heroku git:remote -a ${insert-your-app-name-here}
git add .
git commit -am "Deploy app to Heroku"
```

Finally we can push our code to the Heroku remote, which will automatically
build and run our app for us. 

```
git push heroku master
```

You'll then be able to access your app at 
`http://${insert-your-app-name-here}.herokuapp.com`! :tada:

## Pushing changes to your GitHub repository

```
git remote add origin git@github.com:${your-github-username}/catwiki.git
git push origin master
```


## Challenge

Challenge: Create a CatWiki app.


We’d like you to build us a full-stack web app to look up different breeds of cats. At a minimum, your app should be able to serve up a single page with some basic information about cats (with pictures of course!). 


As a guide, you should look to spend about 90 minutes on this challenge. Submissions which are well-structured but implement fewer features are likely to score higher than submissions which are poorly structured but implement everything!


We’d like you to use GitHub to version your code. We’re looking for a clear, logical commit history that shows us the stages you went through while you were working on your app.


We’d also like you to deploy your app to onrender  (or similar cloud platform) so that we can take a look at what you’ve built! We just can’t get enough of those sweet, sweet kitty pics. 😸


Please fork the following GitHub repository and use it as a starting point: https://github.com/blowfishstudios/catwiki. You are more than welcome to change this template as you wish - but please avoid copying existing CatWiki solutions, those are easy to spot!


Use the Cat API   https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t     to complete this challenge. The client-side should not use the API directly. Everything should be handled on the server-side. For example, searching for a cat breed should send the search query to your backend, and your backend should then call the Cat API.


Here are the user stories you might want to implement:


User story: I can search for cat breeds from the homepage and select a breed of my choice from a list

User story: I can see more photos of the breed on the breed details page

User story: I can see the breed details including description, temperament, origin, life span, adaptability, affection level, child-friendly, grooming, intelligence, health issues, social needs, stranger friendly

User story: I can see the top 10 most searched cat breeds on the homepage


Again, we don’t recommend you try to implement all of these, we don’t want you spending days on this! Just do your best, and keep in mind all your knowledge about clean coding, code hygiene, unit testing, TDD etc.


We’d like your frontend to look nice, but don’t worry too much about styling. Here are some ideas of what the CatWiki app might look like (but yours can look different to this):





When you submit, please include your GitHub link and a live link to your running app, along with a short description of what you’ve done (ideally in the README.md file). If you have any questions, please feel free to shoot them over to us.


We look forward to seeing your app! 😀