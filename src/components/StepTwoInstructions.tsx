import * as React from 'react'
import Container from '@material-ui/core/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

interface StepTwoInstructionsProps {}
export const StepTwoInstructions: React.FC = ({}) => (
  <Container
    style={{
      backgroundColor: '#F3F4FB',
      paddingTop: 20,
      paddingBottom: 20
    }}
  >
    <Row>
      <Col xs={12} md={12}>
        <p>
          Hit the 'test' button to let the Engineers know you are ready to test
          your rocket
        </p>
      </Col>

      <Col xs={12} md={12}>
        <p>TIPS</p>
      </Col>

      <Col xs={12} md={4}>
        <Image
          src={require('../ui/happy.png')}
          rounded
          fluid
          style={{ padding: 10 }}
        />
      </Col>
      <Col xs={12} md={8}>
        <p>
          If you have at least 50% more HAPPY words than SAD words, your rocket
          will launch. YES!!
        </p>
        <p>Pssst. If you use the same word twice it still counts!</p>
        <p>The launch button will activate!!</p>
        <Button variant='danger'>LAUNCH!!</Button>
      </Col>

      <Col style={{ paddingTop: 50 }} xs={12} md={12}></Col>
      <Col xs={12} md={4}>
        <Image
          src={require('../ui/sad.png')}
          rounded
          fluid
          style={{ padding: 10 }}
        />
      </Col>

      <Col xs={12} md={8}>
        <p>
          If you have at least 50% more SAD words than HAPPY words, your rocket
          won't launch. It's too sad!! But please try again!
        </p>
      </Col>

      <Col xs={12} md={12} style={{ padding: 30 }}>
        <p>
          If you have any other combination of happy and sad words, the
          engineers will say that your fuel is 'unknown'. Make sure you try
          again though - you're nearly there!!
        </p>
      </Col>
    </Row>
  </Container>
)

export default StepTwoInstructions
