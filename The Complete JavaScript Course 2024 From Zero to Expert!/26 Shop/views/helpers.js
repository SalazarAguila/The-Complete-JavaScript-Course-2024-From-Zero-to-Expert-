const helper = {
    getError(errors, prop) {
        try {
            return errors.mapped()[prop].msg
        } catch (err) {
            return ""
        }
    }
}


export const {getError} = helper