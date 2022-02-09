<template>
  <ul>
    <li>{{ name }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
  h1 {
    color: red !important;
  }
</style>