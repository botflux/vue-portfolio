<template>
  <header class="section-header">
    <strong>{{ subtitle }}</strong>
    <h2>{{ title }}</h2>
    </header>
</template>

<script>
export default {
  name: 'SectionHeader',
  props: {
    title: String,
    subtitle: String
  }
}
</script>

<style scoped>
  .section-header {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 600px) {
    .section-header {
      flex-direction: row-reverse;
      align-items: center;
      margin-right: auto;
    }

    strong {
      margin-left: 30px;
    }
  }
</style>


