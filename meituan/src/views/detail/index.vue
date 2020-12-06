<template>
  <div class="bs-wrapper">
    <div class="bs-content">
      <DetailHead :storeMsg="storeMsg"></DetailHead>
    </div>

  </div>
</template>

<script>
import DetailHead from "./detailHead";
import axios from 'axios'
export default {
  data() {
    return {
      active: 0,
      storeMsg:{}
    };
  },
  components: {
    DetailHead,

  },
  mounted() {

    // 请求商家数据
    axios.get('http://admin.gxxmglzx.com/tender/test/get_store_id?id='+this.$route.query.id)
    .then(res=>{
      this.storeMsg = res.data.data;
    }).catch(err=>{
      console.log(err)
    })

  }
};
</script>

<style lang="scss" scoped>
.bs-wrapper {
  height: 100vh;
  overflow: hidden;

}
</style>