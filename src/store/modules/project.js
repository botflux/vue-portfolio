import * as projectApi from '@/api/project'

const state = {
  items: [],
  currentProject: {
    title: '',
    description: '',
    alt: '',
    img: ''
  }
}

const getters = {
  getAllProjects () {
    return state.items
  },
  getProject () {
    return state.currentProject
  }
}

const actions = {
  findAllProjects: ({ commit }) => {
    projectApi.getAllProjects().then(projects => {
      commit('setProjects', projects)
    })
  },
  findProject: ({ commit }, options) => {
    projectApi.getProject(options.id).then(project => {
      commit('setProject', project)
    })
  }
}

const mutations = {
  setProjects: (state, newProjects) => {
    state.items = [...newProjects]
  },
  setProject: (state, project) => {
    state.currentProject = project
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
