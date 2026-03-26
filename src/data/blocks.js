export const categories = [
  {
    id: "logic",
    name: "1. 邏輯 (Logic)",
    description: "像大腦一樣做判斷，決定對 (True) 還是錯 (False)。",
    color: "bg-indigo-500",
    blocks: [
      {
        name: "如果否則 (if-else)",
        image: "邏輯-如果否則.png",
        desc: "程式的分岔路口。包含「如果 (if)」、「否則如果 (elif)」與「否則 (else)」。",
        python: "if condition:\n    # 如果條件成立做 A\nelif condition2:\n    # 否則如果條件 2 成立做 B\nelse:\n    # 以上都不成立做 C",
        detailed: {
          title: "如果否則 (if-else) - 程式守門員",
          param: "鑰匙 (條件)：如果這把鑰匙是對的 (True)，門才會打開。",
          body: "門後的世界：只有鑰匙對了，才會執行這裡面的積木。"
        }
      },
      {
        name: "比較 (Comparison)",
        image: "邏輯-比較.png",
        desc: "比較兩個數值的關係。包含：等於 (==)、不等於 (!=)、小於 (<)、小於等於 (<=)、大於 (>)、大於等於 (>=)。",
        python: "a == b # 等於\na != b # 不等於\na < b  # 小於\na <= b # 小於等於\na > b  # 大於\na >= b # 大於等於"
      },
      {
        name: "邏輯運算 (Logical Operations)",
        image: "邏輯-邏輯運算.png",
        desc: "連接多個條件。包含：且 (and)、或 (or)。",
        python: "cond1 and cond2 # 兩者皆為真\ncond1 or cond2  # 其中之一為真"
      },
      {
        name: "布林值 (Boolean)",
        image: "邏輯-布林值.png",
        desc: "邏輯的基礎，只有兩種狀態。",
        python: "True  # 真 (對)\nFalse # 假 (錯)"
      },
      {
        name: "反向 (not)",
        image: "邏輯-反向.png",
        desc: "唱反調專用。把真變假，把假變真。",
        python: "not True  # 結果為 False\nnot False # 結果為 True"
      },
      {
        name: "空值 (null)",
        image: "邏輯-空值.png",
        desc: "代表「什麼都沒有」或「無效」的狀態。",
        python: "None"
      },
      {
        name: "檢查空值 (is null)",
        image: "邏輯-檢查空值.png",
        desc: "檢查一個值是否為 None，或是非 None。",
        python: "if x is None:     # 是空的\nif x is not None: # 不是空的"
      },
      {
        name: "三元運算 (ternary)",
        image: "邏輯-三元運算.png",
        desc: "簡短的條件判斷式。",
        python: "result = A if condition else B"
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
        name: "重複幾次 (repeat)",
        image: "迴圈-重複幾次.png",
        desc: "指定一個次數，乖乖做完。",
        python: "for i in range(10):\n    # 重複執行 10 次 (0 到 9)",
        detailed: {
          title: "重複幾次 (repeat) - 自動播放機",
          param: "播放次數：你填數字幾，它就轉幾圈。",
          body: "要做的事：肚子裡的積木會被重複執行。"
        }
      },
      {
        name: "條件重複 (while/until)",
        image: "迴圈-條件重複.png",
        desc: "包含「當條件符合時 (while)」或「直到條件符合為止 (until)」。",
        python: "while condition:\n    # 只要條件成立就一直做 (while)\n\nwhile not condition:\n    # 直到條件成立前一直做 (until)",
        detailed: {
          title: "條件重複 (while/until) - 頑固守衛",
          param: "檢查表：while (當...) 只要對就繼續；until (直到...) 只要錯就繼續。",
          body: "重複做的動作：記得要在這裡改變檢查條件，不然會停不下來！"
        }
      },
      {
        name: "計數循環 (count with)",
        image: "迴圈-計數循環.png",
        desc: "設定起始值、終點值與每次增加的步長。",
        python: "for i in range(1, 11, 2):\n    # 從 1 數到 10，每次加 2 (1, 3, 5, 7, 9)",
        detailed: {
          title: "計數循環 (count with) - 體育老師",
          param: "計數設定：從幾開始、到幾結束、每次加多少。",
          body: "每一圈要做的事：可以直接使用計數變數 (i) 來做事。"
        }
      },
      {
        name: "遍歷列表 (for each)",
        image: "迴圈-遍歷列表.png",
        desc: "自動取出清單中的每一項東西。",
        python: "for item in my_list:\n    print(item) # 依序處理每一項"
      },
      {
        name: "中斷 (break/continue)",
        image: "迴圈-中斷.png",
        desc: "跳出整個迴圈 (break) 或跳過本次剩餘動作直接進入下一輪 (continue)。",
        python: "for i in range(10):\n    if i == 5: break    # 數到 5 就結束\n    if i == 3: continue # 跳過 3 不做"
      }
    ]
  },
  {
    id: "math",
    name: "3. 數學式 (Math)",
    description: "處理所有跟數字有關的事情。",
    color: "bg-violet-500",
    blocks: [
      {
        name: "數字 (Number)",
        image: "數學式-數字.png",
        desc: "整數或小數。",
        python: "42      # 整數\n3.14159 # 小數"
      },
      {
        name: "算術運算 (Arithmetic)",
        image: "數學式-算術運算.png",
        desc: "包含：加 (+)、減 (-)、乘 (*)、除 (/)、次方 (**)。",
        python: "a + b # 加\na - b # 減\na * b # 乘\na / b # 除\na ** b # 次方 (a 的 b 次方)"
      },
      {
        name: "單一運算 (Single Operation)",
        image: "數學式-單一運算.png",
        desc: "包含：平方根、絕對值、取反、自然對數 (ln)、常用對數 (log10)、e^x、10^x。",
        python: "math.sqrt(x) # 平方根\nabs(x)       # 絕對值\n-x           # 取反 (正變負)\nmath.log(x)  # ln\nmath.log10(x)# log10\nmath.exp(x)  # e^x"
      },
      {
        name: "三角函數 (Trig)",
        image: "數學式-三角函數.png",
        desc: "包含：sin, cos, tan, asin, acos, atan。",
        python: "math.sin(x)  # 正弦\nmath.cos(x)  # 餘弦\nmath.tan(x)  # 正切\n# 注意：x 需為弧度 (radians)"
      },
      {
        name: "常數 (Constant)",
        image: "數學式-常數.png",
        desc: "數學中常用的固定數值。",
        python: "math.pi  # 圓周率 π (3.1415...)\nmath.e   # 自然常數 e (2.7182...)\nmath.inf # 無窮大"
      },
      {
        name: "檢查數字屬性",
        image: "數學式-檢查數字屬性.png",
        desc: "檢查數字是否為：偶數、奇數、質數、整數、正數、負數、可被某數整除。",
        python: "x % 2 == 0 # 偶數\nx % 2 != 0 # 奇數\nx > 0      # 正數\nx < 0      # 負數\nx % y == 0 # 可被 y 整除"
      },
      {
        name: "清單運算 (Math on list)",
        image: "數學式-清單運算.png",
        desc: "包含：總和、最小值、最大值、平均數、中位數、眾數、標準差、隨機抽取。",
        python: "sum(my_list) # 總和\nmin(my_list) # 最小值\nmax(my_list) # 最大值\nimport statistics\nstatistics.mean(my_list)   # 平均數\nstatistics.median(my_list) # 中位數"
      },
      {
        name: "四捨五入 (round)",
        image: "數學式-四捨五入.png",
        desc: "包含：四捨五入 (round)、無條件進位 (ceil)、無條件捨去 (floor)。",
        python: "round(x)      # 四捨五入\nmath.ceil(3.1)  # 無條件進位 (結果 4)\nmath.floor(3.1) # 無條件捨去 (結果 3)"
      },
      {
        name: "限制數字 (constrain)",
        image: "數學式-限制數字.png",
        desc: "將數字限制在指定的最小值與最大值之間。",
        python: "val = max(min_limit, min(x, max_limit))"
      },
      {
        name: "餘數 (Remainder)",
        image: "數學式-餘數.png",
        desc: "兩數相除後剩下的數值。",
        python: "10 % 3 # 結果為 1"
      },
      {
        name: "隨機整數 (Random Integer)",
        image: "數學式-隨機整數.png",
        desc: "在指定的範圍內隨機挑選一個整數。",
        python: "import random\nrandom.randint(1, 100) # 1 到 100 隨機一個"
      },
      {
        name: "隨機分數 (Random Fraction)",
        image: "數學式-隨機分數.png",
        desc: "隨機產生一個 0 到 1 之間的小數。",
        python: "random.random() # 例如 0.354..."
      }
    ]
  },
  {
    id: "text",
    name: "4. 文字 (Text)",
    description: "處理文字與句子。",
    color: "bg-emerald-500",
    blocks: [
      {
        name: "建立字串",
        image: "文字-建立文字串.png",
        desc: "包含：單行文字、多行文字。",
        python: "\"Hello\"   # 單行\n'''Line 1\nLine 2''' # 多行"
      },
      {
        name: "字串組合 (Join)",
        image: "文字-字串組合.png",
        desc: "將多段文字連接在一起。",
        python: "text = \"Hello \" + \"World\"\n# 或使用 f-string\nmsg = f\"{greeting} {name}\""
      },
      {
        name: "長度 (Length)",
        image: "文字-長度.png",
        desc: "計算文字包含幾個字元（包含空白）。",
        python: "len(\"Blockly\") # 結果為 7"
      },
      {
        name: "取得特定字元",
        image: "文字-取得特定字元.png",
        desc: "包含：從開頭算起、從末尾算起、第一個、最後一個、隨機一個。",
        python: "text[0]  # 第一個\ntext[-1] # 最後一個\ntext[i]  # 第 i 個 (從 0 開始)"
      },
      {
        name: "取得子字串",
        image: "文字-取得子字串.png",
        desc: "取出文字中的一小段範圍。",
        python: "text[0 : 5] # 取出第 1 到第 5 個字 (1-based)"
      },
      {
        name: "變更大小寫",
        image: "文字-變更大小寫.png",
        desc: "包含：全大寫 (UPPER)、全小寫 (lower)、首字母大寫 (Title)。",
        python: "text.upper() # 全大寫\ntext.lower() # 全小寫\ntext.title() # 首字母大寫"
      },
      {
        name: "消除空格 (Trim)",
        image: "文字-消除空格.png",
        desc: "包含：消除兩側空白、消除左側空白、消除右側空白。",
        python: "text.strip()  # 兩側\ntext.lstrip() # 左側\ntext.rstrip() # 右側"
      },
      {
        name: "尋找出現次數/位置",
        image: "文字-尋找出現次數.png",
        desc: "找尋一段文字在另一段文字中出現的位置或總次數。",
        python: "text.find(\"abc\") + 1  # 前面找起 (1-based)\ntext.rfind(\"abc\") + 1 # 後面找起 (1-based)\ntext.count(\"abc\")      # 算總次數"
      },
      {
        name: "檢查空字串",
        image: "文字-檢查空字串.png",
        desc: "檢查文字是否完全沒有內容。",
        python: "if not len(text): # 長度為 0"
      },
      {
        name: "輸入提示 (Prompt)",
        image: "文字-輸入提示.png",
        desc: "向使用者發問並取得輸入。包含：文字 (str)、整數 (int)、小數 (float)。",
        python: "s = input(\"輸入文字：\")\ni = int(input(\"輸入整數：\"))\nf = float(input(\"輸入小數：\"))"
      },
      {
        name: "輸出 (Print)",
        image: "文字-輸出.png",
        desc: "將結果顯示在螢幕上。",
        python: "print(\"Hello World!\")"
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
        desc: "建立一個包含多項資料的清單。",
        python: "my_list = [\"apple\", \"banana\", 123]"
      },
      {
        name: "建立空列表",
        image: "列表-建立空列表.png",
        desc: "準備一個還沒裝東西的清單。",
        python: "my_list = []\n# 或\nmy_list = list()"
      },
      {
        name: "重複建立",
        image: "列表-重複建立.png",
        desc: "建立一個包含多個相同項目的清單。",
        python: "zeros = [0] * 10 # 建立 10 個 0"
      },
      {
        name: "長度",
        image: "列表-長度.png",
        desc: "計算清單中有幾項資料。",
        python: "len(my_list)"
      },
      {
        name: "檢查列表是否為空",
        image: "邏輯-檢查空值.png",
        desc: "檢查清單裡是不是什麼都沒有。注意：這是紫色列表積木的功能。",
        python: "if not len(my_list): # 清單長度為 0"
      },
      {
        name: "取得項目",
        image: "列表-取得項目.png",
        desc: "包含：取得 (Get)、取得並移除 (Get and Remove)。",
        python: "item = my_list[0]    # 取得第一項\nitem = my_list.pop(0) # 取得並移除第一項"
      },
      {
        name: "設定與添加",
        image: "列表-設定與添加.png",
        desc: "包含：設定 (Set)、插入 (Insert)、添加 (Append)。",
        python: "my_list[0] = \"new\"    # 覆蓋第一項\nmy_list.insert(0, \"x\") # 在開頭插入 x\nmy_list.append(\"y\")    # 在末尾添加 y"
      },
      {
        name: "尋找項目",
        image: "列表-尋找項目.png",
        desc: "包含：尋找第一次出現的位置、尋找最後一次出現的位置。",
        python: "pos = my_list.index(\"apple\") + 1 # 1-based 位置"
      },
      {
        name: "取得子列表",
        image: "列表-取得子列表.png",
        desc: "取出清單中的一小段範圍。",
        python: "sub = my_list[0:3] # 取出第 1 到第 3 項"
      },
      {
        name: "文本轉換",
        image: "列表-文本轉換.png",
        desc: "包含：從文本製作清單 (Split)、從清單折出文本 (Join)。",
        python: "list = text.split(\",\")\ntext = \"-\".join(list)"
      },
      {
        name: "排序",
        image: "列表-排序.png",
        desc: "包含：升序 (Ascending)、降序 (Descending)。",
        python: "my_list.sort() # 升序 (小到大)\nmy_list.sort(reverse=True) # 降序 (大到小)"
      },
      {
        name: "反轉",
        image: "列表-反轉.png",
        desc: "將清單順序全部倒過來。",
        python: "my_list.reverse()"
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
        desc: "拿出盒子裡的資料。",
        python: "print(x) # 使用變數 x"
      },
      {
        name: "賦值 (Set)",
        image: "變量-賦值.png",
        desc: "把新資料放進盒子裡。",
        python: "x = 100"
      },
      {
        name: "改變數值 (Change)",
        image: "變量-改變數值.png",
        desc: "在變數原本的基礎上增加或減少。",
        python: "x += 1 # 加 1\nx -= 5 # 減 5"
      }
    ]
  },
  {
    id: "functions",
    name: "7. 函式 (Functions)",
    description: "把常用的程式碼包裝起來，隨時呼叫使用。",
    color: "bg-orange-500",
    blocks: [
      {
        name: "建立函式 (Define Function)",
        image: "函式-建立函式.png",
        desc: "建立一個可以重複使用的功能，可以設定輸入參數。",
        python: "def my_function(param1, param2):\n    # 執行任務\n    print(param1)\n\n# 呼叫函式\nmy_function(\"Hello\", \"World\")",
        detailed: {
          title: "建立函式 (Define Function) - 專屬小幫手",
          param: "輸入名稱 (參數)：小幫手需要的工具 or 資訊。例如「x」，你可以餵給它任何資料。",
          body: "任務流程：在「到 做些什麼」裡面放入你要重複執行的動作。一旦定義好，你就可以在別的地方呼叫這個小幫手幫你做事！"
        }
      },
      {
        name: "帶有返回值的函式",
        image: "函式-帶有返回值的函式.png",
        desc: "執行完任務後，會回傳一個結果供後續使用。",
        python: "def add(a, b):\n    return a + b\n\n# 呼叫並取得結果\nresult = add(10, 20)",
        detailed: {
          title: "帶有返回值的函式 - 傳回結果",
          param: "回傳值：函式執行完畢後會「吐出」的一個資料。",
          body: "使用場景：當你需要函式幫你算一個數字或處理一段文字，並把結果傳回來給你繼續使用時。"
        }
      },
      {
        name: "條件返回 (Conditional Return)",
        image: "函式-條件返回.png",
        desc: "在特定條件下，提早結束函式並回傳結果。",
        python: "def check_score(score):\n    if score < 60: return \"不及格\"\n    return \"及格\""
      }
    ]
  }
];
