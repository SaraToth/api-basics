const { Router } = require("express");
const usersRouter = Router();

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