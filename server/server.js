const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const propertyRouter = require('./routes/property.router');
const routeRouter = require('./routes/route.router');
const taskRouter = require('./routes/task.router');
const timeCardRouter = require('./routes/timeCard.router');
const workOrderRouter = require('./routes/workOrder.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/property', propertyRouter);
app.use('/api/route', routeRouter);
app.use('/api/timeCard', timeCardRouter);
app.use('/api/task', taskRouter);
app.use('/api/workOrder', workOrderRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
