import axios from 'axios'
import React from 'react'

import AxiosRequests from '../funcs/AxiosRequests'

type MyProps = {}
type MyState = { formValue: string; debugging: string }

class HomePage extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props)
    this.state = {
      formValue: '',
      debugging: 'COMPONENT DID MOUNT'
    }
  }

  handleChange = (event: any) => {
    // console.log('DEBUGGING' + event.target.value)
    this.setState({ formValue: event.target.value })
  }

  handleSubmit(event: any) {
    console.log('A name was submitted: ' + this.state.formValue)
    // AxiosRequests(this.state.formValue)
    event.preventDefault()
  }

  componentDidMount() {
    console.log(this.state.debugging)
    AxiosRequests('I am so sad')
  }

  render() {
    return (
      <div>
        <h1>Welcome to the Rocket Launcher App</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type='text'
              value={this.state.formValue}
              onChange={this.handleChange}
            />
          </label>
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}
export default HomePage
