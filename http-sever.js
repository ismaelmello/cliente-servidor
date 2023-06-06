const express = require("express")
const fs = require("fs")
const app = express()


app.use(express.static(__dirname + '/public'))
app.use("/teste", (req, res) => {
    const { file, texto } = req.query
    fs.writeFileSync( file, texto)
    req.setEncoding(new Data())
})
app.listen(3000, () => console.log("Serve rodando"))