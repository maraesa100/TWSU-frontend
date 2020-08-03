import * as React from 'react'
import Container from '@material-ui/core/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

let happyArray = [
  'delight',
  'delighted',
  'delightful',
  'happy',
  'glad',
  'joy',
  'joyful',
  'merry',
  'pleasant'
]
let sadArray = ['disappointed', 'miserable', 'sad', 'sorrow', 'unhappy']

interface WordInstructionsProps {}
export const WordInstructions: React.FC = ({}) => (
  <Container
    style={{
      backgroundColor: 'white',
      paddingTop: 20,
      paddingBottom: 20
    }}
  >
    <Row>
      <Col xs={12} md={6}>
        <p>
          Write a sentence or short story that includes any combination of these
          happy words
        </p>
      </Col>
      <Col xs={12} md={6}>
        {happyArray.map(function(item, i) {
          return (
            <Button variant='success' style={{ margin: 2 }} key={i}>
              {item}
            </Button>
          )
        })}
      </Col>
      <Col xs={12} md={6}>
        <p>... or these sad words</p>
      </Col>
      <Col xs={12} md={6}>
        {sadArray.map(function(item, i) {
          return (
            <Button variant='warning' style={{ margin: 2 }} key={i}>
              {item}
            </Button>
          )
        })}
      </Col>
    </Row>
  </Container>
)

export default WordInstructions
