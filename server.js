// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data

var express = require('express')
var app = express()
var fs = require('fs')

var jsonData = { count: 12, message: 'hey' };

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html', (err) => {
//         if (err) {
//             res.status(500).send(err)
//         }
//     })
// })
app.get('/', (req, res) => {
    fs.readFile('index.html', (err, buffer) => {
        var html = buffer.toString();
        res.setHeader('Content-Type', 'text/html')
        res.send(html);
    })
})

app.get('/data', (req, res) => {
    res.json(jsonData)
})

var port = 4000;
app.listen(port, () => {
    console.log(`server is up and running on http://localhost:${port}`)
})