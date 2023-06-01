<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created () {
    // 任务查询列表数据
    this.$store.dispatch('dataA')
    this.$store.dispatch('dataB')
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
}
</style>
