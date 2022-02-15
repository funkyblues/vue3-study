<template>
  <div
    v-bind="$attrs"
    class="btn"
    @click="hello">
    <slot></slot>
  </div>
</template>

<script>
// 컴포지션 API로 작성해주면??
import { onMounted } from 'vue'

export default {
  inheritAttrs: false,
  props: {
    color: {
      type: String,
      default: 'gray'
    }
  },
  emits: ['hello'],
  // mounted() {
  //   console.log(this.color)
  //   console.log(this.$attrs)
  // },
  // methods: {
  //   hello() {
  //     this.$emit('hello')
  //   }
  // },

  // 컴포지션 API로 작성해주면??
  // 컴포지션 API에선 this메서드 사용 못하니까 props로 받아주기
  setup(props, context) {
    function bye() {
      context.emit('hello')
    }
    onMounted(() => {
      console.log(props.color)
      console.log(context.attrs)
    })
  return {
    bye
  }
  }
}
</script>