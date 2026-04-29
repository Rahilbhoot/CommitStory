const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const githubRoutes = require('./routes/github');

app.use('/api/github', githubRoutes);

app.get('/', (req, res) => {
    res.send("CommitStory API is running");
})

app.listen(5000, () => {
    console.log("Server running at port 5000");
})