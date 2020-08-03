import Slider from '@material-ui/core/Slider'

import * as React from 'react'
import Container from '@material-ui/core/Container'

interface WordClassifierProps {
  category: string
}

export const WordClassifier: React.FC<WordClassifierProps> = ({ category }) => (
  <Container style={{ paddingTop: 20 }}>
    <h2>Your Words Are: {category.toUpperCase()} </h2>
  </Container>
)

export default WordClassifier
