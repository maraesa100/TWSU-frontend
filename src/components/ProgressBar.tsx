import * as React from 'react'

import ProgressBar from 'react-bootstrap/ProgressBar'

interface ProgressBar {
  amountOfProgress?: number
  stepNumber?: number
}

export const Title: React.FC<ProgressBar> = ({
  amountOfProgress,
  stepNumber
}) => (
  <div
    style={{
      paddingTop: 50,

      paddingBottom: 50
    }}
  >
    <ProgressBar
      striped
      variant='danger'
      label={'Step ' + stepNumber}
      now={amountOfProgress ? amountOfProgress : 0}
    />
  </div>
)

export default Title
