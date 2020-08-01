import axios from 'axios'

export default function AxiosRequests(userInput: string): any {
  axios
    .post('http://localhost:5000/api/v1/wordfilter', {
      name: 'happyOrSad request',
      description: userInput
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
}
