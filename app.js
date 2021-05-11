const express = require("express")
const app = express()
const router = require("./routers/index")
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(router)

app.listen(port, () => {
    console.log(`runing on port ${port}`)
})