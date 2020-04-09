<template>
    <div class="whatThisBox">
        <div class="whatThisBoxOne">
            <div class="whatThisBoxOne_img">
                <img style="width: 70%;height: 80%" src="../../assets/logozc.png" alt="">
            </div>
            <div class="whatThisBoxOne_font">
                <span>信用名片</span>
            </div>
        </div>
        <div class="whatThisBoxTwo">
            <div class="whatThisBoxTwo_img">
                <img style="width: 100%;height: 100%" src="../../assets/sketch/whatThis/1.jpg" alt="">
            </div>
        </div>
        <div class="whatThisBoxThr"  v-for="(item, index) in whatThis" :key='index'>
            <div class="whatThisBoxThr_img">
                <img style="width: 94%;height: 100%" :src="require(`../../assets/sketch/whatThis/${item.photo}.jpg`)" alt="">

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
        name: "whatThis",
        data() {
            return {
                whatThis:[
                    {
                        photo:2
                    },
                    {
                        photo:3
                    },
                    {
                        photo:4
                    },
                    {
                        photo:5
                    }
                ]
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

<style src="../../style/sketch/whatThis.css" scoped></style>
<style scoped>

</style>
