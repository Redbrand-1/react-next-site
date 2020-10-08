import React, { useState } from 'react';
import { Form, Input } from 'antd';
import { ExpandAltOutlined  } from '@ant-design/icons';
import { useSelector } from 'react-redux'

import SelectAntd from './select'

interface Props {
  setSelectAntd(val: number)
  setWidthInput(val: number)
  maxHeight: number
  maxWidth: number
}

interface ValInp {
  Width: string, Height: string
}

const FormStill: React.FC<Props> = (props): JSX.Element => {
  const [form] = Form.useForm();

  const [ valueInput, SetValueInput ] = useState<string>( '500' )// локальное value, только тут и используется

  const Validation = ( value: string ) => {
    if(Number(value) !== NaN) { // проверка на число

      if(/^[0-9]+$/.test(value)) { // тока цифры
        if(Number(value) > 5000 ) { // максимальное число
          SetValueInput('5000')
          props.setWidthInput(Number(5000))
        }
  
        if(Number(value) < 0) { // минимальное число
          SetValueInput('0')
          props.setWidthInput(Number(0))
        }
  
        if(Number(value) > 0 && +value < 5000 ) { // интервал подходящих чисел
          SetValueInput(value)
          props.setWidthInput(Number(value))
        }
      }

      if(value === "") { // к пустой
        SetValueInput('')
        props.setWidthInput(Number(0))
      }
    }
  }

  const  Width = useSelector<number>( state => state.Width.Width )



  return (
    <Form
      method="GET"
      form={form}
      name="horizontal_login"
      layout="inline"
      className="fx_ctr"
      style={{ width: '100%', maxWidth: Width > 1000? '600px': '100%', paddingLeft: '20px', paddingRight: '20px' }}
    >
      <Form.Item
        name="username"
        rules={[
          { required: true, message: 'Введите длину' },
        ]}
      >
        <div className="flex colum align" style={{ marginRight: '50px' }}>
          <p style={{margin: 0, fontSize: '16px'}}>Длина</p>
          <Input
            style={{ width: '100px', textAlign:'center' }}
            prefix={<ExpandAltOutlined style={{transform: 'rotate( 45deg)'}}  className="site-form-item-icon" />}
            type="number"
            name="Width"
            value={valueInput}
            onChange={ e => Validation( e.target.value )}
          />
        </div>
      </Form.Item>

      <Form.Item
        name="password" 
        rules={[
          { required: true, message: 'Введите ширину' }
        ]}
      >
        <div className="flex colum align">
          <p style={{margin: 0, fontSize: '16px'}}>Ширина</p>
          <SelectAntd setSelectAntd={props.setSelectAntd}/>
        </div>
      </Form.Item>

    </Form>
  )
}

export default FormStill