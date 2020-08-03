import * as React from 'react'
import Container from '@material-ui/core/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Title from '../components/Title'
interface RocketLaunchProps {
  onSubmit: (text: any) => void
  formValue: string
  handleChange: (text: any) => void
  willRocketLaunch: boolean
}

export const RocketLaunch: React.FC<RocketLaunchProps> = ({
  onSubmit,
  formValue,
  handleChange,
  willRocketLaunch
}) => (
  <Container>
    <Row>
      <Col xs={12} md={12}>
        <h3>Please Enter Your 'Fuel'</h3>
      </Col>
      <div style={{ paddingTop: 50 }} />
      <Col xs={12} md={8} style={{ paddingTop: 25 }}>
        <form onSubmit={e => onSubmit(e)}>
          <input
            type='text'
            value={formValue}
            onChange={e => handleChange(e)}
            placeholder='Please enter text'
          />
        </form>
      </Col>

      <Col xs={12} md={4} style={{ paddingTop: 25 }}>
        <Button
          onClick={e => onSubmit(e)}
          disabled={formValue.length < 1}
          variant='danger'
          style={{ margin: 5 }}
        >
          TEST
        </Button>
        <Button
          disabled={!willRocketLaunch}
          onClick={() => console.log('launched')}
          variant='success'
          style={{ margin: 5 }}
        >
          LAUNCH
        </Button>
      </Col>
    </Row>
  </Container>
)

export default RocketLaunch
