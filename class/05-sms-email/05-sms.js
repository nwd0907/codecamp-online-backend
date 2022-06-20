import coolsms from "coolsms-node-sdk"
import 'dotenv/config'

export async function sendTokenToSMS(phone, token){
    const SMS_KEY = process.env.SMS_KEY
    const SMS_SECRET = process.env.SMS_SECRET
    const SMS_SENDER = process.env.SMS_SENDER

    const mysms = coolsms.default
    const messageService = new mysms(SMS_KEY, SMS_SECRET)
    const result = await messageService.sendOne({ 
        to: phone, 
        from: SMS_SENDER, 
        text: `[코드캠프] 안녕하세요?! 요청하신 인증번호는 [${token}] 입니다.` 
    })
    console.log(result)

    // console.log(phone + "번호로 인증번호" + token + "를 전송합니다!!")
}

const phone = "01012345678"
const token = String(Math.floor(Math.random() * 6)).padStart(6, "0")
sendTokenToSMS(phone, token)