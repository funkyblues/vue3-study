<template>
  <h1>{{ count }}</h1>
</template>

<script>
export default {
  data() {
    return {
      count: 2,
    }
  },
  beforeCreate() {
    console.log('Before Create!', this.count) // Before Create! undefined
  },
  created() {
    console.log('Created!', this.count) // Created! 2
    console.log(document.querySelector('h1')) // null. HTML구조와 연결되기 전 상태이기 때문에 검색 불가능
  },
  beforeMount() {
    console.log('Before Mount!') // Before Mount!
    console.log(document.querySelector('h1')) // null. HTML구조와 연결되기 전 상태이기 때문에 검색 불가능
  },
  mounted() {
    console.log('Mounted!') // Mounted!
    console.log(document.querySelector('h1')) //<h1>2</h1>
  },
}
</script>
