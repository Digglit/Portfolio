const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const twilio = require('twilio')

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken)

app.get('/api/contactForm', (req, res) => {
    const {messageInfo} = req.query
    console.log(messageInfo)
    client.messages.create({
        to: '14406223278',
        from: process.env.TWILIO_PHONE_NUMBER,
        body: messageInfo
      }).then(() => console.log(`Message sent`))
        .catch((error) => console.log(error))
    res.end()
})

const port = 4000
app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})