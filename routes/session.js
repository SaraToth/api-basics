const { Router } = require("express");
const sessionRouter = Router();

sessionRouter.get("/", (req, res) => {
    return res.send(req.context.models.users[req.context.me.id]);
});

module.exports = sessionRouter;