<template>
  <div id="app">
    <!-- query传参 -->
    <router-link :to="{ path: '/bieming', query: { id: 11, name: 'zxh' } }"
      >page1</router-link
    >
    |
    <!-- params传参 -->
    <router-link :to="{ name: 'page2', params: { id: 22 } }">page2</router-link>
    |
    <!-- 路由路径传参 -->
    <router-link to="/page3/33">page3</router-link>
    <button @click="go()">go_page1</button>
    <button @click="go_params()">go_params传参</button>
    <button @click="goBack()">&lt;</button>
    <br/>
    <router-link to="/Vuex_test1">Vuex_test1</router-link>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    go() {
      // 跳转到page1 router
      this.$router.push("/page1");
      // this.$router.push("/page3/333");
    },
    go_params(){
      // 跳转到page1 params传参
      this.$router.push({name:'page2',params:{id:1024}})
    },
    goBack(){
      this.$router.go(-1)
    }
  },
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 2s ease;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  transform: translateX(0);
}
.fade-leave-active {
  transition: transform 2s ease;
}
.fade-leave-to {
  transform: translateX(100%);
}
</style>
