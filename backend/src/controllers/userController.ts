import { Request, Response } from "express"
import EmailService from "./emailService"

const users = [
    {name: 'Diego', email: "diego@email.com"}
]

export default {
    async index(req: Request, res: Response) {
        res.json(users)
    },
    async create(req: Request, res: Response) {
        const emailService = new EmailService()
        emailService.sendMail({
            to: {name: "Ltícia G Soares", email: "leticia@mail.com"},
            message: {subject: "Bem vinda ao sistema", body: "Seja bem-vindo"}}
        )

        res.send()
    }
}