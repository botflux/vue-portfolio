<template>
  <main>
    <img :src="project.img" :alt="project.alt" class="cover-img">
    <section>
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <div v-html="project.body" class="content"></div>
    </section>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ProjectPage',
  created () {
    console.log(this.$route.params.slug)
    this.findProject({ slug: this.$route.params.slug })
  },
  computed: mapGetters({
    projects: 'projects/getAllProjects',
    project: 'projects/getProject'
  }),
  methods: mapActions({
    findAllProjects: 'projects/findAllProjects',
    findProject: 'projects/findProject'
  }),
  beforeRouteUpdate (to, from, next) {
    this.findProject({ id: to.params.projectId})
    next()
  }
}
</script>

<style scoped>
  main {
    padding-top: 90px;
    padding-bottom: 200px;
  }

  .cover-img {
    object-fit: cover;
    height: 400px;
    width: 100%;
  }

  section {
    padding-top: 40px;
    display: grid;
    grid-row-gap: 40px;
  }

  .content {
    display: grid;
    grid-row-gap: 40px;
  }

  .content >>> img {
    object-fit: cover;
  }
</style>
