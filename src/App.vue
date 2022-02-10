<template>
  <h1 :[attr]="msg" @[event]="add">{{ msg }}</h1>
</template>

<script>
export default {
  data() {
    return {
      msg: 'active',
      attr: 'class',
      event: 'click',
    }
  },
  // 속성
  methods: {
    add() {
      this.msg += '!'
    },
  },
}
</script>

<style scoped>
.active {
  color: royalblue;
  font-size: 100px;
}
</style>
