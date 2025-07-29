const { Router } = require("express");
const messagesRouter = Router();
const { v4: uuidv4 } = require("uuid");
const { verifyToken } = require("../middleware/verifyToken");
const jwt = require("jsonwebtoken");

messagesRouter.get("/", (req, res) => {
    return res.send(Object.values(req.context.models.messages));
});

messagesRouter.get("/:messageId", (req, res) => {
    return res.send(req.context.models.messages[req.params.messageId]);
});

messagesRouter.post("/", verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err) {
            res.sendStatus(403);
        } else {

            const id = uuidv4();
            const message = {
                id,
                text: req.body.text,
                userId: req.context.me.id,
            };

    req.context.models.messages[id] = message;
            res.json({
                message,
                authData
            })
        }
    })

});

messagesRouter.delete("/:messageId", (req, res) => {
    const {
        [req.params.messageId]: message,
        ...otherMessages
    } = req.context.models.messages;

    req.context.models.messages = otherMessages;

    return res.send(message);
});

module.exports = messagesRouter;