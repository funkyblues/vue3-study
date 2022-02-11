<template>
  <button @click="add">ADD</button>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello Computed!',
    }
  },
  computed: {
    // reversedMessage() {
    //   return this.msg.split('').reverse().join('')
    // },
    reversedMessage: {
      get() {
        return this.msg.split('').reverse().join('')
      },
      set(value) {
        this.msg = value
      },
    },
  },
  methods: {
    add() {
      this.reversedMessage += '!?'
    },
  },
}
</script>
