const express = require('express');
const cors = require('cors');
const movies = require("./src/db/movies.json")
const moviesRouter = require("./src/routes/movies")
const userRouter = require("./src/routes/users")
const fs = require("fs");
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors("*"))
app.use(bodyParser.json())

app.use("/movies", moviesRouter)
app.use("/users", userRouter)
app.listen(PORT, () => console.log(`server now listening on port ${PORT}`))