<template>
  <div class="container">
    <div class="inner">
      <!-- movies => computed()에서 가져온 배열 데이터 -->
      <!-- :movie => movies에서 가져온 객체데이터 movie를 movie라는 이름으로 컴포넌트로 전달.   -->
      <MovieItem 
        v-for="movie in movies" 
        :key="movie.imdbID"
        :movie="movie"/>
    </div>
  </div>
</template>

<script>
import MovieItem from './MovieItem.vue'
export default {
  components: {
    MovieItem
  },
  computed: {
    movies() {
      // 현재 프로젝트의 store로 접근
      // movie 모듈의 movies 데이터를 사용하겠다 선언
      // 왜 계산된 데이터로 선언? 반응성을 유지한채 활용되도록.
      return this.$store.state.movie.movies
    }
  }
}
</script>