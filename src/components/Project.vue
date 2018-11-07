<template>
  <section class="project" ref="parent">
    <section-header title="Projets" subtitle="Projets Web / Logiciel"></section-header>
    <p>Voici une sélection de projets sur les quels j'ai pu travailler.</p>
    <project-holder class="project-holder" v-if="projectsHaveLoad">
      <project-card v-for="project in projects" :project-id="project.id" :key="project.id" :project-img-alt="project.alt" :project-title="project.title" :project-description="project.description" :project-img="project.img"></project-card>
    </project-holder>
    <dot-loader class="centered" color="#0000ff" :loading="!projectsHaveLoad"></dot-loader>
  </section>
</template>

<script>
import SectionHeader from './SectionHeader'
import ProjectHolder from './ProjectHolder'
import ProjectCard from './ProjectCard'
import DotLoader from 'vue-spinner/src/DotLoader.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'Project',
  components: {
    SectionHeader,
    ProjectHolder,
    ProjectCard,
    DotLoader
  },
  created () {
    if (this.projects.length === 0) {
      this.$store.dispatch('projects/findAllProjects')
    }
  },
  computed: {
    ...mapGetters({
      projects: 'projects/getAllProjects'
    }),
    ...{
      projectsHaveLoad () {
        return this.projects.length != 0
      }
    }
  }
}
</script>

<style scoped>
  .project-holder {
    margin-top: 120px;
  }

  .centered {
    margin: 0 auto;
  }

  .project {
    padding-top: 200px;
    padding-bottom: 200px;
    display: grid;
    grid-row-gap: 40px;
  }

  @media screen and (min-width: 600px) {
    .project-holder {
      margin-top: 160px;
    }
  }
</style>


