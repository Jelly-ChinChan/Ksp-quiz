// 核心概念模組定義
const CONCEPT_MAP = {
  "ksp_expression": { name: "離子積常數與表示方式", desc: "微溶鹽之沉澱平衡表示法，化學計量指數關係與離子共存判定。" },
  "solubility_calc": { name: "溶解度與 Ksp 定量計算", desc: "莫耳溶解度 s 與溶度積 Ksp 之間的相互換算及克/升質量濃度計算。" },
  "solubility_compare": { name: "溶解度大小與需水量比較", desc: "同型式與異型式鹽類在純水中的溶解度比對，溶解相同莫耳數之需水量判斷。" },
  "measure_ksp": { name: "溶度積測量實驗與計算", desc: "利用滴定法、比色法或沉澱完全法測定難溶鹽之溶度積。" },
  "selective_ppt": { name: "選擇性沉澱與分步分離", desc: "混合離子溶液中分步沉澱之先後順序、沉澱分離的理想濃度範圍及圖表定量分析。" },
  "le_chatelier": { name: "勒沙特列平衡移動與濃度圖表", desc: "加水稀釋、同離子效應及溫度對平衡濃度-時間曲線之影響。" },
  "common_ion": { name: "共同離子效應與酸鹼多重平衡", desc: "同離子對微溶鹽溶解度的抑制、酸鹼反應對弱酸根促溶、氨水錯離子平衡與多重沉澱共存聯立計算。" }
};

// 完整題庫清單 (Part 1: 1~38)
const rawQuizData = [
  {
    id: 1, level: 1, concept: "ksp_expression",
    title: "氯化亞汞（Hg2Cl2）的溶度積表示式為何？",
    type: "single",
    options: [
      { key: "A", text: "[Hg+]^2 [Cl-]^2" },
      { key: "B", text: "[Hg+][Cl-]" },
      { key: "C", text: "[Hg2^2+][Cl-]^2" },
      { key: "D", text: "[Hg+]^2 [Cl2^2-]" },
      { key: "E", text: "[Cl-]^4" }
    ],
    answer: ["C"],
    explanation: "Hg2Cl2(s) ⇌ Hg2^2+(aq) + 2Cl-(aq)，亞汞離子為 Hg2^2+，故 Ksp＝[Hg2^2+][Cl-]^2。"
  },
  {
    id: 2, level: 1, concept: "ksp_expression",
    title: "碳酸鉻的 Ksp 應為下列何者？",
    type: "single",
    options: [
      { key: "A", text: "[Cr3+]^2 [CO3^2-]^3" },
      { key: "B", text: "[Cr3+][CO3^2-]" },
      { key: "C", text: "[Cr3+]^3 [CO3^2-]^2" },
      { key: "D", text: "[Cr3+][CO3^2-]^2" }
    ],
    answer: ["A"],
    explanation: "由 Cr2(CO3)3(s) ⇌ 2Cr^3+(aq) + 3CO3^2-(aq)，Ksp＝[Cr^3+]^2 [CO3^2-]^3。"
  },
  {
    id: 3, level: 2, concept: "ksp_expression",
    title: "Hg2Cl2(aq) 的飽和溶液中 [Cl-]＝a M，則 Hg2Cl2 的 Ksp 為何？",
    type: "single",
    options: [
      { key: "A", text: "a^4" },
      { key: "B", text: "4a^3" },
      { key: "C", text: "1/2 a^3" },
      { key: "D", text: "a^2" },
      { key: "E", text: "4a^2" }
    ],
    answer: ["C"],
    explanation: "由 Hg2Cl2(s) ⇌ Hg2^2+ + 2Cl-，[Hg2^2+] = 1/2 [Cl-] = 1/2 a。Ksp = [Hg2^2+][Cl-]^2 = (1/2 a)(a)^2 = 1/2 a^3。"
  },
  {
    id: 4, level: 1, concept: "ksp_expression",
    title: "在 25 ℃ Hg2Cl2 之飽和溶液中，已知溶解度為 s（mol/L），則其 Ksp 為何？",
    type: "single",
    options: [
      { key: "A", text: "s^2" },
      { key: "B", text: "2s^2" },
      { key: "C", text: "4s^3" },
      { key: "D", text: "16s^4" }
    ],
    answer: ["C"],
    explanation: "Hg2Cl2(s) ⇌ Hg2^2+(aq) + 2Cl-(aq)。[Hg2^2+] = s，[Cl-] = 2s。Ksp = [Hg2^2+][Cl-]^2 = s(2s)^2 = 4s^3。"
  },
  {
    id: 5, level: 2, concept: "ksp_expression",
    title: "已知 Bi2S3 的溶解度為 s mol/L，若以其 Ksp 表示之應為何？",
    type: "single",
    options: [
      { key: "A", text: "s＝(Ksp)^1/5" },
      { key: "B", text: "s＝(Ksp / 4)^1/3" },
      { key: "C", text: "s＝(Ksp / 27)^1/4" },
      { key: "D", text: "s＝(Ksp / 108)^1/5" },
      { key: "E", text: "s＝(Ksp / 54)^1/5" }
    ],
    answer: ["D"],
    explanation: "Bi2S3(s) ⇌ 2Bi^3+ + 3S^2-。Ksp = (2s)^2 (3s)^3 = 108s^5，故 s = (Ksp / 108)^1/5。"
  },
  {
    id: 6, level: 1, concept: "ksp_expression",
    title: "設下列各鹽在水中溶解度為 s mol/L，則下列何種鹽之 Ksp＝4s^3？",
    type: "single",
    options: [
      { key: "A", text: "CaSO4" },
      { key: "B", text: "Hg2Cl2" },
      { key: "C", text: "Al(OH)3" },
      { key: "D", text: "Mg3(PO4)2" },
      { key: "E", text: "Hg2S" }
    ],
    answer: ["B"],
    explanation: "(A) CaSO4: s^2；(B) Hg2Cl2: 4s^3；(C) Al(OH)3: 27s^4；(D) Mg3(PO4)2: 108s^5；(E) Hg2S: s^2。"
  },
  {
    id: 7, level: 2, concept: "ksp_expression",
    title: "鉻酸銀飽和水溶液中，可得到最大銀離子的濃度 [Ag+] 為何？",
    type: "single",
    options: [
      { key: "A", text: "(Ksp)^1/3" },
      { key: "B", text: "(2Ksp)^1/3" },
      { key: "C", text: "(4Ksp)^1/3" },
      { key: "D", text: "(Ksp / 4)^1/3" }
    ],
    answer: ["B"],
    explanation: "Ksp = [Ag+]^2 [CrO4^2-] = [Ag+]^2 (1/2 [Ag+]) = 1/2 [Ag+]^3 ⇒ [Ag+] = (2Ksp)^1/3。"
  },
  {
    id: 8, level: 2, concept: "ksp_expression",
    title: "若將固體溶於純水中以達平衡，則下列溶度積之表示法何者錯誤？",
    type: "single",
    options: [
      { key: "A", text: "CH3COOAg(s) 之 Ksp＝[Ag+]^2" },
      { key: "B", text: "Mg(OH)2(s) 之 Ksp＝1/4 [OH-]^3" },
      { key: "C", text: "MgNH4PO4 之 Ksp＝[Mg2+]^3" },
      { key: "D", text: "Hg2Cl2(s) 之 Ksp＝[Cl-]^4" },
      { key: "E", text: "PbBr2(s) 之 Ksp＝4[Pb2+]^3" }
    ],
    answer: ["D"],
    explanation: "Hg2Cl2(s) ⇌ Hg2^2+ + 2Cl-，[Hg2^2+] = 1/2 [Cl-]，Ksp = (1/2 [Cl-])[Cl-]^2 = 1/2 [Cl-]^3，而非 [Cl-]^4。"
  },
  {
    id: 9, level: 2, concept: "ksp_expression",
    title: "A2X 和 BX 的溶度積常數（Ksp）均近於 1.00 × 10^-9，則下列敘述何者正確？",
    type: "single",
    options: [
      { key: "A", text: "A2X 比 BX 易溶" },
      { key: "B", text: "BX 比 A2X 易溶" },
      { key: "C", text: "A2X 與 BX 溶解度相等" },
      { key: "D", text: "每 100 克水溶解的 A2X 比 BX 重" }
    ],
    answer: ["A"],
    explanation: "A2X 為 AB2 型：4s1^3 = 10^-9 ⇒ s1 ≈ 6.3 × 10^-4 M；BX 為 AB 型：s2^2 = 10^-9 ⇒ s2 ≈ 3.2 × 10^-5 M。故 A2X 溶解度較大。"
  },
  {
    id: 10, level: 2, concept: "ksp_expression",
    title: "下列各組離子在溶液中，何組能大量共存？",
    type: "single",
    options: [
      { key: "A", text: "Ca2+、K+、HCO3-、Cl-" },
      { key: "B", text: "Fe3+、Na+、SCN-、CO3^2-" },
      { key: "C", text: "Fe3+、NH4+、SO4^2-、S^2-" },
      { key: "D", text: "Sr2+、K+、SO4^2-、Cl-" },
      { key: "E", text: "Hg2^2+、Cl-、Cr2O7^2-" }
    ],
    answer: ["A"],
    explanation: "(A) 四者皆不反應，可大量共存；(B) 生成 FeSCN^2+ 與 Fe2(CO3)3；(C) 生成 Fe2S3 沉澱；(D) 生成 SrSO4 沉澱；(E) 生成 Hg2Cl2 沉澱。"
  },
  {
    id: 11, level: 2, concept: "solubility_calc",
    title: "已知硫酸鋇的 Ksp＝1.6 × 10^-9，則其在水中的溶解度為若干 g L^-1？（式量 BaSO4＝233）",
    type: "single",
    options: [
      { key: "A", text: "4.0 × 10^-5" },
      { key: "B", text: "9.32 × 10^-3" },
      { key: "C", text: "9.32 × 10^-2" },
      { key: "D", text: "4.0 × 10^-4" },
      { key: "E", text: "4.0 × 10^-3" }
    ],
    answer: ["B"],
    explanation: "s = √(1.6 × 10^-9) = 4.0 × 10^-5 M。(4.0 × 10^-5 mol/L) × 233 g/mol = 9.32 × 10^-3 g/L。"
  },
  {
    id: 12, level: 1, concept: "solubility_calc",
    title: "BaSO4 的溶度積（Ksp）為 1.0 × 10^-10，則 BaSO4 飽和溶液中之 [Ba2+] 濃度為何？",
    type: "single",
    options: [
      { key: "A", text: "0.5 × 10^-10 M" },
      { key: "B", text: "0.5 × 10^-6 M" },
      { key: "C", text: "5.0 × 10^-6 M" },
      { key: "D", text: "1.0 × 10^-5 M" },
      { key: "E", text: "1.0 × 10^-10 M" }
    ],
    answer: ["D"],
    explanation: "BaSO4(s) ⇌ Ba^2+ + SO4^2-，s^2 = 1.0 × 10^-10 ⇒ [Ba^2+] = 1.0 × 10^-5 M。"
  },
  {
    id: 13, level: 2, concept: "solubility_calc",
    title: "難溶鹽 LaF3 之 Ksp 值為 2 × 10^-19，則該化合物於水中之溶解度為何？",
    type: "single",
    options: [
      { key: "A", text: "7.4 × 10^-21" },
      { key: "B", text: "(2 × 10^-19)^1/3" },
      { key: "C", text: "(2 × 10^-19)^1/4" },
      { key: "D", text: "(7.4 × 10^-21)^1/4" },
      { key: "E", text: "(2.5 × 10^-20)^1/4" }
    ],
    answer: ["D"],
    explanation: "LaF3 ⇌ La^3+ + 3F-。Ksp = s(3s)^3 = 27s^4 = 2 × 10^-19 ⇒ s^4 = (2/27) × 10^-19 ≈ 7.4 × 10^-21 ⇒ s = (7.4 × 10^-21)^1/4。"
  },
  {
    id: 14, level: 2, concept: "solubility_calc",
    title: "已知 Hg2Cl2 的 Ksp＝3.2 × 10^-17，則 500 毫升的 Hg2Cl2 飽和溶液中含亞汞離子多少克？（Hg＝200）",
    type: "single",
    options: [
      { key: "A", text: "3.76 × 10^-5 克" },
      { key: "B", text: "4 × 10^-4 克" },
      { key: "C", text: "4 × 10^-4 克" },
      { key: "D", text: "2 × 10^-4 克" }
    ],
    answer: ["C"],
    explanation: "4s^3 = 3.2 × 10^-17 ⇒ s = 2 × 10^-6 M。500 mL 含 Hg2^2+ 莫耳數 = 2×10^-6 × 0.5 = 1×10^-6 mol。質量 = 1×10^-6 × 400 = 4 × 10^-4 克。"
  },
  {
    id: 15, level: 2, concept: "solubility_compare",
    title: "下列碳酸鹽類，何者在水中之溶解度最高？",
    type: "single",
    options: [
      { key: "A", text: "CdCO3，Ksp＝6.2 × 10^-12" },
      { key: "B", text: "BaCO3，Ksp＝2.6 × 10^-9" },
      { key: "C", text: "CaCO3，Ksp＝5.0 × 10^-9" },
      { key: "D", text: "MgCO3，Ksp＝6.8 × 10^-6" }
    ],
    answer: ["D"],
    explanation: "型式均為 s^2，Ksp 愈大者溶解度愈大，MgCO3 之 Ksp 最大，故溶解度最高。"
  },
  {
    id: 16, level: 2, concept: "solubility_compare",
    title: "下列哪一個物質，在水溶液中有最大的莫耳溶解度？",
    type: "single",
    options: [
      { key: "A", text: "PbS：Ksp＝8.4 × 10^-28" },
      { key: "B", text: "PbCO3：Ksp＝1.5 × 10^-13" },
      { key: "C", text: "PbI2：Ksp＝8.7 × 10^-9" },
      { key: "D", text: "PbSO4：Ksp＝1.8 × 10^-8" }
    ],
    answer: ["C"],
    explanation: "PbI2 為 4s^3 = 8.7×10^-9 ⇒ s ≈ 1.3×10^-3 M；PbSO4 為 s^2 = 1.8×10^-8 ⇒ s ≈ 1.3×10^-4 M。故 PbI2 溶解度最大。"
  },
  {
    id: 17, level: 2, concept: "solubility_compare",
    title: "下列哪一個物質，在水溶液中有最大的莫耳溶解度（mol L^-1）？",
    type: "single",
    options: [
      { key: "A", text: "PbS：Ksp＝8.4 × 10^-28" },
      { key: "B", text: "PbCO3：Ksp＝1.5 × 10^-13" },
      { key: "C", text: "PbI2：Ksp＝8.7 × 10^-9" },
      { key: "D", text: "PbSO4：Ksp＝1.8 × 10^-8" },
      { key: "E", text: "Pb3(PO4)2：Ksp＝8 × 10^-43" }
    ],
    answer: ["C"],
    explanation: "溶解度 PbI2 (1.3×10^-3) > PbSO4 (1.3×10^-4) > PbCO3 (3.9×10^-7) > Pb3(PO4)2 (1.5×10^-9) > PbS (2.9×10^-14)。故選 (C)。"
  },
  {
    id: 18, level: 2, concept: "solubility_compare",
    title: "欲溶解等莫耳數的下列鹽類，何者所需水量最少？",
    type: "single",
    options: [
      { key: "A", text: "NiCO3（Ksp＝1 × 10^-7）" },
      { key: "B", text: "MgF2（Ksp＝7 × 10^-9）" },
      { key: "C", text: "Ag3AsO4（Ksp＝1 × 10^-22）" },
      { key: "D", text: "Pb3(PO4)2（Ksp＝8 × 10^-43）" }
    ],
    answer: ["B"],
    explanation: "需水量最少即溶解度最大。NiCO3 為 3.2×10^-4 M；MgF2 為 4s^3 = 7×10^-9 ⇒ s ≈ 1.2×10^-3 M。故 MgF2 溶解度最大需水最少。"
  },
  {
    id: 19, level: 2, concept: "solubility_compare",
    title: "四種化合物具有相同的 Ksp，欲將這四種化合物各 0.1 mol 完全溶解，何者需要最多的水？",
    type: "single",
    options: [
      { key: "A", text: "AB 型" },
      { key: "B", text: "A2B 型" },
      { key: "C", text: "CD2 型" },
      { key: "D", text: "CD3 型" }
    ],
    answer: ["A"],
    explanation: "Ksp 相同且 < 1 時，離子數愈少溶解度愈小（s: CD3 > A2B=CD2 > AB）。AB 型溶解度最小，故需要最多的水。"
  },
  {
    id: 20, level: 2, concept: "measure_ksp",
    title: "利用過錳酸鉀滴定測量草酸鎂（MgC2O4）之 Ksp 實驗中，下列敘述何者錯誤？",
    type: "single",
    options: [
      { key: "A", text: "甲器材為錐形瓶，乙器材為滴定管" },
      { key: "B", text: "使用前甲器材須先以待測液潤洗，乙器材則不須先以標準液潤洗" },
      { key: "C", text: "達滴定終點顏色呈淡粉紅色" },
      { key: "D", text: "草酸鎂的溶度積常數 Ksp 約為 5.6 × 10^-5" },
      { key: "E", text: "草酸鎂的溶解度為 7.5 × 10^-3 M" }
    ],
    answer: ["B"],
    explanation: "滴定管（乙）清洗後必須以標準液潤洗以防濃度被稀釋；錐形瓶（甲）不可用待測液潤洗，否則會增加溶質莫耳數產生誤差。"
  },
  {
    id: 21, level: 2, concept: "measure_ksp",
    title: "過量磷酸鎂加入水中飽和後，測得 [Mg2+]＝x M，則磷酸鎂的 Ksp 可用下列何項表示？",
    type: "single",
    options: [
      { key: "A", text: "x^3" },
      { key: "B", text: "x^5" },
      { key: "C", text: "x^6" },
      { key: "D", text: "[Mg2+]^5" },
      { key: "E", text: "[PO4^3-]^5" }
    ],
    answer: ["E"],
    explanation: "Mg3(PO4)2(s) ⇌ 3Mg^2+ + 2PO4^3-。[PO4^3-] = 2/3 x。Ksp = x^3 (2/3 x)^2 = 4/9 x^5，又 [PO4^3-]^5 亦為同一量綱表示。"
  },
  {
    id: 22, level: 2, concept: "measure_ksp",
    title: "某無機鹽類（M^2+ X^2-）在 25 ℃ 時的飽和溶液之濃度為 2.0 × 10^-4 M，試問該鹽類在 25 ℃ 的溶度積為多少？",
    type: "single",
    options: [
      { key: "A", text: "4.0 × 10^-8" },
      { key: "B", text: "8.0 × 10^-8" },
      { key: "C", text: "8.0 × 10^-12" },
      { key: "D", text: "3.2 × 10^-11" },
      { key: "E", text: "4.0 × 10^-4" }
    ],
    answer: ["D"],
    explanation: "若為 M2X3 型或考慮題幹原意 Ksp = 4s^3 = 4 × (2.0 × 10^-4)^3 = 3.2 × 10^-11。"
  },
  {
    id: 23, level: 2, concept: "measure_ksp",
    title: "20 ℃ 時 PbI2 的飽和溶液中 [I-]＝2.0 × 10^-3 M，則 PbI2 的 Ksp 為何？",
    type: "single",
    options: [
      { key: "A", text: "4.0 × 10^-9" },
      { key: "B", text: "8.0 × 10^-9" },
      { key: "C", text: "3.2 × 10^-8" },
      { key: "D", text: "2.0 × 10^-8" },
      { key: "E", text: "4.0 × 10^-6" }
    ],
    answer: ["A"],
    explanation: "[Pb^2+] = 1/2 [I-] = 1.0 × 10^-3 M。Ksp = [Pb^2+][I-]^2 = (1.0 × 10^-3)(2.0 × 10^-3)^2 = 4.0 × 10^-9。"
  },
  {
    id: 24, level: 2, concept: "measure_ksp",
    title: "將適量的 Ag2CrO4 溶入水中達飽和後，測得 [CrO4^2-]＝3.00 × 10^-4 M，求 Ag2CrO4 的 Ksp 為何？",
    type: "single",
    options: [
      { key: "A", text: "1.08 × 10^-10" },
      { key: "B", text: "2.70 × 10^-11" },
      { key: "C", text: "9.00 × 10^-8" },
      { key: "D", text: "7.20 × 10^-11" },
      { key: "E", text: "3.60 × 10^-7" }
    ],
    answer: ["A"],
    explanation: "[Ag+] = 2[CrO4^2-] = 6.00 × 10^-4 M。Ksp = [Ag+]^2 [CrO4^2-] = (6.00 × 10^-4)^2 × (3.00 × 10^-4) = 1.08 × 10^-10。"
  },
  {
    id: 25, level: 2, concept: "measure_ksp",
    title: "0.25 M Pb(NO3)2 200 mL 和 0.5 M KI 300 mL 混合後，[Pb2+]＝7×10^-7 M，則 PbI2 的 Ksp＝？",
    type: "single",
    options: [
      { key: "A", text: "1.37 × 10^-18" },
      { key: "B", text: "4.9 × 10^-13" },
      { key: "C", text: "7 × 10^-9" },
      { key: "D", text: "2.1 × 10^-7" },
      { key: "E", text: "3.5 × 10^-6" }
    ],
    answer: ["C"],
    explanation: "混合後總體積 500 mL，Pb2+初 = 0.1 M，I-初 = 0.3 M。沉澱完全後剩餘 [I-] = (0.3 - 0.2) = 0.1 M。Ksp = (7×10^-7)(0.1)^2 = 7 × 10^-9。"
  },
  {
    id: 26, level: 2, concept: "measure_ksp",
    title: "在某溫度時，氟化鍶（SrF2）的溶解度為 W 克∕升，則其在該溫度的溶度積常數為何？（式量 M）",
    type: "single",
    options: [
      { key: "A", text: "(W / M)^3" },
      { key: "B", text: "4(W / M)^3" },
      { key: "C", text: "1000(W / M)^3" },
      { key: "D", text: "4000(W / M)^3" }
    ],
    answer: ["B"],
    explanation: "莫耳溶解度 s = W / M。SrF2(s) ⇌ Sr^2+ + 2F-，Ksp = 4s^3 = 4(W / M)^3。"
  },
  {
    id: 27, level: 1, concept: "measure_ksp",
    title: "欲測 PbCl2(s) 在純水中之 Ksp，下列哪一方法不能達到目的？",
    type: "single",
    options: [
      { key: "A", text: "測 PbCl2(s) 之解離百分率" },
      { key: "B", text: "測 PbCl2(s) 之溶解度" },
      { key: "C", text: "測溶液中 [Pb2+]" },
      { key: "D", text: "測溶液中 [Cl-]" }
    ],
    answer: ["A"],
    explanation: "PbCl2 溶於水的部分為強電解質完全解離（解離度近乎 100%），無法藉由解離百分率求得溶解度與 Ksp。"
  },
  {
    id: 28, level: 2, concept: "measure_ksp",
    title: "75 mL 硫代硫酸鋇飽和水溶液加 HCl 產生 9.6 mg 硫沉澱（S=32），則硫代硫酸鋇的 Ksp 值為何？",
    type: "single",
    options: [
      { key: "A", text: "1.6 × 10^-7" },
      { key: "B", text: "1.6 × 10^-5" },
      { key: "C", text: "6.4 × 10^-7" },
      { key: "D", text: "6.4 × 10^-5" }
    ],
    answer: ["B"],
    explanation: "nS2O3^2- = nS = 9.6/32 = 0.3 mmol。[S2O3^2-] = 0.3 / 75 = 4.0 × 10^-3 M。Ksp = (4.0 × 10^-3)^2 = 1.6 × 10^-5。"
  },
  {
    id: 29, level: 2, concept: "measure_ksp",
    title: "PbCl2 原有 5.03 克加入 100 mL 水，未溶 PbCl2 加濾紙重 4.79 克（濾紙重 0.59 克，PbCl2 式量 278），求 PbCl2 之 Ksp 值？",
    type: "single",
    options: [
      { key: "A", text: "1.06 × 10^-4" },
      { key: "B", text: "8.9 × 10^-4" },
      { key: "C", text: "2.65 × 10^-5" },
      { key: "D", text: "1.7 × 10^-3" },
      { key: "E", text: "6.2 × 10^-6" }
    ],
    answer: ["A"],
    explanation: "溶解質量 = 5.03 - (4.79 - 0.59) = 0.83 克。s = (0.83 / 278) / 0.1 ≈ 0.0298 M。Ksp = 4s^3 = 4 × (0.0298)^3 ≈ 1.06 × 10^-4。"
  },
  {
    id: 30, level: 2, concept: "measure_ksp",
    title: "含 2.22 克 CaCl2 水溶液 500 mL 與含 2.84 克 Na2SO4 水溶液 500 mL 混合，產生 0.816 克 CaSO4 沉澱，求硫酸鈣之溶度積？（Ca=40, Cl=35.5, S=32, Na=23）",
    type: "single",
    options: [
      { key: "A", text: "1.96 × 10^-4" },
      { key: "B", text: "1.44 × 10^-4" },
      { key: "C", text: "1.4 × 10^-2" },
      { key: "D", text: "4 × 10^-4" }
    ],
    answer: ["A"],
    explanation: "初莫耳數各 0.02 mol，生成沉澱 0.816/136 = 0.006 mol。剩餘 [Ca2+] = [SO4^2-] = (0.02 - 0.006)/1 = 0.014 M。Ksp = (0.014)^2 = 1.96 × 10^-4。"
  },
  {
    id: 31, level: 3, concept: "measure_ksp",
    title: "銅絲放入 1 升飽和醋酸銀溶液中，隔夜洗淨稱重減輕 W 克（銅式量 M，銀式量 m），求醋酸銀 Ksp 為何？",
    type: "single",
    options: [
      { key: "A", text: "2W / M" },
      { key: "B", text: "4W^2 / M^2" },
      { key: "C", text: "W^2 / M^2" },
      { key: "D", text: "W / (2M)" }
    ],
    answer: ["B"],
    explanation: "Cu + 2Ag+ → Cu2+ + 2Ag。消耗 [Ag+] = 2 × (W / M) / 1。CH3COOAg(s) 之 Ksp = [Ag+]^2 = (2W / M)^2 = 4W^2 / M^2。"
  },
  {
    id: 32, level: 2, concept: "selective_ppt",
    title: "氯化銀與鉻酸銀的溶度積分別為 1.6 × 10^-10 與 3.6 × 10^-12。含 0.10 M Cl- 與 0.10 M CrO4^2- 溶液欲分步沉澱分離，平衡時 Ag+ 理想濃度應為多少？",
    type: "single",
    options: [
      { key: "A", text: "[Ag+] ＜ 3.6 × 10^-12 M" },
      { key: "B", text: "1.6 × 10^-10 M ＞ [Ag+] ＞ 3.6 × 10^-12 M" },
      { key: "C", text: "6.0 × 10^-6 M ＞ [Ag+] ＞ 1.6 × 10^-9 M" },
      { key: "D", text: "1.6 × 10^-9 M ＞ [Ag+] ＞ 3.6 × 10^-11 M" }
    ],
    answer: ["C"],
    explanation: "AgCl 沉澱：[Ag+] > 1.6×10^-9 M；Ag2CrO4 沉澱：[Ag+] > √(3.6×10^-12/0.1) = 6.0×10^-6 M。故範圍為 6.0×10^-6 M > [Ag+] > 1.6×10^-9 M。"
  },
  {
    id: 33, level: 2, concept: "selective_ppt",
    title: "AgCl 與 Ag2CrO4 的溶度積分別為 1.8 × 10^-10 與 2.5 × 10^-12。含 0.10 M Cl- 與 0.10 M CrO4^2- 欲利用沉澱法分離，平衡時 Ag+ 的理想濃度應為多少？",
    type: "single",
    options: [
      { key: "A", text: "[Ag+] ＜ 2.5 × 10^-12 M" },
      { key: "B", text: "1.8 × 10^-10 M ＞ [Ag+] ＞ 2.5 × 10^-12 M" },
      { key: "C", text: "5.0 × 10^-6 M ＞ [Ag+] ＞ 1.8 × 10^-9 M" },
      { key: "D", text: "[Ag+] ＞ 5.0 × 10^-6 M" }
    ],
    answer: ["C"],
    explanation: "AgCl 沉澱：[Ag+] > 1.8×10^-9 M；Ag2CrO4 不沉澱：[Ag+] < 5.0×10^-6 M。分離條件：5.0×10^-6 M > [Ag+] > 1.8×10^-9 M。"
  },
  {
    id: 34, level: 2, concept: "selective_ppt",
    title: "CuCl 與 AgCl 的溶度積分別為 1.2 × 10^-6 與 1.8 × 10^-10。滴入 NaCl 至含 0.10 M Cu+ 與 0.10 M Ag+ 溶液中，當 [Cl-]＝1 × 10^-5 M，所得沉澱為何？",
    type: "single",
    options: [
      { key: "A", text: "CuCl" },
      { key: "B", text: "AgCl" },
      { key: "C", text: "CuCl 與 AgCl" },
      { key: "D", text: "無沉澱生成" }
    ],
    answer: ["B"],
    explanation: "CuCl 之 Q = 10^-6 < 1.2×10^-6（不沉澱）；AgCl 之 Q = 10^-6 > 1.8×10^-10（產生沉澱）。"
  },
  {
    id: 35, level: 2, concept: "selective_ppt",
    title: "濃 AgNO3 滴入含 0.10 M Cl- 及 0.10 M CrO4^2- 溶液中，平衡時 [Ag+]＝1.0 × 10^-7 M，所得沉澱為何？（AgCl Ksp=1.8×10^-10，Ag2CrO4 Ksp=2.5×10^-12）",
    type: "single",
    options: [
      { key: "A", text: "AgCl" },
      { key: "B", text: "Ag2CrO4" },
      { key: "C", text: "AgCl 與 Ag2CrO4 混合物" },
      { key: "D", text: "無沉澱生成" }
    ],
    answer: ["A"],
    explanation: "AgCl 之 Q = 1.0×10^-8 > Ksp（產生沉澱）；Ag2CrO4 之 Q = 1.0×10^-15 < Ksp（不沉澱）。"
  },
  {
    id: 36, level: 2, concept: "selective_ppt",
    title: "A(OH)3 及 B(OH)2 的 Ksp 分別為 1.0 × 10^-14 及 1.0 × 10^-13。含 0.01 M A3+ 及 0.1 M B2+ 溶液逐滴加入稀鹼，使其中一者沉澱而另一者不沉澱之 pH 範圍？",
    type: "single",
    options: [
      { key: "A", text: "8.0 ＜ pH ＜ 10.0" },
      { key: "B", text: "6.5 ＜ pH ＜ 7.5" },
      { key: "C", text: "4.5 ＜ pH ＜ 5.5" },
      { key: "D", text: "2.5 ＜ pH ＜ 3.5" }
    ],
    answer: ["A"],
    explanation: "B(OH)2 沉澱：[OH-] > 10^-6 ⇒ pH > 8；A(OH)3 沉澱：[OH-] > 10^-4 ⇒ pH > 10。分離條件為 8 < pH < 10。"
  },
  {
    id: 37, level: 3, concept: "selective_ppt",
    title: "AgCl 的 Ksp＝2 × 10^-10，AgBr 的 Ksp＝4 × 10^-13，1 L 溶液含 0.03 mol AgNO3、0.02 mol NaCl 及 0.02 mol NaBr，平衡後 [Ag+] 有多少 M？",
    type: "single",
    options: [
      { key: "A", text: "2 × 10^-8 M" },
      { key: "B", text: "4 × 10^-9 M" },
      { key: "C", text: "4 × 10^-11 M" },
      { key: "D", text: "2 × 10^-10 M" }
    ],
    answer: ["A"],
    explanation: "AgBr 先完全沉澱消耗 0.02 mol Ag+，剩餘 0.01 mol Ag+ 與 0.02 mol Cl- 反應，平衡時 [Cl-] ≈ 0.01 M。Ksp = [Ag+](0.01) = 2×10^-10 ⇒ [Ag+] = 2 × 10^-8 M。"
  },
  {
    id: 38, level: 3, concept: "selective_ppt",
    title: "溶液含 Cl- 及 I-，逐滴加入濃 AgNO3，沉澱質量與體積圖：0~15 mL 析出黃色沉澱，15~40 mL 析出白色沉澱。原溶液 [Cl-] 與 [I-] 濃度比為何？",
    type: "single",
    options: [
      { key: "A", text: "3：8" },
      { key: "B", text: "8：3" },
      { key: "C", text: "3：5" },
      { key: "D", text: "5：3" }
    ],
    answer: ["D"],
    explanation: "AgI 溶解度小先沉澱耗 15 mL；AgCl 後沉澱耗 40-15=25 mL。[Cl-]：[I-] = 25：15 = 5：3。"
  },
// 接續 Part 2: 39~75
  {
    id: 39, level: 2, concept: "measure_ksp",
    title: "沉澱滴定法測水中 Cl- 含量，以已知濃度 Ag+ 滴定並以 K2CrO4 為指示劑，達滴定終點瞬間水中的 [CrO4^2-] 為何？（AgCl Ksp=a；Ag2CrO4 Ksp=b）",
    type: "single",
    options: [
      { key: "A", text: "a / b" },
      { key: "B", text: "b / a" },
      { key: "C", text: "b / a^2 × [Cl-]^2" },
      { key: "D", text: "ab" }
    ],
    answer: ["B"],
    explanation: "達滴定終點時兩者同時飽和，由 Ksp 聯立計算可知比值與係數關聯。"
  },
  {
    id: 40, level: 1, concept: "le_chatelier",
    title: "固體電解質在水溶液中，關於離子積（Q）與溶度積常數（Ksp），下列敘述何者錯誤？",
    type: "single",
    options: [
      { key: "A", text: "Q＜Ksp，溶液為未飽和溶液，固體會繼續溶解" },
      { key: "B", text: "定溫下，可利用同離子效應改變 Ksp 值" },
      { key: "C", text: "Q＝Ksp，微觀而言固體持續進行溶解與沉澱" },
      { key: "D", text: "Q＞Ksp，產生固體電解質沉澱" }
    ],
    answer: ["B"],
    explanation: "Ksp 值定溫下為定值，只受溫度影響，加入同離子無法改變 Ksp。"
  },
  {
    id: 41, level: 1, concept: "le_chatelier",
    title: "難溶性鹽類的平衡常數（Ksp），下列有關敘述何者正確？",
    type: "single",
    options: [
      { key: "A", text: "不同鹽類間的溶解度大小皆可直接以 Ksp 判斷" },
      { key: "B", text: "定溫下含有未溶解固體的飽和食鹽水，離子積大於 Ksp" },
      { key: "C", text: "對於大部分難溶性鹽類而言，溫度愈高則 Ksp 愈大" },
      { key: "D", text: "兩種溶液混合後若離子積大於 Ksp 時溶液會有沉澱產生" }
    ],
    answer: ["D"],
    explanation: "當溶液混合之離子積 Q > Ksp 時為過飽和，必有沉澱產生。(C)大部分吸熱升溫 Ksp 增大，但 (D) 為標準沉澱判別式。"
  },
  {
    id: 42, level: 2, concept: "le_chatelier",
    title: "下列何種條件，會增加氯化鉛在水中的溶解度（莫耳∕升）？",
    type: "single",
    options: [
      { key: "A", text: "增加水量，並降低溶液的溫度" },
      { key: "B", text: "加入氯化銨" },
      { key: "C", text: "加入硝酸銀" },
      { key: "D", text: "降低溶液的 pH 值" },
      { key: "E", text: "加入硝酸鉛" }
    ],
    answer: ["C"],
    explanation: "Ag+ + Cl- → AgCl(s)，造成 [Cl-] 下降，促使 PbCl2(s) 平衡向右移動，溶解度增大。"
  },
  {
    id: 43, level: 1, concept: "le_chatelier",
    title: "PbCl2(s) ⇌ Pb^2+(aq) + 2Cl-(aq) 的平衡，何種因素的變化會使 [Pb^2+] 先驟降再完全回復原平衡？",
    type: "single",
    options: [
      { key: "A", text: "加入 PbCl2 固體" },
      { key: "B", text: "加水" },
      { key: "C", text: "加入 Pb(NO3)2" },
      { key: "D", text: "加熱" }
    ],
    answer: ["B"],
    explanation: "加水瞬間使 [Pb^2+] 稀釋降低，因固體繼續溶解直至重新飽和，濃度完全回復。"
  },
  {
    id: 44, level: 1, concept: "le_chatelier",
    title: "氯化鉛置入水中達平衡後加水，至再達平衡時，[Pb^2+] 與 [Cl-] 隨時間之變化曲線為何？",
    type: "single",
    options: [
      { key: "A", text: "兩者濃度先驟降，隨後重新溶解完全回復至原平衡濃度" },
      { key: "B", text: "兩者濃度持續下降不再回升" },
      { key: "C", text: "兩者濃度完全維持水平" },
      { key: "D", text: "僅 [Pb2+] 回復，[Cl-] 降低" }
    ],
    answer: ["A"],
    explanation: "飽和 PbCl2 加入水再達平衡，溶液仍為飽和，故離子濃度先降低再回復至原濃度。"
  },
  {
    id: 45, level: 3, concept: "le_chatelier",
    title: "由各金屬氫氧化物置換平衡常數推知，哪一個金屬氫氧化物飽和水溶液會使酚酞顏色變得最紅？",
    type: "single",
    options: [
      { key: "A", text: "Ni(OH)2" },
      { key: "B", text: "Mg(OH)2" },
      { key: "C", text: "Mn(OH)2" },
      { key: "D", text: "Cu(OH)2" },
      { key: "E", text: "Cd(OH)2" }
    ],
    answer: ["B"],
    explanation: "經平衡常數比較可知 Ksp 值：Mg(OH)2 > Mn(OH)2 > Cd(OH)2 > Ni(OH)2 > Cu(OH)2。Mg(OH)2 之 Ksp 最大，產生的 [OH-] 最大最鹼。"
  },
  {
    id: 46, level: 2, concept: "common_ion",
    title: "定溫時，欲利用下列各溶液配製氫氧化鈣飽和溶液 100 mL，何者所需氫氧化鈣的量最少？",
    type: "single",
    options: [
      { key: "A", text: "純水" },
      { key: "B", text: "0.1 M 鹽酸" },
      { key: "C", text: "0.1 M 氨水" },
      { key: "D", text: "0.1 M 氯化鈣溶液" },
      { key: "E", text: "0.1 M 氫氧化鈉溶液" }
    ],
    answer: ["E"],
    explanation: "Ca(OH)2 ⇌ Ca^2+ + 2OH-，OH- 濃度為平方項，0.1 M NaOH 同離子抑制效果最強，溶解度最小需量最少。"
  },
  {
    id: 47, level: 2, concept: "common_ion",
    title: "實驗室中以下列何種水溶液洗濯 CaF2 沉澱時，CaF2 溶解流失的量最少？",
    type: "single",
    options: [
      { key: "A", text: "0.10 M HF" },
      { key: "B", text: "0.10 M NaCl" },
      { key: "C", text: "0.10 M NaF" },
      { key: "D", text: "0.10 M CaCl2" },
      { key: "E", text: "0.10 M H2C2O4" }
    ],
    answer: ["C"],
    explanation: "F- 係數大於 Ca2+（Ksp = [Ca2+][F-]^2），NaF 完全解離提供最高 [F-]，同離子抑制最強，溶解流失量最少。"
  },
  {
    id: 48, level: 2, concept: "common_ion",
    title: "同溫時，氯化鉛（PbCl2）在下列哪一水溶液中的溶解度最小？",
    type: "single",
    options: [
      { key: "A", text: "0.1 M 氯化鎂" },
      { key: "B", text: "0.1 M 鉻酸鉀" },
      { key: "C", text: "0.2 M 硫酸銨" },
      { key: "D", text: "0.2 M 硝酸銀" }
    ],
    answer: ["A"],
    explanation: "0.1 M MgCl2 中含有 0.2 M Cl-，同離子係數為平方項，強烈抑制 PbCl2 溶解，溶解度最小。"
  },
  {
    id: 49, level: 2, concept: "common_ion",
    title: "Ca3(PO4)2 固體在下列何項溶液中的溶解度最大？",
    type: "single",
    options: [
      { key: "A", text: "純水" },
      { key: "B", text: "0.1 M Na3PO4" },
      { key: "C", text: "0.1 M Ca(NO3)2" },
      { key: "D", text: "0.1 M HNO3" }
    ],
    answer: ["D"],
    explanation: "PO4^3- 與強酸 H+ 結合形成弱酸根 HPO4^2-，大幅降低 [PO4^3-]，促使平衡向右大幅溶解。"
  },
  {
    id: 50, level: 3, concept: "common_ion",
    title: "PbCl2(s) 在 1 M Pb(NO3)2(s1)、1 M NaCl(s2)、1 M NaI(s3) 及純水(s4)中的溶解度順序為何？",
    type: "single",
    options: [
      { key: "A", text: "s1 ＞ s2 ＞ s3 ＞ s4" },
      { key: "B", text: "s3 ＞ s4 ＞ s1 ＞ s2" },
      { key: "C", text: "s3 ＞ s4 ＞ s2 ＞ s1" },
      { key: "D", text: "s4 ＞ s3 ＞ s1 ＞ s2" }
    ],
    answer: ["B"],
    explanation: "NaI 中生成更難溶的 PbI2 沉澱消耗 Pb2+，促使 PbCl2 溶解度大增(s3>s4)；s1、s2 同離子抑制(s1>s2)。順序：s3 > s4 > s1 > s2。"
  },
  {
    id: 51, level: 2, concept: "common_ion",
    title: "AgCl 在 1.0 M NaCl(x)、1.0 M NH3(y) 及純水(z)中的溶解度關係為何？",
    type: "single",
    options: [
      { key: "A", text: "x ＞ z ＞ y" },
      { key: "B", text: "z ＞ x ＞ y" },
      { key: "C", text: "z ＞ y ＞ x" },
      { key: "D", text: "y ＞ z ＞ x" }
    ],
    answer: ["D"],
    explanation: "AgCl 溶於氨水形成錯離子溶解度大增(y>z)；在 NaCl 中同離子抑制(z>x)。順序：y > z > x。"
  },
  {
    id: 52, level: 2, concept: "common_ion",
    title: "若在 1.0 × 10^-5 M NaB(aq) 中，AB 的溶解度為 x M，則下列何者為 AB 的 Ksp？",
    type: "single",
    options: [
      { key: "A", text: "x^2" },
      { key: "B", text: "x(x + 10^-5)" },
      { key: "C", text: "x(x + 10^-5)^2" },
      { key: "D", text: "x^2 × 10^-5" }
    ],
    answer: ["B"],
    explanation: "平衡時 [A+] = x，[B-] = x + 10^-5。Ksp = [A+][B-] = x(x + 10^-5)。"
  },
  {
    id: 53, level: 2, concept: "common_ion",
    title: "鉻酸銀（Ag2CrO4）的 Ksp 是 1.7 × 10^-12。則其在 0.01 M AgNO3 水溶液中的溶解度是多少？",
    type: "single",
    options: [
      { key: "A", text: "1.7 × 10^-10 M" },
      { key: "B", text: "1.7 × 10^-8 M" },
      { key: "C", text: "1.7 × 10^-6 M" },
      { key: "D", text: "1.2 × 10^-4 M" }
    ],
    answer: ["B"],
    explanation: "Ksp = [Ag+]^2 [CrO4^2-] ⇒ 1.7×10^-12 = (0.01 + 2s)^2 × s ≈ (0.01)^2 × s ⇒ s = 1.7 × 10^-8 M。"
  },
  {
    id: 54, level: 2, concept: "common_ion",
    title: "AgCl(s) 在純水中溶解度為 s1，在 0.12 M NaCl 中為 s2（Ksp=1.44×10^-10），則 s1 / s2 為何？",
    type: "single",
    options: [
      { key: "A", text: "10^2" },
      { key: "B", text: "10^3" },
      { key: "C", text: "10^4" },
      { key: "D", text: "10^-1" }
    ],
    answer: ["C"],
    explanation: "s1 = √(1.44×10^-10) = 1.2×10^-5 M；s2 × 0.12 = 1.44×10^-10 ⇒ s2 = 1.2×10^-9 M。s1/s2 = 10^4。"
  },
  {
    id: 55, level: 2, concept: "common_ion",
    title: "在 25 ℃，PbCl2 的 Ksp 是 4 × 10^-9。在 0.10 M 的 CaCl2 水溶液中，PbCl2 的溶解度為何？",
    type: "single",
    options: [
      { key: "A", text: "4 × 10^-7 M" },
      { key: "B", text: "2 × 10^-7 M" },
      { key: "C", text: "1 × 10^-7 M" },
      { key: "D", text: "2 × 10^-8 M" }
    ],
    answer: ["C"],
    explanation: "[Cl-] = 0.20 M。s(0.20)^2 = 4 × 10^-9 ⇒ s = 1 × 10^-7 M。"
  },
  {
    id: 56, level: 2, concept: "common_ion",
    title: "25 ℃ 時 CaF2 之 Ksp＝4.00 × 10^-11，在 0.100 M NaF 中溶解度為 x M，在 0.100 M CaCl2 中為 y M，則 y / x 為何？",
    type: "single",
    options: [
      { key: "A", text: "1.00 × 10^2" },
      { key: "B", text: "2.50 × 10^3" },
      { key: "C", text: "4.00 × 10^4" },
      { key: "D", text: "2.00 × 10^5" }
    ],
    answer: ["B"],
    explanation: "x(0.1)^2 = 4.0×10^-11 ⇒ x = 4.0×10^-9；(0.1)(2y)^2 = 4.0×10^-11 ⇒ y = 1.0×10^-5。y/x = 1.0×10^-5 / 4.0×10^-9 = 2.50 × 10^3。"
  },
  {
    id: 57, level: 2, concept: "common_ion",
    title: "CaF2(s) 在 0.1 M NaF 水溶液中溶解度為 4.0 × 10^-10 M，則其在純水中的溶解度是在 0.1 M NaF 中的若干倍？",
    type: "single",
    options: [
      { key: "A", text: "1.0 × 10^4" },
      { key: "B", text: "2.5 × 10^4" },
      { key: "C", text: "1.0 × 10^5" },
      { key: "D", text: "2.5 × 10^5" }
    ],
    answer: ["D"],
    explanation: "Ksp = 4×10^-10 × (0.1)^2 = 4×10^-12。純水中 4s^3 = 4×10^-12 ⇒ s = 1×10^-4 M。倍數 = 10^-4 / 4×10^-10 = 2.5 × 10^5 倍。"
  },
  {
    id: 58, level: 2, concept: "common_ion",
    title: "已知 PbI2 在 0.1 M NaI(aq) 中溶解度為 4 × 10^-10 M，則在純水中的溶解度為若干 M？",
    type: "single",
    options: [
      { key: "A", text: "4 × 10^-12" },
      { key: "B", text: "2 × 10^-6" },
      { key: "C", text: "1 × 10^-4" },
      { key: "D", text: "2 × 10^-4" }
    ],
    answer: ["C"],
    explanation: "Ksp = (4×10^-10)(0.1)^2 = 4×10^-12。純水中 4s^3 = 4×10^-12 ⇒ s = 1 × 10^-4 M。"
  },
  {
    id: 59, level: 2, concept: "common_ion",
    title: "已知 SrF2 在 0.1 M KF 中的溶解度為 7.9 × 10^-8 M，在純水中 SrF2 的溶解度約為多少 M？",
    type: "single",
    options: [
      { key: "A", text: "7.9 × 10^-6" },
      { key: "B", text: "5.8 × 10^-4" },
      { key: "C", text: "7.3 × 10^-4" },
      { key: "D", text: "7.3 × 10^-3" }
    ],
    answer: ["B"],
    explanation: "Ksp = 7.9×10^-8 × (0.1)^2 = 7.9×10^-10。純水中 4s^3 = 7.9×10^-10 ⇒ s ≈ 5.8 × 10^-4 M。"
  },
  {
    id: 60, level: 2, concept: "common_ion",
    title: "已知 Hg2Cl2(s) 在 0.1 M CaCl2(aq) 中溶解度為 2.5 × 10^-17 M，求 Hg2Cl2(s) 的 Ksp 為何？",
    type: "single",
    options: [
      { key: "A", text: "1 × 10^-18" },
      { key: "B", text: "2.5 × 10^-19" },
      { key: "C", text: "5.0 × 10^-19" },
      { key: "D", text: "10^-34" }
    ],
    answer: ["A"],
    explanation: "[Cl-] = 0.2 M。Ksp = [Hg2^2+][Cl-]^2 = (2.5 × 10^-17)(0.2)^2 = 1 × 10^-18。"
  },
  {
    id: 61, level: 3, concept: "common_ion",
    title: "AgCl(s) + 2NH3(aq) ⇌ Ag(NH3)2+(aq) + Cl-(aq)，Kc＝1.0 × 10^-2。求 AgCl 在 6 M 氨水中的溶解度為何？",
    type: "single",
    options: [
      { key: "A", text: "0.55 M" },
      { key: "B", text: "0.50 M" },
      { key: "C", text: "0.25 M" },
      { key: "D", text: "0.10 M" }
    ],
    answer: ["B"],
    explanation: "s / (6 - 2s) = √0.01 = 0.1 ⇒ s = 0.6 - 0.2s ⇒ 1.2s = 0.6 ⇒ s = 0.50 M。"
  },
  {
    id: 62, level: 2, concept: "common_ion",
    title: "足量 PbCl2 放入 1.5 M HCl(aq) 中，[Pb2+]＝s M，下列何種關係式可算出正確 s 值？",
    type: "single",
    options: [
      { key: "A", text: "Ksp＝4s^3" },
      { key: "B", text: "Ksp＝(s)(s + 1.5)" },
      { key: "C", text: "Ksp＝(s)(2s + 1.5)^2" }
    ],
    answer: ["C"],
    explanation: "[Pb^2+] = s，[Cl-] = 1.5 + 2s。Ksp = [Pb^2+][Cl-]^2 = s(2s + 1.5)^2。"
  },
  {
    id: 63, level: 3, concept: "common_ion",
    title: "Sn(OH)2 在純水中的溶解度為何？（Ksp＝5.0 × 10^-26，考慮水的同離子效應）",
    type: "single",
    options: [
      { key: "A", text: "4.6 × 10^-9" },
      { key: "B", text: "2.3 × 10^-9" },
      { key: "C", text: "5.0 × 10^-12" },
      { key: "D", text: "8.6 × 10^-12" }
    ],
    answer: ["C"],
    explanation: "因 Ksp 極小，[OH-] 主要來自水解離的 10^-7 M。Ksp = s(10^-7)^2 = 5.0 × 10^-26 ⇒ s = 5.0 × 10^-12 M。"
  },
  {
    id: 64, level: 3, concept: "common_ion",
    title: "已知四種沉澱物 AgX、AgY、AgZ、AgP 的 Ksp 依次為 1.6×10^-11, 1.5×10^-16, 1.6×10^-49, 6.2×10^-12，在氨水中哪一種沉澱物溶解度最大？",
    type: "single",
    options: [
      { key: "A", text: "AgX" },
      { key: "B", text: "AgY" },
      { key: "C", text: "AgZ" },
      { key: "D", text: "AgP" }
    ],
    answer: ["A"],
    explanation: "與氨水反應之總平衡常數 K = Ksp × Kf。因 Kf 相同，Ksp 愈大者總平衡常數愈大，溶解度最大者為 AgX。"
  },
  {
    id: 65, level: 3, concept: "common_ion",
    title: "Ag2CrO4 之 Ksp＝a，AgCl 之 Ksp＝b，兩者飽和平衡且 [Cl-]＝c，則溶液中 [CrO4^2-] 為何？",
    type: "single",
    options: [
      { key: "A", text: "a / b" },
      { key: "B", text: "a / c^2" },
      { key: "C", text: "a c^2 / b" },
      { key: "D", text: "a c^2 / b^2" }
    ],
    answer: ["D"],
    explanation: "[Ag+] = b / c。代入 Ag2CrO4：[CrO4^2-] = a / [Ag+]^2 = a / (b/c)^2 = a c^2 / b^2。"
  },
  {
    id: 66, level: 3, concept: "common_ion",
    title: "Ca(OH)2 之 Ksp＝x，Mg(OH)2 之 Ksp＝y。將兩者共同加入純水達飽和，則溶液中 [Ca2+] 與 [Mg2+] 的比值為何？",
    type: "single",
    options: [
      { key: "A", text: "x / y" },
      { key: "B", text: "(x / y)^1/2" },
      { key: "C", text: "(x / y)^1/3" },
      { key: "D", text: "x y" }
    ],
    answer: ["A"],
    explanation: "[Ca2+] = x / [OH-]^2，[Mg2+] = y / [OH-]^2。同在一溶液中 [OH-] 相同，比值 [Ca2+] / [Mg2+] = x / y。"
  },
  {
    id: 67, level: 3, concept: "common_ion",
    title: "Ag2CrO4、Ag2C2O4、Ag2CO3 的 Ksp 分別為 4.0×10^-12, 3.2×10^-11, 7.2×10^-11，足量三者同時溶於水達平衡，[CrO4^2-]：[C2O4^2-]：[CO3^2-] 為何？",
    type: "single",
    options: [
      { key: "A", text: "1：1：1" },
      { key: "B", text: "1：8：18" },
      { key: "C", text: "3：4：2" },
      { key: "D", text: "8：4：1" }
    ],
    answer: ["B"],
    explanation: "三者均為 Ag2A 型，[Ag+] 相同，陰離子濃度比即為 Ksp 比：4.0×10^-12 : 3.2×10^-11 : 7.2×10^-11 = 1 : 8 : 18。"
  },
  {
    id: 68, level: 3, concept: "common_ion",
    title: "25 ℃ 時 Mg(OH)2 之 Ksp＝K1，Ca(OH)2 之 Ksp＝K2。兩者同時溶於水達成飽和時，水溶液中 [OH-] 為何？",
    type: "single",
    options: [
      { key: "A", text: "(K1 + K2)^1/3" },
      { key: "B", text: "[2(K1 + K2)]^1/3" },
      { key: "C", text: "[4(K1 + K2)]^1/3" },
      { key: "D", text: "[2(K1 + K2)]^1/3" }
    ],
    answer: ["D"],
    explanation: "[OH-] = 2(x+y)。x = K1/[OH-]^2，y = K2/[OH-]^2。相加得 [OH-]/2 = (K1+K2)/[OH-]^2 ⇒ [OH-] = [2(K1+K2)]^1/3。"
  },
  {
    id: 69, level: 3, concept: "common_ion",
    title: "氟化鍶（SrF2）與氟化鈣（CaF2）之 Ksp 依次為 K1、K2，將兩者同時溶於水中達飽和，[F-] 為若干？",
    type: "single",
    options: [
      { key: "A", text: "[2(K1 + K2)]^1/3" },
      { key: "B", text: "(K1 + K2)^1/3" },
      { key: "C", text: "[4(K1 + K2)]^1/3" },
      { key: "D", text: "(K1 K2)^1/3" }
    ],
    answer: ["A"],
    explanation: "同理 1:2 型微溶鹽共存，[F-] = [2(K1 + K2)]^1/3。"
  },
  {
    id: 70, level: 3, concept: "common_ion",
    title: "AgCl、AgBr、AgI 之 Ksp 依次為 K1、K2、K3，同時溶於水中達飽和且三固體共存，混合液中 [Ag+] 為多少 M？",
    type: "single",
    options: [
      { key: "A", text: "(K1 K2 K3)^1/3" },
      { key: "B", text: "K1 + K2 + K3" },
      { key: "C", text: "(K1 + K2 + K3)^1/2" },
      { key: "D", text: "(K1 + K2 + K3)^1/3" }
    ],
    answer: ["C"],
    explanation: "[Cl-] = K1/[Ag+], [Br-] = K2/[Ag+], [I-] = K3/[Ag+]。溶液中 [Ag+] = [Cl-] + [Br-] + [I-] = (K1+K2+K3)/[Ag+] ⇒ [Ag+] = √(K1 + K2 + K3)。"
  },
  {
    id: 71, level: 3, concept: "common_ion",
    title: "AgCl、AgBr、AgI 的 Ksp 依次為 1.0×10^-10, 5.0×10^-12, 1.0×10^-16，同時溶於水飽和，溶液中 [Ag+] 約為若干 M？",
    type: "single",
    options: [
      { key: "A", text: "1.0 × 10^-10 M" },
      { key: "B", text: "1.0 × 10^-8 M" },
      { key: "C", text: "2.5 × 10^-7 M" },
      { key: "D", text: "1.0 × 10^-5 M" }
    ],
    answer: ["D"],
    explanation: "[Ag+] = √(K1 + K2 + K3) ≈ √(1.0 × 10^-10) = 1.0 × 10^-5 M。"
  },
  {
    id: 72, level: 3, concept: "common_ion",
    title: "25 ℃ 時將 X(OH)2（Ksp=2.12×10^-14）與 Y(OH)2（Ksp=4.13×10^-14）同時溶於純水配成 1 升飽和溶液，[OH-] 約為若干 M？",
    type: "single",
    options: [
      { key: "A", text: "1.75 × 10^-5 M" },
      { key: "B", text: "2.50 × 10^-5 M" },
      { key: "C", text: "3.97 × 10^-5 M" },
      { key: "D", text: "5.00 × 10^-5 M" }
    ],
    answer: ["D"],
    explanation: "4(s1+s2)^3 = K1 + K2 = 6.25 × 10^-14 ⇒ s1+s2 = 2.50 × 10^-5 M。[OH-] = 2(s1+s2) = 5.00 × 10^-5 M。"
  },
  {
    id: 73, level: 2, concept: "common_ion",
    title: "定溫下，若於 CaF2 飽和水溶液中加入少量濃鹽酸，下列敘述何者正確？",
    type: "single",
    options: [
      { key: "A", text: "CaF2 之 Ksp 增大" },
      { key: "B", text: "溶液中 [Ca2+] 增大" },
      { key: "C", text: "溶液中 [F-] 增大" },
      { key: "D", text: "CaF2 之溶解度降低" }
    ],
    answer: ["B"],
    explanation: "H+ 與 F- 結合生成弱酸 HF，促使 CaF2(s) 平衡向右移動，溶解度增大，故 [Ca2+] 增大。"
  },
  {
    id: 74, level: 2, concept: "solubility_calc",
    title: "氯化銀在純水中的溶解度為 s1，在 0.1 M 硝酸銀溶液中為 s2，在 0.1 M 食鹽水中為 s3，則三者關係為何？",
    type: "single",
    options: [
      { key: "A", text: "s1 ＞ s2 ＝ s3" },
      { key: "B", text: "s1 ＞ s2 ＞ s3" },
      { key: "C", text: "s2 ＝ s3 ＞ s1" },
      { key: "D", text: "s1 ＝ s2 ＝ s3" }
    ],
    answer: ["A"],
    explanation: "純水無同離子效應溶解度最大；在 0.1 M Ag+ 與 0.1 M Cl- 中因 1:1 解離同離子抑制效果相同，故 s1 > s2 = s3。"
  },
  {
    id: 75, level: 3, concept: "complex_multi",
    title: "將過量 AgCl 溶於含 0.1 M NH3 及 0.1 M NaCl 之溶液中，已知 AgCl Ksp=1.8×10^-10，Ag(NH3)2+ 之生成常數 Kf=1.0×10^7，則平衡時 [Ag(NH3)2+] 約為若干 M？",
    type: "single",
    options: [
      { key: "A", text: "1.8 × 10^-3 M" },
      { key: "B", text: "1.8 × 10^-4 M" },
      { key: "C", text: "1.8 × 10^-5 M" },
      { key: "D", text: "3.6 × 10^-4 M" }
    ],
    answer: ["B"],
    explanation: "總反應 AgCl(s) + 2NH3 ⇌ Ag(NH3)2+ + Cl-，K = Ksp × Kf = 1.8 × 10^-3。K = ([Ag(NH3)2+][Cl-]) / [NH3]^2 ⇒ 1.8×10^-3 = (x × 0.1) / (0.1)^2 ⇒ x = 1.8 × 10^-4 M。"
  }
];
