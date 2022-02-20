<template>
  <div>{{ movie.Title }}</div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      // 함수를 만들어 객체데이터를 반환하도록 하는게 문제가 생기지 않을것이다라는 경고가 발생
      // 따라서 다음과 같이 작성
      default: () => ({})
    } 
  }
}
</script>