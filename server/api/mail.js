const { Router } = require('express')
const router = Router()
const nodemailer = require('nodemailer')

module.exports = router.post('/', async (req , res) => {
  res.setHeader('Content-Type', 'application/json')
  console.log(req.body)
  const Data = (
    `
    <h2>Имя: ${req.body.username} </h2><hr/>
    <h2>Номер телефона: ${req.body.phone}  </h2><hr/>
    <h2><pre>Текст: ${req.body.text}  </pre><hr/></h2>
    `
  )

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
        user: 'prm.avrora@gmail.com',
        pass: '2262874Zxc'
    }
  })

  try {
    await transporter.sendMail({
      from: 'Тестовые сообщения',
      to: 'prm.avrora@gmail.com', // почта куда отправляем
      subject: `Заказ от : ${req.body.username}`, // шапка
      html: Data,
    })

    res.statusCode = 200
    res.end()

  } catch (e) {
    res.statusCode = 400
    res.end()
  }
})