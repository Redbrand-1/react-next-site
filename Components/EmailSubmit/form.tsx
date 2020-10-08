import React, { useState} from 'react'
import { Form, Input, Button, message } from 'antd'
import { UserOutlined } from '@ant-design/icons'

import Axios from 'axios'

const InputUi: React.FC = (): JSX.Element => {

  const [form] = Form.useForm()

  const [ status , setStatus ] = useState<boolean>(false) // для блокировки кнопки

  const onFinish = values => {
    setStatus(true)
    Axios.post('api/mail', values)
    .then(() => {
      form.resetFields() // сброс значений
      setStatus(false)
      message.success('Сообщение отправлено', 5)
    })
    .catch((err) => {
      setStatus(false)
      message.error('Ошибка, сообщение не отправлено', 5)
      throw err.massage
    })
  }

  return (
    <Form 
      style={{width: '100%', maxWidth: '500px', marginTop: '20px'}}
      form={form}
      name="horizontal_login"
      onFinish={onFinish}
    >

      <Form.Item
        name="username"
        rules={[
          { required: true, message: 'Пожалуйста введите ваше имя' },
          { max: 30, message: 'Пожалуйста введите имя меньше 30 символов' }
        ]}
      >
        <Input
          placeholder= "Введите ваше имя"
          prefix={<UserOutlined className="site-form-item-icon" />}
        />
      </Form.Item>

      <Form.Item
        name="phone"
        rules={[
          { required: true, message: 'Пожалуйста введите ваш номер телефона' },
          { max: 15, message: 'Пожалуйста введите коректный номер' }
        ]}
      >
        <Input 
          addonBefore={'+7'}
          style={{ width: '100%' }}
          placeholder= "Введите номер телефона"
        />
      </Form.Item>

      <Form.Item
        name="text"
        rules={[
          { max: 300, message: 'Пожалуйста оставте сообщение меньше 300 символов' }
        ]}
      >
        <Input.TextArea
          style={{minHeight: '100px'}}
          placeholder= "Оставте сообщение"
        />
      </Form.Item>

      <Form.Item style={{width: '100%'}} className="fx_ctr">
        <Button type="primary" htmlType="submit" style={{background: "#FF7C0D", borderColor: "#FF7C0D"}} disabled={status}>
          Оставить сообщение
        </Button>
      </Form.Item>
    </Form>
  )
}

export default InputUi