<template>
  <section class="about">
    <div class="about-content">
      <section-header title="A propos" subtitle="Développeur Web / Logiciel"></section-header>
      <div class="text-holder">
        <p>Je suis actuellement étudiant en licence professionnelle <a href="http://www.iutmulhouse.uha.fr/formations-initiales-apprentissage/licences-professionnelles/webdesigner.html" rel="noopener" target="_blank">Développeur Web / Designer Web</a> à l'IUT de Mulhouse. J'ai commencé le développement avec Unity il y a quelques années, avant de m'intéresser au Web.</p>
        <p>Tous les aspects du développement d'applications m'intéresse qui ce soit le design, le développement ou encore l'expérience utilisateur. Mon objectif est de devenir développeur full-stack.</p>
      </div>
      <router-link to="/project" class="btn">Mes projets</router-link>
    </div>

    <div class="skill-content">
      <h3>Compétences</h3>
      <div class="card-holder">
        <article class="card">
          <h4>Front-end</h4>
          <ul class="card-list">
            <li class="card-list-item">HTML - 100%</li>
            <li class="card-list-item">CSS - 90 %</li>
            <li class="card-list-item">JavaScript - 70 %</li>
            <li class="card-list-item">Vue.js - 70%</li>
            <li class="card-list-item">SASS - 50%</li>
            <li class="card-list-item">Webpack - 40%</li>
            <li class="card-list-item">Twig - 90%</li>
          </ul>
        </article>
        <article class="card">
          <h4>Back-end</h4>
          <ul class="card-list">
            <li class="card-list-item">PHP - 90%</li>
            <li class="card-list-item">Symfony 4 - 80%</li>
            <li class="card-list-item">MySQL - 60%</li>
            <li class="card-list-item">Node.js - 40%</li>
          </ul>
        </article>
        <article class="card">
          <h4>Logiciel</h4>
          <ul class="card-list">
            <li class="card-list-item">C# - 100%</li>
            <li class="card-list-item">C++ - 50%</li>
            <li class="card-list-item">Java - 60%</li>
            <li class="card-list-item">Android SDK - 60%</li>
            <li class="card-list-item">.NET - 90%</li>
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
  },
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

