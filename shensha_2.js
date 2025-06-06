const dizhi_shensha = {
  "子": { "驿马": "寅", "华盖": "辰", "桃花": "酉", "劫煞": "巳", "红鸾": "卯", "天喜": "酉", "孤辰": "寅", "寡宿": "戌", "将星": "子" },
  "丑": { "驿马": "卯", "华盖": "丑", "桃花": "午", "劫煞": "寅", "红鸾": "寅", "天喜": "申", "孤辰": "寅", "寡宿": "戌", "将星": "酉" },
  "寅": { "驿马": "申", "华盖": "戌", "桃花": "卯", "劫煞": "亥", "红鸾": "丑", "天喜": "未", "孤辰": "巳", "寡宿": "丑", "将星": "午" },
  "卯": { "驿马": "巳", "华盖": "未", "桃花": "子", "劫煞": "申", "红鸾": "子", "天喜": "午", "孤辰": "巳", "寡宿": "丑", "将星": "卯" },
  "辰": { "驿马": "寅", "华盖": "辰", "桃花": "酉", "劫煞": "巳", "红鸾": "亥", "天喜": "巳", "孤辰": "巳", "寡宿": "丑", "将星": "子" },
  "巳": { "驿马": "亥", "华盖": "丑", "桃花": "午", "劫煞": "寅", "红鸾": "戌", "天喜": "辰", "孤辰": "申", "寡宿": "辰", "将星": "酉" },
  "午": { "驿马": "申", "华盖": "戌", "桃花": "卯", "劫煞": "巳", "红鸾": "酉", "天喜": "卯", "孤辰": "申", "寡宿": "辰", "将星": "午" },
  "未": { "驿马": "巳", "华盖": "未", "桃花": "子", "劫煞": "亥", "红鸾": "申", "天喜": "寅", "孤辰": "申", "寡宿": "辰", "将星": "卯" },
  "申": { "驿马": "寅", "华盖": "辰", "桃花": "酉", "劫煞": "巳", "红鸾": "未", "天喜": "丑", "孤辰": "亥", "寡宿": "未", "将星": "子" },
  "酉": { "驿马": "亥", "华盖": "丑", "桃花": "午", "劫煞": "寅", "红鸾": "午", "天喜": "子", "孤辰": "亥", "寡宿": "未", "将星": "酉" },
  "戌": { "驿马": "申", "华盖": "戌", "桃花": "卯", "劫煞": "亥", "红鸾": "巳", "天喜": "亥", "孤辰": "亥", "寡宿": "未", "将星": "午" },
  "亥": { "驿马": "巳", "华盖": "未", "桃花": "子", "劫煞": "申", "红鸾": "辰", "天喜": "戌", "孤辰": "寅", "寡宿": "戌", "将星": "卯" }
};

const tiangan_shensha = {
  "甲": { "贵人": "丑、未", "沐浴": "亥", "干禄": "寅", "羊刃": "卯", "红艳": "午", "金舆": "辰" },
  "乙": { "贵人": "子、申", "沐浴": "戌", "干禄": "卯", "羊刃": "寅", "红艳": "未", "金舆": "未" },
  "丙": { "贵人": "亥、酉", "沐浴": "酉", "干禄": "巳", "羊刃": "午", "红艳": "申", "金舆": "未" },
  "丁": { "贵人": "亥、酉", "沐浴": "申", "干禄": "午", "羊刃": "巳", "红艳": "酉", "金舆": "未" },
  "戊": { "贵人": "丑、未", "沐浴": "未", "干禄": "巳", "羊刃": "午", "红艳": "辰", "金舆": "辰" },
  "己": { "贵人": "子、申", "沐浴": "午", "干禄": "午", "羊刃": "巳", "红艳": "巳", "金舆": "辰" },
  "庚": { "贵人": "丑、未", "沐浴": "巳", "干禄": "酉", "羊刃": "酉", "红艳": "子", "金舆": "未" },
  "辛": { "贵人": "寅、午", "沐浴": "辰", "干禄": "戌", "羊刃": "申", "红艳": "丑", "金舆": "未" },
  "壬": { "贵人": "卯、巳", "沐浴": "卯", "干禄": "亥", "羊刃": "子", "红艳": "寅", "金舆": "戌" },
  "癸": { "贵人": "卯、巳", "沐浴": "寅", "干禄": "子", "羊刃": "亥", "红艳": "卯", "金舆": "戌" }
};

const tianganShensha = {
  "贵人": { "甲": "丑、未", "乙": "子、申", "丙": "亥、酉", "丁": "亥、酉", "戊": "丑、未", "己": "子、申", "庚": "丑、未", "辛": "寅、午", "壬": "卯、巳", "癸": "卯、巳" },
  "沐浴": { "甲": "亥", "乙": "戌", "丙": "酉", "丁": "申", "戊": "未", "己": "午", "庚": "巳", "辛": "辰", "壬": "卯", "癸": "寅" },
  "干禄": { "甲": "寅", "乙": "卯", "丙": "巳", "丁": "午", "戊": "巳", "己": "午", "庚": "酉", "辛": "戌", "壬": "亥", "癸": "子" },
  "羊刃": { "甲": "卯", "乙": "寅", "丙": "午", "丁": "巳", "戊": "午", "己": "巳", "庚": "酉", "辛": "申", "壬": "子", "癸": "亥" },
  "红艳": { "甲": "午", "乙": "未", "丙": "申", "丁": "酉", "戊": "辰", "己": "巳", "庚": "子", "辛": "丑", "壬": "寅", "癸": "卯" },
  "金舆": { "甲": "辰", "乙": "未", "丙": "未", "丁": "未", "戊": "辰", "己": "辰", "庚": "未", "辛": "未", "壬": "戌", "癸": "戌" }
};

const dizhiShensha = {
  "驿马": { "子": "寅", "丑": "卯", "寅": "申", "卯": "巳", "辰": "寅", "巳": "亥", "午": "申", "未": "巳", "申": "寅", "酉": "亥", "戌": "申", "亥": "巳" },
  "华盖": { "子": "辰", "丑": "丑", "寅": "戌", "卯": "未", "辰": "辰", "巳": "丑", "午": "戌", "未": "未", "申": "辰", "酉": "丑", "戌": "戌", "亥": "未" },
  "桃花": { "子": "酉", "丑": "午", "寅": "卯", "卯": "子", "辰": "酉", "巳": "午", "午": "卯", "未": "子", "申": "酉", "酉": "午", "戌": "卯", "亥": "子" },
  "劫煞": { "子": "巳", "丑": "寅", "寅": "亥", "卯": "申", "辰": "巳", "巳": "寅", "午": "巳", "未": "亥", "申": "巳", "酉": "寅", "戌": "亥", "亥": "申" },
  "红鸾": { "子": "卯", "丑": "寅", "寅": "丑", "卯": "子", "辰": "亥", "巳": "戌", "午": "酉", "未": "申", "申": "未", "酉": "午", "戌": "巳", "亥": "辰" },
  "天喜": { "子": "酉", "丑": "申", "寅": "未", "卯": "午", "辰": "巳", "巳": "辰", "午": "卯", "未": "寅", "申": "丑", "酉": "子", "戌": "亥", "亥": "戌" },
  "孤辰": { "子": "寅", "丑": "寅", "寅": "巳", "卯": "巳", "辰": "巳", "巳": "申", "午": "申", "未": "申", "申": "亥", "酉": "亥", "戌": "亥", "亥": "寅" },
  "寡宿": { "子": "戌", "丑": "戌", "寅": "丑", "卯": "丑", "辰": "丑", "巳": "辰", "午": "辰", "未": "辰", "申": "未", "酉": "未", "戌": "未", "亥": "戌" },
  "将星": { "子": "子", "丑": "酉", "寅": "午", "卯": "卯", "辰": "子", "巳": "酉", "午": "午", "未": "卯", "申": "子", "酉": "酉", "戌": "午", "亥": "卯" }
};