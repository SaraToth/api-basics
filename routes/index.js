const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    return res.send("Received a GET HTTP method");
});

module.exports = indexRouter;