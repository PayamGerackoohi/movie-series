const dev = process.env.DEV == 1
console.log('dev: ' + dev)

if(dev)
  console.log('dev mode')
else
  console.log('release mode')

