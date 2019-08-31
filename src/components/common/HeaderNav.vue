<template>
<div class="header">
    <header :class="headerClass">
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
               {name:'学习笔记',url:'/list/journalismApi'},
               {name:'资源共享',url:'/list/journalismApi01'},
               {name:'生活随记',url:'/list/journalismApi02'},
               {name:'其他',url:'/list/journalismApi03'},
           ],
           flag:0,
           headerClass:'',
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
    .header{
        position: fixed;
        z-index: 1;
        width: 100%;
        .white{
            background-color: #fff;
        }
    }
    header{
        height: 40px;
        color: #fff;
        position: relative;
        z-index: 1;
        box-shadow: 0 30px 40px #bbb inset;
        // margin-bottom: 5px;
        .logo{
            float: left;
            font-size: 26px;
            font-weight: 600;
            line-height: 40px;
        }
       
    }
    nav{
        float:right;
        overflow: hidden;
        li{
            float: left;
            margin: 0 15px;
        }
        a{
            color: #fff;
            line-height: 40px;
            font-size: 16px;
            padding: 8px 0;
        }
        .selected{
            border-bottom: 2px solid #bbb;
        }
    }
   

</style>