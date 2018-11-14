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
      },
      meta: {
        metaTags: [
          {
            name: 'Description',
            content: `Passionné par le développement depuis quelques années, j'ai commencé avec des technologies natives avant de tomber amoureux du web.`
          }
        ]
      }
    }, {
      path: '/about',
      name: 'About',
      components: {
        header: AppHeader,
        default: About,
        footer: AppFooter
      },
      meta: {
        title: 'Victor Mendele - A propos',
        metaTags: [
          {
            name: 'Description',
            content: `Je suis actuellement étudiant en licence professionnelle métiers du numérique parcours Développeur Web / Designer Web à l'IUT de Mulhouse. J'ai commencé le développement avec Unity il y a quelques années, avant de m'intéresser au Web.`
          }
        ]
      }
    }, {
      path: '/project',
      name: 'Project',
      components: {
        header: AppHeader,
        default: Project,
        footer: AppFooter
      },
      meta: {
        title: 'Victor Mendele - Projet',
        metaTags: [
          {
            name: 'Description',
            content: 'Voici une sélection de différents projets sur lesquels j\'ai pu travailler'
          }
        ]
      }
    }, {
      path: '/project/:slug',
      name: 'ProjectPage',
      components: {
        header: AppHeader,
        default: ProjectPage,
        footer: AppFooter
      },
      beforeEnter: (to, from, next) => {
        import('@/api/project.js').then(projectApi => {
          projectApi.projectExists(to.params.slug).then(() => {
            next()
          }).catch(() => {
            next({ name: 'NotFound' })
          })
        })
      },
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
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title !== undefined) {
    document.title = to.meta.title
  }

  if (to.meta.metaTags !== undefined) {
    to.meta.metaTags.forEach(m => {
      let element = document.head.querySelector(`meta[name=${m.name}]`)
      if (element !== undefined) {
        element.setAttribute('content', m.content)
      }
    })
  }
  next()
})

export default router
