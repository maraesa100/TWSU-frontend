import * as React from 'react'

interface TitleProps {
  title: string
}

export const Title: React.FC<TitleProps> = ({ title }) => (
  <div
    style={{
      paddingTop: 50,
      paddingBottom: 50
    }}
  >
    <h1
      style={{
        textAlign: 'center',
        color: '#F9F9F9'
      }}
    >
      {title}
    </h1>
  </div>
)

export default Title
