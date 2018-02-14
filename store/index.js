import Vue from 'vue'
import Vuex from 'vuex'
import feathersVuex from 'feathers-vuex'
import feathersClient from '../api/feathers-client'

const { service, auth } = feathersVuex(feathersClient, { idField: '_id' })

Vue.use(Vuex)

export const storeSocket =  new Vuex.Store({
  plugins: [
    service('messages'),
    auth()
  ]
})

const createStore = () => {
  return storeSocket
}

export default createStore
