import { create } from 'zustand'

const ecomStore = ( )=>({
    name:'Pack',
    value:0
})

const useEcomStore = create(ecomStore)

export default useEcomStore