<template>
  <div>
    页面3 id: {{ $route.params.id }}
    <br />
    <router-link to="/page3/a">3.1</router-link>
    |
    <router-link to="/page3/b">3.2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>