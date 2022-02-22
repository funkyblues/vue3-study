<template>
<!-- 클래스를 데이터 바인딩 수행. -->
<!-- absolute, fixed 가 참이면 클래스로 추가 -->
<!-- absolute: absolute, fixed: fixed를 아래처럼 줄임. -->
<!-- 속성-데이터가 같으므로 축약 -->
  <div 
    :style="{
      width: `${size}rem`,
      height: `${size}rem`,
      // vuejs에선 Camelcase를 dashcase로 변경해줄 수 있기 때문
      // zIndex: zIndex
      zIndex
    }"
    :class="{ 
      absolute, 
      fixed 
    }" 
    class="spinner-border text-primary"></div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 2,
    },
    absolute: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 0
    },
  }
}
</script>

<style lang="scss" scoped>
.spinner-border {
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  &.absolute {
    position: absolute;
  }
  &.fixed {
    position: fixed;
  }
}
</style>