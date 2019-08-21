<template>
  <div id="app">
    <HraderNav></HraderNav>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import HraderNav from '@/components/common/HeaderNav'
import Footer from '@/components/common/Footer'


export default {
  name: 'App',
  components:{
    HraderNav,Footer
  }
}
</script>

<style>
#app {
  font-family: "microsoft yahei",'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(247, 247, 247);
  overflow: hidden;
}

.container{
        max-width: 1200px;
        margin: 0 auto;
    }
</style>
