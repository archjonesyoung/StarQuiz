/* 翰林115上四年級數學：10張學習卡與100題原創練習 */
CURRICULUM_DATA.melody.subjects.math.units = [
  {
    "id": "m_hanlin_115_4a_math_01",
    "name": "第1單元｜一億以內的數",
    "badge": "115上・翰林四上",
    "curriculumVerified": true,
    "studyCard": {
      "title": "一億以內的數｜數學闖關學習卡",
      "summary": "認識大數位值、讀寫與比較，練習大數加減。",
      "concepts": [
        "【位值】由右向左是個、十、百、千、萬、十萬、百萬、千萬，再到億。每相鄰一位相差10倍。",
        "【讀寫】從右邊每4位分一組，讀成個位組、萬位組、億位組。中間缺少某個位值時用0占位。",
        "【數字的值】同一個數字放在不同位置，代表的數量不同。例如千萬位上的3代表30,000,000。",
        "【比較】先比位數；位數相同，從最高位開始比較。",
        "【加減】直式相同位值對齊。進位或退位時，別漏掉中間的0。"
      ],
      "formula": "10,000個一＝1萬；10,000個萬＝1億。比較從最高位，直式同位對齊。",
      "tips": "不能因為數字裡有很多0就忽略位值。 教材來源：小芸／數學「115上翰林小無敵自修數學4上」，印刷頁4、6、9（PDF第6、8、11頁）。以下10題為依單元重點設計的原創練習。"
    },
    "questions": [
      {
        "id": "m_hanlin_115_4a_math01_q01",
        "question": "6 個萬、4 個千、2 個百和 8 個一合起來是多少？",
        "options": [
          "64209",
          "64208",
          "64218",
          "64207"
        ],
        "correctIndex": 1,
        "explanation": "60,000＋4,000＋200＋8＝64,208。"
      },
      {
        "id": "m_hanlin_115_4a_math01_q02",
        "question": "數字 35,702,614 中，3 代表多少？",
        "options": [
          "31000000",
          "10000000",
          "30000000",
          "3000000"
        ],
        "correctIndex": 2,
        "explanation": "3在千萬位，代表30,000,000。"
      },
      {
        "id": "m_hanlin_115_4a_math01_q03",
        "question": "「四千零五萬零六十」寫成數字是哪一個？",
        "options": [
          "40,500,060",
          "4,005,060",
          "40,050,600",
          "40,050,060"
        ],
        "correctIndex": 3,
        "explanation": "4,005萬是40,050,000，再加60。"
      },
      {
        "id": "m_hanlin_115_4a_math01_q04",
        "question": "下列哪個數最大？",
        "options": [
          "8,210,305",
          "8,201,305",
          "8,120,305",
          "8,021,305"
        ],
        "correctIndex": 0,
        "explanation": "位數相同，從最高位往右比較，8,210,305最大。"
      },
      {
        "id": "m_hanlin_115_4a_math01_q05",
        "question": "99,999 再加 1 是多少？",
        "options": [
          "100001",
          "100000",
          "100010",
          "99999"
        ],
        "correctIndex": 1,
        "explanation": "連續進位，99,999＋1＝100,000。"
      },
      {
        "id": "m_hanlin_115_4a_math01_q06",
        "question": "2,345,678＋1,203,456＝？",
        "options": [
          "3549135",
          "3549144",
          "3549134",
          "3549133"
        ],
        "correctIndex": 2,
        "explanation": "同位對齊相加，結果是3,549,134。"
      },
      {
        "id": "m_hanlin_115_4a_math01_q07",
        "question": "5,000,000－2,345,678＝？",
        "options": [
          "2654323",
          "2654332",
          "2654321",
          "2654322"
        ],
        "correctIndex": 3,
        "explanation": "逐位退位相減，結果是2,654,322。"
      },
      {
        "id": "m_hanlin_115_4a_math01_q08",
        "question": "圖書館原有 124,580 本書，新增 23,760 本，現在共幾本？",
        "options": [
          "148340 本",
          "148341 本",
          "148350 本",
          "148339 本"
        ],
        "correctIndex": 0,
        "explanation": "124,580＋23,760＝148,340。"
      },
      {
        "id": "m_hanlin_115_4a_math01_q09",
        "question": "40 個百萬合起來是多少？",
        "options": [
          "4000000",
          "40000000",
          "400000",
          "80000000"
        ],
        "correctIndex": 1,
        "explanation": "1個百萬是1,000,000，40個就是40,000,000。"
      },
      {
        "id": "m_hanlin_115_4a_math01_q10",
        "question": "7,005,040 的正確讀法是什麼？",
        "options": [
          "七千萬五千零四十",
          "七百萬五百零四",
          "七百萬五千零四十",
          "七十萬五千零四十"
        ],
        "correctIndex": 2,
        "explanation": "先分成700萬與5,040，再讀出位值。"
      }
    ]
  },
  {
    "id": "m_hanlin_115_4a_math_02",
    "name": "第2單元｜乘法",
    "badge": "115上・翰林四上",
    "curriculumVerified": true,
    "studyCard": {
      "title": "乘法｜數學闖關學習卡",
      "summary": "練習較大數乘法、生活應用與乘法規律。",
      "concepts": [
        "【意義】每份一樣多，求若干份的總量，可用乘法。",
        "【直式】各位相乘時注意進位；乘到十位數字，這列積要從十位開始寫。",
        "【三位數乘數】分別算個位、十位、百位帶來的積，再按位值相加。",
        "【整十整百】乘10、100、1000是位值向左移動，不只是忘記意義地補0。",
        "【規律】已知某數乘20，可用加一份或減一份推算乘21、乘19。"
      ],
      "formula": "總量＝每份數量×份數。乘20＝乘2再乘10。",
      "tips": "直式第二列的位置要對，尤其乘數中含0時。 教材來源：小芸／數學「115上翰林小無敵自修數學4上」，印刷頁18、20、23（PDF第20、22、25頁）。以下10題為依單元重點設計的原創練習。"
    },
    "questions": [
      {
        "id": "m_hanlin_115_4a_math02_q01",
        "question": "2,304×3＝？",
        "options": [
          "6913",
          "6922",
          "6912",
          "6911"
        ],
        "correctIndex": 2,
        "explanation": "2,304×3＝6,912。"
      },
      {
        "id": "m_hanlin_115_4a_math02_q02",
        "question": "125×24＝？",
        "options": [
          "3001",
          "3010",
          "2999",
          "3000"
        ],
        "correctIndex": 3,
        "explanation": "125×20＋125×4＝2,500＋500＝3,000。"
      },
      {
        "id": "m_hanlin_115_4a_math02_q03",
        "question": "46×132＝？",
        "options": [
          "6072",
          "6073",
          "6082",
          "6071"
        ],
        "correctIndex": 0,
        "explanation": "46×100＋46×30＋46×2＝4,600＋1,380＋92＝6,072。"
      },
      {
        "id": "m_hanlin_115_4a_math02_q04",
        "question": "304×205＝？",
        "options": [
          "62321",
          "62320",
          "62330",
          "62319"
        ],
        "correctIndex": 1,
        "explanation": "304×200＋304×5＝60,800＋1,520＝62,320。"
      },
      {
        "id": "m_hanlin_115_4a_math02_q05",
        "question": "每盒有 28 枝彩色筆，買 15 盒，共有幾枝？",
        "options": [
          "421 枝",
          "430 枝",
          "420 枝",
          "419 枝"
        ],
        "correctIndex": 2,
        "explanation": "28×15＝420。"
      },
      {
        "id": "m_hanlin_115_4a_math02_q06",
        "question": "每張門票 135 元，買 32 張，共要多少元？",
        "options": [
          "4321 元",
          "4330 元",
          "4319 元",
          "4320 元"
        ],
        "correctIndex": 3,
        "explanation": "135×30＋135×2＝4,050＋270＝4,320。"
      },
      {
        "id": "m_hanlin_115_4a_math02_q07",
        "question": "73×100＝？",
        "options": [
          "7300",
          "7301",
          "7310",
          "7299"
        ],
        "correctIndex": 0,
        "explanation": "乘100，數量變成原來的100倍，得7,300。"
      },
      {
        "id": "m_hanlin_115_4a_math02_q08",
        "question": "已知 48×20＝960，48×21 是多少？",
        "options": [
          "1009",
          "1008",
          "1018",
          "1007"
        ],
        "correctIndex": 1,
        "explanation": "比20份多1份，再加48，960＋48＝1,008。"
      },
      {
        "id": "m_hanlin_115_4a_math02_q09",
        "question": "已知 65×30＝1,950，65×29 是多少？",
        "options": [
          "1886",
          "1895",
          "1885",
          "1884"
        ],
        "correctIndex": 2,
        "explanation": "比30份少1份，1,950－65＝1,885。"
      },
      {
        "id": "m_hanlin_115_4a_math02_q10",
        "question": "算 236×42 的直式時，乘數的 4 代表什麼？",
        "options": [
          "4",
          "400",
          "0.4",
          "40"
        ],
        "correctIndex": 3,
        "explanation": "4在十位，代表40，所以第二列積要注意位值。"
      }
    ]
  },
  {
    "id": "m_hanlin_115_4a_math_03",
    "name": "第3單元｜角度",
    "badge": "115上・翰林四上",
    "curriculumVerified": true,
    "studyCard": {
      "title": "角度｜數學闖關學習卡",
      "summary": "認識量角器、畫角、旋轉角與角度加減。",
      "concepts": [
        "【單位】角的大小用度表示，符號是°。角的大小看張開程度，不是邊的長短。",
        "【量角器】中心點對頂點，一邊對0°基線，再沿同一套刻度讀另一邊。",
        "【角的分類】小於90°是銳角；90°是直角；大於90°且小於180°是鈍角。平角180°，周角360°。",
        "【旋轉】時鐘一圈12大格，每大格是30°。要看清題目指定的旋轉方向。",
        "【加減】不重疊的兩個相鄰角合起來用加法；已知整角求其中一角，用減法。"
      ],
      "formula": "直角90°；平角180°；周角360°；時鐘一大格30°。",
      "tips": "別讀反內外刻度，也別把邊變長誤認為角變大。 教材來源：小芸／數學「115上翰林小無敵自修數學4上」，印刷頁34、36、39（PDF第36、38、41頁）。以下10題為依單元重點設計的原創練習。"
    },
    "questions": [
      {
        "id": "m_hanlin_115_4a_math03_q01",
        "question": "75° 屬於哪一類角？",
        "options": [
          "直角",
          "鈍角",
          "平角",
          "銳角"
        ],
        "correctIndex": 3,
        "explanation": "75°小於90°，是銳角。"
      },
      {
        "id": "m_hanlin_115_4a_math03_q02",
        "question": "125° 屬於哪一類角？",
        "options": [
          "鈍角",
          "銳角",
          "直角",
          "周角"
        ],
        "correctIndex": 0,
        "explanation": "125°大於90°且小於180°，是鈍角。"
      },
      {
        "id": "m_hanlin_115_4a_math03_q03",
        "question": "一個平角是多少度？",
        "options": [
          "90°",
          "180°",
          "360°",
          "45°"
        ],
        "correctIndex": 1,
        "explanation": "平角是半圈，180°。"
      },
      {
        "id": "m_hanlin_115_4a_math03_q04",
        "question": "轉一整圈是多少度？",
        "options": [
          "180°",
          "90°",
          "360°",
          "60°"
        ],
        "correctIndex": 2,
        "explanation": "周角是完整一圈，360°。"
      },
      {
        "id": "m_hanlin_115_4a_math03_q05",
        "question": "使用量角器，中心點應對準哪裡？",
        "options": [
          "角的一邊末端",
          "紙張中心",
          "任意一個刻度",
          "角的頂點"
        ],
        "correctIndex": 3,
        "explanation": "中心點先對角的頂點，一邊再對0°基線。"
      },
      {
        "id": "m_hanlin_115_4a_math03_q06",
        "question": "同一個角的兩邊畫長一點，角度會怎樣？",
        "options": [
          "不變",
          "一定加倍",
          "一定減半",
          "變成0°"
        ],
        "correctIndex": 0,
        "explanation": "角度看張開程度，邊長不影響角度。"
      },
      {
        "id": "m_hanlin_115_4a_math03_q07",
        "question": "兩個不重疊的相鄰角分別是 35°、40°，合起來是多少？",
        "options": [
          "76°",
          "75°",
          "85°",
          "74°"
        ],
        "correctIndex": 1,
        "explanation": "35°＋40°＝75°。"
      },
      {
        "id": "m_hanlin_115_4a_math03_q08",
        "question": "一個直角被分成兩部分，其中一部分是 28°，另一部分是多少？",
        "options": [
          "63°",
          "72°",
          "62°",
          "61°"
        ],
        "correctIndex": 2,
        "explanation": "90°－28°＝62°。"
      },
      {
        "id": "m_hanlin_115_4a_math03_q09",
        "question": "時鐘指針從 12 沿順時針方向轉到 5，共轉幾度？",
        "options": [
          "151°",
          "160°",
          "149°",
          "150°"
        ],
        "correctIndex": 3,
        "explanation": "5大格，每格30°，5×30°＝150°。"
      },
      {
        "id": "m_hanlin_115_4a_math03_q10",
        "question": "角的一邊對準量角器右側 0°，另一邊對同一套刻度的 65°，角是多少？",
        "options": [
          "65°",
          "115°",
          "0°",
          "180°"
        ],
        "correctIndex": 0,
        "explanation": "從右側0°開始沿同一套刻度讀，是65°。"
      }
    ]
  },
  {
    "id": "m_hanlin_115_4a_math_04",
    "name": "第4單元｜假分數與帶分數",
    "badge": "115上・翰林四上",
    "curriculumVerified": true,
    "studyCard": {
      "title": "假分數與帶分數｜數學闖關學習卡",
      "summary": "認識分數種類、互換、同分母大小比較與數線。",
      "concepts": [
        "【真分數】分子小於分母，大小小於1。",
        "【假分數】分子大於或等於分母，大小大於或等於1。",
        "【帶分數】整數與真分數合在一起，例如2又3/5。",
        "【互換】帶分數換假分數：整數×分母＋分子，放在原分母上。假分數換帶分數：分子除分母，商是整數，餘數是分子。",
        "【比較與數線】同分母先看分子；帶分數先比整數，再比相同分母的分數部分。數線每個1要等分。"
      ],
      "formula": "2又3/5＝(2×5＋3)/5＝13/5。13÷5＝2餘3。",
      "tips": "分母不變；分子等於分母也是假分數。本單元比較題使用同分母。 教材來源：小芸／數學「115上翰林小無敵自修數學4上」，印刷頁55、57、60（PDF第57、59、62頁）。以下10題為依單元重點設計的原創練習。"
    },
    "questions": [
      {
        "id": "m_hanlin_115_4a_math04_q01",
        "question": "哪一個是真分數？",
        "options": [
          "3/8",
          "8/8",
          "9/8",
          "16/8"
        ],
        "correctIndex": 0,
        "explanation": "3小於8，所以3/8小於1，是真分數。"
      },
      {
        "id": "m_hanlin_115_4a_math04_q02",
        "question": "哪一個是假分數？",
        "options": [
          "2/7",
          "7/7",
          "3/7",
          "6/7"
        ],
        "correctIndex": 1,
        "explanation": "分子等於分母也是假分數，7/7＝1。"
      },
      {
        "id": "m_hanlin_115_4a_math04_q03",
        "question": "2又3/5 換成假分數是多少？",
        "options": [
          "6/5",
          "10/5",
          "13/5",
          "15/5"
        ],
        "correctIndex": 2,
        "explanation": "2×5＋3＝13，分母保持5。"
      },
      {
        "id": "m_hanlin_115_4a_math04_q04",
        "question": "17/4 換成帶分數是多少？",
        "options": [
          "3又1/4",
          "4又3/4",
          "5又1/4",
          "4又1/4"
        ],
        "correctIndex": 3,
        "explanation": "17÷4＝4餘1，所以是4又1/4。"
      },
      {
        "id": "m_hanlin_115_4a_math04_q05",
        "question": "3 個完整披薩，用分母為 6 的假分數表示是多少？",
        "options": [
          "18/6",
          "3/6",
          "6/6",
          "9/6"
        ],
        "correctIndex": 0,
        "explanation": "每個完整披薩是6/6，3個是18/6。"
      },
      {
        "id": "m_hanlin_115_4a_math04_q06",
        "question": "比較 11/7 和 9/7，哪個較大？",
        "options": [
          "9/7",
          "11/7",
          "兩者一樣大",
          "無法比較"
        ],
        "correctIndex": 1,
        "explanation": "同分母比較分子，11大於9。"
      },
      {
        "id": "m_hanlin_115_4a_math04_q07",
        "question": "比較 2又1/8 和 1又7/8，哪個較大？",
        "options": [
          "1又7/8",
          "兩者一樣大",
          "2又1/8",
          "無法比較"
        ],
        "correctIndex": 2,
        "explanation": "先比整數部分，2大於1。"
      },
      {
        "id": "m_hanlin_115_4a_math04_q08",
        "question": "把數線上每個 1 等分成 4 份，從 0 起數到第 7 小格，是哪個數？",
        "options": [
          "7/7",
          "4/7",
          "7/3",
          "7/4"
        ],
        "correctIndex": 3,
        "explanation": "每格是1/4，7格是7/4，也就是1又3/4。"
      },
      {
        "id": "m_hanlin_115_4a_math04_q09",
        "question": "22/5 換成帶分數是多少？",
        "options": [
          "4又2/5",
          "2又4/5",
          "5又2/5",
          "4又3/5"
        ],
        "correctIndex": 0,
        "explanation": "22÷5＝4餘2。"
      },
      {
        "id": "m_hanlin_115_4a_math04_q10",
        "question": "一個完整蛋糕分成 9 等份，吃了 1 個完整蛋糕又 2 份，用假分數表示吃了多少？",
        "options": [
          "3/9 個",
          "11/9 個",
          "9/11 個",
          "10/9 個"
        ],
        "correctIndex": 1,
        "explanation": "1個完整蛋糕是9/9，再加2/9，共11/9。"
      }
    ]
  },
  {
    "id": "m_hanlin_115_4a_math_05",
    "name": "第5單元｜公里",
    "badge": "115上・翰林四上",
    "curriculumVerified": true,
    "studyCard": {
      "title": "公里｜數學闖關學習卡",
      "summary": "用公里與公尺表示距離，練習換算、比較與加減。",
      "concepts": [
        "【單位】公里適合表示較長距離，符號km；公尺符號m。",
        "【換算】1公里＝1,000公尺。把公里換公尺先乘1,000，再加剩下的公尺。",
        "【複名數】4,280公尺可寫成4公里280公尺。",
        "【比較】先換成相同單位再比較，不只看前面的數字。",
        "【加減】公尺滿1,000要進1公里；公尺不夠減可借1公里換1,000公尺。"
      ],
      "formula": "1 km＝1,000 m。加減與比較前先統一單位。",
      "tips": "公里與公尺別混用；600公尺不是600公里。 教材來源：小芸／數學「115上翰林小無敵自修數學4上」，印刷頁69、71、74（PDF第71、73、76頁）。以下10題為依單元重點設計的原創練習。"
    },
    "questions": [
      {
        "id": "m_hanlin_115_4a_math05_q01",
        "question": "5 公里是多少公尺？",
        "options": [
          "500 公尺",
          "5000 公尺",
          "50000 公尺",
          "50 公尺"
        ],
        "correctIndex": 1,
        "explanation": "5×1,000＝5,000。"
      },
      {
        "id": "m_hanlin_115_4a_math05_q02",
        "question": "2 公里 350 公尺是多少公尺？",
        "options": [
          "2351 公尺",
          "2360 公尺",
          "2350 公尺",
          "2349 公尺"
        ],
        "correctIndex": 2,
        "explanation": "2,000＋350＝2,350。"
      },
      {
        "id": "m_hanlin_115_4a_math05_q03",
        "question": "7,080 公尺可以寫成什麼？",
        "options": [
          "7 公里 800 公尺",
          "70 公里 80 公尺",
          "7 公里 8 公尺",
          "7 公里 80 公尺"
        ],
        "correctIndex": 3,
        "explanation": "7,080＝7,000＋80，所以是7公里80公尺。"
      },
      {
        "id": "m_hanlin_115_4a_math05_q04",
        "question": "3 公里 20 公尺和 2,980 公尺，哪個較長？",
        "options": [
          "3 公里 20 公尺",
          "2,980 公尺",
          "一樣長",
          "無法比較"
        ],
        "correctIndex": 0,
        "explanation": "3公里20公尺＝3,020公尺，比2,980公尺長。"
      },
      {
        "id": "m_hanlin_115_4a_math05_q05",
        "question": "2 公里 780 公尺，再走 450 公尺，共走多少？",
        "options": [
          "2 公里 230 公尺",
          "3 公里 230 公尺",
          "3 公里 130 公尺",
          "2 公里 1,030 公尺"
        ],
        "correctIndex": 1,
        "explanation": "2,780＋450＝3,230公尺，寫成3公里230公尺。"
      },
      {
        "id": "m_hanlin_115_4a_math05_q06",
        "question": "5 公里 100 公尺減去 2 公里 650 公尺，是多少？",
        "options": [
          "3 公里 550 公尺",
          "2 公里 550 公尺",
          "2 公里 450 公尺",
          "3 公里 450 公尺"
        ],
        "correctIndex": 2,
        "explanation": "5,100－2,650＝2,450公尺。"
      },
      {
        "id": "m_hanlin_115_4a_math05_q07",
        "question": "從家到圖書館 1,250 公尺，原路往返一次共幾公尺？",
        "options": [
          "2501 公尺",
          "2510 公尺",
          "2499 公尺",
          "2500 公尺"
        ],
        "correctIndex": 3,
        "explanation": "1,250×2＝2,500。"
      },
      {
        "id": "m_hanlin_115_4a_math05_q08",
        "question": "一圈 250 公尺的步道，走 4 圈共幾公里？",
        "options": [
          "1 公里",
          "2 公里",
          "11 公里",
          "0 公里"
        ],
        "correctIndex": 0,
        "explanation": "250×4＝1,000公尺＝1公里。"
      },
      {
        "id": "m_hanlin_115_4a_math05_q09",
        "question": "描述兩個城市之間的距離，哪種單位通常較適合？",
        "options": [
          "毫米",
          "公里",
          "毫升",
          "公斤"
        ],
        "correctIndex": 1,
        "explanation": "城市之間較長的距離通常用公里表示。"
      },
      {
        "id": "m_hanlin_115_4a_math05_q10",
        "question": "6 公里比 4 公里 700 公尺多多少公尺？",
        "options": [
          "1301 公尺",
          "1310 公尺",
          "1300 公尺",
          "1299 公尺"
        ],
        "correctIndex": 2,
        "explanation": "6,000－4,700＝1,300。"
      }
    ]
  },
  {
    "id": "m_hanlin_115_4a_math_06",
    "name": "第6單元｜除法",
    "badge": "115上・翰林四上",
    "curriculumVerified": true,
    "studyCard": {
      "title": "除法｜數學闖關學習卡",
      "summary": "練習較大數的除法、餘數、驗算與生活應用。",
      "concepts": [
        "【平均分與分組】把總量平均分成幾份，或每份固定數量求份數，都能用除法。",
        "【直式】從最高位依序試商，確認商乘除數不超過目前的被除數。",
        "【餘數】餘數一定比除數小；不夠商1時仍要注意商中的0。",
        "【驗算】除數×商＋餘數＝被除數。",
        "【有0的規律】被除數與除數同時縮小相同倍數，可以幫助找商；原題餘數仍須用原單位驗算。",
        "【情境】求裝滿幾盒、平均每人幾個、至少幾台車，對餘數的處理可能不同。"
      ],
      "formula": "被除數＝除數×商＋餘數；0≤餘數＜除數。",
      "tips": "至少需要幾台車要容納剩下的人，不能只取商。 教材來源：小芸／數學「115上翰林小無敵自修數學4上」，印刷頁96、98、101（PDF第98、100、103頁）。以下10題為依單元重點設計的原創練習。"
    },
    "questions": [
      {
        "id": "m_hanlin_115_4a_math06_q01",
        "question": "7,248÷6＝？",
        "options": [
          "1209",
          "1218",
          "1208",
          "1207"
        ],
        "correctIndex": 2,
        "explanation": "6×1,208＝7,248，商是1,208。"
      },
      {
        "id": "m_hanlin_115_4a_math06_q02",
        "question": "85÷24 的商與餘數是多少？",
        "options": [
          "商 3，餘 3",
          "商 4，餘 11",
          "商 2，餘 37",
          "商 3，餘 13"
        ],
        "correctIndex": 3,
        "explanation": "24×3＝72，85－72＝13，13小於24。"
      },
      {
        "id": "m_hanlin_115_4a_math06_q03",
        "question": "3,780÷35＝？",
        "options": [
          "108",
          "109",
          "118",
          "107"
        ],
        "correctIndex": 0,
        "explanation": "35×108＝3,780。"
      },
      {
        "id": "m_hanlin_115_4a_math06_q04",
        "question": "5,428÷200 的商與餘數是多少？",
        "options": [
          "商 27，餘 280",
          "商 27，餘 28",
          "商 28，餘 28",
          "商 26，餘 228"
        ],
        "correctIndex": 1,
        "explanation": "200×27＝5,400，剩28；餘數小於200。"
      },
      {
        "id": "m_hanlin_115_4a_math06_q05",
        "question": "計算 158÷12，商 13、餘 2，哪個驗算正確？",
        "options": [
          "12＋13＋2＝158",
          "12×2＋13＝158",
          "12×13＋2＝158",
          "158×12＝13＋2"
        ],
        "correctIndex": 2,
        "explanation": "除數×商＋餘數＝被除數。"
      },
      {
        "id": "m_hanlin_115_4a_math06_q06",
        "question": "除以 18 的除法，哪個數不可能是餘數？",
        "options": [
          "0",
          "7",
          "17",
          "18"
        ],
        "correctIndex": 3,
        "explanation": "餘數要小於除數，不能等於18。"
      },
      {
        "id": "m_hanlin_115_4a_math06_q07",
        "question": "963 顆珠子，每袋裝 40 顆，最多裝滿幾袋、剩幾顆？",
        "options": [
          "24 袋，剩 3 顆",
          "23 袋，剩 3 顆",
          "24 袋，剩 30 顆",
          "25 袋，剩 3 顆"
        ],
        "correctIndex": 0,
        "explanation": "40×24＝960，963－960＝3。"
      },
      {
        "id": "m_hanlin_115_4a_math06_q08",
        "question": "97 人搭車，每台車可坐 20 人，至少需要幾台？",
        "options": [
          "6 台",
          "5 台",
          "15 台",
          "4 台"
        ],
        "correctIndex": 1,
        "explanation": "97÷20＝4餘17，剩下17人也要車，所以至少5台。"
      },
      {
        "id": "m_hanlin_115_4a_math06_q09",
        "question": "6,300÷300＝？",
        "options": [
          "22",
          "31",
          "21",
          "20"
        ],
        "correctIndex": 2,
        "explanation": "把兩個數同時除以100，變成63÷3＝21。"
      },
      {
        "id": "m_hanlin_115_4a_math06_q10",
        "question": "2,460 元平均分給 15 人，每人幾元？",
        "options": [
          "165 元",
          "174 元",
          "163 元",
          "164 元"
        ],
        "correctIndex": 3,
        "explanation": "2,460÷15＝164。"
      }
    ]
  },
  {
    "id": "m_hanlin_115_4a_math_07",
    "name": "第7單元｜三角形與全等",
    "badge": "115上・翰林四上",
    "curriculumVerified": true,
    "studyCard": {
      "title": "三角形與全等｜數學闖關學習卡",
      "summary": "認識三角形的邊角特性，理解全等與對應關係。",
      "concepts": [
        "【按角分類】三個銳角是銳角三角形；有一個直角是直角三角形；有一個鈍角是鈍角三角形。",
        "【按邊分類】等腰三角形有兩邊一樣長；正三角形三邊一樣長。",
        "【兩種分類可同時使用】例如等腰直角三角形，同時描述邊和角的特色。",
        "【畫三角形】依指定的角與邊長，用直尺、量角器或三角板畫出兩邊，再連接端點。",
        "【全等】形狀與大小相同，移動、旋轉或翻面後可以完全重疊。",
        "【對應】全等圖形的對應邊長、對應角度相同；不能只看目前朝向猜對應點。"
      ],
      "formula": "全等＝形狀相同＋大小相同。找對應點，再找對應邊與角。",
      "tips": "外觀朝向不同仍可能全等；放大後形狀相同也不一定全等。 教材來源：小芸／數學「115上翰林小無敵自修數學4上」，印刷頁112、114、117（PDF第114、116、119頁）。以下10題為依單元重點設計的原創練習。"
    },
    "questions": [
      {
        "id": "m_hanlin_115_4a_math07_q01",
        "question": "一個三角形有一個 90° 的角，按角分類是什麼？",
        "options": [
          "銳角三角形",
          "鈍角三角形",
          "周角三角形",
          "直角三角形"
        ],
        "correctIndex": 3,
        "explanation": "有一個直角的是直角三角形。"
      },
      {
        "id": "m_hanlin_115_4a_math07_q02",
        "question": "一個三角形有一個 110° 的角，按角分類是什麼？",
        "options": [
          "鈍角三角形",
          "直角三角形",
          "銳角三角形",
          "四邊形"
        ],
        "correctIndex": 0,
        "explanation": "有一個鈍角的是鈍角三角形。"
      },
      {
        "id": "m_hanlin_115_4a_math07_q03",
        "question": "三角形的三個角都是銳角，叫什麼？",
        "options": [
          "直角三角形",
          "銳角三角形",
          "鈍角三角形",
          "平角三角形"
        ],
        "correctIndex": 1,
        "explanation": "按角分類，三個銳角形成銳角三角形。"
      },
      {
        "id": "m_hanlin_115_4a_math07_q04",
        "question": "三邊都一樣長的三角形叫什麼？",
        "options": [
          "長方形",
          "圓形",
          "正三角形",
          "鈍角"
        ],
        "correctIndex": 2,
        "explanation": "正三角形的三邊一樣長。"
      },
      {
        "id": "m_hanlin_115_4a_math07_q05",
        "question": "三角形的邊長是 5 cm、5 cm、6 cm，哪項描述正確？",
        "options": [
          "三邊相等，是正三角形",
          "一定是直角三角形",
          "不可能是三角形",
          "有兩邊相等，是等腰三角形"
        ],
        "correctIndex": 3,
        "explanation": "兩邊都是5 cm，符合等腰三角形的邊長特色。"
      },
      {
        "id": "m_hanlin_115_4a_math07_q06",
        "question": "兩條一樣長的邊夾成直角，再連接兩個端點，得到什麼？",
        "options": [
          "等腰直角三角形",
          "正三角形",
          "圓形",
          "四邊形"
        ],
        "correctIndex": 0,
        "explanation": "兩邊等長且包含直角，同時符合等腰與直角的分類。"
      },
      {
        "id": "m_hanlin_115_4a_math07_q07",
        "question": "兩個圖形完全重疊，形狀與大小都相同，稱為什麼？",
        "options": [
          "只有顏色相同的圖形",
          "全等圖形",
          "放大圖形",
          "任意圖形"
        ],
        "correctIndex": 1,
        "explanation": "完全重疊代表形狀與大小相同。"
      },
      {
        "id": "m_hanlin_115_4a_math07_q08",
        "question": "把三角形旋轉後，邊長與角度都沒變，它和原圖的關係是什麼？",
        "options": [
          "一定不全等",
          "變成四邊形",
          "仍然全等",
          "大小一定增加"
        ],
        "correctIndex": 2,
        "explanation": "旋轉不改變形狀與大小。"
      },
      {
        "id": "m_hanlin_115_4a_math07_q09",
        "question": "三角形 ABC 與 DEF 全等，A 對 D、B 對 E、C 對 F，AB 的對應邊是哪一條？",
        "options": [
          "DF",
          "EF",
          "AC",
          "DE"
        ],
        "correctIndex": 3,
        "explanation": "A對D、B對E，所以AB對DE。"
      },
      {
        "id": "m_hanlin_115_4a_math07_q10",
        "question": "上述對應關係中，BC 長 7 cm，EF 長多少？",
        "options": [
          "7 cm",
          "14 cm",
          "6 cm",
          "8 cm"
        ],
        "correctIndex": 0,
        "explanation": "B對E、C對F，BC和EF是對應邊，長度相同。"
      }
    ]
  },
  {
    "id": "m_hanlin_115_4a_math_08",
    "name": "第8單元｜兩步驟問題與併式",
    "badge": "115上・翰林四上",
    "curriculumVerified": true,
    "studyCard": {
      "title": "兩步驟問題與併式｜數學闖關學習卡",
      "summary": "把生活中的兩步驟問題整理成一個含括號的算式。",
      "concepts": [
        "【找問題】先說明題目最後要求什麼，再決定先算哪個中間數量。",
        "【括號】將需要先算的部分加括號，表示兩個步驟的關係。",
        "【加減】原有人數、離開與加入可依事件先後記錄。",
        "【乘除與加減】先求總量或單份，再處理剩餘、增加或比較。",
        "【乘與除】多層分組或平均分的問題，須看清每次算出的數量是什麼。",
        "【檢查】單位與情境要一致；別只為了湊出數字而任意換順序。"
      ],
      "formula": "先算的部分用括號標示，例如(原有－離開)＋加入。",
      "tips": "減去的順序不能任意交換；括號代表問題中的先後關係。 教材來源：小芸／數學「115上翰林小無敵自修數學4上」，印刷頁131、133、136（PDF第133、135、138頁）。以下10題為依單元重點設計的原創練習。"
    },
    "questions": [
      {
        "id": "m_hanlin_115_4a_math08_q01",
        "question": "公車原有 38 人，先下車 12 人，再上車 9 人，現在幾人？",
        "options": [
          "35 人",
          "36 人",
          "45 人",
          "34 人"
        ],
        "correctIndex": 0,
        "explanation": "(38－12)＋9＝26＋9＝35。"
      },
      {
        "id": "m_hanlin_115_4a_math08_q02",
        "question": "上述公車問題，哪個併式符合事件順序？",
        "options": [
          "(38＋12)－9",
          "(38－12)＋9",
          "38－(12＋9)",
          "(12－38)＋9"
        ],
        "correctIndex": 1,
        "explanation": "先扣下車人數，再加上車人數。"
      },
      {
        "id": "m_hanlin_115_4a_math08_q03",
        "question": "買 6 本筆記本，每本 35 元，付 300 元，找回幾元？",
        "options": [
          "91 元",
          "100 元",
          "90 元",
          "89 元"
        ],
        "correctIndex": 2,
        "explanation": "300－(6×35)＝300－210＝90。"
      },
      {
        "id": "m_hanlin_115_4a_math08_q04",
        "question": "有 72 枝筆，每盒裝 8 枝，賣出 3 盒後還有幾盒？",
        "options": [
          "7 盒",
          "16 盒",
          "5 盒",
          "6 盒"
        ],
        "correctIndex": 3,
        "explanation": "(72÷8)－3＝9－3＝6。"
      },
      {
        "id": "m_hanlin_115_4a_math08_q05",
        "question": "甲有 240 元，乙有 360 元，合買每個 50 元的物品，最多買幾個？",
        "options": [
          "12 個",
          "13 個",
          "22 個",
          "11 個"
        ],
        "correctIndex": 0,
        "explanation": "(240＋360)÷50＝600÷50＝12。"
      },
      {
        "id": "m_hanlin_115_4a_math08_q06",
        "question": "4 班學生，每班 28 人，每人領 3 張色紙，共需幾張？",
        "options": [
          "337 張",
          "336 張",
          "346 張",
          "335 張"
        ],
        "correctIndex": 1,
        "explanation": "(4×28)×3＝112×3＝336。"
      },
      {
        "id": "m_hanlin_115_4a_math08_q07",
        "question": "900 毫升果汁，先倒出 180 毫升，剩下平均分成 6 杯，每杯幾毫升？",
        "options": [
          "121 毫升",
          "130 毫升",
          "120 毫升",
          "119 毫升"
        ],
        "correctIndex": 2,
        "explanation": "(900－180)÷6＝720÷6＝120。"
      },
      {
        "id": "m_hanlin_115_4a_math08_q08",
        "question": "8 袋糖果，每袋 15 顆，平均分給 5 人，每人幾顆？",
        "options": [
          "25 顆",
          "34 顆",
          "23 顆",
          "24 顆"
        ],
        "correctIndex": 3,
        "explanation": "(8×15)÷5＝120÷5＝24。"
      },
      {
        "id": "m_hanlin_115_4a_math08_q09",
        "question": "每盒 12 顆，共 5 盒，送人 18 顆後剩幾顆？哪個算式正確？",
        "options": [
          "(12×5)－18",
          "12×(5－18)",
          "(12＋5)－18",
          "18－(12×5)"
        ],
        "correctIndex": 0,
        "explanation": "先求5盒共有多少，再扣送出的數量。"
      },
      {
        "id": "m_hanlin_115_4a_math08_q10",
        "question": "算式 (84÷7)×4 的結果是多少？",
        "options": [
          "49",
          "48",
          "58",
          "47"
        ],
        "correctIndex": 1,
        "explanation": "先算84÷7＝12，再算12×4＝48。"
      }
    ]
  },
  {
    "id": "m_hanlin_115_4a_math_09",
    "name": "第9單元｜二位小數",
    "badge": "115上・翰林四上",
    "curriculumVerified": true,
    "studyCard": {
      "title": "二位小數｜數學闖關學習卡",
      "summary": "認識百分位、二位小數比較、長度換算與加減。",
      "concepts": [
        "【百分位】小數點右邊第一位是十分位，第二位是百分位。1個百分位的單位是0.01。",
        "【進位】10個0.01＝0.1；100個0.01＝1。",
        "【比較】先比整數，再比十分位、百分位。0.5與0.50一樣大。",
        "【長度】1 cm＝0.01 m；公分換公尺要除以100。",
        "【加減】小數點對齊，同位值相加減。必要時在小數尾端補0，大小不變。"
      ],
      "formula": "0.01＝百分之一。小數點對齊；1 m＝100 cm。",
      "tips": "不要只比小數位數多少，也不能把0.08當成0.8。 教材來源：小芸／數學「115上翰林小無敵自修數學4上」，印刷頁143、145、148（PDF第145、147、150頁）。以下10題為依單元重點設計的原創練習。"
    },
    "questions": [
      {
        "id": "m_hanlin_115_4a_math09_q01",
        "question": "8 個 0.01 合起來是多少？",
        "options": [
          "0.8",
          "0.08",
          "8.01",
          "0.18"
        ],
        "correctIndex": 1,
        "explanation": "8個百分之一是百分之八，記成0.08。"
      },
      {
        "id": "m_hanlin_115_4a_math09_q02",
        "question": "3 個 1、4 個 0.1、6 個 0.01 合起來是多少？",
        "options": [
          "3.64",
          "34.6",
          "3.46",
          "3.10"
        ],
        "correctIndex": 2,
        "explanation": "3＋0.4＋0.06＝3.46。"
      },
      {
        "id": "m_hanlin_115_4a_math09_q03",
        "question": "0.99 再加 0.01 是多少？",
        "options": [
          "0.910",
          "0.991",
          "1.10",
          "1.00"
        ],
        "correctIndex": 3,
        "explanation": "99個0.01加1個0.01，共100個0.01＝1。"
      },
      {
        "id": "m_hanlin_115_4a_math09_q04",
        "question": "比較 2.58 和 2.6，哪個較大？",
        "options": [
          "2.6",
          "2.58",
          "一樣大",
          "無法比較"
        ],
        "correctIndex": 0,
        "explanation": "2.6＝2.60，2.60大於2.58。"
      },
      {
        "id": "m_hanlin_115_4a_math09_q05",
        "question": "0.7 和 0.70 的關係是什麼？",
        "options": [
          "0.7較大",
          "一樣大",
          "0.70較大",
          "0.70是0.7的10倍"
        ],
        "correctIndex": 1,
        "explanation": "小數尾端補0不改變大小。"
      },
      {
        "id": "m_hanlin_115_4a_math09_q06",
        "question": "45 cm 等於多少 m？",
        "options": [
          "4.5 m",
          "0.045 m",
          "0.45 m",
          "45 m"
        ],
        "correctIndex": 2,
        "explanation": "45÷100＝0.45。"
      },
      {
        "id": "m_hanlin_115_4a_math09_q07",
        "question": "2.08 m 等於多少 cm？",
        "options": [
          "28 cm",
          "2,080 cm",
          "2080.08 cm",
          "208 cm"
        ],
        "correctIndex": 3,
        "explanation": "2 m是200 cm，再加8 cm，共208 cm。"
      },
      {
        "id": "m_hanlin_115_4a_math09_q08",
        "question": "3.47＋1.86＝？",
        "options": [
          "5.33",
          "4.33",
          "5.23",
          "5.43"
        ],
        "correctIndex": 0,
        "explanation": "小數點對齊，3.47＋1.86＝5.33。"
      },
      {
        "id": "m_hanlin_115_4a_math09_q09",
        "question": "5.00－2.68＝？",
        "options": [
          "3.32",
          "2.32",
          "2.42",
          "2.22"
        ],
        "correctIndex": 1,
        "explanation": "同位對齊退位，5.00－2.68＝2.32。"
      },
      {
        "id": "m_hanlin_115_4a_math09_q10",
        "question": "有 1.25 m 緞帶，再接上 0.85 m，共長多少？",
        "options": [
          "1.10 m",
          "2.00 m",
          "2.10 m",
          "2.20 m"
        ],
        "correctIndex": 2,
        "explanation": "1.25＋0.85＝2.10 m。"
      }
    ]
  },
  {
    "id": "m_hanlin_115_4a_math_10",
    "name": "第10單元｜統計圖表",
    "badge": "115上・翰林四上",
    "curriculumVerified": true,
    "studyCard": {
      "title": "統計圖表｜數學闖關學習卡",
      "summary": "報讀長條圖與折線圖，從刻度、標題與資料找出比較與變化。",
      "concepts": [
        "【讀圖順序】先看標題，再看橫軸、縱軸的意義與單位，最後讀刻度和資料。",
        "【長條圖】比較不同類別的數量。每個長條代表一個類別，高度須對照刻度。",
        "【畫長條圖】先整理表格，決定一致刻度，再依數量畫出長條。",
        "【折線圖】以點表示資料，再按順序連線，可看出一段時間內的變化。",
        "【刻度提醒】一格不一定是1；有省略符號時，要留意軸上省略的範圍。",
        "【比較】最多、最少、差多少、合計多少，都要依資料計算，不只看圖形外觀。"
      ],
      "formula": "看標題→看軸與單位→看每格刻度→讀資料→比較或計算。",
      "tips": "刻度可能不是1，也可能省略一部分，不要只數格子。 教材來源：小芸／數學「115上翰林小無敵自修數學4上」，印刷頁157、159、162（PDF第159、161、164頁）。以下10題為依單元重點設計的原創練習。"
    },
    "questions": [
      {
        "id": "m_hanlin_115_4a_math10_q01",
        "question": "依下方長條圖，哪一類票數最多？",
        "options": [
          "甲",
          "丙",
          "乙",
          "丁"
        ],
        "correctIndex": 2,
        "explanation": "乙35票，高於甲20、丙25、丁10。",
        "diagram": "<svg viewBox=\"0 0 420 240\" role=\"img\" aria-label=\"閱讀票選長條圖，甲20票、乙35票、丙25票、丁10票\" style=\"width:100%;max-width:520px;background:#fff;border-radius:12px\"><g fill=\"#334155\" font-size=\"14\"><text x=\"12\" y=\"22\">票數（票）</text><text x=\"20\" y=\"204\">0</text><text x=\"12\" y=\"159\">10</text><text x=\"12\" y=\"114\">20</text><text x=\"12\" y=\"69\">30</text><text x=\"12\" y=\"24\">40</text></g><g stroke=\"#cbd5e1\"><path d=\"M45 200H400 M45 155H400 M45 110H400 M45 65H400 M45 20H400\"/></g><path d=\"M45 20V200H400\" fill=\"none\" stroke=\"#334155\"/><g fill=\"#a855f7\"><rect x=\"70\" y=\"110\" width=\"42\" height=\"90\"/><rect x=\"155\" y=\"42.5\" width=\"42\" height=\"157.5\"/><rect x=\"240\" y=\"87.5\" width=\"42\" height=\"112.5\"/><rect x=\"325\" y=\"155\" width=\"42\" height=\"45\"/></g><g fill=\"#334155\" font-size=\"16\" text-anchor=\"middle\"><text x=\"91\" y=\"226\">甲</text><text x=\"176\" y=\"226\">乙</text><text x=\"261\" y=\"226\">丙</text><text x=\"346\" y=\"226\">丁</text></g></svg>"
      },
      {
        "id": "m_hanlin_115_4a_math10_q02",
        "question": "依下方長條圖，乙比丁多幾票？",
        "options": [
          "20 票",
          "15 票",
          "45 票",
          "25 票"
        ],
        "correctIndex": 3,
        "explanation": "35－10＝25票。",
        "diagram": "<svg viewBox=\"0 0 420 240\" role=\"img\" aria-label=\"閱讀票選長條圖，甲20票、乙35票、丙25票、丁10票\" style=\"width:100%;max-width:520px;background:#fff;border-radius:12px\"><g fill=\"#334155\" font-size=\"14\"><text x=\"12\" y=\"22\">票數（票）</text><text x=\"20\" y=\"204\">0</text><text x=\"12\" y=\"159\">10</text><text x=\"12\" y=\"114\">20</text><text x=\"12\" y=\"69\">30</text><text x=\"12\" y=\"24\">40</text></g><g stroke=\"#cbd5e1\"><path d=\"M45 200H400 M45 155H400 M45 110H400 M45 65H400 M45 20H400\"/></g><path d=\"M45 20V200H400\" fill=\"none\" stroke=\"#334155\"/><g fill=\"#a855f7\"><rect x=\"70\" y=\"110\" width=\"42\" height=\"90\"/><rect x=\"155\" y=\"42.5\" width=\"42\" height=\"157.5\"/><rect x=\"240\" y=\"87.5\" width=\"42\" height=\"112.5\"/><rect x=\"325\" y=\"155\" width=\"42\" height=\"45\"/></g><g fill=\"#334155\" font-size=\"16\" text-anchor=\"middle\"><text x=\"91\" y=\"226\">甲</text><text x=\"176\" y=\"226\">乙</text><text x=\"261\" y=\"226\">丙</text><text x=\"346\" y=\"226\">丁</text></g></svg>"
      },
      {
        "id": "m_hanlin_115_4a_math10_q03",
        "question": "依下方長條圖，甲與丙合計幾票？",
        "options": [
          "45 票",
          "40 票",
          "35 票",
          "50 票"
        ],
        "correctIndex": 0,
        "explanation": "20＋25＝45票。",
        "diagram": "<svg viewBox=\"0 0 420 240\" role=\"img\" aria-label=\"閱讀票選長條圖，甲20票、乙35票、丙25票、丁10票\" style=\"width:100%;max-width:520px;background:#fff;border-radius:12px\"><g fill=\"#334155\" font-size=\"14\"><text x=\"12\" y=\"22\">票數（票）</text><text x=\"20\" y=\"204\">0</text><text x=\"12\" y=\"159\">10</text><text x=\"12\" y=\"114\">20</text><text x=\"12\" y=\"69\">30</text><text x=\"12\" y=\"24\">40</text></g><g stroke=\"#cbd5e1\"><path d=\"M45 200H400 M45 155H400 M45 110H400 M45 65H400 M45 20H400\"/></g><path d=\"M45 20V200H400\" fill=\"none\" stroke=\"#334155\"/><g fill=\"#a855f7\"><rect x=\"70\" y=\"110\" width=\"42\" height=\"90\"/><rect x=\"155\" y=\"42.5\" width=\"42\" height=\"157.5\"/><rect x=\"240\" y=\"87.5\" width=\"42\" height=\"112.5\"/><rect x=\"325\" y=\"155\" width=\"42\" height=\"45\"/></g><g fill=\"#334155\" font-size=\"16\" text-anchor=\"middle\"><text x=\"91\" y=\"226\">甲</text><text x=\"176\" y=\"226\">乙</text><text x=\"261\" y=\"226\">丙</text><text x=\"346\" y=\"226\">丁</text></g></svg>"
      },
      {
        "id": "m_hanlin_115_4a_math10_q04",
        "question": "依下方長條圖，四類合計幾票？",
        "options": [
          "80 票",
          "90 票",
          "95 票",
          "100 票"
        ],
        "correctIndex": 1,
        "explanation": "20＋35＋25＋10＝90票。",
        "diagram": "<svg viewBox=\"0 0 420 240\" role=\"img\" aria-label=\"閱讀票選長條圖，甲20票、乙35票、丙25票、丁10票\" style=\"width:100%;max-width:520px;background:#fff;border-radius:12px\"><g fill=\"#334155\" font-size=\"14\"><text x=\"12\" y=\"22\">票數（票）</text><text x=\"20\" y=\"204\">0</text><text x=\"12\" y=\"159\">10</text><text x=\"12\" y=\"114\">20</text><text x=\"12\" y=\"69\">30</text><text x=\"12\" y=\"24\">40</text></g><g stroke=\"#cbd5e1\"><path d=\"M45 200H400 M45 155H400 M45 110H400 M45 65H400 M45 20H400\"/></g><path d=\"M45 20V200H400\" fill=\"none\" stroke=\"#334155\"/><g fill=\"#a855f7\"><rect x=\"70\" y=\"110\" width=\"42\" height=\"90\"/><rect x=\"155\" y=\"42.5\" width=\"42\" height=\"157.5\"/><rect x=\"240\" y=\"87.5\" width=\"42\" height=\"112.5\"/><rect x=\"325\" y=\"155\" width=\"42\" height=\"45\"/></g><g fill=\"#334155\" font-size=\"16\" text-anchor=\"middle\"><text x=\"91\" y=\"226\">甲</text><text x=\"176\" y=\"226\">乙</text><text x=\"261\" y=\"226\">丙</text><text x=\"346\" y=\"226\">丁</text></g></svg>"
      },
      {
        "id": "m_hanlin_115_4a_math10_q05",
        "question": "依下方長條圖，縱軸的單位是什麼？",
        "options": [
          "公里",
          "公斤",
          "票",
          "毫升"
        ],
        "correctIndex": 2,
        "explanation": "縱軸標明票數（票）。",
        "diagram": "<svg viewBox=\"0 0 420 240\" role=\"img\" aria-label=\"閱讀票選長條圖，甲20票、乙35票、丙25票、丁10票\" style=\"width:100%;max-width:520px;background:#fff;border-radius:12px\"><g fill=\"#334155\" font-size=\"14\"><text x=\"12\" y=\"22\">票數（票）</text><text x=\"20\" y=\"204\">0</text><text x=\"12\" y=\"159\">10</text><text x=\"12\" y=\"114\">20</text><text x=\"12\" y=\"69\">30</text><text x=\"12\" y=\"24\">40</text></g><g stroke=\"#cbd5e1\"><path d=\"M45 200H400 M45 155H400 M45 110H400 M45 65H400 M45 20H400\"/></g><path d=\"M45 20V200H400\" fill=\"none\" stroke=\"#334155\"/><g fill=\"#a855f7\"><rect x=\"70\" y=\"110\" width=\"42\" height=\"90\"/><rect x=\"155\" y=\"42.5\" width=\"42\" height=\"157.5\"/><rect x=\"240\" y=\"87.5\" width=\"42\" height=\"112.5\"/><rect x=\"325\" y=\"155\" width=\"42\" height=\"45\"/></g><g fill=\"#334155\" font-size=\"16\" text-anchor=\"middle\"><text x=\"91\" y=\"226\">甲</text><text x=\"176\" y=\"226\">乙</text><text x=\"261\" y=\"226\">丙</text><text x=\"346\" y=\"226\">丁</text></g></svg>"
      },
      {
        "id": "m_hanlin_115_4a_math10_q06",
        "question": "依下方折線圖，哪一天閱讀時間最長？",
        "options": [
          "星期一",
          "星期二",
          "星期五",
          "星期四"
        ],
        "correctIndex": 3,
        "explanation": "星期四30分鐘是最大值。",
        "diagram": "<svg viewBox=\"0 0 420 240\" role=\"img\" aria-label=\"週一至週五閱讀分鐘折線圖，依序10、20、15、30、25分鐘\" style=\"width:100%;max-width:520px;background:#fff;border-radius:12px\"><g fill=\"#334155\" font-size=\"14\"><text x=\"10\" y=\"18\">時間（分鐘）</text><text x=\"22\" y=\"204\">0</text><text x=\"12\" y=\"144\">10</text><text x=\"12\" y=\"84\">20</text><text x=\"12\" y=\"24\">30</text></g><g stroke=\"#cbd5e1\"><path d=\"M45 200H400 M45 140H400 M45 80H400 M45 20H400\"/></g><path d=\"M45 20V200H400\" fill=\"none\" stroke=\"#334155\"/><polyline points=\"70,140 145,80 220,110 295,20 370,50\" fill=\"none\" stroke=\"#a855f7\" stroke-width=\"3\"/><g fill=\"#a855f7\"><circle cx=\"70\" cy=\"140\" r=\"5\"/><circle cx=\"145\" cy=\"80\" r=\"5\"/><circle cx=\"220\" cy=\"110\" r=\"5\"/><circle cx=\"295\" cy=\"20\" r=\"5\"/><circle cx=\"370\" cy=\"50\" r=\"5\"/></g><g fill=\"#334155\" font-size=\"16\" text-anchor=\"middle\"><text x=\"70\" y=\"226\">一</text><text x=\"145\" y=\"226\">二</text><text x=\"220\" y=\"226\">三</text><text x=\"295\" y=\"226\">四</text><text x=\"370\" y=\"226\">五</text></g></svg>"
      },
      {
        "id": "m_hanlin_115_4a_math10_q07",
        "question": "依下方折線圖，星期二到星期三的閱讀時間怎樣變化？",
        "options": [
          "減少 5 分鐘",
          "增加 5 分鐘",
          "減少 10 分鐘",
          "完全不變"
        ],
        "correctIndex": 0,
        "explanation": "20分鐘變成15分鐘，減少5分鐘。",
        "diagram": "<svg viewBox=\"0 0 420 240\" role=\"img\" aria-label=\"週一至週五閱讀分鐘折線圖，依序10、20、15、30、25分鐘\" style=\"width:100%;max-width:520px;background:#fff;border-radius:12px\"><g fill=\"#334155\" font-size=\"14\"><text x=\"10\" y=\"18\">時間（分鐘）</text><text x=\"22\" y=\"204\">0</text><text x=\"12\" y=\"144\">10</text><text x=\"12\" y=\"84\">20</text><text x=\"12\" y=\"24\">30</text></g><g stroke=\"#cbd5e1\"><path d=\"M45 200H400 M45 140H400 M45 80H400 M45 20H400\"/></g><path d=\"M45 20V200H400\" fill=\"none\" stroke=\"#334155\"/><polyline points=\"70,140 145,80 220,110 295,20 370,50\" fill=\"none\" stroke=\"#a855f7\" stroke-width=\"3\"/><g fill=\"#a855f7\"><circle cx=\"70\" cy=\"140\" r=\"5\"/><circle cx=\"145\" cy=\"80\" r=\"5\"/><circle cx=\"220\" cy=\"110\" r=\"5\"/><circle cx=\"295\" cy=\"20\" r=\"5\"/><circle cx=\"370\" cy=\"50\" r=\"5\"/></g><g fill=\"#334155\" font-size=\"16\" text-anchor=\"middle\"><text x=\"70\" y=\"226\">一</text><text x=\"145\" y=\"226\">二</text><text x=\"220\" y=\"226\">三</text><text x=\"295\" y=\"226\">四</text><text x=\"370\" y=\"226\">五</text></g></svg>"
      },
      {
        "id": "m_hanlin_115_4a_math10_q08",
        "question": "依下方折線圖，星期三到星期四增加幾分鐘？",
        "options": [
          "10 分鐘",
          "15 分鐘",
          "20 分鐘",
          "5 分鐘"
        ],
        "correctIndex": 1,
        "explanation": "30－15＝15分鐘。",
        "diagram": "<svg viewBox=\"0 0 420 240\" role=\"img\" aria-label=\"週一至週五閱讀分鐘折線圖，依序10、20、15、30、25分鐘\" style=\"width:100%;max-width:520px;background:#fff;border-radius:12px\"><g fill=\"#334155\" font-size=\"14\"><text x=\"10\" y=\"18\">時間（分鐘）</text><text x=\"22\" y=\"204\">0</text><text x=\"12\" y=\"144\">10</text><text x=\"12\" y=\"84\">20</text><text x=\"12\" y=\"24\">30</text></g><g stroke=\"#cbd5e1\"><path d=\"M45 200H400 M45 140H400 M45 80H400 M45 20H400\"/></g><path d=\"M45 20V200H400\" fill=\"none\" stroke=\"#334155\"/><polyline points=\"70,140 145,80 220,110 295,20 370,50\" fill=\"none\" stroke=\"#a855f7\" stroke-width=\"3\"/><g fill=\"#a855f7\"><circle cx=\"70\" cy=\"140\" r=\"5\"/><circle cx=\"145\" cy=\"80\" r=\"5\"/><circle cx=\"220\" cy=\"110\" r=\"5\"/><circle cx=\"295\" cy=\"20\" r=\"5\"/><circle cx=\"370\" cy=\"50\" r=\"5\"/></g><g fill=\"#334155\" font-size=\"16\" text-anchor=\"middle\"><text x=\"70\" y=\"226\">一</text><text x=\"145\" y=\"226\">二</text><text x=\"220\" y=\"226\">三</text><text x=\"295\" y=\"226\">四</text><text x=\"370\" y=\"226\">五</text></g></svg>"
      },
      {
        "id": "m_hanlin_115_4a_math10_q09",
        "question": "縱軸每一小格表示 5 人，一個長條從 0 延伸到第 6 小格，代表幾人？",
        "options": [
          "6 人",
          "11 人",
          "30 人",
          "25 人"
        ],
        "correctIndex": 2,
        "explanation": "6×5＝30人，要依每格刻度換算。"
      },
      {
        "id": "m_hanlin_115_4a_math10_q10",
        "question": "若想呈現一週中每天閱讀時間的變化，本課哪種圖最適合？",
        "options": [
          "只寫一個總數",
          "沒有刻度的圖",
          "只列所有人的名字",
          "折線圖"
        ],
        "correctIndex": 3,
        "explanation": "折線圖可呈現按時間順序的變化。"
      }
    ]
  }
];
(() => {
  const originalRender = renderCurrentQuestion;
  renderCurrentQuestion = function() {
    originalRender();
    let figure=document.getElementById('question-math-figure');
    if (!figure) { figure=document.createElement('div'); figure.id='question-math-figure'; figure.className='my-4'; document.getElementById('question-text').after(figure); }
    const diagram=currentQuestions[currentQuestionIndex]?.diagram;
    figure.innerHTML=diagram || ''; figure.classList.toggle('hidden',!diagram);
  };
})();
