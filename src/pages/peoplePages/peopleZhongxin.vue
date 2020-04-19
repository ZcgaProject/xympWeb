<template>
    <div class="creditBigBox">
        <div class="posterBigbox_one">
            <div class="nameCardTitle_head">
                <span @click="gohome">< 信用名片首页—个人中心</span>
            </div>
        </div>
        <div class="posterBigbox_two">
            <div class="bigbox_twoBox">
                <div class="twoBox_left">
                    <div style="width: 94%;display: flex;align-items: center;justify-content: flex-start" class="leftbox">
                        <span style="font-size: 0.28rem;font-weight: bold;color: #ffffff">蒋松林&#160;</span>
                        <div style="width: 27px;height: 27px;border: 1px solid #ffffff;border-radius: 5px;display: flex;align-items: center;justify-content: center">
                            <div style="width: 24px;height: 24px;border-radius: 24px;background-color: #cc0033;font-size: 20px;color: #f2d512;display: flex;align-items: center;justify-content: center;font-weight: bold">
                                信
                            </div>
                        </div>
                        <span style="font-size: 0.28rem;font-weight: bold;color: #ffffff">&#160;1年</span>
                    </div>
                    <div class="leftbox">
                        <span style="font-size: 0.24rem;font-weight: bold;color: #ffffff">信用ID：</span>
                        <span style="font-size: 0.26rem;font-weight: bold;color: #ffffff">zcgaxm100125801</span>
                    </div>
                    <div style="width: 94%;display: flex;align-items: center;justify-content: flex-start" class="leftbox">
                        <span style="font-size: 0.24rem;font-weight: bold;color: #ffffff">信用值：</span>
                        <span style="font-size: 0.26rem;font-weight: bold;color: #ffff00">90</span>
                    </div>
                </div>
                <div class="twoBox_nav">
                    <img style="width: 86%;height: 94%;" src="../../assets/poster/1.jpg" alt="">
                </div>
                <div class="twoBox_right">
                    <!--<span class="rightfont">信积分</span>-->
                    <!--<span class="rightfont">1000</span>-->
                    <!--<span style="width: 50%;height: 25%;background-color: #ff0033;border: 1px solid #ffffff;border-radius: 10px;" class="rightfont">兑换</span>-->
                    <span class="rightfont">邀请好友赚积分</span>
                </div>
            </div>
            <div class="bottom_fontbox">
                <div class="bottomfontbox_left">
                    <span style="font-size: 0.42rem;font-weight: bold">2000.00</span>
                    <span style="font-size: 0.36rem;font-weight: 500">元&#160;(现金余额)</span>
                </div>
                <div class="bottomfontbox_nav">提现</div>
                <div class="bottomfontbox_nav">充值</div>
            </div>
            <div class="bottom_fontbox">
                <div class="bottomfontbox_left">
                    <span style="font-size: 0.42rem;font-weight: bold">1000&#160;</span>
                    <img style="width: 27px;height: 27px" src="../../assets/carddis/xinyong.png" alt="">
                    <span style="font-size: 0.36rem;font-weight: 500">&#160;(信积分)</span>
                </div>
                <div class="bottomfontbox_nav">购物</div>
                <div class="bottomfontbox_nav">赚积分</div>
            </div>
        </div>
        <div class="creditHeadBox">
            <span>我的名片</span>
            <span>我的课程</span>
            <span>卖家中心</span>
            <span>媒体中心</span>
        </div>
        <div class="ceaditTitleBox">
            <div class="titleBox_left">
                <div class="leftImg">
                    <img style="width: 70%;height: 70%" src="../../assets/peoplePages/3.png" alt="">
                </div>
                <div class="leftFont">我的订单</div>
            </div>
            <div class="titleBox_right">查看全部 ></div>
        </div>
        <div class="ceaditNavBox">
            <div class="ceaditnavBigBox">
                <div class="ceaditnavTop">
                    <img style="width: 42%;height: 62%" src="../../assets/peoplePages/4.png" alt="">
                </div>
                <div class="ceaditnavBot">待付款</div>
            </div>
            <div class="ceaditnavBigBox">
                <div class="ceaditnavTop">
                    <img style="width: 51%;height: 62%" src="../../assets/peoplePages/5.png" alt="">
                </div>
                <div class="ceaditnavBot">待发货</div>
            </div>
            <div class="ceaditnavBigBox">
                <div class="ceaditnavTop">
                    <img style="width: 51%;height: 62%" src="../../assets/peoplePages/6.png" alt="">
                </div>
                <div class="ceaditnavBot">待收货</div>
            </div>
            <div class="ceaditnavBigBox">
                <div class="ceaditnavTop">
                    <img style="width: 39%;height: 59%" src="../../assets/peoplePages/7.png" alt="">
                </div>
                <div class="ceaditnavBot">退换货</div>
            </div>
            <div class="ceaditnavBigBox">
                <div class="ceaditnavTop">
                    <img style="width: 42%;height: 62%" src="../../assets/peoplePages/8.png" alt="">
                </div>
                <div class="ceaditnavBot">消息</div>
            </div>
        </div>
        <div class="creditfootBox">
            <div class="footFontBox">
                <div class="footFont_left">
                    <div class="fontImg">
                        <img style="width: 75%;height: 77%;" src="../../assets/peoplePages/9.png" alt="">
                    </div>
                    <div class="fontBoxLeft">我的积分</div>
                </div>
                <div class="footFont_right">积分记录 ></div>
            </div>
            <div class="footFontBox">
                <div class="footFont_left">
                    <div class="fontImg">
                        <img style="width: 75%;height: 77%;" src="../../assets/peoplePages/10.png" alt="">
                    </div>
                    <div class="fontBoxLeft">消费历史</div>
                </div>
                <div class="footFont_right">交易明细 ></div>
            </div>
            <div class="footFontBox">
                <div class="footFont_left">
                    <div class="fontImg">
                        <img style="width: 75%;height: 77%;" src="../../assets/peoplePages/11.png" alt="">
                    </div>
                    <div class="fontBoxLeft">我的购物车   </div>
                </div>
                <div class="footFont_right"></div>
            </div>
        </div>
        <div class="creditLineBox">
            <div class="creditLine">
                <div class="creditLineImg">
                    <img style="width: 73%;height: 72%;" src="../../assets/peoplePages/12.png" alt="">
                </div>
                <div class="fontBoxLeft">我的关注</div>
            </div>
        </div>
        <div class="creditLineBox">
            <div class="creditLine">
                <div class="creditLineImg">
                    <img style="width: 73%;height: 72%;" src="../../assets/peoplePages/13.png" alt="">
                </div>
                <div class="fontBoxLeft">我的足迹</div>
            </div>
        </div>
        <div class="creditLineBox">
            <div class="creditLine">
                <div class="creditLineImg">
                    <img style="width: 73%;height: 72%;" src="../../assets/peoplePages/14.png" alt="">
                </div>
                <div class="fontBoxLeft">收货地址管理</div>
            </div>
        </div>
        <div class="creditfooterBox">
            <span>易信首页</span>
            <span @click="guanWang">中创国安官网</span>
            <span>易信学院</span>
        </div>
        <div class="footerTabertwo"></div>
        <div class="footerTaber"  v-show="hideshow" >
            <van-tabbar style="height:1rem;" v-model="active" :fixed="false" :placeholder="true">
                <van-tabbar-item icon="home-o" v-for="(item,index) in tabbars"
                                 :key="index"
                                 @click="tab(index,item.name)">
                    <span :class="currIndex == index ? active:''">{{item.title}}</span>
                    <template slot="icon" slot-scope="props">
                        <img :src="props.active ? item.active : item.normal">
                    </template>
                </van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>

<script>
    export default {
        name: "peopleZhongxin",
        data() {
            return {
                docmHeight: document.documentElement.clientHeight,  //默认屏幕高度
                showHeight: document.documentElement.clientHeight,   //实时屏幕高度
                hideshow:true,  //显示或者隐藏footer
                currIndex: 0,
                active: 4,
                tabbars: [
                    {
                        name: "PeoplePages",
                        title: "易商城",
                        normal: require("../../assets/cityHome/yinsc.png"),
                        active: require("../../assets/cityHome/yinsc.png")
                    },
                    {
                        name: "PeoplePages",
                        title: "信商城",
                        normal: require("../../assets/cityHome/xinsc.png"),
                        active: require("../../assets/cityHome/xinsc.png")
                    },
                    {
                        name: "PeoplePages",
                        title: "分类",
                        normal: require("../../assets/cityHome/fenlei.png"),
                        active: require("../../assets/cityHome/fenleiClick.png")
                    },
                    {
                        name: "PeoplePages",
                        title: "购物车",
                        normal: require("../../assets/cityHome/shop.png"),
                        active: require("../../assets/cityHome/shopClick.png")
                    },

                    {
                        name: "PeoplePages",
                        title: "我的",
                        normal: require("../../assets/cityHome/my.png"),
                        active: require("../../assets/cityHome/myClick.png")
                    }
                ]
            }
        },
        created() {},
        mounted(){

        },
        methods:{
            gohome(){
                this.$router.push({name: 'LoadLogin'})
            },
            guanWang(){
                location.href = 'http://www.cxzgxy.com/#/PrincipalSheet'
            },
            tab(index, val) {
                this.currIndex = index;
                // this.$router.push(val);
            }
        }
    }
</script>
<style src="../../style/creditCenter/creditPage.css" scoped></style>
<style>
    .van-search--show-action{
        width: 100% !important;
        height: 100% !important;
    }
    .van-search{
        background-color: #ffffff !important;
    }
    .van-dropdown-menu{
        height: 10px !important;
    }
    .van-search__action{
        font-size: 12px !important;
    }
    .van-tabbar{
        z-index: -1 !important;
    }
    .van-tabbar-item--active{
        color: #ff341a !important;
    }
    .van-tabbar-item__icon img{
        height: 22px !important;
    }
    .van-tabbar-item{
        font-size: 13px !important;
    }
    .van-tabbar-item__icon{
        margin-bottom: 8px !important;
    }
</style>
