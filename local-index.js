const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const HOST = 'localhost'

express()
	.use(express.static(path.join(__dirname, 'public')))
	//.use(express.static(path.join(__dirname, 'frontend/dist')))
	.get('/', (_, res) => res.redirect('index.html'))
	.listen(PORT, HOST, () => console.log(`Listening on ${HOST}:${PORT}`))
