const express = require('express');
const routes = require('./routes');
// import sequelize connection
// const session = require('express-session');

// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const sess = {
//     secret: process.env.SESSION_SECRET,
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//         db: sequelize
//     })
// };

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
