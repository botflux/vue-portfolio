<template>
  <footer class="app-footer">
    <a href="https://www.pinterest.fr/mendelevictor/" target="_blank">
      <font-awesome-icon :icon="['fab', 'pinterest']" class="footer-icon"></font-awesome-icon>
    </a>
    <a href="https://codepen.io/botflux/" target="_blank">
      <font-awesome-icon :icon="['fab', 'codepen']" class="footer-icon"></font-awesome-icon>
    </a>
    <a href="https://github.com/botflux" target="_blank">
      <font-awesome-icon :icon="['fab', 'github']" class="footer-icon"></font-awesome-icon>
    </a>
    <a href="https://www.linkedin.com/in/victor-mendele-698517154/" target="_blank">
      <font-awesome-icon :icon="['fab', 'linkedin']" class="footer-icon"></font-awesome-icon>
    </a>
  </footer>
</template>

<script>
import FontAwesomeIcon from './FontAwesomeIcon'
export default {
  name: 'AppFooter',
  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped>
  .app-footer {
    margin-top: 150px;
    padding: 32px;
    background-color: #eee;

    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .footer-icon {
    font-size: 35px;
    color: rgba(0,0,0,.54);
    transition: color .5s, transform .5s;
    margin: 0px 8px;
  }

  .footer-icon:hover {
    color: #00f;
    transform: scale(1.2) rotate(360deg);
  }
</style>


