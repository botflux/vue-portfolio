<template>
  <div>
    <article v-for="skill in data" :key="skill.name" :class="getClass(skill)">
      <h4>{{ skill.name }}</h4>
      <p>{{ skill.value }} %</p>
    </article>
  </div>
</template>

<script>
export default {
  name: 'SkillMosaic',
  props: {
    data: Array
  },
  methods: {
    getClass (skill) {
      if (skill.value <= 50) {
        return 'span-1'
      } else if (skill.value <= 75) {
        return 'span-2'
      } else {
        return 'span-3'
      }
    }
  }
}
</script>

<style scoped>
  div {
    display: grid;
    grid-gap: 40px;
    grid-auto-flow: dense;
    grid-auto-rows: 200px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .span-1 {
    grid-row: span 1;
    grid-column: span 1;
  }

  .span-2 {
    grid-row: span 1;
    grid-column: span 1;
  }

  .span-3 {
    grid-row: span 2;
    grid-column: span 2;
  }

  article {
    background: #fff;
    box-shadow: 1px 1px 10px 0 rgba(0,0,0,.2);
    padding: 32px;
  }

  h4 {
  }
</style>
