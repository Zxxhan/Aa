<template>
  <div class="storeList">
    <ul class="storeListBox">
      <li class="list" v-for="obj in list" :key="obj.id">
        <img :src="obj.img" alt="" />
        <div class="ListRight">
          <h2>{{ obj.name }}</h2>
          <div>{{ obj.num }}</div>
          <div>配送时间:{{ obj.minute }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [],
      pageNum: 0,
    };
  },
  methods: {},
  created() {
    axios
      .get(
        "http://admin.gxxmglzx.com/tender/test/get_store?current=" +
          this.pageNum +
          "&size=10"
      )
      .then((res) => {
        this.list = [...this.list, ...res.data.data.list];
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped>
.storeList {
  padding: 10px;
  text-align: left;
  .storeListBox {
    .list {
      display: flex;
      margin-top: 10px;
      img {
        width: 100px;
      }
      .ListRight {
        flex: 1;
        margin-left: 10px;
      }
    }
  }
}
</style>