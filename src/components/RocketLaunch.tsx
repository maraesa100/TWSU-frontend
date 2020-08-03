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
  // hasRocketLaunched: boolean
}

export const RocketLaunch: React.FC<RocketLaunchProps> = ({
  onSubmit,
  formValue,
  handleChange,
  willRocketLaunch
}) => (
  <Container>
    <Row>
      <div style={{ paddingTop: 50 }} />
      <Col xs={4} md={6} style={{ paddingTop: 25 }}>
        <Image
          src={require('../ui/rocket-launch.jpg')}
          rounded
          fluid
          style={{ padding: 10 }}
        />
      </Col>

      <Col xs={8} md={6} style={{ paddingTop: 25 }}>
        <form onSubmit={e => onSubmit(e)}>
          <input
            type='text'
            value={formValue}
            onChange={e => handleChange(e)}
            placeholder='Please enter "Fuel"'
          />
        </form>

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

        <Image
          src={require('../ui/rocket-launch.gif')}
          rounded
          fluid
          style={{ paddingTop: 40, width: '100%' }}
          // hidden={}
        />
      </Col>
    </Row>
  </Container>
)

export default RocketLaunch
