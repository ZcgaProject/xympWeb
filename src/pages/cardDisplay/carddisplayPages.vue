<template>
    <div class="cardDisplayBox">
        <div class="posterBigbox_one">
            <div class="nameCardTitle_head">
                <span @click="gohome">< 信用名片首页—名片展示</span>
            </div>
        </div>
        <div class="nameCardNavBox">
            <div class="navBox">
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
                    <!--<van-cell  class="xinxiBox_onebtn" is-link @click="fenxiang"></van-cell>-->
                    <div class="xinxiBox_onebtn" @click="fenxiang">点击分享</div>
                    <van-popup v-model="show">
                        <div class="popupFxiang canvas">
                            <!--<img :style="styleObject" v-if="showImg" :src="imgBase" alt="">-->
                            <!--<div style="width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;flex-direction: column" id="downloadCardDiv" v-if="hidenav">-->
                            <div style="width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;flex-direction: column" id="downloadCardDiv">
                            <div class="popupTitle">
                                    <div class="titleImg">
                                        <img style="width: 73%;height: 77%" src="../../assets/logozc.png" alt="">
                                    </div>
                                    <div class="popupFont">信用名片</div>
                                    <div class="popupFonttwo">已认证</div>
                                </div>
                                <div  class="popupHead">这是我的名片请惠存</div>
                                <div  class="popupNav">
                                    <div class="popupNav_top">
                                        <div class="left_top">
                                            <img style="width: 100%;height: 100%;border-radius: 50%" src="../../assets/nameCard/2.jpg" alt="">
                                        </div>
                                        <div class="right_top">
                                            <span style="font-size: 0.32rem;color: #ffffff;font-weight: bold;margin-bottom: 0.2rem">{{userCk.name}}</span>
                                            <span style="font-size: 0.24rem;color: #ffffff">职位：{{userCk.zhiwei}}</span>
                                            <span style="font-size: 0.24rem;color: #ffffff">关联企业：{{userCk.email}}</span>
                                        </div>
                                    </div>
                                    <div class="popupNav_bot">
                                        <div class="botNavBox">电话：{{userCk.phone}}</div>
                                        <div class="botNavBox">邮箱：{{userCk.email}}</div>
                                    </div>
                                </div>
                                <div  class="popupFooter">
                                    <div class="popupFooter_btn">查看名片</div>
                                </div>
                            </div>
                        </div>
                    </van-popup>
                </div>
                <div class="xinxiBox_two">
                    <div class="xinxiBox_twoBox">
                        <div class="twoBoxOne">
                            <img style="width: 39%;height: 56%" src="../../assets/logozc.png" alt="">
                        </div>
                        <div class="twoBoxTwo">工作经历</div>
                        <div class="twoBoxThr">Work experience</div>
                    </div>
                </div>
                <div class="xinxiBox_thr">
                    <div class="xinxiBox_thrBox">
                        <span style="font-size: 0.30rem;color: #000000;font-weight: bold">{{userMp.name}}</span>
                        <span style="font-size: 0.30rem;color: #000000;">&#12288;&#12288;&#12288;英文名: {{userMp.enname}}</span>
                    </div>
                    <div class="xinxiBox_thrBox">
                        <span style="font-size: 0.30rem;color: #000000;">{{userMp.userinfo}}</span>
                    </div>
                    <div class="xinxiBox_thrBox">
                        <span style="font-size: 0.30rem;color: #000000;font-weight: bold">{{userMp.chenhao}}</span>
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
        <div v-if="showDji" class="nameCardjiazai" >
            <span v-if="iisfont" @click="loadingDj">加载查看更多</span>
            <span v-if="iisfonttwo">
                <van-loading size="24px">加载中...</van-loading>
            </span>
            <span v-if="isshow">
                没有更多
            </span>
        </div>
        <div class="nameCardDianji">
            <div class="nameCardDianji_one">
                <div class="dianji_oneBox">
                    <div class="oneBox_ceng">曾任</div>
                    <div class="nameCardZixunBoxtwo">
                        <div class="zixunBox">
                            <div class="zixunBoxdian"></div>
                            <div class="zixunBoxfont">&#160;中国国际经济合作学会</div>
                        </div>
                        <div style="height: 0.4rem;" class="zixunBox">
                            <div style="display: flex;align-items: center;justify-content: center;" class="zixunBoxfont">&#160;互联网金融研究会—常务副主任兼主任研究员</div>
                        </div>
                        <div class="zixunBox" v-for="(item, index) in fontZixuntwo" :key='index'>
                            <div class="zixunBoxdian"></div>
                            <div class="zixunBoxfont">&#160;{{item.text}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="nameCardDianji_two">
                <div class="dianji_twoBox">
                    <div class="twoNavBox">
                        <div class="twoNavBox_one" v-for="(item, index) in qiye" :key='index'>
                            <div class="twoNavBox_oneleft">
                                <div class="oneleftBox">
                                    <div class="oneleftBoxFont">{{item.textTitle}}</div>
                                </div>
                            </div>
                            <div class="twoNavBox_oneright">{{item.textNav}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="nameCardDianji_thr">
                <div class="dianji_thr">
                    <div class="xinxiBox_two">
                        <div class="xinxiBox_twoBox">
                            <div class="twoBoxOne">
                                <img style="width: 39%;height: 56%" src="../../assets/logozc.png" alt="">
                            </div>
                            <div class="twoBoxTwo">教育背景</div>
                            <div class="twoBoxThr">Education</div>
                        </div>
                    </div>
                    <div style="width: 80%;font-size: 0.26rem;font-weight: 600" class="zixunBox">
                        <div class="zixunBoxdian"></div>
                        <div class="zixunBoxfont">&#160; 2017年 3月—2019年3月</div>
                    </div>
                    <div class="dianji_thrBox">
                        <div>
                            <span style="font-weight: bold">院校名称：</span><span>中国国际经济合作学会互联网金融研究会</span>
                        </div>
                        <div>
                            <span style="font-weight: bold">所学专业：</span><span>互联网金融研究</span>
                        </div>
                        <div>
                            <span style="font-weight: bold">所获证书：</span><span>主任研究员</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="nameCardDianji_fou">
                <div class="xinxiBox_two">
                    <div class="xinxiBox_twoBox">
                        <div class="twoBoxOne">
                            <img style="width: 39%;height: 56%" src="../../assets/logozc.png" alt="">
                        </div>
                        <div class="twoBoxTwo">人物风采</div>
                        <div class="twoBoxThr">Character style</div>
                    </div>
                </div>
                <div class="dianji_fou">
                    <div class="dianji_fouBox">
                        <div class="dianji_fouBoxtop">
                            <img style="width: 100%;height: 100%" src="../../assets/carddis/zp.jpg" alt="">
                        </div>
                        <div class="dianji_fouBoxbot">国普集团联合农健园开展“惠农”项目战略合作</div>
                    </div>
                    <div class="dianji_fouBox">
                        <div class="dianji_fouBoxtop">
                            <img style="width: 100%;height: 100%" src="../../assets/carddis/zp2.jpg" alt="">
                        </div>
                        <div class="dianji_fouBoxbot">欧洲华语广播签约天津花之冠</div>
                    </div>
                </div>
            </div>
            <div class="nameCardDianji_fiv">
                <div class="dianji_fivBox">
                    <div class="xinxiBox_two">
                        <div class="xinxiBox_twoBox">
                            <div class="twoBoxOne">
                                <img style="width: 39%;height: 56%" src="../../assets/logozc.png" alt="">
                            </div>
                            <div class="twoBoxTwo">个人简介</div>
                            <div class="twoBoxThr">Personal lntroduction</div>
                        </div>
                    </div>
                    <div class="dianji_fivBoxNav">
                        <span class="fivBoxNav_font">曾是一个职业经理人，凭着系统化管理和执行落地经验在印度尼西亚等国家建立了矿业、房地产、印尼国旅、中华之家等跨领域集团化品牌产业，随着中国大众创业、万众创新的大潮来临，再也按耐不住回国的冲动。</span>
                        <span class="fivBoxNav_font">2014怀着一颗赤子之心回到中国北京，当时正值房地产行业寒冬，大量商业地产过剩，看到这个现象，蒋松林便开始潜心研究如何改变现状，走访了多个地区、也拜访了多名相关学者，凭着在国外创业的一些经验加上从众多学者求学来的精华并从实际角度出发，应生了自已的一套综合体模式，蒋松林便开始走访地方和企业，通过自已的经验帮助地方和企业献计献策，帮助部分企业打开了财富之门，因此也被商务部中国国经济合作学会互联网金融研究会授予“商业策略专家”称号。</span>
                        <span class="fivBoxNav_font">2018年国家出台了多个惠民政策，蒋松林陷入了深思，从国外时就一直想为国人做点事，服务小众还是服务大众？为老百姓做点实事是自已多年以来的梦想，国家政策也正逢其时，蒋松林决心从此做好惠民事业，而且一辈子坚持干下去，自此策划并由国普健康产业集团有限公司发起了“国普惠民”小商业大公益系列活动。</span>
                        <span style="font-weight: bold;width: 100%;text-indent: 0rem;" class="fivBoxNav_font">“国普惠民”是什么？</span>
                        <span class="fivBoxNav_font">《为健康寻源》寻源、筛选、宣传优秀的惠民、健康产品、技术、设施、文化，从而为百姓提供放心的服务导向。</span>
                        <span class="fivBoxNav_font">国普惠民分为生活惠民和文化惠民、健康惠民3大版块，物质惠民由栏目筛选的放心服务组成的惠民服务线上商城和全国惠民线下网点组成。</span>
                        <span class="fivBoxNav_font">文化惠民是国普惠民工程的纯公益版块，文化惠民是党和政府近几年亲民政策、爱民政策的体现，也是“执政为民”的理念在文化上的具体反映。让精神食粮丰富美好生活。在以人民为中心的发展思想为指导下，以党建为引领，文化为魂，为老百姓做小事、做实事的宗旨，联合相关专家、学者共同组成“国普惠民政策研究课题组”。推出了以孝道和家风为题的“国普好家风系列活动”目标是让每个家庭从孝道文化认知、到为经济惠民、文化精神惠民提供系统性的支持和解决方案。构建联合惠民体系。引领人民对美好生活的向往路径。为健康寻源筛选，国普惠民为百姓服务，为人民对美好生活的向往而增姿增彩，为百姓提供最实惠、最贴心的服务。</span>
                        <span class="fivBoxNav_font">2018年7月28日，以“全民健康，全民参与”为主题的《为健康寻源》栏目新闻发布会在北京光华长安大厦举行。</span>
                        <span class="fivBoxNav_font">2019年1月14日，中铁妙天集团签约国普惠民，双方就开展文化惠民强强联手。</span>
                        <span class="fivBoxNav_font">新华网2019年1月21日电，为健康寻源国普惠民政策研究课题组召开研讨会，同时设立了“国普惠民”政策研究课题组，组成了惠民政策研究的专家智库。</span>
                        <span style="font-weight: bold;width: 100%;text-indent: 0rem;" class="fivBoxNav_font">“国普惠民”政策研究课题组发起成员：</span>
                        <span style="text-align: left;line-height: 0.3rem;width: 100%" class="fivBoxNav_font"> 国家发改委国合中心双创办主任 —邓智华博士</span>
                        <span style="text-align: left;line-height: 0.3rem;width: 100%" class="fivBoxNav_font"> 中国老龄事业发展基金会安享工程专项基金管委会秘书长—邓少军</span>
                        <span style="text-align: left;line-height: 0.3rem;width: 100%" class="fivBoxNav_font"> 中国民族卫生协会医院创新专业管理委员会会长—李易博</span>
                        <span style="text-align: left;line-height: 0.3rem;width: 100%" class="fivBoxNav_font"> 中国消费者保护权益基金会打假工作委员会品牌部副主任—李庆忠</span>
                        <span style="text-align: left;line-height: 0.3rem;width: 100%" class="fivBoxNav_font"> 中华老干部志工委副秘书长—凤兆俊</span>
                        <span style="text-align: left;line-height: 0.3rem;width: 100%" class="fivBoxNav_font"> 中国梦组委会副秘书长—王海渊</span>
                        <span style="text-align: left;line-height: 0.3rem;width: 100%" class="fivBoxNav_font"> 商业策略专家—蒋松林</span>
                        <span class="fivBoxNav_font">展望过去，国普惠民将在全国覆盖线下服务网点，丰富线上惠民服务，国普惠民是我们共同的生活品质保证工程，“全民参与、全民推荐、全民服务、全民监督，系统化严选，为百姓生活提供更放心、更贴心的服务！ “国普好家风，奉敬贤德人。”！国普积极与公益组织对接、合作，让家家有家训，户户好家风”。</span>
                        <span style="font-weight: bold;text-indent: 0rem;" class="fivBoxNav_font">期待我们一起为惠民事业添砖加瓦，共献爱心！</span>
                    </div>
                </div>
            </div>
            <div class="nameCardDianji_sixBig">
                <div class="nameCardDianji_six">
                    <div class="xinxiBox_two">
                        <div class="xinxiBox_twoBox">
                            <div class="twoBoxOne">
                                <img style="width: 39%;height: 56%" src="../../assets/logozc.png" alt="">
                            </div>
                            <div class="twoBoxTwo">相关资讯</div>
                            <div class="twoBoxThr">Education</div>
                        </div>
                    </div>
                    <div class="dianji_sixBox">
                        <div class="intergrityBox_more">
                            <div class="rityBox_moreBox">
                                <div class="moreBigBox" :style="{borderBottomWidth:item.borderWidth,borderBottomStyle:item.borderStyle,borderBottomColor:item.borderColor}" v-for="(item, index) in ziXun" :key='index' @click="ziXunDj(item.location)">
                                    <div class="moreBox">
                                        <div class="moreBoxTop">
                                            <span>{{item.textTime}}</span>
                                            <span>{{item.texthour}}</span>
                                            <span>{{item.textlook}}</span>
                                        </div>
                                        <div class="moreBoxBot">{{item.textnav}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="display: flex;align-items: flex-start;justify-content: center;background-color: #ffffff" class="focusBox_footertwo">
            <div style="height: 0.8rem" class="focusBox_footerBox"  >
                <span v-if="iisfont" @click="jiazaiMore">加载查看更多</span>
                <span v-if="iisfonttwo">
                    <van-loading size="24px">加载中...</van-loading>
                </span>
                <span v-if="iisfontthr">没有更多</span>
            </div>
        </div>
        <div class="nameCardfooterImg">
            <img style="width: 100%;height: 94%" src="../../assets/nameCard/zhang.png" alt="">
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
    import tools from '@/components/common/js/tools'
    import configuration from '@/components/common/js/configuration'
    import html2canvas from 'html2canvas'
    export default {
        name: "carddisplayPages",
        components: {
            html2canvas
        },
        data() {
            return {
                iisfont:true,
                iisfonttwo:false,
                iisfontthr:false,
                ziXun:[
                    {
                        borderWidth:'2px',
                        borderStyle:'solid',
                        borderColor:'#f1f1f1',
                        textTime:'2018/2/5',
                        texthour:'13:36:26',
                        textlook:'来源：新华网',
                        textnav:'“百年中国制造”大型电视记录片 进行全民歌手选拔',
                        location:'http://www.xinhuanet.com/video/2018-02/05/c_129805764.htm'
                    },
                    {
                        borderWidth:'2px',
                        borderStyle:'solid',
                        borderColor:'#f1f1f1',
                        textTime:'2017/03/29',
                        texthour:'10:15:18',
                        textlook:'来源：人民网',
                        textnav:'互联网金融研究会聘任蒋松林为主任研究员',
                        location:'http://www.xinhuanet.com/itown/2017-03/29/c_136166846.htm'
                    },
                    {
                        borderWidth:'2px',
                        borderStyle:'solid',
                        borderColor:'#f1f1f1',
                        textTime:'2015/12/17',
                        texthour:'3:34:00',
                        textlook:'来源：全国手工委官网',
                        textnav:'中国手工委联合主办“世界品牌暨创新项目投融资高峰论坛”',
                        location:'http://www.qgsgw.com/index.php?m=content&c=index&a=show&catid=11&id=178'
                    },
                    {
                        borderWidth:'2px',
                        borderStyle:'solid',
                        borderColor:'#f1f1f1',
                        textTime:'2015/11/11',
                        texthour:'17:33:00',
                        textlook:'来源：新华网',
                        textnav:'外交部原副部长于引会见GIFF峰会组委会一行',
                        location:'http://www.sohu.com/a/41112599_114812'
                    },
                    {
                        borderWidth:'2px',
                        borderStyle:'solid',
                        borderColor:'#f1f1f1',
                        textTime:'2015/12/5',
                        texthour:'17:42:36',
                        textlook:'来源：中国网',
                        textnav:'资深外交家于引：中国企业走出去要认清自身资源',
                        location:'http://zjnews.china.com.cn/yuanchuan/2015-12-05/35037.html'
                    },
                    {
                        borderWidth:'2px',
                        borderStyle:'solid',
                        borderColor:'#f1f1f1',
                        textTime:'2015/10/12',
                        texthour:'11:35',
                        textlook:'来源：新华网',
                        textnav:'GIFF峰会组委会正式落户杭州',
                        location:'http://gx.people.com.cn/n/2015/1012/c348117-26754513.html'
                    },
                    {
                        borderWidth:'2px',
                        borderStyle:'solid',
                        borderColor:'#f1f1f1',
                        textTime:'2015/12/10',
                        texthour:'13:05:23',
                        textlook:'来源：新华网',
                        textnav:'商业模式创新与战略转型发展—大趋势引领未来',
                        location:'http://xiaofei.hangzhou.com.cn/xfzx/content/2015-12/10/content_5913070.htm'
                    },
                    {
                        borderWidth:'2px',
                        borderStyle:'solid',
                        borderColor:'#f1f1f1',
                        textTime:'2015/8/25',
                        texthour:'17:24:00',
                        textlook:'来源：新华网',
                        textnav:'蒋松林先生参与柴俊【爱拯】全球新闻发布会',
                        location:'http://www.sohu.com/a/29208180_221828'
                    }
                ],
                showDji:false,
                userMp:{
                    name:'蒋松林',
                    enname:'John',
                    userinfo:'男，汉族1980年10月出生，内蒙古赤峰人',
                    chenhao:'被授予“商业策略专家”称号'
                },
                userCk:{
                    name:'蒋松林',
                    zhiwei:'商业策略专家',
                    qiye:'中创国安',
                    email:'ｇｚｄｉａｎｙｉ＠１２６．ｃｏｍ',
                    phone:'４００－８３８－５１９８'
                },
                show: false,
                isshow: false,
                iisfont:true,
                iisfonttwo:false,
                // 生成图片
                styleObject: {
                    // transform:'scale(0.5,0.5)'
                    width:'100%',
                    height:'7rem'
                },
                styleObjectone:{
                    width:'',
                    height:''
                },
                // showImg:false,
                // imgBase:'',         //放base64图片的变量
                // hidenav:true,
                // 生成图片  ---end
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
                ],
                fontZixuntwo:[
                    {
                        text:'印度尼西亚Alfa United Group中彤 国际集团-创始人—总裁',
                        id:1
                    },
                    {
                        text:'浙江江浦集团（Indonesia）海外投资集团-创始人—总经理',
                        id:2
                    },
                    {
                        text:'全国工商联宝玉石协会金田黄石研究会—副会长',
                        id:3
                    },
                    {
                        text:'2016湖南卫视“超级女生”北京直通车—副主任',
                        id:4
                    },
                    {
                        text:'2015米兰世博会国际馆运筹委员会—规划部部长',
                        id:5
                    }
                ],
                qiye:[
                    {
                        textTitle:'企业宗旨',
                        textNav:'尽最大努力让我们的合作伙伴、客户以及员工获得最大收益！'
                    },
                    {
                        textTitle:'核心价值观',
                        textNav:'自主创新 专业执着 诚信忘我 超越时代 团结协作 产业报国'
                    },
                    {
                        textTitle:'使命',
                        textNav:'通过系统化管理下的创新模式一站式解决社会需求\n'
                    },
                    {
                        textTitle:'愿景',
                        textNav:'实现线上线下互联互通的惠民物联平台'
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
            jiazaiMore(){
                this.iisfont = false
                this.iisfonttwo = true
                setTimeout(() =>{
                    this.iisfonttwo = false
                    this.iisfontthr = true
                    configuration.jiazai().then(res => {
                        this.ziXun = this.ziXun.concat(res.data.ziXunTwo)
                        // this.iisfonttwo=false
                    }) .catch(error => {
                        console.log(error)
                    })
                },1000)
            },
            ziXunDj(index){
                location.href = index
            },
            gohome(){
                this.$router.push({name: 'LoadLogin'})
            },
            loadingDj(){
                this.iisfont = false
                this.iisfonttwo = true
                setTimeout(() =>{
                    this.iisfonttwo = false
                    this.isshow = true
                },1000)
            },
            fenxiang(){
                this.show = true;
                console.log('点击分享')
                // if(this.show === true){
                //     setTimeout(()=>{
                //         this.savecanvas()
                //     },1000)
                // }
            },
            // 名片保存
            // savecanvas () {
            //     let that = this
            //     setTimeout(function () {
            //         // 获取class canvas
            //         let canvas = document.querySelector('.canvas')
            //         console.log(width,height)
            //         // 创建canvas标签
            //         var canvasBox = document.createElement("canvas");
            //         const shareContent = document.getElementById('downloadCardDiv')
            //         // 获取body的可是区域
            //         var width = canvas.offsetWidth
            //         var height = canvas.offsetHeight
            //         // const scrollTop = document.documentElement.scrollTop || document.body.scrollTop // 获取滚动轴滚动的长度
            //         const rect = shareContent.getBoundingClientRect() // 获取元素相对于视口的
            //         var context = canvasBox.getContext('2d');
            //         // 截取生成图片的放大比例
            //         var scale = that.getPixelRatio(context);
            //         console.log(scale)
            //         // 设置canvas画布大小
            //         // canvas的width和height是他style中width和height的2倍
            //         canvasBox.width = width * scale;
            //         canvasBox.height = height * scale;
            //         console.log('canvasBox.width',canvasBox.width,'canvasBox.height',canvasBox.height)
            //         // canvas中style中width和height
            //         canvasBox.style.width = width + "px";
            //         canvasBox.style.height = height + "px";
            //         console.log('canvasBox.style.width',canvasBox.style.width,'canvasBox.style.height',canvasBox.style.height)
            //         // 将创建的画布缩小获取到的图片放大比例(将图片大小复原从而提高清晰度)
            //         canvasBox.getContext("2d").scale(scale, scale);
            //         // 绑定动态:style将最外层盒子大小跟画布大小相等（切记也要为img盒子设置动态style从而始终控制放图片的盒子大小）
            //         that.styleObjectone.width = canvasBox.style.width
            //         that.styleObjectone.height = canvasBox.style.height
            //         // 获取元素相对于视窗的偏移量
            //         var opts = {
            //             x: rect.left, // 绘制的dom元素相对于视口的位置
            //             y: rect.top,
            //             scale: scale,
            //             useCORS: true,
            //             width:canvasBox.width/scale,
            //             height:canvasBox.height/scale,
            //             scrollY: 0,
            //             scrollX: 0
            //         };
            //         html2canvas(canvas, opts).then(function (canvas) {
            //             let type = 'png'
            //             // 【重要】关闭抗锯齿
            //             // var context = canvas.getContext('2d');
            //             context.mozImageSmoothingEnabled = false;
            //             context.webkitImageSmoothingEnabled = false;
            //             context.msImageSmoothingEnabled = false;
            //             context.imageSmoothingEnabled = false;
            //             that.imgBase = canvas.toDataURL(type)
            //             that.hidenav=false
            //             that.showImg=true
            //             // 照片格式处理
            //             let _fixType = function (type) {
            //                 type = type.toLowerCase().replace(/jpg/i, 'jpeg')
            //                 let r = type.match(/png|jpeg|bmp|gif/)[0]
            //                 return 'image/' + r
            //             }
            //             that.imgBase = that.imgBase.replace(_fixType(type), 'image/octet-stream')
            //             let filename = 'UUSound' + '.' + type
            //             that.saveFile(that.imgBase, filename)
            //         })
            //     },300)
            //
            // },
            // saveFile (data, filename) {
            //     let savelink = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
            //     savelink.href = data
            //     savelink.download = filename
            //     let event = document.createEvent('MouseEvents')
            //     // console.log(event)
            //     event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
            //     savelink.dispatchEvent(event)
            // },
            // // 获取比例函数
            // getPixelRatio(context) {
            //     var backingStore = context.backingStorePixelRatio ||
            //         context.webkitBackingStorePixelRatio ||
            //         context.mozBackingStorePixelRatio ||
            //         context.msBackingStorePixelRatio ||
            //         context.oBackingStorePixelRatio ||
            //         context.backingStorePixelRatio || 1;
            //     return (window.devicePixelRatio || 1) / backingStore;
            // }
        }
    }
</script>
<style src="../../style/cardDisplay/cardDisplay.css" scoped></style>
<style scoped>

</style>
