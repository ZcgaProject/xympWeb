<template>
    <div class="bigBox">
        <div class="boxHead">
            <div class="boxHead_childOne">欢迎光临中创国安信用名片!</div>
            <div class="boxHead_childTwo">
                <div class="childTwo_boxOne">
                    <div class="boxOne_one">
                        <img style="width: 70%;height: 56%" src="../../assets/logozc.png" alt="">
                    </div>
                    <div class="boxOne_two">
                        <span style="padding-top: 0.1rem;letter-spacing:0.03rem;">信用名片</span>
                    </div>
                </div>
                <div class="childTwo_boxTwo">
                    <div class="boxTwo_One">
                        <div class="loginBox">
                            <span v-if="loginFail" class="fontBox" @click="denglu">登录/</span><span class="fontBox" v-if="loginFail" @click="zhuce">注册</span>
                            <span v-show="loginSucc" class="fontBox" @click="gerenZx">个人中心</span>
                        </div>
                        <div class="lineBox"></div>
                        <div class="shouyeBox">
                            <span class="fontBox" @click="shouye">设为首页</span>
                        </div>
                        <div class="lineBox"></div>
                        <div class="shoucangBox">
                            <span class="fontBox" @click="shoucang">加入收藏</span>
                        </div>
                    </div>
                    <div class="boxTwo_Two"></div>
                </div>
            </div>
        </div>
        <div class="boxTop">
            <span style="color: #f30909" class="boxTop_font">真实的身份证明</span>
            <span style="color: #f7ebeb" class="boxTop_font">让社交变得有效</span>
        </div>
        <div class="boxPhoto">
            <div class="boxPhotoBox">
                <div class="boxPhotoBox_left">
                    <img style="width: 60%;height: 68%;" src="../../assets/register/sy-icon1.png" alt="">
                </div>
                <div class="boxPhotoBox_right">
                    <span style="font-size: 0.32rem;margin-right: 1.2rem;color: #000000">2020年11月底前请完成年审</span>
                    <span style="position: absolute;right:0.3rem;bottom:0.1rem;font-size: 0.28rem;color: #333333" @click="djMoere">更多></span>
                </div>
            </div>
        </div>
        <div class="boxTopmore">
            <span>用户专属五大权益</span>
        </div>
        <div class="boxNavFont" v-for="(item, index) in anliImg" :key='index' @click="casePhoto(item.photo)">
            <div class="boxNavFontBox">
                <!--<img src="../../assets/register/zc-icon${item}.png" alt="">-->
                <img style="width: 100%;height: 96%" :src="require(`../../assets/shouye/sy-pr${item.photo}.jpg`)" alt="">
            </div>
        </div>
        <div class="fontMoerBox">
            <div class="fontMoerBox_one" v-for="(item,index) in jianjie" :key="index" @click="introduction(item.id)">
                <div class="fontMoerBox_oneBox">
                    <span>{{item.text}}</span>
                </div>
            </div>
        </div>
        <div class="shoppingMall">
            <div class="shoppingMallBox" @click="shopping">易商城</div>
        </div>
        <div class="jumpZcBox">
            <div class="jumpZc">
                <span @click="guanWang('gwang')">中创国安官网</span>
                <span @click="guanWang('pding')">企业信用评定</span>
                <span @click="guanWang('xyuan')">易信学院</span>
            </div>
        </div>
        <div class="footerBigbox">
            <div class="footerBox">
                <div class="footerBox_one">
                    <div class="footerBox_oneimg">
                        <img style="width: 70%;height: 70%;" src="../../assets/logozc.png" alt="">
                    </div>
                    <div class="footerBox_onefont">不实信息纠错举报</div>
                </div>
                <div class="footerBox_two">
                    <span>版权所有：国安信用</span>
                    <span>投诉热线：400-838-5198</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "landLogin",
        data() {
            return {
                loginFail:true,
                loginSucc:false,
                anliImg:[
                    {
                        photo:1
                    },
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
                ],
                jianjie:[
                    {
                        text:'信用名片是什么？',
                        id:1
                    },
                    {
                        text:'信积分有什么用途？如何获得？',
                        id:2
                    },
                    {
                        text:'什么是信用值？',
                        id:3
                    },
                    {
                        text:'信用名片申请注意事项',
                        id:4
                    },
                    {
                        text:'全国统一收费标准',
                        id:5
                    }
                ]
            }
        },
        created() {
            let loginsucc = localStorage.getItem('login');
            if(loginsucc === 'successLogin'){
                this.loginFail=false
                this.loginSucc=true
            }else{
                this.loginFail=true
                this.loginSucc=false
            }
            console.log(loginsucc)
        },
        methods:{
            djMoere(){
                console.log('点击了更多')
            },
            casePhoto(index){
                if(index === 1){
                    this.$router.push({name: 'CarddisplayPages'})
                }else if(index === 2){
                    localStorage.setItem('userXyong','anchor-0');
                    this.$router.push({name: 'NameCardPages'})
                }
                else if(index === 3){
                    localStorage.setItem('userXyong','anchor-1');
                    this.$router.push({name: 'NameCardPages'})
                }
                else if(index === 4){
                    localStorage.setItem('userXyong','anchor-2');
                    this.$router.push({name: 'NameCardPages'})
                }
                else if(index === 5){
                    localStorage.setItem('userXyong','anchor-3');
                    this.$router.push({name: 'NameCardPages'})
                }
                console.log('点击了第',index)
            },
            introduction(id){
                if(id === 1){
                    this.$router.push({name: 'WhatThis'})
                }else if(id === 2){
                    this.$router.push({name: 'Purpose'})
                }else if(id === 3){
                    this.$router.push({name: 'CreditValue'})
                }else if(id === 4){
                    this.$router.push({name: 'NeedingAttention'})
                }else if(id === 5){
                    this.$router.push({name: 'ChargingStandard'})
                }
                console.log('点击了第',id)
            },
            shopping(){
                this.$router.push({name: 'PosterPages'})
                console.log('点击了易商城')
            },
            guanWang(param){
                console.log('点击了++',param)
                if(param === 'gwang'){
                    console.log('点击了')
                    location.href = 'http://www.cxzgxy.com/#/PrincipalSheet'
                }
            },
            denglu(){
                console.log('点击了登录')
                this.$router.push({name: 'LoginPage'})
            },
            zhuce(){
                console.log('点击了注册')
                this.$router.push({name: 'RegisterPage'})
            },
            shouye(){
                console.log('点击了首页')
            },
            shoucang(){
                console.log('点击了收藏')
            },
            gerenZx(){
                console.log('点击了个人中心')
                this.$router.push({name: 'PeoplePages'})
            }
        }
    }
</script>

<style src="../../style/login/landLogin.css" scoped>

</style>
