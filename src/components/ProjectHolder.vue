<template>
  <div class="project-holder"><slot></slot></div>
</template>

<script>
export default {
  name: 'ProjectHolder'
}
</script>

<style scoped>
  .project-holder {
    display: grid;
    grid-row-gap: 200px;
  }

  @media screen and (min-width: 900px) {
    .project-holder {
      grid-template-columns: repeat(12, 1fr);
    }
  }
</style>

