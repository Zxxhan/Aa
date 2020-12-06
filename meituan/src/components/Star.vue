<template>
  <div>
    <ul>
      <li
        v-for="i in 5"
        :key="i"
        :class="{
          star: i > num,
          'star-half': i - num > 0 && i - num < 1,
          'star-active': i <= num,
        }"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      default: 5,
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  display: inline-block;
  ul {
    display: flex;
    li {
      width: 12px;
      height: 12px;
    }
    .star {
      background: url(./images/star.png);
      background-size: 12px 12px;
    }
    .star-half {
      background: url(./images/star-half.png);
      background-size: 12px 12px;
    }
    .star-active {
      background: url(./images/star-active.png);
      background-size: 12px 12px;
    }
  }
}
</style>