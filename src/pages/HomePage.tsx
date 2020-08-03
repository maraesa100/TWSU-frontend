import axios from 'axios'
import React from 'react'
// import { string } from 'prop-types'

// Component Imports
import RocketLaunch from '../components/RocketLaunch'
import TitleBar from '../components/TitleBar'

// Material UI imports
import Container from '@material-ui/core/Container'

// Bootstrap imports

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
      <Container maxWidth='sm'>
        <TitleBar />
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
    )
  }
}
export default HomePage
