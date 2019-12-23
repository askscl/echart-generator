<style>
.content{ width: 1200px; margin: 0 auto;}
/*编辑区*/
.edit{ width: 322px;}
/*库表选择*/
.choice .title h1{ font-size: 16px;}
.choice .title .btn-back{ font-size: 16px; color: #1890FF;}
.choice .cont{ margin-top: 10px;}
.cont { font-size:12px;}
.cont .item-label{ line-height:22px; }
.cont .item-label .name{}

.cont .map{ height:22px;}
.cont .map .now{ width:50px; height:20px; line-height: 20px; border:1px solid #cfdadd; padding:0 20px 0 10px; position:relative; cursor:pointer;}
.cont .map .now.open{ border-bottom:none;}
.cont .map .now .map-now{ line-height:20px; display:inline-block;}
.cont .map .now .arrow{ width:20px; height:20px; position:absolute; top:0; right:0;}
.cont .map .now .arrow:before{content:""; position:relative; display:inline-block; width:6px; height:6px; top:-3px; right:-6px; border-color:#58666e;border-style:solid;border-width:1px 1px 0 0;transform:rotate(135deg);transform-origin:50% 50%;}

.cont .map .list{ display:none; width:80px; position:absolute; left:-1px; top:19px; border:1px solid #cfdadd; border-top:none;}
.cont .map .list li{ line-height:20px;}
.cont .map .list li a{ padding-left:10px; display:block;}
.cont .map .list li a.active,.cont .map .list li a:hover{ background-color:#cfdadd;}
.cont .map .open .list{display:block;}

/*参数设置*/
.set .title h1{ font-size: 16px;}
/*预览区*/
.show{ width: 853px; }
</style>
<template>
    <div class="content clearfix">

        <!--编辑区-->
        <div class="edit fl">

            <!--库表选择-->
            <div class="choice">

                <div class="title clearfix">
                    <h1 class="fl">库表选择</h1>
                    <router-link to="/" class="btn-back fr">返回</router-link>
                </div>

                <div class="cont clearfix">
                    <div class="item-label fl">
                        <label class="name">表类型：</label>
                    </div>
                    <div class="map fl">
                        <div class="now" :class="activeClass == index ? 'open':''" @click="open" >
                            <span class="map-now">折线图</span>
                            <span class="arrow"></span>
                            <ul class="list">
                                <li>
                                    <router-link to="/edit-line" class="active">折线图</router-link>
                                </li>
                                <li>
                                    <router-link to="/edit-bar">柱状图</router-link>
                                </li>
                                <li>
                                    <router-link to="/edit-pie">饼状图</router-link>
                                </li>
                                <li>
                                    <router-link to="/edit-radar">雷达图</router-link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <!--参数设置-->
            <div class="set">
                <div class="title">
                    <h1>参数设置</h1>
                </div>
                <div class="title2">
                    <h2>基础</h2>
                </div>
                <div class="set-cont">

                </div>
            </div>
        </div>

        <!--展示区-->
        <div class="show fr"></div>

    </div>
</template>

<script>
    export default {
        name: "EditLine",
        data(){
            return {
                activeClass:1,
                index:0
            }
        },
        methods:{
            open:function () {
                if(this.index==0){
                    this.index=1;
                }else{
                    this.index=0;
                }

            }
        }
    }
</script>


