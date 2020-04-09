<template>
    <div class="needingBox">
        <div class="whatThisBoxOne">
            <div class="whatThisBoxOne_img">
                <img style="width: 70%;height: 80%" src="../../assets/logozc.png" alt="">
            </div>
            <div class="whatThisBoxOne_font">
                <span>信用名片申请注意事项 </span>
            </div>
        </div>
        <div class="needingBoxTitle">
            <div class="needingBoxTitleBox">
                <div class="titleBox_font">
                    “信用名片”申报流程：
                </div>
                <div class="titleBox_imgOne">
                    <img style="width: 100%;height: 95%" src="../../assets/sketch/needingAttention/1.jpg" alt="">
                </div>
                <div class="titleBox_imgTwo">
                    <img style="width: 100%;height: 95%" src="../../assets/sketch/needingAttention/2.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="needingBoxNavone">
            <div class="needingBoxNavBox">
                <div class="needingBoxNavoneFont">“信用名片”填报注意事项：</div>
                <div class="needingBoxNavone_nav">
                    <div class="needing_navOne">
                        <img style="width: 100%;height: 100%" src="../../assets/sketch/needingAttention/3.jpg" alt="">
                    </div>
                    <div class="needing_navTwo">
                        <img style="width: 100%;height: 100%" src="../../assets/sketch/needingAttention/4.jpg" alt="">
                    </div>
                    <div class="needing_navThr">
                        <img style="width: 100%;height: 100%" src="../../assets/sketch/needingAttention/5.jpg" alt="">
                    </div>
                    <div class="needing_navFou">
                        <img style="width: 100%;height: 92%" src="../../assets/sketch/needingAttention/6.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="needingBoxNavtwo">
            <div class="needingBoxNavtwoBox">
                <div class="needingBoxNavtwo_title">“信用名片”认证通过后的服务内容</div>
                <div class="needingBoxNavtwo_imgBox">
                    <img style="width: 100%;height: 97%" src="../../assets/sketch/needingAttention/7.jpg" alt="">
                </div>
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
        name: "needingAttention",
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
<style src="../../style/sketch/needingAttention.css" scoped></style>

<style scoped>

</style>
