<template>
    <div class="creditValue">
        <div class="whatThisBoxOne">
            <div class="whatThisBoxOne_img">
                <img style="width: 70%;height: 80%" src="../../assets/logozc.png" alt="">
            </div>
            <div class="whatThisBoxOne_font">
                <span>信用值</span>
            </div>
        </div>
        <div class="creditValueTwo">
            <div class="creditValueTwo_one">
                <div class="creditValueTwo_title">信用值的评分标准：</div>
                <div class="creditValueTwo_font"><span>通过个人或店铺的交易信誉、产品品质、信用名片注册信息真实 度、个人征信以及分</span></div>
                <div class="creditValueTwo_footer">
                    <div class="footercredImg">
                        <img style="width: 74%;height: 74%" src="../../assets/sketch/creditValue/icon-6.png" alt="">
                    </div>
                    <div class="footercredFont">
                        信用靠点滴积累
                    </div>
                </div>
            </div>
        </div>
        <div class="creditValueThr">
            <div class="creditValueThr_title">如何增加信用值？</div>
            <div class="creditValueThr_img">
                <img style="width: 100%;height: 90%" src="../../assets/sketch/creditValue/1.jpg" alt="">
            </div>
            <div class="creditValueThr_img">
                <img style="width: 100%;height: 90%" src="../../assets/sketch/creditValue/2.jpg" alt="">
            </div>
            <div class="creditValueThr_img">
                <img style="width: 100%;height: 90%" src="../../assets/sketch/creditValue/3.jpg" alt="">
            </div>
        </div>
        <div class="creditValueFou">
            <div class="creditValueFoubox">
                <div class="creditValueFou_title">信用值有什么用途？</div>
                <div class="creditValueFou_img">
                    <img style="width: 100%;height: 100%" src="../../assets/sketch/creditValue/4.jpg" alt="">
                </div>
            </div>
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
        name: "creditValue",
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
            goHome(){
                this.$router.push({name: 'LoadLogin'})
            }
        }
    }
</script>
<style src="../../style/sketch/creditValue.css" scoped></style>

<style scoped>

</style>
