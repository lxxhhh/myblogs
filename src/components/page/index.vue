<template>
    <div class="content">
        <div class="banner">
            <template>
                <el-carousel :interval="5000" :height="height"  indicator-position="none" arrow="never">
                    <el-carousel-item>
                        <div class="slider-img"></div>
                    </el-carousel-item>
                </el-carousel>
            </template>
            <a class="up" @click="upcont"></a>
            <canvas id="c"></canvas>
        </div>
        <div class="main-cont" id="content">
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
                            
                                <li v-for="news in infoUrl">
                                    <a :href="news.link" class="cont-pic fl">
                                        <img :src="news.picInfo[0]" alt="">
                                    </a>
                                    <a :href="news.link" class="cont-info">
                                        <h4 class="cont-tit">{{news.title}}</h4> 
                                        <p class="cont-con">{{news.digest}}</p>
                                    </a>
                                    <div class="autor">
                                        <span class="lm">
                                            <a :href="news.link" :title="news.category" target="_blank" class="classname">{{news.category}}</a>   
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
                </el-col>
                <el-col :sm="8" :xl="7">
                    <leftNav></leftNav>
                </el-col>
                
                
            </div>
        </div>
    </div>
        
</template>

<script>

import {upBubbel} from '../../../static/js/bubbel'
import axios from "axios"
import leftNav from '@/components/common/leftNav'

export default {
     data() {
        return {
           bannerImg:[
               {imgsrc:'../../../static/images/header-bg.jpg'}
           ],
           height:"100vh",
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
               }
           ],
           infoUrl:[],
          
        }
    },
    components:{
        leftNav
    },
    methods: {
        upcont(){
            //页面上滑的距离等于下拉箭头到浏览器的距离+自身高度和bottom
            document.documentElement.scrollTop = document.getElementsByClassName('up')[0].offsetTop+50;
        }
    }, 
    created() {
        axios.get('https://www.apiopen.top/journalismApi')
        .then(response => {
            this.infoUrl = response.data.data.toutiao;
            // console.log(this.infoUrl);

        }).catch(error => {
           console.log(error);
            alert('网络错误，不能访问');
        })
    },
    mounted(){
        //向上的泡泡
        upBubbel();
        //设置element轮播图高度自适应
        //  this.height = document.body.clientWidth * (480/1920) +'px';
        //  let that = this;
        //  window.onresize = function(){
        //     that.height = document.body.clientWidth * (480/1920) +'px';
        //  }
       
    },
}
</script>

<style lang="less" scoped>
        #c {
            display: block;
            width: 100%;
            height: 100vh;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
        }
        .content{
            overflow: hidden;
            position: relative;
            top: 0px;
            z-index: 0;
        }
        
        .banner{
                position: relative;
                .slider-img{
                    width: 100%;
                    height: 100vh;
                    background: url(../../../static/images/header-bg.jpg) no-repeat center center;
                    background-size: cover;
                }
                .up{
                    position: absolute;
                    bottom: 15px;
                    z-index: 3;
                    width: 24px;
                    height: 24px;
                    border-bottom: 3px solid #eee;
                    border-right: 3px solid #eee;
                    transform: rotateZ(45deg);
                    left: 50%;
                    margin-left: -12px;
                    animation:mymove 2s linear infinite;
                    -webkit-animation:mymove 2s linear infinite; /*Safari and Chrome*/
                }
                @keyframes mymove{
                   0%,100% {bottom: 15px;}
                    25%,75% {bottom: 20px;}
                    50% {bottom: 25px;}
                }

                @-webkit-keyframes mymove /*Safari and Chrome*/{
                    0%,100% {bottom: 15px;}
                    25%,75% {bottom: 20px;}
                    50% {bottom: 25px;}
                }
        }
        .main-cont{
            margin-top: 20px;
            .main-con-left{
                margin-right: 20px;
            }
            @media only screen and (max-width: 767px){
            
             .main-con-left{
                margin-right: 0px;
            }
        }
            li {
                overflow: hidden;
                padding: 20px 20px;
                margin-bottom: 10px;
                background-color: #fff;
                .cont-pic{
                    display: block;
                    margin-right:20px;
                    width: 30%;
                    font-size: 0;
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
                .lm a:hover,.readmore a:hover{
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
        }

      
</style>