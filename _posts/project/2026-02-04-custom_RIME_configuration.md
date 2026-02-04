---
layout: post
title: 个人RIME输入法配置方案
category: project
description: 这篇文章介绍了我对万象拼音方案进行的一系列个性化优化配置。
---
## 准备工作

1. 本配置基于[万象拼音输入方案](https://github.com/amzxyz/rime_wanxiang)进行修改，因此你需要先安装 Rime 输入法，并完成万象拼音方案的部署。
2. 将 `wanxiang.custom.yaml` 从 custom 文件夹复制一份到用户目录（Windows 下为从 `%APPDATA%\Rime\Custom` 里复制到 `%APPDATA%\Rime`）。

每次修改配置文件后，都需要点击“重新部署”才能生效。

## 替换”/”引导键

由于我在使用 Notion 时会频繁输入 `/`，原方案将 `/` 作为引导符号会造成干扰，因此我将其替换为 `v`。例如原本的 `/rq`，现在需要使用 `vrq` 来触发。

在 `wanxiang.custom.yaml` 中加入或更改为以下内容：

```YAML
patch:
	# 这一行是为了让斜杠键直接上屏，对比原来配置删除了一个"/"
	speller/initials: "zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA"
	
	# 这一行是为了替换"/"为"v"
	key_binder/shijian_keys: ["v", "o"]  
	
	# 以下内容只在源文件基础上对最后一行做了更改，把原内容注释掉。但是不写全的话会等同于把整个bindings部分都覆盖了
	key_binder/bindings:
    # 通过按下/发送/+1节约一个按键，不冲突的时候可以开启
      #- { match: "[a-z]{1,4}", accept: "/",  send_sequence: "/1" }
  # 翻页 , .
      # - { when: paging, accept: comma, send: Page_Up }
      # - { when: has_menu, accept: period, send: Page_Down }
  # 翻页 [ ]
      # - { when: paging, accept: bracketleft, send: Page_Up }
      # - { when: has_menu, accept: bracketright, send: Page_Down }
  # 翻页 - =
      - { when: has_menu, accept: minus, send: Page_Up }
      - { when: has_menu, accept: equal, send: Page_Down }
  # Option/Alt + ←/→ 切换光标至下/上一个拼音
      - { when: always, toggle: ascii_punct, accept: Control+Shift+3 }              # 切换中英标点
      - { when: always, toggle: ascii_punct, accept: Control+Shift+numbersign }     # 切换中英标点
      - { when: always, toggle: s2t, accept: Control+Shift+4 }       # 切换简繁
      - { when: always, toggle: s2t, accept: Control+Shift+dollar }  # 切换简繁
      - { when: composing, accept: Alt+Left, send: Shift+Left }
      - { when: composing, accept: Alt+Right, send: Shift+Right }
      - { when: composing, accept: Control+w, send: Control+BackSpace }
  #分号用于次选，微软、搜狗双拼不可启用
      #- { when: has_menu, accept: semicolon, send: 2 }
  #使用Control+e进入翻译模式
      - { when: has_menu, accept: "Control+e", toggle: chinese_english}
  #使用快捷键Control+a开启和关闭辅助码显示
      - { when: has_menu, accept: "Control+a", toggle: tone_hint }
  #通过快捷键Control+s使得输入码显示音调
      - { when: has_menu, accept: "Control+s", toggle: tone_display }
  #通过快捷键Control+t开启超级tips
      - { when: has_menu, accept: "Control+t", toggle: super_tips }
  #通过快捷键Control+g开启字符集过滤
      - { when: has_menu, accept: "Control+g", toggle: charset_filter }
      - { when: composing, accept: "Control+g", toggle: charset_filter }
  #通过快捷键Shift+space开启输入模式切换
      #- { when: always, accept: Shift+space, select: wanxiang }  #直接跳转指定方案
      #- { when: always, accept: Shift+space, select: wanxiang_pro }  #直接跳转指定方案
      - { when: always, accept: Shift+space, select: .next }  #下一个方案
  # 使用 tab 在不同音节之间跳转
      - { when: has_menu, accept: "Tab", send: "Control+Right" }
      - { when: composing, accept: "Tab", send: "Control+Right" }
  #当tab第一个字补码正确后，可以使用Ctrl+tab进行上屏并依次补码
      - { when: composing, accept: "Control+Tab", send_sequence: '{Home}{Shift+Right}{1}{Shift+Right}' }
  #当输入编码后发现没有词，则通过双击``进入造词模式而且不需要删除编码，这个功能与``直接引导相呼应相配合
      #- { match: "^.*`$", accept: "`", send_sequence: '{BackSpace}{Home}{`}{`}{End}' }基础版暂时取消这个功能，
  #斜杠被占用引导符号，因此输入本身设置为双击
  #    - { match: "^/$", accept: "/", send_sequence: '{space}' }
```

完成上述修改后，原本由 `/` 键触发的功能（如 `/fh`）会失效,因为 `/` 不再作为输入码上屏。若希望保留这些符号功能，需要继续修改 `wanxiang.custom.yaml`，将其迁移到 `v`。

下面是示例（仅展示两条，实际请按你的需求自行扩展；或直接从原方案 `wanxiang_symbols.yaml` 批量替换）。

```YAML
patch:
	#替换"/"到"v"
	recognizer/patterns/punct: "^v([0-9]|10|[A-Za-z]+)$"    # 响应 symbols.yaml 的 symbols
	#替换符号输入
	punctuator/symbols:
    #符号、电脑
    'vfh': [ ©, ®, ℗, ℠, ™, ℡, ℻, ☇, ☈, ☉, ☊, ☋, ☌, ☍, ☎, ☏, ☐, ☑, ☒, ☓, ☕, ☖, ☗, ⛉, ⛊, ☘, ☙, ☚, ☛, ☜, ☝, ☞, ☟, ☠, ☡, ☢, ☣, ☤, ☥, ☦, ☧, ☨, ☩, ☪, ☫, ☬, ☭, ☮, ☯, ☸, ♨, ♰, ♱, ♲, ♳, ♴, ♵, ♶, ♷, ♸, ♹, ♺, ♻, ♼, ♽, ♾, ♿, ⚆, ⚇, ⚈, ⚉, ⚐, ⚑, ⚒, ⚓, ⚔, ⚕, ⚖, ⚗, ⚘, ⚙, ⚚, ⚛, ⚜, ⚝, ⚞, ⚟, ⚠, ⚡, ⚰, ⚱, ⚲, ⚳, ⚴, ⚵, ⚶, ⚷, ⚸, ⚹, ⚺, ⚻, ⚼, ⚽, ⚾, ⚿, ⛀, ⛁, ⛂, ⛃, ⛋, ⛌, ⛍, ⛎, ⛏, ⛐, ⛑, ⛒, ⛓, ⛔, ⛕, ⛖, ⛗, ⛘, ⛙, ⛚, ⛛, ⛜, ⛝, ⛞, ⛟, ⛠, ⛡, ⛢, ⛣, ⛨, ⛩, ⛪, ⛫, ⛬, ⛭, ⛮, ⛯, ⛰, ⛱, ⛲, ⛳, ⛴, ⛵, ⛶, ⛷, ⛸, ⛹, ⛺, ⛻, ⛼, ⛽, ⛾, ⛿ ]
    'vdn': [ ❖, ⌘, ⌃, ⌥, ⎇, ⇧, ⇪, ␣, ⇥, ⇤, ↩, ⌅, ⌤, ⌫, ⌦, ⌧, ⎋, ⌨, ◁, ⌀, ⌖, ⌗, ⏏, ↖, ↘, ⇞, ⇟, ⌚, ⏰, ⏱, ⏲, ⏳, ⌛, ⌜, ⌝⌞⌟, ⍑, ⏩, ⏪, ⏫, ⏬, ⏭, ⏮, ⏯ ]
```

需要注意的是，修改后虽然功能仍然完整，但例如输入 `vi` 后，会优先显示以“vi”开头的单词，而原本以“i”触发的符号会排到后面。

## 让网址输入更友好

在万象输入方案中，输入 `www.` 会触发 URL 规则，但输入类似 `github.*` 时，句号会导致前面的内容直接上屏。为避免这种情况，需要将 `.` 键定义为输入码的一部分。

```YAML
patch:
	speller/alphabet: "zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA1234567890`;/\\."
```

注意：不能直接在其代码后加上 `.` ，因为 `\` 是转义字符会导致 YAML 解析错误。使用 `\\` 才能正确表示反斜杠。

## 自定义短语

如果你认为其自带词库不够用或不符合期望，可以在 `custom_phrase.txt` 中编辑自定义短语。

例如我希望输入以下单词时自动显示首字母大写：

```txt
Windows	windows	1
Notion	notion	1
```

你也可以借此实现输入换行、空格、制表符等特殊内容。

## 邮箱补全

原方案中输入 `@` 后不会上屏，不符合我的使用习惯，因此我编写了一个 Lua 脚本用于邮箱自动补全：

```Lua
-- 邮箱自动补全脚本
-- 功能：输入邮箱前缀后，自动补全常见邮箱后缀
-- 触发方式：输入 @ 后自动触发，或通过 recognizer/patterns/email 匹配
-- 示例：输入 "test@" 后会显示 test@qq.com, test@163.com, test@gmail.com 等候选

local function email_translator(input, seg, env)
    -- 获取触发前缀，默认为 @
    local email_trigger = env.email_trigger or "@"
    
    -- 检查是否包含 @ 符号
    local at_pos = input:find("@")
    if not at_pos then
        return
    end
    
    -- 获取 @ 符号之前的部分（邮箱前缀）
    local prefix = input:sub(1, at_pos - 1)
    
    -- 如果前缀为空，不处理
    if prefix == "" then
        return
    end
    
    -- 设置标签
    local segment = env.engine.context.composition:back()
    segment.tags = segment.tags + Set({ "email" })
    
    -- 获取 @ 符号之后的部分（后缀过滤条件）
    local suffix_filter = input:sub(at_pos + 1)
    
    -- 获取邮箱后缀列表
    local email_suffixes = env.email_suffixes or {
        "@qq.com",
        "@163.com",
        "@126.com",
        "@sina.com",
        "@foxmail.com",
        "@yeah.net",
        "@sohu.com",
        "@vip.qq.com",
        "@vip.163.com",
        "@139.com",
        "@aliyun.com",
        "@vip.sina.com",
        "@icloud.com",
        "@outlook.com",
        "@hotmail.com",
        "@live.com",
        "@gmail.com",
        "@me.com",
        "@yahoo.com",
        "@zoho.com",
        "@aol.com",
        "@naver.com",
        "@mail.ru",
        "@yandex.ru",
        "@gmx.de",
        "@web.de",
        "@proton.me",
    }
    
    -- 如果用户在配置中定义了自定义邮箱后缀，使用自定义的
    local custom_suffixes = env.engine.schema.config:get_list("email_auto_complete/suffixes")
    if custom_suffixes and custom_suffixes:size() > 0 then
        email_suffixes = {}
        for i = 0, custom_suffixes:size() - 1 do
            email_suffixes[i + 1] = custom_suffixes:get_at(i).value
        end
    end
    
    -- 生成候选词
    local has_match = false
    
    -- 首先处理匹配的预设邮箱后缀
    for i, suffix in ipairs(email_suffixes) do
        -- 如果有过滤条件，只显示匹配的后缀（从开头匹配，而非包含匹配）
        if suffix_filter == "" or suffix:sub(2, 1 + #suffix_filter):lower() == suffix_filter:lower() then
            local full_email = prefix .. suffix
            local comment = suffix
            
            -- 使用 yield 生成候选词
            yield(Candidate("email", seg.start, seg._end, full_email, comment))
            has_match = true
        end
    end
    
    -- 如果有过滤条件且没有完全匹配的预设后缀，生成通用后缀
    if suffix_filter ~= "" then
        local common_tlds = {".com", ".cn", ".net", ".org", ".edu", ".gov"}
        
        -- 生成通用后缀候选
        for _, tld in ipairs(common_tlds) do
            local generic_suffix = "@" .. suffix_filter .. tld
            local full_email = prefix .. generic_suffix
            local comment = generic_suffix
            
            -- 检查是否已经在预设列表中，避免重复
            local is_duplicate = false
            for _, suffix in ipairs(email_suffixes) do
                if suffix:lower() == generic_suffix:lower() then
                    is_duplicate = true
                    break
                end
            end
            
            if not is_duplicate then
                yield(Candidate("email", seg.start, seg._end, full_email, comment))
            end
        end
    end
end

return email_translator

```

别忘了在 `wanxiang.custom.yaml` 里注册配置：

```jsx
patch:
  engine/translators/@next: lua_translator@*email_auto_complete
```

另外，你可以在 `email_auto_complete/suffixes` 自定义邮箱后缀，这里不再展开叙述。
