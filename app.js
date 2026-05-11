const app = {
    currentQuestion: 0,
    answers: [],
    questions: [
        {
            type: "无厘头",
            text: "此题没有题目，请盲选。",
            dimension: "self",
            options: [
                { text: "反复思考后感觉应该选A", score: 4 },
                { text: "不会就选C", score: 3 },
                { text: "我偏要选D，主打一个叛逆", score: 2 },
                { text: "这道题在嘲讽我，我选最长的", score: 5 }
            ]
        },
        {
            type: "地狱情景",
            text: "周一早上8:55，你走进公司电梯，发现CEO一个人在里面。电梯要运行30秒。",
            dimension: "social",
            options: [
                { text: "低头狂刷手机，假装在回重要消息", score: 2 },
                { text: "早…早啊领导！今天天气哈哈哈…（尬住）", score: 3 },
                { text: "微笑点头，然后安静如鸡", score: 5 },
                { text: "领导，我刚想到一个能省200万的方案！（其实昨晚现编的）", score: 7 }
            ]
        },
        {
            type: "社交修罗场",
            text: "朋友发了张明显P过度的自拍，评论区都在夸'仙女'。你会：",
            dimension: "emotion",
            options: [
                { text: "评论：这滤镜开得，我妈都认不出", score: 1 },
                { text: "默默点赞，心里翻白眼", score: 3 },
                { text: "私信：宝，你本人比照片好看多了", score: 6 },
                { text: "评论：美美美，然后截图发闺蜜群", score: 2 }
            ]
        },
        {
            type: "当代困境",
            text: "你发消息给喜欢的人，显示已读，但2小时没回。你会：",
            dimension: "emotion",
            options: [
                { text: "连环追问：在吗？在干嘛？为什么不回我？", score: 1 },
                { text: "发朋友圈仅TA可见：有些人，已读不回", score: 2 },
                { text: "算了，删除对话框，假装没发过", score: 4 },
                { text: "2小时后再发一条有趣的内容，就当刚才没发过", score: 7 }
            ]
        },
        {
            type: "灵魂拷问",
            text: "周末晚上11点，老板在工作群@你：这个方案再改一版，明早要用。你正在打游戏/追剧/躺平。你会：",
            dimension: "rules",
            options: [
                { text: "秒回：好的领导，马上改（然后边哭边改）", score: 2 },
                { text: "已读不回，假装睡着了", score: 4 },
                { text: "回复：收到，明早8点前给您（然后设6点的闹钟）", score: 5 },
                { text: "直接打电话：领导，这个需求咱们周一对齐下？", score: 7 }
            ]
        },
        {
            type: "人情世故",
            text: "很久没联系的同学突然微信你：在吗？（你知道他要借钱）",
            dimension: "social",
            options: [
                { text: "装作没看到，等24小时再回", score: 3 },
                { text: "直接回：不在，借钱免谈", score: 1 },
                { text: "回：在的，最近怎么样？（先聊感情再谈钱）", score: 6 },
                { text: "回：在，不过最近手头紧，帮不上忙", score: 5 }
            ]
        },
        {
            type: "饭局地狱",
            text: "领导在饭局上端起酒杯对你说：小李啊，最近辛苦了，这杯我敬你。",
            dimension: "rules",
            options: [
                { text: "受宠若惊，一饮而尽，然后开始语无伦次", score: 2 },
                { text: "领导，我应该敬您，怎么能让您敬我呢（套路）", score: 4 },
                { text: "站起来：领导，这杯我敬您，感谢您栽培", score: 7 },
                { text: "微笑着举杯：谢谢领导，我干了", score: 5 }
            ]
        },
        {
            type: "社交面具",
            text: "如果社交场合必须戴一种面具，你会选：",
            dimension: "self",
            options: [
                { text: "微笑面具：永远点头微笑，内心毫无波澜", score: 3 },
                { text: "搞笑面具：我是气氛组，不搞笑会死", score: 6 },
                { text: "透明面具：爱谁谁，老子就这样", score: 1 },
                { text: "变色龙面具：见人说人话，见鬼说鬼话", score: 7 }
            ]
        },
        {
            type: "当代社交",
            text: "你发朋友圈的动机通常是：",
            dimension: "self",
            options: [
                { text: "记录生活，以后翻着看", score: 3 },
                { text: "精心策划，人设不能崩", score: 6 },
                { text: "随手一发，发完就忘", score: 2 },
                { text: "我几乎不发朋友圈", score: 5 }
            ]
        },
        {
            type: "摆烂现场",
            text: "朋友失恋找你倾诉，第5遍重复同样的话。你会：",
            dimension: "context",
            options: [
                { text: "耐心听完，然后一起骂前任", score: 5 },
                { text: "宝，咱们吃点好的去，别想了", score: 6 },
                { text: "你上次说到哪了？（其实根本没在听）", score: 2 },
                { text: "直接打断：分都分了，说点开心的", score: 1 }
            ]
        },
        {
            type: "职场生存",
            text: "同事在领导面前抢了你的功劳，你会：",
            dimension: "emotion",
            options: [
                { text: "当场揭穿：这个方案是我做的", score: 1 },
                { text: "会后找领导不经意提及", score: 5 },
                { text: "忍气吞声，下次自己注意", score: 2 },
                { text: "在群里发：感谢XX帮我完善方案", score: 7 }
            ]
        },
        {
            type: "社交能量",
            text: "周五晚上，你更倾向于：",
            dimension: "social",
            options: [
                { text: "宅家，手机静音，谁都别找我", score: 1 },
                { text: "和一两个好友吃顿好的", score: 6 },
                { text: "去蹦迪/唱K，释放一周压力", score: 4 },
                { text: "参加 networking，拓展人脉", score: 7 }
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
                { text: "这个场合我不太适应，下次约饭吧", score: 6 }
            ]
        },
        {
            type: "群聊战场",
            text: "工作群里有人发了条明显错误的通知，你会：",
            dimension: "rules",
            options: [
                { text: "立即@所有人：这个不对", score: 1 },
                { text: "私聊发通知的人提醒", score: 7 },
                { text: "假装没看到，等别人发现", score: 3 },
                { text: "在群里委婉补充正确信息", score: 5 }
            ]
        },
        {
            type: "亲戚问答",
            text: "过年回家，亲戚问：一个月挣多少啊？有对象了吗？",
            dimension: "context",
            options: [
                { text: "如实回答，然后被一顿教育", score: 2 },
                { text: "够花，正在找（万能答案）", score: 4 },
                { text: "阿姨，您儿子/女儿怎么样了？", score: 7 },
                { text: "低头扒饭，假装没听见", score: 1 }
            ]
        },
        {
            type: "情绪管理",
            text: "你刚被领导当众批评，回到工位。你会：",
            dimension: "emotion",
            options: [
                { text: "立刻发朋友圈吐槽（仅同事不可见）", score: 2 },
                { text: "去楼梯间深呼吸，平复心情", score: 5 },
                { text: "找闺蜜/兄弟疯狂输出", score: 3 },
                { text: "冷静分析，找领导私下沟通", score: 7 }
            ]
        },
        {
            type: "价值观",
            text: "你最认同的社交哲学是：",
            dimension: "self",
            options: [
                { text: "真诚是必杀技，但容易杀死自己", score: 3 },
                { text: "多个朋友多条路，但路太多会迷路", score: 5 },
                { text: "质量胜于数量，但高质量的太难找", score: 6 },
                { text: "社交是什么？能吃吗？", score: 1 }
            ]
        },
        {
            type: "隐藏题",
            text: "如果你看到这里还没放弃，说明你：",
            dimension: "self",
            options: [
                { text: "太无聊了，反正没事干", score: 3 },
                { text: "想看看自己到底有多沙雕", score: 5 },
                { text: "被朋友逼着测的", score: 2 },
                { text: "认真想了解自己（虽然这个测试很不靠谱）", score: 6 }
            ]
        }
    ],

    // 16个等级，中段细分8个，区分明显
    levels: [
        { min: 18, max: 28, emoji: "👻", title: "社交幽灵·人间蒸发", rarity: 1, 
          desc: "你已经达到了社交的终极形态：不存在。",
          tagline: "查无此人，勿扰",
          anatomy: "你的社交账户余额为负数，连'已读不回'都懒得操作。朋友发消息给你，三天后你才想起回个'嗯'。你不是社恐，你是'社灭'——社交能力已经灭绝。你的微信置顶是文件传输助手，朋友圈三天可见是因为根本没什么可见的。你参加聚会的方式是：答应去，然后当天消失。别人问起，你说'忘了'。你不是忘了，你是根本不想记得。" },
        { min: 29, max: 36, emoji: "🧟", title: "究极社恐·见光死", rarity: 3, 
          desc: "你的社交能量值为负，出门见到活人就想遁地。",
          tagline: "生人勿近，熟人更是",
          anatomy: "你的社交模式是'应激性装死'——遇到熟人立刻低头看手机，遇到领导转身去厕所，遇到前任直接打车回家。你的微信好友500人，常聊的3个，其中2个是家人。你最怕的不是鬼，是电梯里遇到同事。你的理想社交场景是：隔着屏幕，不用露脸，说完就下线。你不是不想社交，你是社交一次需要缓三天。" },
        { min: 37, max: 44, emoji: "🤖", title: "职场丧尸·只会嗯嗯", rarity: 5, 
          desc: "你已经掌握了职场生存的基础技能：嗯嗯、好的、收到。",
          tagline: "活着，但只剩本能",
          anatomy: "你的大脑在社交场合处于待机模式，所有反应都是条件反射。领导说'辛苦了'，你说'应该的'；同事说'周末加班'，你说'收到'；HR说'团建必须参加'，你说'好的'。你没有喜怒哀乐，只有'嗯''好''收到'三个表情。你的灵魂已经出窍，只剩躯壳在工位上机械运转。你不是在上班，你是在被上班。" },
        { min: 45, max: 50, emoji: "🙈", title: "自闭儿童·已读乱回", rarity: 7, 
          desc: "你想社交，但每次都搞砸。",
          tagline: "努力过了，真的",
          anatomy: "你有社交的意愿，但没有社交的能力。朋友问你'最近怎么样'，你回'还行'然后冷场；想夸人好看，说出口变成'你今天化妆了？'；想活跃气氛，讲了个笑话全场沉默。你不是不想融入，你是融入的方式总是错的。你的社交状态就像WiFi信号——满格，但连不上。" },
        // 中段细分开始：吗喽拆3个
        { min: 51, max: 54, emoji: "🐵", title: "初级吗喽·跟风狗", rarity: 8, 
          desc: "你开始模仿别人的社交方式，但模仿得很拙劣。",
          tagline: "别人做什么我做什么",
          anatomy: "你是社交界的'复读机初级版'——别人发什么你发什么，但总是慢半拍。别人用'绝绝子'，你第二天才用；别人换头像，你一周后换同款。你的朋友圈是'二手信息集散地'，所有内容都是转发+1。你不是没有想法，你是不知道自己的想法是什么。" },
        { min: 55, max: 58, emoji: "🐒", title: "中级吗喽·复制粘贴", rarity: 9, 
          desc: "你已经掌握了复制粘贴的精髓，社交话术全靠盗用。",
          tagline: "没有感情，全是技巧",
          anatomy: "你是社交界的'Ctrl+C/V大师'——别人说什么你说什么，连语气词都复制。你的表情包是盗的，你的文案是抄的，你的观点是微博热评。遇到没见过的场景，你就僵住，等别人先动，然后复制。你不是在社交，你是在'社交cosplay'，而且 costume 还是租的。" },
        { min: 59, max: 62, emoji: "🦍", title: "高级吗喽·人形Siri", rarity: 10, 
          desc: "你已经进化成'社交AI'，所有回应都是预设程序。",
          tagline: "正在思考如何回应…",
          anatomy: "你是社交界的'ChatGPT早期版本'——能应付80%的场景，但剩下的20%直接死机。你的社交策略是'关键词触发'：听到'辛苦'回'应该的'，听到'周末'回'有约了'，听到'借钱'回'手头紧'。你有100种标准答案，但没有一种原创想法。你不是在聊天，你是在'运行脚本'。" },
        // 精致穷拆3个
        { min: 63, max: 66, emoji: "💳", title: "精致穷·信用卡透支", rarity: 11, 
          desc: "你的社交账户已经透支，但还在硬撑。",
          tagline: "刷爆社交信用卡",
          anatomy: "你是社交界的'月光族'——每个月的社交额度在月初就用完了。你答应参加聚会时很爽快，但聚会前一天就开始焦虑。你的朋友圈精心策划，但点赞的人你都记不得是谁。你不是社恐，你是'社懒'——懒得应付，但不得不应付。" },
        { min: 67, max: 70, emoji: "✨", title: "精致穷·表面光鲜", rarity: 12, 
          desc: "你看起来人模人样，实际上内心每天都在想'这局什么时候结束'。",
          tagline: "表面风光，内心慌张",
          anatomy: "你是社交界的'精装修房'——外表光鲜亮丽，内部电线乱接。每次聚会前都要做心理建设，聚会中疯狂计算'还有多久可以溜'，聚会后复盘自己哪句话说错了。你擅长在饭局上微笑点头，但内心已经神游到外太空。你不是在享受社交，你是在'完成KPI'。" },
        { min: 71, max: 74, emoji: "🎭", title: "精致穷·演技派", rarity: 10, 
          desc: "你已经把'假装很享受'练到了极致。",
          tagline: "人生如戏，全靠演技",
          anatomy: "你是社交界的'老戏骨'——每个表情都是设计好的，每句话都是排练过的。你能让人如沐春风，但内心毫无波澜；你能记住所有人的喜好，但只是为了'用得着'；你能在酒桌上谈笑风生，但回家后一句话不想说。你不是在交朋友，你是在'交作业'，而且每次作业都拿A+。" },
        // 场面混子拆2个
        { min: 75, max: 78, emoji: "🤹", title: "场面混子·勉强及格", rarity: 9, 
          desc: "你能应付大多数场面，但偶尔还是会翻车。",
          tagline: "混一天是一天",
          anatomy: "你是社交界的'临时工'——能干活，但随时可能出错。你能在小场面游刃有余，但大场面直接宕机。你的社交技能是'够用就行'，不追求精通，只追求不翻车。你不是不想进步，你是觉得'现在这样也挺好的'。" },
        { min: 79, max: 82, emoji: "🎪", title: "场面混子·老油条", rarity: 8, 
          desc: "你已经混出了经验，知道什么时候该装傻什么时候该出头。",
          tagline: "混也是一种境界",
          anatomy: "你是社交界的'资深混子'——知道什么时候该说话，什么时候该闭嘴，什么时候该装傻，什么时候该出头。你从不主动承担责任，但功劳总能分一杯羹。你不是没有能力，你是选择'性价比最高'的方式。你的座右铭：'多做多错，少做少错，不做不错'。" },
        // 高分段
        { min: 83, max: 88, emoji: "🔥", title: "社交悍匪·见人说人话", rarity: 6, 
          desc: "你是社交场上的悍匪，见人说人话见鬼说鬼话。",
          tagline: "没有我聊不死的天",
          anatomy: "你是社交界的'土匪头子'——走到哪抢到哪，话题、气氛、注意力，全都要。你能跟保洁阿姨聊家常，跟CEO聊战略，跟00后聊梗。你的社交武器库里有100种开场白、50种接话技巧、20种脱身借口。你偶尔翻车，但总体战绩辉煌。你不是在聊天，你是在'社交抢劫'——每次见面都要带走点什么。" },
        { min: 89, max: 94, emoji: "🦊", title: "老狐狸·CPU大师", rarity: 4, 
          desc: "你已经进化成社交食物链顶端，能CPU别人还不留痕迹。",
          tagline: "我在第五层，你在地下室",
          anatomy: "你是社交界的'幕后黑手'——从不亲自下场，但每场戏都有你的剧本。你能让人心甘情愿为你做事，还觉得自己赚了。你的每句话都有三层意思，每个表情都是精心计算。你不是在交朋友，你是在'养人脉'——像种菜一样，浇水施肥，等收割。你的社交成本极低，但社交收益极高。太会了，容易没朋友，但你不在乎。" },
        { min: 95, max: 100, emoji: "🧙", title: "社交仙人·已臻化境", rarity: 2, 
          desc: "返璞归真，大智若愚。让人如沐春风，还觉得你是个老实人。",
          tagline: "无招胜有招，无形最致命",
          anatomy: "你已经达到了社交的'无我境界'——看似随意，实则每一步都算好了。你不刻意讨好任何人，但所有人都喜欢你；你不主动争取任何东西，但好东西都往你这边来。你的社交风格是'润物细无声'——别人感觉不到你在社交，但已经被你征服了。你不是在经营人脉，你是人脉本身。" },
        { min: 101, max: 106, emoji: "👑", title: "社交之神·降维打击", rarity: 0.5, 
          desc: "你已经超越了社交的范畴，进入了'操控人心'的领域。",
          tagline: "我不是在聊天，我是在施法",
          anatomy: "你是社交界的'灭霸'——打个响指，半个朋友圈都来帮你。你不需要社交技巧，因为社交规则是你写的。你能让人在不知不觉中按照你的意愿行事，还觉得自己是自愿的。你不是在交朋友，你是在'收信徒'。你的存在本身就是社交货币，跟你吃过饭可以吹三年。你已经不是人了，你是社交现象。" },
        { min: 107, max: 126, emoji: "🌌", title: "社交奇点·不可名状", rarity: 0.1, 
          desc: "你的社交能力已经超出了人类的理解范围。",
          tagline: "我即社交，社交即我",
          anatomy: "你已经不是社交能力强不强的问题了——你是社交本身。你不需要说话，一个眼神就能让全场安静；你不需要主动，所有人都会来找你；你不需要维护关系，关系会自动围绕你运转。你的社交状态是'量子态'——同时存在于所有社交场合，又不在任何一个场合。你已经超越了社交，进入了'社交玄学'的领域。科学家正在研究你。" }
    ],

    dimensionNames: {
        emotion: { name: "破防指数", icon: "💔" },
        social: { name: "装熟能力", icon: "🤝" },
        rules: { name: "摸鱼智商", icon: "🧠" },
        self: { name: "自知之明", icon: "🪞" },
        context: { name: "读空气能力", icon: "🌪️" }
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
        
        const options = document.querySelectorAll('.option');
        options.forEach((opt, i) => {
            opt.classList.toggle('selected', i === idx);
        });
        
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
        const maxScore = this.questions.reduce((sum, q) => sum + Math.max(...q.options.map(o => o.score)), 0);
        const percentage = (totalScore / maxScore) * 100;
        
        const level = this.levels.find(l => totalScore >= l.min && totalScore <= l.max) || this.levels[0];
        
        const rarityText = `全国仅${level.rarity}%的人是这种物种`;
        const beatText = `你击败了${Math.min(99, Math.round(percentage))}%的测试者`;
        
        document.getElementById('result-level').textContent = level.emoji;
        document.getElementById('result-title').textContent = level.title;
        document.getElementById('result-desc').textContent = level.desc;
        
        const taglineEl = document.getElementById('result-tagline');
        const rarityEl = document.getElementById('result-rarity');
        const beatEl = document.getElementById('result-beat');
        if (taglineEl) taglineEl.textContent = level.tagline;
        if (rarityEl) rarityEl.textContent = rarityText;
        if (beatEl) beatEl.textContent = beatText;
        
        const anatomyEl = document.getElementById('result-anatomy');
        if (anatomyEl) anatomyEl.textContent = level.anatomy;
        
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
            const dimInfo = this.dimensionNames[dim.key];
            const nameEl = el.querySelector('.dim-name');
            if (nameEl) nameEl.textContent = `${dimInfo.icon} ${dimInfo.name}`;
        });
        
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