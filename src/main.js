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
    items: ['商业海报、门店活动封面批量精修', '电商主图、详情页、产品图AI精修', '氛围感人像、模特图、原创艺术配图', 'LOGO创意与品牌视觉物料', '固定风格长期代做与高级版式艺术排版']
  },
  {
    group: 'Web3隐私DApp',
    accent: '03',
    items: ['DApp定制、钱包连接、链上交互', '隐私加密应用、数据脱敏', '去中心化账号与存储系统', 'Web3官网、白皮书配套视觉', '智能合约前端与链上数据可视化']
  },
  {
    group: '本地商家合作',
    accent: '04',
    items: ['门店宣传物料包月制作', '物业通知、社区活动图长期供应', '私域引流小程序、高颜值活动落地页', '对公/对私合作、协议与开票结算']
  }
];

const caseStudies = [
  {
    slug: 'website',
    type: 'tech',
    title: '艺术风企业官网',
    eyebrow: 'Brand Website',
    desc: '把门店、个人品牌或民宿做成有审美、有转化路径、手机端也舒服的官网。',
    image: 'case-website-hero.png',
    cardImage: 'case-web.svg',
    metrics: ['3屏首访转化', '地图/电话/微信联动', '移动端精修'],
    deliverables: ['首页视觉与品牌调性', '服务/房型/作品模块', '地图定位与悬浮联系', 'SEO标题与分享卡片', '手机端细节适配'],
    process: ['确认品牌气质与转化目标', '生成/整理主视觉素材', '搭建响应式官网', '接入联系方式和地图', '上线并检查分享效果'],
    demo: 'website'
  },
  {
    slug: 'platform',
    type: 'platform',
    title: '存储交互小程序',
    eyebrow: 'Storage Platform',
    desc: '适合会员系统、私域工具、作品上传、订单表单，重点是真实用户体系和文件留存。',
    image: 'case-platform.svg',
    cardImage: 'case-platform.svg',
    metrics: ['账号权限分级', '图文视频留存', '后台可追踪'],
    deliverables: ['注册登录与个人中心', '图片/视频/文档上传', '文件状态流转', '后台管理与权限', '数据安全与部署'],
    process: ['拆用户角色和权限', '设计上传与审核流程', '搭建前后端与存储', '联调后台管理', '上线后压测关键路径'],
    demo: 'platform'
  },
  {
    slug: 'dashboard',
    type: 'data',
    title: '政企级数据后台',
    eyebrow: 'Data Dashboard',
    desc: '把业务数据、订单、访问、告警做成管理者能一眼看懂的稳定后台。',
    image: 'case-data.svg',
    cardImage: 'case-data.svg',
    metrics: ['多指标看板', '权限审计', '稳定部署'],
    deliverables: ['指标体系梳理', '可视化大屏/后台', '筛选查询与导出', '角色权限管理', '服务器部署运维'],
    process: ['确定业务指标', '整理数据来源', '设计看板布局', '开发接口和图表', '交付使用说明'],
    demo: 'dashboard'
  },
  {
    slug: 'web3',
    type: 'web3',
    title: 'Web3隐私DApp',
    eyebrow: 'Web3 Privacy DApp',
    desc: '面向链上项目、隐私加密应用、钱包连接和链上数据可视化。',
    image: 'case-web3.svg',
    cardImage: 'case-web3.svg',
    metrics: ['钱包连接', '链上交互', '隐私脱敏'],
    deliverables: ['钱包连接与签名', '智能合约前端交互', '链上数据展示', '隐私加密/脱敏流程', 'Web3项目官网配套'],
    process: ['确认链和合约接口', '设计连接和授权流程', '开发DApp前端', '处理错误和交易状态', '部署并验证链上交互'],
    demo: 'web3'
  },
  {
    slug: 'ai-visual',
    type: 'ai',
    title: 'AI商业视觉包',
    eyebrow: 'AI Visual System',
    desc: '面向门店、电商、活动宣传，批量做出风格统一的海报、主图和社媒卡片。',
    image: 'case-ai-hero.png',
    cardImage: 'case-ai.svg',
    metrics: ['固定风格批量出图', '主图/海报/封面', '品牌视觉统一'],
    deliverables: ['风格方向板', '海报/封面/主图', '产品图AI精修', '社媒传播卡片', '长期视觉模板'],
    process: ['确认行业和审美方向', '生成视觉路线', '批量出图并筛选', '精修文字和版式', '整理可复用模板'],
    demo: 'ai'
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

const visualShowcase = [
  ['visual-product-ad.png', '产品广告宣传图', 'Product campaign', '电商主图 / 详情首屏 / 社媒种草图'],
  ['visual-fashion.png', '模特服装视觉图', 'Fashion lookbook', '服装上新 / 穿搭海报 / 模特氛围图'],
  ['visual-enterprise.png', '企业海报视觉图', 'Enterprise poster', '品牌发布 / 活动宣传 / B2B物料'],
  ['case-ai-hero.png', '潮流社媒视觉', 'Social trend visual', '封面卡片 / 活动KV / 朋友圈海报']
];

const realProjects = [
  {
    title: '一级芯界公司官网',
    label: 'Company Website',
    desc: '企业级数据智能官网，首屏强调品牌可信度、产品方向和试用转化。',
    image: 'real-case-company.webp',
    url: 'https://yijxj.com/',
    tags: ['企业官网', 'AI数据智能', '品牌首屏']
  },
  {
    title: 'Liubai CV AI简历优化',
    label: 'AI Resume SaaS',
    desc: '面向 Web3 岗位的简历优化产品，包含登录、模板、岗位信号和商业转化路径。',
    image: 'real-case-liubai.webp',
    url: 'https://liubai.cloud/zh',
    tags: ['AI产品', '简历优化', 'Web3求职']
  },
  {
    title: '司法鉴定行业史',
    label: 'Industry Archive',
    desc: '司法鉴定历史与知识型网站，用重视觉叙事承载行业内容、资料目录和长期阅读。',
    image: 'real-case-sifa.webp',
    url: 'https://sifa.yihan.me',
    tags: ['行业网站', '司法鉴定', '内容叙事']
  }
];

const workflowSteps = {
  website: [
    ['需求定位', '确认客户行业、主推服务、转化动作和视觉气质。'],
    ['视觉生成', '用AI和设计规范整理首屏图、色彩、字体和移动端版式。'],
    ['页面搭建', '完成首页、服务、案例、地图、微信联系和SEO分享卡片。'],
    ['上线验收', '部署域名、检查手机端、测试按钮跳转和社交分享。']
  ],
  platform: [
    ['角色拆解', '拆客户、管理员、会员等角色，确定权限边界。'],
    ['上传链路', '设计图片/视频/文档上传、状态、审核和存储路径。'],
    ['后台管理', '搭建数据列表、详情、筛选、权限控制和文件预览。'],
    ['部署维护', '完成服务器、存储桶、数据库和后续迭代说明。']
  ],
  dashboard: [
    ['指标定义', '把业务目标拆成访问、订单、转化、告警等核心指标。'],
    ['数据接入', '整理数据来源、接口字段、权限和刷新频率。'],
    ['图表交互', '完成趋势图、柱状图、筛选、导出和异常高亮。'],
    ['稳定交付', '部署、权限审计、性能检查和使用培训。']
  ],
  web3: [
    ['链路确认', '确认链、合约、钱包、签名和交易状态需求。'],
    ['交互设计', '设计连接钱包、授权、写入、失败提示和隐私展示。'],
    ['前端开发', '接入合约方法、链上数据、状态轮询和异常处理。'],
    ['测试上线', '测试网验证、主网参数、域名部署和使用说明。']
  ],
  ai: [
    ['风格采样', '确认行业、目标客户、参考风格和禁用元素。'],
    ['批量生成', '生成产品广告、服装模特、企业海报、社媒封面。'],
    ['精修定稿', '筛选高质量版本，统一色彩、构图和商业版式。'],
    ['模板沉淀', '整理可复用模板，方便长期包月和批量出图。']
  ]
};

const translations = {
  '模板': 'Types',
  '服务': 'Services',
  '作品': 'Work',
  '案例': 'Cases',
  '价格': 'Pricing',
  '联系': 'Contact',
  '预约沟通': 'Start a Project',
  '惠州 · 深圳可线下面谈 / 独立全栈交付': 'Huizhou / Shenzhen onsite meetings · independent full-stack delivery',
  '全栈独立开发 + AI视觉创意 + Web3隐私DApp': 'Full-stack Development + AI Visuals + Web3 Privacy DApps',
  '6年政企大数据全栈经验 + 3年Web3链上开发经验，一人包揽设计、开发、运维与上线交付。省钱、高质、可商用、可高密存储。': '6 years of enterprise-grade full-stack and big-data experience plus 3 years of Web3 development. Design, development, deployment, operations, and commercial launch handled end to end.',
  '微信沟通': 'WeChat',
  '看完整案例': 'View Cases',
  '擅长': 'Expertise',
  'APP / 小程序 / 官网定制开发、完整账号体系、图文视频存储交互、支付功能对接、AI商业视觉设计、区块链DApp开发。': 'Custom apps, mini programs, websites, account systems, media storage, payment flows, AI commercial visuals, and blockchain DApps.',
  '我叫郑逸晗。': 'I am Zheng Yihan.',
  '我是资深独立全栈开发者、UI视觉设计师、Web3区块链开发工程师。长期深耕政企产品设计、前后端全栈开发、大数据处理、商业化项目全流程管理，也能承接去中心化应用、隐私加密和链上交互相关项目。': 'I am an independent full-stack developer, UI visual designer, and Web3 blockchain engineer with experience across enterprise products, frontend/backend engineering, data processing, and commercial delivery.',
  '我的工作方式很直接：需求梳理、UI艺术设计、后端程序开发、用户账号体系、图文视频云端存储、交互逻辑、部署上线、支付或链上交互，尽量在一个稳定闭环里完成。': 'My workflow is direct: requirements, visual design, backend development, user accounts, cloud media storage, interaction logic, deployment, payments, or on-chain flows in one stable delivery loop.',
  '坐标': 'Location',
  '广东惠州华润小径湾，紧邻深圳': 'China Resources Xiaojing Bay, Huizhou, near Shenzhen',
  '可承接深惠两地线下面谈、上门对接项目。': 'Available for onsite meetings in Huizhou and Shenzhen.',
  '交互肖像': 'Interactive Portrait',
  '移动鼠标，像透过一束光查看另一层数据视觉。': 'Move the cursor to inspect another visual layer through a beam of light.',
  '只让头部进入另一层数据视觉，背景保持原图稳定。': 'Only the head enters the alternate data layer while the background stays stable.',
  '数据驱动 · 创意交付 · Web3 隐私应用': 'Data-driven · Creative delivery · Web3 privacy apps',
  '3D智能体': '3D Agent',
  '把复杂系统做成可感知、可交互、可上线的商业产品。': 'Turning complex systems into tangible, interactive, launch-ready products.',
  'Spline 模型位': 'Spline-ready Slot',
  '等待真实 scene 链接接入': 'Awaiting real scene link',
  '数据核心': 'Data Core',
  '视觉生成': 'Visual AI',
  '链上交互': 'On-chain UX',
  '客户可以直接选择的项目类型': 'Project Types Clients Can Choose',
  '从低预算展示，到功能平台，再到 Web3 / APP 高端定制，先把范围讲清楚，报价和交付就不会扯皮。': 'From low-budget showcases to platforms and premium Web3/App builds, scope comes first so pricing and delivery stay clear.',
  '服务列表': 'Services',
  '服务按实际交付拆分，客户能看懂，也方便后续组合套餐。': 'Services are split by real delivery scope so clients understand what they are buying.',
  'AI视觉行业案例': 'AI Visual Industry Demos',
  '产品广告、服装模特、企业海报、潮流社媒图，都可以快速生成并精修成可商用视觉物料。': 'Product ads, fashion model visuals, enterprise posters, and trendy social images can be generated and refined into commercial-ready assets.',
  '真实上线项目': 'Live Projects',
  '这里放的是已经上线的真实站点截图，客户可以直接点击访问原项目，比单纯概念图更有信任感。': 'These are screenshots from live projects. Visitors can open the real sites directly, which builds more trust than concept-only demos.',
  '访问项目': 'Open Project',
  '不是只会做页面，是能把商业系统跑起来。': 'Not just pages. I build systems that can actually run.',
  '案例展示区': 'Case Studies',
  '每个案例都有独立子页面：完整展示交付范围、交互 Demo、流程和适合客户类型。': 'Each case has its own page with scope, interactive demo, workflow, and fit.',
  '合作价格参考': 'Pricing Reference',
  '服务保障': 'Guarantees',
  '项目想法可以先微信发我，适合就直接拆需求。': 'Send your project idea on WeChat and I will break it into a delivery plan.',
  '服务范围：惠州全域 + 深圳全城可线下对接面谈。地址模块可直接跳转地图搜索。': 'Service area: Huizhou and Shenzhen onsite meetings. The address opens directly in map search.',
  '复制微信：loveinslife': 'Copy WeChat: loveinslife',
  '拨打电话：1760347432': 'Call: 1760347432',
  '打开地图：华润小径湾听海轩': 'Open Map: Xiaojing Bay Tinghaixuan',
  '微信扫码添加 · loveinslife': 'Scan WeChat · loveinslife',
  '返回案例列表': 'Back to Cases',
  '咨询这个方向': 'Ask About This',
  '看交互演示': 'View Demo',
  '实际能交付什么': 'What Gets Delivered',
  '从想法到上线的流程': '0-1 Workflow',
  '按真实项目推进，不只是做一张好看的图，而是把客户能用、能改、能传播的东西交出去。': 'A real project flow: not only visuals, but something clients can use, edit, and share.',
  '继续看其他能力': 'More Capabilities',
  '查看完整案例': 'View Full Case',
  '艺术风企业官网': 'Artistic Business Website',
  '存储交互小程序': 'Storage Mini Program',
  '政企级数据后台': 'Enterprise Data Dashboard',
  'Web3隐私DApp': 'Web3 Privacy DApp',
  'AI商业视觉包': 'AI Commercial Visual Kit',
  '产品广告宣传图': 'Product Advertising',
  '模特服装视觉图': 'Fashion Model Visual',
  '企业海报视觉图': 'Enterprise Poster',
  '潮流社媒视觉': 'Trendy Social Visual',
  '一级芯界公司官网': 'Yiji Xinjie Company Website',
  'Liubai CV AI简历优化': 'Liubai CV AI Resume Optimization',
  '司法鉴定行业史': 'Forensic Appraisal Industry History',
  '企业级数据智能官网，首屏强调品牌可信度、产品方向和试用转化。': 'An enterprise data intelligence website focused on brand credibility, product direction, and trial conversion.',
  '面向 Web3 岗位的简历优化产品，包含登录、模板、岗位信号和商业转化路径。': 'A resume optimization product for Web3 roles with authentication, templates, job signals, and conversion paths.',
  '司法鉴定历史与知识型网站，用重视觉叙事承载行业内容、资料目录和长期阅读。': 'A forensic appraisal history and knowledge site with strong visual storytelling, content catalogs, and long-form reading.',
  '企业官网': 'Company Website',
  'AI数据智能': 'AI Data Intelligence',
  '品牌首屏': 'Brand Hero',
  'AI产品': 'AI Product',
  '简历优化': 'Resume Optimization',
  'Web3求职': 'Web3 Career',
  '行业网站': 'Industry Website',
  '司法鉴定': 'Forensic Appraisal',
  '内容叙事': 'Content Storytelling',
  '电商主图 / 详情首屏 / 社媒种草图': 'E-commerce hero / detail page / social seeding',
  '服装上新 / 穿搭海报 / 模特氛围图': 'New arrivals / outfit posters / model atmosphere',
  '品牌发布 / 活动宣传 / B2B物料': 'Brand launch / campaign / B2B materials',
  '封面卡片 / 活动KV / 朋友圈海报': 'Cover cards / campaign KV / WeChat Moments posters',
  '需求定位': 'Scope',
  '视觉生成': 'Visuals',
  '页面搭建': 'Build',
  '上线验收': 'Launch',
  '角色拆解': 'Roles',
  '上传链路': 'Upload Flow',
  '后台管理': 'Admin',
  '部署维护': 'Ops',
  '指标定义': 'Metrics',
  '数据接入': 'Data',
  '图表交互': 'Charts',
  '稳定交付': 'Delivery',
  '链路确认': 'Chain',
  '交互设计': 'UX',
  '前端开发': 'Frontend',
  '测试上线': 'Testing',
  '风格采样': 'Style',
  '批量生成': 'Generate',
  '精修定稿': 'Refine',
  '模板沉淀': 'Template',
  'Next.js': 'Next.js',
  'Vue': 'Vue',
  '微信小程序': 'WeChat Mini Program',
  'APP封装': 'App Packaging',
  'Node.js': 'Node.js',
  'PostgreSQL': 'PostgreSQL',
  '云端存储': 'Cloud Storage',
  '权限系统': 'Permission System',
  '支付对接': 'Payment Integration',
  '数据可视化': 'Data Visualization',
  'AI生图': 'AI Image Generation',
  '商业海报': 'Commercial Posters',
  '品牌视觉': 'Brand Visuals',
  '钱包连接': 'Wallet Connect',
  '智能合约前端': 'Smart Contract UI',
  '隐私加密': 'Privacy Encryption',
  '数据脱敏': 'Data Masking',
  '运维部署': 'Deployment & Ops',
  '移动端适配': 'Mobile Responsive',
  '极简艺术宣传官网': 'Minimal Artistic Website',
  '低预算首选': 'Budget Friendly',
  '适合个人名片、门店展示、商家引流和品牌形象。强调原创审美、地图定位、悬浮联系与移动端精修。': 'For personal cards, shops, local traffic, and brand showcases with original visual direction, map location, floating contact, and mobile refinement.',
  '艺术化排版': 'Art Direction',
  '地图定位': 'Map Location',
  '联系方式悬浮': 'Floating Contact',
  '全端适配': 'Responsive',
  '功能型平台项目': 'Functional Platform',
  '商业刚需': 'Business Core',
  '适合服务平台、私域系统和会员项目。包含用户体系、图片视频存储、交互功能和后台管理。': 'For service platforms, private-domain systems, and membership products with accounts, media storage, interactions, and admin dashboards.',
  '注册登录': 'Auth',
  '权限分级': 'Roles',
  '后台管理': 'Admin',
  '高端 APP / Web3 DApp': 'Premium App / Web3 DApp',
  '差异化高端': 'Premium Custom',
  '面向隐私、安全、链上交互和双端应用。可做钱包连接、链上数据展示、加密存储与脱敏逻辑。': 'For privacy, security, on-chain interactions, and cross-platform apps with wallets, blockchain data, encrypted storage, and masking flows.',
  '双端适配': 'iOS/Android',
  '链上交互': 'On-chain',
  '全栈开发': 'Full-stack Development',
  'APP开发、双端打包、上架部署': 'App development, packaging, store/deployment support',
  '微信小程序 / H5 / 企业官网定制': 'WeChat Mini Program / H5 / business websites',
  '注册登录、个人中心、权限分级': 'Auth, profile center, role permissions',
  '图片、视频、文档云端加密存储': 'Encrypted cloud storage for images, videos, and docs',
  '支付对接与商用收款闭环': 'Payment integration and commercial checkout flow',
  '数据可视化、后台统计、服务器运维': 'Data visualization, admin stats, and server ops',
  'AI视觉创意': 'AI Visual Creative',
  '商业海报、门店活动封面批量精修': 'Commercial posters and shop campaign covers',
  '电商主图、详情页、产品图AI精修': 'E-commerce hero images, detail pages, product retouching',
  '氛围感人像、模特图、原创艺术配图': 'Portrait mood shots, model visuals, original art images',
  'LOGO创意与品牌视觉物料': 'Logo concepts and brand visual materials',
  '固定风格长期代做与高级版式艺术排版': 'Long-term fixed-style output and premium layout design',
  'Web3隐私DApp': 'Web3 Privacy DApp',
  'DApp定制、钱包连接、链上交互': 'DApp customization, wallet connection, on-chain interaction',
  '隐私加密应用、数据脱敏': 'Privacy apps and data masking',
  '去中心化账号与存储系统': 'Decentralized accounts and storage',
  'Web3官网、白皮书配套视觉': 'Web3 websites and whitepaper visuals',
  '智能合约前端与链上数据可视化': 'Contract frontend and on-chain data visualization',
  '本地商家合作': 'Local Business Support',
  '门店宣传物料包月制作': 'Monthly shop marketing visuals',
  '物业通知、社区活动图长期供应': 'Property notices and community event visuals',
  '私域引流小程序、高颜值活动落地页': 'Private traffic mini programs and polished landing pages',
  '对公/对私合作、协议与开票结算': 'Business/personal cooperation, contracts, invoices',
  '6年国网政企级产品开发经验，代码规范、系统稳定': '6 years of enterprise-grade product development with stable, maintainable code',
  '能做真实用户体系、权限管理、图片视频云端存储': 'Real user systems, permissions, and image/video cloud storage',
  '传统互联网开发 + 3年Web3链上开发双赛道': 'Traditional web development plus 3 years of Web3/on-chain work',
  '自带UI视觉设计能力，拒绝廉价粗糙模板': 'Built-in UI and visual design taste, no cheap template feel',
  '一人全栈全包，沟通成本低，响应快': 'One-person full-stack delivery with fast communication',
  'AI视觉高效产出，低成本做出高级宣传物料': 'Efficient AI visuals for premium marketing materials at lower cost',
  '惠州常驻，深圳可面谈，真实可对接': 'Based in Huizhou, available for Shenzhen meetings',
  '价格透明，无中间商溢价': 'Transparent pricing without middleman markup',
  '把门店、个人品牌或民宿做成有审美、有转化路径、手机端也舒服的官网。': 'Turn shops, personal brands, or homestays into beautiful, conversion-focused, mobile-friendly websites.',
  '适合会员系统、私域工具、作品上传、订单表单，重点是真实用户体系和文件留存。': 'For member systems, private tools, uploads, and order forms, focused on real accounts and file retention.',
  '把业务数据、订单、访问、告警做成管理者能一眼看懂的稳定后台。': 'Turn business data, orders, traffic, and alerts into stable dashboards managers can understand quickly.',
  '面向链上项目、隐私加密应用、钱包连接和链上数据可视化。': 'For on-chain projects, privacy apps, wallet connection, and blockchain data visualization.',
  '面向门店、电商、活动宣传，批量做出风格统一的海报、主图和社媒卡片。': 'For shops, e-commerce, and campaigns, producing consistent posters, hero images, and social cards.',
  '艺术极简宣传官网': 'Artistic Minimal Website',
  '展示、地图、联系、艺术排版、移动端适配': 'Showcase, map, contact, art layout, mobile fit',
  '功能型官网 / 小程序': 'Functional Website / Mini Program',
  '用户体系、个人中心、图片视频存储、交互和后台': 'Accounts, profile center, media storage, interactions, admin',
  'AI视觉设计服务': 'AI Visual Design',
  '人像、产品精修、海报、活动物料，套装 99-299元': 'Portraits, product retouching, posters, campaign kits',
  '高端定制开发': 'Premium Custom Development',
  'APP双端、Web3 DApp、隐私加密类项目专属报价': 'Custom quotes for apps, Web3 DApps, privacy projects',
  '长期包月合作': 'Monthly Retainer',
  '门店、物业、公司长期视觉设计与维护迭代': 'Long-term visuals, maintenance, and iteration',
  '政企级开发标准': 'Enterprise-grade standards',
  '全端精细适配': 'Responsive refinement',
  '真实存储交互': 'Real storage interactions',
  '隐私加密能力': 'Privacy encryption',
  '交付透明完整': 'Transparent delivery',
  '线下可面谈': 'Offline meetings'
  ,
  '3屏首访转化': '3-screen first-visit conversion',
  '地图/电话/微信联动': 'Map / phone / WeChat linked',
  '移动端精修': 'Mobile polish',
  '首页视觉与品牌调性': 'Homepage visual direction',
  '服务/房型/作品模块': 'Services / rooms / portfolio modules',
  '地图定位与悬浮联系': 'Map and floating contact',
  'SEO标题与分享卡片': 'SEO title and social cards',
  '手机端细节适配': 'Mobile detail adaptation',
  '账号权限分级': 'Account role permissions',
  '图文视频留存': 'Image/video retention',
  '后台可追踪': 'Trackable admin records',
  '注册登录与个人中心': 'Auth and profile center',
  '图片/视频/文档上传': 'Image/video/document upload',
  '文件状态流转': 'File status workflow',
  '后台管理与权限': 'Admin and permissions',
  '数据安全与部署': 'Data security and deployment',
  '多指标看板': 'Multi-metric dashboard',
  '权限审计': 'Permission audit',
  '稳定部署': 'Stable deployment',
  '指标体系梳理': 'Metric system planning',
  '可视化大屏/后台': 'Visualization screen/admin',
  '筛选查询与导出': 'Filtering, search, export',
  '角色权限管理': 'Role permission management',
  '服务器部署运维': 'Server deployment and ops',
  '钱包连接': 'Wallet connection',
  '隐私脱敏': 'Privacy masking',
  '钱包连接与签名': 'Wallet connection and signing',
  '智能合约前端交互': 'Smart contract frontend interactions',
  '链上数据展示': 'On-chain data display',
  '隐私加密/脱敏流程': 'Privacy encryption/masking flow',
  'Web3项目官网配套': 'Web3 website support',
  '固定风格批量出图': 'Batch output in fixed style',
  '主图/海报/封面': 'Hero images / posters / covers',
  '品牌视觉统一': 'Unified brand visuals',
  '风格方向板': 'Style direction board',
  '海报/封面/主图': 'Posters / covers / hero images',
  '产品图AI精修': 'AI product retouching',
  '社媒传播卡片': 'Social media cards',
  '长期视觉模板': 'Long-term visual templates',
  '确认客户行业、主推服务、转化动作和视觉气质。': 'Confirm industry, core services, conversion actions, and visual tone.',
  '用AI和设计规范整理首屏图、色彩、字体和移动端版式。': 'Use AI and design rules to shape hero visuals, colors, typography, and mobile layout.',
  '完成首页、服务、案例、地图、微信联系和SEO分享卡片。': 'Build homepage, services, cases, map, WeChat contact, SEO and social cards.',
  '部署域名、检查手机端、测试按钮跳转和社交分享。': 'Deploy domain, check mobile layout, buttons, links, and social sharing.',
  '拆客户、管理员、会员等角色，确定权限边界。': 'Split customer, admin, member roles and define permission boundaries.',
  '设计图片/视频/文档上传、状态、审核和存储路径。': 'Design upload, status, review, and storage paths for images, videos, and docs.',
  '搭建数据列表、详情、筛选、权限控制和文件预览。': 'Build data lists, detail views, filters, permissions, and file previews.',
  '完成服务器、存储桶、数据库和后续迭代说明。': 'Deliver server, bucket, database, and future iteration notes.',
  '把业务目标拆成访问、订单、转化、告警等核心指标。': 'Break business goals into traffic, orders, conversion, alerts, and other core metrics.',
  '整理数据来源、接口字段、权限和刷新频率。': 'Organize sources, API fields, permissions, and refresh frequency.',
  '完成趋势图、柱状图、筛选、导出和异常高亮。': 'Build trends, bars, filters, export, and anomaly highlighting.',
  '部署、权限审计、性能检查和使用培训。': 'Deploy, audit permissions, check performance, and train users.',
  '确认链、合约、钱包、签名和交易状态需求。': 'Confirm chain, contract, wallet, signing, and transaction-state needs.',
  '设计连接钱包、授权、写入、失败提示和隐私展示。': 'Design wallet connection, authorization, writes, failure states, and privacy display.',
  '接入合约方法、链上数据、状态轮询和异常处理。': 'Integrate contract methods, on-chain data, status polling, and error handling.',
  '测试网验证、主网参数、域名部署和使用说明。': 'Verify testnet, mainnet parameters, domain deployment, and usage docs.',
  '确认行业、目标客户、参考风格和禁用元素。': 'Confirm industry, target audience, references, and banned elements.',
  '生成产品广告、服装模特、企业海报、社媒封面。': 'Generate product ads, fashion model visuals, enterprise posters, and social covers.',
  '筛选高质量版本，统一色彩、构图和商业版式。': 'Select high-quality versions and unify color, composition, and commercial layout.',
  '整理可复用模板，方便长期包月和批量出图。': 'Create reusable templates for retainers and batch visual output.'
};

const app = document.querySelector('#app');

const getLang = () => localStorage.getItem('lang') || 'zh';
const getTheme = () => localStorage.getItem('theme') || 'light';

function applyShellState() {
  document.documentElement.dataset.theme = getTheme();
  document.documentElement.lang = getLang() === 'en' ? 'en' : 'zh-CN';
}

function tr(text) {
  return getLang() === 'en' ? translations[text] || text : text;
}

function header() {
  return `
    <header class="site-header">
      <a class="brand" href="/" aria-label="回到首页">
        <span>郑逸晗</span>
        <small>Yihan.me</small>
      </a>
      <nav aria-label="主导航">
        <a href="/#templates">${tr('模板')}</a>
        <a href="/#services">${tr('服务')}</a>
        <a href="/#live-projects">${tr('作品')}</a>
        <a href="/#cases">${tr('案例')}</a>
        <a href="/#pricing">${tr('价格')}</a>
        <a href="/#contact">${tr('联系')}</a>
      </nav>
      <div class="header-tools">
        <button class="tool-toggle" id="themeToggle" type="button" aria-label="切换明暗模式">${getTheme() === 'dark' ? '☀' : '☾'}</button>
        <button class="lang-toggle" id="langToggle" type="button" aria-label="切换语言">${getLang() === 'en' ? '中文' : 'EN'}</button>
        <a class="header-cta" href="/#contact">${tr('预约沟通')}</a>
      </div>
    </header>
  `;
}

function footer() {
  return `
    <footer>
      <span>© ${new Date().getFullYear()} 郑逸晗 Yihan</span>
      <a href="https://yihan.me/">yihan.me</a>
    </footer>
    <button class="back-top" id="backTop" type="button" aria-label="回到顶部">↑</button>
  `;
}

function renderHome() {
  app.innerHTML = `
    ${header()}
    <main id="top">
      <section class="hero">
        <div class="hero-art" aria-hidden="true">
          <img class="hero-image" src="/hero-studio.png" alt="" />
          <div class="orb orb-a"></div>
          <div class="orb orb-b"></div>
          <div class="grid-plane"></div>
          <div class="studio-panel"><span></span><span></span><span></span><span></span></div>
        </div>
        <div class="hero-copy reveal">
          <p class="eyebrow">${tr('惠州 · 深圳可线下面谈 / 独立全栈交付')}</p>
          <h1>${tr('全栈独立开发 + AI视觉创意 + Web3隐私DApp')}</h1>
          <p class="lead">${tr('6年政企大数据全栈经验 + 3年Web3链上开发经验，一人包揽设计、开发、运维与上线交付。省钱、高质、可商用、可高密存储。')}</p>
          <div class="hero-actions">
            <a class="primary" href="#contact">${tr('微信沟通')}</a>
            <a class="secondary" href="#cases">${tr('看完整案例')}</a>
          </div>
        </div>
        <div class="portrait-frame hero-portrait reveal delay-1">
          <div class="portrait-grid" aria-hidden="true"></div>
          <img class="portrait-base" src="/yihan-portrait-base.webp" alt="郑逸晗肖像" />
          <div class="portrait-copy portrait-copy-base">
            <span>郑</span>
            <span>逸晗</span>
          </div>
          <a class="x-link x-link-base" href="https://x.com/love2580x" target="_blank" rel="noreferrer" aria-label="Twitter / X">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2.25h3.28l-7.16 8.19 8.42 11.31h-6.6l-5.17-6.87-5.92 6.87H2.47l7.66-8.9L2.06 2.25h6.76l4.67 6.26 5.41-6.26Zm-1.15 17.5h1.82L7.82 4.15H5.87l11.88 15.6Z"/></svg>
          </a>
          <div class="portrait-caption">
            <span>${tr('交互肖像')}</span>
            <p>${tr('数据驱动 · 创意交付 · Web3 隐私应用')}</p>
          </div>
        </div>
      </section>

      <section class="marquee-wrap" aria-label="技能标签">
        <div class="marquee">${[...skills, ...skills].map(skill => `<span>${tr(skill)}</span>`).join('')}</div>
      </section>

      <section class="spline-stage-wide" aria-label="${tr('3D智能体')}">
        <div class="spline-copy">
          <span>${tr('3D智能体')}</span>
          <h2>${tr('把复杂系统做成可感知、可交互、可上线的商业产品。')}</h2>
          <p>${tr('数据驱动 · 创意交付 · Web3 隐私应用')}</p>
        </div>
        <div class="spline-canvas">
          <div class="spline-fallback" aria-hidden="true">
            <div class="fallback-orbit"><span></span><span></span><span></span></div>
            <div class="fallback-bot">
              <div class="fallback-head"><i></i><b></b><b></b></div>
              <div class="fallback-body"><span></span><span></span><span></span></div>
            </div>
          </div>
          <spline-viewer url="https://prod.spline.design/D36xBgWByY-hIdIP/scene.splinecode"></spline-viewer>
        </div>
        <div class="robot-tags spline-tags">
          <span>Spline 3D</span>
          <span>${tr('数据核心')}</span>
          <span>${tr('视觉生成')}</span>
          <span>${tr('链上交互')}</span>
        </div>
      </section>

      <section id="about" class="section about">
        <div class="section-kicker">About</div>
        <div>
          <h2>${tr('我叫郑逸晗。')}</h2>
          <p>${tr('我是资深独立全栈开发者、UI视觉设计师、Web3区块链开发工程师。长期深耕政企产品设计、前后端全栈开发、大数据处理、商业化项目全流程管理，也能承接去中心化应用、隐私加密和链上交互相关项目。')}</p>
          <p>${tr('我的工作方式很直接：需求梳理、UI艺术设计、后端程序开发、用户账号体系、图文视频云端存储、交互逻辑、部署上线、支付或链上交互，尽量在一个稳定闭环里完成。')}</p>
        </div>
        <div class="about-note">
          <span>${tr('坐标')}</span>
          <a href="#contact">${tr('广东惠州华润小径湾，紧邻深圳')}</a>
          <small>${tr('可承接深惠两地线下面谈、上门对接项目。')}</small>
        </div>
      </section>

      <section id="templates" class="section">
        <div class="section-head">
          <div><div class="section-kicker">Project Types</div><h2>${tr('客户可以直接选择的项目类型')}</h2></div>
          <p>${tr('从低预算展示，到功能平台，再到 Web3 / APP 高端定制，先把范围讲清楚，报价和交付就不会扯皮。')}</p>
        </div>
        <div class="template-grid">
          ${templates.map((item, index) => `
            <article class="template-card ${index === 1 ? 'featured' : ''}" tabindex="0">
              <span class="badge">${tr(item.badge)}</span>
              <h3>${tr(item.title)}</h3>
              <p>${tr(item.desc)}</p>
              <div class="template-price">${item.price}</div>
              <div class="mini-tags">${item.items.map(tag => `<span>${tr(tag)}</span>`).join('')}</div>
            </article>
          `).join('')}
        </div>
      </section>

      <section id="services" class="section services">
        <div class="section-head">
          <div><div class="section-kicker">Services</div><h2>${tr('服务列表')}</h2></div>
          <p>${tr('服务按实际交付拆分，客户能看懂，也方便后续组合套餐。')}</p>
        </div>
        <div class="service-grid">
          ${services.map(service => `
            <article class="service-card">
              <div class="service-index">${service.accent}</div>
              <h3>${tr(service.group)}</h3>
              <ul>${service.items.map(item => `<li>${tr(item)}</li>`).join('')}</ul>
            </article>
          `).join('')}
        </div>
      </section>

      <section id="visuals" class="section visual-showcase">
        <div class="section-head">
          <div><div class="section-kicker">AI Visuals</div><h2>${tr('AI视觉行业案例')}</h2></div>
          <p>${tr('产品广告、服装模特、企业海报、潮流社媒图，都可以快速生成并精修成可商用视觉物料。')}</p>
        </div>
        <div class="visual-grid">
          ${visualShowcase.map(([image, title, label, desc], index) => `
            <article class="visual-card ${index === 0 ? 'large' : ''}">
              <img src="/${image}" alt="${title}" loading="lazy" />
              <div><span>${label}</span><h3>${tr(title)}</h3><p>${tr(desc)}</p></div>
            </article>
          `).join('')}
        </div>
      </section>

      <section id="live-projects" class="section live-projects">
        <div class="section-head">
          <div><div class="section-kicker">Live Work</div><h2>${tr('真实上线项目')}</h2></div>
          <p>${tr('这里放的是已经上线的真实站点截图，客户可以直接点击访问原项目，比单纯概念图更有信任感。')}</p>
        </div>
        <div class="real-project-grid">
          ${realProjects.map((project, index) => `
            <a class="real-project-card ${index === 0 ? 'wide' : ''}" href="${project.url}" target="_blank" rel="noreferrer">
              <div class="real-project-shot">
                <img src="/${project.image}" alt="${project.title}" loading="lazy" />
              </div>
              <div class="real-project-body">
                <span>${project.label}</span>
                <h3>${tr(project.title)}</h3>
                <p>${tr(project.desc)}</p>
                <div class="mini-tags">${project.tags.map(tag => `<em>${tr(tag)}</em>`).join('')}</div>
                <strong>${tr('访问项目')} -></strong>
              </div>
            </a>
          `).join('')}
        </div>
      </section>

      <section id="advantages" class="section advantages">
        <div class="section-kicker">Why Me</div>
        <h2>${tr('不是只会做页面，是能把商业系统跑起来。')}</h2>
        <div class="advantage-list">
          ${advantages.map((item, index) => `<div><span>${String(index + 1).padStart(2, '0')}</span>${tr(item)}</div>`).join('')}
        </div>
      </section>

      <section id="cases" class="section cases">
        <div class="section-head">
          <div><div class="section-kicker">Cases</div><h2>${tr('案例展示区')}</h2></div>
          <p>${tr('每个案例都有独立子页面：完整展示交付范围、交互 Demo、流程和适合客户类型。')}</p>
        </div>
        <div class="case-filters" role="tablist" aria-label="案例分类">
          <button class="active" data-filter="all">${getLang() === 'en' ? 'All' : '全部'}</button>
          <button data-filter="tech">${getLang() === 'en' ? 'Website' : '官网'}</button>
          <button data-filter="platform">${getLang() === 'en' ? 'Platform' : '平台'}</button>
          <button data-filter="data">${getLang() === 'en' ? 'Data' : '数据'}</button>
          <button data-filter="web3">Web3</button>
          <button data-filter="ai">${getLang() === 'en' ? 'AI Visual' : 'AI视觉'}</button>
        </div>
        <div class="case-grid">
          ${caseStudies.map(item => `
            <a class="case-card" href="/cases/${item.slug}" data-type="${item.type}">
              <span class="case-open">${tr('查看完整案例')}</span>
              <img src="/${item.cardImage}" alt="${item.title}演示图" loading="lazy" />
              <div>
                <h3>${tr(item.title)}</h3>
                <p>${tr(item.desc)}</p>
              </div>
            </a>
          `).join('')}
        </div>
      </section>

      <section id="pricing" class="section pricing">
        <div class="section-kicker">Pricing</div>
        <h2>${tr('合作价格参考')}</h2>
        <div class="price-table">
          <div><strong>${tr('艺术极简宣传官网')}</strong><span>800-1500元</span><small>${tr('展示、地图、联系、艺术排版、移动端适配')}</small></div>
          <div><strong>${tr('功能型官网 / 小程序')}</strong><span>1800-3500元</span><small>${tr('用户体系、个人中心、图片视频存储、交互和后台')}</small></div>
          <div><strong>${tr('AI视觉设计服务')}</strong><span>20-50元/张</span><small>${tr('人像、产品精修、海报、活动物料，套装 99-299元')}</small></div>
          <div><strong>${tr('高端定制开发')}</strong><span>${getLang() === 'en' ? 'Custom quote' : '按需评估'}</span><small>${tr('APP双端、Web3 DApp、隐私加密类项目专属报价')}</small></div>
          <div><strong>${tr('长期包月合作')}</strong><span>${getLang() === 'en' ? 'Negotiable' : '优惠面议'}</span><small>${tr('门店、物业、公司长期视觉设计与维护迭代')}</small></div>
        </div>
      </section>

      <section class="section guarantees">
        <div class="section-head"><div><div class="section-kicker">Guarantees</div><h2>${tr('服务保障')}</h2></div></div>
        <div class="guarantee-grid">
          ${['政企级开发标准', '全端精细适配', '真实存储交互', '隐私加密能力', '交付透明完整', '线下可面谈'].map(item => `<span>${tr(item)}</span>`).join('')}
        </div>
      </section>

      ${contactSection()}
    </main>
    ${footer()}
  `;
}

function contactSection() {
  return `
    <section id="contact" class="contact">
      <div>
        <div class="section-kicker">Contact</div>
        <h2>${tr('项目想法可以先微信发我，适合就直接拆需求。')}</h2>
        <p>${tr('服务范围：惠州全域 + 深圳全城可线下对接面谈。地址模块可直接跳转地图搜索。')}</p>
        <div class="contact-actions">
          <button id="copyWechat" type="button">${tr('复制微信：loveinslife')}</button>
          <a href="tel:1760347432">${tr('拨打电话：1760347432')}</a>
          <a target="_blank" rel="noreferrer" href="https://uri.amap.com/search?keyword=%E5%8D%8E%E6%B6%A6%E5%B0%8F%E5%BE%84%E6%B9%BE%E5%90%AC%E6%B5%B7%E8%BD%A9&city=%E6%83%A0%E5%B7%9E">${tr('打开地图：华润小径湾听海轩')}</a>
        </div>
        <p class="copy-status" aria-live="polite"></p>
      </div>
      <figure class="qr-card">
        <img src="/wechat-qr.jpg" alt="郑逸晗微信二维码" />
        <figcaption>${tr('微信扫码添加 · loveinslife')}</figcaption>
      </figure>
    </section>
  `;
}

function renderCasePage(study) {
  document.title = `${study.title}｜郑逸晗 Yihan 案例`;
  app.innerHTML = `
    ${header()}
    <main class="case-page">
      <section class="case-hero-detail">
        <div>
          <a class="back-link" href="/#cases">${tr('返回案例列表')}</a>
          <p class="eyebrow">${study.eyebrow}</p>
          <h1>${tr(study.title)}</h1>
          <p class="lead">${tr(study.desc)}</p>
          <div class="hero-actions">
            <a class="primary" href="/#contact">${tr('咨询这个方向')}</a>
            <a class="secondary" href="#live-demo">${tr('看交互演示')}</a>
          </div>
        </div>
        <figure class="case-visual">
          <img src="/${study.image}" alt="${study.title}主视觉" />
        </figure>
      </section>

      <section class="case-metrics">
        ${study.metrics.map(metric => `<div><span>${tr(metric)}</span></div>`).join('')}
      </section>

      <section id="live-demo" class="case-detail-grid">
        <aside>
          <div class="section-kicker">Deliverables</div>
          <h2>${tr('实际能交付什么')}</h2>
          <ul class="check-list">${study.deliverables.map(item => `<li>${tr(item)}</li>`).join('')}</ul>
        </aside>
        ${demoPanel(study.demo)}
      </section>

      <section class="case-process section visible">
        <div class="section-head">
          <div><div class="section-kicker">Workflow</div><h2>${tr('从想法到上线的流程')}</h2></div>
          <p>${tr('按真实项目推进，不只是做一张好看的图，而是把客户能用、能改、能传播的东西交出去。')}</p>
        </div>
        <div class="process-grid">
          ${study.process.map((item, index) => `<div><span>${String(index + 1).padStart(2, '0')}</span><strong>${tr(item)}</strong></div>`).join('')}
        </div>
      </section>

      <section class="related-cases section visible">
        <div class="section-kicker">More Cases</div>
        <h2>${tr('继续看其他能力')}</h2>
        <div class="related-grid">
          ${caseStudies.filter(item => item.slug !== study.slug).map(item => `<a href="/cases/${item.slug}"><span>${item.eyebrow}</span><strong>${tr(item.title)}</strong></a>`).join('')}
        </div>
      </section>

      ${contactSection()}
    </main>
    ${footer()}
  `;
}

function demoPanel(type) {
  const flow = workflowSteps[type].map(([title], index) => `
    <button class="${index === 0 ? 'active' : ''}" data-flow-step="${index}" type="button">
      <span>${String(index + 1).padStart(2, '0')}</span>${tr(title)}
    </button>
  `).join('');
  const first = workflowSteps[type][0];
  const flowShell = `
    <div class="flow-demo" data-flow="${type}">
      <div class="flow-tabs">${flow}</div>
      <div class="flow-screen">
        <span>01</span>
        <h3>${tr(first[0])}</h3>
        <p>${tr(first[1])}</p>
      </div>
    </div>
  `;
  const panels = {
    website: `
      <div class="case-demo website-demo-panel">
        ${flowShell}
        <div class="browser-chrome"><i></i><i></i><i></i><span>xiaojingbay.studio</span></div>
        <div class="site-preview">
          <div class="site-preview-hero">
            <strong>听海小径湾</strong>
            <p>海景民宿 · 活动预订 · 地图导航</p>
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
      <div class="case-demo platform-demo-panel">
        ${flowShell}
        <div class="upload-board">
          <div class="upload-progress"><i></i></div>
          <ul>
            <li class="done">账号校验完成</li>
            <li class="active">视频上传中</li>
            <li>自动生成缩略图</li>
            <li>后台审核可见</li>
          </ul>
          <button class="demo-action" data-action="upload">模拟上传完成</button>
        </div>
        <div class="admin-mini">
          <span>Admin</span><b>128</b><small>今日新增素材</small>
        </div>
      </div>
    `,
    dashboard: `
      <div class="case-demo dashboard-demo-panel">
        ${flowShell}
        <div class="dash-head"><span>实时业务看板</span><b>98.7%</b></div>
        <div class="bars">${[42, 68, 54, 88, 76, 96, 64].map(v => `<i style="--h:${v}%"></i>`).join('')}</div>
        <div class="dash-cards"><div>访问增长 +32%</div><div>订单转化 8.4%</div><div>告警 0</div></div>
      </div>
    `,
    web3: `
      <div class="case-demo web3-demo-panel">
        ${flowShell}
        <div class="chain-orbit"><b></b><b></b><b></b><b></b><strong>Encrypted</strong></div>
        <div class="wallet-card">
          <span>Wallet</span>
          <strong>0x71...9AF2</strong>
          <button class="demo-action" data-action="web3">连接钱包</button>
        </div>
      </div>
    `,
    ai: `
      <div class="case-demo ai-demo-panel">
        ${flowShell}
        <div class="poster-preview">
          <span>Campaign Kit</span>
          <strong>商业视觉</strong>
          <small>海报 / 主图 / 社媒卡 / 活动封面</small>
        </div>
        <div class="palette-buttons">
          <button data-theme="jade">青绿</button>
          <button data-theme="amber">暖金</button>
          <button data-theme="ink">墨色</button>
        </div>
      </div>
    `
  };

  return panels[type];
}

function bindCommonInteractions() {
  applyShellState();

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

  document.querySelector('#themeToggle')?.addEventListener('click', () => {
    localStorage.setItem('theme', getTheme() === 'dark' ? 'light' : 'dark');
    rerenderCurrentPage();
  });

  document.querySelector('#langToggle')?.addEventListener('click', () => {
    localStorage.setItem('lang', getLang() === 'en' ? 'zh' : 'en');
    rerenderCurrentPage();
  });

  const backTop = document.querySelector('#backTop');
  window.addEventListener('scroll', () => {
    backTop?.classList.toggle('visible', window.scrollY > 680);
  }, { passive: true });
  backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  document.querySelector('#copyWechat')?.addEventListener('click', async () => {
    const status = document.querySelector('.copy-status');
    try {
      await navigator.clipboard.writeText('loveinslife');
      status.textContent = '已复制微信号 loveinslife';
    } catch {
      status.textContent = '微信号：loveinslife';
    }
  });

  initSplineViewerSizing();

  document.addEventListener('click', event => {
    const target = event.target.closest('button');
    if (!target) return;

    if (target.dataset.action === 'upload') {
      document.querySelector('.upload-board')?.classList.toggle('uploaded');
      target.textContent = target.textContent.includes('完成') ? '重新演示上传' : '模拟上传完成';
    }

    if (target.dataset.action === 'web3') {
      document.querySelector('.chain-orbit')?.classList.toggle('connected');
      target.textContent = target.textContent === '连接钱包' ? '已连接 · 模拟写入' : '连接钱包';
    }

    if (target.dataset.theme) {
      document.querySelector('.poster-preview')?.setAttribute('data-theme', target.dataset.theme);
    }

    if (target.dataset.flowStep) {
      const flowRoot = target.closest('.flow-demo');
      const steps = workflowSteps[flowRoot.dataset.flow];
      const index = Number(target.dataset.flowStep);
      flowRoot.querySelectorAll('.flow-tabs button').forEach(button => button.classList.remove('active'));
      target.classList.add('active');
      flowRoot.querySelector('.flow-screen').innerHTML = `
        <span>${String(index + 1).padStart(2, '0')}</span>
        <h3>${tr(steps[index][0])}</h3>
        <p>${tr(steps[index][1])}</p>
      `;
    }
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.section, .reveal').forEach(el => observer.observe(el));
}

function initSplineViewerSizing() {
  const viewer = document.querySelector('spline-viewer');
  if (!viewer) return;

  const sync = () => {
    const rect = viewer.getBoundingClientRect();
    const canvas = viewer.shadowRoot?.querySelector('canvas');
    const container = viewer.shadowRoot?.querySelector('#container');
    if (container) {
      container.style.width = '100%';
      container.style.height = '100%';
    }
    if (canvas && rect.width > 0 && rect.height > 0) {
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.width = Math.round(rect.width * window.devicePixelRatio);
      canvas.height = Math.round(rect.height * window.devicePixelRatio);
    }
  };

  sync();
  window.setTimeout(sync, 500);
  window.setTimeout(sync, 1800);
  window.setTimeout(sync, 4200);
  new ResizeObserver(sync).observe(viewer);
}

function rerenderCurrentPage() {
  const current = window.location.pathname.match(/^\/cases\/([^/]+)\/?$/);
  const currentStudy = current ? caseStudies.find(item => item.slug === current[1]) : null;
  if (currentStudy) {
    renderCasePage(currentStudy);
  } else {
    renderHome();
  }
  bindCommonInteractions();
}

const match = window.location.pathname.match(/^\/cases\/([^/]+)\/?$/);
const study = match ? caseStudies.find(item => item.slug === match[1]) : null;

applyShellState();

if (study) {
  renderCasePage(study);
} else {
  renderHome();
}

bindCommonInteractions();
