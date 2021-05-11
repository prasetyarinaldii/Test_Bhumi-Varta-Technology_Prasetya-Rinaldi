const router = require("express").Router()

router.get("/", (req, res) => {
    try {
        res.render("map")
    } catch (err) {
        res.send(err)
    }
})

module.exports = router