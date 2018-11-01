<template>
  <article class="project-card">
    <div class="img-wrapper">
      <img :src="projectImg" :alt="projectImgAlt" class="project-card-img">
    </div>
    <div class="project-card-body">
      <h3>{{ projectTitle }}</h3>
      <p>{{ projectDescription }}</p>
      <router-link :to="{ name: 'ProjectPage', params: { projectId: projectId } }" class="btn">En savoir plus</router-link>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    projectId: Number,
    projectTitle: String,
    projectImgAlt: String,
    projectImg: String,
    projectDescription: String
  }
}
</script>

<style scoped>
  .project-card {
    display: grid;
    grid-row-gap: 40px;
  }

  .project-card-body {
    display: grid;
    grid-row-gap: 40px;
  }

  .img-wrapper {
    height: 360px;
    width: 100%;
    overflow: hidden;
  }

  .project-card-img {

    height: 100%;
    width: 100%;
    object-fit: cover;

    box-shadow: 0 4px 10px 0 rgba(0,0,0,.2);

  }

  @media screen and (min-width: 900px) {
    .project-card {
      grid-column: 2 / span 10;
    }
  }

  @media screen and (min-width: 1200px) {
    .project-card {
      grid-column: span 12;
      grid-template-columns: repeat(12, 1fr);
    }

    .img-wrapper {
      grid-column: span 6;
    }

    .project-card-img:hover {
      transform: scale(1.2);
    }

    .project-card-img {
      transition: transform .5s;
    }

    .project-card-body {
      grid-column: 8 / span 5;
      align-content: center;
    }
  }
</style>


