<template>
    <div class="list clearfix">
        <div class="banner">
            <img src="../../../static/images/timg.png" alt="">
        </div>
        <div class="main-list" id="list">
            <div class="container">
                <div class="main-con-pos clearfix">
                    <div class="current-col fl">
                        HTML+CSS
                    </div>
                    <div class="current-pos fr">
                        <img src="../../../static/images/home.png" alt="">当前位置 : <a href="/">首页</a> > HTML+CSS
                    </div>
                </div>

                <el-col :sm="8" :xl="7">
                    <div class="main-con-left">
                        <div class="nav-left">
                                <h2>栏目导航</h2>
                                
                        </div>
                        <div class="search">
                                <h2>搜索</h2>
                                <form action="" method="post">
                                    <input type="text" placeholder="请输入关键词">
                                    <button type="submit"><img src="../../../static/images/search.png" alt="" srcset=""></button>
                                </form>
                        </div>
                        
                    </div>
                </el-col>
                <el-col :sm="16" :xl="17">
                    
                    <div class="main-con-right">
                            <ul>
                                <li v-for="news in infoUrl">
                                    <a :href="news.link" class="cont-pic fl">
                                        <img src="../../../static/images/pic01.jpg" alt="">
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
            </div>
        </div>
    </div>
</template>

<script>

import axios from "axios"
export default {
    data(){
        return{
            infoUrl:[]
        }
    },
    created() {
        axios.get('https://www.apiopen.top/journalismApi')
        .then(response => {
            this.infoUrl = response.data.data.toutiao;
            console.log(this.infoUrl);

        }).catch(error => {
           console.log(error);
            alert('网络错误，不能访问');
        })
    }
}
</script>

<style lang="less" scoped>
    .list{
        margin-bottom: 20px
    }
    .banner{
        width: 100%;
        img{
            width: 100%;
            height: auto;
        }
    }
    .main-con-pos{
        border-bottom: 1px solid #bfbfbf;
        line-height: 40px; 
        margin-bottom: 20px;
        .current-col{
            font-size: 20px;
            color: #096;
        }
        img{
            margin: -3px 2px 0 0;
        }
    }

    .main-list{
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
            .main-list li .cont-pic{
                    width: 100%;
                    float: none;
                }
             .main-list li .autor .readmore{
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

        .main-con-left{
            margin-right: 20px;
            >div{
                background-color: #fff;
                margin-bottom: 15px;
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
        }
@media only screen and (max-width: 767px){
             .main-con-left{
                margin-right: 0px;
            }
        }
</style>