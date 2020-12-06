<template>
  <div class="storeList">
    <ul class="storeListBox">
      <li class="list" v-for="obj in list" :key="obj.id" @click="$router.push({path:'/detail',query:{id:obj.id}})">
        <img :src="obj.img" alt="" />
        <div class="ListRight">
          <h2>{{ obj.name }}</h2>
          <div class="dTwo">
            <div class="dLeft">
              <Star :num="parseFloat(obj.score)"></Star>
              {{ obj.score }}
              月售{{ obj.num }}+
            </div>
            <div class="dRight">
              {{ obj.minute }}分钟
              <span>{{ obj.distance }} </span>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <img class="loading"
      v-show="isShow" src="@/assets/images/loading.gif" alt="">
  </div>
</template>

<script>
import axios from "axios";
import Star from "../../components/Star";
export default {
  data() {
    return {
      list: [],
      pageNum: 0,
      isShow: true, //判断loading是否显示  true显示|false隐藏
      isFinished: false,
    };
  },
  components: {
    Star,
  },
  methods: {
    getData() {
      axios
        .get(
          "http://admin.gxxmglzx.com/tender/test/get_store?current=" +
            this.pageNum +
            "&size=10"
        )
        .then((res) => {
          console.log(res);
          this.list = [...this.list, ...res.data.data.list];
          this.pageNum++;
          this.isShow = false; //loading隐藏
          // 判断是不是请求完了
          if (this.list.length == res.data.data.total) {
            this.isFinished = true;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getData();
    window.onscroll = () => {
      let scrollTop = document.documentElement.scrollTop;
      let clientHeight = document.documentElement.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight;

      console.log(scrollTop, clientHeight, scrollHeight);

      if (scrollTop + clientHeight >= scrollHeight - 1 && !this.isFinished) {
        //页面到底了 并且 数据没有加载完
        this.isShow = true; //loading
        this.getData();
      }
    };
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
      .dTwo {
        display: flex;
        .dRight {
          flex: 1;
          text-align: right;
          span::before {
            content: "";
            display: inline-block;
            width: 1px;
            height: 6px;
            background-color: #ccc;
            margin-right: 5px;
          }
        }
      }
    }
  }
}
.loading {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 1.4rem;
  height: 1.4rem;
}
</style>