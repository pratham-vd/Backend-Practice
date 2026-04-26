import express from 'express';

// Import Routes
import movieroutes from "./routes/movieroutes.js ";

const app = express();

// API Routes
app.use("/movies", movieroutes)

const PORT = 5001;
const server = app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});

// GET,POST,PUT,DELETE
// http://localhost:5001/movies/hello
