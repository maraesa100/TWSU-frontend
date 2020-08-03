import * as React from 'react'
import Container from '@material-ui/core/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Title from '../components/Title'

interface StepThreeInstructionsProps {}
export const StepThreeInstructions: React.FC = ({}) => (
  <Container
    style={{
      backgroundColor: '#F3F4FB',
      paddingTop: 20,
      paddingBottom: 20
    }}
  >
    <Row>
      <Col xs={12} md={12}>
        <Title title={`You're ready to LAUNCH!!`} color='#151F29' />
      </Col>
    </Row>
  </Container>
)

export default StepThreeInstructions
