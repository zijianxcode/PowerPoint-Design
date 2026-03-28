# PowerPoint Design

[中文](#中文) | [English](#english)

一个内容驱动的 PPT 风格项目，用来把长访谈整理成结构清楚、适合演示的洞察 deck。  
A content-first PPT-style project for turning long interviews into clean, presentation-ready insight decks.

## 中文

### 项目是什么

`PowerPoint Design` 不是一个随手拼模板的幻灯片项目，也不是网页风格的 landing page。

它是一个内容优先的 deck 系统，核心目标是：
- 把长访谈压缩成可讲、可读、可展示的页面
- 让每一页的版式服务它实际表达的内容关系
- 在统一视觉语言下，保留清楚的层级、节奏和阅读路径

当前 `v1.0.1` 包含一套基于设计行业访谈整理出的 `9` 页行业洞察演示稿。

### 版本 1.0.1

本次更新包含：
- 将访谈整理稿重构为更清晰的行业洞察主线
- 重新打磨文字，减少泛化的 AI 总结腔
- 强化结尾收束页，让核心判断更完整
- 补充 [CHANGELOG.md](./CHANGELOG.md) 记录版本变更

### 版本 1.0.0

这个首个版本包含：
- 一套 `9` 页的访谈洞察 deck
- 基于 Vite 的网页化演示稿实现
- 可复用的页面 archetype 渲染逻辑
- 一套克制的深色演示视觉系统
- 对页数、页型和关键内容结构的测试覆盖

### 设计逻辑

这个项目最重要的原则只有一句：

`内容决定版式`

也就是说，页面不是先套模板，再把文案塞进去，而是先回答这三个问题：

1. 这一页表达的内容关系是什么？
2. 观众应该先看到什么，再理解什么，最后记住什么？
3. 哪种版式最能把这种关系讲清楚？

因此项目里会用到不同的页面 archetype：
- `cover`：开场判断页
- `context`：来源锚点页
- `thesis`：价值迁移页
- `relationship`：关系变化页
- `ranking`：优先级排序页
- `stages`：阶段型工作流页
- `questions`：判断清单页
- `compare`：对照页
- `closing`：结论收束页

这些页型不是为了“看起来丰富”，而是为了让不同内容关系有不同的承载方式。

### 排版与版式技巧

项目当前采用的是一种克制的编辑式排版逻辑，而不是常见的“卡片套卡片”视觉。

核心处理原则：
- `层级先行`：标题、支撑信息、总结句必须一眼分出主次
- `留白组织信息`：留白不是空，而是用来分组和断开信息关系
- `强调色节制使用`：橙色只给编号、关键词和重点锚点
- `固定节奏`：字号、行高、摘要位置尽量稳定，避免每页自说自话
- `单页单主命题`：大多数页面只保留一个真正的视觉主角

当前版本里，排版上特别注意了：
- 标题字距比正文更紧
- 正文和摘要的行距更松，提升可读性
- 密集信息块会主动缩短行长
- 能去掉的边框和装饰尽量去掉，让内容本身承担更多版面重量

### 项目结构

```text
src/
  deck/
    content.js   页面内容与页型数据
    render.js    各类页面的渲染逻辑
  styles/
    theme.css    共享视觉系统与版式规则
  main.js        应用入口
tests/
  slide.test.js  deck 结构与关键内容渲染测试
```

### 如何运行

安装依赖：

```bash
npm install
```

启动开发环境：

```bash
npm run dev
```

运行验证：

```bash
npm test
npm run build
```

### 为什么这个版本有意义

很多 AI 生成的幻灯片有一个共性问题：  
它们会把一种视觉配方重复套在所有内容上，结果页面看起来整齐，但逻辑不清楚。

这个项目想解决的是更难也更关键的问题：
- 如何压缩长材料
- 如何理清学习顺序
- 如何让版式对应内容关系
- 如何在统一视觉下避免每页都长得一样

这也是 `PowerPoint Design` 当前版本持续优化的核心设计目标。

## English

### What This Project Is

`PowerPoint Design` is not a slide-template dump, and it is not a landing-page-style presentation.

It is a content-first deck system designed to:
- compress long interviews into pages that are readable, teachable, and presentable
- match each page layout to the actual information relationship it needs to express
- keep a consistent visual language without flattening every page into the same structure

The current `v1.0.1` package includes a `9`-slide industry-insight presentation distilled from a design-industry interview.

### Version 1.0.1

This update includes:
- a rewritten industry-insight narrative instead of a transcript-style summary
- more deliberate slide copy with less generic AI-generated phrasing
- a clearer closing slide for the final takeaway
- a documented release history in [CHANGELOG.md](./CHANGELOG.md)

### Version 1.0.0

This first release includes:
- a `9`-slide interview insight deck
- a Vite-based web presentation implementation
- reusable rendering logic for multiple slide archetypes
- a restrained dark presentation theme
- test coverage for slide count, page types, and key content structures

### Design Logic

The core rule of this project is simple:

`content decides layout`

In practice, that means a page is not built by forcing text into a ready-made template. Each page starts by answering three questions:

1. What kind of information relationship is this page expressing?
2. What should the audience see first, understand next, and remember last?
3. Which layout makes that relationship easiest to read?

That is why the project uses multiple slide archetypes:
- `cover`: opening judgment page
- `context`: source-anchor page
- `thesis`: value-shift page
- `relationship`: role-change page
- `ranking`: priority-order page
- `stages`: phased workflow page
- `questions`: evaluation checklist page
- `compare`: contrast page
- `closing`: final takeaway page

These page types are not there to make the deck feel visually busy. They exist because different kinds of meaning need different kinds of structure.

### Layout And Typesetting Principles

The visual system follows a restrained editorial logic instead of a “cards on cards” aesthetic.

Core principles:
- `Hierarchy first`: title, supporting information, and takeaway must read with clear priority
- `Whitespace organizes meaning`: spacing is used to group related ideas and separate unrelated ones
- `Accent color with restraint`: orange is reserved for anchors, key words, and priority markers
- `Fixed rhythm`: type sizes, line heights, and takeaway placement stay stable across pages
- `One main idea per page`: most slides keep one true focal point instead of many equal ones

This version pays special attention to:
- tighter tracking in display titles than in body copy
- slightly more relaxed line-height in body text and summaries
- shorter line lengths in dense information blocks
- removing unnecessary borders and chrome so content carries more of the page

### Project Structure

```text
src/
  deck/
    content.js   slide content and page-type data
    render.js    rendering logic for each slide archetype
  styles/
    theme.css    shared visual system and layout rules
  main.js        app entry
tests/
  slide.test.js  structural and rendering tests for the deck
```

### How To Run

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run validation:

```bash
npm test
npm run build
```

### Why This Version Matters

Many AI-generated slide decks fail in the same way:  
they apply one visual recipe to every kind of idea, which makes the pages look neat but weakens the logic.

This project focuses on the harder and more useful problem:
- how to compress long source material
- how to clarify the learning sequence
- how to match layout to meaning
- how to maintain consistency without making every slide feel the same

That remains the main design goal of the current `PowerPoint Design` release.
