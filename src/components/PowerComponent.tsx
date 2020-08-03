import * as React from 'react'
import Container from '@material-ui/core/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

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
      backgroundColor: backgroundColor ? backgroundColor : 'white'
    }}
  >
    <Row>
      <Col xs={12} md={4}>
        <Image src={require('../ui/rocket-launch.jpg')} rounded />
      </Col>
      <Col xs={12} md={8}>
        <p>description</p>
      </Col>
    </Row>
  </Container>
)

export default PowerComponent
