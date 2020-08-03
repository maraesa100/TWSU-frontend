import * as React from 'react'

interface TitleProps {
  title: string
}

export const Title: React.FC<TitleProps> = ({ title }) => (
  <h1 className='level-1-title'>{title}</h1>
)

export default Title
