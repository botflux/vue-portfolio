<template>
  <header class="app-header">
    <a href="/" class="nav-brand">Victor Mendele</a>
    <app-nav></app-nav>
  </header>
</template>


<script>
import AppNav from './AppNav'

export default {
  name: 'AppHeader',
  components: {
    AppNav
  }
}
</script>

<style scoped>
  .app-header {
    padding: 32px 8px;
    display: flex;
    justify-content: space-between;

    position: absolute;
    top: 0;
    right: 0;
    left: 0;

    z-index: 2;
  }

  .nav-brand {
    color: #000;
    text-decoration: none;
    font-size: 20px;
  }

  @media screen and (min-width: 600px) {
    .app-header {
      padding: 32px;
    }
  }

  @media screen and (min-width: 900px) {
    .app-header {
      padding: 32px 64px;
    }
  }

  @media screen and (min-width: 1200px) {
    .app-header {
      padding: 32px 90px;
    }
  }

  @media screen and (min-width: 1800px) {
    .app-header {
      padding: 32px 260px;
    }
  }
</style>

