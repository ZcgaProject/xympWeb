<template>
    <div class="registerBigBox" :style="{ height: bodyHeight + 'px' }">
        <div class="headBigBox">
            <span style="margin-left: 0.3rem" @click="returngo"> < 信用名片首页—注册页</span>
        </div>
        <div class="topLoguBox">
            <div class="topLoguBox_img">
                <img style="width: 70%;height: 52%" src="../../assets/logozc.png" alt="">
            </div>
            <div class="topLoguBox_font">
                <span>信用名片申请页</span>
            </div>
        </div>
        <div class="topFontBox">注册用户：0元消费+五大专属权益</div>
        <div class="navBigBOX">
            <div class="navBigBOX_top">
                <div class="navBigBOX_topImg">
                    <img style="width: 50%;height: 50%;" src="../../assets/register/xie.png" alt="">
                </div>
                <div class="navBigBOX_topFont">用户注册</div>
            </div>
            <div class="navBigBOX_head">
                <div class="navBigBOX_headBox">
                    <input v-model="phoneNum" class="inputBox" onkeyup="value=value.replace(/[^\d]/g,'')" type="text" maxlength="11" placeholder="手机号" @input="phoneNumber" />
                </div>
                <div class="navBigBOX_headBox">
                    <input v-model="passwode" class="inputBox" onkeyup="value=value.replace(/[^\d]/g,'')" type="password" maxlength="6" placeholder="请输入6位数字密码" @input="passwordNum" />
                </div>
                <div class="navBigBOX_headBoxleter">
                    <div class="headBoxleter_box">
                        <input v-model="passwode" class="inputBoxletter" type="password" maxlength="6" placeholder="验证码" @input="passwordNum" />
                    </div>
                    <div v-show="show" class="headBoxleter_font" @click="getCode">获取验证码</div>
                    <div v-show="!show" class="headBoxleter_font">{{ count }}s重新发送</div>
                </div>
            </div>
            <div class="navBigBOX_footer">
                <van-checkbox v-model="checked" shape="square" checked-color="#ffffff">同意信用名片使用条款及相关法规</van-checkbox>
            </div>
            <div class="navBigBOX_btn">
                <div class="navBigBOX_btnBox" @click="submission">提交</div>
            </div>
        </div>
        <div class="footerBoxBox">
            <div class="imgBox">
                <img style="width: 60%;height: 50%" src="../../assets/register/zc-icon1.png" alt="">
            </div>
            <div class="imgBox">
                <img style="width: 60%;height: 50%" src="../../assets/register/zc-icon2.png" alt="">
            </div>
            <div class="imgBox">
                <img style="width: 60%;height: 50%" src="../../assets/register/zc-icon3.png" alt="">
            </div>
            <div class="imgBox">
                <img style="width: 60%;height: 50%" src="../../assets/register/zc-icon4.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "registerPage",
        data() {
            return {
                checked: true,
                phoneNum:'',
                passwode:'',
                show:true,
                count: '',
                bodyHeight:''
            }
        },
        created() {},
        mounted(){
            this.bodyHeight=document.documentElement.clientHeight
        },
        methods:{
            returngo(){
                this.$router.push({name: 'LoadLogin'})
            },
            phoneNumber(event){
                console.log('出发event',event.target.value)
                this.phoneNum = event.target.value
            },
            passwordNum(event){
                console.log('出发event',event.target.value)
                this.passwode = event.target.value
            },
            getCode(){
                const TIME_COUNT = 60;
                if (!this.timer) {
                    this.count = TIME_COUNT;
                    this.show = false;
                    this.timer = setInterval(() => {
                        if (this.count > 0 && this.count <= TIME_COUNT) {
                            this.count--;
                        } else {
                            this.show = true;
                            clearInterval(this.timer);
                            this.timer = null;
                        }
                    }, 1000);
                }
            },
            submission(){
                this.$toast({
                    message: '点击了提交',
                    duration: 1000,
                })
            }
        }
    }
</script>

<style src="../../style/register/registerPage.css" scoped></style>
<style>
    .van-checkbox__icon--checked .van-icon{
        color: #33cdb8 !important;
        border-color: #c7c7c7 !important;
    }
    .van-checkbox__label{
        color: #c7c7c7 !important;
    }
</style>


