<template>
  <div>
    Vuex

    {{ $store.state.count }}

    {{ count }}

    <br />

    <button @click="$store.commit('add', 5)">add</button>

    <button @click="add(6)">add</button>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["count"]),
  },
  methods:{
      ...mapMutations(['add'])
  }
};
</script>

<style lang="scss" scoped>
</style>