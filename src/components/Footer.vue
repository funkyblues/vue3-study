<template>
  <footer>
    <Logo />
    <a 
      href="https://github.com/funkyblues" 
      target="_blank">
      (c){{ new Date().getFullYear() }} Changuk
    </a>
  </footer>
</template>

<script>
import Logo from '~/components/Logo'
export default {
  components: {
    Logo

  }
}
</script>

<style lang="scss" scoped>
  footer {
    padding: 70px 0;
    text-align: center;
    opacity: .3;
    .logo {
      // 수직으로 쌓이도록.
      display: block;
      margin-bottom: 4px;
    }
  }
</style>