const express = require('express')
const app = express()
const path = require('path')
const multer = require('multer')
const upload = multer({dest:'uploads/'})
const {mergepdfs} = require('./merge')
const port = 3000

app.use('/static',express.static('public'))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates/index.html'))
})

app.post('/merge', upload.array('pdfs', 6), async (req, res,)=>{
    await mergepdfs(path.join(__dirname,req.files[0].path), path.join(__dirname, req.files[1].path))
    res.redirect("http://localhost:3000/static/merged.pdf")
})

app.listen(port, () => {
  console.log(`Example app listening on port https://localhost: ${port}`)
})