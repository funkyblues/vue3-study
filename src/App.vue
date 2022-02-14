<template>
  <Hello ref="hello" />
</template>

<script>
import Hello from './components/hello'

export default {
  components: {
    Hello,
  },
  mounted() {
    console.log(this.$refs.hello.$refs.good)
  }
}
</script>