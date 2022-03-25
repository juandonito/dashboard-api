import { Request, Response, NextFunction } from "express"

const authorizedMethodsHandler = (req: Request, res: Response, next: NextFunction) => {

    const allowedMethods = [
        "OPTIONS",
        "HEAD",
        "CONNECT",
        "GET",
        "POST",
        "PUT",
        "DELETE",
        "PATCH"
    ]

    if(!allowedMethods.includes(req.method)) {
        res.status(405).send(`${req.method} not allowed.`)
    }

    next()

}

export default authorizedMethodsHandler