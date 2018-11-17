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

    </div>
  </section>
</template>

<script>
import SectionHeader from './SectionHeader'

export default {
  name: 'About',
  components: {
    SectionHeader,
  },
  data: () => {
    return {
      //{ HTML: 100, CSS: 90, Javascript: 70, 'Vue.js': 70, SASS: 50, Webpack: 40, Twig: 90 }
      frontEndSkills: [
        { name: 'HTML', value: 100 },
        { name: 'CSS', value: 90},
        { name: 'Twig', value: 90 },
        { name: 'Javascript', value: 70 },
        { name: 'Vue.js', value: 70 },
        { name: 'Webpack', value: 40 }
      ]
    }
  }
}
</script>

<style scoped>

  .card {
    background-color: #fff;
    box-shadow: 1px 1px 4px 0 rgba(0,0,0,.2);
  }

  .reset-padding {
    padding: 0;
  }

  .skill-content {
    margin-top: 160px;
    display: grid;
    grid-row-gap: 40px;
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
    .skill-content {
      margin-top: 200px;
    }
  }
</style>

