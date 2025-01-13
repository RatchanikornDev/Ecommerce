import axios from 'axios'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { listCategory } from '../api/Category'
import { listProduct,SearchFilters } from '../api/product'

const ecomStore = (set) => ({
  user: null,
  token: null,
  categories: [],
  products:[],
  actionLogin: async (form) => {
    const res = await axios.post('http://localhost:5500/api/login', form)
    set({
      user: res.data.payload,
      token: res.data.token,
    })
    return res
  },
  getCategory: async () => {
    try {
      const res = await listCategory()
      set({ categories: res.data })
    } catch (err) {
      console.log(err)
    }
  },
  getProduct: async (count) => {
    try {
      const res = await listProduct(count)
      set({products: res.data})
    } catch (err) {
      console.log(err)
    }
  },
  actionSearchFilters: async (arg) => {
    try {
      const res = await SearchFilters(arg)
      set({ products: res.data })
    } catch (err) {
      console.log(err)
    }
  },
})

const usePersist = {
  name: 'ecom-store',
  storage: createJSONStorage(() => localStorage),
}

const useEcomStore = create(persist(ecomStore, usePersist))

export default useEcomStore
