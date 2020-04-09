<template>
    <div class="whatThisBox">
        <div class="whatThisBoxOne">
            <div class="whatThisBoxOne_img">
                <img style="width: 70%;height: 80%" src="../../assets/logozc.png" alt="">
            </div>
            <div class="whatThisBoxOne_font">
                <span>信积分</span>
            </div>
        </div>
        <div class="purposeTwo">
            <div class="purposeTwoBox">
                <div class="purposeTwoBox_title">
                    <span>信积分有什么用途？</span>
                </div>
                <div class="purposeTwoBox_font">
                    <span>用信积分可在“易商城”兑换任意产品或服务；</span>
                </div>
                <div class="purposeTwoBox_imgBox">
                    <div class="imgBox_img">
                        <img style="width: 70%;height: 70%" src="../../assets/sketch/purpose/zc-icon4.png" alt="">
                    </div>
                    <div class="imgBox_font">免费消费</div>
                </div>
            </div>
        </div>
        <div class="purposeThr">
            <div class="purposeThr_font">如何获得信积分？</div>
            <div class="purposeThr_one">
                <div class="purposeThr_oneImg">
                    <img style="width: 100%;height: 100%" src="../../assets/sketch/purpose/1.jpg" alt="">
                </div>
            </div>
            <div class="purposeThr_two">
                <div class="purposeThr_twoImg">
                    <img style="width: 100%;height: 100%" src="../../assets/sketch/purpose/2.jpg" alt="">
                </div>
            </div>
            <div class="purposeThr_two">
                <div class="purposeThr_twoImg">
                    <img style="width: 100%;height: 100%" src="../../assets/sketch/purpose/3.jpg" alt="">
                </div>
            </div>
            <div class="purposeThr_two">
                <div class="purposeThr_twoImg">
                    <img style="width: 100%;height: 100%" src="../../assets/sketch/purpose/4.jpg" alt="">
                </div>
            </div>
            <div></div>
        </div>
        <div class="footerPurpose">
            <div class="footerPurposebox" @click="goHome">
                <div class="footerPurpose_btn">返回首页</div>
            </div>
        </div>
    </div>
</template>

<script>
    import tools from '@/components/common/js/tools'
    export default {
        name: "purpose",
        data() {
            return {}
        },
        created() {
            tools.ScrollTop(0,0)
        },
        mounted(){

        },
        methods:{
            goHome(){
                this.$router.push({name: 'LoadLogin'})
            }
        }
    }
</script>

<style src="../../style/sketch/purpose.css" scoped></style>
<style scoped>

</style>
