const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv/config");

//** Import Routes */
const postRoutes = require("./routes/posts");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auths");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());

app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);
app.use('/api/', authRoutes);

//** Routes */
app.get('/', (req, res) => {
    res.send(`RESTful API is running... 
    \nPlease use below routes(CRUD) (POST, GET, PATCH, DELETE) :
    \n1. http://localhost:5000/api/login
    \n2. http://localhost:5000/api/forgotPassword
    \n3. http://localhost:5000/api/forgotUsername
    \n4. http://localhost:5000/api/ChangePassword
    \n5. http://localhost:5000/api/users
    `);
});

//** Connect to DB */
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Database connected.");
});

//** Start listening to the server */
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));