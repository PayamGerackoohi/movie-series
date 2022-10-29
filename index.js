const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
// const HOST = process.env.HOST || 'localhost'

express()
	.use(express.static(path.join(__dirname, 'public')))
	//.use(express.static(path.join(__dirname, 'frontend/dist')))
	//.get('/', (_, res) => res.redirect('index.html'))
	.listen(PORT, () => console.log(`Listening on ${PORT}`))
