const express = require('express')
const app = express()
const port = 3000

//routing route

app.get('/hello', (req, res) => {
    // res.send('hello world!')
    res.json('hello world kita')

})



app.listen(port, () => {
    console.log('example app listening on PORT:', port)
})