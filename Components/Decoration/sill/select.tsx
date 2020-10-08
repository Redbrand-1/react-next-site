import React from 'react'
import { Select } from 'antd'

interface Props {
  setSelectAntd(val: number)
}

const SelectAntd: React.FC<Props> = (props) => {
  const { Option } = Select
  const onChange = (value) => {
    props.setSelectAntd(Number(value))
  }

  return (
    <Select
    style={{ width: 100, textAlign:'center' }}
    placeholder="150мм"
    defaultValue="150"
    optionFilterProp="children"
    onChange={onChange}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="1200">150мм</Option>
    <Option value="1500">200мм</Option>
    <Option value="1900">250мм</Option>
    <Option value="2250">300мм</Option>
    <Option value="2500">350мм</Option>
    <Option value="3000">400мм</Option>
    <Option value="3300">450мм</Option>
    <Option value="3600">500мм</Option>
    <Option value="4000">600мм</Option>
  </Select>
  )
}

export default SelectAntd