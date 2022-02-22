<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <!-- 현재 겨울왕국 2의 내용만 class가 할당되도록 코드 작성되어있음. -->
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
  </header>
</template>

<script>
import Logo from './Logo'
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
  methods: {
    isMatch(path) {
      if (!path) {
        return false
      }
      console.log(this.$route)
      // fullpath: '/movie/tt2294629'
      // test() 메서드로 정규표현식과 일치하는지 아닌지를 체크.
      return path.test(this.$route.fullPath)
    }
  }
}
</script>

<style lang="scss" scoped>
  header {
    height: 70px;
    padding: 0 40px;
    display: flex;
    align-items: center;
    .logo {
      margin-right: 40px;
    }
  }
</style>