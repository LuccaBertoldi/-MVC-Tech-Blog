const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');
const sequelize = require('./config/connection');
const sess = require('./config/express-session');
const homeRoutes = require('./controllers/homeController');
const userRoutes = require('./controllers/dashboardController');
const postRoutes = require('./controllers/postController');

const app = express();
const PORT = process.env.PORT || 5432;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session(sess));

const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use('/', homeRoutes);
app.use('/user', userRoutes);
app.use('/post', postRoutes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
});
