const questions = [
    // 第一部分 - 问题 1-26
    {
        id: 1,
        text: "当你要外出一整天，你会",
        options: [
            { text: "A 计划你要做什么和在什么时候做", value: "J" },
            { text: "B 说去就去", value: "P" }
        ]
    },
    {
        id: 2,
        text: "你认为自己是一个",
        options: [
            { text: "A 较为随兴所至的人", value: "P" },
            { text: "B 较为有条理的人", value: "J" }
        ]
    },
    {
        id: 3,
        text: "假如你是一位老师，你会选教",
        options: [
            { text: "A 以事实为主的课程", value: "S" },
            { text: "B 涉及理论的课程", value: "N" }
        ]
    },
    {
        id: 4,
        text: "你通常",
        options: [
            { text: "A 与人容易混熟", value: "E" },
            { text: "B 比较沉静或矜持", value: "I" }
        ]
    },
    {
        id: 5,
        text: "一般来说，你和哪些人比较合得来？",
        options: [
            { text: "A 富于想象力的人", value: "N" },
            { text: "B 现实的人", value: "S" }
        ]
    },
    {
        id: 6,
        text: "你是否经常让",
        options: [
            { text: "A 你的情感支配你的理智", value: "F" },
            { text: "B 你的理智主宰你的情感", value: "T" }
        ]
    },
    {
        id: 7,
        text: "处理许多事情上，你会喜欢",
        options: [
            { text: "A 凭兴所至行事", value: "P" },
            { text: "B 按照计划行事", value: "J" }
        ]
    },
    {
        id: 8,
        text: "你是否",
        options: [
            { text: "A 容易让人了解", value: "E" },
            { text: "B 难于让人了解", value: "I" }
        ]
    },
    {
        id: 9,
        text: "按照程序表做事",
        options: [
            { text: "A 合你心意", value: "J" },
            { text: "B 令你感到束缚", value: "P" }
        ]
    },
    {
        id: 10,
        text: "当你有一份特别的任务，你会喜欢",
        options: [
            { text: "A 开始前小心组织计划", value: "J" },
            { text: "B 边做边找须做什么", value: "P" }
        ]
    },
    {
        id: 11,
        text: "在大多数情况下，你会选择",
        options: [
            { text: "A 顺其自然", value: "P" },
            { text: "B 按程序表做事", value: "J" }
        ]
    },
    {
        id: 12,
        text: "大多数人会说你是一个",
        options: [
            { text: "A 重视自我隐私的人", value: "I" },
            { text: "B 非常坦率开放的人", value: "E" }
        ]
    },
    {
        id: 13,
        text: "你宁愿被人认为是一个",
        options: [
            { text: "A 实事求是的人", value: "S" },
            { text: "B 机灵的人", value: "N" }
        ]
    },
    {
        id: 14,
        text: "在一大群人当中，通常是",
        options: [
            { text: "A 你介绍大家认识", value: "E" },
            { text: "B 别人介绍你", value: "I" }
        ]
    },
    {
        id: 15,
        text: "你会跟哪些人做朋友？",
        options: [
            { text: "A 常提出新注意的", value: "N" },
            { text: "B 脚踏实地的", value: "S" }
        ]
    },
    {
        id: 16,
        text: "你倾向",
        options: [
            { text: "A 重视感情多于逻辑", value: "F" },
            { text: "B 重视逻辑多于感情", value: "T" }
        ]
    },
    {
        id: 17,
        text: "你比较喜欢",
        options: [
            { text: "A 坐观事情发展才作计划", value: "P" },
            { text: "B 很早就作计划", value: "J" }
        ]
    },
    {
        id: 18,
        text: "你喜欢花很多的时间",
        options: [
            { text: "A 一个人独处", value: "I" },
            { text: "B 合别人在一起", value: "E" }
        ]
    },
    {
        id: 19,
        text: "与很多人一起会",
        options: [
            { text: "A 令你活力培增", value: "E" },
            { text: "B 常常令你心力憔悴", value: "I" }
        ]
    },
    {
        id: 20,
        text: "你比较喜欢",
        options: [
            { text: "A 很早便把约会、社交聚集等事情安排妥当", value: "J" },
            { text: "B 无拘无束，看当时有什么好玩就做什么", value: "P" }
        ]
    },
    {
        id: 21,
        text: "计划一个旅程时，你较喜欢",
        options: [
            { text: "A 大部分的时间都是跟当天的感觉行事", value: "P" },
            { text: "B 事先知道大部分的日子会做什么", value: "J" }
        ]
    },
    {
        id: 22,
        text: "在社交聚会中，你",
        options: [
            { text: "A 有时感到郁闷", value: "I" },
            { text: "B 常常乐在其中", value: "E" }
        ]
    },
    {
        id: 23,
        text: "你通常",
        options: [
            { text: "A 和别人容易混熟", value: "E" },
            { text: "B 趋向自处一隅", value: "I" }
        ]
    },
    {
        id: 24,
        text: "哪些人会更吸引你？",
        options: [
            { text: "A 一个思想敏捷及非常聪颖的人", value: "N" },
            { text: "B 实事求是，具丰富常识的人", value: "S" }
        ]
    },
    {
        id: 25,
        text: "在日常工作中，你会",
        options: [
            { text: "A 颇为喜欢处理迫使你分秒必争的突发", value: "P" },
            { text: "B 通常预先计划，以免要在压力下工作", value: "J" }
        ]
    },
    {
        id: 26,
        text: "你认为别人一般",
        options: [
            { text: "A 要花很长时间才认识你", value: "I" },
            { text: "B 用很短的时间便认识你", value: "E" }
        ]
    },

    // 第二部分 - 问题 27-58
    {
        id: 27,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 注重隐私", value: "I" },
            { text: "B 坦率开放", value: "E" }
        ]
    },
    {
        id: 28,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 预先安排的", value: "J" },
            { text: "B 无计划的", value: "P" }
        ]
    },
    {
        id: 29,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 抽象", value: "N" },
            { text: "B 具体", value: "S" }
        ]
    },
    {
        id: 30,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 温柔", value: "F" },
            { text: "B 坚定", value: "T" }
        ]
    },
    {
        id: 31,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 思考", value: "T" },
            { text: "B 感受", value: "F" }
        ]
    },
    {
        id: 32,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 事实", value: "S" },
            { text: "B 意念", value: "N" }
        ]
    },
    {
        id: 33,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 冲动", value: "P" },
            { text: "B 决定", value: "J" }
        ]
    },
    {
        id: 34,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 热衷", value: "E" },
            { text: "B 文静", value: "I" }
        ]
    },
    {
        id: 35,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 文静", value: "I" },
            { text: "B 外向", value: "E" }
        ]
    },
    {
        id: 36,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 有系统", value: "J" },
            { text: "B 随意", value: "P" }
        ]
    },
    {
        id: 37,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 理论", value: "N" },
            { text: "B 肯定", value: "S" }
        ]
    },
    {
        id: 38,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 敏感", value: "F" },
            { text: "B 公正", value: "T" }
        ]
    },
    {
        id: 39,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 令人信服", value: "T" },
            { text: "B 感人的", value: "F" }
        ]
    },
    {
        id: 40,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 声明", value: "S" },
            { text: "B 概念", value: "N" }
        ]
    },
    {
        id: 41,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 不受约束", value: "P" },
            { text: "B 预先安排", value: "J" }
        ]
    },
    {
        id: 42,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 矜持", value: "I" },
            { text: "B 健谈", value: "E" }
        ]
    },
    {
        id: 43,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 有条不紊", value: "J" },
            { text: "B 不拘小节", value: "P" }
        ]
    },
    {
        id: 44,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 意念", value: "N" },
            { text: "B 实况", value: "S" }
        ]
    },
    {
        id: 45,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 同情怜悯", value: "F" },
            { text: "B 远见", value: "T" }
        ]
    },
    {
        id: 46,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 利益", value: "T" },
            { text: "B 祝福", value: "F" }
        ]
    },
    {
        id: 47,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 务实的", value: "S" },
            { text: "B 理论的", value: "N" }
        ]
    },
    {
        id: 48,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 朋友不多", value: "I" },
            { text: "B 朋友众多", value: "E" }
        ]
    },
    {
        id: 49,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 有系统", value: "J" },
            { text: "B 即兴", value: "P" }
        ]
    },
    {
        id: 50,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 富想象的", value: "N" },
            { text: "B 以事论事", value: "S" }
        ]
    },
    {
        id: 51,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 亲切的", value: "F" },
            { text: "B 客观的", value: "T" }
        ]
    },
    {
        id: 52,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 客观的", value: "T" },
            { text: "B 热情的", value: "F" }
        ]
    },
    {
        id: 53,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 建造", value: "S" },
            { text: "B 发明", value: "N" }
        ]
    },
    {
        id: 54,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 文静", value: "I" },
            { text: "B 爱合群", value: "E" }
        ]
    },
    {
        id: 55,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 理论", value: "N" },
            { text: "B 事实", value: "S" }
        ]
    },
    {
        id: 56,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 富同情", value: "F" },
            { text: "B 合逻辑", value: "T" }
        ]
    },
    {
        id: 57,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 具分析力", value: "T" },
            { text: "B 多愁善感", value: "F" }
        ]
    },
    {
        id: 58,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 合情合理", value: "S" },
            { text: "B 令人着迷", value: "N" }
        ]
    },

    // 第三部分 - 问题 59-78
    {
        id: 59,
        text: "当你要在一个星期内完成一个大项目，你在开始的时候会",
        options: [
            { text: "A 把要做的不同工作依次列出", value: "J" },
            { text: "B 马上动工", value: "P" }
        ]
    },
    {
        id: 60,
        text: "在社交场合中，你经常会感到",
        options: [
            { text: "A 与某些人很难打开话匣儿和保持对话", value: "I" },
            { text: "B 与多数人都能从容地长谈", value: "E" }
        ]
    },
    {
        id: 61,
        text: "要做许多人也做的事，你比较喜欢",
        options: [
            { text: "A 按照一般认可的方法去做", value: "S" },
            { text: "B 构想一个自己的想法", value: "N" }
        ]
    },
    {
        id: 62,
        text: "你刚认识的朋友能否说出你的兴趣？",
        options: [
            { text: "A 马上可以", value: "E" },
            { text: "B 要待他们真正了解你之后才可以", value: "I" }
        ]
    },
    {
        id: 63,
        text: "你通常较喜欢的科目是",
        options: [
            { text: "A 讲授概念和原则的", value: "N" },
            { text: "B 讲授事实和数据的", value: "S" }
        ]
    },
    {
        id: 64,
        text: "哪个是较高的赞誉，或称许为？",
        options: [
            { text: "A 一贯感性的人", value: "F" },
            { text: "B 一贯理性的人", value: "T" }
        ]
    },
    {
        id: 65,
        text: "你认为按照程序表做事",
        options: [
            { text: "A 有时是需要的，但一般来说你不大喜欢这样做", value: "P" },
            { text: "B 大多数情况下是有帮助而且是你喜欢做的", value: "J" }
        ]
    },
    {
        id: 66,
        text: "和一群人在一起，你通常会选",
        options: [
            { text: "A 跟你很熟悉的个别人谈话", value: "I" },
            { text: "B 参与大伙的谈话", value: "E" }
        ]
    },
    {
        id: 67,
        text: "在社交聚会上，你会",
        options: [
            { text: "A 是说话很多的一个", value: "E" },
            { text: "B 让别人多说话", value: "I" }
        ]
    },
    {
        id: 68,
        text: "把周末期间要完成的事列成清单，这个主意会",
        options: [
            { text: "A 合你意", value: "J" },
            { text: "B 使你提不起劲", value: "P" }
        ]
    },
    {
        id: 69,
        text: "哪个是较高的赞誉，或称许为",
        options: [
            { text: "A 能干的", value: "T" },
            { text: "B 富有同情心", value: "F" }
        ]
    },
    {
        id: 70,
        text: "你通常喜欢",
        options: [
            { text: "A 事先安排你的社交约会", value: "J" },
            { text: "B 随兴之所至做事", value: "P" }
        ]
    },
    {
        id: 71,
        text: "总的说来，要做一个大型作业时，你会选",
        options: [
            { text: "A 边做边想该做什么", value: "P" },
            { text: "B 首先把工作按步细分", value: "J" }
        ]
    },
    {
        id: 72,
        text: "你能否滔滔不绝地与人聊天",
        options: [
            { text: "A 只限于跟你有共同兴趣的人", value: "I" },
            { text: "B 几乎跟任何人都可以", value: "E" }
        ]
    },
    {
        id: 73,
        text: "你会",
        options: [
            { text: "A 跟随一些证明有效的方法", value: "S" },
            { text: "B 分析还有什么毛病，及针对尚未解决的难题", value: "N" }
        ]
    },
    {
        id: 74,
        text: "为乐趣而阅读时，你会",
        options: [
            { text: "A 喜欢奇特或创新的表达方式", value: "N" },
            { text: "B 喜欢作者直话直说", value: "S" }
        ]
    },
    {
        id: 75,
        text: "你宁愿替哪一类上司（或者老师）工作？",
        options: [
            { text: "A 天性淳良，但常常前后不一的", value: "F" },
            { text: "B 言词尖锐但永远合乎逻辑的", value: "T" }
        ]
    },
    {
        id: 76,
        text: "你做事多数是",
        options: [
            { text: "A 按当天心情去做", value: "P" },
            { text: "B 照拟好的程序表去做", value: "J" }
        ]
    },
    {
        id: 77,
        text: "你是否",
        options: [
            { text: "A 可以和任何人按需求从容地交谈", value: "E" },
            { text: "B 只是对某些人或在某种情况下才可以畅所欲言", value: "I" }
        ]
    },
    {
        id: 78,
        text: "要作决定时，你认为比较重要的是",
        options: [
            { text: "A 据事实衡量", value: "T" },
            { text: "B 考虑他人的感受和意见", value: "F" }
        ]
    },

    // 第四部分 - 问题 79-93
    {
        id: 79,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 想象的", value: "N" },
            { text: "B 真实的", value: "S" }
        ]
    },
    {
        id: 80,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 仁慈慷慨的", value: "F" },
            { text: "B 意志坚定的", value: "T" }
        ]
    },
    {
        id: 81,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 公正的", value: "T" },
            { text: "B 有关怀心", value: "F" }
        ]
    },
    {
        id: 82,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 制作", value: "S" },
            { text: "B 设计", value: "N" }
        ]
    },
    {
        id: 83,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 可能性", value: "N" },
            { text: "B 必然性", value: "S" }
        ]
    },
    {
        id: 84,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 温柔", value: "F" },
            { text: "B 力量", value: "T" }
        ]
    },
    {
        id: 85,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 实际", value: "T" },
            { text: "B 多愁善感", value: "F" }
        ]
    },
    {
        id: 86,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 制造", value: "S" },
            { text: "B 创造", value: "N" }
        ]
    },
    {
        id: 87,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 新颖的", value: "N" },
            { text: "B 已知的", value: "S" }
        ]
    },
    {
        id: 88,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 同情", value: "F" },
            { text: "B 分析", value: "T" }
        ]
    },
    {
        id: 89,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 坚持己见", value: "T" },
            { text: "B 温柔有爱心", value: "F" }
        ]
    },
    {
        id: 90,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 具体的", value: "S" },
            { text: "B 抽象的", value: "N" }
        ]
    },
    {
        id: 91,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 全心投入", value: "F" },
            { text: "B 有决心的", value: "T" }
        ]
    },
    {
        id: 92,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 能干", value: "T" },
            { text: "B 仁慈", value: "F" }
        ]
    },
    {
        id: 93,
        text: "哪一个词语更合你心意？",
        options: [
            { text: "A 实际", value: "S" },
            { text: "B 创新", value: "N" }
        ]
    }
]; 