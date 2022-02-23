<template>
  <Headline />
  <Search />
  <MovieList />
</template>

<script>
import Headline from '../components/Headline.vue'
import Search from '../components/Search.vue'
import MovieList from '../components/MovieList.vue'

export default {
  components: {
    Headline,
    Search,
    MovieList
  },
  // Home 화면이 열릴 때 마다 created() 라이프사이클 훅이 실행. 기본적인 데이터 다 초기화 됨.
  created() {
    this.$store.commit('movie/resetMovies')
  }
}
</script>