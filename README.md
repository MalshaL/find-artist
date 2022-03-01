# Find your favourite artists on Spotify

> A web app to search and visualise artist data and audio features of their top tracks.

View the application on [heroku](https://find-artist-app.herokuapp.com/).

This project was created with,

- [Spotify Web API](https://developer.spotify.com/documentation/web-api/)
- [Create React App](https://github.com/facebook/create-react-app)
- [Ant Design](https://ant.design/)
- [Express](https://expressjs.com/)

## Setting up locally

1. Clone this repository.
2. Create a `.env.local` file in the `/server` directory based on the `.env.sample` file.
3. Create Spotify credentials at the 
[Spotify developer dashboard](https://developer.spotify.com/dashboard/login) and add to the `.env` file.
4. Go to `/server` directory and run `nvm run dev`.
5. Go to `/client` and run `npm install`.
6. View output on `localhost:3000/` in your browser.

## Deploying on Heroku

1. Create new heroku app.

```heroku create app-name```

2. Set environment variables for Heroku.

```
heroku config:set AUTH_API_URL='https://accounts.spotify.com/'
heroku config:set API_URL='https://api.spotify.com/v1/'
heroku config:set CLIENT_ID=xxxx
heroku config:set CLIENT_SECRET=xxxx
```

3. Push changes to heroku.

```git push heroku main```

4. View the app on `https://app-name.herokuapp.com`.

## Using the App

1. Search for any artist/musician you like.
2. Select an artist from the search results. 
3. View details about the artist and their top tracks.
4. Select tracks to view audio features for each track.

## With more time I would,

1. Add testing for React components and backend
2. Add new features



