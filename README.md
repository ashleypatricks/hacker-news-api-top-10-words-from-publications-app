# Hacker News API: Top 10 Words From Publications App

## Applications

This app is comprised of two parts:

- frontend (react app)
- backend (nodejs express server)

The api loads up first and waits for connections on it's port. The react app loads up second and immediately queries the two endpoints of the api (explained below).

The api is able to query the Hacker News API & also the Hacker News Website in order to get the data it needs to process and serve back to the front end app.

## Dependencies & Application Run & Test

The main dependency to run this app is Docker & Docker Compose. Simply run the following command to get the app up and running the script in the root directory:

`./start.sh`

If you get a permission denied error then execute this:

`chmod +x start.sh`

This will build, bootstrap and start both applications on your machine.

Make sure you open up a second terminal and run:

`docker-compose down`

to safely shutdown your docker environment resources.

If anything fails during the docker build process and you are using Docker Desktop, then set your Buildkit to `false` in the settings. Buildkit can be glitchy and problematic sometimes.

In order to test the app please `cd` into the `backend` folder. Then run:

`yarn test`

## Endpoints

You can go ahead and open up your browser at [http://localhost:3000](http://localhost:3000) to view the react app.

For the api endpoints you can submit GET requests to the following endpoints:

- [http://localhost:3001/stories/toptenwords](http://localhost:3001/stories/toptenwords)]

- [http://localhost:3001/posts/toptenwords](http://localhost:3001/stories/toptenwords)]
