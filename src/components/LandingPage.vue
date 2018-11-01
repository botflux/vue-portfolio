<template>
  <section class="landing">
    <div class="landing-section">
      <h1>Développeur junior</h1>
      <div class="subtitle">
        <strong class="subtitle-element">Front-End</strong>
        <span>/</span>
        <strong class="subtitle-element">Back-End</strong>
        <span>/</span>
        <strong class="subtitle-element">Logiciel</strong>
      </div>
      <p class="landing-text">Passionné par le développement depuis quelques années, j'ai commencé avec des technologies natives avant de tomber amoureux du web.</p>
    </div>
    <router-link to="/about" class="btn cta">En savoir plus</router-link>
  </section>
</template>

<script>
export default {
  name: 'LandingPage'
}
</script>

<style scoped>
  .landing {
    min-height: 100vh;
    display: grid;
    justify-content: center;
    align-content: center;
  }

  .landing .btn {
    margin-right: auto;
  }

  .subtitle {
    display: flex;
    flex-wrap: wrap;

    margin-top: 20px;
  }

  .landing-text {
    margin: 20px 0 40px 0;
  }

  .subtitle span {
    font-family: 'Roboto mono', monospace;
    margin: 0 10px;
    font-weight: 700;
  }

  .subtitle-element {
    font-family: 'Roboto mono', monospace;
    letter-spacing: 0.2em;
    font-weight: 700;
  }
</style>


