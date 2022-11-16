const express = require('express');
const app = express();

app.use(express.json());

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