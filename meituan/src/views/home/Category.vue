<template>
  <div>
      <ul class="listBox">
          <li class="list" v-for="obj in catelist" :key="obj.id">
              <img :src="obj.img" alt="">
              <p>{{obj.name}}</p>
          </li>
      </ul>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      catelist: []
    }
  },
  created() {
    axios.get("http://admin.gxxmglzx.com/tender/test/get_type")
    .then((res)=>{
        console.log(res)
        if(res.data.errcode==200){
            this.catelist=res.data.data;
        }

    }).catch((error)=>{
        console.log(error)
    })
  },
};
</script>

<style lang="scss" scoped>
.listBox{
    width: 100%;
    // height: 170px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    .list{
        width: 20%;
        margin-top: 1rem;
        // padding: 20px 0;
    }
    .list img{
        width: 60%;
    }
}
</style>