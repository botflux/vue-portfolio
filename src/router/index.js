import Vue from 'vue'
import Router from 'vue-router'

const AppHeader = () => import('../components/AppHeader.vue')
const AppFooter = () => import('../components/AppFooter.vue')
const LandingPage = () => import('../components/LandingPage.vue')
const About = () => import('../components/About.vue')
const Project = () => import('../components/Project.vue')
const ProjectPage = () => import('../components/ProjectPage.vue')
const _404 = () => import('../components/404.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      components: {
        header: AppHeader,
        default: LandingPage
      }
    }, {
      path: '/about',
      name: 'About',
      components: {
        header: AppHeader,
        default: About,
        footer: AppFooter
      }
    }, {
      path: '/project',
      name: 'Project',
      components: {
        header: AppHeader,
        default: Project,
        footer: AppFooter
      }
    }, {
      path: '/project/:projectId',
      name: 'ProjectPage',
      components: {
        header: AppHeader,
        default: ProjectPage,
        footer: AppFooter
      }
    }, {
      path: '*',
      name: '404',
      components: {
        header: AppHeader,
        default: _404
      }
    }
  ]
})
