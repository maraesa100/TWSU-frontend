import axios from 'axios'
import React from 'react'

class MyComponent extends React.Component {
  componentDidMount() {
    // console.log()
    // const apiUrl = 'http://localhost:5000/api/v1/wordfilter'
    // fetch(apiUrl).then(response => console.log(response))
    // .then(response => response.json())
    // .then(data => console.log('This is your data', data))
    console.log('react component mounted')
    axios.get('http://localhost:5000/').then(response => {
      console.log(response.data)
    })

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
    return <h1>my Component has Mounted, Check the browser 'console' </h1>
  }
}
export default MyComponent

// const onCreateNewDog = useCallback(
//   newDogName => {
//     axios
//       .post(`${myDogServerBaseURL}/dogs`, {
//         name: newDogName
//       })
//       .then(result => {
//         //Reload the doggies to show also the new one
//         loadDogs()
//       })
//       .catch(error => {
//         /**
//          * If the response status code is 409 - Conflict, then we already have
//          * a doggie with this name.
//          **/
//         if (error.response.status === 409) {
//           alert('Doggie with same name exists!')
//         } else {
//           alert('Unknown error.')
//         }
//       })
//   },
//   [loadDogs]
// )
