export const categories = [
  {
    id: "logic",
    name: "1. 邏輯 (Logic)",
    description: "像大腦一樣做判斷，決定對 (True) 還是錯 (False)。",
    color: "bg-teal-500",
    blocks: [
      {
        name: "如果否則 (if-else)",
        image: "邏輯-如果否則.png",
        desc: "程式的分岔路口。如果條件成立就做A，否則做B。",
        detailed: {
          title: "如果否則 (if-else) - 程式守門員",
          param: "鑰匙 (條件)：如果這把鑰匙是對的 (True)，門才會打開。",
          body: "門後的世界：只有鑰匙對了，才會執行這裡面的積木。"
        }
      },
      {
        name: "比較 (Comparison)",
        image: "邏輯-比較.png",
        desc: "用來比大小或是否相等 (例如：A > B)。"
      },
      {
        name: "邏輯運算 (Logical Operations)",
        image: "邏輯-邏輯運算.png",
        desc: "連接多個條件。且(and)表示都要對，或(or)表示其中一個對就好。"
      },
      {
        name: "布林值 (Boolean)",
        image: "邏輯-布林值.png",
        desc: "只有「真 (True)」或「假 (False)」兩種結果。"
      },
      {
        name: "反向 (not)",
        image: "邏輯-反向.png",
        desc: "唱反調專用。把真變假，把假變真。"
      }
    ]
  },
  {
    id: "loops",
    name: "2. 迴圈 (Loops)",
    description: "不想一直寫重複的程式碼嗎？用迴圈就對了！",
    color: "bg-green-500",
    blocks: [
      {
        name: "重複幾次 (Repeat)",
        image: "迴圈-重複幾次.png",
        desc: "指定一個次數，乖乖做完。",
        detailed: {
          title: "重複幾次 (Repeat) - 自動播放機",
          param: "播放次數：你填數字幾，它就轉幾圈。",
          body: "要做的事：肚子裡的積木會被重複執行。"
        }
      },
      {
        name: "條件重複 (While/Until)",
        image: "迴圈-條件重複.png",
        desc: "只要條件符合 (While) 或直到條件符合 (Until)，就一直做。",
        detailed: {
          title: "條件重複 (While/Until) - 頑固守衛",
          param: "檢查表：While (當...) 只要對就繼續；Until (直到...) 只要錯就繼續。",
          body: "重複做的動作：記得要在這裡改變檢查條件，不然會停不下來！"
        }
      },
      {
        name: "計數循環 (Count with)",
        image: "迴圈-計數循環.png",
        desc: "像數數一樣，有一個變數帶著你從起點數到終點。",
        detailed: {
          title: "計數循環 (Count with) - 體育老師",
          param: "計數設定：從幾開始、到幾結束、每次加多少。",
          body: "每一圈要做的事：可以直接使用計數變數 (i) 來做事。"
        }
      },
      {
        name: "中斷 (break/continue)",
        image: "迴圈-中斷.png",
        desc: "立刻停下來跳出迴圈 (break)，或是跳過這次直接做下一次 (continue)。"
      }
    ]
  },
  {
    id: "math",
    name: "3. 數學式 (Math)",
    description: "處理所有跟數字有關的事情。",
    color: "bg-cyan-500",
    blocks: [
      {
        name: "數字 (Number)",
        image: "數學式-數字.png",
        desc: "填數字的地方。"
      },
      {
        name: "算術運算 (Arithmetic)",
        image: "數學式-算術運算.png",
        desc: "加、減、乘、除、次方等。"
      },
      {
        name: "單一運算 (Single Operation)",
        image: "數學式-單一運算.png",
        desc: "絕對值、平方根等。"
      },
      {
        name: "三角函數 (Trig)",
        image: "數學式-三角函數.png",
        desc: "sin, cos, tan。"
      },
      {
        name: "常數 (Constant)",
        image: "數學式-常數.png",
        desc: "圓周率 π 等固定的數。"
      },
      {
        name: "檢查數字屬性",
        image: "數學式-檢查數字屬性.png",
        desc: "檢查是偶數、奇數還是質數。"
      },
      {
        name: "四捨五入 (round)",
        image: "數學式-四捨五入.png",
        desc: "把小數變成整數。"
      },
      {
        name: "餘數 (Remainder)",
        image: "數學式-餘數.png",
        desc: "除法除不盡剩下的數。"
      },
      {
        name: "隨機整數 (Random Integer)",
        image: "數學式-隨機整數.png",
        desc: "在兩個數字間隨機選一個整數。"
      },
      {
        name: "隨機分數 (Random Fraction)",
        image: "數學式-隨機分數.png",
        desc: "隨機選一個 0.0 到 1.0 之間的小數。"
      }
    ]
  },
  {
    id: "text",
    name: "4. 文字 (Text)",
    description: "處理文字與句子。",
    color: "bg-lime-500",
    blocks: [
      {
        name: "建立字串",
        image: "文字-建立文字串.png",
        desc: "寫一段文字，例如 \"Hello\"。"
      },
      {
        name: "字串組合 (Join)",
        image: "文字-字串組合.png",
        desc: "把兩段文字黏在一起。"
      },
      {
        name: "長度 (Length)",
        image: "文字-長度.png",
        desc: "算出這段文字有幾個字。"
      },
      {
        name: "輸入提示 (Prompt)",
        image: "文字-輸入提示.png",
        desc: "「彈出視窗向使用者發問，並取得對方輸入的內容（文字或數字）。」。"
      },
      {
        name: "輸出 (Print)",
        image: "文字-輸出.png",
        desc: "把結果顯示出來，預設是字串。"
      }
    ]
  },
  {
    id: "lists",
    name: "5. 列表 (Lists)",
    description: "像置物櫃一樣，可以放很多資料。",
    color: "bg-purple-500",
    blocks: [
      {
        name: "建立列表",
        image: "列表-建立列表.png",
        desc: "做一個新的清單。"
      },
      {
        name: "建立空列表",
        image: "列表-建立空列表.png",
        desc: "準備一個空的清單。"
      },
      {
        name: "重複建立",
        image: "列表-重複建立.png",
        desc: "快速建立裡面東西都一樣的清單。"
      },
      {
        name: "長度",
        image: "列表-長度.png",
        desc: "算出清單裡有幾樣東西。"
      },
      {
        name: "取得項目",
        image: "列表-取得項目.png",
        desc: "把清單裡的東西拿出來看。"
      },
      {
        name: "設定項目",
        image: "列表-設定項目.png",
        desc: "修改清單裡的東西。"
      },
      {
        name: "取得並移除項目",
        image: "列表-取得並移除項目.png",
        desc: "把東西拿出來用，順便劃掉。"
      }
    ]
  },
  {
    id: "variables",
    name: "6. 變量 (Variables)",
    description: "裝資料的盒子，給它名字方便使用。",
    color: "bg-pink-500",
    blocks: [
      {
        name: "變數 (Get)",
        image: "變量-變數.png",
        desc: "拿出盒子裡的資料。"
      },
      {
        name: "賦值 (Set)",
        image: "變量-賦值.png",
        desc: "把資料放進盒子裡。"
      },
      {
        name: "改變數值 (Change)",
        image: "變量-改變數值.png",
        desc: "在原本的基礎上增加或減少。"
      }
    ]
  }
];