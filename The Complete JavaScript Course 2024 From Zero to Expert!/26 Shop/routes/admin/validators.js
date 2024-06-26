import {check} from "express-validator"
import usersRepo from "../../repositories/users.js"

const val = {
    requireTitle: check("title")
    .trim()
    .isLength({min:5,max:40})
    .withMessage("Title must be between 5 and 40 characters"),

    requirePrice: check("price")
    .trim()
    .toFloat()
    .isFloat({min:1})
    .withMessage("Price must me a number"),

    requireImage: check('image')
    .custom(async (image, { req }) => {
        const file = await req.file;
        if (!file) {
            throw new Error('Please upload file');
        }
    }),

    requireEmail: check("email")
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage("Must be a valid email")
    .custom(async (email) => {
        const existingUser = await usersRepo.getOneBy({email})
        if (existingUser) {
            throw new Error("Email in use")
        }
    }),

    requirePassword: check("password")
    .trim()
    .isLength({min:4,max:20})
    .withMessage("Password must be between 4 and 20 characters"),

    requirePasswordConfirmation: check("passwordConfirmation")
    .trim()
    .isLength({min:4,max:20})
    .withMessage("Password must be between 4 and 20 characters")
    .custom(async (passwordConfirmation, {req}) => {
        if (passwordConfirmation !== req.body.password) {
            throw new Error("Passwords must match")
        } 
    }),

    requireExistingEmail: check("email")
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage("Must be a valid email")
    .custom(async (email) => {
        const user = await usersRepo.getOneBy({email})
        if (!user) {
            throw new Error("Email not found")
        }
    }),

    requireExistingPassword: check("password")
    .trim()
    .custom(async (password, {req}) => {
        const user = await usersRepo.getOneBy({
            email: req.body.email
        })
        if (!user) {
            throw new Error("Invalid password")
        }
        const validPassword = await usersRepo.comparePasswords(
            user.password,
            password
        )
        if (!validPassword) {
            throw new Error("Invalid password")
        }
    })
}
 
export const {requireTitle, requirePrice, requireEmail, 
    requirePassword, requirePasswordConfirmation, 
    requireExistingEmail, requireExistingPassword,
    requireImage} = val 