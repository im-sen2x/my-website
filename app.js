let Express = require("express")
app = Express()

PORT = process.env.PORT || 3000 
app.listen(() => console.log(`Node JS running on PORT: ${PORT}`))