import Vue from 'vue'
import Router from 'vue-router'

const AppHeader = () => import('../components/AppHeader.vue')
const AppFooter = () => import('../components/AppFooter.vue')
const LandingPage = () => import('../components/LandingPage.vue')
const About = () => import('../components/About.vue')
const Project = () => import('../components/Project.vue')
const ProjectPage = () => import('../components/ProjectPage.vue')
const NotFound = () => import('../components/NotFound.vue')

Vue.use(Router)

const router =  new Router({
  mode: 'history',
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
      },
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
      },
      beforeEnter: (to, from, next) => {
        import('@/api/project.js').then(projectApi => {
          projectApi.projectExists(to.params.projectId).then(() => {
            next()
          }).catch(() => {
            next({ name: 'NotFound' })
          })
        })
      }
    }, {
      path: '/error',
      name: 'NotFound',
      components: {
        header: AppHeader,
        default: NotFound,
        footer: AppFooter
      }
    }, {
      path: '*',
      redirect: '/error'
    }
  ],
})


export default router
