import axios from 'axios'
import React from 'react'
import { string } from 'prop-types'

type MyProps = {}
type MyState = { formValue: string; happyOrSad: any; numericalValue: number }

class HomePage extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props)
    this.state = {
      formValue: '',
      happyOrSad: null,
      numericalValue: 0
    }
  }

  handleChange = (event: any) => {
    this.setState({ formValue: event.target.value })
  }

  handleSubmit(event: any) {
    console.log('The rocket launcher was submitted: ' + this.state.formValue)
    const axiosValue = axios
      .post('http://localhost:5000/api/v1/wordfilter', {
        name: 'happyOrSad request',
        description: this.state.formValue
      })
      .then(response => {
        console.log('Post successful!')
        console.log(response)
        return response
      })
      .catch(error => {
        //   if (error.response.status === 409) {
        //     alert('throwing error exists!')
        //   } else {
        //     alert('Unknown error.')
        //   }
        return error
      })

    console.log('NEW DEBUGGING' + axiosValue)

    // this.setState({happyOrSad: axiosValue.returnedValue,
    //     numericalValue: 0})

    event.preventDefault()
  }

  componentDidMount() {
    // console.log(this.state.debugging)
    // AxiosRequests('I am so sad')
  }

  render() {
    return (
      <div>
        <h1>Welcome to the Rocket Launcher App</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>
            Name:
            <input
              type='text'
              value={this.state.formValue}
              onChange={this.handleChange}
            />
          </label>
          <input
            type='submit'
            value='Submit'
            disabled={this.state.formValue.length < 1}
          />
        </form>
      </div>
    )
  }
}
export default HomePage
