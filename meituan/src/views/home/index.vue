<template>
  <div>
    <Head></Head>
    <Category></Category>
    <List></List>
  </div>
</template>

<script>
import Head from "./head";
import List from "./List";
import Category from "./Category";

export default {
  components: {
    Head,
    List,
    Category,
  },
};
</script>

<style lang="scss" scoped>
</style>