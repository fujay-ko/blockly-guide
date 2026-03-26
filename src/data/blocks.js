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
        desc: "程式的分岔路口。如果條件成立就做A，否則做B。",
        python: "if condition:\n    # 做A\nelse:\n    # 做B",
        detailed: {
          title: "如果否則 (if-else) - 程式守門員",
          param: "鑰匙 (條件)：如果這把鑰匙是對的 (True)，門才會打開。",
          body: "門後的世界：只有鑰匙對了，才會執行這裡面的積木。"
        }
      },
      {
        name: "比較 (Comparison)",
        image: "邏輯-比較.png",
        desc: "用來比大小或是否相等 (例如：A > B)。",
        python: "A > B  # 大於\nA == B # 等於\nA != B # 不等於"
      },
      {
        name: "邏輯運算 (Logical Operations)",
        image: "邏輯-邏輯運算.png",
        desc: "連接多個條件。且(and)表示都要對，或(or)表示其中一個對就好。",
        python: "condition1 and condition2\ncondition1 or condition2"
      },
      {
        name: "布林值 (Boolean)",
        image: "邏輯-布林值.png",
        desc: "只有「真 (True)」或「假 (False)」兩種結果。",
        python: "True\nFalse"
      },
      {
        name: "反向 (not)",
        image: "邏輯-反向.png",
        desc: "唱反調專用。把真變假，把假變真。",
        python: "not condition"
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
        desc: "檢查一個變數是不是空的。",
        python: "if value is None:\n    print('它是空的')"
      },
      {
        name: "三元運算 (ternary)",
        image: "邏輯-三元運算.png",
        desc: "用一行程式碼寫簡單的如果否則判斷。",
        python: "A if condition else B"
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
        python: "for i in range(10):\n    # 重複 10 次",
        detailed: {
          title: "重複幾次 (repeat) - 自動播放機",
          param: "播放次數：你填數字幾，它就轉幾圈。",
          body: "要做的事：肚子裡的積木會被重複執行。"
        }
      },
      {
        name: "條件重複 (while/until)",
        image: "迴圈-條件重複.png",
        desc: "只要條件符合 (while) 或直到條件符合 (until)，就一直做。",
        python: "while condition:\n    # 只要條件成立就一直做",
        detailed: {
          title: "條件重複 (while/until) - 頑固守衛",
          param: "檢查表：while (當...) 只要對就繼續；until (直到...) 只要錯就繼續。",
          body: "重複做的動作：記得要在這裡改變檢查條件，不然會停不下來！"
        }
      },
      {
        name: "計數循環 (count with)",
        image: "迴圈-計數循環.png",
        desc: "像數數一樣，有一個變數帶著你從起點數到終點。",
        python: "for i in range(start, end, step):\n    # 從 start 數到 end",
        detailed: {
          title: "計數循環 (count with) - 體育老師",
          param: "計數設定：從幾開始、到幾結束、每次加多少。",
          body: "每一圈要做的事：可以直接使用計數變數 (i) 來做事。"
        }
      },
      {
        name: "遍歷列表 (for each)",
        image: "迴圈-遍歷列表.png",
        desc: "把清單裡的每一項東西都拿出來做一次。",
        python: "for item in my_list:\n    print(item)"
      },
      {
        name: "中斷 (break/continue)",
        image: "迴圈-中斷.png",
        desc: "立刻停下來跳出迴圈 (break)，或是跳過這次直接做下一次 (continue)。",
        python: "break    # 逃跑\ncontinue # 跳過"
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
        desc: "填數字的地方。",
        python: "123"
      },
      {
        name: "算術運算 (Arithmetic)",
        image: "數學式-算術運算.png",
        desc: "加、減、乘、除、次方等。",
        python: "A + B  # 加\nA - B  # 減\nA * B  # 乘\nA / B  # 除\nA ** B # 次方"
      },
      {
        name: "單一運算 (Single Operation)",
        image: "數學式-單一運算.png",
        desc: "絕對值、平方根等。",
        python: "abs(A)       # 絕對值\nmath.sqrt(A) # 平方根"
      },
      {
        name: "三角函數 (Trig)",
        image: "數學式-三角函數.png",
        desc: "sin, cos, tan。",
        python: "math.sin(A)\nmath.cos(A)\nmath.tan(A)"
      },
      {
        name: "常數 (Constant)",
        image: "數學式-常數.png",
        desc: "圓周率 π 等固定的數。",
        python: "math.pi\nmath.e"
      },
      {
        name: "檢查數字屬性",
        image: "數學式-檢查數字屬性.png",
        desc: "檢查是偶數、奇數還是質數。",
        python: "if n % 2 == 0: # 檢查偶數"
      },
      {
        name: "清單運算 (Math on list)",
        image: "數學式-清單運算.png",
        desc: "計算清單裡的總和、平均、最大最小值等。",
        python: "sum(my_list) # 總和\nmax(my_list) # 最大值\nmin(my_list) # 最小值"
      },
      {
        name: "四捨五入 (round)",
        image: "數學式-四捨五入.png",
        desc: "把小數變成整數。",
        python: "round(A)"
      },
      {
        name: "限制數字 (constrain)",
        image: "數學式-限制數字.png",
        desc: "限制數字在一個範圍內，例如：0 到 100。",
        python: "max(min_val, min(A, max_val))"
      },
      {
        name: "餘數 (Remainder)",
        image: "數學式-餘數.png",
        desc: "除法除不盡剩下的數。",
        python: "A % B"
      },
      {
        name: "隨機整數 (Random Integer)",
        image: "數學式-隨機整數.png",
        desc: "在兩個數字間隨機選一個整數。",
        python: "random.randint(1, 100)"
      },
      {
        name: "隨機分數 (Random Fraction)",
        image: "數學式-隨機分數.png",
        desc: "隨機選一個 0.0 到 1.0 之間的小數。",
        python: "random.random()"
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
        desc: "寫一段文字，例如 \"Hello\"。",
        python: "\"Hello World!\""
      },
      {
        name: "字串組合 (Join)",
        image: "文字-字串組合.png",
        desc: "把兩段文字黏在一起。",
        python: "text1 + text2"
      },
      {
        name: "長度 (Length)",
        image: "文字-長度.png",
        desc: "算出這段文字有幾個字。",
        python: "len(text)"
      },
      {
        name: "取得特定字元",
        image: "文字-取得特定字元.png",
        desc: "拿出文字中第幾個位置的字母。",
        python: "text[0] # 拿第一個字"
      },
      {
        name: "取得子字串",
        image: "文字-取得子字串.png",
        desc: "取出一段文字中的一小部分。",
        python: "text[start:end]"
      },
      {
        name: "變更大小寫",
        image: "文字-變更大小寫.png",
        desc: "把英文變成大寫、小寫或是首字母大寫。",
        python: "text.upper() # 大寫\ntext.lower() # 小寫"
      },
      {
        name: "消除空格",
        image: "文字-消除空格.png",
        desc: "把文字左右兩邊多餘的空白刪掉。",
        python: "text.strip()"
      },
      {
        name: "尋找出現次數",
        image: "文字-尋找出現次數.png",
        desc: "檢查一段文字在另一段文字中出現了幾次。",
        python: "text.count(\"abc\")"
      },
      {
        name: "檢查空字串",
        image: "文字-檢查空字串.png",
        desc: "檢查這段文字是不是空的。",
        python: "if not text:\n    print('它是空的')"
      },
      {
        name: "輸入提示 (Prompt)",
        image: "文字-輸入提示.png",
        desc: "「彈出視窗向使用者發問，並取得對方輸入的內容（文字或數字）。」。",
        python: "name = input(\"你是誰？\")"
      },
      {
        name: "輸出 (Print)",
        image: "文字-輸出.png",
        desc: "把結果顯示出來，預設是字串。",
        python: "print(\"Hello!\")"
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
        desc: "做一個新的清單。",
        python: "my_list = [1, 2, 3]"
      },
      {
        name: "建立空列表",
        image: "列表-建立空列表.png",
        desc: "準備一個空的清單。",
        python: "my_list = []"
      },
      {
        name: "重複建立",
        image: "列表-重複建立.png",
        desc: "快速建立裡面東西都一樣的清單。",
        python: "my_list = [0] * 10"
      },
      {
        name: "長度",
        image: "列表-長度.png",
        desc: "算出清單裡有幾樣東西。",
        python: "len(my_list)"
      },
      {
        name: "取得項目",
        image: "列表-取得項目.png",
        desc: "把清單裡的東西拿出來看。",
        python: "item = my_list[0]"
      },
      {
        name: "設定與添加",
        image: "列表-設定與添加.png",
        desc: "修改清單裡的東西，或是加新的東西進去。",
        python: "my_list[0] = \"new\"\nmy_list.append(\"more\")"
      },
      {
        name: "尋找項目",
        image: "列表-尋找項目.png",
        desc: "找找看某樣東西在清單裡的第幾個位置。",
        python: "my_list.index(\"apple\")"
      },
      {
        name: "取得並移除項目",
        image: "列表-取得並移除項目.png",
        desc: "把東西拿出來用，順便劃掉。",
        python: "item = my_list.pop(0)"
      },
      {
        name: "取得子列表",
        image: "列表-取得子列表.png",
        desc: "取出清單中的一小段範圍。",
        python: "sub_list = my_list[1:3]"
      },
      {
        name: "文本轉換",
        image: "列表-文本轉換.png",
        desc: "把一段長文字拆成清單，或是把清單黏成文字。",
        python: "list = text.split(\",\")\ntext = \",\".join(list)"
      },
      {
        name: "排序",
        image: "列表-排序.png",
        desc: "把清單裡的東西照順序排好。",
        python: "my_list.sort()"
      },
      {
        name: "反轉",
        image: "列表-反轉.png",
        desc: "把清單裡的東西倒過來放。",
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
        python: "x"
      },
      {
        name: "賦值 (Set)",
        image: "變量-賦值.png",
        desc: "把資料放進盒子裡。",
        python: "x = 10"
      },
      {
        name: "改變數值 (Change)",
        image: "變量-改變數值.png",
        desc: "在原本的基礎上增加或減少。",
        python: "x += 1"
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
        desc: "建立一個可以重複使用的功能，還可以設定輸入參數。",
        detailed: {
          title: "建立函式 (Define Function) - 專屬小幫手",
          param: "輸入名稱 (參數)：小幫手需要的工具或資訊。例如「x」，你可以餵給它任何資料。",
          body: "任務流程：在「到 做些什麼」裡面放入你要重複執行的動作。一旦定義好，你就可以在別的地方呼叫這個小幫手幫你做事！"
        }
      },
      {
        name: "帶有返回值的函式 (Return Function)",
        image: "函式-帶有返回值的函式.png",
        desc: "執行完任務後，會回傳一個結果。"
      },
      {
        name: "條件返回 (Conditional Return)",
        image: "函式-條件返回.png",
        desc: "在特定條件下，提早結束函式並回傳結果。"
      }
    ]
  }
];
