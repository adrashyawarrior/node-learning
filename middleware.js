const ageMiddleware = (req, res, next) => {
    if (!req.query.age) {
        res.send("Please provide your age.");
    } else if (parseInt(req.query.age) < 18) {
        res.send("Only 18+ users allwed.");
    } else {
        next();
    }
}

module.exports = ageMiddleware;