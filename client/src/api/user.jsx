import axios from 'axios'

export const createUserCart = async (token, cart) => {
  // code body
  return axios.post('http://localhost:5500/api/user/cart', cart, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}