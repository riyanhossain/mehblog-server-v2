const express = require('express');
const connect = require('./dbConnect/dbConnect');
const { notFound, errorHandler } = require('./Middleware/errorMiddleware');
const blogRouter = require('./Routes/blogs');
const categoryRouter = require('./Routes/categories');
const others = require('./Routes/others');
const cors = require('cors');



const app = express();

//built-in middleware
app.use(express.json());

//external middleware
app.use(cors());

// dbConect middleware
connect();

// Routes
app.use('/api/v2/', blogRouter);
app.use('/api/v2/', categoryRouter);
app.use('/api/v2/', others)

// Server status
app.get('/', (req, res) => {
    res.send('server is running');
})

// Error handling
app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Listening on port ${process.env.PORT || 5000}`);
})