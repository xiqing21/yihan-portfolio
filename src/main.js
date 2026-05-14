import './styles.css';

const skills = [
  'Next.js', 'Vue', '微信小程序', 'APP封装', 'Node.js', 'PostgreSQL', '云端存储', '权限系统',
  '支付对接', '数据可视化', 'AI生图', '商业海报', '品牌视觉', 'Web3 DApp', '钱包连接', '智能合约前端',
  '隐私加密', '数据脱敏', '运维部署', '移动端适配'
];

const templates = [
  {
    title: '极简艺术宣传官网',
    badge: '低预算首选',
    price: '800-1500 元',
    desc: '适合个人名片、门店展示、商家引流和品牌形象。强调原创审美、地图定位、悬浮联系与移动端精修。',
    items: ['艺术化排版', '地图定位', '联系方式悬浮', '全端适配']
  },
  {
    title: '功能型平台项目',
    badge: '商业刚需',
    price: '1800-3500 元',
    desc: '适合服务平台、私域系统和会员项目。包含用户体系、图片视频存储、交互功能和后台管理。',
    items: ['注册登录', '云端存储', '权限分级', '后台管理']
  },
  {
    title: '高端 APP / Web3 DApp',
    badge: '差异化高端',
    price: '按需评估',
    desc: '面向隐私、安全、链上交互和双端应用。可做钱包连接、链上数据展示、加密存储与脱敏逻辑。',
    items: ['双端适配', '钱包连接', '链上交互', '隐私加密']
  }
];

const services = [
  {
    group: '全栈开发',
    accent: '01',
    items: ['APP开发、双端打包、上架部署', '微信小程序 / H5 / 企业官网定制', '注册登录、个人中心、权限分级', '图片、视频、文档云端加密存储', '支付对接与商用收款闭环', '数据可视化、后台统计、服务器运维']
  },
  {
    group: 'AI视觉创意',
    accent: '02',
    items: ['商业海报、门店活动封面批量精修', '电商主图、详情页、产品图AI精修', '氛围感人像、模特图、原创艺术配图', 'LOGO创意与品牌视觉物料', '固定风格长期代做与高级版式排版']
  },
  {
    group: 'Web3隐私DApp',
    accent: '03',
    items: ['DApp定制、钱包连接、链上交互', '隐私加密应用、数据脱敏', '去中心化账号与存储系统', 'Web3官网、白皮书配套视觉', '智能合约前端与链上数据可视化']
  },
  {
    group: '本地商家合作',
    accent: '04',
    items: ['门店宣传物料包月制作', '物业通知、社区活动图长期供应', '私域引流小程序、活动落地页', '对公/对私合作、协议与开票结算']
  }
];

const cases = [
  {
    type: 'tech',
    title: '艺术风企业官网',
    desc: '品牌官网 + 全端适配 + 地图联系',
    image: 'case-web.svg',
    demo: 'website',
    cta: '打开官网演示'
  },
  {
    type: 'platform',
    title: '存储交互小程序',
    desc: '注册登录 + 图文视频存储 + 后台管理',
    image: 'case-platform.svg',
    demo: 'platform',
    cta: '体验存储交互'
  },
  {
    type: 'data',
    title: '政企数据后台',
    desc: '大数据看板 + 权限管理 + 稳定部署',
    image: 'case-data.svg',
    demo: 'data',
    cta: '查看数据动效'
  },
  {
    type: 'web3',
    title: 'Web3 DApp',
    desc: '钱包连接 + 链上交互 + 隐私加密',
    image: 'case-web3.svg',
    demo: 'web3',
    cta: '模拟链上交互'
  },
  {
    type: 'ai',
    title: 'AI商业视觉包',
    desc: '海报 / 主图 / 品牌物料批量输出',
    image: 'case-ai.svg',
    demo: 'ai',
    cta: '切换视觉风格'
  }
];

const advantages = [
  '6年国网政企级产品开发经验，代码规范、系统稳定',
  '能做真实用户体系、权限管理、图片视频云端存储',
  '传统互联网开发 + 3年Web3链上开发双赛道',
  '自带UI视觉设计能力，拒绝廉价粗糙模板',
  '一人全栈全包，沟通成本低，响应快',
  'AI视觉高效产出，低成本做出高级宣传物料',
  '惠州常驻，深圳可面谈，真实可对接',
  '价格透明，无中间商溢价'
];

const app = document.querySelector('#app');

app.innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top" aria-label="回到首页">
      <span>郑逸晗</span>
      <small>Yihan.me</small>
    </a>
    <nav aria-label="主导航">
      <a href="#templates">模板</a>
      <a href="#services">服务</a>
      <a href="#cases">案例</a>
      <a href="#pricing">价格</a>
      <a href="#contact">联系</a>
    </nav>
    <a class="header-cta" href="#contact">预约沟通</a>
  </header>

  <main id="top">
    <section class="hero">
      <div class="hero-art" aria-hidden="true">
        <img class="hero-image" src="/hero-studio.png" alt="" />
        <div class="orb orb-a"></div>
        <div class="orb orb-b"></div>
        <div class="grid-plane"></div>
        <div class="studio-panel">
          <span></span><span></span><span></span><span></span>
        </div>
      </div>
      <div class="hero-copy reveal">
        <p class="eyebrow">惠州 · 深圳可线下面谈 / 独立全栈交付</p>
        <h1>全栈独立开发 + AI视觉创意 + Web3隐私DApp</h1>
        <p class="lead">6年政企大数据全栈经验 + 3年Web3链上开发经验，一人包揽设计、开发、运维与上线交付。省钱、高质、可商用、可高密存储。</p>
        <div class="hero-actions">
          <a class="primary" href="#contact">微信沟通</a>
          <a class="secondary" href="#cases">看能力范围</a>
        </div>
      </div>
      <aside class="hero-card reveal delay-1" aria-label="核心能力">
        <strong>擅长</strong>
        <p>APP / 小程序 / 官网定制开发、完整账号体系、图文视频存储交互、支付功能对接、AI商业视觉设计、区块链DApp开发。</p>
        <div class="signal-row">
          <span>Design</span><span>Code</span><span>Deploy</span><span>Maintain</span>
        </div>
      </aside>
    </section>

    <section class="marquee-wrap" aria-label="技能标签">
      <div class="marquee">${[...skills, ...skills].map(skill => `<span>${skill}</span>`).join('')}</div>
    </section>

    <section id="about" class="section about">
      <div class="section-kicker">About</div>
      <div>
        <h2>我叫郑逸晗。</h2>
        <p>我是资深独立全栈开发者、UI视觉设计师、Web3区块链开发工程师。长期深耕政企产品设计、前后端全栈开发、大数据处理、商业化项目全流程管理，也能承接去中心化应用、隐私加密和链上交互相关项目。</p>
        <p>我的工作方式很直接：需求梳理、UI艺术设计、后端程序开发、用户账号体系、图文视频云端存储、交互逻辑、部署上线、支付或链上交互，尽量在一个稳定闭环里完成。</p>
      </div>
      <div class="about-note">
        <span>坐标</span>
        <a href="#contact">广东惠州华润小径湾，紧邻深圳</a>
        <small>可承接深惠两地线下面谈、上门对接项目。</small>
      </div>
    </section>

    <section id="templates" class="section">
      <div class="section-head">
        <div>
          <div class="section-kicker">Project Types</div>
          <h2>客户可以直接选择的项目类型</h2>
        </div>
        <p>从低预算展示，到功能平台，再到 Web3 / APP 高端定制，先把范围讲清楚，报价和交付就不会扯皮。</p>
      </div>
      <div class="template-grid">
        ${templates.map((item, index) => `
          <article class="template-card ${index === 1 ? 'featured' : ''}" tabindex="0">
            <span class="badge">${item.badge}</span>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
            <div class="template-price">${item.price}</div>
            <div class="mini-tags">${item.items.map(tag => `<span>${tag}</span>`).join('')}</div>
          </article>
        `).join('')}
      </div>
    </section>

    <section id="services" class="section services">
      <div class="section-head">
        <div>
          <div class="section-kicker">Services</div>
          <h2>服务列表</h2>
        </div>
        <p>服务按实际交付拆分，客户能看懂，也方便后续组合套餐。</p>
      </div>
      <div class="service-grid">
        ${services.map(service => `
          <article class="service-card">
            <div class="service-index">${service.accent}</div>
            <h3>${service.group}</h3>
            <ul>${service.items.map(item => `<li>${item}</li>`).join('')}</ul>
          </article>
        `).join('')}
      </div>
    </section>

    <section id="advantages" class="section advantages">
      <div class="section-kicker">Why Me</div>
      <h2>不是只会做页面，是能把商业系统跑起来。</h2>
      <div class="advantage-list">
        ${advantages.map((item, index) => `<div><span>${String(index + 1).padStart(2, '0')}</span>${item}</div>`).join('')}
      </div>
    </section>

    <section id="cases" class="section cases">
      <div class="section-head">
        <div>
          <div class="section-kicker">Cases</div>
          <h2>案例展示区</h2>
        </div>
        <p>每个卡片都可以点开看交互 Demo：官网展示、存储上传、数据动效、链上交互和 AI 视觉风格切换。</p>
      </div>
      <div class="case-filters" role="tablist" aria-label="案例分类">
        <button class="active" data-filter="all">全部</button>
        <button data-filter="tech">官网</button>
        <button data-filter="platform">平台</button>
        <button data-filter="data">数据</button>
        <button data-filter="web3">Web3</button>
        <button data-filter="ai">AI视觉</button>
      </div>
      <div class="case-grid">
        ${cases.map(({ type, title, desc, image, demo, cta }) => `
          <article class="case-card" data-type="${type}">
            <button class="case-open" type="button" data-demo="${demo}" aria-label="${cta}">
              <span>${cta}</span>
            </button>
            <img src="/${image}" alt="${title}演示图" loading="lazy" />
            <div>
              <h3>${title}</h3>
              <p>${desc}</p>
            </div>
          </article>
        `).join('')}
      </div>
    </section>

    <section id="pricing" class="section pricing">
      <div class="section-kicker">Pricing</div>
      <h2>合作价格参考</h2>
      <div class="price-table">
        <div><strong>艺术极简宣传官网</strong><span>800-1500元</span><small>展示、地图、联系、艺术排版、移动端适配</small></div>
        <div><strong>功能型官网 / 小程序</strong><span>1800-3500元</span><small>用户体系、个人中心、图片视频存储、交互和后台</small></div>
        <div><strong>AI视觉设计服务</strong><span>20-50元/张</span><small>人像、产品精修、海报、活动物料，套装 99-299元</small></div>
        <div><strong>高端定制开发</strong><span>按需评估</span><small>APP双端、Web3 DApp、隐私加密类项目专属报价</small></div>
        <div><strong>长期包月合作</strong><span>优惠面议</span><small>门店、物业、公司视觉设计与维护迭代</small></div>
      </div>
    </section>

    <section class="section guarantees">
      <div class="section-head">
        <div>
          <div class="section-kicker">Guarantees</div>
          <h2>服务保障</h2>
        </div>
      </div>
      <div class="guarantee-grid">
        ${['政企级开发标准', '全端精细适配', '真实存储交互', '隐私加密能力', '交付透明完整', '线下可面谈'].map(item => `<span>${item}</span>`).join('')}
      </div>
    </section>

    <section id="contact" class="contact">
      <div>
        <div class="section-kicker">Contact</div>
        <h2>项目想法可以先微信发我，适合就直接拆需求。</h2>
        <p>服务范围：惠州全域 + 深圳全城可线下对接面谈。地址模块可直接跳转地图搜索。</p>
        <div class="contact-actions">
          <button id="copyWechat" type="button">复制微信：loveinslife</button>
          <a href="tel:1760347432">拨打电话：1760347432</a>
          <a target="_blank" rel="noreferrer" href="https://uri.amap.com/search?keyword=%E5%8D%8E%E6%B6%A6%E5%B0%8F%E5%BE%84%E6%B9%BE%E5%90%AC%E6%B5%B7%E8%BD%A9&city=%E6%83%A0%E5%B7%9E">打开地图：华润小径湾听海轩</a>
        </div>
        <p class="copy-status" aria-live="polite"></p>
      </div>
      <figure class="qr-card">
        <img src="/wechat-qr.jpg" alt="郑逸晗微信二维码" />
        <figcaption>微信扫码添加 · loveinslife</figcaption>
      </figure>
    </section>
  </main>

  <footer>
    <span>© ${new Date().getFullYear()} 郑逸晗 Yihan</span>
    <a href="https://yihan.me/">yihan.me</a>
  </footer>

  <dialog class="demo-dialog" id="demoDialog" aria-label="案例交互演示">
    <button class="dialog-close" type="button" aria-label="关闭演示">×</button>
    <div class="demo-stage" id="demoStage"></div>
  </dialog>
`;

const demos = {
  website: `
    <div class="demo-shell website-demo">
      <div class="demo-copy">
        <span>Brand Site Demo</span>
        <h3>海边民宿品牌官网</h3>
        <p>首屏视觉、预约按钮、地图入口、移动端排版统一完成。鼠标悬浮右侧房型卡，会有色块和价格状态变化。</p>
        <a href="#contact">预约同款官网</a>
      </div>
      <div class="micro-site">
        <div class="micro-hero">
          <strong>听海 · 小径湾</strong>
          <button>预约看房</button>
        </div>
        <div class="room-row">
          <div><span>Sea View</span><b>¥699</b></div>
          <div><span>Family Suite</span><b>¥899</b></div>
          <div><span>Sunset Room</span><b>¥799</b></div>
        </div>
      </div>
    </div>
  `,
  platform: `
    <div class="demo-shell upload-demo">
      <div class="demo-copy">
        <span>Storage Interaction</span>
        <h3>图片 / 视频云端存储流</h3>
        <p>模拟上传、审核、留存、权限分级。点击“模拟上传”会推进进度条和状态。</p>
        <button class="demo-action" data-action="upload">模拟上传</button>
      </div>
      <div class="upload-board">
        <div class="upload-progress"><i></i></div>
        <ul>
          <li class="done">账号校验</li>
          <li class="active">文件上传</li>
          <li>加密存储</li>
          <li>后台可见</li>
        </ul>
      </div>
    </div>
  `,
  data: `
    <div class="demo-shell data-demo">
      <div class="demo-copy">
        <span>Data Dashboard</span>
        <h3>政企级数据后台动效</h3>
        <p>面向业务监控、订单统计、访问增长和权限管理，图表会持续呼吸变化。</p>
      </div>
      <div class="bars">${[42, 68, 54, 88, 76, 96].map(v => `<i style="--h:${v}%"></i>`).join('')}</div>
    </div>
  `,
  web3: `
    <div class="demo-shell web3-demo">
      <div class="demo-copy">
        <span>Web3 DApp</span>
        <h3>钱包连接与链上交互</h3>
        <p>模拟连接钱包、签名授权、链上写入、隐私加密状态。点击按钮会切换节点状态。</p>
        <button class="demo-action" data-action="web3">连接钱包</button>
      </div>
      <div class="chain-orbit">
        <b></b><b></b><b></b><b></b>
        <strong>Encrypted</strong>
      </div>
    </div>
  `,
  ai: `
    <div class="demo-shell ai-demo">
      <div class="demo-copy">
        <span>AI Visual Pack</span>
        <h3>商业视觉风格切换</h3>
        <p>门店海报、电商主图、活动封面可以做固定风格批量输出。点击色块切换视觉气质。</p>
        <div class="palette-buttons">
          <button data-theme="jade">青绿</button>
          <button data-theme="amber">暖金</button>
          <button data-theme="ink">墨色</button>
        </div>
      </div>
      <div class="poster-preview">
        <span>NEW COLLECTION</span>
        <strong>商业海报</strong>
        <small>AI retouch / layout / brand kit</small>
      </div>
    </div>
  `
};

document.querySelectorAll('.case-filters button').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('.case-filters button').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    document.querySelectorAll('.case-card').forEach(card => {
      card.hidden = filter !== 'all' && card.dataset.type !== filter;
    });
  });
});

document.querySelector('#copyWechat').addEventListener('click', async () => {
  const status = document.querySelector('.copy-status');
  try {
    await navigator.clipboard.writeText('loveinslife');
    status.textContent = '已复制微信号 loveinslife';
  } catch {
    status.textContent = '微信号：loveinslife';
  }
});

const dialog = document.querySelector('#demoDialog');
const stage = document.querySelector('#demoStage');

document.querySelectorAll('.case-open').forEach(button => {
  button.addEventListener('click', () => {
    stage.innerHTML = demos[button.dataset.demo];
    dialog.showModal();
  });
});

document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});

stage.addEventListener('click', event => {
  const target = event.target.closest('button');
  if (!target) return;

  if (target.dataset.action === 'upload') {
    stage.querySelector('.upload-board')?.classList.toggle('uploaded');
    target.textContent = target.textContent === '模拟上传' ? '重新演示' : '模拟上传';
  }

  if (target.dataset.action === 'web3') {
    stage.querySelector('.chain-orbit')?.classList.toggle('connected');
    target.textContent = target.textContent === '连接钱包' ? '已连接 · 模拟写入' : '连接钱包';
  }

  if (target.dataset.theme) {
    stage.querySelector('.poster-preview')?.setAttribute('data-theme', target.dataset.theme);
  }
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section, .reveal').forEach(el => observer.observe(el));
