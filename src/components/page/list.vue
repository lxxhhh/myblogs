<template>
  <div class="list clearfix">
    <div class="banner">
      <img src="../../../static/images/timg.png" alt />
    </div>
    <div class="main-list" id="list">
      <div class="container">
        <div class="main-con-pos clearfix">
          <div class="current-col fl hidden-xs-only">{{type}}</div>
          <div class="current-pos fr">
            <img src="../../../static/images/home.png" alt />当前位置 :
            <a href="/">首页</a> > HTML+CSS
          </div>
        </div>
        <div class="list-new-pbl">
          <ul id="pbl-he">
            <li v-for="news in infoUrl" class="fl new-item">
              <div class="cont-pic fl">
                <img src="#" alt />
              </div>
              <a :href="news.link" class="cont-info" target="_blank">
                <h4 class="cont-tit">{{news.title}}</h4>
                <p class="cont-con">{{news.digest}}</p>
              </a>
              <div class="autor">
                <span class="lm">
                  <a
                    :href="news.link"
                    :title="news.category"
                    target="_blank"
                    class="classname"
                  >{{news.category}}</a>
                </span>
                <span class="dtime">{{news.ptime}}</span>
                <span class="viewnum">浏览（{{news.tcount}}）</span>
                <span class="readmore fr">
                  <a :href="news.link">阅读原文</a>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      type: "HTML+CSS",
      infoUrl: [],
      newsType: ""
    };
  },
  watch: {
    infoUrl: function() {
      this.$nextTick(function() {
        //监听数据加载完成
        // console.log(this.newsType);
        this.waterFall();
      });
    },
    $route: function() {
      //监听$route参数  Vue多个路由共用同一组件时，mounted等生命周期是不起作用的，所以互相切换时检测$route参数变化来更新组件信息
      this.newsType = this.$route.params.newstype;
      this.getInfo();
      console.log(this.newsType);
    }
  },
  mounted() {
    this.newsType = this.$route.params.newstype;
    //获取信息
    this.getInfo();

    let _this = this;
    window.onresize = function() {
      _this.waterFall();
    };
  },
  methods: {
    getInfo() {
      axios
        .get(`https://www.apiopen.top/${this.newsType}`)
        .then(response => {
          this.infoUrl = response.data.data.toutiao;
        })
        .catch(error => {
          console.log(error);
          alert("网络错误，不能访问");
        });
    },
    waterFall() {
      //瀑布流效果
      //这里有一个坑（已经修复）：
      //因为是动态加载远程图片，在未加载完全无法获取图片宽高
      //item的top值：第一行：top为0
      //            其他行：获得item的高度
      //                   设置瀑布流中每个item的top值（为每一行中最小的item高度，数组查找）
      //item的left值：第一行：按照每块item的宽度值*块数
      //             其他行：与自身上面一块的left值相等
      let pageWidth = document.getElementsByClassName("container")[1]
        .offsetWidth;
      let columns = 3;
      //得到li的宽度  减10是为了预留出来充当margin-left和margin-right
      let itemWidth = parseInt(pageWidth / columns) - 10;

      //获取li元素
      let items = document.getElementsByClassName("new-item");
      let arr = [];
      for (let i = 0; i < items.length; i++) {
        //给每一个li元素加宽
        items[i].style.width = itemWidth + "px";

        //获取浮动的元素的高度  加10是为了充当margin-bottom
        let boxheight = items[i].clientHeight + 10;

        //第一行的元素，top值为0，
        if (i < columns) {
          items[i].style.top = 0;
          items[i].style.left = (itemWidth + 10) * i + "px";
          arr.push(boxheight);
          // console.log(boxheight);
        } else {
          let minHeight = arr[0];
          let n = 0;
          arr.forEach((item, index) => {
            if (minHeight >= item) {
              minHeight = item;
              n = index;
            }
          });
          // console.log(minHeight,arr[n]);
          //下一个的top值等于之前的元素里高度最小的
          items[i].style.top = minHeight + "px";
          items[i].style.left = items[n].style.left;

          // 5- 修改最小列的高度
          // 最小列的高度变为 ： 当前自己的高度 + 拼接过来的高度
          arr[n] = boxheight + arr[n];
        }
      }
      let maxHeight = arr[0];
      arr.forEach((item, index) => {
        maxHeight = maxHeight < item ? item : maxHeight;
      });
      document.getElementById("pbl-he").style.height = maxHeight + 50 + "px";
    }
  }
};
</script>

<style lang="less" scoped>
.list {
  margin-bottom: 20px;
}
.banner {
  width: 100%;
  img {
    width: 100%;
    height: auto;
  }
}
.main-con-pos {
  border-bottom: 1px dashed #bfbfbf;
  line-height: 40px;
  margin-bottom: 20px;
  .current-col {
    width: 20%;
    font-size: 18px;
    font-weight: 600;
    color: #333;
    padding-left: 15px;
    background: #fff url(../../../static/images/navbg.png) no-repeat right
      bottom;
  }
  img {
    margin: -3px 2px 0 0;
  }
}

.main-list {
  min-height: 500px;
  margin-top: -40px;
  position: relative;
  .list-new-pbl {
    position: relative;
  }

  li {
    box-sizing: border-box;
    position: absolute;
    // width: 29%;
    overflow: hidden;
    padding: 20px 20px;
    margin-bottom: 10px;
    background-color: #fff;
    margin: 5px;
    .cont-pic {
      display: block;
      margin-right: 20px;
      width: 40%;
      font-size: 0;
    }
    img {
      width: 100%;
    }
    h4 {
      font-size: 16px;
      line-height: 30px;
      margin: 10px 0;
    }
    .cont-con {
      font-size: 14px;
      color: #888;
      line-height: 24px;
    }
    .autor {
      font-size: 12px;
      width: 100%;
      padding: 15px 0;
      clear: both;
    }
    .autor span {
      margin-right: 10px;
      padding-left: 20px;
    }
    .lm {
      background: url(../../../static/images/newsbg01.png) no-repeat left center;
    }
    .lm a,
    .readmore a,
    > a:hover {
      color: #096;
    }
    .lm a:hover,
    .readmore a:hover {
      text-decoration: underline;
    }
    .dtime {
      background: url(../../../static/images/newsbg02.png) no-repeat left center;
    }
    .viewnum {
      background: url(../../../static/images/newsbg04.png) no-repeat left center;
    }
  }
}

@media only screen and (max-width: 430px) {
  .main-list li .cont-pic {
    width: 100%;
    float: none;
  }
  .main-list li .autor .readmore {
    display: block;
    overflow: hidden;
    width: 100%;
    float: none;
    text-align: center;
    background: #f2f2f2;
    padding: 10px 0;
    margin-top: 10px;
    clear: both;
  }
}
</style>