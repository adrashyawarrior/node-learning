function pageNotFound(req, res, next) {
    res.status(404).send("Oops! Page Not Found.");
}

module.exports = {
    pageNotFound,
};