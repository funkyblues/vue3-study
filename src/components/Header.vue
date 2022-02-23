<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div
        v-for="nav in navigations"
        :key="nav.name"
        class="nav-item">
        <RouterLink 
          :to="nav.href"
          active-class="active"
          :class="{ active: isMatch(nav.path)}"
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
    <div 
      class="user" 
      @click="toAbout">
      <img 
        :src="image" 
        :alt="name" />
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
import Logo from './Logo.vue'
export default {
  components: {
    Logo
  },
  data() {
    return {
      navigations: [
        {
          name: 'Search',
          href: '/'
        },
        {
          name: 'Movie',
          href: '/movie/tt4520988',
          // 정규표현식 사용
          // ^ : 특정 표현식으로 시작한다는 의미. escape \를 사용해서 / 로 시작한다는 의미로 작성
          // 
          path: /^\/movie/ // '/movie'
        },
        {
          name: 'About',
          href: '/about'
        },
      ]
    }
  },
  computed: {
    ...mapState('about', [
      'image',
      'name'
    ]),
    ...mapState('movie', [
      'movies',
      'loading',
      'message',
      'theMovie'
    ])
    // image() {
    //   return this.$store.state.about.image
    // },
    // name() {
    //   return this.$store.state.about.name
    // }
  },
  methods: {
    isMatch(path) {
      if (!path) {
        return false
      }
      console.log(this.$route)
      return path.test(this.$route.fullPath)
    },
    toAbout() {
      console.log('!!!')
      // router 플러그인 사용
      // push로 페이지 이동 가능. RouterLink 컴포넌트를 꼭 사용할 필요 없음
      this.$router.push('/about')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";
  header {
    height: 70px;
    padding: 0 40px;
    display: flex;
    align-items: center;
    position: relative;
    .logo {
      margin-right: 40px;
    }
    .user {
      width: 60px;
      height: 60px;
      padding: 6px;
      border-radius: 50%;
      box-sizing: border-box;
      background-color: $gray-200;
      cursor: pointer;
      position: absolute;
      top: 30px;
      bottom: 0;
      right: 40px;
      margin: auto;
      transition: .4s;
      &:hover {
        // 10% 더 어두운 색상
        background-color: darken($gray-200, 10%);
      }
      img {
        width: 100%;
        border-radius: 50%;
      }
    }
    // Bootstrap Breakpoint 작성
    // Bootstrap 사이트에 있는 기준에 따라 sm보다 작으면 header가 사라지는 코드
    @include media-breakpoint-down(sm) {
      .nav {
        display: none;
      }
    }
  } 
</style>