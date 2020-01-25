let express = require("express")
app = express()


app.use(express.static("static"))

app.get("/", (req, res) => {
    res.send("./static/index.html")
    // res.send("12314")
})

PORT = process.env.PORT || 3000 
app.listen(PORT, () => console.log(`Node JS running on PORT: ${PORT}`))