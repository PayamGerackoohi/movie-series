const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
// const HOST = 'localhost'

express()
	.use(express.static(path.join(__dirname, 'public')))
	.get('/', (_, res) => res.redirect('index.html'))
	.listen(PORT, () => console.log(`Listening on ${PORT}`))
	// .listen(PORT, HOST, () => console.log(`Listening on ${PORT}`))
