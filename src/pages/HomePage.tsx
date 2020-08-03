import axios from 'axios'
import React from 'react'
// import { string } from 'prop-types'

// Bespoke Component Imports
import RocketLaunch from '../components/RocketLaunch'
import Title from '../components/Title'
import PowerComponent from '../components/PowerComponent'

// Material UI imports
import Container from '@material-ui/core/Container'

// Bootstrap imports

import Navbar from 'react-bootstrap/Navbar'

type MyProps = {}
type MyState = {
  formValue: string
  happyOrSad: any
  numericalValue: number
  willRocketLaunch: boolean
}

class HomePage extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props)
    this.state = {
      formValue: '',
      happyOrSad: null,
      numericalValue: 0,
      willRocketLaunch: false
    }
  }

  handleChange = (event: any) => {
    this.setState({ formValue: event.target.value })
  }

  rocketTest() {
    axios
      .post('http://localhost:5000/api/v1/wordfilter', {
        name: 'happyOrSad request',
        description: this.state.formValue
      })
      .then(response => {
        console.log('Post successful!')
        console.log(response)

        if (response.data.returnedValue.happyOrSad === 'happy') {
          this.setState({
            happyOrSad: response.data.returnedValue.happyOrSad,
            numericalValue: response.data.returnedValue.numericalValue,
            willRocketLaunch: true
          })
        } else {
          this.setState({
            happyOrSad: response.data.returnedValue.happyOrSad,
            numericalValue: response.data.returnedValue.numericalValue,
            willRocketLaunch: false
          })
        }
        return response
      })
      .catch(error => {
        this.setState({
          willRocketLaunch: false
        })
        return error
      })
  }

  handleSubmit(event: any) {
    // set the willRocketLaunch back to defaults to prevent false positives
    this.setState({
      willRocketLaunch: false
    })

    // logging for debugger
    console.log('The rocket launcher was submitted: ' + this.state.formValue)

    // post axios request

    this.rocketTest()

    event.preventDefault()
  }

  componentDidMount() {}

  render() {
    return (
      <div style={{ backgroundColor: '#0077FF' }}>
        <Navbar className='color-nav justify-content-between'>
          <Navbar.Brand href='#home'>TWSU</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />

          <Navbar.Brand href='#home'>
            <img
              alt=''
              src='/logo.svg'
              width='30'
              height='30'
              className='d-inline-block align-top'
            />
            ROCKET LAUNCHER
          </Navbar.Brand>

          <Navbar.Brand href='#home'>Help</Navbar.Brand>
        </Navbar>

        {/* top content container - slighty narrower than launch container */}
        <Container maxWidth='sm'>
          <Container style={{ padding: 50 }}>
            <Title title='Are you ready?' />

            <PowerComponent borderStyleActive />

            <RocketLaunch
              onSubmit={e => this.handleSubmit(e)}
              formValue={this.state.formValue}
              handleChange={e => this.handleChange(e)}
              willRocketLaunch={this.state.willRocketLaunch}
            />
            <p>
              Your words are: {this.state.happyOrSad}{' '}
              {this.state.happyOrSad === null ? 'unknown' : null}
            </p>
          </Container>
        </Container>
        <Container maxWidth='sm' style={{ backgroundColor: '#F9C000' }}>
          <Title title='Placeholder' />

          <RocketLaunch
            onSubmit={e => this.handleSubmit(e)}
            formValue={this.state.formValue}
            handleChange={e => this.handleChange(e)}
            willRocketLaunch={this.state.willRocketLaunch}
          />
          <p>
            Your words are: {this.state.happyOrSad}{' '}
            {this.state.happyOrSad === null ? 'unknown' : null}
          </p>
        </Container>
      </div>
    )
  }
}
export default HomePage
