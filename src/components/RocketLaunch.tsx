import * as React from 'react'

interface RocketLaunchProps {
  onTextChange: (text: string) => void
  Image?: string
  Body?: string
}

export const RocketLaunch: React.FC<RocketLaunchProps> = ({
  onTextChange,
  Image,
  Body
}) => (
  <div className='RocketLaunch'>
    <div className='title'>{onTextChange}</div>
    <div className='image'>
      <img src={Image} />
    </div>
    <div className='body'>{Body}</div>
  </div>
)

export default RocketLaunch
