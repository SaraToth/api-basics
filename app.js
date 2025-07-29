const express = require("express");
const app = express();
const { users, messages } = require("./data");

app.get("/", (req, res) => {
    return res.send("Received a GET HTTP method");
});

app.get("/users", (req, res) => {
    return res.send(Object.values(users));
});

app.get("/users/:userId", (req, res) => {
    return res.send(users[req.params.userId]);
});

app.get("/messages", (req, res) => {
    return res.send(Object.values(messages));
});

app.get("/messages/:messageId", (req, res) => {
    return res.send(messages[req.params.messageId]);
});

app.post("/users", (req, res) => {
    return res.send("Received a POST HTTP method on user resource");
});

app.put("/users/:userId", (req, res) => {
    return res.send(
        `Received a PUT HTTP method on user/${req.params.userId} resource`
    );
});

app.delete("/users/:userId", (req, res) => {
    return res.send(
        `Received a DELETE HTTP method on user/${req.params.userId} resource`
    );
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("App is running");
});