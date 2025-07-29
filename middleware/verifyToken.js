const verifyToken = (req, res, next) => {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];

    // Check if bearer is undefined
    if(typeof bearerHeader !== "undefined") {

        // Split bearer <token> in half and select for <token> only
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];

        req.token = bearerToken;
        next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }
};

module.exports = { verifyToken };