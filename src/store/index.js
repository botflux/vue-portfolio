import Vue from 'vue'
import Vuex from 'vuex'
import projects from './modules/project'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    projects,

  }
})

export default store
