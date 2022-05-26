const express = require('express');
const connect = require('./dbConnect/dbConnect');
const { notFound, errorHandler } = require('./Middleware/errorMiddleware');
const blogRouter = require('./Routes/blogs');
const categoryRouter = require('./Routes/categories');
const othersRouter = require('./Routes/others');



const app = express();

//built-in middleware
app.use(express.json());

// dbConect middleware
connect();

// Routes
app.use('/', blogRouter);
app.use('/', categoryRouter);
app.use('/', othersRouter)

// Server status
app.get('/', (req, res) => {
    res.send('Server is running');
})

// Error handling
app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Listening on port ${process.env.PORT || 5000}`);
})