import nodemailer from 'nodemailer'
import 'dotenv/config'

export function getToday(){
    const aaa = new Date()
    const yyyy = aaa.getFullYear()
    const mm = aaa.getMonth() + 1
    const dd = aaa.getDate()
    const today = `${yyyy}-${mm}-${dd}`
    return today
}

export function getWelcomeTemplate({name, age, school}){
    return `
        <html>
            <body>
                <div style="display: flex; flex-direction: column; align-items: center;">
                    <div style="width: 500px;">
                        <h1 style="color: red">${name}님 가입을 환영합니다!!!</h1>
                        <hr />
                        <div>이름: ${name}</div>
                        <div>나이: ${age}살</div>
                        <div>학교: ${school}</div>
                        <div>가입일: ${getToday()}</div>
                    </div>
                </div>
            </body>
        </html>
    `
}

export async function sendTemplateToEmail(email, template){
    const EMAIL_USER = process.env.EMAIL_USER
    const EMAIL_PASS = process.env.EMAIL_PASS
    const EMAIL_SENDER = process.env.EMAIL_SENDER

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS
        }
    })
    const result = await transporter.sendMail({
        from: EMAIL_SENDER,
        to: email,
        subject: "[코드캠프] 가입을 축하합니다!!!",
        html: template
    })
    console.log(result)

    // console.log(email + "이메일로" + template + "를 전송합니다.")
}

const email = "a@a.com"
const template = getWelcomeTemplate()
sendTemplateToEmail(email, template)