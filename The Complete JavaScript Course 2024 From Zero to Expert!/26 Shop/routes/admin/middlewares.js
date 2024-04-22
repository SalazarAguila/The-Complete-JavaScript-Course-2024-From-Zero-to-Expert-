import {validationResult} from "express-validator"

const middleware = {
    handleErrors(template, dataCb) {
        return async (req,res,next) => {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                let data = {}
                if (dataCb) {
                    data = await dataCb(req)
                }
                return res.send(template({errors,...data}))
            }
            next()
        }
    },
    requireAuth(req, res, next) {
        if (!req.session.userId) {
            return res.redirect("/signin")
        }
        next()
    }
}

export const {handleErrors, requireAuth} = middleware