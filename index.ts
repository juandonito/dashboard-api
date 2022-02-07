import * as http from 'http'
import app from './app/app'

const port = 3000

const server: http.Server = http.createServer(app)

server.listen(port, () => {
    console.log('Server running');
})