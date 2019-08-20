<template>
<div>
    <header>
        <div class="container">
            <div class="logo">
                sissi
            </div>
            <div class="search hidden-xs-only">
                <form action="" method="post">
                    <input type="text" placeholder="请输入关键词">
                    <button type="submit"><img src="../../../static/images/search.png" alt="" srcset=""></button>
                </form>
            </div>
        </div>
    </header>
    <nav>
        <div class="container">
            <ul>
                <li><a href="">首页</a></li>
                <li><a href="">学习笔记</a></li>
                <li><a href="">生活随记</a></li>
                <li><a href="">联系我们</a></li>
            </ul>
        </div>
    </nav>
    
</div>
    
</template>
<script>
export default {
   
}
</script>

<style lang="less" scoped>
    @maincolor:#003f88;
    
    header{
        height: 50px;
        color: #fff;
        background-color: @maincolor;
        border-bottom: 1px solid #00327c;
        .logo{
            float: left;
            font-size: 30px;
            font-weight: 600;
            line-height: 50px;
        }
        .search{
            float: right;
            margin-top: 8px;
        }
        .search input,
        .search button {
        padding-left: 10px;
        width: 65px;
        height: 35px;
        line-height: 35px;
        border: none;
        color: #959595;
        background-color: #fff;
        }
        .search input {
        width: 190px;
        margin-left: -5px;
        border-top-left-radius:15px;
        border-bottom-left-radius: 15px;
        }
        .search button {
        width: 40px;
        text-align: center;
        margin-left: -5px;
        border-top-right-radius:15px;
        border-bottom-right-radius: 15px;
        }
        .search button img {
        margin: -2px 0 0 -2px;
        }
    }
    nav{
       overflow: hidden;
        background-color: @maincolor;
        border-top: 1px solid #1f5696;
        li{
            float: left;
        }
        a{
            color: #fff;
            line-height: 40px;
            font-size: 18px;
            padding: 0 15px;
        }
    }
   

</style>