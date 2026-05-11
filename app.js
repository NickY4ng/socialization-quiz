const app = {
    currentQuestion: 0,
    answers: [],
    questions: [
        {
            type: "无厘头",
            text: "此题没有题目，请盲选。",
            dimension: "self",
            options: [
                { text: "反复思考后感觉应该选A", score: 3 },
                { text: "不会就选C", score: 2 },
                { text: "我偏要选D，主打一个叛逆", score: 1 },
                { text: "这道题在嘲讽我，我选最长的", score: 4 }
            ]
        },
        {
            type: "地狱情景",
            text: "周一早上8:55，你走进公司电梯，发现CEO一个人在里面。电梯要运行30秒。",
            dimension: "social",
            options: [
                { text: "低头狂刷手机，假装在回重要消息", score: 2 },
                { text: "早…早啊领导！今天天气哈哈哈…（尬住）", score: 3 },
                { text: "微笑点头，然后安静如鸡", score: 4 },
                { text: "领导，我刚想到一个能省200万的方案！（其实昨晚现编的）", score: 5 },
                { text: "直接按下所有楼层按钮：这样大家都能到", score: 1 }
            ]
        },
        {
            type: "社交修罗场",
            text: "朋友发了张明显P过度的自拍，评论区都在夸'仙女'。你会：",
            dimension: "emotion",
            options: [
                { text: "评论：这滤镜开得，我妈都认不出", score: 1 },
                { text: "默默点赞，心里翻白眼", score: 3 },
                { text: "私信：宝，你本人比照片好看多了", score: 4 },
                { text: "评论：美美美，然后截图发闺蜜群", score: 2 },
                { text: "认真评论：第三张的鼻梁阴影有点重", score: 5 }
            ]
        },
        {
            type: "当代困境",
            text: "你发消息给喜欢的人，显示已读，但2小时没回。你会：",
            dimension: "emotion",
            options: [
                { text: "连环追问：在吗？在干嘛？为什么不回我？", score: 1 },
                { text: "发朋友圈仅TA可见：有些人，已读不回", score: 2 },
                { text: "算了，删除对话框，假装没发过", score: 3 },
                { text: "发个表情包试探：是不是被绑架了？", score: 4 },
                { text: "2小时后再发一条有趣的内容，就当刚才没发过", score: 5 }
            ]
        },
        {
            type: "灵魂拷问",
            text: "周末晚上11点，老板在工作群@你：这个方案再改一版，明早要用。你正在打游戏/追剧/躺平。你会：",
            dimension: "rules",
            options: [
                { text: "秒回：好的领导，马上改（然后边哭边改）", score: 2 },
                { text: "已读不回，假装睡着了", score: 3 },
                { text: "回复：收到，明早8点前给您（然后设6点的闹钟）", score: 4 },
                { text: "领导，我电脑坏了，正在去网吧的路上（其实根本没动）", score: 1 },
                { text: "直接打电话：领导，这个需求咱们周一对齐下？", score: 5 }
            ]
        },
        {
            type: "人情世故",
            text: "很久没联系的同学突然微信你：在吗？（你知道他要借钱）",
            dimension: "social",
            options: [
                { text: "装作没看到，等24小时再回", score: 3 },
                { text: "直接回：不在，借钱免谈", score: 1 },
                { text: "回：在的，最近怎么样？（先聊感情再谈钱）", score: 4 },
                { text: "回：在，不过最近手头紧，帮不上忙", score: 5 },
                { text: "回：在，需要多少？（然后借完拉黑）", score: 2 }
            ]
        },
        {
            type: "饭局地狱",
            text: "领导在饭局上端起酒杯对你说：小李啊，最近辛苦了，这杯我敬你。",
            dimension: "rules",
            options: [
                { text: "受宠若惊，一饮而尽，然后开始语无伦次", score: 2 },
                { text: "领导，我应该敬您，怎么能让您敬我呢（套路）", score: 3 },
                { text: "站起来：领导，这杯我敬您，感谢您栽培", score: 5 },
                { text: "领导，我酒精过敏，以茶代酒吧", score: 1 },
                { text: "微笑着举杯：谢谢领导，我干了", score: 4 }
            ]
        },
        {
            type: "社交面具",
            text: "如果社交场合必须戴一种面具，你会选：",
            dimension: "self",
            options: [
                { text: "微笑面具：永远点头微笑，内心毫无波澜", score: 3 },
                { text: "搞笑面具：我是气氛组，不搞笑会死", score: 4 },
                { text: "透明面具：爱谁谁，老子就这样", score: 1 },
                { text: "变色龙面具：见人说人话，见鬼说鬼话", score: 5 },
                { text: "隐身面具：能躲就躲，躲不了就装死", score: 2 }
            ]
        },
        {
            type: "当代社交",
            text: "你发朋友圈的动机通常是：",
            dimension: "self",
            options: [
                { text: "记录生活，以后翻着看", score: 3 },
                { text: "精心策划，人设不能崩", score: 4 },
                { text: "随手一发，发完就忘", score: 2 },
                { text: "为了引起某个人的注意", score: 1 },
                { text: "我几乎不发朋友圈", score: 5 }
            ]
        },
        {
            type: "摆烂现场",
            text: "朋友失恋找你倾诉，第5遍重复同样的话。你会：",
            dimension: "context",
            options: [
                { text: "耐心听完，然后一起骂前任", score: 4 },
                { text: "宝，咱们吃点好的去，别想了", score: 5 },
                { text: "你上次说到哪了？（其实根本没在听）", score: 2 },
                { text: "直接打断：分都分了，说点开心的", score: 1 },
                { text: "找借口溜了：我突然有个会", score: 3 }
            ]
        },
        {
            type: "职场生存",
            text: "同事在领导面前抢了你的功劳，你会：",
            dimension: "emotion",
            options: [
                { text: "当场揭穿：这个方案是我做的", score: 1 },
                { text: "会后找领导不经意提及", score: 4 },
                { text: "忍气吞声，下次自己注意", score: 2 },
                { text: "在群里发：感谢XX帮我完善方案", score: 5 },
                { text: "记在小本本上，秋后算账", score: 3 }
            ]
        },
        {
            type: "社交能量",
            text: "周五晚上，你更倾向于：",
            dimension: "social",
            options: [
                { text: "宅家，手机静音，谁都别找我", score: 1 },
                { text: "和一两个好友吃顿好的", score: 4 },
                { text: "去蹦迪/唱K，释放一周压力", score: 3 },
                { text: "参加 networking，拓展人脉", score: 5 },
                { text: "在家刷剧，但微信秒回", score: 2 }
            ]
        },
        {
            type: "拒绝艺术",
            text: "朋友邀请你参加一个你完全不感兴趣的聚会，你会：",
            dimension: "social",
            options: [
                { text: "直接说：我不想去，太无聊了", score: 1 },
                { text: "那天我有事（其实没事）", score: 3 },
                { text: "我可能晚点去（然后不去）", score: 2 },
                { text: "这个场合我不太适应，下次约饭吧", score: 5 },
                { text: "答应去，全程玩手机", score: 4 }
            ]
        },
        {
            type: "群聊战场",
            text: "工作群里有人发了条明显错误的通知，你会：",
            dimension: "rules",
            options: [
                { text: "立即@所有人：这个不对", score: 1 },
                { text: "私聊发通知的人提醒", score: 5 },
                { text: "假装没看到，等别人发现", score: 3 },
                { text: "在群里委婉补充正确信息", score: 4 },
                { text: "截图发闺蜜群吐槽", score: 2 }
            ]
        },
        {
            type: "亲戚问答",
            text: "过年回家，亲戚问：一个月挣多少啊？有对象了吗？",
            dimension: "context",
            options: [
                { text: "如实回答，然后被一顿教育", score: 2 },
                { text: "够花，正在找（万能答案）", score: 4 },
                { text: "阿姨，您儿子/女儿怎么样了？", score: 5 },
                { text: "低头扒饭，假装没听见", score: 1 },
                { text: "提前准备了一套标准话术", score: 3 }
            ]
        },
        {
            type: "情绪管理",
            text: "你刚被领导当众批评，回到工位。你会：",
            dimension: "emotion",
            options: [
                { text: "立刻发朋友圈吐槽（仅同事不可见）", score: 2 },
                { text: "去楼梯间深呼吸，平复心情", score: 4 },
                { text: "找闺蜜/兄弟疯狂输出", score: 3 },
                { text: "直接打开招聘软件", score: 1 },
                { text: "冷静分析，找领导私下沟通", score: 5 }
            ]
        },
        {
            type: "价值观",
            text: "你最认同的社交哲学是：",
            dimension: "self",
            options: [
                { text: "真诚是必杀技，但容易杀死自己", score: 3 },
                { text: "多个朋友多条路，但路太多会迷路", score: 4 },
                { text: "质量胜于数量，但高质量的太难找", score: 5 },
                { text: "独处也挺好，但偶尔想找人说话", score: 2 },
                { text: "社交是什么？能吃吗？", score: 1 }
            ]
        },
        {
            type: "隐藏题",
            text: "如果你看到这里还没放弃，说明你：",
            dimension: "self",
            options: [
                { text: "太无聊了，反正没事干", score: 3 },
                { text: "想看看自己到底有多沙雕", score: 4 },
                { text: "被朋友逼着测的", score: 2 },
                { text: "认真想了解自己（虽然这个测试很不靠谱）", score: 5 },
                { text: "手滑点进来的", score: 1 }
            ]
        }
    ],

    levels: [
        { min: 0, max: 30, emoji: "🧟", title: "究极社恐·见光死", rarity: 3, desc: "你的社交能量值为负，出门见到活人就想遁地。建议：别勉强自己，互联网才是你的家。", tagline: "生人勿近，熟人更是" },
        { min: 31, max: 45, emoji: "🤖", title: "职场丧尸·只会嗯嗯", rarity: 8, desc: "你已经掌握了职场生存的基础技能：嗯嗯、好的、收到。但除此之外，你的大脑基本处于待机状态。", tagline: "活着，但只剩本能" },
        { min: 46, max: 55, emoji: "🐒", title: "吗喽·复制粘贴型人格", rarity: 15, desc: "你像只吗喽，别人做什么你学什么，社交话术全靠复制粘贴。没有原创能力，但模仿得挺像。", tagline: "没有感情，全是技巧" },
        { min: 56, max: 65, emoji: "✨", title: "精致穷·表面光鲜型", rarity: 22, desc: "你看起来人模人样，实际上社交账户余额不足。能应付场面，但内心每天都在想'这局什么时候结束'。", tagline: "表面风光，内心慌张" },
        { min: 66, max: 75, emoji: "🔥", title: "社交悍匪·见人说人话", rarity: 28, desc: "你是社交场上的悍匪，见人说人话见鬼说鬼话。偶尔翻车，但总体战绩辉煌。", tagline: "没有我聊不死的天" },
        { min: 76, max: 85, emoji: "🦊", title: "老狐狸·CPU大师", rarity: 18, desc: "你已经进化成社交食物链顶端，能CPU别人还不留痕迹。但小心，太会了容易没朋友。", tagline: "我在第五层，你在地下室" },
        { min: 86, max: 90, emoji: "🧙", title: "社交仙人·已臻化境", rarity: 6, desc: "返璞归真，大智若愚。看似随意，实则每一步都算好了。终极境界：让人如沐春风，还觉得你是个老实人。", tagline: "无招胜有招，无形最致命" }
    ],

    dimensionNames: {
        emotion: { name: "破防指数", icon: "💔" },
        social: { name: "装熟能力", icon: "🤝" },
        rules: { name: "摸鱼智商", icon: "🧠" },
        self: { name: "自知之明", icon: "🪞" },
        context: { name: "读空气能力", icon: "🌪️" }
    },

    tips: {
        emotion: [
            "破防的时候先数10秒，别当场发作",
            "找到自己的'情绪开关'，提前避雷",
            "写日记不是为了复盘，是为了骂完人爽一下"
        ],
        social: [
            "每周主动约一次人，练胆",
            "记住别人名字，这是最低成本的装熟",
            "电梯里遇到CEO，微笑点头就够了，别编200万方案"
        ],
        rules: [
            "潜规则不是规则，但不懂会死",
            "学会'读懂空气'，比读懂文件重要",
            "每个行业的社交礼仪都不一样，别跨行硬套"
        ],
        self: [
            "承认自己不行，比硬撑舒服多了",
            "不必讨好所有人，你又不是人民币",
            "建立边界，学会说'不'——先从拒绝加班开始"
        ],
        context: [
            "说话前先看对方脸色，别自说自话",
            "关系远近决定说话方式，别对谁都掏心掏肺",
            "察言观色是本能，练多了就成精了"
        ]
    },

    startQuiz() {
        this.currentQuestion = 0;
        this.answers = [];
        this.showPage('quiz-page');
        this.renderQuestion();
    },

    showPage(pageId) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById(pageId).classList.add('active');
    },

    renderQuestion() {
        const q = this.questions[this.currentQuestion];
        const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;
        
        document.getElementById('progress-fill').style.width = progress + '%';
        document.getElementById('current-num').textContent = this.currentQuestion + 1;
        document.getElementById('total-num').textContent = this.questions.length;
        document.getElementById('question-type').textContent = q.type;
        document.getElementById('question-text').textContent = q.text;
        
        const optionsHtml = q.options.map((opt, idx) => 
            `<button class="option" data-label="${String.fromCharCode(65 + idx)}" onclick="app.selectOption(${idx})">${opt.text}</button>`
        ).join('');
        
        document.getElementById('options').innerHTML = optionsHtml;
        
        // 重新触发动画
        const card = document.getElementById('question-card');
        card.style.animation = 'none';
        setTimeout(() => card.style.animation = 'slideIn 0.4s ease', 10);
    },

    selectOption(idx) {
        const q = this.questions[this.currentQuestion];
        this.answers.push({
            dimension: q.dimension,
            score: q.options[idx].score
        });
        
        // 选中效果
        const options = document.querySelectorAll('.option');
        options.forEach((opt, i) => {
            opt.classList.toggle('selected', i === idx);
        });
        
        // 延迟进入下一题
        setTimeout(() => {
            this.currentQuestion++;
            if (this.currentQuestion < this.questions.length) {
                this.renderQuestion();
            } else {
                this.showResult();
            }
        }, 300);
    },

    showResult() {
        const scores = {
            emotion: 0, social: 0, rules: 0, self: 0, context: 0
        };
        const counts = {
            emotion: 0, social: 0, rules: 0, self: 0, context: 0
        };
        
        this.answers.forEach(a => {
            scores[a.dimension] += a.score;
            counts[a.dimension]++;
        });
        
        const totalScore = this.answers.reduce((sum, a) => sum + a.score, 0);
        const maxScore = this.questions.length * 5;
        const percentage = (totalScore / maxScore) * 100;
        
        // 找到对应等级
        const level = this.levels.find(l => percentage >= (l.min / 90 * 100) && percentage <= (l.max / 90 * 100)) || this.levels[0];
        
        // 稀缺感：基于rarity生成"全国仅X%"
        const rarityText = `全国仅${level.rarity}%的人是这种物种`;
        const beatText = `你击败了${Math.min(99, Math.round(percentage))}%的测试者`;
        
        document.getElementById('result-level').textContent = level.emoji;
        document.getElementById('result-title').textContent = level.title;
        document.getElementById('result-desc').textContent = level.desc;
        
        // 新增tagline、rarity、beat显示
        const taglineEl = document.getElementById('result-tagline');
        const rarityEl = document.getElementById('result-rarity');
        const beatEl = document.getElementById('result-beat');
        if (taglineEl) taglineEl.textContent = level.tagline;
        if (rarityEl) rarityEl.textContent = rarityText;
        if (beatEl) beatEl.textContent = beatText;
        
        // 维度得分 - 使用梗化名
        const dimensions = [
            { id: 'dim-emotion', key: 'emotion' },
            { id: 'dim-social', key: 'social' },
            { id: 'dim-rules', key: 'rules' },
            { id: 'dim-self', key: 'self' },
            { id: 'dim-context', key: 'context' }
        ];
        
        dimensions.forEach(dim => {
            const score = counts[dim.key] > 0 ? Math.round(scores[dim.key] / counts[dim.key] * 20) : 0;
            const el = document.getElementById(dim.id);
            el.querySelector('.dim-fill').style.width = score + '%';
            el.querySelector('.dim-score').textContent = score;
            // 更新维度名为梗化名
            const dimInfo = this.dimensionNames[dim.key];
            const nameEl = el.querySelector('.dim-name');
            if (nameEl) nameEl.textContent = `${dimInfo.icon} ${dimInfo.name}`;
        });
        
        // 升级建议 - 梗化维度名
        const weakestDim = Object.keys(scores).reduce((a, b) => 
            (counts[a] > 0 ? scores[a] / counts[a] : 999) < (counts[b] > 0 ? scores[b] / counts[b] : 999) ? a : b
        );
        
        const tips = this.tips[weakestDim];
        const dimInfo = this.dimensionNames[weakestDim];
        const tipsHtml = `
            <h3>💪 ${dimInfo.icon} ${dimInfo.name} 急需充值</h3>
            <ul>
                ${tips.map(t => `<li>${t}</li>`).join('')}
            </ul>
        `;
        document.getElementById('upgrade-tips').innerHTML = tipsHtml;
        
        // 攻击性分享文案
        const shareText = `测完发现自己是个「${level.title}」${level.emoji}\n${level.tagline}\n\n全国仅${level.rarity}%的人跟我一样，你呢？👇\n${window.location.href}`;
        document.getElementById('share-text').textContent = shareText;
        
        this.showPage('result-page');
    },

    copyResult() {
        const text = document.getElementById('share-text').textContent;
        navigator.clipboard.writeText(text).then(() => {
            const btn = document.querySelector('.btn-copy');
            btn.textContent = '已复制！去朋友圈装X吧';
            btn.classList.add('copied');
            setTimeout(() => {
                btn.textContent = '复制文案';
                btn.classList.remove('copied');
            }, 2000);
        });
    },

    restart() {
        this.showPage('home-page');
    }
};