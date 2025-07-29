const { Router } = require("express");
const usersRouter = Router();
const jwt = require("jsonwebtoken");

// Generates a login token
usersRouter.post("/login", (req, res) => {

    // Mock user (When normally user info is sent via a login form amd authenticated and returned via passport and our db)
    const user = {
        id: 1,
        username: "sara",
        email: "sara@naver.com"
    };

    jwt.sign({user}, 'secretkey', (err, token) => {
        res.json({
            token
        });
    });
});

usersRouter.get("/", (req, res) => {
    return res.send(Object.values(req.context.models.users));
});

usersRouter.get("/:userId", (req, res) => {
    return res.send(req.context.models.users[req.params.userId]);
});

usersRouter.post("/", (req, res) => {
    return res.send("Received a POST HTTP method on user resource");
});

usersRouter.put("/:userId", (req, res) => {
    return res.send(
        `Received a PUT HTTP method on user/${req.params.userId} resource`
    );
});

usersRouter.delete("/:userId", (req, res) => {
    return res.send(
        `Received a DELETE HTTP method on user/${req.params.userId} resource`
    );
});

module.exports = usersRouter;