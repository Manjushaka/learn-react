import axios from 'axios';

export const getMockList = () => {
  return axios('http://localhost:9002/user').then(response => {
    if (response.status === 200) {
      return {
        response: response.data,
      };
    }
    return {
      error: 'something error',
    };
  })
}
