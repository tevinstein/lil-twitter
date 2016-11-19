# lil-twitter

Just like it's name, lil-twitter is a simpler version of twitter. lil-twitter lets user creates and login account as well as post and delete their tweets.

##### This is one of my Hacktiv8's project using:
- Node.js v6+
- Express
- MongoDB
- Mongoose
- JQuery and Ajax
- User Authentication and Authorization with jsonwebtoken and passport-local

## Installation
- Clone the repo: `git clone https://github.com/tevinstein/lil-twitter.git`

#### In the folder *server*
- Install packages: `npm install`
- Start the server: `npm start`

#### In the folder *client*
- Preview the html file in your browser by opening **index.html** or run live-server if you have it installed `live-server`

## Restful API
| URL       | Method | Description     |
|-----------|--------|-----------------|
| /api/tweets    | GET    | Shows all tweets |
| /api/tweets     | POST   | Creates a tweet  |
| /api/tweets/:id | GET    | Shows a tweet    |
| /api/tweets/:id | DELETE | Deletes a tweet  |
| /api/users    | GET    | Shows all user |
| /api/users     | POST   | Creates a user  |
| /api/login | POST    | Logs in a user    |
| /api/users/:id | PUT    | Edits a user    |
| /api/users/:id | DELETE | Deletes a user  |

## Screenshots

[![lil-twitter homepage](http://i.imgur.com/EMFQ1R7.png "lil-twitter homepage")](http://i.imgur.com/EMFQ1R7.png "lil-twitter homepage")

[![lil-twitter sign up modal](http://i.imgur.com/A1RVRce.png "lil-twitter sign up modal")](http://i.imgur.com/A1RVRce.png "lil-twitter sign up modal")

[![lil-twitter](http://i.imgur.com/O9OznSJ.png "lil-twitter")](http://i.imgur.com/O9OznSJ.png "lil-twitter")