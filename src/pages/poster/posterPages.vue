<template>
    <div class="posterBigbox">
        <div class="posterBigbox_one">
            <div class="nameCardTitle_head">
                <span @click="gohome">< 信用名片首页—电子名片</span>
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
                    <span class="rightfont">信积分</span>
                    <span class="rightfont">1000</span>
                    <span style="width: 50%;height: 25%;background-color: #ff0033;border: 1px solid #ffffff;border-radius: 10px;" class="rightfont">兑换</span>
                </div>
            </div>
        </div>
        <div class="loginFoterBox">
            <div class="loginFoterBox_font">信用值85以上免30万加盟费</div>
            <div class="loginFoterBox_font">申请</div>
            <div class="loginFoterBox_font">“中创国安信用评定中心”</div>
        </div>
        <div class="posterBigbox_thr">
            <div class="posterBigbox_thrBox">
                <div class="thrBoxImg">
                    <img style="width: 76%;height: 87%" src="../../assets/logozc.png" alt="">
                </div>
                <div class="thrBoxFont">中创国安信用评定中心</div>
                <div class="thrBoxsmallFont">中心特权</div>
                <div class="thrBoxLine"></div>
                <div class="thrBoxImgBox">
                    <img style="width: 93%;height: 80%" src="../../assets/poster/2.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="fourBigBox">
            <div class="fourBigBoxImg">
                <img style="width: 93%;height: 100%" src="../../assets/poster/3.jpg" alt="">
            </div>
        </div>
        <div class="fourBigBox">
            <div class="fourBigBoxImg">
                <img style="width: 93%;height: 100%" src="../../assets/poster/4.jpg" alt="">
            </div>
        </div>
        <div class="fourBigBox">
            <div class="fourBigBoxImg">
                <img style="width: 93%;height: 100%" src="../../assets/poster/5.jpg" alt="">
            </div>
        </div>
        <div class="fourBigBox">
            <div class="fourBigBoxImg">
                <img style="width: 93%;height: 100%" src="../../assets/poster/6.jpg" alt="">
            </div>
        </div>
        <div class="sexBigBox">
            <div class="sexBigBoxNav">
                <div class="sexBigBoxNavTitle">评定中心注册条件</div>
                <div class="sexBigBoxNavLine"></div>
                <div class="sexBigBoxNavImg">
                    <img style="width: 96%;height: 95%" src="../../assets/poster/7.jpg" alt="">
                </div>
                <div class="sexBigBoxNavBtn">
                    <div class="sexBtnBox">申请成为评定中心</div>
                </div>
            </div>
        </div>
        <div class="jzBoxSexfont">
            <div class="jzBoxSexfont_one">
                <span @click="guanwang">中创国安官网</span>
                <span>易商城</span>
                <span @click="goChina">诚信中国</span>
            </div>
        </div>
        <div class="sevenFooter">
            <div class="sevenFooterImg">
                <img style="width: 70%;height: 70%" src="../../assets/logozc.png" alt="">
            </div>
            <div class="sevenFooterFont">&#160;中创国安版权所有</div>
        </div>
    </div>
</template>

<script>
    import tools from '@/components/common/js/tools'
    export default {
        name: "poster",
        data() {
            return {

            }
        },
        created() {
            tools.ScrollTop(0,0)
        },
        mounted(){

        },
        methods:{
            gohome(){
                this.$router.push({name: 'LoadLogin'})
            },
            goChina(){
                // this.$router.push({name: 'IntegrityPage'})
                console.log('点击了诚信中国')
            },
            guanwang(){
                location.href = 'http://www.cxzgxy.com/#/PrincipalSheet'
            }
        }
    }
</script>
<style src="../../style/poster/posterPages.css" scoped></style>
<style scoped>

</style>
