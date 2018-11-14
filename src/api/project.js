import axios from 'axios'
import app from '@/main'

const baseConfig = {
  baseURL: 'https://api.victormendele.fr/wp-json/wp/v2/',
  method: 'get',
  crossDomain: true
}

let localProjects = null

axios.interceptors.request.use (config => {
  app.$Progress.start()
  return config
})

axios.interceptors.response.use(response => {
  app.$Progress.finish()
  return response
})

const getAllProjects = () => {
  return new Promise((resolve, reject) => {
    axios.request({...baseConfig, ...{
      url: 'posts'
    }}).then (response => {
      let tempProjects = response.data
      localProjects = []
      for (let i in tempProjects) {

        let current = tempProjects[i]
        let o = apiProjectToProject(current)

        localProjects = [...localProjects, ...[o]]
      }
      resolve(localProjects)
    }).catch(error => {
      reject(error)
    })
  })
}

const getProject = (slug) => {
  return new Promise((resolve, reject) => {
    let project = null
    getAllProjects().then(response => {
      project = response.find(project => project.slug == slug)
    })
    if (project !== null) {
      resolve(project)
    } else {
      let config = {...baseConfig, ...{
        url: `posts?slug=${slug}`,
      }}
      axios.request(config).then(response => {
        resolve(apiProjectToProject(response.data.find(p => p !== undefined)))
      }).catch(e => {
        reject(e)
      })
    }
  })
}

const projectExists = (slug) => {
  return new Promise((resolve, reject) => {
    axios.request({...baseConfig, ...{
      url: `posts?slug=${slug}`
    }}).then(response => {
      resolve(true)
    }).catch(e => {
      reject(false)
    })
  })
}

const apiProjectToProject = (apiReponse) => {
  let o = {}
  o.id = apiReponse.id
  o.title = apiReponse.title.rendered
  o.description = apiReponse.excerpt.rendered.replace(/<(?:.|\n)*?>/gm, '')
  o.body = apiReponse.content.rendered
  o.alt = apiReponse.better_featured_image.alt_text
  o.img = apiReponse.better_featured_image.source_url
  o.slug = apiReponse.slug
  return o
}

export { getAllProjects, getProject, projectExists }
