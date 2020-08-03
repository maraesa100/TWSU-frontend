import * as React from 'react'
import Container from '@material-ui/core/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

interface PowerComponentProps {
  backgroundColor?: string
  borderStyleActive?: boolean
}
export const PowerComponent: React.FC<PowerComponentProps> = ({
  backgroundColor,
  borderStyleActive
}) => (
  <Container
    style={{
      borderStyle: borderStyleActive ? 'solid' : 'none',
      borderWidth: 5,
      borderColor: 'black',
      backgroundColor: backgroundColor ? backgroundColor : 'white',
      paddingTop: 20,
      paddingBottom: 20
    }}
  >
    <Row>
      <Col xs={12} md={4}>
        <Image
          src={require('../ui/rocket-launch.jpg')}
          rounded
          fluid
          style={{ padding: 10 }}
        />
      </Col>
      <Col xs={12} md={8}>
        <p>Launch a rocket powered by HAPPY WORDS</p>
        {/* <Button variant='danger'>LAUNCH!!</Button> */}
      </Col>
    </Row>
  </Container>
)

export default PowerComponent
