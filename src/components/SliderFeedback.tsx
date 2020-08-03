import Slider from '@material-ui/core/Slider'

import * as React from 'react'
import Container from '@material-ui/core/Container'

interface SliderFeedbackProps {
  sliderValue: number
  sliderLabel?: string
}

// mapSliderValue = {

// }
export const SliderFeedback: React.FC<SliderFeedbackProps> = ({
  sliderLabel,
  sliderValue
}) => (
  <Container style={{ paddingTop: 20 }}>
    <h2>{sliderLabel}</h2>
    <Slider
      //   defaultValue={0}
      value={sliderValue}
      aria-labelledby='discrete-slider'
      valueLabelDisplay='auto'
      step={10}
      marks
      min={10}
      max={100}
    />
  </Container>
)

export default SliderFeedback
