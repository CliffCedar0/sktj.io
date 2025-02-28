// 封装查询干支相关信息
function queryResults() {
    const tianGanZhi = document.getElementById("tianGanZhi").value.trim();
    if (!tianGanZhi) {
        document.getElementById("result").innerText = "请输入天干地支（如：甲寅、乙卯等）。";
        return;
    }

    const tianGan = tianGanZhi.charAt(0); // 提取天干
    const diZhi = tianGanZhi.charAt(1); // 提取地支

    // 调用封装的查询函数
    const result = {
        "禄神": queryLuShen(tianGan),
        "驿马星": queryYiMa(diZhi),
        "天乙贵人": queryTianYiGuiRen(tianGan),
        "羊刃": queryYangRen(tianGan),
        "飞刃": queryFeiRen(tianGan, diZhi),
        "血刃": queryXueRen(diZhi),
        "丧门": querySangMen(diZhi),
        "吊客": queryDiaoKe(diZhi),
        "孤辰寡宿": queryGuChenGuaXiu(diZhi),
        "桃花": queryTaoHua(diZhi)
    };

    // 显示结果
    let resultText = '';
    for (let [key, value] of Object.entries(result)) {
        resultText += `<p>${key}：${value}</p>`;
    }
    document.getElementById("result").innerHTML = resultText;
}

// 禄神查询
function queryLuShen(tianGan) {
    const luShenMap = {
        '甲': '寅',
        '乙': '卯',
        '丙': '巳',
        '戊': '巳',
        '丁': '午',
        '己': '午',
        '庚': '申',
        '辛': '酉',
        '壬': '亥',
        '癸': '子'
    };
    return luShenMap[tianGan] || '无效天干';
}

// 驿马星查询
function queryYiMa(diZhi) {
    const yiMaMap = {
        '申': '寅',
        '子': '寅',
        '辰': '寅',
        '寅': '申',
        '午': '申',
        '戌': '申',
        '巳': '亥',
        '酉': '亥',
        '丑': '亥',
        '亥': '巳',
        '卯': '巳',
        '未': '巳'
    };
    return yiMaMap[diZhi] || '无效地支';
}

// 天乙贵人查询
function queryTianYiGuiRen(tianGan) {
    const tianYiGuiRenMap = {
        '甲': '丑、未',
        '戊': '丑、未',
        '庚': '丑、未',
        '乙': '子、申',
        '己': '子、申',
        '丙': '酉、亥',
        '丁': '酉、亥',
        '壬': '卯、巳',
        '癸': '卯、巳',
        '辛': '寅、午'
    };
    return tianYiGuiRenMap[tianGan] || '无效天干';
}

// 羊刃查询
function queryYangRen(tianGan) {
    const yangRenMap = {
        '甲': '卯',
        '乙': '寅',
        '丙': '午',
        '戊': '午',
        '丁': '巳',
        '己': '巳',
        '庚': '酉',
        '辛': '申',
        '壬': '子',
        '癸': '亥'
    };
    return yangRenMap[tianGan] || '无效天干';
}

// 飞刃查询
function queryFeiRen(tianGan, diZhi) {
    const feiRenMap = {
        '甲': '酉',
        '乙': '申',
        '丙': '子',
        '戊': '子',
        '丁': '丑',
        '己': '丑',
        '庚': '卯',
        '辛': '辰',
        '壬': '午',
        '癸': '未'
    };
    return feiRenMap[tianGan] || '无飞刃';
}

// 血刃查询
function queryXueRen(diZhi) {
    const xueRenMap = {
        '寅': '丑',
        '卯': '未',
        '辰': '寅',
        '巳': '申',
        '午': '卯',
        '未': '酉',
        '申': '辰',
        '酉': '戌',
        '戌': '巳',
        '亥': '亥',
        '子': '午',
        '丑': '子'
    };
    return xueRenMap[diZhi] || '无血刃';
}

// 丧门查询
function querySangMen(diZhi) {
    const sangMenMap = {
        '寅': '丑',
        '卯': '子',
        '辰': '亥',
        '巳': '戌',
        '午': '酉',
        '未': '申',
        '申': '未',
        '酉': '午',
        '戌': '巳',
        '亥': '辰',
        '子': '卯',
        '丑': '寅'
    };
    return sangMenMap[diZhi] || '无丧门';
}

// 吊客查询
function queryDiaoKe(diZhi) {
    const diaoKeMap = {
        '寅': '申',
        '卯': '酉',
        '辰': '戌',
        '巳': '亥',
        '午': '子',
        '未': '丑',
        '申': '寅',
        '酉': '卯',
        '戌': '辰',
        '亥': '巳',
        '子': '午',
        '丑': '未'
    };
    return diaoKeMap[diZhi] || '无吊客';
}

// 孤辰寡宿查询
function queryGuChenGuaXiu(diZhi) {
    const guChenGuaXiuMap = {
        '寅': '巳',
        '卯': '午',
        '辰': '未',
        '巳': '申',
        '午': '酉',
        '未': '戌',
        '申': '亥',
        '酉': '子',
        '戌': '寅',
        '亥': '卯',
        '子': '巳',
        '丑': '午'
    };
    return guChenGuaXiuMap[diZhi] || '无孤辰寡宿';
}

// 桃花查询
function queryTaoHua(diZhi) {
    const taoHuaMap = {
        '寅': '卯',
        '卯': '巳',
        '巳': '午',
        '午': '未',
        '未': '申',
        '申': '酉',
        '酉': '戌',
        '戌': '亥',
        '亥': '子',
        '子': '寅'
    };
    return taoHuaMap[diZhi] || '无桃花';
}
// 暴露接口
window.ShenSha = {
    queryAll: queryAllShensha
};