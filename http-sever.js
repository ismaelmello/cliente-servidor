const express = require("express")
const fs = require("fs")
const app = express()


app.use(express.static(_dirbame + '/public'))
app.use("/teste", (req, res) => {
    fs.writeFileSync(
        
    )
})
app.listen(3000, () => console.log("Serve rodando"))