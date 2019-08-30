<template>
    <div class="list clearfix">
        <div class="banner">
            <img src="../../../static/images/timg.png" alt="">
                     
        </div>
        <div class="main-list" id="list">
            <div class="container">
                <div class="main-con-pos clearfix">
                    <div class="current-col fl hidden-xs-only">
                        HTML+CSS
                    </div>
                    <div class="current-pos fr">
                        <img src="../../../static/images/home.png" alt="">当前位置 : <a href="/">首页</a> > HTML+CSS
                    </div>
                </div>

              
                    
                    <div class="list-new-pbl">
                            <ul>
                                <!-- <li v-for="news in newsinfo" class="fl new-item">
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
                                </li> -->
                                <li v-for="news in infoUrl" class="fl new-item">
                                    <div class="cont-pic fl">
                                        <img src="../../../static/images/pic01.jpg" alt="">
                                    </div>
                                    <a :href="news.link" class="cont-info" target="_blank">
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
            </div>
        </div>
    </div>
</template>

<script>

import axios from "axios"

export default {
    data(){
        return{
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
            waterfallItemWidth:100,
            waterfallItemCol:5,
            waterfallItemRight:10,
            waterfallItemBottom:10,
            waterfallDeviationHeight:[],
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
    watch: {
        infoUrl:function(){
            let that = this;
            that.$nextTick(function(){  //监听数据加载完成
                that.waterFall();
            });
        }
    },
    mounted() {
        let _this =this;
        window.onresize = function(){
                _this.waterFall();
             }
    },
    methods: {
        waterFall(){
                //瀑布流效果
                //这里有一个坑（已经修复）：
                //因为是动态加载远程图片，在未加载完全无法获取图片宽高
                //item的top值：第一行：top为0
                //            其他行：获得item的高度
                //                   设置瀑布流中每个item的top值（为每一行中最小的item高度，数组查找）
                //item的left值：第一行：按照每块item的宽度值*块数
                //             其他行：与自身上面一块的left值相等
                let pageWidth = document.getElementsByClassName('container')[0].offsetWidth;
                let columns = 3;
                //得到li的宽度  减10是为了预留出来充当margin-left和margin-right
                let itemWidth = (parseInt(pageWidth/columns)-10); 
                //获取li元素
                let items = document.getElementsByClassName('new-item');

                let arr = [];
                for (let i = 0; i < items.length; i++) {
                    items[i].style.width = itemWidth + 'px';
                    //浮动的元素的高度  加10是为了充当margin-bottom
                    let boxheight = items[i].clientHeight+10;

                    if(i < columns){
                        items[i].style.top = 0;
                        items[i].style.left = (itemWidth+10)*i + 'px';
                        arr.push(boxheight);
                    }
                    else{
                        let minHeight = arr[0];
                        let n = 0;
                        arr.forEach(function(index,item){
                            if (minHeight > item) {
                                minHeight = item;
                                n = index;
                            }
                        });
                        for (let j = 0; j < arr.length; j++) {
                            if (minHeight > arr[j]) {
                                minHeight = arr[j];
                                index = j;
                            }
                        }
                        items[i].style.top = arr[index] + 'px';
                        items[i].style.left = items[index].style.left;

                         // 5- 修改最小列的高度 
                        // 最小列的高度变为 ： 当前自己的高度 + 拼接过来的高度
                        arr[index] = boxheight + arr[index];
                    }
                }

        }
        
    },
}
</script>

<style lang="less" scoped>
    .list{
        margin-bottom: 20px;
    }
    .banner{
        width: 100%;
        img{
            width: 100%;
            height: auto;
        }
    }
    .main-con-pos{
        border-bottom: 1px dashed #bfbfbf;
        line-height: 40px; 
        margin-bottom: 20px;
        .current-col{
            width: 20%;
            font-size: 18px;
            font-weight: 600;
            color: #333;
            padding-left: 15px;
            background: #fff url(../../../static/images/navbg.png) no-repeat right bottom;
        }
        img{
            margin: -3px 2px 0 0;
        }
    }

    .main-list{
            margin-top: -40px;
            position: relative;
            .list-new-pbl{
                position: relative;
            }
            ul{
                height:1200px;
            }
            li {
                box-sizing: border-box;
                position: absolute;
                // width: 29%;
                overflow: hidden;
                padding: 20px 20px;
                margin-bottom: 10px;
                background-color: #fff;
                margin:5px;
                .cont-pic{
                    display: block;
                    margin-right:20px;
                    width: 40%;
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

</style>