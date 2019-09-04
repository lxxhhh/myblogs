<template>
    <div class="content clearfix">
          <div class="banner">
              <img src="../../../static/images/timg.png" alt="">
                      
          </div>
          <div class="main-con" id="content">
              <div class="container">
                <!-- <el-col :sm="8" :xl="7">
                    <leftNav></leftNav>
                </el-col> -->
                <!-- <el-col :sm="16" :xl="17"> -->
                  <div class="main-con-left">
                        <div class="main-con-pos clearfix">
                          <div class="current-col fl hidden-xs-only">
                              {{type}}
                          </div>
                          <div class="current-pos fr">
                              <img src="../../../static/images/home.png" alt="">当前位置 : <a href="/">首页</a> > HTML+CSS
                          </div>
                        </div>
                        <div class="main-con-det">
                          <div class="title">
                              <h2>又是一年开学季，听青年“引路人”习近平这样说</h2>
                              <p><span>作者：sissi</span> <span>发布时间：2019-09-02</span> <span>阅读次数：11</span></p>
                          </div>
                          
                          <div class="detail">  
                                <p>2019年7月16日，习近平总书记来到内蒙古大学。正值暑假，图书馆阅览室还有不少学生在学习。习近平同他们亲切交流，勉励他们志存高远、脚踏实地、发奋图强。</p>
                                <P>十八大以来，习近平总书记多次考察国内高校，与师生亲切交流。在他心中，大学生应当如何成长？高校教育应当如何发展？如今正值开学季，新时代学习工作室与你一起探寻习近平的高校足迹。</P>
                          </div>
                        </div>
                  </div>
                  
                <!-- </el-col> -->
                
              </div>
          </div>    
  </div>
</template>

<script>
import leftNav from '@/components/common/leftNav'

export default {
  data() {
    return {
      type:'HTML+CSS',

    }
  },
  components:{
    leftNav
  }
}
</script>

<style lang="less" scoped>
    .content{
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
     .main-con{
            position: relative;
            top: -40px;
            min-height: 500px;
      }
      .main-con-det{
        .title{
            text-align: center;
            padding: 15px 0;
          h2{
            padding: 0 60px;
            line-height: 30px;
            margin-bottom: 10px;
          }
          p{
            font-size: 15px;
          }
          span{
            margin-left: 10px;
          }
        }
        .detail{
          p{
            font-size: 16px;
            line-height: 28px!important;
            margin-bottom: 15px!important;
            text-indent: 2em;
          }
          img{
            max-width: 800px!important;
          }
        }
      }
</style>