const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/app.html")
})
app.use(express.static(__dirname));

app.listen(3000, () => {
    console.log("Av Bigbuddy is live");
})
