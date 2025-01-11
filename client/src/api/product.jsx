import axios from "axios";

export const createProduct = async (token, form) => {
    // code body
    return axios.post("http://localhost:5500/api/product", form, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
  export const listProduct = async (token, count = 20) => {
    // code body
    return axios.get("http://localhost:5500/api/products/" + count, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
  export const uploadFiles = async (token, form) => {
    // code body
    // console.log('form api front', form)
    return axios.post("http://localhost:5500/api/images", {
      image: form
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }