const server = require('./app')
const next = require('next')
    
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const PORT = "3000"

const handle = app.getRequestHandler()
    
app.prepare()
.then(() => {
    
  server.get('*', (req, res) => {
    return handle(req, res)
  })
    
  server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`сервр запущен на порте ${PORT}`)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})