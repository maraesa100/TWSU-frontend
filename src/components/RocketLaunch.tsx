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
  <Container
    style={{
      backgroundColor: '#F9C000',
      paddingTop: 20,
      paddingBottom: 20
    }}
  >
    <Row>
      <Col xs={12} md={8}>
        <form onSubmit={e => onSubmit(e)}>
          <label>
            Enter Fuel:
            <input
              type='text'
              value={formValue}
              onChange={e => handleChange(e)}
            />
          </label>
        </form>
      </Col>

      <Col xs={12} md={4}>
        <Button
          onClick={e => onSubmit(e)}
          disabled={formValue.length < 1}
          variant='danger'
        >
          TEST
        </Button>
        <button
          disabled={!willRocketLaunch}
          onClick={() => console.log('launched')}
        >
          LAUNCH!!
        </button>
      </Col>
    </Row>
  </Container>
)

export default RocketLaunch
