import axios from 'axios'
import React from 'react'
// import { string } from 'prop-types'
// import Container from '@material-ui/core/Container'
import RocketLaunch from '../components/RocketLaunch'
import { thisExpression } from '@babel/types'

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
      <div>
        <h1>Welcome to the Rocket Launcher App</h1>
        <h2>
          This rocket runs on happy words, so enter a sentence and get
          launching!
        </h2>
        <h3>Instructions</h3>
        <ol>
          <li>Enter a sentence</li>
          <li>
            Hit the 'test' button to check whether your rocket has enough happy
            words to launch
          </li>
          <li>
            If there are enough happy words, the launch button will activate and
            you will be able to launch your rocket
          </li>
        </ol>
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
        <p>
          Sentences are considered happy if they contain 50% more happy words
          than sad words
        </p>
        <p>
          Sentences are considered sad if they contain 50% more sad words than
          happy words
        </p>
        <p>
          Sentences are considered 'unknown' if they contain any other variety
          of words
        </p>

        <h2>Happy Words</h2>

        <h2>Sad Words</h2>

        <h3>For Parents</h3>
        <p>
          This tool teaches your child a scientific trial and error process.
          They are encouraged to try various sentences, use the 'test' button to
          validate their work, and then once validated they can rest assured
          that their rocket will launch
        </p>
      </div>
    )
  }
}
export default HomePage
