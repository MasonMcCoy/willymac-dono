const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

const db = require('./models');

// Routes
const userRouter = require('./routes/Users.js');
app.use("/users", userRouter);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    })
})