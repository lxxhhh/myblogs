<template>
<div class="header">
    <header>
        <div class="container">
            <div class="logo">
                sissi
            </div>
            <nav class="hidden-xs-only">
                <ul>
                    <li v-for="(item,index) in menu" @click="selected(index)"><router-link :to="item.url" :class="index == flag ? 'selected':''">{{item.name}}</router-link></li>
                </ul>
            </nav>
        </div>
    </header>
    
    
</div>
    
</template>
<script>
export default {
   data() {
       return {
           menu:[
               {name:'首页',url:'/'},
               {name:'学习笔记',url:'/list'},
               {name:'资源共享',url:'/list'},
               {name:'生活随记',url:'/list'},
               {name:'其他',url:'/list'},
           ],
           flag:0
       }
   },
   methods: {
       selected(index){
           this.flag = index;
       }
   },
}
</script>

<style lang="less" scoped>
    @maincolor: rgba(255,255,255,0.7);;
    
    header{
        height: 60px;
        color: #333;
        position: relative;
        z-index: 1;
        box-shadow: 0 30px 65px #fff inset;
        // margin-bottom: 5px;
        .logo{
            float: left;
            font-size: 30px;
            font-weight: 600;
            line-height: 60px;
        }
       
    }
    nav{
        float:right;
        overflow: hidden;
        li{
            float: left;
            padding: 0 15px;
        }
        a{
            color: #555;
            line-height: 60px;
            font-size: 18px;
            padding: 8px 0;
        }
        .selected{
            border-bottom: 2px solid #333;
            color: #333;
        }
    }
   

</style>