import React from 'react'
import { LoadingOutlined } from '@ant-design/icons'

interface Props {
  height?: number | string
}

const Loader: React.FC<Props> = ({ height = '500px'}): JSX.Element => {
  return (
    <div className="fx_ctr align" style={{width: "100%" , height: height }}>
      <LoadingOutlined  style={{fontSize: '50px', color: '#CDE7F5' }}/>
    </div>
  )
}

export default Loader