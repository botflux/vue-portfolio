<template>
  <section>
    <h1>404</h1>
    <p>Ooooops, il n'y a rien à voir ici.</p>
    <router-link to="/" class="btn">Acceuil</router-link>
  </section>
</template>

<script>
export default {
  name: '404'
}
</script>

<style scoped>
section {
  padding-top: 200px;
  display: grid;
}

section a {
  margin-top: 40px;
}
</style>


