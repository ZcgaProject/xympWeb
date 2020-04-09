<template>
    <div class="charginBox">
        <div class="whatThisBoxOne">
            <div class="whatThisBoxOne_img">
                <img style="width: 70%;height: 80%" src="../../assets/logozc.png" alt="">
            </div>
            <div class="whatThisBoxOne_font">
                <span>全国统一收费标准</span>
            </div>
        </div>
        <div class="charginBoxNav">
            <div class="charginBoxNavImg">
                <img style="width: 90%;height: 96%" src="../../assets/sketch/chargingStandard/1-11.jpg" alt="">
            </div>
        </div>
        <div class="whatThisBoxFou">
            <div class="whatThisBoxFou_font">
                <span>信用名片申请</span>
            </div>
            <div class="whatThisBoxFou_font" @click="goHome">
                <span>返回首页</span>
            </div>
        </div>
    </div>
</template>

<script>
    import tools from '@/components/common/js/tools'
    export default {
        name: "chargingStandard",
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
<style src="../../style/sketch/chargingStandard.css" scoped></style>

<style scoped>

</style>
