<template>
    <div class="content">
        <div class="banner">
            <template>
                <el-carousel :interval="5000" :height="height">
                    <el-carousel-item v-for="(item,index) in bannerImg" :key="index">
                        <img :src="item.imgsrc" :alt="height">
                    </el-carousel-item>
                </el-carousel>
            </template>
        </div>
        <div class="main-cont">
            <div class="container">

                <el-col :sm="16" :xl="17">
                    <div class="main-con-left">
                            <ul>
                                <li v-for="news in newsinfo">
                                    <a :href="news.url" class="cont-pic fl">
                                        <img :src="news.imgsrc" alt="">
                                    </a>
                                    <a :href="news.url" class="cont-info">
                                        <h4 class="cont-tit">{{news.title}}</h4> 
                                        <p href="" class="cont-con">{{news.content}}</p>
                                    </a>
                                    <div class="autor">
                                        <span class="lm">
                                            <a :href="news.typeUrl" :title="news.type" target="_blank" class="classname">{{news.type}}</a>   
                                        </span>
                                        <span class="dtime">{{news.creatTime}}</span>
                                        <span class="viewnum">浏览（{{news.num}}）</span>
                                        <span class="readmore fr">
                                            <a href="#">阅读原文</a>
                                        </span>
                                    </div>
                                </li>
                            
                              
                            </ul>
                    </div>
                </el-col>
                <el-col :sm="8" :xl="7">
                    <div class="main-con-right">
                        <div class="about-me">
                            <div class="little-banner">
                                <img src="../../../static/images/my.png" alt="">
                            </div>
                            <p class="my-name">sissi</p>
                            <p class="my-job">Web前端开发工程师</p>
                            <p class="my-description">一个80后草根女站长！09年入行。一直潜心研究web前端技术，一边工作一边积累经验，分享一些个人博客模板，以及SEO优化等心得。</p>
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
                </el-col>
                
                
            </div>
        </div>
    </div>
        
</template>

<script>
export default {
     data() {
        return {
           bannerImg:[
               {imgsrc:'../../../static/images/banner_01.png'},
               {imgsrc:'../../../static/images/banner_02.png'},
               {imgsrc:'../../../static/images/banner_01.png'},
           ],
           height:"",
           newsinfo:[
               {
                   url:'#',
                   imgsrc:'../../../static/images/pic01.jpg',
                   title:'关于响应式Web设计技巧以及入门',
                   content:'html5和css3流行至今，我在做响应式的网站一直是在“尝试”的阶段。并没有深入的去研究和学习，浅显的理解就是根据屏幕分辨率的大小，网站布局、图片、文字大小等...',
                   type:'HTML5+CSS3',
                   typeUrl:'/',
                   creatTime:'2018-08-01',
                   num:'10'
               },
               {
                   url:'#',
                   imgsrc:'../../../static/images/pic01.jpg',
                   title:'关于响应式Web设计技巧以及入门',
                   content:'html5和css3流行至今，我在做响应式的网站一直是在“尝试”的阶段。并没有深入的去研究和学习，浅显的理解就是根据屏幕分辨率的大小，网站布局、图片、文字大小等...',
                   type:'HTML5+CSS3',
                   typeUrl:'/',
                   creatTime:'2018-08-01',
                   num:'10'
               },
               {
                   url:'#',
                   imgsrc:'../../../static/images/pic01.jpg',
                   title:'关于响应式Web设计技巧以及入门',
                   content:'html5和css3流行至今，我在做响应式的网站一直是在“尝试”的阶段。并没有深入的去研究和学习，浅显的理解就是根据屏幕分辨率的大小，网站布局、图片、文字大小等...',
                   type:'HTML5+CSS3',
                   typeUrl:'/',
                   creatTime:'2018-08-01',
                   num:'10'
               },
               {
                   url:'#',
                   imgsrc:'../../../static/images/pic01.jpg',
                   title:'关于响应式Web设计技巧以及入门',
                   content:'html5和css3流行至今，我在做响应式的网站一直是在“尝试”的阶段。并没有深入的去研究和学习，浅显的理解就是根据屏幕分辨率的大小，网站布局、图片、文字大小等...',
                   type:'HTML5+CSS3',
                   typeUrl:'/',
                   creatTime:'2018-08-01',
                   num:'10'
               },
               {
                   url:'#',
                   imgsrc:'../../../static/images/pic01.jpg',
                   title:'关于响应式Web设计技巧以及入门',
                   content:'html5和css3流行至今，我在做响应式的网站一直是在“尝试”的阶段。并没有深入的去研究和学习，浅显的理解就是根据屏幕分辨率的大小，网站布局、图片、文字大小等...',
                   type:'HTML5+CSS3',
                   typeUrl:'/',
                   creatTime:'2018-08-01',
                   num:'10'
               },
               {
                   url:'#',
                   imgsrc:'../../../static/images/pic01.jpg',
                   title:'关于响应式Web设计技巧以及入门',
                   content:'html5和css3流行至今，我在做响应式的网站一直是在“尝试”的阶段。并没有深入的去研究和学习，浅显的理解就是根据屏幕分辨率的大小，网站布局、图片、文字大小等...',
                   type:'HTML5+CSS3',
                   typeUrl:'/',
                   creatTime:'2018-08-01',
                   num:'10'
               }
           ]
        }
    },
     mounted(){
         
         this.height = document.body.clientWidth * (480/1920) +'px';
         let that = this;
         window.onresize = function(){
            that.height = document.body.clientWidth * (480/1920) +'px';
         }
            
    },
}
</script>

<style lang="less" scoped>
        .content{
            overflow: hidden;
        }
        .banner img{
                width: 100%;
        }
        .main-cont{
            margin-top: 20px;
            li {
                overflow: hidden;
                padding: 20px 20px;
                margin-bottom: 10px;
                background-color: #fff;
                .cont-pic{
                    display: block;
                    margin-right:20px;
                    width: 30%;
                }
                img{
                    width: 100%;
                }
                h4{
                    font-size: 16px;
                    line-height: 30px;
                    margin: 10px 0;
                }
                .cont-con{
                    font-size: 14px;
                    color: #888;
                    line-height: 24px;
                }
                .autor{
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
                .lm a,.readmore a,>a:hover{
                    color:#096;
                }
                .lm a:hover,.readmore a:hover,{
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

        @media only screen and (max-width: 430px){
            .main-cont li .cont-pic{
                    width: 100%;
                    float: none;
                }
             .main-cont li .autor .readmore{
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
             .main-con-right{
                margin-left: 0px;
            }
        }

        .main-con-right{
            margin-left: 20px;
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
                font-size: 18ox;
                line-height: 50px;
                border-bottom: 1px solid #e5e5e5;
                padding-left: 10px;
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
        @media only screen and (max-width: 767px){
            
             .main-con-right{
                margin-left: 0px;
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
</style>