import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: (process.env.NODE_ENV !== 'production'),
  modules: [],
  getters: {},
  actions: {},
  state: {}
})

store.registerModule('test1', {
  state: {
    demo1Data: 'demo1'
  }
}, { preserveState: false })

if (store.state.hasOwnProperty('test1') === false) {
  console.error('ERROR in module test1 (preserveState: false)')
} else {
  console.log('module test1 (preserveState: false) is success')
}

store.registerModule('test2', {
  state: {
    demo1Data: 'demo2'
  }
}, { preserveState: true })

if (store.state.hasOwnProperty('test2') === false) {
  console.error('ERROR in module test2 (preserveState: true)')
} else {
  console.log('module test2 (preserveState: true) is success')
}

export default store
