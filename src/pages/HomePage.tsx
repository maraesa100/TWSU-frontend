import axios from 'axios'
import React from 'react'

type MyProps = {}
type MyState = { formValue: string; debugging: string }

class HomePage extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props)
    this.state = {
      formValue: 'string',
      debugging: 'I AM DEBUGGING'
    }
  }

  handleChange(event: any) {
    this.setState({ formValue: event.target.value })
  }

  handleSubmit(event: any) {
    alert('A name was submitted: ' + this.state.formValue)
    event.preventDefault()
  }

  componentDidMount() {
    console.log(this.state.debugging)
    axios
      .post('http://localhost:5000/api/v1/wordfilter', {
        name: 'frontend test happy request',
        description: 'happy happy sad joy sad'
      })
      .then(response => {
        console.log('Post successful!')
        console.log(response)
      })
      .catch(error => {
        if (error.response.status === 409) {
          alert('Doggie with same name exists!')
        } else {
          alert('Unknown error.')
        }
      })
  }
  render() {
    return <h1>Welcome to the Rocket Launcher App</h1>
  }
}
export default HomePage
