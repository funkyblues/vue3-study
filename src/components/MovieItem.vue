<template>
  <RouterLink 
    :to="`/movie/${movie.imdbID}`"
    :style="{ backgroundImage: `url(${movie.Poster})` }"
    class="movie">
    <Loader 
      v-if="imageLoading"
      :size="1.5"
      absolute />
    <div class="info">
      <div class="year">
        {{ movie.Year }}
      </div>
      <div class="title">
        {{ movie.Title }}
      </div>
    </div>
  </RouterLink>
</template>

<script>
import Loader from './Loader.vue'
export default {
  components: {
    Loader
  },
  props: {
    movie: {
      type: Object,
      default: () => ({})
    } 
  },
  data() {
    return {
      imageLoading: true
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      const poster = this.movie.Poster
      if (!poster || poster === 'N/A') {
        this.imageLoading = false
      } else {
        await this.$loadImage(this.movie.Poster)
        this.imageLoading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";
  .movie {
    $width: 200px;
    width: $width;
    height: $width * 3 / 2;
    margin: 10px;
    border-radius: 4px;
    background-color: $gray-400;
    background-size: cover;
    background-position: center;
    position: relative;
    &::after {
      content: "";
      opacity: 0;
      position: absolute;
      top: -8px;
      bottom: -8px;
      left: -8px;
      right: -8px;
      border: 8px solid $primary;
      border-radius: 6px;
      transition: opacity 0.2s ease-in-out;
    }
    &:hover::after {
      opacity: 0.5;
    }
    .info {
      background-color: rgba($black, .3);
      width: 100%;
      padding: 14px;
      font-size: 14px;
      text-align: center;
      position: absolute;
      left: 0;
      bottom: 0;
      backdrop-filter: blur(3px);
      .year {
        color: $primary;
      }
      .title {
        color: $white;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
</style>