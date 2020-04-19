<template>
    <div class="nameCardBigbox">
        <div class="nameCardTitle">
            <div class="nameCardTitle_head">
                <span @click="gohome">< 信用名片首页—电子名片</span>
            </div>
            <div class="nameCardTitle_nav">
                <div class="nameCardTitle_navleft">
                    <div class="navleft_img">
                        <img style="width: 80%;height: 80%" src="../../assets/logozc.png" alt="">
                    </div>
                    <div class="navleft_font">
                        <span>信用名片</span>
                    </div>
                </div>
                <div class="nameCardTitle_navright">
                    <div class="navright_font">
                        <span v-if="loginFail"  style="text-decoration:underline" @click="denglu">登陆/</span><span v-if="loginFail"  style="text-decoration:underline" @click="zhuce">注册</span>
                        <span v-show="loginSucc"  style="text-decoration:underline" @click="gerenZx">个人中心</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="nameCardHeadBox">
            <div class="nameCardHeadbigBox">
                <div class="headbigBox_title">注册用户：0元消费+五大专属权益</div>
                <div class="headbigBox_nav">
                    <div class="headbigBox_navleft">
                        <div class="navleftBox">1、电子名片专栏</div>
                        <div class="navleftBox">2、“信用宣传员证”</div>
                        <div class="navleftBox">3、1000张实物名片</div>
                        <div class="navleftBox">4、景泰蓝工艺胸章</div>
                        <div class="navleftBox">5、千元商品商城任选</div>
                    </div>
                    <div class="headbigBox_navright">
                        <img style="width: 100%;height: 80%;" src="../../assets/nameCard/1.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="nameCardFontBox">
            <div class="fontBox">
                <div class="fontBox_one">
                    <span class="fontBoxOne_one">电子名片专栏</span>
                    <div class="fontBoxOne_two">
                        <span>实例链接</span>
                    </div>
                </div>
                <div class="fontBox_two">在“信用名片”数据库开设个人电子信用名片展示页面， 用户可通过专有信用名片链接或二维码进行查看.</div>
            </div>
        </div>
        <div class="nameCardNavBox">
            <div class="navBox">
                <div class="navBoxOne">个电子名片专属页面示例</div>
                <div class="navBoxTwo">
                    <div class="navBoxTwo_head">欢迎光临中创国安信用名片数据库！</div>
                    <div class="navBoxTwo_nav">
                        <div class="navBoxTwo_navOne">
                            <img style="width: 85%;height: 88%;" src="../../assets/logozc.png" alt="">
                        </div>
                        <div class="navBoxTwo_navTwo">信用名片数据库</div>
                        <div class="navBoxTwo_navThr">已认证</div>
                    </div>
                    <div class="navBoxTwo_footer">
                        <div class="footerBox_box">
                            <div class="footerBox_boximg">
                                <img style="width: 100%;height: 100%" src="../../assets/nameCard/2.jpg" alt="">
                            </div>
                        </div>
                        <div class="footerBox_font">
                            <div class="nameFont">蒋松林</div>
                            <div class="nameImg">
                                信
                            </div>
                            <div class="nameYear">1年</div>
                        </div>
                    </div>
                </div>
                <div class="navBoxThr">
                    <div class="navBoxThrBox">
                        <div class="navBoxThrBoxFont">
                            <span class="spanOne">信用ID:</span>
                            <span class="spanTwo">&#12288;zcgaxm100125801</span>
                        </div>
                        <div class="navBoxThrBoxFont">
                            <span class="spanOne">职&#12288;务:</span>
                            <span class="spanTwo">&#12288;商业策略专家</span>
                        </div>
                    </div>
                    <div class="navBoxThrBoxImg">
                        <img style="width: 80%;height: 80%" src="../../assets/nameCard/3.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="nameCardXinxi">
            <div class="nameCardXinxiBox">
                <div class="xinxiBox_one">
                    <div class="xinxiBox_oneimg">
                        <div class="xinxiBox_asdimgBox">
                            <img style="width: 70%;height: 50%;" src="../../assets/nameCard/huo.png" alt="">
                        </div>
                        <div style="color: #000000" class="xinxiBox_oneimgBox">热度:</div>
                        <div style="color: #fb0000" class="xinxiBox_oneimgBox">580</div>
                        <!--<img style="width: 100%;height: 100%" src="../../assets/nameCard/huo.png" alt="">-->
                    </div>
                    <div class="xinxiBox_onebtn">建立联系</div>
                    <div class="xinxiBox_onebtn" @click="fenxiang">点击分享</div>
                </div>
                <div class="xinxiBox_two">
                    <div class="xinxiBox_twoBox">
                        <div class="twoBoxOne">
                            <img style="width: 50%;height: 56%" src="../../assets/logozc.png" alt="">
                        </div>
                        <div class="twoBoxTwo">工作经历</div>
                        <div class="twoBoxThr">Work experience</div>
                    </div>
                </div>
                <div class="xinxiBox_thr">
                    <div class="xinxiBox_thrBox">
                        <span style="font-size: 0.30rem;color: #000000;font-weight: bold">蒋松林</span>
                        <span style="font-size: 0.30rem;color: #000000;">&#12288;&#12288;&#12288;英文名: John</span>
                    </div>
                    <div class="xinxiBox_thrBox">
                        <span style="font-size: 0.30rem;color: #000000;">男，汉族1980年10月出生，内蒙古赤峰人</span>
                    </div>
                    <div class="xinxiBox_thrBox">
                        <span style="font-size: 0.30rem;color: #000000;font-weight: bold">被授予“商业策略专家”称号</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="nameCardZixun">
            <div class="nameCardZixunBox">
                <div class="zixunBox" v-for="(item, index) in fontZixun" :key='index'>
                    <div class="zixunBoxdian"></div>
                    <div class="zixunBoxfont">&#160;{{item.text}}</div>
                </div>
            </div>
        </div>
        <div v-if="isshow" class="nameCardjiazai" @click="loadingDj">
            <span v-if="iisfont">加载查看更多</span>
            <span v-if="iisfonttwo">
                <van-loading size="24px">加载中...</van-loading>
            </span>
        </div>
        <div v-if="isshowtwo" class="nameCardJzBox">
            <div class="nameCardJzBoxOne" id="anchor-0">
                <div class="zixunboxOne">
                    <div class="zixunboxOne_title">”信用宣传员证“</div>
                    <div class="zixunboxOne_font">独立编号，证件加盖中创国安钢印，防伪制作 有效期为一年，每年年审后领取新证.</div>
                </div>
            </div>
            <div class="nameCardJzBoxOneImg">
                <img style="width: 100%;height: 100%" src="../../assets/nameCard/5.jpg" alt="">
            </div>
            <div class="nameCardJzBoxTwo" id="anchor-1">
                <div class="zixunboxTwo">
                    <div class="zixunboxTwo_title">”实物名片“</div>
                    <div class="zixunboxTwo_font">印刷1000张双铜版纸质印刷的带有信用认证标识 的彩色名片；次年年审后，如不需要再次印刷名片， 可在易商城换领其它</div>
                </div>
            </div>
            <div class="nameCardJzBoxTwoImg">
                <div class="jzBoxTwoImg">
                    <img style="width: 90%;height: 100%" src="../../assets/nameCard/6.jpg" alt="">
                </div>
            </div>
            <div class="nameCardJzBoxThr" id="anchor-2">
                <div class="zixunboxThr">
                    <div class="zixunboxThr_title">景泰蓝工艺胸章</div>
                    <div class="zixunboxThr_font">
                        <span>（带仿伪、独立编号）景泰蓝</span><span> 渡金工艺特制而成，不褪色，不变色。</span></div>
                </div>
            </div>
            <div class="nameCardJzBoxFou">
                <div class="jzBoxFouOne">
                    <div class="jzBoxFouOneImg">
                        <img style="width: 70%;height: 80%" src="../../assets/nameCard/7.png" alt="">
                    </div>
                    <div class="jzBoxFouOneImg">
                        <img style="width: 70%;height: 80%" src="../../assets/nameCard/8.png" alt="">
                    </div>
                </div>
                <div class="jzBoxFouTwo">
                    <img style="width: 70%;height: 80%" src="../../assets/nameCard/9.png" alt="">
                </div>
            </div>
            <div class="nameCardJzBoxTwo" id="anchor-3">
                <div class="zixunboxTwo">
                    <div class="zixunboxTwo_title">易信礼包</div>
                    <div class="zixunboxTwo_font">在易商城任选近千元商品或服务，领取方法：搜索微 信公众号”中创国安“，进入易商城内兑换，或在信用 名片首页点击进入易商</div>
                </div>
            </div>
            <div class="nameCardJzBoxFiv">
                <div class="jzBoxFivImg">
                    <img style="width: 100%;height: 100%;" src="../../assets/nameCard/10.png" alt="">
                </div>
            </div>
            <div class="nameCardJzBoxSex">
                <div class="jzBoxSex">信用名片申请</div>
            </div>
            <div class="jzBoxSexfont">
                <div class="jzBoxSexfont_one">
                    <span @click="gohome">返回首页</span>
                    <span @click="guanwang">中创国安官网</span>
                    <span>易商城</span>
                </div>
            </div>
            <!--<div class="nameCardFooterBox">-->
                <!--<div style="background-color: #ffffff" class="nameCardFooterbottom"> 版权所有:<div class="footerbottom_img">-->
                    <!--<img style="width: 70%;height: 70%;" src="../../assets/logozc.png" alt="">-->
                <!--</div>-->
                    <!--<span>中创国安   投诉热线：400-838-5198 　</span>-->
                <!--</div>-->
            <!--</div>-->
        </div>


        <div class="nameCardfooterImg">
            <img style="width: 100%;height: 100%" src="../../assets/nameCard/zhang.png" alt="">
        </div>
        <div class="nameCardFooter">
            <div class="nameCardFooterTop">
                <div class="footerTop_left">纠错举报</div>
                <div class="footerTop_left">信用名片申请</div>
            </div>
            <div class="nameCardFooterbottom"> 版权所有:<div class="footerbottom_img">
                    <img style="width: 70%;height: 70%;" src="../../assets/logozc.png" alt="">
                </div>
                <span>中创国安   投诉热线：400-838-5198 　</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "nameCard",
        data() {
            return {
                loginFail:true,
                loginSucc:false,
                isshow: true,
                isshowtwo:true,
                iisfont:true,
                iisfonttwo:false,
                fontZixun:[
                    {
                        text:'《为健康寻源》栏目组—主任',
                        id:1
                    },
                    {
                        text:'国普健康产业集团有限公司—总顾问',
                        id:2
                    },
                    {
                        text:'中创国安信用管理股份有限公司—总顾问',
                        id:3
                    },
                    {
                        text:'中国民族卫生协会医院创新管',
                        id:4
                    },
                    {
                        text:'北京爱普癌症患者关爱基金会-执行秘书长',
                        id:5
                    },
                    {
                        text:'世界品牌暨创新项目融资高峰论坛（GIFF峰会）- 总策划兼秘书长',
                        id:6
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
            // console.log(loginsucc)
        },
        mounted(){
            let userCard = localStorage.getItem('userXyong')
            console.log('userCard___',userCard)
            if(userCard === "anchor-0"){
                document.getElementById("anchor-0").scrollIntoView();
            }else if(userCard === "anchor-1"){
                document.getElementById("anchor-1").scrollIntoView();
            }else if(userCard === "anchor-2"){
                document.getElementById("anchor-2").scrollIntoView();
            }else if(userCard === "anchor-3"){
                document.getElementById("anchor-3").scrollIntoView();
            }
        },
        methods:{
            loadingDj(){
                this.$router.push({name: 'CarddisplayPages'})
                // this.iisfont = false
                // this.iisfonttwo = true
                // setTimeout(() =>{
                //     this.iisfonttwo = false
                //     this.isshow = false
                //     this.isshowtwo = true
                // },1000)
            },
            gohome(){
                this.$router.push({name: 'LoadLogin'})
            },
            gerenZx(){
                console.log('点击了个人中心')
                this.$router.push({name: 'PeoplePages'})
            },
            denglu(){
                console.log('点击了登录')
                this.$router.push({name: 'LoginPage'})
            },
            zhuce(){
                console.log('点击了注册')
                this.$router.push({name: 'RegisterPage'})
            },
            fenxiang(){
                console.log('点击分享')
            },
            guanwang(){
                location.href = 'http://www.cxzgxy.com/#/PrincipalSheet'
            }
        }
    }
</script>
<style src="../../style/nameCard/nameCardPages.css" scoped></style>

<style scoped>

</style>
