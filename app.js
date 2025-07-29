const express = require("express");
const app = express();
let models = require("./data");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const messagesRouter = require("./routes/messages");
const sessionRouter = require("./routes/session");

// Parses incoming JSON payloads
app.use(express.json());

// Parses URL encoded data (from forms)
app.use(express.urlencoded({ extended: true}));

// Passes over the current userId
app.use((req, res, next) => {
    req.context = {
        models,
        me: models.users[1],
    };
    next();
})

// Index route
app.use("/", indexRouter);

// Get user session
app.use("/session", sessionRouter);


app.use("/users", usersRouter);
app.use("/messages", messagesRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("App is running");
});