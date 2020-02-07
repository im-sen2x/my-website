const express = require("express")
const path = require("path")
app = express()

app.use(express.static(path.join(__dirname, "static")))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get("/", (req, res) => {
    res.send("./static/index.html")
})

app.get("/contact", (req, res) => {
    res.send("./contact/index.html")
})

app.post("/contact", (req, res) => {
    console.log("contacted")
     const nodemailer = require("nodemailer")
     const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "lopez.jansen06@gmail.com",
          pass: process.env.PW
        }
      })
      
      const mailOptions = {
        from: "lopez.jansen06@gmail.com",
        to: "lopez.jansend@gmail.com",
        subject: `WORK INQUIRY FROM YOUR WEBSITE! ${req.body.title}`,
        text: `SENDER NAME: ${req.body.name}\nSENDER EMAIL: ${req.body.email}\nTITLE: ${req.body.title}\nSENDER MESSAGE: ${req.body.message}` 
      }
      
      transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
            return res.status(400).json({"status": "Not OK!", "message": error})
            
        }
        // console.log(`Message sent: ${info.messageId}`)
        return res.json({"status": "OK!", "message": "Email sent!"})
      })

})

PORT = process.env.PORT || 3000 
app.listen(PORT, () => console.log(`Node JS running on PORT: ${PORT}`))