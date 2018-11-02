<template>
  <section class="about">
    <div class="about-content">
      <section-header title="A propos" subtitle="Développeur Web / Logiciel"></section-header>
      <div class="text-holder">
        <p>Je suis actuellement étudiant en licence professionnelle métiers du numérique parcours Développeur Web / Designer Web à l'université de Haute-Alsace de Mulhouse. J'ai commencé le développement avec Unity il y a quelques années, avant de m'intéresser au Web.</p>
        <p>Tout les aspects du développement d'applications m'intéresse qui ce soit le design, le développement ou encore l'expérience utilisateur. Mon objectif est de devenir développeur full-stack.</p>
      </div>
      <router-link to="/project" class="btn">Mes projets</router-link>
    </div>

    <div class="skill-content">
      <h3>Compétences</h3>
      <div class="card-holder">
        <article class="card">
          <h4>Front-end</h4>
          <ul class="card-list">
            <li class="card-list-item">HTML</li>
            <li class="card-list-item">CSS</li>
            <li class="card-list-item">JavaScript</li>
            <li class="card-list-item">Vue.js</li>
            <li class="card-list-item">SASS</li>
            <li class="card-list-item">Webpack</li>
            <li class="card-list-item">Twig</li>
          </ul>
        </article>
        <article class="card">
          <h4>Back-end</h4>
          <ul class="card-list">
            <li class="card-list-item">PHP</li>
            <li class="card-list-item">Symfony 4</li>
            <li class="card-list-item">MySQL</li>
            <li class="card-list-item">Node.js</li>
          </ul>
        </article>
        <article class="card">
          <h4>Logiciel</h4>
          <ul class="card-list">
            <li class="card-list-item">C#</li>
            <li class="card-list-item">C</li>
            <li class="card-list-item">Java</li>
            <li class="card-list-item">Android SDK</li>
            <li class="card-list-item">.NET</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeader from './SectionHeader'

export default {
  name: 'About',
  components: {
    SectionHeader
  }
}
</script>

<style scoped>
  .card {
    padding: 32px;
    background-color: #fff;
    box-shadow: 0 3px 5px 0 rgba(0,0,0,.2);

    display: grid;
    grid-row-gap: 40px;
  }

  .card-list {
    margin: 0;
    padding: 0;

    display: grid;
    grid-row-gap: 10px;
  }

  .card-list-item {
    list-style: none;
  }

  .card-list-item::before {
    content: "-";
    margin-right: 30px;
  }

  .card-holder {
    margin-top: 40px;

    display: grid;
    grid-row-gap: 20px;
  }

  .skill-content {
    margin-top: 160px;
  }

  .text-holder {
    display: grid;
    grid-row-gap: 20px;
  }
  .about {
    padding-top: 200px;
    padding-bottom: 200px;
  }

  .about-content {
    display: grid;
    grid-row-gap: 40px;
  }

  @media screen and (min-width: 600px) {
    .card-holder {
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
    }

    .skill-content {
      margin-top: 200px;
    }
  }

  @media screen and (min-width: 1200px) {
    .card-holder {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>

