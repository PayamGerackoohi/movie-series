const express = require('express')
const path = require('path')
const dev = process.env.DEV == 1
const HOST = 'localhost'
const PORT = process.env.PORT || 5000

const app = express()
app.use(express.static(path.join(__dirname, 'public')))
if(dev)
	app.listen(PORT, HOST, () => console.log(`Listening on ${HOST}:${PORT}`))
else
	app.listen(PORT, () => console.log(`Listening on ${PORT}`))
