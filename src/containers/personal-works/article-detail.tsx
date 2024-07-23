import { useScroll } from "ahooks";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { tw } from "twind";
import { css } from "twind/css";

const ArticleDetail = () => {
  const context =
    '<p>周一（22日），今日央行开展582亿元逆回购操作，实现净回笼708亿元，央行早间打出组合拳，OMO和1年期、5年期LPR皆下行10BP，同时央行决定适当减免MLF操作的质押品。午后，各期限SLF利率也跟随调降10BP。债市情绪整体乐观，国债期货全线收涨，现券市场，主要利率债收益率几乎全线下行。<br></p><p>利率债市场成交方面，qeubee数据显示，全天来看TKN整体占优。机构行为来看，qeubee数据<a data-cke-saved-href="https://qb3.idbhost.com:28888/cnexshop/" href="https://qb3.idbhost.com:28888/cnexshop/">显示</a>，证券为主要买入力量；银行在10点左右转变为卖出力量，并逐渐成为主要卖出力量，基金则是在14:50左右逐渐转变成买入力量。<br><img data-cke-saved-src="40947006" src="40947006"></p><p>蒙商银行金融市场部交易员张跃龙对<a data-cke-saved-href="https://qb3.idbhost.com:28888/live/watch?id=e31b6cba2908d2736c558495e8ce0eda" href="https://qb3.idbhost.com:28888/live/watch?id=e31b6cba2908d2736c558495e8ce0eda">qeubee live</a>表示，早盘央行发布公开市场7天逆回购操作利率，由此前的1.8%调整为1.7%，<strong><span style="color:#f08b1b;">此次降息展现了货币政策呵护经济回升的决心</span>。</strong><br></p><p>受此影响，现券收益率快速下行，短端表现好于长端。张跃龙表示，<span style="color:#f08b1b;"><strong>7天逆回购操作利率下行，并不代表着长期债券利率下行空间的打开</strong></span>。央行此次下调7天逆回购操作利率，意在加大逆周期调节力度，熨平短期经济波动，而中长期债券收益率反映的更多是长期经济走势。</p><p>展望后市，张跃龙<a data-cke-saved-href="https://qb3.idbhost.com:28888/live/watch?id=e31b6cba2908d2736c558495e8ce0eda" href="https://qb3.idbhost.com:28888/live/watch?id=e31b6cba2908d2736c558495e8ce0eda">表示</a>，<span style="color:#f08b1b;"><strong>债市长期交易逻辑仍是宽货币政策和资产欠配，债牛行情未尽</strong></span>，但是进入三季度后，随着财政的持续发力，债券供给有望叠加。叠加政治局会议可能有提升经济增速的政策出台，届时也要关注<strong>上述利空因素对债市的阶段性扰动</strong>。</p><p>而对于午后央行调降SLF。江海证券投资顾问朱陈东对<a data-cke-saved-href="https://qb3.idbhost.com:28888/express/details/1815271585003737088?timestamp=1721640485383&amp;plate=TJ" href="https://qb3.idbhost.com:28888/express/details/1815271585003737088?timestamp=1721640485383&amp;plate=TJ">qeubee live</a>表示，<span style="color:#f08b1b;"><strong>这是为了完善利率走廊的</strong></span>，SLF是利率走廊的上限，这个调整也是跟随OMO降息一起调整的，属于符合预期的事件。目前资金面相对宽松，用到常备借贷便利的机会较少，所以<span style="color:#f08b1b;"><strong>预计市场影响不大</strong></span>。<br></p><p><span style="color:#081818;"><strong><span style="background-color:#ffcc74;">【消息面】</span></strong></span></p><p><a data-cke-saved-href="https://qb3.idbhost.com:28888/information-center/newsDetail/1815175641851629568?timestamp=1721620540307&amp;plate=TJ" href="https://qb3.idbhost.com:28888/information-center/newsDetail/1815175641851629568?timestamp=1721620540307&amp;plate=TJ">央行：即日起，公开市场7天期逆回购操作利率由此前的1.80%调整为1.70%</a></p><p><a data-cke-saved-href="https://qb3.idbhost.com:28888/information-center/newsDetail/1815183193536598016?timestamp=1721620562337&amp;plate=TJ" href="https://qb3.idbhost.com:28888/information-center/newsDetail/1815183193536598016?timestamp=1721620562337&amp;plate=TJ">央行：决定适当减免中期借贷便利（MLF）操作的质押品</a></p><p><a data-cke-saved-href="https://qb3.idbhost.com:28888/information-center/newsDetail/1815191367828246528?timestamp=1721620632630&amp;plate=TJ" href="https://qb3.idbhost.com:28888/information-center/newsDetail/1815191367828246528?timestamp=1721620632630&amp;plate=TJ">“降息”！中国7月1年期、5年期LPR下调10BP</a></p><p><a data-cke-saved-href="https://qb3.idbhost.com:28888/information-center/newsDetail/1815266393390714880?timestamp=1721631122811&amp;plate=TJ" href="https://qb3.idbhost.com:28888/information-center/newsDetail/1815266393390714880?timestamp=1721631122811&amp;plate=TJ">央行：下调常备借贷便利利率10个基点</a><br></p><p><span style="color:#081818;"><strong><span style="background-color:#ffcc74;">【公开市场操作】</span></strong></span></p><p><span style="color:#081818;"><strong><span style="background-color:#ffcc74;"></span></strong></span>中国央行今日进行582亿元7天期逆回购操作，<span style="color:#f08b1b;"><strong>中标利率为1.70%，此前为1.80%</strong>。</span>据qeubee统计，今日有1290亿元7天期逆回购到期，实现净回笼708亿元。</p><p>另外，中国央行将<span style="color:#f08b1b;"><strong>一年期和五年期贷款市场报价利率（LPR）分别下调10个基点至3.35%和3.85%。</strong></span></p><p><span style="color:#f08b1b;"><strong></strong></span><img data-cke-saved-src="40942073" src="40942073">​​​​​​<span style="color: rgb(8, 24, 24);"><strong><span style="background-color:#ffcc74;">【资金面】</span></strong></span></p><p>Shibor全线下跌，3月shibor报1.8940%，下跌0.1个基点。</p><p>截止17:00，银行间市场方面，DR001利率下行20.12bp至1.6634%，DR007利率下行14.98bp至1.7184%；交易所回购市场方面，GC001利率下行3.00bp至1.84%，GC007利率下行3.5bp至1.85%。</p><p><img data-cke-saved-src="40946897" src="40946897"><span style="color:#081818;"><strong><span style="background-color:#ffcc74;">【利率债】</span></strong></span></p><p>银行间主要利率债收益率全线下行，短端表现优于长端。截至17:06，1年期国债活跃券收益率下行3.75bp报1.47%，10年期国债活跃券收益率下行1.95bp报2.241%​​​​​​​​​​​​​，超长期国债活跃券收益率下行1.3bp报2.45%，10年期国开债活跃券收益率下行2.05bp报2.307%。​​​​​​​​​​​​​​​​​​​​​</p><p><img data-cke-saved-src="40946898" src="40946898">​​​​​​​<span style="color:#081818;"><strong><span style="background-color:#ffcc74;">​​​​​​​​​​​​​​​​​​​​​​​​​​​​【国债期货】</span></strong></span></p><p><span style="color:#081818;"><strong><span style="background-color:#ffcc74;"></span></strong></span>国债期货收盘，30年期主力合约涨0.33%，10年期主力合约涨0.27%，5年期主力合约涨0.21%，2年期主力合约涨0.08%。<img data-cke-saved-src="40945438" src="40945438">​​​​​<span style="color:#081818;"><strong><span style="background-color:#ffcc74;">​​​​​​​​​​​​​​​​​​​​​​​​​​​​【一级发行】​​​​​​​</span></strong></span><br></p><p>qeubee数据显示，5年期“24农发05(增发13)”，加权利率​​​​​​​1.9208%，全场倍数4.57，边际倍数1.22​​​​​​​。​​​​​​​<img data-cke-saved-src="40945675" src="40945675" style="height: 100%; width: 100%">​​​​​​​<span style="color:#081818;"><span style="background-color:#ffcc74;">​​​​​​​</span><strong><span style="background-color:#ffcc74;">​​​​​​​​​​​​​​​​​​​​​​​​​​​​【中证转债】</span></strong></span></p><p>中证转债指数收跌0.54%。</p><p><span style="color:#081818;"><strong><span style="background-color:#ffcc74;">​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​【信用债】</span></strong></span></p><p>截至17:00，今日信用债涨幅排名前十的有：</p><p><img data-cke-saved-src="40946899" src="40946899">​​​​​​​​​​​​​​<span style="color:#081818;"><span style="background-color:#ffcc74;">​​​​​​​</span><strong><span style="background-color:#ffcc74;">​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​【债市展望】</span></strong></span><span style="color:#081818;"><strong><span style="background-color:#ffcc74;"></span></strong></span><br></p><p>此前1Y国债收益率已低于央行7天逆回购操作利率和DR007。兴证固收当时<a data-cke-saved-href="https://mp.weixin.qq.com/s/8lvoSiaivi654VmoAA8xEg?" href="https://mp.weixin.qq.com/s/8lvoSiaivi654VmoAA8xEg?">分析</a>，此前投资者对央行宽松操作有预期，短端品种可能已经price in了投资者对央行进一步宽松操作的预期。<br></p><p>江海证券投资顾问朱陈东对qeubee live表示，此前市场的潜在利多是降息预期，潜在利空是央行公开市场卖出债券。现在利多落地， 短<span style="color:#f08b1b;"><strong>期内应该警惕利空的落地</strong></span>。<br></p><p>​​​​​​​操作上，朱陈东建议可以先买一些3年左右的短券，长端目前还是按照波段思路操作，如果利率下行较快接近或突破前低，建议进行一定的止盈，同时关注整体收益率曲线的形态。<br></p><p>华福固收徐亮团队也<a data-cke-saved-href="https://mp.weixin.qq.com/s/bbFDHBMvQS34LR3S-4k0TA" href="https://mp.weixin.qq.com/s/bbFDHBMvQS34LR3S-4k0TA">发表</a>了对降息后的债市看法：虽然短端利率此前已经隐含1-2次降息预期，但在央行稳健偏松的政策基调下，<span style="color:#f08b1b;"><strong>不排除短端利率还有下行空间和可能性（短债基金和货基等短端组合可以继续挖掘</strong></span>），但当前赔率较低，后续可以关注资金面情况，如果资金利率可以进一步宽松，那么5年左右位置可能存在明显机会。<br></p><p>从投资组合上，徐亮团队建议两个思路：1.<span style="color:#f08b1b;"><strong>适度加久期，选择哑铃型组合</strong></span>，短端用1-2年信用，长端暂时可以选择非关键期限；2. <span style="color:#f08b1b;"><strong>选择3-5年信用或6年左右等利率老券进行适度加杠杆的票息持有策略</strong></span>。<span style="font-size:12.0pt"><span style="font-family:&quot;微软雅黑&quot;,sans-serif"><span style="letter-spacing:.4pt"></span></span></span><br></p><p><span style="color:#081818;"><strong><span style="background-color:#ffcc74;">​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​【要闻关注】</span></strong></span></p><p><a data-cke-saved-href="https://qb3.idbhost.com:28888/information-center/newsDetail/1815190799151927296?timestamp=1721630250116&amp;plate=TJ" href="https://qb3.idbhost.com:28888/information-center/newsDetail/1815190799151927296?timestamp=1721630250116&amp;plate=TJ">解读 | 央行打出组合拳！机构称降息落地不一定是重大利好，避免止盈赛道“太拥挤”</a></p><p>对于债市而言，业内人士表示，今年以来市场对降息预期很充分，OMO降息落地或许<strong>对债市不一定是多么重大利好</strong>，交易盘若浮盈并不是很多，<strong>可能需要考虑做一定止盈，以避免卖出赛道太拥挤。</strong>而LPR降息是跟随OMO的操作而来的，<strong>预计后续MLF也会下调10bps至2.4%</strong>。</p><p><a data-cke-saved-href="https://qb3.idbhost.com:28888/information-center/newsDetail/1815210558136389632?timestamp=1721630264905&amp;plate=TJ" href="https://qb3.idbhost.com:28888/information-center/newsDetail/1815210558136389632?timestamp=1721630264905&amp;plate=TJ">政治局会议前瞻 | 下半年料提振GDP、扩内需、追加地产政策放松力度</a></p><p>在上周公布的<strong>二季度经济数据弱于预期，决定了下半年“稳增长”发力的必要性较高。</strong>对于年内经济目标，三中全会公报，三、四季度GDP或需达到4.9%、5.0%，对应实际增速高于二季度及去年同期，也<strong>意味着后续经济“稳增长”的必要性高于上半年。</strong>华创固收团队<a data-cke-saved-href="https://mp.weixin.qq.com/s/2gwtIQlj9R1ynEem4Z89rQ" href="https://mp.weixin.qq.com/s/2gwtIQlj9R1ynEem4Z89rQ">认为</a>这意味着政策层面<strong>稳住“5%”增长目标的诉求偏强，外贸、内需、新质生产力，是三大主要发力方向。</strong><br></p><p><a data-cke-saved-href="https://qb3.idbhost.com:28888/information-center/newsDetail/1815227991924543488?timestamp=1721630442911&amp;plate=TJ" href="https://qb3.idbhost.com:28888/information-center/newsDetail/1815227991924543488?timestamp=1721630442911&amp;plate=TJ">利多已落地，机构预警“央行卖债”利空袭来</a></p><p>江南农商交易员狄文达表示，临时正、逆回购是央行充实货币政策工具箱的举动，用来稳定资金市场，进一步加强央行对资金面的日度掌控。但是<strong>如果真的要开展操作，需要看到资金面极度泛滥或者极度紧张的情况出现才会开展</strong>。目前来看资金面还是比较平稳的，没有必要开展，<strong>就算开展了，也很中性，不用过度交易</strong>。操作上，朱陈东建议可以先买一些3年左右的短券，长端目前还是按照波段思路操作，如果利率下行较快接近或突破前低，建议进行一定的止盈，同时关注整体收益率曲线的形态。<br></p><p><a data-cke-saved-href="https://qb3.idbhost.com:28888/information-center/newsDetail/1815283607338618880?timestamp=1721635055361&amp;plate=TJ" href="https://qb3.idbhost.com:28888/information-center/newsDetail/1815283607338618880?timestamp=1721635055361&amp;plate=TJ">三中全会《决定》有这些亮点！天风宏观：预计提振市场风险偏好</a></p><p>7月21日，二十届三中全会的《决定》全文发布。分十五个部分和六十条措施，涉及改革的方方面面，天风宏观宋雪涛<a data-cke-saved-href="https://mp.weixin.qq.com/s/c-1gzXp0TIC4u2xSp7u4PA" href="https://mp.weixin.qq.com/s/c-1gzXp0TIC4u2xSp7u4PA">表示</a>，《决定》全文披露了比《公报》和新闻发布会更多的细节。三中全会《决定》围绕着提升生产力、降低风险这两大主题，给出了务实的解决方案。</p><p><a data-cke-saved-href="https://qb3.idbhost.com:28888/information-center/newsDetail/1815205547218178048?timestamp=1721639583914&amp;plate=TJ" href="https://qb3.idbhost.com:28888/information-center/newsDetail/1815205547218178048?timestamp=1721639583914&amp;plate=TJ">深度解读《决定》 | 超长期特别国债或常态化发行以化解地方债务；地产“新模式”定型，关注月末政治局会议</a><br></p><p>机构<a data-cke-saved-href="https://mp.weixin.qq.com/s/lSxwVeFIgxh7krYgm0WrTA" href="https://mp.weixin.qq.com/s/lSxwVeFIgxh7krYgm0WrTA">认为</a>，财税体制改革的核心是完善中央和地方财权与事权的匹配，建立权责清晰、财力协调、区域均衡的中央和地方财政关系。操作上看，机构<a data-cke-saved-href="https://mp.weixin.qq.com/s/lSxwVeFIgxh7krYgm0WrTA" href="https://mp.weixin.qq.com/s/lSxwVeFIgxh7krYgm0WrTA">预计</a>，<strong>未来或通过超长期特别国债常态化发行，着力解决地方政府财力紧张和存量债务化解的问题</strong>，并且在资金分配上向财政弱资质的区域予以倾斜。<br></p><p><a data-cke-saved-href="https://qb3.idbhost.com:28888/information-center/newsDetail/1815219960260202496?timestamp=1721639644586&amp;plate=TJ" href="https://qb3.idbhost.com:28888/information-center/newsDetail/1815219960260202496?timestamp=1721639644586&amp;plate=TJ">降息后的债市策略——还加不加久期，如何择券，品种如何选？</a></p><p>华福固收​​​​​​​<a data-cke-saved-href="https://mp.weixin.qq.com/s/bbFDHBMvQS34LR3S-4k0TA" href="https://mp.weixin.qq.com/s/bbFDHBMvQS34LR3S-4k0TA">认为</a>，虽然短端利率此前已经隐含1-2次降息预期，但在央行稳健偏松的政策基调下，<strong>不排除短端利率还有下行空间和可能性</strong>（短债基金和货基等短端组合可以继续挖掘），但当前赔率较低，<strong>后续可以关注资金面情况</strong>，如果资金利率可以进一步宽松，那么5Y左右位置可能存在明显机会。<br></p>';

  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = useScroll(scrollRef);
  const navigate = useNavigate();

  const scrollTop = () => {
    // scrollRef.current!.scrollTop = 0;
    scrollRef.current!.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const back = () => {
    navigate(-1);
  };
  return (
    <div
      className={tw`overflow-y-scroll h-full pt-[20px] px-[80px]`}
      ref={scrollRef}
    >
      <div
        className={tw`${css`
          p {
            margin-bottom: 24px;
          }

          img {
            margin-top: 10px;
            margin-bottom: 10px;
          }
        `}`}
        dangerouslySetInnerHTML={{
          __html: context,
        }}
      ></div>

      <div
        className={tw`fixed top-[100px] right-[25px] w-[50px] h-[50px] bg-[#ccc] flex items-center justify-center cursor-pointer hover:text-frc-200 rounded-[5px]`}
        onClick={back}
      >
        返回
      </div>
      {(scroll?.top || 0) > 100 && (
        <div
          className={tw`fixed bottom-[50px] right-[25px] w-[50px] h-[50px] bg-[#ccc] flex items-center justify-center cursor-pointer hover:text-frc-200 rounded-[5px]`}
          onClick={scrollTop}
        >
          TOP
        </div>
      )}
    </div>
  );
};

export default ArticleDetail;
