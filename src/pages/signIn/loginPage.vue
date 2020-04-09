<template>
    <div class="loginBigBox" :style="{ height: bodyHeight + 'px' }">
        <div class="loginNavBox">
            <div class="loginNavBox_head">
                <span style="margin-left: 0.3rem" @click="returngo">< 信用名片首页—登录页</span>
            </div>
            <div class="loginNavBox_logo">
                <div class="logoimg">
                    <img style="width: 70%;height: 72%" src="../../assets/logozc.png" alt="">
                </div>
                <div class="logofont">
                    <span>中创国安用信用终端管理系统</span>
                </div>
            </div>
            <div class="loginNavBox_nav">
                <div class="navHeadBox navHeadBox_top">
                    <span style="color: #edeef5">用户登录</span>
                </div>
                <div class="navBox">
                    <div class="navBox_big">
                        <div class="navBox_oneBox">
                            <div class="oneBox_font">用户名</div>
                            <div class="oneBox_input">
                                <!--@focus="onFocus" @blur="onBlur"-->
                                <input v-model="phoneNum" class="inputBox" onkeyup="value=value.replace(/[^\d]/g,'')" type="text" maxlength="11" placeholder="15210018888"  @input="phoneNumber" />
                            </div>
                        </div>
                        <div class="navBox_twoBox">
                            <div class="twoBox_font">密&#12288;码</div>
                            <div class="twoBox_input">
                                <input v-model="passwordNum" type="password" id="password" class="inputBox" placeholder="admin" maxlength="19" @input="passWordNum"/>
                            </div>
                        </div>
                    </div>
                    <div class="navBox_thrBox">
                        <div class="thrBox_oneBox" @click="login">登录</div>
                        <div class="thrBox_oneBox" @click="clearNum">重置</div>
                    </div>
                </div>
                <div class="navHeadBox navHeadBox_bottom">
                    <span style="color: #edeef5">忘记密码</span></div>
            </div>
        </div>
        <div class="loginFoterBox">
            <div class="loginFoterBox_font">信用值85以上免30万加盟费</div>
            <div class="loginFoterBox_font">申请</div>
            <div class="loginFoterBox_font">“中创国安信用评定中心”</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "loginPage",
        data() {
            return {
                phoneNum:'',
                passwordNum:'',
                bodyHeight:''
            }
        },
        created() {},
        mounted(){
            this.bodyHeight=document.documentElement.clientHeight
        },
        methods:{
            phoneNumber(event){
                console.log('出发event',event.target.value)
                this.phoneNum = event.target.value
            },
            passWordNum(event){
                this.passwordNum = event.target.value
                console.log('密码出发event',this.passwordNum)
            },
            clearNum(){
                this.passwordNum = ''
                this.phoneNum = ''
            },
            login(){
                if(this.passwordNum === "admin" && this.phoneNum === '15210018888'){
                    this.$toast({
                        message: '登录成功',
                        duration: 1000,
                    })
                    localStorage.setItem('login','successLogin')
                    this.$router.push({name: 'LoadLogin'})
                }
                else if(this.passwordNum !== "admin"){
                    this.$toast({
                        message: '密码错误',
                        duration: 1000,
                    })
                }
                else if(this.phoneNum !== '15210018888'){
                    this.$toast({
                        message: '账号错误',
                        duration: 1000,
                    })
                }
                else{
                    this.$toast({
                        message: '登录失败',
                        duration: 1000,
                    })
                }
            },
            returngo(){
                this.$router.push({name: 'LoadLogin'})
            },
            // onFocus () {
            //     const u = navigator.userAgent
            //     if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) { // 安卓手机
            //     } else { // ios
            //         setTimeout(() => {
            //             document.getElementsByTagName('body')[0].style.height = '400px'
            //             this.$refs.ttextarea.scrollIntoView(false)
            //         }, 50)
            //     }
            // },
            //
            // onBlur () {
            //     setTimeout(function () {
            //         document.getElementsByTagName('body')[0].style.height = window.innerHeight + 'px'
            //     }, 50)
            // },
        }
    }
</script>

<style src="../../style/signIn/loginPage.css" scoped>

</style>
