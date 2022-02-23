<template>
  <div class="about">
    <div class="photo">
      <Loader 
        v-if="imageLoading" 
        absolute />
      <img 
        :src="image" 
        :alt="name" />
    </div>
    <div class="name">
      {{ name }}
    </div>
    <div>{{ email }}</div>
    <div>{{ blog }}</div>
    <div>{{ phone }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Loader from "../components/Loader"
export default {
  components: {
    Loader
  },
  data() {
    return {
      imageLoading: true
    }
  },
  computed: {
    // about모듈에 있는 상태들을 배열 데이터로 불러오기
    // 문자데이터로 state들을 가져오기
    // mapState() 함수가 해당 state들을 객체 데이터로 반환해줌

    // computed옵션에 다른 데이터를 사용해줄 수도 있기 때문에, 
    // 아래처럼 전개연산자로 하나의 객체 데이터 내부에 작성하는 방식으로 작성해주는 게 좋다.
    ...mapState('about', [
      'image',
      'name',
      'email',
      'blog',
      'phone'
    ])
  },
    // image() {
    //   return this.$store.state.about.image
    // },
    // name() {
    //   return this.$store.state.about.name
    // },
    // email() {
    //   return this.$store.state.about.email
    // },
    // blog() {
    //   return this.$store.state.about.blog
    // },
    // phone() {
    //   return this.$store.state.about.phone
    // }
  //},
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      await this.$loadImage(this.image)
      this.imageLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";
.about {
  text-align: center;
  .photo {
    width: 250px;
    height: 250px;
    margin: 40px auto 20px;
    padding: 10px;
    border: 10px solid $gray-300;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: $gray-200;
    position: relative;
    img {
      width: 100%;
      border-radius: 50%;
    }
  }
  .name {
    font-size: 40px;
    font-family: "Oswald", sans-serif;
    margin-bottom: 20px;
  }
}
</style>