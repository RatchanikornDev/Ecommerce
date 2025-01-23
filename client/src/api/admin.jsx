import axios from 'axios'

export const getOrderAdmin = async (token) => {
  //code body
  return axios.get('http://localhost:5500/api/admin/orders', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const changeOrderStatus = async (token, orderId, orderStatus) => {
  // code body
  return axios.put(
    'http://localhost:5500/api/admin/order-status',
    {
      orderId,
      orderStatus,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
}
