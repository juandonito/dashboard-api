import * as http from 'http'
import app from './app/app'

import env from './app/loaders/env'
import db from './app/loaders/db'

const PORT = env.PORT
const DB_URI = env.DB_URI

db(DB_URI)

const server: http.Server = http.createServer(app)

server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})