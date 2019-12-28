<template>
  <div class="header">
    <header :class="headerClass" class="hidden-xs-only">
      <div class="container">
        <div class="logo">sissi</div>
        <nav class="hidden-xs-only">
          <ul>
            <li v-for="(item,index) in menu" @click="selected(index)">
              <router-link :to="item.url" :class="index == flag ? 'selected':''">{{item.name}}</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <div :class="[{side_edge : menuShow},'side__menu']" @click="sideAdd">
      <svg viewBox="0 0 32 32" width="100%" height="100%">
        <path
          d="M30 18h-28c-1.1 0-2-0.9-2-2s0.9-2 2-2h28c1.1 0 2 0.9 2 2s-0.9 2-2 2zM30 6.25h-28c-1.1 0-2-0.9-2-2s0.9-2 2-2h28c1.1 0 2 0.9 2 2s-0.9 2-2 2zM2 25.75h28c1.1 0 2 0.9 2 2s-0.9 2-2 2h-28c-1.1 0-2-0.9-2-2s0.9-2 2-2z"
        />
      </svg>
      <span>&nbsp; menu</span>
    </div>
    <div :class="[{side_show : isShow},'side_main']">
      <div class="side__bg" @click="sideRemove"></div>
      <div class="side__panel">
        <svg
          class="side__close ft__a"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          @click="sideRemove"
        >
          <path
            d="M18.362 19.324c-0.902 0.902-2.363 0.902-3.263 0l-5.098-5.827-5.098 5.825c-0.902 0.902-2.363 0.902-3.263 0-0.902-0.902-0.902-2.363 0-3.263l5.304-6.057-5.306-6.061c-0.902-0.902-0.902-2.361 0-3.263s2.361-0.902 3.263 0l5.1 5.829 5.098-5.829c0.902-0.902 2.361-0.902 3.263 0s0.902 2.363 0 3.263l-5.304 6.061 5.304 6.057c0.902 0.902 0.902 2.363 0 3.265z"
          />
        </svg>

        <div class="side__header">
          <a href rel="start">
            <img class="side__logo" src="../../../static/images/my.png" />
          </a>

          <div class="side__meta">sissi</div>
        </div>
        <ul class="side__nav">
          <li v-for="(item,index) in menu">
            <router-link :to="item.url">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        { name: "首页", url: "/" },
        { name: "学习笔记", url: "/list/journalismApi" },
        { name: "资源共享", url: "/list/journalismApi01" },
        { name: "生活随记", url: "/list/journalismApi02" },
        { name: "其他", url: "/content/journalismApi03" }
      ],
      flag: 0,
      headerClass: "",
      isShow: false,
      menuShow: false
    };
  },
  methods: {
    selected(index) {
      this.flag = index;
    },
    sideAdd() {
     this.isShow = true;
    },
    sideRemove() {
      this.isShow = false;
    }
  },
  mounted() {
    let _that = this;
    window.onscroll = function() {
      
      _that.menuShow = document.documentElement.scrollTop > window.screen.height / 3 ? true : false;
     
    };
  }
};
</script>

<style lang="less" scoped>
@maincolor: rgba(255, 255, 255, 0.7);
.header {
  position: fixed;
  z-index: 1;
  width: 100%;
  .white {
    background-color: #fff;
  }
}
header {
  height: 40px;
  color: #fff;
  position: relative;
  z-index: 1;
  box-shadow: 0 30px 40px #bbb inset;
  // margin-bottom: 5px;
  .logo {
    float: left;
    font-size: 26px;
    font-weight: 600;
    line-height: 40px;
    padding-left: 20px;
  }
}
nav {
  float: right;
  overflow: hidden;
  li {
    float: left;
    margin: 0 15px;
  }
  a {
    color: #fff;
    line-height: 40px;
    font-size: 16px;
    padding: 8px 0;
  }
  .selected {
    border-bottom: 2px solid #bbb;
  }
}



//侧边导航
.side__menu {
  opacity: 0;
  position: fixed;
  z-index: 2;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  font-size: 12px;
  text-transform: uppercase;
  color: #fff;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: left 0.3s ease;
}

@media only screen and (max-width: 767px) {
  .side__menu {
    opacity: 1;
  }
  .side__menu:hover {
    opacity: 0.6;
  }
}


.side_edge {
  left: -3px;
  font-size: 0;
  background-color: #333;
}
svg {
  fill: currentColor;
  display: inline-block;
  stroke-width: 0;
  stroke: currentColor;
  width: 14px;
  height: 14px;
}
.side_main {
  display: none;
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 3;
  transition: all 0.1s ease;
}
.side_show {
  display: block;
  opacity: 1;
}
.side_show .side__bg {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 3;
  transition: background-color 1s ease;
  background-color: rgba(0, 0, 0, 0.3);
}
.side__panel {
  width: 280px;
  height: 100vh;
  overflow: auto;
  position: fixed;
  left: 0;
  z-index: 4;
  top: 0;
  background-color: #000;
}
.side__close {
  cursor: pointer;
  height: 16px;
  width: 16px;
  position: absolute;
  right: 10px;
  top: 10px;
}
.ft__a {
  color: #738a94;
}
.side__header {
  background: #000 url(../../../static/images/side-bg.gif) top/contain no-repeat;
  width: 100%;
  height: 239px;
  padding-top: 40px;
}
.side__logo {
  width: 66px;
  height: 66px;
  border: 4px solid rgba(255, 255, 255, 0.5);
  border-radius: 100%;
  box-shadow: inset 1px 1px 4px rgba(0, 0, 0, 0.3), 0 2px 3px rgba(0, 0, 0, 0.4);
  margin: 0 auto 20px;
  display: block;
  transition: all 0.3s ease;
}
.side__logo:hover {
  transform: rotate3d(0, 0, 1, 45deg);
}
.side__meta {
  color: #fff;
  text-align: center;
}
.side__nav li {
  height: 30px;
  display: flex;
}
.side__nav li a {
  color: #989898;
  text-decoration: none;
  line-height: 1.4;
  padding: 0 10px 0 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>