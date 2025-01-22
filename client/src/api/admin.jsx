import axios from 'axios'

export const getOrderAdmin = async (token) => {
    //code body
    return axios.get('http://localhost:5500/api/admin/orders', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  }
  