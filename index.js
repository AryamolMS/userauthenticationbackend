

const jsonserver = require('json-server')

const server = jsonserver.create()

const router = jsonserver.router('db.json')

const middleware = jsonserver.defaults()

server.use(middleware)
server.use(router)

const port = 4000 || process.env.PORT

server.listen(port,()=>{
    console.log('server started');
})