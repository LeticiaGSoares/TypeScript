interface IMailTo {
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    attachment ?: string[]; // ou Array<string>
}

interface IMessageDTO { //Data Transform Object
    to: IMailTo;
    message: IMailMessage
}

class EmailService {
    sendMail({to, message}: IMessageDTO){
        console.log(`Email enviado para ${to.name}: ${message.subject}`)
    }
}

export default EmailService