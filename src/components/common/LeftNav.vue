<template>
    <div class="main-con-right">
            <div class="about-me">
                <div class="little-banner">
                    <img src="../../../static/images/my.png" alt="">
                </div>
                <p class="my-name">{{myInfo.name}}</p>
                <p class="my-job">{{myInfo.job}}</p>
                <p class="my-description">{{myInfo.descr}}</p>
            </div>

            <div class="search">
                <h2>搜索</h2>
                <form action="" method="post">
                    <input type="text" placeholder="请输入关键词">
                    <button type="submit"><img src="../../../static/images/search.png" alt="" srcset=""></button>
                </form>
            </div>
            <div class="individual-label">
                <h2>
                    个人标签
                </h2>
                <div class="label-detail">
                    <span>程序员</span>
                    <span>程序员</span>
                    <span>程序员</span>
                    <span>程序员</span>
                    <span>程序员</span>
                    <span>程序员</span>
                    <span>程序员</span>
                    <span>程序员</span>
                </div>
            </div>
            <div class="friendly-link">
                <h2>
                    友情链接
                </h2>
                <div class="friendly-link-con">
                    <a href="">百度</a>
                    <a href="">百度</a>
                    <a href="">百度</a>
                    <a href="">百度</a>
                </div>
            </div>
            <div class="contact-info">
                <h2>
                    联系方式
                </h2>
                <div class="weixin">
                    <img src="../../../static/images/wx.jpg" alt="">
                </div>
            </div>
        </div>

</template>

<script>
export default {
    data() {
        return {
             myInfo:{
               name:'sissi',
               job:'Web前端开发工程师',
               descr:'一个80后草根女站长！09年入行。一直潜心研究web前端技术，一边工作一边积累经验，分享一些个人博客模板，以及SEO优化等心得。'
           }
        }
    },
}
</script>

<style lang="less" scoped>
         .main-con-right{
            >div{
                background-color: #fff;
                margin-bottom: 15px;
            }
            .about-me{
                background: #FFF url(../../../static/images/banner.png) no-repeat top center;
                background-size:length(100%,auto);
               padding:80px 0 20px;
                text-align: center;
            }
            .little-banner{
                margin: 0 auto;
                width: 103px;
                height: 103px;
                border-radius: 51px;
                overflow: hidden;
            }
            .my-name{
                font-size: 24px;
                color:#333;
                padding-top: 10px;
            }
            .my-job{
                color:#1abc9c;
                padding-top:5px;
            }
            .my-description{
                text-align: left;
                line-height: 26px;
                padding: 20px 40px 0 ;
            }
            h2{
                position: relative;
                font-size: 18px;
                line-height: 50px;
                border-bottom: 1px solid #e5e5e5;
                padding-left: 10px;
                color: #333;
            }
            h2:after{
                content:'';
                position:absolute;
                bottom: -1px;
                width: 0;
                height: 2px;
                left: 0;
                background-color: #333;
                transition: width 2s ease;

            }
            h2:hover:after{
                width: 100%;   
            }
            .friendly-link{
                color: #333;
            }
            
            .friendly-link-con{
                padding: 15px;
                a{
                    padding: 0 5px;
                }
            }
            .weixin{
                img{
                    width: 100%;
                }
            }
        }
        

        .label-detail{
            overflow: hidden;
            padding: 15px;
            span{
                display: block;
                float: left;
                margin: 5px;
                padding: 0 10px;
                line-height: 30px;
                color: #fff;
                border-radius: 5px;
            }
            span:first-child {
                background: #036564;
            }
            span:nth-child(8n) {
                background: #83AF9B;
            }
            span:nth-child(8n-1) {
                background: #C8C8A9;
            }
            span:nth-child(8n-2) {
                background: #EDC951;
            }
            span:nth-child(8n-3) {
                background: #FC9D9A;
            }
            span:nth-child(8n-4) {
                background: #FE4365;
            }
            span:nth-child(8n-5) {
                background: #3FB8AF;
            }
            span:nth-child(8n-6) {
                background: #EB6841;
            }
            span:nth-child(8n-7) {
                background: #8A9B0F;
            }
            span:last-child {
                background: #3299BB;
            }
               
        } 
            .search form{
                text-align: center;
            }
            .search input,
            .search button {
                padding-left: 10px;
                width: 65px;
                height: 35px;
                line-height: 35px;
                border: none;
                color: #959595;
            }
            .search input {
                width: 60%;
                background-color: #eee;
                margin: 20px 0;
            }
            .search button {
                width: 40px;
                text-align: center;
                background-color: #eee;
                margin-left: -5px;
                border-left: 1px solid #fff
            }
            .search button img {
                margin: -2px 0 0 -2px;
            }
</style>