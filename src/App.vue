<template>
  <div id="app">
    <router-view name="header"/>
    <transition
      v-on:before-enter="routeBeforeEnter"
      v-on:enter="routeEnter"
      v-on:after-enter="routeAfterEnter"
      v-on:before-leave="routeBeforeLeave"
      v-on:leave="routeLeave"
      v-on:after-leave="routeAfterLeave">
      <router-view/>
    </transition>
    <router-view name="footer" />
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
import { TweenMax } from 'gsap'

export default {
  name: 'App',
  mounted () {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish()
  },
  created () {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start()
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        // parse meta tags
        this.$Progress.parseMeta(meta)
      }
      //  start the progress bar
      this.$Progress.start()
      //  continue to next page
      next()
    })
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish()
    })
  },
  methods: {
    routeBeforeEnter(el) {
      el.classList.add('page')
    },
    routeEnter(el, done) {
      TweenMax.fromTo(el, .5, {
        opacity: 0,
        transform: 'translate(200px)',
      }, {
        opacity: 1,
        transform: 'translate(0px)',
        onComplete: done
      })
    },
    routeAfterEnter(el) {
      el.classList.remove('page')
    },
    routeBeforeLeave (el) {
      el.classList.add('page')
    },
    routeLeave(el, done) {
      TweenMax.fromTo(el, .5, {
        opacity: 1,
        transform: 'translate(0px)',
      }, {
        opacity: 0,
        transform: 'translate(-200px)',
        onComplete: done
      })
    },
    routeAfterLeave(el) {
      el.classList.remove('page')
    },
  }
}
</script>

<style>
  .overflow-hidden {
    overflow: hidden;
  }

  body {
    min-height: 100vh;
    margin: 0;

    background-color: #fafafa;

    font-family: 'Roboto', sans-serif;
  }

  #app {
    min-height: 100vh;
    position: relative;
  }

  strong {
    color: #00f;
  }

  .page {
    position: fixed;
    width: inherit;
  }

  section {
    padding: 0 8px;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 700;
    color: rgba(0, 0, 0, .87);
  }

  p {
    font-weight: 500;
    line-height: 22px;

    color: rgba(0, 0, 0, .54);
  }

  .btn {
    color: #00f;
    font-size: 14px;
    letter-spacing: .4px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .btn.cta {
    padding: 20px 90px;
    border: 3px solid #00f;
    text-decoration: none;
    text-align: center;
  }

  p {
    margin: 0;
  }

  h1 {
    font-size: 50px;
  }

  h2 {
    font-size: 42px;
  }

  h3 {
    font-size: 35px;
  }

  h4 {
    font-size: 26px;
  }

  @media screen and (min-width: 600px) {
    section {
      padding: 0 33px;
    }

    h1 {
      font-size: 80px;
    }
  }

  @media screen and (min-width: 900px) {
    section {
      padding: 0 64px;
    }

    h1 {
      font-size: 85px;
    }

    h2 {
      font-size: 45px;
    }

    h3 {
      font-size: 40px;
    }

    h4 {
      font-size: 28px;
    }
  }

  @media screen and (min-width: 1200px) {
    section {
      padding: 0 90px;
    }

    h1 {
      font-size: 90px;
    }

    h2 {
      font-size: 52px;
    }

    h3 {
      font-size: 45px;
    }

    h4 {
      font-size: 30px;
    }

    .cta {
      transition: background-color .2s, color .2s;
    }

    .cta:hover {
      background-color: #00f;
      color: #fff;
    }
  }

  @media screen and (min-width: 1800px) {
    section {
      padding: 0 260px;
    }

    h1 {
      font-size: 96px;
    }

    h2 {
      font-size: 60px;
    }

    h3 {
      font-size: 48px;
    }

    h4 {
      font-size: 34px;
    }
  }
</style>
