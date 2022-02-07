import express, { Application, NextFunction, Request, Response } from 'express'
import * as http from 'http'

import cors from 'cors'

const app: Application = express()
const server: http.Server = http.createServer(app)
const port = 3000


app.use(express.json())
app.use(cors())


app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send('Server running')
})

server.listen(port, () => {
    console.log('Server running');
})