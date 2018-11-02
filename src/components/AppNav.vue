<template>
  <nav class="app-nav" :class="{ 'nav-active': isShow }">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.576 23" class="menu" :class="{ menuWhite : isShow }" @click="toggle()">
      <g id="Groupe_2" data-name="Groupe 2" transform="translate(-328.424 -36)">
        <rect class="cls-1" width="37.576" height="2" transform="translate(328.424 36)"/>
        <rect class="cls-1" width="37.576" height="2" transform="translate(328.424 46.5)"/>
        <rect class="cls-1" width="37.576" height="2" transform="translate(328.424 57)"/>
      </g>
    </svg>

    <ul class="nav-list" v-show="isShow">
      <li class="nav-list-item">
        <router-link class="nav-link" to="/" @click.native="toggle()">Home</router-link>
      </li>
      <li class="nav-list-item">
        <router-link class="nav-link" to="/about" @click.native="toggle()">A propos</router-link>
      </li>
      <li class="nav-list-item">
        <router-link class="nav-link" to="/project" @click.native="toggle()">Projets</router-link>
      </li>
      <li class="nav-list-item">
        <a class="nav-link" href="mailto:victor.mendele68@gmail.com" @click.native="toggle()">CV</a>
      </li>
      <li class="nav-list-item">
        <a class="nav-link" href="mailto:victor.mendele68@gmail.com" @click.native="toggle()">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  name: 'AppNav',
  data () {
    return {
      isShow: false,
      navTimeline: null
    }
  },
  methods: {
    toggle () {
      this.isShow = ! this.isShow

      if (this.isShow) {
        document.body.classList.add('overflow-hidden')
      } else {
        document.body.classList.remove('overflow-hidden')
      }
    },
  }
}
</script>

<style scoped>
  .menu {
    width: 37px;
    height: 22px;

    position: static;
    z-index: 1000;
  }

  .menu path {
    fill: rgba(0,0,0,0.54);
  }

  .menuWhite {
    fill: #fff;
  }

  .nav-active {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    min-height: 100vh;
    background-color: rgba(0,0,255,.95);
    padding: 32px 8px;

    display: grid;
    grid-template-rows: auto 1fr;
  }

  .nav-active .menu {
    margin-left: auto;
  }

  .nav-list {
    display: grid;
    justify-content: center;
    align-content: center;
    grid-row-gap: 15px;

    margin: 0;
    padding: 0;
  }

  .nav-list-item {
    list-style: none;
  }

  .nav-link {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 45px;
  }

  @media screen and (min-width: 600px) {
    .nav-active {
      padding: 32px;
    }
  }

  @media screen and (min-width: 900px) {
    .nav-active {
      padding: 32px 64px;
    }

    .nav-link {
      padding-bottom: 10px;
      position: relative;
    }

    .nav-link::before {
      content: " ";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 100%;
      height: 3px;
      display: block;
      background-color: #fff;
      transition: right .2s;
    }

    .nav-link:hover::before {

      right: 0;
    }
  }

  @media screen and (min-width: 1200px) {
    .nav-active {
      padding: 32px 90px;
    }
  }

  @media screen and (min-width: 1800px) {
    .nav-active {
      padding: 32px 260px;
    }
  }
</style>


