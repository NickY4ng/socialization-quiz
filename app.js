const app = {
    currentQuestion: 0,
    answers: [],
    questions: [
        {
            type: "情景题",
            text: "你在电梯里遇到了公司CEO，只有你们两个人。你会：",
            dimension: "social",
            options: [
                { text: "低头玩手机，假装没看到他", score: 1 },
                { text: "微笑点头，但不知道说什么", score: 2 },
                { text: "主动打招呼并简单聊两句天气", score: 4 },
                { text: "自然地问候，并提及一个工作进展", score: 5 }
            ]
        },
        {
            type: "情景题",
            text: "朋友在朋友圈发了张明显P过度的自拍，评论区都在夸。你会：",
            dimension: "emotion",
            options: [
                { text: "直接评论'P得太过分了吧'", score: 1 },
                { text: "默默点赞，什么都不说", score: 3 },
                { text: "私信调侃'这滤镜开得有点猛啊'", score: 4 },
                { text: "评论'美美美'，心里吐槽", score: 2 }
            ]
        },
        {
            type: "价值观排序",
            text: "以下四种品质，你最看重哪个？",
            dimension: "self",
            options: [
                { text: "真诚坦率，不拐弯抹角", score: 3 },
                { text: "圆滑世故，谁都不得罪", score: 2 },
                { text: "有实力，用能力说话", score: 4 },
                { text: "高情商，让大家都舒服", score: 5 }
            ]
        },
        {
            type: "情景题",
            text: "同事在会议上公开质疑你的方案，你会：",
            dimension: "emotion",
            options: [
                { text: "当场反驳，据理力争", score: 2 },
                { text: "沉默不语，会后找他说", score: 3 },
                { text: "感谢他的意见，表示会考虑", score: 5 },
                { text: "承认自己考虑不周，请求大家补充", score: 4 }
            ]
        },
        {
            type: "行为偏好",
            text: "周末你更倾向于：",
            dimension: "social",
            options: [
                { text: "宅家，谁也别找我", score: 1 },
                { text: "和一两个好友小聚", score: 4 },
                { text: "参加聚会认识新朋友", score: 5 },
                { text: "看情况，偶尔出门", score: 3 }
            ]
        },
        {
            type: "规则理解",
            text: "群里有人发了个明显是谣言的消息，你会：",
            dimension: "rules",
            options: [
                { text: "直接转发辟谣链接打脸", score: 2 },
                { text: "私聊群主提醒", score: 4 },
                { text: "假装没看到", score: 1 },
                { text: "委婉地说'这个好像不太对'", score: 5 }
            ]
        },
        {
            type: "情景题",
            text: "你请朋友吃饭，结账时他坚持AA，你会：",
            dimension: "social",
            options: [
                { text: "坚持自己付，显得大方", score: 3 },
                { text: "同意AA，但心里不舒服", score: 2 },
                { text: "笑着说'下次你请'，然后AA", score: 5 },
                { text: "直接接受，各付各的", score: 4 }
            ]
        },
        {
            type: "图形选择",
            text: "如果社交关系是一张网，你觉得自己更像：",
            dimension: "self",
            options: [
                { text: "网中心的蜘蛛", score: 5 },
                { text: "网上的一个节点", score: 3 },
                { text: "网边缘的支线", score: 2 },
                { text: "偶尔粘在网上飞虫", score: 1 }
            ]
        },
        {
            type: "情境判断",
            text: "朋友失恋找你倾诉，重复说了N遍同样的话，你会：",
            dimension: "context",
            options: [
                { text: "打断他，给解决方案", score: 2 },
                { text: "继续听着，偶尔附和", score: 4 },
                { text: "找借口结束通话", score: 1 },
                { text: "适时引导他转移注意力", score: 5 }
            ]
        },
        {
            type: "情景题",
            text: "你发消息给喜欢的人，已读不回，你会：",
            dimension: "emotion",
            options: [
                { text: "连环追问'在吗？'", score: 1 },
                { text: "等24小时再发一次", score: 2 },
                { text: "算了，不发了", score: 3 },
                { text: "发个有趣的内容再试一次", score: 5 }
            ]
        },
        {
            type: "行为偏好",
            text: "进入陌生聚会，你通常会：",
            dimension: "social",
            options: [
                { text: "找个角落坐下刷手机", score: 1 },
                { text: "等别人来搭话", score: 2 },
                { text: "主动找看起来友好的人聊天", score: 4 },
                { text: "自然地加入任何对话", score: 5 }
            ]
        },
        {
            type: "规则理解",
            text: "领导在群里发了个明显错误的通知，你会：",
            dimension: "rules",
            options: [
                { text: "当众指出错误", score: 1 },
                { text: "私聊提醒", score: 5 },
                { text: "按错误执行，出了问题再说", score: 2 },
                { text: "委婉在群里补充正确信息", score: 4 }
            ]
        },
        {
            type: "情景题",
            text: "朋友问你'我胖了吗？'，你觉得TA确实胖了，你会：",
            dimension: "context",
            options: [
                { text: "实话实说'是胖了点'", score: 2 },
                { text: "撒谎说'没有啊'", score: 3 },
                { text: "说'健康最重要，一起运动吧'", score: 5 },
                { text: "转移话题", score: 4 }
            ]
        },
        {
            type: "价值观排序",
            text: "以下哪种社交场景最让你焦虑？",
            dimension: "self",
            options: [
                { text: "公开演讲", score: 2 },
                { text: "和陌生人闲聊", score: 3 },
                { text: "拒绝别人的请求", score: 4 },
                { text: "参加正式晚宴", score: 1 }
            ]
        },
        {
            type: "情景题",
            text: "同事抢了你的功劳在领导面前表现，你会：",
            dimension: "emotion",
            options: [
                { text: "当场揭穿", score: 1 },
                { text: "事后找领导说明", score: 3 },
                { text: "找机会在会议上自然提及自己的贡献", score: 5 },
                { text: "忍气吞声，下次注意", score: 2 }
            ]
        },
        {
            type: "情境判断",
            text: "朋友聚餐选餐厅，有人提议你不喜欢的地方，你会：",
            dimension: "context",
            options: [
                { text: "直接说'那家不好吃'", score: 2 },
                { text: "附和大家的决定", score: 3 },
                { text: "推荐另一家更好的", score: 4 },
                { text: "说'我都行，看大家'", score: 5 }
            ]
        },
        {
            type: "规则理解",
            text: "家族群里长辈发了条养生谣言，你会：",
            dimension: "rules",
            options: [
                { text: "转发辟谣文章", score: 2 },
                { text: "私聊提醒长辈", score: 5 },
                { text: "假装没看到", score: 3 },
                { text: "委婉说'这个可能不太科学'", score: 4 }
            ]
        },
        {
            type: "行为偏好",
            text: "你更认同哪种社交哲学？",
            dimension: "self",
            options: [
                { text: "君子之交淡如水", score: 3 },
                { text: "多个朋友多条路", score: 4 },
                { text: "质量胜于数量", score: 5 },
                { text: "独处也挺好", score: 2 }
            ]
        }
    ],

    levels: [
        { min: 0, max: 30, emoji: "👶", title: "社会婴儿", desc: "你还处在社交的襁褓期，连基本的社交规则都不太懂。建议：多观察身边高情商的人是怎么说话的，少说话多微笑。" },
        { min: 31, max: 45, emoji: "🎒", title: "社交学徒", desc: "你已经开始学习社交技巧了，但经常踩雷。建议：说话前先过过脑子，学会换位思考。" },
        { min: 46, max: 55, emoji: "😐", title: "普通社畜", desc: "你的社交能力及格了，能应付日常场景，但缺乏亮点。建议：培养一两个擅长的社交场景，建立自信。" },
        { min: 56, max: 65, emoji: "😎", title: "社交达人", desc: "你在社交场合游刃有余，大多数人喜欢和你相处。建议：保持真诚，不要过于圆滑。" },
        { min: 66, max: 75, emoji: "🦊", title: "情商狐狸", desc: "你深谙人情世故，懂得什么时候说什么话。建议：偶尔也展现真实的一面，不要总戴着面具。" },
        { min: 76, max: 85, emoji: "🧙", title: "社交魔法师", desc: "你能让任何场合变得舒适，是人群中的粘合剂。建议：注意别让自己太累，学会拒绝。" },
        { min: 86, max: 90, emoji: "👑", title: "社会哲学家", desc: "你已经达到了社交的化境，既能保持自我又能让所有人舒服。建议：收几个徒弟吧！" }
    ],

    tips: {
        emotion: [
            "情绪上头时，先深呼吸数10秒再回应",
            "学会识别自己的情绪触发点",
            "写日记记录情绪变化规律"
        ],
        social: [
            "每周主动发起一次社交邀约",
            "记住新朋友的名字和喜好",
            "练习3分钟电梯演讲自我介绍"
        ],
        rules: [
            "观察不同场合的'潜规则'",
            "学会读懂空气，看场合说话",
            "了解你所在行业的社交礼仪"
        ],
        self: [
            "定期做自我反思，了解自己的优缺点",
            "接受不完美，不必讨好所有人",
            "建立个人边界，学会说'不'"
        ],
        context: [
            "说话前观察对方的情绪状态",
            "根据关系亲疏调整说话方式",
            "培养察言观色的敏感度"
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
        
        document.getElementById('result-level').textContent = level.emoji;
        document.getElementById('result-title').textContent = level.title;
        document.getElementById('result-desc').textContent = level.desc;
        
        // 维度得分
        const dimensions = [
            { id: 'dim-emotion', key: 'emotion', name: '情绪管理' },
            { id: 'dim-social', key: 'social', name: '社交技巧' },
            { id: 'dim-rules', key: 'rules', name: '规则理解' },
            { id: 'dim-self', key: 'self', name: '自我认知' },
            { id: 'dim-context', key: 'context', name: '情境判断' }
        ];
        
        dimensions.forEach(dim => {
            const score = counts[dim.key] > 0 ? Math.round(scores[dim.key] / counts[dim.key] * 20) : 0;
            const el = document.getElementById(dim.id);
            el.querySelector('.dim-fill').style.width = score + '%';
            el.querySelector('.dim-score').textContent = score;
        });
        
        // 升级建议
        const weakestDim = Object.keys(scores).reduce((a, b) => 
            (counts[a] > 0 ? scores[a] / counts[a] : 999) < (counts[b] > 0 ? scores[b] / counts[b] : 999) ? a : b
        );
        
        const tips = this.tips[weakestDim];
        const tipsHtml = `
            <h3>💪 升级建议</h3>
            <ul>
                ${tips.map(t => `<li>${t}</li>`).join('')}
            </ul>
        `;
        document.getElementById('upgrade-tips').innerHTML = tipsHtml;
        
        // 分享文案
        const shareText = `我在「社交力大考验」中获得了「${level.title}」称号！${level.emoji}\n\n测测你的社会化程度：${window.location.href}`;
        document.getElementById('share-text').textContent = shareText;
        
        this.showPage('result-page');
    },

    copyResult() {
        const text = document.getElementById('share-text').textContent;
        navigator.clipboard.writeText(text).then(() => {
            const btn = document.querySelector('.btn-copy');
            btn.textContent = '已复制！';
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
